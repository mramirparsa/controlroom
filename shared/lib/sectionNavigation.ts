import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Megaphone,
  PackageSearch,
  Plug,
  Settings,
  Shield,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SectionChild = {
  id: string;
  label: string;
  description?: string;
  variant?: "metrics" | "table" | "board" | "timeline" | "insights";
};

export type SectionConfig = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  children: SectionChild[];
};

export const sectionNavigation: SectionConfig[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    children: [
      { id: "overview", label: "Overview", variant: "metrics" },
      { id: "kpi", label: "KPI Summary", variant: "insights" },
      { id: "activity", label: "Activity Feed", variant: "timeline" },
      { id: "monitor", label: "Real-time Monitor", variant: "table" },
    ],
  },
  {
    id: "users",
    label: "Users",
    href: "/users",
    icon: Users,
    children: [
      { id: "list", label: "User List", variant: "table" },
      { id: "roles", label: "Roles & Permissions", variant: "insights" },
      { id: "teams", label: "Teams", variant: "board" },
      { id: "invitations", label: "Invitations", variant: "timeline" },
      { id: "logs", label: "Access Logs", variant: "table" },
    ],
  },
  {
    id: "content",
    label: "Content",
    href: "/content",
    icon: FileText,
    children: [
      { id: "pages", label: "Pages", variant: "table" },
      { id: "articles", label: "Articles", variant: "timeline" },
      { id: "categories", label: "Categories", variant: "insights" },
      { id: "media", label: "Media Library", variant: "board" },
      { id: "comments", label: "Comments", variant: "table" },
    ],
  },
  {
    id: "catalog",
    label: "Catalog",
    href: "/catalog",
    icon: ShoppingBag,
    children: [
      { id: "products", label: "Products", variant: "table" },
      { id: "inventory", label: "Inventory", variant: "metrics" },
      { id: "pricing", label: "Pricing", variant: "insights" },
      { id: "discounts", label: "Discounts", variant: "timeline" },
      { id: "reviews", label: "Reviews", variant: "board" },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    href: "/orders",
    icon: PackageSearch,
    children: [
      { id: "list", label: "Order List", variant: "table" },
      { id: "payments", label: "Payments", variant: "insights" },
      { id: "shipping", label: "Shipping", variant: "timeline" },
      { id: "returns", label: "Returns", variant: "board" },
      { id: "invoices", label: "Invoices", variant: "table" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    href: "/marketing",
    icon: Megaphone,
    children: [
      { id: "campaigns", label: "Campaigns", variant: "table" },
      { id: "audiences", label: "Audiences", variant: "board" },
      { id: "automation", label: "Automation", variant: "timeline" },
      { id: "seo", label: "SEO", variant: "insights" },
      { id: "affiliates", label: "Affiliates", variant: "metrics" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    children: [
      { id: "traffic", label: "Traffic", variant: "metrics" },
      { id: "funnels", label: "Funnels", variant: "board" },
      { id: "cohorts", label: "Cohorts", variant: "timeline" },
      { id: "reports", label: "Reports", variant: "table" },
      { id: "builder", label: "Dashboard Builder", variant: "insights" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    href: "/integrations",
    icon: Plug,
    children: [
      { id: "apps", label: "Connected Apps", variant: "board" },
      { id: "webhooks", label: "Webhooks", variant: "timeline" },
      { id: "api", label: "API Keys", variant: "table" },
      { id: "marketplace", label: "Marketplace", variant: "insights" },
    ],
  },
  {
    id: "system",
    label: "System",
    href: "/system",
    icon: Shield,
    children: [
      { id: "monitoring", label: "Monitoring", variant: "metrics" },
      { id: "logs", label: "Logs", variant: "table" },
      { id: "audit", label: "Audit", variant: "timeline" },
      { id: "maintenance", label: "Maintenance", variant: "insights" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: Settings,
    children: [
      { id: "general", label: "General", variant: "insights" },
      { id: "security", label: "Security", variant: "timeline" },
      { id: "billing", label: "Billing", variant: "table" },
      { id: "notifications", label: "Notifications", variant: "board" },
      { id: "api", label: "API & Keys", variant: "metrics" },
    ],
  },
];

export const getSectionById = (id: string) =>
  sectionNavigation.find((section) => section.id === id) ?? null;

export const getSectionByPath = (pathname: string) =>
  sectionNavigation.find((section) => pathname.startsWith(section.href)) ?? null;

export const getSectionChild = (sectionId: string, childId: string) => {
  const section = getSectionById(sectionId);
  if (!section) return null;
  return section.children.find((child) => child.id === childId) ?? null;
};
