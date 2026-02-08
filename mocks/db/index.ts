import { createStore, del, get, set } from "idb-keyval";
import { seedUsers } from "@/mocks/seed/seedUsers";
import { seedProjects } from "@/mocks/seed/seedProjects";
import { seedTasks } from "@/mocks/seed/seedTasks";
import { seedInvoices } from "@/mocks/seed/seedInvoices";
import { seedActivity } from "@/mocks/seed/seedActivity";
import type {
  ActivityLog,
  Invoice,
  InvoiceStatus,
  Project,
  ProjectMember,
  ProjectStatus,
  Role,
  Session,
  Task,
  TaskPriority,
  TaskStatus,
  User,
  UserStatus,
} from "@/shared/types/models";

const store = createStore("controlroom-db", "kv");

const USERS_KEY = "users";
const SESSION_KEY = "session";
const FAILED_KEY = "failed_attempts";
const PASSWORDS_KEY = "passwords";
const RESET_KEY = "reset_tokens";
const PROJECTS_KEY = "projects";
const PROJECT_MEMBERS_KEY = "project_members";
const TASKS_KEY = "tasks";
const INVOICES_KEY = "invoices";
const ACTIVITY_KEY = "activity";
const DEFAULT_PASSWORD = "Password123!";
const DEFAULT_USER_EMAIL = "mr.amirr.1998@gmail.com";
const DEFAULT_USER_NAME = "Amirhossein";

const ensureSeeded = async () => {
  const existing = await get<User[]>(USERS_KEY, store);
  if (!existing || existing.length === 0) {
    await set(USERS_KEY, seedUsers(50), store);
  }

  const users = (await get<User[]>(USERS_KEY, store)) ?? [];
  const hasDefault = users.some((user) => user.email.toLowerCase() === DEFAULT_USER_EMAIL);
  if (!hasDefault) {
    const defaultUser: User = {
      id: crypto.randomUUID(),
      name: DEFAULT_USER_NAME,
      email: DEFAULT_USER_EMAIL,
      role: "owner",
      status: "active",
      createdAt: new Date().toISOString(),
    };
    await set(USERS_KEY, [defaultUser, ...users], store);
  }

  const passwords = await get<Record<string, string>>(PASSWORDS_KEY, store);
  if (!passwords) {
    const updatedUsers = (await get<User[]>(USERS_KEY, store)) ?? [];
    const seedMap = updatedUsers.reduce<Record<string, string>>((acc, user) => {
      acc[user.email.toLowerCase()] = DEFAULT_PASSWORD;
      return acc;
    }, {});
    await set(PASSWORDS_KEY, seedMap, store);
  }

  if (passwords) {
    const updatedUsers = (await get<User[]>(USERS_KEY, store)) ?? [];
    const hasDefaultPassword = passwords[DEFAULT_USER_EMAIL] ?? null;
    if (!hasDefaultPassword) {
      const next = { ...passwords };
      const fallbackUser = updatedUsers.find(
        (user) => user.email.toLowerCase() === DEFAULT_USER_EMAIL
      );
      if (fallbackUser) {
        next[DEFAULT_USER_EMAIL] = DEFAULT_PASSWORD;
        await set(PASSWORDS_KEY, next, store);
      }
    }
  }

  const existingProjects = await get<Project[]>(PROJECTS_KEY, store);
  if (!existingProjects || existingProjects.length === 0) {
    const users = (await get<User[]>(USERS_KEY, store)) ?? [];
    const { projects, members } = seedProjects(users, 28);
    await set(PROJECTS_KEY, projects, store);
    await set(PROJECT_MEMBERS_KEY, members, store);

    const tasks = seedTasks(projects, users, 180);
    await set(TASKS_KEY, tasks, store);

    const invoices = seedInvoices(projects, 60);
    await set(INVOICES_KEY, invoices, store);

    const activity = seedActivity(users, projects, tasks, invoices, 80);
    await set(ACTIVITY_KEY, activity, store);
  }
};

