import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { getInvoices, getProjects, getSession, findUserById } from "@/mocks/db";
import { maybeError, withDelay } from "@/mocks/msw/handlers/utils";

export const reportsHandlers = [
  http.get("/api/reports", async ({ request }) => {
    await withDelay();
    const error = maybeError();
    if (error) return error;

    const session = await getSession();
    if (!session) {
      return HttpResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const user = await findUserById(session.userId);
    if (!user || (user.role !== "owner" && user.role !== "admin" && user.role !== "manager")) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const url = new URL(request.url);
    const range = Number(url.searchParams.get("range") ?? 30);

    const revenue = Array.from({ length: range }).map((_, index) => ({
      day: `${index + 1}`,
      value: faker.number.int({ min: 2000, max: 12000 }),
    }));

    const invoices = await getInvoices({ page: 1, pageSize: 5 });
    const projects = await getProjects({ page: 1, pageSize: 5 });

    return HttpResponse.json({
      revenue,
      highlights: {
        totalInvoices: invoices.total,
        totalProjects: projects.total,
      },
      table: invoices.items.map((item) => ({
        id: item.id,
        amount: item.amount,
        status: item.status,
        issuedAt: item.issuedAt,
      })),
    });
  }),
];
