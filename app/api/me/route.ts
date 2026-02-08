import { NextResponse } from "next/server";

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

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(/controlroom_session=([^;]+)/);

  if (!match?.[1]) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const raw = decodeURIComponent(match[1]);
  const session = JSON.parse(raw) as SessionPayload;

  if (!session?.token || !session?.user) {
    return NextResponse.json({ message: "Invalid session" }, { status: 401 });
  }

  return NextResponse.json({ user: session.user, session: { token: session.token } });
}
