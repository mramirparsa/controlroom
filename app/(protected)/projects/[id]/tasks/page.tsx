"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Task, TaskStatus } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProjectTasksPage() {
  const params = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["project-tasks", params.id],
    queryFn: async () => {
      const res = await apiClient<{ items: Task[]; total: number }>(
        `/api/tasks?projectId=${params.id}`
      );
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load tasks");
      }
      return res.data.items;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (payload: { id: string; status: TaskStatus }) => {
      const res = await apiClient<{ task: Task }>(`/api/tasks/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: payload.status }),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to update task");
      }
      return res.data.task;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["project-tasks", params.id] }),
  });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Project tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
            Loading tasks...
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold">Failed to load tasks</p>
            <Button className="mt-4" onClick={() => refetch()}>
              Retry
            </Button>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>
                      <select
                        className="h-8 rounded-md border border-white/10 bg-slate-950/60 px-2 text-xs"
                        value={task.status}
                        onChange={(event) =>
                          updateMutation.mutate({
                            id: task.id,
                            status: event.target.value as TaskStatus,
                          })
                        }
                      >
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                      </select>
                    </TableCell>
                    <TableCell className="capitalize">{task.priority}</TableCell>
                    <TableCell>
                      {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