export const getUsers = async (params: {
  page?: number;
  pageSize?: number;
  q?: string;
  role?: Role;
  status?: UserStatus;
}) => {
  await ensureSeeded();
  const { page = 1, pageSize = 10, q, role, status } = params;
  const all = (await get<User[]>(USERS_KEY, store)) ?? [];
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

export const findUserByEmail = async (email: string) => {
  await ensureSeeded();
  const all = (await get<User[]>(USERS_KEY, store)) ?? [];
  return all.find((user) => user.email.toLowerCase() === email.toLowerCase()) ?? null;
};

export const findUserById = async (id: string) => {
  await ensureSeeded();
  const all = (await get<User[]>(USERS_KEY, store)) ?? [];
  return all.find((user) => user.id === id) ?? null;
};

export const createUser = async (payload: Omit<User, "id" | "createdAt">) => {
  await ensureSeeded();
  const all = (await get<User[]>(USERS_KEY, store)) ?? [];
  const user: User = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await set(USERS_KEY, [user, ...all], store);
  return user;
};

export const getPasswordForEmail = async (email: string) => {
  await ensureSeeded();
  const map = (await get<Record<string, string>>(PASSWORDS_KEY, store)) ?? {};
  return map[email.toLowerCase()] ?? null;
};

export const setPasswordForEmail = async (email: string, password: string) => {
  await ensureSeeded();
  const map = (await get<Record<string, string>>(PASSWORDS_KEY, store)) ?? {};
  map[email.toLowerCase()] = password;
  await set(PASSWORDS_KEY, map, store);
};

export const updateUser = async (id: string, patch: Partial<User>) => {
  await ensureSeeded();
  const all = (await get<User[]>(USERS_KEY, store)) ?? [];
  const updated = all.map((user) => (user.id === id ? { ...user, ...patch } : user));
  const next = updated.find((user) => user.id === id) ?? null;
  await set(USERS_KEY, updated, store);
  return next;
};

export const createSession = async (userId: string) => {
  const session: Session = {
    token: crypto.randomUUID(),
    userId,
    createdAt: new Date().toISOString(),
  };
  await set(SESSION_KEY, session, store);
  return session;
};

export const getSession = async () => {
  return (await get<Session>(SESSION_KEY, store)) ?? null;
};

export const clearSession = async () => {
  await del(SESSION_KEY, store);
};

export const getFailedAttempts = async (email: string) => {
  const map = (await get<Record<string, number>>(FAILED_KEY, store)) ?? {};
  return map[email.toLowerCase()] ?? 0;
};

export const incrementFailedAttempt = async (email: string) => {
  const map = (await get<Record<string, number>>(FAILED_KEY, store)) ?? {};
  const key = email.toLowerCase();
  map[key] = (map[key] ?? 0) + 1;
  await set(FAILED_KEY, map, store);
  return map[key];
};

export const resetFailedAttempts = async (email: string) => {
  const map = (await get<Record<string, number>>(FAILED_KEY, store)) ?? {};
  const key = email.toLowerCase();
  if (map[key]) {
    delete map[key];
    await set(FAILED_KEY, map, store);
  }
};

export const createResetToken = async (email: string) => {
  const map =
    (await get<Record<string, { email: string; createdAt: string }>>(RESET_KEY, store)) ?? {};
  const token = crypto.randomUUID();
  map[token] = { email: email.toLowerCase(), createdAt: new Date().toISOString() };
  await set(RESET_KEY, map, store);
  return token;
};

export const consumeResetToken = async (token: string) => {
  const map =
    (await get<Record<string, { email: string; createdAt: string }>>(RESET_KEY, store)) ?? {};
  const entry = map[token];
  if (!entry) return null;
  delete map[token];
  await set(RESET_KEY, map, store);
  return entry.email;
};

export const getProjects = async (params: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: ProjectStatus;
  managerId?: string;
}) => {
  await ensureSeeded();
  const { page = 1, pageSize = 10, q, status, managerId } = params;
  const all = (await get<Project[]>(PROJECTS_KEY, store)) ?? [];
  const filtered = all.filter((project) => {
    const matchesQuery = q ? project.name.toLowerCase().includes(q.toLowerCase()) : true;
    const matchesStatus = status ? project.status === status : true;
    const matchesManager = managerId ? project.managerId === managerId : true;
    return matchesQuery && matchesStatus && matchesManager;
  });

  const start = (page - 1) * pageSize;
  return { items: filtered.slice(start, start + pageSize), total: filtered.length };
};

export const getProjectById = async (id: string) => {
  await ensureSeeded();
  const all = (await get<Project[]>(PROJECTS_KEY, store)) ?? [];
  return all.find((project) => project.id === id) ?? null;
};

export const createProject = async (payload: Omit<Project, "id" | "createdAt">) => {
  await ensureSeeded();
  const all = (await get<Project[]>(PROJECTS_KEY, store)) ?? [];
  const project: Project = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await set(PROJECTS_KEY, [project, ...all], store);
  return project;
};

export const updateProject = async (id: string, patch: Partial<Project>) => {
  await ensureSeeded();
  const all = (await get<Project[]>(PROJECTS_KEY, store)) ?? [];
  const updated = all.map((project) => (project.id === id ? { ...project, ...patch } : project));
  const next = updated.find((project) => project.id === id) ?? null;
  await set(PROJECTS_KEY, updated, store);
  return next;
};

