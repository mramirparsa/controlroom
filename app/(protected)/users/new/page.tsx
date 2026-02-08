"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useAuthStore } from "@/features/auth/store";
import { apiClient } from "@/shared/lib/apiClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Enter a name"),
  email: z.string().email("Enter a valid email"),
  role: z.enum(["owner", "admin", "manager", "member"]),
  status: z.enum(["active", "inactive"]),
});

type FormValues = z.infer<typeof schema>;

export default function NewUserPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user && user.role !== "owner" && user.role !== "admin") {
      router.replace("/403");
    }
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", role: "member", status: "active" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    const res = await apiClient<{ user: { id: string } }>("/api/users", {
      method: "POST",
      body: JSON.stringify(values),
    });
    setSubmitting(false);

    if (res.error) {
      toast.error(res.error.message ?? "Failed to create user");
      return;
    }

    toast.success("User created");
    router.push("/users");
  });

  if (user && user.role !== "owner" && user.role !== "admin") {
    return null;
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Create user</CardTitle>
        <CardDescription className="text-white/60">
          Add a new team member and set their role.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Alex Morgan"
              className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
              {...register("name")}
            />
            {errors.name ? <p className="text-xs text-rose-300">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="alex@company.com"
              className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
              {...register("email")}
            />
            {errors.email ? <p className="text-xs text-rose-300">{errors.email.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <select
              className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              {...register("role")}
            >
              <option value="owner">owner</option>
              <option value="admin">admin</option>
              <option value="manager">manager</option>
              <option value="member">member</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select
              className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              {...register("status")}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <Button type="submit" className="bg-white text-slate-900 hover:bg-white/90">
              {submitting ? "Creating..." : "Create user"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-white/10 text-white"
              onClick={() => router.push("/users")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
