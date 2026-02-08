"use client";

import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Enter organization name"),
  plan: z.string().min(2, "Enter plan"),
  seats: z.number().min(1, "Seats must be at least 1"),
});

type FormValues = z.infer<typeof schema>;

export default function OrganizationSettingsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", plan: "Scale", seats: 25 },
  });

  useEffect(() => {
    const stored = localStorage.getItem("controlroom.organization");
    if (stored) {
      reset(JSON.parse(stored));
    }
  }, [reset]);

  const onSubmit = handleSubmit((values) => {
    localStorage.setItem("controlroom.organization", JSON.stringify(values));
    toast.success("Organization settings updated");
  });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Organization</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Organization name</Label>
            <Input
              id="name"
              className="border-white/10 bg-white/10 text-white"
              {...register("name")}
            />
            {errors.name ? <p className="text-xs text-rose-300">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Plan</Label>
            <Input
              id="plan"
              className="border-white/10 bg-white/10 text-white"
              {...register("plan")}
            />
            {errors.plan ? <p className="text-xs text-rose-300">{errors.plan.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="seats">Seats</Label>
            <Input
              id="seats"
              type="number"
              className="border-white/10 bg-white/10 text-white"
              {...register("seats", { valueAsNumber: true })}
            />
            {errors.seats ? <p className="text-xs text-rose-300">{errors.seats.message}</p> : null}
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="bg-white text-slate-900 hover:bg-white/90">
              Save changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
