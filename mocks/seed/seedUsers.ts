import { faker } from "@faker-js/faker";
import type { Role, User, UserStatus } from "@/shared/types/models";

const roles: Role[] = ["owner", "admin", "manager", "member"];
const statuses: UserStatus[] = ["active", "inactive"];

export const seedUsers = (count = 50): User[] => {
  faker.seed(42);

  const defaultUser: User = {
    id: faker.string.uuid(),
    name: "Amirhossein",
    email: "mr.amirr.1998@gmail.com",
    role: "owner",
    status: "active",
    createdAt: faker.date.past({ years: 2 }).toISOString(),
  };

  return [
    defaultUser,
    ...Array.from({ length: count }).map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      return {
        id: faker.string.uuid(),
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName, lastName }).toLowerCase(),
        role: faker.helpers.arrayElement(roles),
        status: faker.helpers.arrayElement(statuses),
        createdAt: faker.date.past({ years: 2 }).toISOString(),
      };
    }),
  ];
};
