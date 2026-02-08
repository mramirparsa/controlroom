import { http, HttpResponse } from "msw";
import { createUser, findUserById, getSession, getUsers, updateUser } from "@/mocks/db";
import { maybeError, withDelay } from "@/mocks/msw/handlers/utils";
import type { Role, User } from "@/shared/types/models";

const requireAdmin = async () => {
  const session = await getSession();
  if (!session) {
    return HttpResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const user = await findUserById(session.userId);
  if (!user || (user.role !== "owner" && user.role !== "admin")) {
    return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return null;
};

export const usersHandlers = [
  http.get("/api/users", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const authError = await requireAdmin();
    if (authError) return authError;

    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 10);
    const q = url.searchParams.get("q") ?? undefined;
    const role = url.searchParams.get("role") as Role | null;
    const status = url.searchParams.get("status") as User["status"] | null;

    const result = await getUsers({
      page,
      pageSize,
      q,
      role: role ?? undefined,
      status: status ?? undefined,
    });

    return HttpResponse.json(result);
  }),

  http.post("/api/users", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const authError = await requireAdmin();
    if (authError) return authError;

    const body = (await request.json()) as Omit<User, "id" | "createdAt">;
    const user = await createUser(body);
    return HttpResponse.json({ user }, { status: 201 });
  }),

  http.get("/api/users/:id", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const authError = await requireAdmin();
    if (authError) return authError;

    const user = await findUserById(params.id as string);
    if (!user) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }

    return HttpResponse.json({ user });
  }),

  http.patch("/api/users/:id", async ({ request, params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const authError = await requireAdmin();
    if (authError) return authError;

    const patch = (await request.json()) as Partial<User>;
    const user = await updateUser(params.id as string, patch);
    if (!user) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }

    return HttpResponse.json({ user });
  }),
];
