import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@/shared/types/models";
import { findUserById, updateUser } from "@/app/api/users/store";

export const dynamic = "force-dynamic";

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

const normalizeSession = (value: string) => {
  const raw = decodeURIComponent(value);
  const withoutPrefix = raw.startsWith("j:") ? raw.slice(2) : raw;
  const trimmed =
    withoutPrefix.startsWith('"') && withoutPrefix.endsWith('"')
      ? withoutPrefix.slice(1, -1)
      : withoutPrefix;
  return trimmed;
};

const getSessionUser = (request: NextRequest) => {
  const value = request.cookies.get("controlroom_session")?.value;
  if (!value) return null;

  try {
    const session = JSON.parse(normalizeSession(value)) as SessionPayload;
    return session?.user ?? null;
  } catch {
    return null;
  }
};

const requireAdmin = (request: NextRequest) => {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (user.role !== "owner" && user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return null;
};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const { id } = await context.params;
  const user = findUserById(id);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const patch = (await request.json().catch(() => null)) as Partial<User> | null;
  if (!patch) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const { id } = await context.params;
  const user = updateUser(id, patch);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}
