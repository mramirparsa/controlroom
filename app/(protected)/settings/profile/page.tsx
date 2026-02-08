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
  name: z.string().min(2, "Enter your name"),
  timezone: z.string().min(2, "Enter a timezone"),
  avatarUrl: z.string().url("Enter a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export default function ProfileSettingsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", timezone: "", avatarUrl: "" },
  });

  useEffect(() => {
    const stored = localStorage.getItem("controlroom.profile");
    if (stored) {
      reset(JSON.parse(stored));
    }
  }, [reset]);

  const onSubmit = handleSubmit((values) => {
    localStorage.setItem("controlroom.profile", JSON.stringify(values));
    toast.success("Profile saved");
  });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              className="border-white/10 bg-white/10 text-white"
              {...register("name")}
            />
            {errors.name ? <p className="text-xs text-rose-300">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Input
              id="timezone"
              placeholder="UTC+1"
              className="border-white/10 bg-white/10 text-white"
              {...register("timezone")}
            />
            {errors.timezone ? (
              <p className="text-xs text-rose-300">{errors.timezone.message}</p>
            ) : null}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="avatarUrl">Avatar URL</Label>
            <Input
              id="avatarUrl"
              placeholder="https://"
              className="border-white/10 bg-white/10 text-white"
              {...register("avatarUrl")}
            />
            {errors.avatarUrl ? (
              <p className="text-xs text-rose-300">{errors.avatarUrl.message}</p>
            ) : null}
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
