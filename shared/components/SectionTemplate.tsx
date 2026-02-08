"use client";

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Variant = "metrics" | "table" | "board" | "timeline" | "insights";

type SectionTemplateProps = {
  title: string;
  description?: string;
  variant: Variant;
  seed: string;
};

const hashNumber = (value: string, max: number) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % max;
  }
  return hash;
};

export const SectionTemplate = ({ title, description, variant, seed }: SectionTemplateProps) => {
  const data = useMemo(() => {
    const metrics = Array.from({ length: 4 }).map((_, index) => ({
      label: ["Velocity", "Coverage", "Engagement", "Reliability"][index % 4],
      value: `${60 + hashNumber(seed, 30) + index * 5}%`,
      trend: index % 2 === 0 ? "+4%" : "-2%",
    }));
    const quickStats = Array.from({ length: 3 }).map((_, index) => ({
      label: ["SLA", "Backlog", "Risk"][index % 3],
      value: `${70 + hashNumber(seed, 20) + index * 3}%`,
    }));
    const rows = Array.from({ length: 6 }).map((_, index) => ({
      id: `${seed}-${index}`,
      name: `${title} item ${index + 1}`,
      owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][index % 5],
      status: ["active", "monitor", "risk", "paused"][index % 4],
      updated: `${hashNumber(seed, 18) + index + 1}h ago`,
    }));
    const alerts = Array.from({ length: 3 }).map((_, index) => ({
      id: `${seed}-alert-${index}`,
      title: ["Policy update", "Cost spike", "Review required"][index % 3],
      severity: ["info", "warn", "danger"][index % 3] as "info" | "warn" | "danger",
      note: "Action recommended within 48h",
    }));
    const timeline = Array.from({ length: 5 }).map((_, index) => ({
      id: `${seed}-event-${index}`,
      title: `${title} update ${index + 1}`,
      meta: `Owner: ${["Ava", "Theo", "Nia", "Miles", "Zara"][index % 5]}`,
      time: `${hashNumber(seed, 12) + index + 1}h ago`,
    }));
    const board = ["Planned", "In progress", "Review", "Done"].map((column, index) => ({
      id: `${seed}-col-${index}`,
      title: column,
      items: Array.from({ length: 3 }).map((_, itemIndex) => ({
        id: `${seed}-${column}-${itemIndex}`,
        title: `${column} item ${itemIndex + 1}`,
        owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][itemIndex % 5],
        priority: ["low", "medium", "high"][itemIndex % 3],
      })),
    }));
    const insights = Array.from({ length: 3 }).map((_, index) => ({
      title: ["Adoption", "Efficiency", "Satisfaction"][index % 3],
      value: `${40 + hashNumber(seed, 40) + index * 7}%`,
      note: "Benchmark aligned with last 30 days",
    }));

    return { metrics, quickStats, rows, alerts, timeline, board, insights };
  }, [seed, title]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-xl">
            Export
          </Button>
          <Button
            size="sm"
            className="rounded-xl bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
          >
            New entry
          </Button>
        </div>
      </div>

      {variant === "metrics" ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.metrics.map((metric, index) => {
              const gradients = [
                "from-indigo-500 to-indigo-600 shadow-indigo-500/20",
                "from-sky-500 to-cyan-500 shadow-sky-500/20",
                "from-amber-500 to-orange-500 shadow-amber-500/20",
                "from-rose-500 to-pink-500 shadow-rose-500/20",
              ];
              const icons = [
                "M13 10V3L4 14h7v7l9-11h-7z",
                "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              ];
              return (
                <Card
                  key={metric.label}
                  className={`group relative overflow-hidden rounded-2xl border-0 bg-linear-to-br ${gradients[index]} p-1 shadow-lg transition-all hover:shadow-xl`}
                >
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
                          d={icons[index]}
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-white/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-bold text-white">{metric.value}</p>
                    <Badge className="mt-2 border-0 bg-white/20 text-white">{metric.trend}</Badge>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Pulse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.quickStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
                <div className="gradient-divider" />
                <div className="text-xs text-muted-foreground">
                  Metrics update every 15 minutes.
                </div>
              </CardContent>
            </Card>
            <Card className="section-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Alerts & signals
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-3">
                {data.alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="rounded-xl border border-border/60 bg-muted/50 p-3"
                  >
                    <p className="font-medium text-foreground">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.note}</p>
                    <span
                      className={`chip mt-3 inline-flex ${
                        alert.severity === "info"
                          ? "chip-info"
                          : alert.severity === "warn"
                            ? "chip-warn"
                            : "chip-danger"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      ) : null}

      {variant === "table" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="section-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Latest records
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.rows.map((row) => (
                <div
                  key={row.id}
                  className="group rounded-xl border border-border/60 bg-muted/30 p-4 transition-all hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{row.name}</p>
                      <p className="text-xs text-muted-foreground">Owner: {row.owner}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {row.status}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Updated {row.updated}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="section-card">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {metric.trend}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ) : null}

      {variant === "board" ? (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
          {data.board.map((column, colIndex) => {
            const columnColors = [
              "border-l-slate-400",
              "border-l-blue-400",
              "border-l-amber-400",
              "border-l-emerald-400",
            ];
            return (
              <Card key={column.id} className="section-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <span
                      className={`h-2 w-2 rounded-full ${colIndex === 3 ? "bg-emerald-500" : colIndex === 2 ? "bg-amber-500" : colIndex === 1 ? "bg-blue-500" : "bg-slate-400"}`}
                    />
                    {column.title}
                    <Badge variant="secondary" className="ml-auto bg-muted text-muted-foreground">
                      {column.items.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.items.map((task) => (
                    <div
                      key={task.id}
                      className={`rounded-xl border border-l-4 ${columnColors[colIndex]} border-border/60 bg-muted/30 p-3 transition-all hover:bg-muted/50`}
                    >
                      <p className="font-medium text-foreground">{task.title}</p>
                      <p className="text-xs text-muted-foreground">Owner: {task.owner}</p>
                      <Badge
                        variant="secondary"
                        className={`mt-2 ${task.priority === "high" ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" : task.priority === "medium" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : null}

      {variant === "timeline" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="section-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Activity timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              {data.timeline.map((event, index) => (
                <div key={event.id} className="relative flex gap-4 pb-4">
                  {index !== data.timeline.length - 1 && (
                    <div className="absolute left-2.5 top-6 h-full w-0.5 bg-border" />
                  )}
                  <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.meta}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="section-card">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.metrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {metric.trend}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ) : null}

      {variant === "insights" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.insights.map((insight) => {
            return (
              <Card
                key={insight.title}
                className="group relative overflow-hidden rounded-2xl border-0 p-1 shadow-lg transition-all hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }}
              >
                <div className="relative h-full rounded-xl bg-card p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{insight.title}</p>
                  <p className="mt-1 text-3xl font-bold text-foreground">{insight.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{insight.note}</p>
                </div>
              </Card>
            );
          })}
          <Card className="section-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.rows.slice(0, 4).map((row) => (
                <div
                  key={row.id}
                  className="rounded-xl border border-border/60 bg-muted/30 p-3 transition-all hover:bg-muted/50"
                >
                  <p className="font-medium text-foreground">{row.name}</p>
                  <p className="text-xs text-muted-foreground">Updated {row.updated}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
};
