import { http, HttpResponse } from "msw";
import {
  clearSession,
  createSession,
  createResetToken,
  createUser,
  findUserByEmail,
  findUserById,
  getFailedAttempts,
  getPasswordForEmail,
  getSession,
  incrementFailedAttempt,
  resetFailedAttempts,
  setPasswordForEmail,
  consumeResetToken,
} from "@/mocks/db";
import { withDelay, maybeError } from "@/mocks/msw/handlers/utils";
import type { User } from "@/shared/types/models";

const PASSWORD = "Password123!";

export const authHandlers = [
  http.post("/api/auth/login", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.toLowerCase();

    if (!email || !body.password) {
      return HttpResponse.json({ message: "Missing credentials" }, { status: 422 });
    }

    const failed = await getFailedAttempts(email);
    if (failed >= 5) {
      return HttpResponse.json({ message: "Too many attempts" }, { status: 429 });
    }

    const user = await findUserByEmail(email);
    const storedPassword = await getPasswordForEmail(email);
    const passwordToCheck = storedPassword ?? PASSWORD;

    if (!user || body.password !== passwordToCheck) {
      const next = await incrementFailedAttempt(email);
      return HttpResponse.json(
        { message: "Invalid email or password", attempts: next },
        { status: 401 }
      );
    }

    await resetFailedAttempts(email);
    const session = await createSession(user.id);

    return HttpResponse.json({
      user,
      token: session.token,
    });
  }),

  http.post("/api/auth/register", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const body = (await request.json()) as Pick<User, "name" | "email" | "role"> & {
      password: string;
    };

    const existing = await findUserByEmail(body.email);
    if (existing) {
      return HttpResponse.json({ message: "Email already exists" }, { status: 422 });
    }

    if (!body.password || body.password.length < 8) {
      return HttpResponse.json({ message: "Password too short" }, { status: 422 });
    }

    const newUser = await createUser({
      name: body.name,
      email: body.email.toLowerCase(),
      role: body.role ?? "member",
      status: "active",
    });

    await setPasswordForEmail(body.email, body.password);

    return HttpResponse.json({ user: newUser }, { status: 201 });
  }),

  http.post("/api/auth/logout", async () => {
    await withDelay();
    await clearSession();
    return HttpResponse.json({ ok: true });
  }),

  http.post("/api/auth/forgot-password", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const body = (await request.json()) as { email?: string };
    const email = body.email?.toLowerCase();
    if (!email) {
      return HttpResponse.json({ message: "Email is required" }, { status: 422 });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return HttpResponse.json({ ok: true });
    }

    const token = await createResetToken(email);
    return HttpResponse.json({ ok: true, token });
  }),

  http.post("/api/auth/reset-password", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const body = (await request.json()) as { token?: string; password?: string };
    if (!body.token || !body.password || body.password.length < 8) {
      return HttpResponse.json({ message: "Invalid reset request" }, { status: 422 });
    }

    const email = await consumeResetToken(body.token);
    if (!email) {
      return HttpResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    await setPasswordForEmail(email, body.password);
    return HttpResponse.json({ ok: true });
  }),

  http.get("/api/me", async () => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const session = await getSession();
    if (!session) {
      return HttpResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const user = await findUserById(session.userId);
    if (!user) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }

    return HttpResponse.json({ session, user });
  }),
];
