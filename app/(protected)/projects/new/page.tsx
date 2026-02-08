"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiClient } from "@/shared/lib/apiClient";
import { useAuthStore } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Enter a project name"),
  status: z.enum(["active", "paused", "completed", "archived"]),
  startDate: z.string().min(1, "Select a start date"),
  dueDate: z.string().min(1, "Select a due date"),
  budget: z.number().min(1000, "Budget must be at least 1,000"),
});

type FormValues = z.infer<typeof schema>;

export default function NewProjectPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      status: "active",
      startDate: "",
      dueDate: "",
      budget: 50000,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    if (!user) return;
    setSubmitting(true);
    const res = await apiClient<{ project: { id: string } }>("/api/projects", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        managerId: user.id,
      }),
    });
    setSubmitting(false);

    if (res.error) {
      toast.error(res.error.message ?? "Failed to create project");
      return;
    }

    toast.success("Project created");
    router.push("/projects");
  });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription className="text-white/60">
          Capture the core timeline and budget before assigning members.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Project name</Label>
            <Input
              id="name"
              placeholder="Launch enterprise portal"
              className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
              {...register("name")}
            />
            {errors.name ? <p className="text-xs text-rose-300">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select
              className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              {...register("status")}
            >
              <option value="active">active</option>
              <option value="paused">paused</option>
              <option value="completed">completed</option>
              <option value="archived">archived</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start date</Label>
            <Input
              id="startDate"
              type="date"
              className="border-white/10 bg-white/10 text-white"
              {...register("startDate")}
            />
            {errors.startDate ? (
              <p className="text-xs text-rose-300">{errors.startDate.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">Due date</Label>
            <Input
              id="dueDate"
              type="date"
              className="border-white/10 bg-white/10 text-white"
              {...register("dueDate")}
            />
            {errors.dueDate ? (
              <p className="text-xs text-rose-300">{errors.dueDate.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              type="number"
              step="100"
              className="border-white/10 bg-white/10 text-white"
              {...register("budget", { valueAsNumber: true })}
            />
            {errors.budget ? (
              <p className="text-xs text-rose-300">{errors.budget.message}</p>
            ) : null}
          </div>
          <div className="md:col-span-2 flex gap-3">
            <Button
              type="submit"
              className="bg-white text-slate-900 hover:bg-white/90"
              disabled={submitting}
            >
              {submitting ? "Creating..." : "Create project"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-white/10 text-white"
              onClick={() => router.push("/projects")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
