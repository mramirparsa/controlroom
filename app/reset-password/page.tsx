"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "sonner";
import { apiClient } from "@/shared/lib/apiClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Suspense } from "react";

const schema = z
  .object({
    password: z.string().min(8, "Minimum 8 characters"),
    confirmPassword: z.string().min(8, "Minimum 8 characters"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function ResetPasswordPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordPage />
    </Suspense>
  );
}

function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    if (!token) {
      toast.error("Reset token is missing");
      return;
    }

    setSubmitting(true);
    const res = await apiClient<{ ok: boolean }>("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password: values.password }),
    });
    setSubmitting(false);

    if (res.error) {
      toast.error(res.error.message ?? "Reset failed");
      return;
    }

    toast.success("Password updated. Please sign in.");
    router.push("/login");
  });

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-6">
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle>Set a new password</CardTitle>
            <CardDescription className="text-white/60">
              Choose a strong password to secure your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={onSubmit}>
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
                {submitting ? "Updating..." : "Update password"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-white/60">
              Return to{" "}
              <Link href="/login" className="text-white underline">
                sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
