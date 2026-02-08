"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { toast } from "sonner";
import Link from "next/link";
import { apiClient } from "@/shared/lib/apiClient";
import type { Role, User } from "@/shared/types/models";
import { useAuthStore } from "@/features/auth/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const createSchema = z.object({
  name: z.string().min(2, "Enter a name"),
  email: z.string().email("Enter a valid email"),
  role: z.enum(["owner", "admin", "manager", "member"]),
  status: z.enum(["active", "inactive"]),
});

type CreateValues = z.infer<typeof createSchema>;

const roleOptions: Role[] = ["owner", "admin", "manager", "member"];

export default function UsersPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "">("");
  const [statusFilter, setStatusFilter] = useState<User["status"] | "">("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (user && user.role !== "owner" && user.role !== "admin") {
      router.replace("/403");
    }
  }, [user, router]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["users", page, pageSize, debouncedSearch, roleFilter, statusFilter],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
      });
      if (debouncedSearch) params.set("q", debouncedSearch);
      if (roleFilter) params.set("role", roleFilter);
      if (statusFilter) params.set("status", statusFilter);

      const res = await apiClient<{ items: User[]; total: number }>(`/api/users?${params}`);
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to fetch users");
      }
      return res.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (payload: CreateValues) => {
      const res = await apiClient<{ user: User }>("/api/users", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Failed to create user");
      }
      return res.data.user;
    },
    onSuccess: () => {
      toast.success("User created");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (payload: { id: string; patch: Partial<User> }) => {
      const res = await apiClient<{ user: User }>(`/api/users/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload.patch),
      });
      if (res.error || !res.data) {
        throw new Error(res.error?.message ?? "Update failed");
      }
      return res.data.user;
    },
    onMutate: async ({ id, patch }) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previous = queryClient.getQueryData<{ items: User[]; total: number }>([
        "users",
        page,
        pageSize,
        debouncedSearch,
        roleFilter,
        statusFilter,
      ]);

      if (previous) {
        queryClient.setQueryData(
          ["users", page, pageSize, debouncedSearch, roleFilter, statusFilter],
          {
            ...previous,
            items: previous.items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
          }
        );
      }

      return { previous };
    },
    onError: (error: Error, _payload, context) => {
      if (context?.previous) {
        queryClient.setQueryData(
          ["users", page, pageSize, debouncedSearch, roleFilter, statusFilter],
          context.previous
        );
      }
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("User updated");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateValues>({
    resolver: zodResolver(createSchema),
    defaultValues: { name: "", email: "", role: "member", status: "active" },
  });

  const onSubmit = handleSubmit((values) => {
    createMutation.mutate(values, {
      onSuccess: () => reset(),
    });
  });

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            onChange={(event) => table.toggleAllPageRowsSelected(event.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={(event) => row.toggleSelected(event.target.checked)}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <div className="space-y-1">
            <p className="font-medium">{row.original.name}</p>
            <Link href={`/users/${row.original.id}`} className="text-xs text-white/60 underline">
              View profile
            </Link>
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
          <select
            className="rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs"
            value={row.original.role}
            onChange={(event) =>
              updateMutation.mutate({
                id: row.original.id,
                patch: { role: event.target.value as Role },
              })
            }
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <Button
            size="xs"
            variant={row.original.status === "active" ? "secondary" : "outline"}
            className="border-white/10 text-white"
            onClick={() =>
              updateMutation.mutate({
                id: row.original.id,
                patch: {
                  status: row.original.status === "active" ? "inactive" : "active",
                },
              })
            }
          >
            {row.original.status}
          </Button>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created",
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
      },
    ],
    [updateMutation]
  );

  const table = useReactTable({
    data: data?.items ?? [],
    columns,
    state: { sorting, rowSelection },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: false,
  });

  const selectedIds = table.getSelectedRowModel().rows.map((row) => row.original.id);

  const handleBulkDisable = () => {
    selectedIds.forEach((id) => updateMutation.mutate({ id, patch: { status: "inactive" } }));
  };

  if (user && user.role !== "owner" && user.role !== "admin") {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle>Create user</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Alex Morgan"
                className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                {...register("name")}
              />
              {errors.name ? <p className="text-xs text-rose-300">{errors.name.message}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="alex@company.com"
                className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-xs text-rose-300">{errors.email.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <select
                className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
                {...register("role")}
              >
                {roleOptions.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <select
                className="h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
                {...register("status")}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3">
              <Button type="submit" className="bg-white text-slate-900 hover:bg-white/90">
                {createMutation.isPending ? "Creating..." : "Create user"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-white/10 text-white"
                onClick={() => reset()}
              >
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <p className="text-sm text-white/60">Manage access, roles, and activity.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              className="w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40"
            />
            <select
              className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              value={roleFilter}
              onChange={(event) => {
                setRoleFilter(event.target.value as Role | "");
                setPage(1);
              }}
            >
              <option value="">All roles</option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <select
              className="h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm"
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value as User["status"] | "");
                setPage(1);
              }}
            >
              <option value="">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <Button
              variant="outline"
              className="border-white/10 text-white"
              onClick={() => refetch()}
            >
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10 text-white">
                {data?.total ?? 0} users
              </Badge>
              {selectedIds.length > 0 ? (
                <Badge variant="secondary" className="bg-white/10 text-white">
                  {selectedIds.length} selected
                </Badge>
              ) : null}
            </div>
            <Button
              variant="outline"
              className="border-white/10 text-white"
              onClick={handleBulkDisable}
              disabled={selectedIds.length === 0}
            >
              Disable selected
            </Button>
          </div>

          {isLoading ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
              Loading users...
            </div>
          ) : isError ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-lg font-semibold">Failed to load users</p>
              <p className="text-white/60">Please try again.</p>
              <Button className="mt-4" onClick={() => refetch()}>
                Retry
              </Button>
            </div>
          ) : data && data.items.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-lg font-semibold">No users found</p>
              <p className="text-white/60">Try adjusting filters or create a new user.</p>
            </div>
          ) : (
            <div className="rounded-xl border border-white/10">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-white/60">
            <p>
              Page {page} of {Math.max(1, Math.ceil((data?.total ?? 0) / pageSize))}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-white/10 text-white"
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-white"
                disabled={page >= Math.ceil((data?.total ?? 0) / pageSize)}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
