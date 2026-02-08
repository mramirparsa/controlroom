import { faker } from "@faker-js/faker";
import type { ActivityLog, Project, Task, Invoice, User } from "@/shared/types/models";

export const seedActivity = (
  users: User[],
  projects: Project[],
  tasks: Task[],
  invoices: Invoice[],
  count = 60
): ActivityLog[] => {
  faker.seed(512);

  const actions = ["created", "updated", "completed", "archived", "assigned", "sent", "paid"];

  return Array.from({ length: count }).map(() => {
    const actor = faker.helpers.arrayElement(users);
    const roll = faker.number.int({ min: 1, max: 3 });

    if (roll === 1) {
      const project = faker.helpers.arrayElement(projects);
      return {
        id: faker.string.uuid(),
        actorId: actor.id,
        action: faker.helpers.arrayElement(actions),
        entityType: "project",
        entityId: project.id,
        createdAt: faker.date.recent({ days: 10 }).toISOString(),
      };
    }

    if (roll === 2) {
      const task = faker.helpers.arrayElement(tasks);
      return {
        id: faker.string.uuid(),
        actorId: actor.id,
        action: faker.helpers.arrayElement(actions),
        entityType: "task",
        entityId: task.id,
        createdAt: faker.date.recent({ days: 10 }).toISOString(),
      };
    }

    const invoice = faker.helpers.arrayElement(invoices);
    return {
      id: faker.string.uuid(),
      actorId: actor.id,
      action: faker.helpers.arrayElement(actions),
      entityType: "invoice",
      entityId: invoice.id,
      createdAt: faker.date.recent({ days: 10 }).toISOString(),
    };
  });
};
