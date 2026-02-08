import { faker } from "@faker-js/faker";
import type {
  Project,
  ProjectMember,
  ProjectRole,
  ProjectStatus,
  User,
} from "@/shared/types/models";

const statuses: ProjectStatus[] = ["active", "paused", "completed", "archived"];
const roles: ProjectRole[] = ["owner", "manager", "contributor", "viewer"];

export const seedProjects = (users: User[], count = 24) => {
  faker.seed(42);

  const projects: Project[] = Array.from({ length: count }).map(() => {
    const manager = faker.helpers.arrayElement(users);
    const startDate = faker.date.past({ years: 1 });
    const dueDate = faker.date.soon({ days: 90, refDate: startDate });

    return {
      id: faker.string.uuid(),
      name: faker.company.catchPhrase(),
      status: faker.helpers.arrayElement(statuses),
      managerId: manager.id,
      startDate: startDate.toISOString(),
      dueDate: dueDate.toISOString(),
      budget: faker.number.int({ min: 20000, max: 220000 }),
      createdAt: faker.date.past({ years: 2 }).toISOString(),
    };
  });

  const members: ProjectMember[] = projects.flatMap((project) => {
    const assigned = faker.helpers.arrayElements(users, { min: 3, max: 8 });
    const memberIds = Array.from(new Set([project.managerId, ...assigned.map((user) => user.id)]));

    return memberIds.map((userId) => ({
      projectId: project.id,
      userId,
      projectRole: userId === project.managerId ? "manager" : faker.helpers.arrayElement(roles),
    }));
  });

  return { projects, members };
};
