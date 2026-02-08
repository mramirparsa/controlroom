import { http, HttpResponse } from "msw";
import { findUserById, getInvoiceById, getInvoices, getSession, updateInvoice } from "@/mocks/db";
import { maybeError, withDelay } from "@/mocks/msw/handlers/utils";
import type { InvoiceStatus } from "@/shared/types/models";

const requireAdmin = async () => {
  const session = await getSession();
  if (!session) {
    return { error: HttpResponse.json({ message: "Not authenticated" }, { status: 401 }) };
  }

  const user = await findUserById(session.userId);
  if (!user || (user.role !== "owner" && user.role !== "admin")) {
    return { error: HttpResponse.json({ message: "Forbidden" }, { status: 403 }) };
  }

  return { user };
};

export const invoicesHandlers = [
  http.get("/api/invoices", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 10);
    const q = url.searchParams.get("q") ?? undefined;
    const status = url.searchParams.get("status") as InvoiceStatus | null;

    const result = await getInvoices({ page, pageSize, q, status: status ?? undefined });
    return HttpResponse.json(result);
  }),

  http.get("/api/invoices/:id", async ({ params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const invoice = await getInvoiceById(params.id as string);
    if (!invoice) {
      return HttpResponse.json({ message: "Invoice not found" }, { status: 404 });
    }

    return HttpResponse.json({ invoice });
  }),

  http.patch("/api/invoices/:id", async ({ request, params }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const patch = (await request.json()) as Partial<{
      status: InvoiceStatus;
      paidAt: string | null;
    }>;
    const invoice = await updateInvoice(params.id as string, patch);
    if (!invoice) {
      return HttpResponse.json({ message: "Invoice not found" }, { status: 404 });
    }

    return HttpResponse.json({ invoice });
  }),
];
