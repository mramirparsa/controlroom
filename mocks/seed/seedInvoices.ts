import { faker } from "@faker-js/faker";
import type { Invoice, InvoiceStatus, Project } from "@/shared/types/models";

const statuses: InvoiceStatus[] = ["draft", "sent", "paid", "overdue"];
const currencies: Invoice["currency"][] = ["USD", "EUR", "GBP"];

export const seedInvoices = (projects: Project[], count = 48): Invoice[] => {
  faker.seed(88);

  return Array.from({ length: count }).map(() => {
    const project = faker.helpers.arrayElement(projects);
    const status = faker.helpers.arrayElement(statuses);
    const issuedAt = faker.date.recent({ days: 120 });
    const paidAt =
      status === "paid" ? faker.date.soon({ days: 20, refDate: issuedAt }).toISOString() : null;

    return {
      id: faker.string.uuid(),
      projectId: project.id,
      amount: faker.number.int({ min: 1200, max: 45000 }),
      currency: faker.helpers.arrayElement(currencies),
      status,
      issuedAt: issuedAt.toISOString(),
      paidAt,
    };
  });
};
