import { http, HttpResponse } from "msw";
import {
  addProjectMember,
  createProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  getSession,
  removeProjectMember,
  updateProject,
  findUserById,
} from "@/mocks/db";
import { maybeError, withDelay } from "@/mocks/msw/handlers/utils";
import type { Project, ProjectMember, ProjectStatus } from "@/shared/types/models";

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

export const projectsHandlers = [
  http.get("/api/projects", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 10);
    const q = url.searchParams.get("q") ?? undefined;
    const status = url.searchParams.get("status") as ProjectStatus | null;

    const base = await getProjects({ page, pageSize, q, status: status ?? undefined });

    if (auth.user.role === "owner" || auth.user.role === "admin") {
      return HttpResponse.json(base);
    }

    if (auth.user.role === "manager") {
      const filtered = base.items.filter((project) => project.managerId === auth.user?.id);
      return HttpResponse.json({ items: filtered, total: filtered.length });
    }

    const allowed = await Promise.all(
      base.items.map(async (project) => ({
        project,
        allowed: await canAccessProject(auth.user?.id ?? "", project.id),
      }))
    );

    const items = allowed.filter((item) => item.allowed).map((item) => item.project);
    return HttpResponse.json({ items, total: items.length });
  }),

  http.get("/api/projects/:id", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const project = await getProjectById(params.id as string);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    if (auth.user.role === "owner" || auth.user.role === "admin") {
      return HttpResponse.json({ project });
    }

    const allowed =
      auth.user.role === "manager"
        ? project.managerId === auth.user.id
        : await canAccessProject(auth.user.id, project.id);

    if (!allowed) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return HttpResponse.json({ project });
  }),

  http.get("/api/projects/:id/members", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const project = await getProjectById(params.id as string);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    if (auth.user.role === "owner" || auth.user.role === "admin") {
      return HttpResponse.json({ members: await getProjectMembers(project.id) });
    }

    const allowed =
      auth.user.role === "manager"
        ? project.managerId === auth.user.id
        : await canAccessProject(auth.user.id, project.id);

    if (!allowed) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return HttpResponse.json({ members: await getProjectMembers(project.id) });
  }),

  http.post("/api/projects", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    if (auth.user.role === "member") {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = (await request.json()) as Omit<Project, "id" | "createdAt">;
    const project = await createProject(body);
    return HttpResponse.json({ project }, { status: 201 });
  }),

  http.patch("/api/projects/:id", async ({ request, params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const project = await getProjectById(params.id as string);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    const canEdit =
      auth.user.role === "owner" ||
      auth.user.role === "admin" ||
      (auth.user.role === "manager" && project.managerId === auth.user.id);

    if (!canEdit) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const patch = (await request.json()) as Partial<Project>;
    const next = await updateProject(project.id, patch);
    return HttpResponse.json({ project: next });
  }),

  http.post("/api/projects/:id/members", async ({ request, params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const project = await getProjectById(params.id as string);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    const canEdit =
      auth.user.role === "owner" ||
      auth.user.role === "admin" ||
      (auth.user.role === "manager" && project.managerId === auth.user.id);

    if (!canEdit) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = (await request.json()) as ProjectMember;
    const member = await addProjectMember(body);
    return HttpResponse.json({ member }, { status: 201 });
  }),

  http.delete("/api/projects/:id/members/:userId", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await getAuthedUser();
    if (auth.error || !auth.user) return auth.error;

    const project = await getProjectById(params.id as string);
    if (!project) {
      return HttpResponse.json({ message: "Project not found" }, { status: 404 });
    }

    const canEdit =
      auth.user.role === "owner" ||
      auth.user.role === "admin" ||
      (auth.user.role === "manager" && project.managerId === auth.user.id);

    if (!canEdit) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const removed = await removeProjectMember(params.id as string, params.userId as string);
    return HttpResponse.json({ removed });
  }),
];
