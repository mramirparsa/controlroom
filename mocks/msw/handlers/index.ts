import { authHandlers } from "@/mocks/msw/handlers/auth";
import { dashboardHandlers } from "@/mocks/msw/handlers/dashboard";
import { projectsHandlers } from "@/mocks/msw/handlers/projects";
import { tasksHandlers } from "@/mocks/msw/handlers/tasks";
import { invoicesHandlers } from "@/mocks/msw/handlers/invoices";
import { reportsHandlers } from "@/mocks/msw/handlers/reports";
import { usersHandlers } from "@/mocks/msw/handlers/users";

export const handlers = [
  ...authHandlers,
  ...dashboardHandlers,
  ...usersHandlers,
  ...projectsHandlers,
  ...tasksHandlers,
  ...invoicesHandlers,
  ...reportsHandlers,
];
