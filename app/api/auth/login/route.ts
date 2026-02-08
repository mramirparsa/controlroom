import { NextResponse } from "next/server";

const DEMO_EMAIL = "mr.amirr.1998@gmail.com";
const DEMO_PASSWORD = "Password123!";
const DEMO_USER = {
  id: "demo-user",
  name: "Amirhossein",
  email: DEMO_EMAIL,
  role: "owner",
  status: "active",
  createdAt: new Date().toISOString(),
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    password?: string;
  } | null;

  const email = body?.email?.toLowerCase().trim();
  const password = body?.password ?? "";

  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = crypto.randomUUID();
  const session = { token, user: DEMO_USER };

  const response = NextResponse.json({ user: DEMO_USER, token });
  response.cookies.set("controlroom_session", JSON.stringify(session), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
