import type { ApiResponse } from "@/shared/types/models";

type ApiError = {
  status: number;
  message: string;
  code?: string;
};

const mapError = (status: number, message: string): ApiError => {
  const codeMap: Record<number, string> = {
    401: "UNAUTHORIZED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    422: "UNPROCESSABLE_ENTITY",
    429: "TOO_MANY_REQUESTS",
    500: "SERVER_ERROR",
  };

  return { status, message, code: codeMap[status] };
};

const baseUrl = "";

export const apiClient = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<ApiResponse<T>> => {
  const res = await fetch(`${baseUrl}${input}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const message = (await res.json().catch(() => null))?.message ?? res.statusText;
    return { data: null, error: mapError(res.status, message) };
  }

  const data = (await res.json().catch(() => null)) as T | null;
  return { data, error: null };
};
