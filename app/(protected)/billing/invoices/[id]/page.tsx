"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/apiClient";
import type { Invoice, InvoiceStatus } from "@/shared/types/models";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvoiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["invoice", params.id],
    queryFn: async () => {
      const res = await apiClient<{ invoice: Invoice }>(`/api/invoices/${params.id}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to load invoice");
      }
      return res.data.invoice;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (status: InvoiceStatus) => {
      const res = await apiClient<{ invoice: Invoice }>(`/api/invoices/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status,
          paidAt: status === "paid" ? new Date().toISOString() : null,
        }),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Update failed");
      }
      return res.data.invoice;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoice", params.id] });
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });

  if (isLoading) {
    return <div className="text-white/60">Loading invoice...</div>;
  }

  if (isError || !data) {
    return <div className="text-white/60">Failed to load invoice.</div>;
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Invoice {data.id.slice(0, 8)}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-white/60">Amount</p>
          <p className="text-lg font-semibold">
            {data.amount.toLocaleString()} {data.currency}
          </p>
        </div>
        <div>
          <p className="text-sm text-white/60">Status</p>
          <p className="capitalize">{data.status}</p>
        </div>
        <div>
          <p className="text-sm text-white/60">Issued</p>
          <p>{new Date(data.issuedAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-white/60">Paid</p>
          <p>{data.paidAt ? new Date(data.paidAt).toLocaleDateString() : "-"}</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => updateMutation.mutate("paid")}
            disabled={updateMutation.isPending}
          >
            Mark paid
          </Button>
          <Button
            variant="outline"
            className="border-white/10 text-white"
            onClick={() => router.push("/billing/invoices")}
          >
            Back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
