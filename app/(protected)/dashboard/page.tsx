"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ranges = [7, 30, 90] as const;

type DashboardResponse = {
  kpis: {
    activeUsers: number;
    activeProjects: number;
    openTasks: number;
    monthlyRevenue: number;
  };
  revenue: { day: string; value: number }[];
  taskStatus: { name: string; value: number }[];
  activity: { id: string; title: string; meta: string; createdAt: string }[];
};

export default function DashboardPage() {
  const [range, setRange] = useState<(typeof ranges)[number]>(30);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["dashboard", range],
    queryFn: async () => {
      const res = await apiClient<DashboardResponse>(`/api/dashboard?range=${range}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to fetch dashboard");
      }
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="animate-pulse border-white/10 bg-white/5">
              <CardHeader>
                <div className="h-4 w-24 rounded bg-white/10" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-20 rounded bg-white/10" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="h-80 animate-pulse border-white/10 bg-white/5" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-lg font-semibold">Failed to load dashboard</p>
        <p className="text-white/60">Please try again.</p>
        <Button className="mt-4" onClick={() => refetch()}>
          Retry
        </Button>
      </div>
    );
  }

  const totalTasks = data.taskStatus.reduce((sum, entry) => sum + entry.value, 0);
  const doneTasks = data.taskStatus.find((entry) => entry.name === "done")?.value ?? 0;
  const inProgressTasks = data.taskStatus.find((entry) => entry.name === "doing")?.value ?? 0;
  const todoTasks = data.taskStatus.find((entry) => entry.name === "todo")?.value ?? 0;
  const completionRate = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  const backlogRate =
    totalTasks === 0 ? 0 : Math.round(((todoTasks + inProgressTasks) / totalTasks) * 100);
  const totalRevenue = data.revenue.reduce((sum, entry) => sum + entry.value, 0);
  const avgRevenue = data.revenue.length === 0 ? 0 : Math.round(totalRevenue / data.revenue.length);
  const bestDay = data.revenue.reduce(
    (best, entry) => (entry.value > best.value ? entry : best),
    data.revenue[0] ?? { day: "-", value: 0 }
  );
  const alerts = [
    {
      title: "Invoice follow-ups pending",
      description: "5 accounts overdue in the last 7 days",
      tone: "warning",
    },
    {
      title: "SLA breach risk",
      description: "2 projects nearing delivery thresholds",
      tone: "critical",
    },
    {
      title: "Ops review required",
      description: "3 tasks blocked beyond 48 hours",
      tone: "info",
    },
  ];
  const pipeline = [
    {
      label: "Qualified",
      value: Math.round(totalRevenue * 0.3),
      change: "+6%",
    },
    {
      label: "Negotiation",
      value: Math.round(totalRevenue * 0.2),
      change: "+3%",
    },
    {
      label: "Legal",
      value: Math.round(totalRevenue * 0.12),
      change: "-1%",
    },
    {
      label: "Closed",
      value: Math.round(totalRevenue * 0.38),
      change: "+9%",
    },
  ];
  const sla = [
    { label: "Uptime", value: 99.92, target: 99.9 },
    { label: "Response time", value: 92, target: 95 },
    { label: "On-time delivery", value: 88, target: 90 },
  ];
  const teamPerformance = [
    { name: "Product Ops", score: 86, trend: "+4%" },
    { name: "Client Success", score: 92, trend: "+2%" },
    { name: "Engineering", score: 81, trend: "-1%" },
    { name: "Finance", score: 89, trend: "+3%" },
  ];
  const healthSegments = [
    {
      label: "Healthy",
      value: Math.max(12, Math.round(data.kpis.activeProjects * 0.6)),
    },
    {
      label: "Monitor",
      value: Math.max(4, Math.round(data.kpis.activeProjects * 0.25)),
    },
    {
      label: "At risk",
      value: Math.max(2, Math.round(data.kpis.activeProjects * 0.15)),
    },
  ];
  const milestones = data.activity.slice(0, 5).map((item, index) => ({
    id: item.id,
    title: item.title,
    date: new Date(item.createdAt).toLocaleDateString(),
    owner: ["Ava", "Miles", "Yara", "Theo", "Nia"][index % 5],
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Executive overview</h1>
          <p className="text-sm text-muted-foreground">
            Real-time visibility across your SaaS operations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {ranges.map((item) => (
            <Button
              key={item}
              variant={range === item ? "default" : "outline"}
              size="sm"
              className="rounded-xl"
              onClick={() => setRange(item)}
            >
              {item} days
            </Button>
          ))}
          <Button variant="outline" size="sm" className="rounded-xl" onClick={() => refetch()}>
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-indigo-500 to-indigo-600 p-1 shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl hover:shadow-indigo-500/30">
          <div className="relative rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-white/80">Active users</p>
            <p className="mt-1 text-2xl font-bold text-white">{data.kpis.activeUsers}</p>
            <p className="mt-2 text-xs text-white/70">
              +{Math.max(2, Math.round(data.kpis.activeUsers * 0.03))} this week
            </p>
          </div>
        </Card>
        <Card className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-sky-500 to-cyan-500 p-1 shadow-lg shadow-sky-500/20 transition-all hover:shadow-xl hover:shadow-sky-500/30">
          <div className="relative rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-white/80">Active projects</p>
            <p className="mt-1 text-2xl font-bold text-white">{data.kpis.activeProjects}</p>
            <p className="mt-2 text-xs text-white/70">
              {Math.max(1, Math.round(data.kpis.activeProjects * 0.12))} at risk
            </p>
          </div>
        </Card>
        <Card className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-amber-500 to-orange-500 p-1 shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30">
          <div className="relative rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-white/80">Open tasks</p>
            <p className="mt-1 text-2xl font-bold text-white">{data.kpis.openTasks}</p>
            <p className="mt-2 text-xs text-white/70">{completionRate}% completion rate</p>
          </div>
        </Card>
        <Card className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-rose-500 to-pink-500 p-1 shadow-lg shadow-rose-500/20 transition-all hover:shadow-xl hover:shadow-rose-500/30">
          <div className="relative rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-white/80">Monthly revenue</p>
            <p className="mt-1 text-2xl font-bold text-white">
              ${data.kpis.monthlyRevenue.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-white/70">${avgRevenue.toLocaleString()} avg daily</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Daily focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Audit open items", "Review new access", "Sync KPI owners"].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <p className="text-sm text-foreground">{item}</p>
                <span className="chip chip-info">assigned</span>
              </div>
            ))}
            <div className="gradient-divider" />
            <p className="text-xs text-muted-foreground">Next sync at 15:00 (local).</p>
          </CardContent>
        </Card>
        <Card className="material-surface xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Signal overview</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {[
              { label: "Spend anomaly", tone: "chip-warn" },
              { label: "Policy drift", tone: "chip-danger" },
              { label: "Coverage boost", tone: "chip-info" },
            ].map((signal) => (
              <div key={signal.label} className="rounded-xl border border-border bg-muted/50 p-3">
                <p className="text-sm font-medium text-foreground">{signal.label}</p>
                <p className="text-xs text-muted-foreground">Requires attention within 24h.</p>
                <span className={`chip mt-3 inline-flex ${signal.tone}`}>alert</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="material-surface lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Revenue trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.revenue}>
                <XAxis
                  dataKey="day"
                  stroke="currentColor"
                  className="text-muted-foreground"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="currentColor"
                  className="text-muted-foreground"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ stroke: "var(--border)" }}
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.5rem",
                    color: "var(--foreground)",
                  }}
                  labelStyle={{ color: "var(--foreground)" }}
                />
                <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Task distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.taskStatus}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                >
                  {data.taskStatus.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"][index]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.5rem",
                    color: "var(--foreground)",
                  }}
                  labelStyle={{ color: "var(--foreground)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Operational highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion rate</p>
                <p className="text-lg font-semibold text-foreground">{completionRate}%</p>
              </div>
              <span className="chip chip-info">On track</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Backlog coverage</p>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${Math.min(100, backlogRate)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {backlogRate}% of tasks in progress
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Best revenue day</p>
              <p className="text-lg font-semibold text-foreground">
                {bestDay.day} · ${bestDay.value.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Action center</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/projects/new">Create project</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tasks">Review tasks</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/billing/invoices">Send invoices</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Workload snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Todo</p>
                <p className="text-lg font-semibold text-foreground">{todoTasks}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">In progress</p>
                <p className="text-lg font-semibold text-foreground">{inProgressTasks}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-lg font-semibold text-foreground">{doneTasks}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
              Team focus is stable. No critical bottlenecks detected in the last {range} days.
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Risk & alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.title} className="rounded-xl border border-border bg-muted/50 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">{alert.title}</p>
                  <span
                    className={`chip ${
                      alert.tone === "critical"
                        ? "chip-danger"
                        : alert.tone === "warning"
                          ? "chip-warn"
                          : "chip-info"
                    }`}
                  >
                    {alert.tone}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{alert.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Pipeline health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipeline.map((stage) => (
              <div key={stage.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stage.label}</p>
                  <p className="text-lg font-semibold text-foreground">
                    ${stage.value.toLocaleString()}
                  </p>
                </div>
                <span className="chip chip-info">{stage.change}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">SLA performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sla.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-medium text-foreground">
                    {metric.value}% / {metric.target}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${Math.min(100, metric.value)}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="material-surface lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Customer health</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {healthSegments.map((segment) => (
              <div key={segment.label} className="rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">{segment.label}</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">{segment.value}</p>
                <p className="text-xs text-muted-foreground">Accounts in segment</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Team performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamPerformance.map((team) => (
              <div key={team.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{team.name}</p>
                  <p className="text-lg font-semibold text-foreground">{team.score}</p>
                </div>
                <span className="chip chip-info">{team.trend}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="material-surface lg:col-span-2">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm text-muted-foreground">Upcoming milestones</CardTitle>
            <Button asChild variant="outline">
              <Link href="/projects">View roadmap</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {milestones.length === 0 ? (
              <p className="text-muted-foreground">No milestones yet.</p>
            ) : (
              milestones.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-muted/50 p-3"
                >
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">Owner: {item.owner}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">{item.date}</div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="material-surface">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Revenue insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Total in range</p>
              <p className="text-2xl font-semibold text-foreground">
                ${totalRevenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Best day</p>
              <p className="text-lg font-semibold text-foreground">
                {bestDay.day} · ${bestDay.value.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
              Revenue is trending upward compared to the previous {range} days.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/10 bg-white/5">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm text-white/60">Recent activity</CardTitle>
          <Badge variant="secondary" className="bg-white/10 text-white">
            Live feed
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.activity.length === 0 ? (
            <p className="text-white/60">No activity yet.</p>
          ) : (
            data.activity.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-white/60">{item.meta}</p>
                </div>
                <p className="text-xs text-white/50">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
