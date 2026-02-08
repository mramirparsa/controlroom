"use client";

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Task, TaskPriority, TaskStatus } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ViewMode = "kanban" | "list";

export default function TasksPage() {
  const queryClient = useQueryClient();
  const [view, setView] = useState<ViewMode>("kanban");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "">("");
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | "">("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["tasks", search, statusFilter, priorityFilter],
    queryFn: async () => {
      const params = new URLSearchParams({ page: "1", pageSize: "60" });
      if (search) params.set("q", search);
      if (statusFilter) params.set("status", statusFilter);
      if (priorityFilter) params.set("priority", priorityFilter);

      const res = await apiClient<{ items: Task[]; total: number }>(`/api/tasks?${params}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load tasks");
      }
      return res.data.items;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (payload: { id: string; patch: Partial<Task> }) => {
      const res = await apiClient<{ task: Task }>(`/api/tasks/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload.patch),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to update task");
      }
      return res.data.task;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const grouped = useMemo(() => {
    const todos = data?.filter((task) => task.status === "todo") ?? [];
    const doing = data?.filter((task) => task.status === "doing") ?? [];
    const done = data?.filter((task) => task.status === "done") ?? [];
    return { todo: todos, doing, done };
  }, [data]);

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle>Tasks</CardTitle>
          <p className="text-sm text-white/60">Kanban + list views with live updates.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="Search tasks..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40"
          />
          <select
            className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as TaskStatus | "")}
          >
            <option value="">All statuses</option>
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </select>
          <select
            className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
            value={priorityFilter}
            onChange={(event) => setPriorityFilter(event.target.value as TaskPriority | "")}
          >
            <option value="">All priorities</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="urgent">urgent</option>
          </select>
          <Button
            variant={view === "kanban" ? "secondary" : "outline"}
            className="border-white/10 text-white"
            onClick={() => setView("kanban")}
          >
            Kanban
          </Button>
          <Button
            variant={view === "list" ? "secondary" : "outline"}
            className="border-white/10 text-white"
            onClick={() => setView("list")}
          >
            List
          </Button>
        </div>
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
        ) : view === "kanban" ? (
          <div className="grid gap-4 md:grid-cols-3">
            {(["todo", "doing", "done"] as TaskStatus[]).map((status) => (
              <div key={status} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold capitalize">{status}</p>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {grouped[status].length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {grouped[status].map((task) => (
                    <div
                      key={task.id}
                      className="rounded-lg border border-white/10 bg-slate-950/60 p-3"
                    >
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-white/60">{task.priority} priority</p>
                      <select
                        className="mt-3 h-7 rounded-md border border-white/10 bg-slate-950/60 px-2 text-xs"
                        value={task.status}
                        onChange={(event) =>
                          updateMutation.mutate({
                            id: task.id,
                            patch: { status: event.target.value as TaskStatus },
                          })
                        }
                      >
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                    <TableCell className="capitalize">{task.status}</TableCell>
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
