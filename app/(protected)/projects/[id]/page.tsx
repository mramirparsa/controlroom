"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Project, ProjectMember, Task } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TabKey = "overview" | "members" | "activity" | "tasks";

export default function ProjectDetailPage() {
  const params = useParams();
  const [tab, setTab] = useState<TabKey>("overview");

  const { data: project } = useQuery({
    queryKey: ["project", params.id],
    queryFn: async () => {
      const res = await apiClient<{ project: Project }>(`/api/projects/${params.id}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load project");
      }
      return res.data.project;
    },
  });

  const { data: members } = useQuery({
    queryKey: ["project-members", params.id],
    queryFn: async () => {
      const res = await apiClient<{ members: ProjectMember[] }>(
        `/api/projects/${params.id}/members`
      );
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load members");
      }
      return res.data.members;
    },
  });

  const { data: tasks } = useQuery({
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

  if (!project) {
    return <div className="text-white/60">Loading project...</div>;
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle>{project.name}</CardTitle>
          <p className="text-sm text-white/60">Project intelligence and delivery insights.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["overview", "members", "activity", "tasks"] as TabKey[]).map((key) => (
            <Button
              key={key}
              variant={tab === key ? "secondary" : "outline"}
              className="border-white/10 text-white"
              onClick={() => setTab(key)}
            >
              {key}
            </Button>
          ))}
          <Button asChild variant="outline" className="border-white/10 text-white">
            <Link href={`/projects/${project.id}/tasks`}>Open tasks</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {tab === "overview" ? (
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Status</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-semibold capitalize">
                {project.status}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Budget</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-semibold">
                ${project.budget.toLocaleString()}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Start</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-semibold">
                {new Date(project.startDate).toLocaleDateString()}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Due</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-semibold">
                {new Date(project.dueDate).toLocaleDateString()}
              </CardContent>
            </Card>
          </div>
        ) : null}

        {tab === "members" ? (
          <div className="rounded-xl border border-white/10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members?.map((member) => (
                  <TableRow key={member.userId}>
                    <TableCell>{member.userId}</TableCell>
                    <TableCell className="capitalize">{member.projectRole}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}

        {tab === "activity" ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
            Activity feed will stream here next.
          </div>
        ) : null}

        {tab === "tasks" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {tasks?.slice(0, 8).map((task) => (
                <Badge key={task.id} variant="secondary" className="bg-white/10 text-white">
                  {task.title}
                </Badge>
              ))}
            </div>
            <Button asChild variant="outline" className="border-white/10 text-white">
              <Link href={`/projects/${project.id}/tasks`}>See all tasks</Link>
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
