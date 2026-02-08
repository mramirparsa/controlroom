"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiClient } from "@/shared/lib/apiClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z
  .object({
    name: z.string().min(2, "Enter your name"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Minimum 8 characters"),
    confirmPassword: z.string().min(8, "Minimum 8 characters"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    const res = await apiClient<{ user: { id: string } }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name: values.name, email: values.email, password: values.password }),
    });
    setSubmitting(false);

    if (res.error) {
      toast.error(res.error.message ?? "Registration failed");
      return;
    }

    toast.success("Account created. Please sign in.");
    router.push("/login");
  });

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 p-2">
                <div className="h-full w-full rounded-xl bg-linear-to-br from-indigo-400 to-cyan-400" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">ControlRoom</p>
                <h1 className="text-3xl font-semibold">Create your workspace access.</h1>
              </div>
            </div>
            <p className="text-lg text-white/70">
              Set up your profile and start monitoring users, projects, and billing in minutes.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/10 text-white">
                Security-first
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                Role-based access
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                API ready
              </Badge>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 text-white shadow-2xl">
            <CardHeader>
              <CardTitle>Create account</CardTitle>
              <CardDescription className="text-white/60">
                Use your work email. Password must be at least 8 characters.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    placeholder="Jordan Smith"
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="text-sm text-rose-300">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="you@company.com"
                    type="email"
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-sm text-rose-300">{errors.email.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                    {...register("password")}
                  />
                  {errors.password ? (
                    <p className="text-sm text-rose-300">{errors.password.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword ? (
                    <p className="text-sm text-rose-300">{errors.confirmPassword.message}</p>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-slate-900 hover:bg-white/90"
                  disabled={submitting}
                >
                  {submitting ? "Creating..." : "Create account"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
