"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/store";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const hydrateSession = useAuthStore((state) => state.hydrateSession);

  useEffect(() => {
    hydrateSession();
  }, [hydrateSession]);

  return <>{children}</>;
};
