import { NextResponse } from "next/server";
import type { User } from "@/shared/types/models";
import { findUserById, updateUser } from "@/app/api/users/store";

type SessionPayload = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
  };
};

const getSessionUser = (request: Request) => {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(/controlroom_session=([^;]+)/);
  if (!match?.[1]) return null;

  const raw = decodeURIComponent(match[1]);
  const session = JSON.parse(raw) as SessionPayload;
  return session?.user ?? null;
};

const requireAdmin = (request: Request) => {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (user.role !== "owner" && user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return null;
};

export async function GET(request: Request, context: { params: { id: string } }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const user = findUserById(context.params.id);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const patch = (await request.json().catch(() => null)) as Partial<User> | null;
  if (!patch) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const user = updateUser(context.params.id, patch);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}
