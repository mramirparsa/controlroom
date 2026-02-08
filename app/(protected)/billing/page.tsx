"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Invoice } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  const { data } = useQuery({
    queryKey: ["invoices", "summary"],
    queryFn: async () => {
      const res = await apiClient<{ items: Invoice[]; total: number }>(
        "/api/invoices?page=1&pageSize=6"
      );
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load invoices");
      }
      return res.data.items;
    },
  });

  const total = data?.reduce((acc, invoice) => acc + invoice.amount, 0) ?? 0;

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle>Billing</CardTitle>
          <p className="text-sm text-white/60">Revenue summaries and invoice actions.</p>
        </div>
        <Button asChild className="bg-white text-slate-900 hover:bg-white/90">
          <Link href="/billing/invoices">View invoices</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60">Recent invoice volume</p>
          <p className="text-2xl font-semibold">${total.toLocaleString()}</p>
          <p className="text-sm text-white/50">Across the latest 6 invoices.</p>
        </div>
      </CardContent>
    </Card>
  );
}