export const getProjectMembers = async (projectId: string) => {
  await ensureSeeded();
  const all = (await get<ProjectMember[]>(PROJECT_MEMBERS_KEY, store)) ?? [];
  return all.filter((member) => member.projectId === projectId);
};

export const addProjectMember = async (member: ProjectMember) => {
  await ensureSeeded();
  const all = (await get<ProjectMember[]>(PROJECT_MEMBERS_KEY, store)) ?? [];
  const exists = all.some(
    (entry) => entry.projectId === member.projectId && entry.userId === member.userId
  );
  const next = exists ? all : [member, ...all];
  await set(PROJECT_MEMBERS_KEY, next, store);
  return member;
};

export const removeProjectMember = async (projectId: string, userId: string) => {
  await ensureSeeded();
  const all = (await get<ProjectMember[]>(PROJECT_MEMBERS_KEY, store)) ?? [];
  const next = all.filter((entry) => !(entry.projectId === projectId && entry.userId === userId));
  await set(PROJECT_MEMBERS_KEY, next, store);
  return { projectId, userId };
};

export const getTasks = async (params: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  projectId?: string;
  assigneeId?: string;
}) => {
  await ensureSeeded();
  const { page = 1, pageSize = 10, q, status, priority, projectId, assigneeId } = params;
  const all = (await get<Task[]>(TASKS_KEY, store)) ?? [];
  const filtered = all.filter((task) => {
    const matchesQuery = q ? task.title.toLowerCase().includes(q.toLowerCase()) : true;
    const matchesStatus = status ? task.status === status : true;
    const matchesPriority = priority ? task.priority === priority : true;
    const matchesProject = projectId ? task.projectId === projectId : true;
    const matchesAssignee = assigneeId ? task.assigneeId === assigneeId : true;
    return matchesQuery && matchesStatus && matchesPriority && matchesProject && matchesAssignee;
  });

  const start = (page - 1) * pageSize;
  return { items: filtered.slice(start, start + pageSize), total: filtered.length };
};

export const getTaskById = async (id: string) => {
  await ensureSeeded();
  const all = (await get<Task[]>(TASKS_KEY, store)) ?? [];
  return all.find((task) => task.id === id) ?? null;
};

export const createTask = async (payload: Omit<Task, "id" | "createdAt">) => {
  await ensureSeeded();
  const all = (await get<Task[]>(TASKS_KEY, store)) ?? [];
  const task: Task = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await set(TASKS_KEY, [task, ...all], store);
  return task;
};

export const updateTask = async (id: string, patch: Partial<Task>) => {
  await ensureSeeded();
  const all = (await get<Task[]>(TASKS_KEY, store)) ?? [];
  const updated = all.map((task) => (task.id === id ? { ...task, ...patch } : task));
  const next = updated.find((task) => task.id === id) ?? null;
  await set(TASKS_KEY, updated, store);
  return next;
};

export const getInvoices = async (params: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: InvoiceStatus;
}) => {
  await ensureSeeded();
  const { page = 1, pageSize = 10, q, status } = params;
  const all = (await get<Invoice[]>(INVOICES_KEY, store)) ?? [];
  const filtered = all.filter((invoice) => {
    const matchesQuery = q ? invoice.id.toLowerCase().includes(q.toLowerCase()) : true;
    const matchesStatus = status ? invoice.status === status : true;
    return matchesQuery && matchesStatus;
  });
  const start = (page - 1) * pageSize;
  return { items: filtered.slice(start, start + pageSize), total: filtered.length };
};

export const getInvoiceById = async (id: string) => {
  await ensureSeeded();
  const all = (await get<Invoice[]>(INVOICES_KEY, store)) ?? [];
  return all.find((invoice) => invoice.id === id) ?? null;
};

export const updateInvoice = async (id: string, patch: Partial<Invoice>) => {
  await ensureSeeded();
  const all = (await get<Invoice[]>(INVOICES_KEY, store)) ?? [];
  const updated = all.map((invoice) => (invoice.id === id ? { ...invoice, ...patch } : invoice));
  const next = updated.find((invoice) => invoice.id === id) ?? null;
  await set(INVOICES_KEY, updated, store);
  return next;
};

export const getActivity = async (limit = 20) => {
  await ensureSeeded();
  const all = (await get<ActivityLog[]>(ACTIVITY_KEY, store)) ?? [];
  return all.slice(0, limit);
};
