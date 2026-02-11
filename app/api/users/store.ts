import type { Role, User, UserStatus } from "@/shared/types/models";
import { seedUsers } from "@/mocks/seed/seedUsers";

declare global {
  // eslint-disable-next-line no-var
  var __controlroomUsers: User[] | undefined;
}

const getStore = () => {
  if (!globalThis.__controlroomUsers) {
    globalThis.__controlroomUsers = seedUsers(50);
  }

  return globalThis.__controlroomUsers;
};

export const listUsers = (params: {
  page?: number;
  pageSize?: number;
  q?: string;
  role?: Role;
  status?: UserStatus;
}) => {
  const { page = 1, pageSize = 10, q, role, status } = params;
  const all = getStore();
  const filtered = all.filter((user) => {
    const matchesQuery = q
      ? `${user.name} ${user.email}`.toLowerCase().includes(q.toLowerCase())
      : true;
    const matchesRole = role ? user.role === role : true;
    const matchesStatus = status ? user.status === status : true;
    return matchesQuery && matchesRole && matchesStatus;
  });

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  return { items, total: filtered.length };
};

export const findUserById = (id: string) => {
  const all = getStore();
  return all.find((user) => user.id === id) ?? null;
};

export const createUser = (payload: Omit<User, "id" | "createdAt">) => {
  const all = getStore();
  const user: User = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  globalThis.__controlroomUsers = [user, ...all];
  return user;
};

export const updateUser = (id: string, patch: Partial<User>) => {
  const all = getStore();
  const next = all.map((user) => (user.id === id ? { ...user, ...patch } : user));
  globalThis.__controlroomUsers = next;
  return next.find((user) => user.id === id) ?? null;
};
