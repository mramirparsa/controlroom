"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

const resetDatabase = async () => {
  const databases = await indexedDB.databases();
  for (const db of databases) {
    if (db.name) {
      indexedDB.deleteDatabase(db.name);
    }
  }
  window.location.reload();
};

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const fillDemoCredentials = () => {
    setValue("email", "mr.amirr.1998@gmail.com");
    setValue("password", "Password123!");
    toast.info("Demo credentials filled!");
  };

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    const result = await login(values);
    setSubmitting(false);

    if (!result.ok) {
      toast.error(result.error ?? "Login failed");
      return;
    }

    toast.success("Welcome back!");
    router.push("/dashboard");
  });

  return (
    <main className="login-page animated-gradient relative flex h-screen flex-col overflow-hidden">
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-linear-to-br from-primary/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-linear-to-tl from-accent/25 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-linear-to-br from-chart-5/20 to-transparent blur-3xl" />

        {/* Floating orbs */}
        <div
          className="absolute left-[15%] top-[20%] h-3 w-3 animate-bounce rounded-full bg-primary/60"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute left-[80%] top-[30%] h-2 w-2 animate-bounce rounded-full bg-accent/60"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute left-[25%] top-[70%] h-2 w-2 animate-bounce rounded-full bg-chart-5/60"
          style={{ animationDuration: "3.5s", animationDelay: "1s" }}
        />
        <div
          className="absolute left-[70%] top-[75%] h-3 w-3 animate-bounce rounded-full bg-primary/60"
          style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-6 lg:py-10">
        <div
          className={`grid w-full grid-cols-1 gap-6 transition-all duration-700 lg:grid-cols-2 lg:gap-12 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* Left side - Branding */}
          <div className="hidden flex-col justify-center space-y-5 lg:flex">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14">
                <div
                  className="absolute inset-0 animate-spin rounded-2xl bg-linear-to-br from-primary via-accent to-chart-5 opacity-75 blur-xl"
                  style={{ animationDuration: "8s" }}
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-2xl">
                  <div className="h-7 w-7 rounded-xl bg-linear-to-br from-primary to-accent" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  ControlRoom
                </p>
                <h1 className="text-xl font-bold text-foreground lg:text-3xl">Command Center</h1>
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold leading-tight text-foreground lg:text-5xl">
                Operate your
                <span className="bg-linear-to-r from-primary via-accent to-chart-5 bg-clip-text text-transparent">
                  {" "}
                  product
                </span>
                ,
                <span className="bg-linear-to-r from-accent via-chart-5 to-primary bg-clip-text text-transparent">
                  {" "}
                  team
                </span>
                , and
                <span className="bg-linear-to-r from-chart-5 via-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  growth
                </span>
                .
              </h2>
              <p className="text-base text-muted-foreground lg:text-lg">
                An executive-grade control center for users, projects, tasks, and billing — powered
                by a production-like mock API.
              </p>
            </div>

            {/* Feature pills */}
            <div className="hidden flex-wrap gap-2 lg:flex">
              {[
                { label: "Next.js 16", icon: "⚡" },
                { label: "React Query", icon: "🔄" },
                { label: "MSW + IndexedDB", icon: "💾" },
                { label: "RBAC Ready", icon: "🔐" },
                { label: "TypeScript", icon: "📘" },
              ].map((item) => (
                <span key={item.label} className="feature-tag">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="hidden grid-cols-3 gap-4 lg:grid">
              {[
                {
                  value: "500+",
                  label: "Users",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                },
                {
                  value: "50+",
                  label: "Projects",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                },
                {
                  value: "99.9%",
                  label: "Uptime",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((stat) => (
                <div key={stat.label} className="stats-card p-3 text-center">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={stat.icon}
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex items-center justify-center lg:justify-end">
            <Card className="glass-card w-full max-w-sm overflow-hidden rounded-2xl border-0">
              {/* Decorative top bar */}
              <div className="h-1.5 w-full bg-linear-to-r from-primary via-accent to-chart-5" />

              <CardHeader className="space-y-3 px-5 pb-2 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Welcome back
                    </CardTitle>
                    <CardDescription className="mt-1 text-muted-foreground">
                      Sign in to access your dashboard
                    </CardDescription>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse rounded-xl bg-linear-to-br from-primary to-accent opacity-50 blur-lg" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-xl">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Demo section */}
                <div className="rounded-xl border border-primary/20 bg-linear-to-r from-primary/5 to-accent/5 p-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Try it instantly</p>
                      <p className="text-xs text-muted-foreground">
                        Use demo credentials to explore
                      </p>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      onClick={fillDemoCredentials}
                      className="h-7 rounded-lg bg-linear-to-r from-primary to-accent px-3 text-[11px] font-semibold text-white shadow-lg shadow-primary/20"
                    >
                      Fill demo
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-5 pb-4 pt-3">
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email address
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        placeholder="you@company.com"
                        type="email"
                        className="h-10 rounded-xl border-border/60 bg-background/80 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...register("email")}
                      />
                      <svg
                        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    {errors.email ? (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium text-foreground">
                        Password
                      </Label>
                      <button
                        type="button"
                        className="text-xs font-medium text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        className="h-10 rounded-xl border-border/60 bg-background/80 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...register("password")}
                      />
                      <svg
                        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    {errors.password ? (
                      <p className="text-xs text-destructive">{errors.password.message}</p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    className="btn-premium h-10 w-full rounded-xl text-sm"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Sign in
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    )}
                  </Button>
                </form>

                <div className="mt-3 space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/40" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-card px-3 text-xs text-muted-foreground">or</span>
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <button type="button" className="font-semibold text-primary hover:underline">
                      Create one
                    </button>
                  </p>

                  <button
                    type="button"
                    onClick={resetDatabase}
                    className="flex w-full items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Having issues? Reset database
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-border/20 bg-background/60 py-3 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by{" "}
            <a
              href="https://amirshasti.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary"
            >
              Amirhossein Shasti
            </a>
          </p>
          <span className="hidden text-muted-foreground/40 sm:inline">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mramirparsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://t.me/mramirparsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://instagram.com/__Amirhossein1999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
