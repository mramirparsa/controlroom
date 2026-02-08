"use client";

import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/shared/lib/queryClient";
import { AuthProvider } from "@/features/auth/provider";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(() => createQueryClient());
  const [mswReady, setMswReady] = useState(process.env.NODE_ENV !== "development");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@/mocks/msw/browser").then(({ worker }) => {
        worker.start({
          onUnhandledRequest: "bypass",
        });
        setMswReady(true);
      });
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      {mswReady ? (
        <AuthProvider>
          {children}
          <Toaster position="top-right" richColors />
        </AuthProvider>
      ) : null}
    </QueryClientProvider>
  );
};
