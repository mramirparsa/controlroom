import { create } from "zustand";
import { apiClient } from "@/shared/lib/apiClient";
import type { User } from "@/shared/types/models";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrating: boolean;
  error: string | null;
  login: (payload: { email: string; password: string }) => Promise<{
    ok: boolean;
    error?: string;
  }>;
  logout: () => Promise<void>;
  hydrateSession: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isHydrating: true,
  error: null,
  login: async (payload) => {
    const res = await apiClient<{ user: User; token: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.error || !res.data) {
      const message = res.error?.message ?? "Login failed";
      set({ error: message, isAuthenticated: false, user: null, token: null });
      return { ok: false, error: message };
    }

    set({
      user: res.data.user,
      token: res.data.token,
      isAuthenticated: true,
      error: null,
    });

    return { ok: true };
  },
  logout: async () => {
    await apiClient("/api/auth/logout", { method: "POST" });
    set({ user: null, token: null, isAuthenticated: false, error: null });
  },
  hydrateSession: async () => {
    const res = await apiClient<{ user: User; session: { token: string } }>("/api/me");
    if (res.error || !res.data) {
      set({ user: null, token: null, isAuthenticated: false, isHydrating: false });
      return;
    }

    set({
      user: res.data.user,
      token: res.data.session.token,
      isAuthenticated: true,
      isHydrating: false,
    });
  },
}));
