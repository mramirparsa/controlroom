"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { sectionNavigation } from "@/shared/lib/sectionNavigation";
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Megaphone,
  Moon,
  PackageSearch,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
  ShoppingBag,
  Sliders,
  Sun,
  Users,
  Wrench,
} from "lucide-react";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isHydrating, user, logout } = useAuthStore();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("controlroom.sidebarCollapsed") === "true";
  });
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("controlroom.theme") as "light" | "dark") ?? "dark";
  });

  useEffect(() => {
    if (!isHydrating && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isHydrating, isAuthenticated, router]);

  useEffect(() => {
    localStorage.setItem("controlroom.sidebarCollapsed", String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("controlroom.theme", theme);
  }, [theme]);

  const groupIcons = useMemo(
    () => ({
      dashboard: LayoutDashboard,
      users: Users,
      content: FileText,
      catalog: ShoppingBag,
      orders: PackageSearch,
      marketing: Megaphone,
      analytics: BarChart3,
      integrations: Wrench,
      system: ShieldCheck,
      settings: Sliders,
    }),
    []
  );

  if (isHydrating) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen">
          <aside className="hidden w-72 border-r border-border/60 bg-background px-6 py-8 lg:block">
            <div className="mb-8 h-10 w-36 animate-pulse rounded-xl bg-muted/40" />
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-3 w-20 rounded bg-muted/40" />
                  <div className="space-y-1">
                    {Array.from({ length: 3 }).map((__, subIndex) => (
                      <div key={subIndex} className="h-8 w-full rounded bg-muted/40" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <div className="flex flex-1 flex-col">
            <header className="flex items-center justify-between border-b border-border/60 px-6 py-4">
              <div className="space-y-2">
                <div className="h-3 w-24 rounded bg-muted/40" />
                <div className="h-5 w-40 rounded bg-muted/40" />
              </div>
              <div className="h-9 w-32 rounded bg-muted/40" />
            </header>
            <main className="flex-1 px-6 py-8">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-32 rounded-2xl border border-border/60 bg-muted/30"
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Mobile sidebar overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
            mobileSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileSidebarOpen(false)}
        />
        <aside
          className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-border/40 bg-card/90 px-4 py-6 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                ControlRoom
              </p>
              <p className="text-base font-semibold text-foreground">Operations</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <PanelLeftClose size={14} />
            </Button>
          </div>
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border/40 bg-background/60 p-3 shadow-sm backdrop-blur-sm">
            <nav className="space-y-1 text-sm">
              {sectionNavigation.map((section) => {
                const Icon = groupIcons[section.id as keyof typeof groupIcons] ?? LayoutDashboard;
                const active = isActive(pathname, section.href);

                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    <span className="font-medium">{section.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>
        <aside
          className={`fixed left-0 top-0 hidden h-screen border-r border-border/40 bg-card/50 py-6 backdrop-blur-xl transition-all duration-300 lg:block ${
            sidebarCollapsed ? "w-20 px-3" : "w-72 px-4"
          }`}
        >
          {/* Logo */}
          {sidebarCollapsed ? (
            <div className="mb-6 flex flex-col items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground"
                onClick={() => setSidebarCollapsed((current) => !current)}
                aria-label="Toggle sidebar"
              >
                <PanelLeftOpen size={14} />
              </Button>
            </div>
          ) : (
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  ControlRoom
                </p>
                <p className="text-base font-semibold text-foreground">Operations</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground"
                onClick={() => setSidebarCollapsed((current) => !current)}
                aria-label="Toggle sidebar"
              >
                <PanelLeftClose size={14} />
              </Button>
            </div>
          )}

          {/* Navigation */}
          <div
            className={`max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border/40 bg-background/60 shadow-sm backdrop-blur-sm ${
              sidebarCollapsed ? "p-2" : "p-3"
            }`}
          >
            <nav
              className={`space-y-1 text-sm ${
                sidebarCollapsed ? "flex flex-col items-center" : ""
              }`}
            >
              {sectionNavigation.map((section) => {
                const Icon = groupIcons[section.id as keyof typeof groupIcons] ?? LayoutDashboard;
                const active = isActive(pathname, section.href);

                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`group flex items-center rounded-xl transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    } ${
                      sidebarCollapsed ? "mx-auto h-10 w-10 justify-center" : "gap-3 px-3 py-2.5"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors ${
                        active
                          ? "text-primary"
                          : sidebarCollapsed
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    {!sidebarCollapsed ? (
                      <span className="font-medium">{section.label}</span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom user area */}
          {!sidebarCollapsed ? (
            <div className="absolute bottom-6 left-4 right-4">
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-muted/50 p-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                    {user?.name
                      ?.split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <p className="truncate text-sm font-medium text-foreground">{user?.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>
            </div>
          ) : null}
        </aside>

        <div
          className={`flex min-h-screen flex-1 flex-col transition-all duration-300 ${
            sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
          }`}
        >
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden"
                onClick={() => setMobileSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <PanelLeftOpen size={16} />
              </Button>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Welcome back</p>
                <h2 className="text-xl font-bold text-foreground">{user?.name ?? "Operator"}</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
              <div className="hidden items-center gap-3 sm:flex">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{user?.name}</p>
                  <p className="text-xs capitalize text-muted-foreground">{user?.role}</p>
                </div>
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
                    {user?.name
                      ?.split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-xl border-border/40 text-sm font-medium"
                onClick={logout}
              >
                Log out
              </Button>
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
          <footer className="border-t border-border/30 bg-background/80 px-6 py-4 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-muted-foreground">
              <span>
                Built with ❤️ by{" "}
                <a
                  href="https://amirshasti.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary"
                >
                  Amirhossein Shasti
                </a>
              </span>
              <span className="hidden text-muted-foreground/40 sm:inline">•</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/mramirparsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/mramirparsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Telegram
                </a>
                <a
                  href="https://instagram.com/__Amirhossein1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
