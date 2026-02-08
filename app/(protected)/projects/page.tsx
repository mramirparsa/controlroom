"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Project, ProjectStatus } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statuses: ProjectStatus[] = ["active", "paused", "completed", "archived"];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "">("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["projects", search, statusFilter],
    queryFn: async () => {
      const params = new URLSearchParams({ page: "1", pageSize: "12" });
      if (search) params.set("q", search);
      if (statusFilter) params.set("status", statusFilter);
      const res = await apiClient<{ items: Project[]; total: number }>(`/api/projects?${params}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load projects");
      }
      return res.data;
    },
  });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle>Projects</CardTitle>
          <p className="text-sm text-white/60">Portfolio health and delivery timelines.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40"
          />
          <select
            className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as ProjectStatus | "")}
          >
            <option value="">All statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <Button asChild className="bg-white text-slate-900 hover:bg-white/90">
            <Link href="/projects/new">New project</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/10 text-white"
            onClick={() => refetch()}
          >
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
            Loading projects...
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold">Failed to load projects</p>
            <p className="text-white/60">Please try again.</p>
            <Button className="mt-4" onClick={() => refetch()}>
              Retry
            </Button>
          </div>
        ) : data && data.items.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold">No projects found</p>
            <p className="text-white/60">Try adjusting filters or create a new project.</p>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Due date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.items.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell className="capitalize">{project.status}</TableCell>
                    <TableCell>${project.budget.toLocaleString()}</TableCell>
                    <TableCell>{new Date(project.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="border-white/10 text-white"
                      >
                        <Link href={`/projects/${project.id}`}>View</Link>
                      </Button>
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
