import { http, HttpResponse } from "msw";
import {
  createTask,
  findUserById,
  getProjectById,
  getProjectMembers,
  getSession,
  getTaskById,
  getTasks,
  updateTask,
} from "@/mocks/db";
import { maybeError, withDelay } from "@/mocks/msw/handlers/utils";
import type { Task, TaskPriority, TaskStatus } from "@/shared/types/models";

const getAuthedUser = async () => {
  const session = await getSession();
  if (!session) {
    return { error: HttpResponse.json({ message: "Not authenticated" }, { status: 401 }) };
  }
  const user = await findUserById(session.userId);
  if (!user) {
    return { error: HttpResponse.json({ message: "User not found" }, { status: 404 }) };
  }
  return { user };
};

const canAccessProject = async (userId: string, projectId: string) => {
  const members = await getProjectMembers(projectId);
  return members.some((member) => member.userId === userId);
};

export const tasksHandlers = [
  http.get("/api/tasks", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 10);
    const q = url.searchParams.get("q") ?? undefined;
    const status = url.searchParams.get("status") as TaskStatus | null;
    const priority = url.searchParams.get("priority") as TaskPriority | null;
    const projectId = url.searchParams.get("projectId") ?? undefined;

    const base = await getTasks({
      page,
      pageSize,
      q,
      status: status ?? undefined,
      priority: priority ?? undefined,
      projectId,
    });

    if (auth.user.role === "owner" || auth.user.role === "admin") {
      return HttpResponse.json(base);
    }

    if (auth.user.role === "manager") {
      const allowed = await Promise.all(
        base.items.map(async (task) => {
          const project = await getProjectById(task.projectId);
          return project?.managerId === auth.user?.id;
        })
      );
      const items = base.items.filter((_, index) => allowed[index]);
      return HttpResponse.json({ items, total: items.length });
    }

    const items = base.items.filter((task) => task.assigneeId === auth.user?.id);
    return HttpResponse.json({ items, total: items.length });
  }),

  http.get("/api/tasks/:id", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const task = await getTaskById(params.id as string);
    if (!task) {
      return HttpResponse.json({ message: "Task not found" }, { status: 404 });
    }

    if (auth.user.role === "owner" || auth.user.role === "admin") {
      return HttpResponse.json({ task });
    }

    const project = await getProjectById(task.projectId);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    const allowed =
      auth.user.role === "manager"
        ? project.managerId === auth.user.id
        : task.assigneeId === auth.user.id || (await canAccessProject(auth.user.id, project.id));

    if (!allowed) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return HttpResponse.json({ task });
  }),

  http.post("/api/tasks", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    if (auth.user.role === "member") {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = (await request.json()) as Omit<Task, "id" | "createdAt">;
    const task = await createTask(body);
    return HttpResponse.json({ task }, { status: 201 });
  }),

  http.patch("/api/tasks/:id", async ({ request, params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const task = await getTaskById(params.id as string);
    if (!task) {
      return HttpResponse.json({ message: "Task not found" }, { status: 404 });
    }

    if (auth.user.role === "member" && task.assigneeId !== auth.user.id) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const patch = (await request.json()) as Partial<Task>;
    const next = await updateTask(task.id, patch);
    return HttpResponse.json({ task: next });
  }),
];
