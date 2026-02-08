"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { apiClient } from "@/shared/lib/apiClient";
import type { Role, User } from "@/shared/types/models";
import { useAuthStore } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roleOptions: Role[] = ["owner", "admin", "manager", "member"];

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const authUser = useAuthStore((state) => state.user);
  const [overrides, setOverrides] = useState<{
    role?: Role;
    status?: User["status"];
  }>({});

  useEffect(() => {
    if (authUser && authUser.role !== "owner" && authUser.role !== "admin") {
      router.replace("/403");
    }
  }, [authUser, router]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", params.id],
    queryFn: async () => {
      const res = await apiClient<{ user: User }>(`/api/users/${params.id}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to fetch user");
      }
      return res.data.user;
    },
  });

  const role = overrides.role ?? data?.role ?? "member";
  const status = overrides.status ?? data?.status ?? "active";

  const updateMutation = useMutation({
    mutationFn: async (patch: Partial<User>) => {
      const res = await apiClient<{ user: User }>(`/api/users/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(patch),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Update failed");
      }
      return res.data.user;
    },
    onSuccess: () => {
      toast.success("User updated");
      setOverrides({});
      queryClient.invalidateQueries({ queryKey: ["user", params.id] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  if (authUser && authUser.role !== "owner" && authUser.role !== "admin") {
    return null;
  }

  if (isLoading) {
    return <div className="text-white/60">Loading user...</div>;
  }

  if (isError || !data) {
    return <div className="text-white/60">Failed to load user.</div>;
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>User profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-white/60">Name</p>
          <p className="text-lg font-semibold">{data.name}</p>
        </div>
        <div>
          <p className="text-sm text-white/60">Email</p>
          <p>{data.email}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-white/60">Role</p>
            <select
              className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              value={role}
              onChange={(event) =>
                setOverrides((current) => ({
                  ...current,
                  role: event.target.value as Role,
                }))
              }
            >
              {roleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-white/60">Status</p>
            <select
              className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              value={status}
              onChange={(event) =>
                setOverrides((current) => ({
                  ...current,
                  status: event.target.value as User["status"],
                }))
              }
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            className="bg-white text-slate-900 hover:bg-white/90"
            onClick={() => updateMutation.mutate({ role, status })}
            disabled={updateMutation.isPending}
          >
            Save changes
          </Button>
          <Button
            variant="outline"
            className="border-white/10 text-white"
            onClick={() => router.push("/users")}
          >
            Back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
