"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Invoice, InvoiceStatus } from "@/shared/types/models";
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

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<InvoiceStatus | "">("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["invoices", search, statusFilter],
    queryFn: async () => {
      const params = new URLSearchParams({ page: "1", pageSize: "20" });
      if (search) params.set("q", search);
      if (statusFilter) params.set("status", statusFilter);
      const res = await apiClient<{ items: Invoice[]; total: number }>(`/api/invoices?${params}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load invoices");
      }
      return res.data.items;
    },
  });

  const csv = useMemo(() => {
    const header = ["id", "amount", "currency", "status", "issuedAt", "paidAt"];
    const rows = data?.map((invoice) => [
      invoice.id,
      invoice.amount,
      invoice.currency,
      invoice.status,
      invoice.issuedAt,
      invoice.paidAt ?? "",
    ]);
    return [header, ...(rows ?? [])].map((row) => row.join(",")).join("\n");
  }, [data]);

  const handleExport = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "invoices.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CardTitle>Invoices</CardTitle>
        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="Search invoice ID..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40"
          />
          <select
            className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as InvoiceStatus | "")}
          >
            <option value="">All statuses</option>
            <option value="draft">draft</option>
            <option value="sent">sent</option>
            <option value="paid">paid</option>
            <option value="overdue">overdue</option>
          </select>
          <Button variant="outline" className="border-white/10 text-white" onClick={handleExport}>
            Export CSV
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
            Loading invoices...
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold">Failed to load invoices</p>
            <Button className="mt-4" onClick={() => refetch()}>
              Retry
            </Button>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Issued</TableHead>
                  <TableHead>Paid</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id.slice(0, 8)}</TableCell>
                    <TableCell className="capitalize">{invoice.status}</TableCell>
                    <TableCell>
                      {invoice.amount.toLocaleString()} {invoice.currency}
                    </TableCell>
                    <TableCell>{new Date(invoice.issuedAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {invoice.paidAt ? new Date(invoice.paidAt).toLocaleDateString() : "-"}
                    </TableCell>
                    <TableCell>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="border-white/10 text-white"
                      >
                        <Link href={`/billing/invoices/${invoice.id}`}>View</Link>
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
