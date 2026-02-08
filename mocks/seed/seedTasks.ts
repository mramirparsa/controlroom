import { faker } from "@faker-js/faker";
import type { Project, Task, TaskPriority, TaskStatus, User } from "@/shared/types/models";

const statuses: TaskStatus[] = ["todo", "doing", "done"];
const priorities: TaskPriority[] = ["low", "medium", "high", "urgent"];

export const seedTasks = (projects: Project[], users: User[], count = 120): Task[] => {
  faker.seed(123);

  return Array.from({ length: count }).map(() => {
    const project = faker.helpers.arrayElement(projects);
    const assignee = faker.helpers.arrayElement(users);

    return {
      id: faker.string.uuid(),
      projectId: project.id,
      title: faker.hacker.phrase(),
      description: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(statuses),
      priority: faker.helpers.arrayElement(priorities),
      assigneeId: faker.helpers.maybe(() => assignee.id, { probability: 0.8 }) ?? null,
      dueDate:
        faker.helpers.maybe(() => faker.date.soon({ days: 30 }).toISOString(), {
          probability: 0.7,
        }) ?? null,
      labels: faker.helpers.arrayElements(["frontend", "backend", "design", "ops", "qa"], {
        min: 0,
        max: 3,
      }),
      createdAt: faker.date.past({ years: 1 }).toISOString(),
    };
  });
};
