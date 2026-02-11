import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { Role, User, UserStatus } from "@/shared/types/models";
import { createUser, listUsers } from "@/app/api/users/store";

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

const getSessionUser = () => {
  const value = cookies().get("controlroom_session")?.value;
  if (!value) return null;

  try {
    const session = JSON.parse(value) as SessionPayload;
    return session?.user ?? null;
  } catch {
    return null;
  }
};

const requireAdmin = () => {
  const user = getSessionUser();
  if (!user) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (user.role !== "owner" && user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return null;
};

export async function GET(request: Request) {
  const authError = requireAdmin();
  if (authError) return authError;

  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? 1);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 10);
  const q = url.searchParams.get("q") ?? undefined;
  const role = url.searchParams.get("role") as Role | null;
  const status = url.searchParams.get("status") as UserStatus | null;

  const result = listUsers({
    page,
    pageSize,
    q,
    role: role ?? undefined,
    status: status ?? undefined,
  });

  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const authError = requireAdmin();
  if (authError) return authError;

  const body = (await request.json().catch(() => null)) as Omit<User, "id" | "createdAt"> | null;

  if (!body?.name || !body?.email || !body?.role || !body?.status) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const user = createUser(body);
  return NextResponse.json({ user }, { status: 201 });
}
