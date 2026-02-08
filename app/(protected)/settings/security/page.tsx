"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiClient } from "@/shared/lib/apiClient";
import { useAuthStore } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export default function SecuritySettingsPage() {
  const user = useAuthStore((state) => state.user);
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
    if (!user) return;
    setSubmitting(true);

    const tokenRes = await apiClient<{ ok: boolean; token?: string }>("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: user.email }),
    });

    if (tokenRes.error || !tokenRes.data?.token) {
      setSubmitting(false);
      toast.error(tokenRes.error?.message ?? "Failed to initiate reset");
      return;
    }

    const resetRes = await apiClient<{ ok: boolean }>("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token: tokenRes.data.token, password: values.password }),
    });

    setSubmitting(false);

    if (resetRes.error) {
      toast.error(resetRes.error.message ?? "Failed to update password");
      return;
    }

    toast.success("Password updated");
  });

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <Input
                id="password"
                type="password"
                className="border-white/10 bg-white/10 text-white"
                {...register("password")}
              />
              {errors.password ? (
                <p className="text-xs text-rose-300">{errors.password.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                type="password"
                className="border-white/10 bg-white/10 text-white"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword ? (
                <p className="text-xs text-rose-300">{errors.confirmPassword.message}</p>
              ) : null}
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="bg-white text-slate-900 hover:bg-white/90"
                disabled={submitting}
              >
                {submitting ? "Updating..." : "Update password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle>Sessions</CardTitle>
        </CardHeader>
        <CardContent className="text-white/60">
          Active sessions are simulated for demo purposes. Use Log out to end the current session.
        </CardContent>
      </Card>
    </div>
  );
}
