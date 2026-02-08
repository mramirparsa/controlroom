"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { apiClient } from "@/shared/lib/apiClient";
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

type ReportResponse = {
  revenue: { day: string; value: number }[];
  highlights: { totalInvoices: number; totalProjects: number };
  table: { id: string; amount: number; status: string; issuedAt: string }[];
};

export default function ReportsPage() {
  const [range, setRange] = useState(30);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["reports", range],
    queryFn: async () => {
      const res = await apiClient<ReportResponse>(`/api/reports?range=${range}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load reports");
      }
      return res.data;
    },
  });

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Reports</CardTitle>
            <p className="text-sm text-white/60">Cross-functional performance snapshots.</p>
          </div>
          <div className="flex gap-2">
            {[7, 30, 90].map((value) => (
              <Button
                key={value}
                variant={range === value ? "secondary" : "outline"}
                className="border-white/10 text-white"
                onClick={() => setRange(value)}
              >
                {value}d
              </Button>
            ))}
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
              Loading reports...
            </div>
          ) : isError ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-lg font-semibold">Failed to load reports</p>
              <Button className="mt-4" onClick={() => refetch()}>
                Retry
              </Button>
            </div>
          ) : data ? (
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-white/10 bg-white/5 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">Revenue signal</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.revenue}>
                      <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{ background: "#0f172a", border: "1px solid #1e293b" }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-sm text-white/60">Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-white/60">Total invoices</p>
                    <p className="text-2xl font-semibold">{data.highlights.totalInvoices}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Active projects</p>
                    <p className="text-2xl font-semibold">{data.highlights.totalProjects}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : null}
        </CardContent>
      </Card>

      {data ? (
        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle>Recent invoice activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-white/10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issued</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.table.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{row.id.slice(0, 8)}</TableCell>
                      <TableCell className="capitalize">{row.status}</TableCell>
                      <TableCell>${row.amount.toLocaleString()}</TableCell>
                      <TableCell>{new Date(row.issuedAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
