import { faker } from "@faker-js/faker";

export const dynamic = "force-dynamic";

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

export async function GET(request: Request) {
  const url = new URL(request.url);
  const range = Number(url.searchParams.get("range") ?? 30);

  const kpis = {
    activeUsers: faker.number.int({ min: 120, max: 980 }),
    activeProjects: faker.number.int({ min: 12, max: 65 }),
    openTasks: faker.number.int({ min: 48, max: 320 }),
    monthlyRevenue: faker.number.int({ min: 42000, max: 180000 }),
  };

  const revenue = Array.from({ length: range }).map((_, index) => ({
    day: `${index + 1}`,
    value: faker.number.int({ min: 1000, max: 7000 }),
  }));

  const taskStatus = [
    { name: "todo", value: faker.number.int({ min: 10, max: 40 }) },
    { name: "doing", value: faker.number.int({ min: 10, max: 40 }) },
    { name: "done", value: faker.number.int({ min: 10, max: 40 }) },
  ];

  const activity = Array.from({ length: 5 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.helpers.arrayElement([
      "Project created",
      "Task status updated",
      "Invoice issued",
      "Member added",
    ]),
    meta: faker.company.name(),
    createdAt: faker.date.recent({ days: 7 }).toISOString(),
  }));

  const payload: DashboardResponse = { kpis, revenue, taskStatus, activity };

  return Response.json(payload);
}
