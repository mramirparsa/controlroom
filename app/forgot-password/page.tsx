"use client";

import { useState } from "react";
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

const schema = z.object({
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    const res = await apiClient<{ ok: boolean; token?: string }>("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: values.email }),
    });
    setSubmitting(false);

    if (res.error) {
      toast.error(res.error.message ?? "Request failed");
      return;
    }

    setToken(res.data?.token ?? null);
    toast.success("If the account exists, a reset link has been generated.");
  });

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-6">
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle>Reset your password</CardTitle>
            <CardDescription className="text-white/60">
              We will generate a secure reset link. Check your inbox or use the dev link below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-sm text-rose-300">{errors.email.message}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-slate-900 hover:bg-white/90"
                disabled={submitting}
              >
                {submitting ? "Generating..." : "Generate reset link"}
              </Button>
            </form>

            {token ? (
              <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Dev reset link:{" "}
                <Link className="text-white underline" href={`/reset-password?token=${token}`}>
                  Open reset page
                </Link>
              </div>
            ) : null}

            <div className="mt-6 text-center text-sm text-white/60">
              Remembered your password?{" "}
              <Link href="/login" className="text-white underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
