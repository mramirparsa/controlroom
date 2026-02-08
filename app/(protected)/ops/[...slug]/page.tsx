"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { opsItemsIndex } from "@/shared/lib/opsCatalog";

const hashNumber = (value: string, max: number) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % max;
  }
  return hash;
};

const buildRows = (seed: string) =>
  Array.from({ length: 6 }).map((_, index) => ({
    id: `${seed}-${index + 1}`,
    name: `Record ${index + 1}`,
    owner: ["Ava", "Theo", "Nia", "Miles", "Zara", "Levi"][index % 6],
    status: ["active", "monitor", "paused", "risk"][index % 4],
    updated: `${hashNumber(seed, 28) + index + 1}d ago`,
  }));

const buildSignals = (seed: string) => [
  {
    title: "Coverage",
    value: `${70 + hashNumber(seed, 25)}%`,
    trend: "+2%",
  },
  {
    title: "Velocity",
    value: `${30 + hashNumber(seed, 60)}`,
    trend: "+6%",
  },
  {
    title: "Compliance",
    value: `${80 + hashNumber(seed, 15)}%`,
    trend: "-1%",
  },
  {
    title: "Satisfaction",
    value: `${3.6 + hashNumber(seed, 14) / 10}`,
    trend: "+0.2",
  },
];

const buildTimeline = (seed: string) =>
  Array.from({ length: 5 }).map((_, index) => ({
    id: `${seed}-activity-${index}`,
    title: `Action ${index + 1} completed`,
    meta: `Owner: ${["Ava", "Theo", "Nia", "Miles", "Zara"][index % 5]}`,
    time: `${hashNumber(seed, 18) + index + 1}h ago`,
  }));

const buildBoard = (seed: string) => {
  const columns = ["Planned", "In progress", "Review", "Done"];
  return columns.map((column, index) => ({
    id: `${seed}-col-${index}`,
    title: column,
    items: Array.from({ length: 3 }).map((_, itemIndex) => ({
      id: `${seed}-${column}-${itemIndex}`,
      title: `${column} item ${itemIndex + 1}`,
      owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][itemIndex % 5],
      priority: ["low", "medium", "high"][itemIndex % 3],
    })),
  }));
};

const buildInsights = (seed: string) => [
  {
    title: "Adoption",
    value: `${60 + hashNumber(seed, 35)}%`,
    note: "Active adoption across key accounts",
  },
  {
    title: "Efficiency",
    value: `${40 + hashNumber(seed, 45)}%`,
    note: "Workflow throughput this period",
  },
  {
    title: "Coverage",
    value: `${70 + hashNumber(seed, 25)}%`,
    note: "Policy coverage achieved",
  },
];

const buildNotes = (seed: string) =>
  Array.from({ length: 4 }).map((_, index) => ({
    id: `${seed}-note-${index}`,
    title: `Note ${index + 1}`,
    body: `Contextual insight for ${seed} #${index + 1}.`,
  }));

export default function OpsDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : String(params.slug ?? "");
  const item = opsItemsIndex.find((entry) => entry.href === `/ops/${slug}`);

  const dataset = useMemo(() => {
    const seed = slug || "ops";
    return {
      rows: buildRows(seed),
      signals: buildSignals(seed),
      timeline: buildTimeline(seed),
      board: buildBoard(seed),
      insights: buildInsights(seed),
      notes: buildNotes(seed),
      checklist: [
        "Review latest changes",
        "Confirm policy alignment",
        "Notify stakeholders",
        "Schedule follow-up",
      ],
      mode: hashNumber(seed, 4),
    };
  }, [slug]);

  if (!item) {
    return (
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle>Section not found</CardTitle>
        </CardHeader>
        <CardContent className="text-white/60">
          This section does not exist yet. Please choose a valid item from the sidebar.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-white/60">Operations / {item.label}</p>
          <h1 className="text-2xl font-semibold">{item.label}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-white/10 text-white">
            Export
          </Button>
          <Button className="bg-white text-slate-900 hover:bg-white/90">New entry</Button>
        </div>
      </div>

      {dataset.mode === 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dataset.signals.map((signal) => (
              <Card key={signal.title} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">{signal.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">{signal.value}</p>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {signal.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="border-white/10 bg-white/5 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Operational records</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.rows.map((row) => (
                  <div
                    key={row.id}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-white/60">Owner: {row.owner}</p>
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white">
                        {row.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs text-white/50">Updated {row.updated}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Live signals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.checklist.map((itemLabel) => (
                  <div key={itemLabel} className="flex items-center justify-between">
                    <p className="text-sm text-white/70">{itemLabel}</p>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      ready
                    </Badge>
                  </div>
                ))}
                <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs text-white/60">
                  Signals update every 15 minutes based on internal telemetry.
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Compliance checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.checklist.map((itemLabel, index) => (
                  <div key={`${itemLabel}-${index}`} className="flex items-center justify-between">
                    <p className="text-sm text-white/70">{itemLabel}</p>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      {index % 2 === 0 ? "complete" : "pending"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Activity timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.timeline.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-xs text-white/60">{event.meta}</p>
                    </div>
                    <p className="text-xs text-white/50">{event.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      ) : dataset.mode === 1 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dataset.insights.map((item) => (
              <Card key={item.title} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="text-xs text-white/60">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            {dataset.board.map((column) => (
              <Card key={column.id} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">{column.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.items.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                    >
                      <p className="font-medium">{task.title}</p>
                      <p className="text-xs text-white/60">Owner: {task.owner}</p>
                      <Badge variant="secondary" className="mt-2 bg-white/10 text-white">
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                  >
                    <p className="font-medium">{note.title}</p>
                    <p className="text-xs text-white/60">{note.body}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Recent activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.timeline.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-xs text-white/60">{event.meta}</p>
                    </div>
                    <p className="text-xs text-white/50">{event.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      ) : dataset.mode === 2 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="border-white/10 bg-white/5 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm text-white/60">Decision register</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {dataset.rows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 p-3"
                >
                  <div>
                    <p className="font-medium">{row.name}</p>
                    <p className="text-xs text-white/60">Owner: {row.owner}</p>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {row.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-sm text-white/60">Signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataset.signals.map((signal) => (
                <div key={signal.title} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">{signal.title}</p>
                    <p className="text-lg font-semibold">{signal.value}</p>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {signal.trend}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-sm text-white/60">Actionable checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {dataset.checklist.map((itemLabel, index) => (
                <div key={`${itemLabel}-${index}`} className="flex items-center justify-between">
                  <p className="text-sm text-white/70">{itemLabel}</p>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {index % 2 === 0 ? "complete" : "pending"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm text-white/60">Observations</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {dataset.notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                >
                  <p className="font-medium">{note.title}</p>
                  <p className="text-xs text-white/60">{note.body}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dataset.signals.map((signal) => (
              <Card key={signal.title} className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">{signal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">{signal.value}</p>
                  <p className="text-xs text-white/60">Trend {signal.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Latest decisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.rows.slice(0, 4).map((row) => (
                  <div
                    key={row.id}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                  >
                    <p className="font-medium">{row.name}</p>
                    <p className="text-xs text-white/60">Updated {row.updated}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.timeline.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-xs text-white/60">{event.meta}</p>
                    </div>
                    <p className="text-xs text-white/50">{event.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-sm text-white/60">Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataset.insights.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm text-white/60">{item.title}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                    <p className="text-xs text-white/50">{item.note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
