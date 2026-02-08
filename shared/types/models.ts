export type Role = "owner" | "admin" | "manager" | "member";

export type UserStatus = "active" | "inactive";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: UserStatus;
  createdAt: string;
};

export type Session = {
  token: string;
  userId: string;
  createdAt: string;
};

export type ApiResponse<T> = {
  data: T | null;
  error: { message: string; code?: string } | null;
  meta?: Record<string, unknown>;
};

export type ProjectStatus = "active" | "paused" | "completed" | "archived";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  managerId: string;
  startDate: string;
  dueDate: string;
  budget: number;
  createdAt: string;
};

export type ProjectRole = "owner" | "manager" | "contributor" | "viewer";

export type ProjectMember = {
  projectId: string;
  userId: string;
  projectRole: ProjectRole;
};

export type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high" | "urgent";

export type Task = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: string | null;
  dueDate: string | null;
  labels: string[];
  createdAt: string;
};

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

export type Invoice = {
  id: string;
  projectId: string;
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  status: InvoiceStatus;
  issuedAt: string;
  paidAt: string | null;
};

export type ActivityEntity = "project" | "task" | "invoice" | "user";

export type ActivityLog = {
  id: string;
  actorId: string;
  action: string;
  entityType: ActivityEntity;
  entityId: string;
  createdAt: string;
};

export type Notification = {
  id: string;
  userId: string;
  title: string;
  body: string;
  readAt: string | null;
  createdAt: string;
};
