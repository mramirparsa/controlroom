(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      s = e.i(48612),
      i = e.i(2082);
    function a(e) {
      let a,
        r,
        n,
        l,
        c = (0, s.c)(8);
      return (
        c[0] !== e
          ? (({ className: a, ...r } = e), (c[0] = e), (c[1] = a), (c[2] = r))
          : ((a = c[1]), (r = c[2])),
        c[3] !== a
          ? ((n = (0, i.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              a
            )),
            (c[3] = a),
            (c[4] = n))
          : (n = c[4]),
        c[5] !== r || c[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card", className: n, ...r })),
            (c[5] = r),
            (c[6] = n),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    }
    function r(e) {
      let a,
        r,
        n,
        l,
        c = (0, s.c)(8);
      return (
        c[0] !== e
          ? (({ className: a, ...r } = e), (c[0] = e), (c[1] = a), (c[2] = r))
          : ((a = c[1]), (r = c[2])),
        c[3] !== a
          ? ((n = (0, i.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              a
            )),
            (c[3] = a),
            (c[4] = n))
          : (n = c[4]),
        c[5] !== r || c[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-header", className: n, ...r })),
            (c[5] = r),
            (c[6] = n),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    }
    function n(e) {
      let a,
        r,
        n,
        l,
        c = (0, s.c)(8);
      return (
        c[0] !== e
          ? (({ className: a, ...r } = e), (c[0] = e), (c[1] = a), (c[2] = r))
          : ((a = c[1]), (r = c[2])),
        c[3] !== a
          ? ((n = (0, i.cn)("leading-none font-semibold", a)), (c[3] = a), (c[4] = n))
          : (n = c[4]),
        c[5] !== r || c[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-title", className: n, ...r })),
            (c[5] = r),
            (c[6] = n),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    }
    function l(e) {
      let a,
        r,
        n,
        l,
        c = (0, s.c)(8);
      return (
        c[0] !== e
          ? (({ className: a, ...r } = e), (c[0] = e), (c[1] = a), (c[2] = r))
          : ((a = c[1]), (r = c[2])),
        c[3] !== a
          ? ((n = (0, i.cn)("text-muted-foreground text-sm", a)), (c[3] = a), (c[4] = n))
          : (n = c[4]),
        c[5] !== r || c[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-description", className: n, ...r })),
            (c[5] = r),
            (c[6] = n),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    }
    function c(e) {
      let a,
        r,
        n,
        l,
        c = (0, s.c)(8);
      return (
        c[0] !== e
          ? (({ className: a, ...r } = e), (c[0] = e), (c[1] = a), (c[2] = r))
          : ((a = c[1]), (r = c[2])),
        c[3] !== a ? ((n = (0, i.cn)("px-6", a)), (c[3] = a), (c[4] = n)) : (n = c[4]),
        c[5] !== r || c[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-content", className: n, ...r })),
            (c[5] = r),
            (c[6] = n),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    }
    e.s([
      "Card",
      () => a,
      "CardContent",
      () => c,
      "CardDescription",
      () => l,
      "CardHeader",
      () => r,
      "CardTitle",
      () => n,
    ]);
  },
  76111,
  (e) => {
    "use strict";
    var t = e.i(62482),
      s = e.i(48612),
      i = e.i(8857),
      a = e.i(19546),
      r = e.i(2082);
    let n = (0, i.cva)(
      "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive:
              "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            link: "text-primary underline-offset-4 [a&]:hover:underline",
          },
        },
        defaultVariants: { variant: "default" },
      }
    );
    function l(e) {
      let i,
        l,
        c,
        d,
        o,
        m,
        h = (0, s.c)(13);
      h[0] !== e
        ? (({ className: i, variant: c, asChild: d, ...l } = e),
          (h[0] = e),
          (h[1] = i),
          (h[2] = l),
          (h[3] = c),
          (h[4] = d))
        : ((i = h[1]), (l = h[2]), (c = h[3]), (d = h[4]));
      let x = void 0 === c ? "default" : c,
        g = void 0 !== d && d ? a.Slot.Root : "span";
      return (
        h[5] !== i || h[6] !== x
          ? ((o = (0, r.cn)(n({ variant: x }), i)), (h[5] = i), (h[6] = x), (h[7] = o))
          : (o = h[7]),
        h[8] !== g || h[9] !== l || h[10] !== o || h[11] !== x
          ? ((m = (0, t.jsx)(g, { "data-slot": "badge", "data-variant": x, className: o, ...l })),
            (h[8] = g),
            (h[9] = l),
            (h[10] = o),
            (h[11] = x),
            (h[12] = m))
          : (m = h[12]),
        m
      );
    }
    e.s(["Badge", () => l]);
  },
  99404,
  (e) => {
    "use strict";
    var t = e.i(62482),
      s = e.i(48612),
      i = e.i(59587),
      a = e.i(76111),
      r = e.i(22991),
      n = e.i(39781);
    let l = (e, t, s) => ({
        title: e,
        items: s.map((e) => ({
          label: e,
          href: `/ops/${t}/${e
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\//g, "-")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`,
        })),
      }),
      c = [
        l("Dashboard", "dashboard", [
          "Overview",
          "KPI Summary",
          "Activity Feed",
          "Trends & Insights",
          "Real-time Monitor",
          "Quick Actions",
        ]),
        l("User Management", "user-management", [
          "Users",
          "User List",
          "User Details",
          "Create User",
          "Edit User",
          "Bulk Actions",
          "Roles & Permissions",
          "Roles",
          "Permission Matrix",
          "Policy Rules",
          "Access Logs",
          "Teams & Groups",
          "Teams",
          "Departments",
          "User Groups",
          "Invitations",
          "Pending Invites",
          "Invite Settings",
          "Profiles & Identity",
          "Profile Fields",
          "Verification Status",
        ]),
        l("Authentication & Security", "authentication-security", [
          "Authentication",
          "Sign-in Methods",
          "Password Policy",
          "MFA / 2FA",
          "SSO (SAML/OAuth)",
          "Sessions",
          "Active Sessions",
          "Device History",
          "Force Logout",
          "Security Center",
          "Security Alerts",
          "Risk Scores",
          "IP Allowlist / Blocklist",
          "Geo Restrictions",
          "Audit & Compliance",
          "Audit Logs",
          "Data Access Logs",
          "Change History",
          "Keys & Secrets",
          "API Keys",
          "Webhooks Secrets",
          "Token Management",
        ]),
        l("Organization & Workspace", "organization-workspace", [
          "Organization Settings",
          "Company Profile",
          "Branding",
          "Localization",
          "Workspaces",
          "Workspace List",
          "Workspace Settings",
          "Workspace Members",
          "Resource Ownership",
          "Transfers",
          "Shared Resources",
        ]),
        l("Content Management", "content-management", [
          "Content",
          "Pages",
          "Posts / Articles",
          "Categories",
          "Tags",
          "Media Library",
          "Uploads",
          "Folders",
          "Image Optimization",
          "Editor Tools",
          "Drafts",
          "Revisions",
          "Publishing Schedule",
          "Comments & Moderation",
          "Pending",
          "Reported",
          "Banned Words",
        ]),
        l("Product / Catalog", "product-catalog", [
          "Products",
          "Product List",
          "Variants",
          "Attributes",
          "Collections",
          "Inventory",
          "Stock Levels",
          "Warehouses",
          "Stock Movements",
          "Pricing",
          "Price Lists",
          "Discounts",
          "Coupons",
          "Promotions",
          "Reviews",
          "Review Queue",
          "Ratings Analytics",
        ]),
        l("Orders & Fulfillment", "orders-fulfillment", [
          "Orders",
          "Order List",
          "Order Details",
          "Status Pipeline",
          "Payments",
          "Transactions",
          "Refunds",
          "Chargebacks",
          "Shipping",
          "Carriers",
          "Shipping Labels",
          "Delivery Zones",
          "Returns",
          "Return Requests",
          "Return Reasons",
          "Invoices",
          "Invoice Templates",
          "Tax Documents",
        ]),
        l("Customer Support", "customer-support", [
          "Customers",
          "Customer List",
          "Customer Profile",
          "Customer Segments",
          "Tickets",
          "Inbox",
          "SLA Queue",
          "Assignments",
          "Live Chat",
          "Conversations",
          "Chat Widgets",
          "Knowledge Base",
          "Articles",
          "Categories",
          "Feedback",
          "NPS / CSAT",
          "Feature Requests",
        ]),
        l("Marketing", "marketing", [
          "Campaigns",
          "Email Campaigns",
          "SMS Campaigns",
          "Push Notifications",
          "Segmentation",
          "Audiences",
          "Rules Builder",
          "Automation",
          "Flows",
          "Triggers & Actions",
          "SEO",
          "Metadata Manager",
          "Sitemap",
          "Redirects",
          "Referrals & Affiliates",
          "Affiliate Programs",
          "Payouts",
        ]),
        l("Analytics & Reporting", "analytics-reporting", [
          "Analytics",
          "Traffic Analytics",
          "Conversion Funnel",
          "Retention / Cohorts",
          "Reports",
          "Scheduled Reports",
          "Custom Reports",
          "Export Center",
          "Data Visualization",
          "Charts Library",
          "Dashboard Builder",
        ]),
        l("Finance & Billing", "finance-billing", [
          "Billing",
          "Plans",
          "Subscriptions",
          "Usage Metering",
          "Invoices",
          "Invoice History",
          "Tax Settings",
          "Payments",
          "Payment Methods",
          "Payouts",
          "Credits",
          "Coupons",
          "Wallet / Credits",
        ]),
        l("Notifications & Communication", "notifications-communication", [
          "Notifications",
          "Templates",
          "Delivery Channels",
          "Notification Rules",
          "Message Center",
          "Broadcast Messages",
          "Announcements",
          "Email Templates",
          "Template Builder",
          "Variables",
        ]),
        l("Integrations", "integrations", [
          "Integrations Hub",
          "Connected Apps",
          "Marketplace",
          "Webhooks",
          "Endpoints",
          "Retry Queue",
          "Event Types",
          "API",
          "API Docs",
          "API Keys",
          "Rate Limits",
          "Third-party Services",
          "Payments (Stripe etc.)",
          "Analytics (GA etc.)",
          "Storage (S3 etc.)",
        ]),
        l("Workflow & Automation", "workflow-automation", [
          "Workflow Builder",
          "Rule Engine",
          "Approvals",
          "Assignments",
          "Jobs & Queues",
          "Background Jobs",
          "Retries",
          "Scheduling",
          "Cron Jobs",
          "Task Scheduler",
        ]),
        l("Settings", "settings", [
          "General Settings",
          "App Settings",
          "Themes",
          "Language & Region",
          "Feature Flags",
          "Environments",
          "Rollout Rules",
          "Data Management",
          "Import",
          "Export",
          "Backup & Restore",
        ]),
        l("Logs & Monitoring", "logs-monitoring", [
          "System Health",
          "Status",
          "Uptime",
          "Monitoring",
          "Error Tracking",
          "Performance Metrics",
          "Latency",
          "Logs",
          "Application Logs",
          "Security Logs",
          "Request Logs",
        ]),
        l("Admin Tools", "admin-tools", [
          "Admin Console",
          "Global Search",
          "Admin Actions",
          "Maintenance",
          "Maintenance Mode",
          "Cache Management",
          "Bulk Operations",
          "Batch Updates",
          "Batch Delete",
          "Data Inspector",
          "Raw Data Viewer",
          "Relations Viewer",
        ]),
        l("Legal & Compliance", "legal-compliance", [
          "Privacy",
          "Data Requests (DSAR)",
          "Consent Management",
          "Compliance",
          "GDPR Tools",
          "Retention Policies",
          "Terms & Policies",
          "Terms Pages",
          "Policy Updates",
        ]),
        l("Developer Tools", "developer-tools", [
          "Environments",
          "Dev / Staging / Prod",
          "Releases",
          "Changelog",
          "Deployment History",
          "Sandbox",
          "Test Data Generator",
          "Feature Toggles",
          "Experiments (A/B)",
        ]),
        l("Help & Documentation", "help-documentation", [
          "Help Center",
          "System Documentation",
          "Release Notes",
          "Contact Support",
          "Shortcuts / Hotkeys",
        ]),
      ].flatMap((e) => e.items),
      d = (e, t) => {
        let s = 0;
        for (let i = 0; i < e.length; i += 1) s = (31 * s + e.charCodeAt(i)) % t;
        return s;
      };
    function o() {
      let e,
        a,
        l,
        o,
        f,
        P,
        k,
        $,
        M,
        B,
        L,
        D,
        H,
        I,
        O,
        E,
        U = (0, s.c)(45),
        F = (0, i.useParams)();
      U[0] !== F.slug
        ? ((e = Array.isArray(F.slug) ? F.slug.join("/") : String(F.slug ?? "")),
          (U[0] = F.slug),
          (U[1] = e))
        : (e = U[1]);
      let W = e;
      U[2] !== W
        ? ((a = c.find((e) => e.href === `/ops/${W}`)), (U[2] = W), (U[3] = a))
        : (a = U[3]);
      let z = a,
        G = W || "ops";
      if (U[4] !== G)
        ((l = Array.from({ length: 6 }).map((e, t) => ({
          id: `${G}-${t + 1}`,
          name: `Record ${t + 1}`,
          owner: ["Ava", "Theo", "Nia", "Miles", "Zara", "Levi"][t % 6],
          status: ["active", "monitor", "paused", "risk"][t % 4],
          updated: `${d(G, 28) + t + 1}d ago`,
        }))),
          (U[4] = G),
          (U[5] = l));
      else l = U[5];
      if (U[6] !== G)
        ((o = [
          { title: "Coverage", value: `${70 + d(G, 25)}%`, trend: "+2%" },
          { title: "Velocity", value: `${30 + d(G, 60)}`, trend: "+6%" },
          { title: "Compliance", value: `${80 + d(G, 15)}%`, trend: "-1%" },
          { title: "Satisfaction", value: `${3.6 + d(G, 14) / 10}`, trend: "+0.2" },
        ]),
          (U[6] = G),
          (U[7] = o));
      else o = U[7];
      if (U[8] !== G)
        ((f = Array.from({ length: 5 }).map((e, t) => ({
          id: `${G}-activity-${t}`,
          title: `Action ${t + 1} completed`,
          meta: `Owner: ${["Ava", "Theo", "Nia", "Miles", "Zara"][t % 5]}`,
          time: `${d(G, 18) + t + 1}h ago`,
        }))),
          (U[8] = G),
          (U[9] = f));
      else f = U[9];
      if (U[10] !== G)
        ((P = ["Planned", "In progress", "Review", "Done"].map((e, t) => ({
          id: `${G}-col-${t}`,
          title: e,
          items: Array.from({ length: 3 }).map((t, s) => ({
            id: `${G}-${e}-${s}`,
            title: `${e} item ${s + 1}`,
            owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][s % 5],
            priority: ["low", "medium", "high"][s % 3],
          })),
        }))),
          (U[10] = G),
          (U[11] = P));
      else P = U[11];
      if (U[12] !== G)
        ((k = [
          {
            title: "Adoption",
            value: `${60 + d(G, 35)}%`,
            note: "Active adoption across key accounts",
          },
          {
            title: "Efficiency",
            value: `${40 + d(G, 45)}%`,
            note: "Workflow throughput this period",
          },
          { title: "Coverage", value: `${70 + d(G, 25)}%`, note: "Policy coverage achieved" },
        ]),
          (U[12] = G),
          (U[13] = k));
      else k = U[13];
      if (U[14] !== G)
        (($ = Array.from({ length: 4 }).map((e, t) => ({
          id: `${G}-note-${t}`,
          title: `Note ${t + 1}`,
          body: `Contextual insight for ${G} #${t + 1}.`,
        }))),
          (U[14] = G),
          (U[15] = $));
      else $ = U[15];
      (U[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = [
            "Review latest changes",
            "Confirm policy alignment",
            "Notify stakeholders",
            "Schedule follow-up",
          ]),
          (U[16] = M))
        : (M = U[16]),
        U[17] !== G ? ((B = d(G, 4)), (U[17] = G), (U[18] = B)) : (B = U[18]),
        U[19] !== l ||
        U[20] !== o ||
        U[21] !== f ||
        U[22] !== P ||
        U[23] !== k ||
        U[24] !== $ ||
        U[25] !== B
          ? ((L = {
              rows: l,
              signals: o,
              timeline: f,
              board: P,
              insights: k,
              notes: $,
              checklist: M,
              mode: B,
            }),
            (U[19] = l),
            (U[20] = o),
            (U[21] = f),
            (U[22] = P),
            (U[23] = k),
            (U[24] = $),
            (U[25] = B),
            (U[26] = L))
          : (L = U[26]));
      let V = L;
      if (!z) {
        let e;
        return (
          U[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsxs)(n.Card, {
                className: "border-white/10 bg-white/5",
                children: [
                  (0, t.jsx)(n.CardHeader, {
                    children: (0, t.jsx)(n.CardTitle, { children: "Section not found" }),
                  }),
                  (0, t.jsx)(n.CardContent, {
                    className: "text-white/60",
                    children:
                      "This section does not exist yet. Please choose a valid item from the sidebar.",
                  }),
                ],
              })),
              (U[27] = e))
            : (e = U[27]),
          e
        );
      }
      return (
        U[28] !== z.label
          ? ((D = (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("p", {
                  className: "text-sm text-white/60",
                  children: ["Operations / ", z.label],
                }),
                (0, t.jsx)("h1", { className: "text-2xl font-semibold", children: z.label }),
              ],
            })),
            (U[28] = z.label),
            (U[29] = D))
          : (D = U[29]),
        U[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, t.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, t.jsx)(r.Button, {
                  variant: "outline",
                  className: "border-white/10 text-white",
                  children: "Export",
                }),
                (0, t.jsx)(r.Button, {
                  className: "bg-white text-slate-900 hover:bg-white/90",
                  children: "New entry",
                }),
              ],
            })),
            (U[30] = H))
          : (H = U[30]),
        U[31] !== D
          ? ((I = (0, t.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-4",
              children: [D, H],
            })),
            (U[31] = D),
            (U[32] = I))
          : (I = U[32]),
        U[33] !== V.board ||
        U[34] !== V.checklist ||
        U[35] !== V.insights ||
        U[36] !== V.mode ||
        U[37] !== V.notes ||
        U[38] !== V.rows ||
        U[39] !== V.signals ||
        U[40] !== V.timeline
          ? ((O =
              0 === V.mode
                ? (0, t.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, t.jsx)("div", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
                        children: V.signals.map(R),
                      }),
                      (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                        children: [
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5 lg:col-span-2",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Operational records",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-3",
                                children: V.rows.map(T),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Live signals",
                                }),
                              }),
                              (0, t.jsxs)(n.CardContent, {
                                className: "space-y-3",
                                children: [
                                  V.checklist.map(S),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs text-white/60",
                                    children:
                                      "Signals update every 15 minutes based on internal telemetry.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                        children: [
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Compliance checklist",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-3",
                                children: V.checklist.map(A),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5 lg:col-span-2",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Activity timeline",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-3",
                                children: V.timeline.map(y),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : 1 === V.mode
                  ? (0, t.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, t.jsx)("div", {
                          className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                          children: V.insights.map(N),
                        }),
                        (0, t.jsx)("div", {
                          className: "grid grid-cols-1 gap-4 xl:grid-cols-4",
                          children: V.board.map(C),
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                          children: [
                            (0, t.jsxs)(n.Card, {
                              className: "border-white/10 bg-white/5",
                              children: [
                                (0, t.jsx)(n.CardHeader, {
                                  children: (0, t.jsx)(n.CardTitle, {
                                    className: "text-sm text-white/60",
                                    children: "Notes",
                                  }),
                                }),
                                (0, t.jsx)(n.CardContent, {
                                  className: "space-y-3",
                                  children: V.notes.map(v),
                                }),
                              ],
                            }),
                            (0, t.jsxs)(n.Card, {
                              className: "border-white/10 bg-white/5 lg:col-span-2",
                              children: [
                                (0, t.jsx)(n.CardHeader, {
                                  children: (0, t.jsx)(n.CardTitle, {
                                    className: "text-sm text-white/60",
                                    children: "Recent activity",
                                  }),
                                }),
                                (0, t.jsx)(n.CardContent, {
                                  className: "space-y-3",
                                  children: V.timeline.map(b),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : 2 === V.mode
                    ? (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                        children: [
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5 lg:col-span-2",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Decision register",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-3",
                                children: V.rows.map(w),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Signals",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-4",
                                children: V.signals.map(j),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Actionable checklist",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "space-y-3",
                                children: V.checklist.map(p),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(n.Card, {
                            className: "border-white/10 bg-white/5 lg:col-span-2",
                            children: [
                              (0, t.jsx)(n.CardHeader, {
                                children: (0, t.jsx)(n.CardTitle, {
                                  className: "text-sm text-white/60",
                                  children: "Observations",
                                }),
                              }),
                              (0, t.jsx)(n.CardContent, {
                                className: "grid gap-3 md:grid-cols-2",
                                children: V.notes.map(u),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, t.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
                            children: V.signals.map(g),
                          }),
                          (0, t.jsxs)("div", {
                            className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                            children: [
                              (0, t.jsxs)(n.Card, {
                                className: "border-white/10 bg-white/5",
                                children: [
                                  (0, t.jsx)(n.CardHeader, {
                                    children: (0, t.jsx)(n.CardTitle, {
                                      className: "text-sm text-white/60",
                                      children: "Latest decisions",
                                    }),
                                  }),
                                  (0, t.jsx)(n.CardContent, {
                                    className: "space-y-3",
                                    children: V.rows.slice(0, 4).map(x),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(n.Card, {
                                className: "border-white/10 bg-white/5",
                                children: [
                                  (0, t.jsx)(n.CardHeader, {
                                    children: (0, t.jsx)(n.CardTitle, {
                                      className: "text-sm text-white/60",
                                      children: "Milestones",
                                    }),
                                  }),
                                  (0, t.jsx)(n.CardContent, {
                                    className: "space-y-3",
                                    children: V.timeline.map(h),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(n.Card, {
                                className: "border-white/10 bg-white/5",
                                children: [
                                  (0, t.jsx)(n.CardHeader, {
                                    children: (0, t.jsx)(n.CardTitle, {
                                      className: "text-sm text-white/60",
                                      children: "Highlights",
                                    }),
                                  }),
                                  (0, t.jsx)(n.CardContent, {
                                    className: "space-y-3",
                                    children: V.insights.map(m),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })),
            (U[33] = V.board),
            (U[34] = V.checklist),
            (U[35] = V.insights),
            (U[36] = V.mode),
            (U[37] = V.notes),
            (U[38] = V.rows),
            (U[39] = V.signals),
            (U[40] = V.timeline),
            (U[41] = O))
          : (O = U[41]),
        U[42] !== I || U[43] !== O
          ? ((E = (0, t.jsxs)("div", { className: "space-y-8", children: [I, O] })),
            (U[42] = I),
            (U[43] = O),
            (U[44] = E))
          : (E = U[44]),
        E
      );
    }
    function m(e) {
      return (0, t.jsxs)(
        "div",
        {
          children: [
            (0, t.jsx)("p", { className: "text-sm text-white/60", children: e.title }),
            (0, t.jsx)("p", { className: "text-lg font-semibold", children: e.value }),
            (0, t.jsx)("p", { className: "text-xs text-white/50", children: e.note }),
          ],
        },
        e.title
      );
    }
    function h(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium", children: e.title }),
                (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.meta }),
              ],
            }),
            (0, t.jsx)("p", { className: "text-xs text-white/50", children: e.time }),
          ],
        },
        e.id
      );
    }
    function x(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsx)("p", { className: "font-medium", children: e.name }),
            (0, t.jsxs)("p", {
              className: "text-xs text-white/60",
              children: ["Updated ", e.updated],
            }),
          ],
        },
        e.id
      );
    }
    function g(e) {
      return (0, t.jsxs)(
        n.Card,
        {
          className: "border-white/10 bg-white/5",
          children: [
            (0, t.jsx)(n.CardHeader, {
              children: (0, t.jsx)(n.CardTitle, {
                className: "text-sm text-white/60",
                children: e.title,
              }),
            }),
            (0, t.jsxs)(n.CardContent, {
              children: [
                (0, t.jsx)("p", { className: "text-2xl font-semibold", children: e.value }),
                (0, t.jsxs)("p", {
                  className: "text-xs text-white/60",
                  children: ["Trend ", e.trend],
                }),
              ],
            }),
          ],
        },
        e.title
      );
    }
    function u(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsx)("p", { className: "font-medium", children: e.title }),
            (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.body }),
          ],
        },
        e.id
      );
    }
    function p(e, s) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsx)("p", { className: "text-sm text-white/70", children: e }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-white/10 text-white",
              children: s % 2 == 0 ? "complete" : "pending",
            }),
          ],
        },
        `${e}-${s}`
      );
    }
    function j(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "text-sm text-white/60", children: e.title }),
                (0, t.jsx)("p", { className: "text-lg font-semibold", children: e.value }),
              ],
            }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-white/10 text-white",
              children: e.trend,
            }),
          ],
        },
        e.title
      );
    }
    function w(e) {
      return (0, t.jsxs)(
        "div",
        {
          className:
            "flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium", children: e.name }),
                (0, t.jsxs)("p", {
                  className: "text-xs text-white/60",
                  children: ["Owner: ", e.owner],
                }),
              ],
            }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-white/10 text-white",
              children: e.status,
            }),
          ],
        },
        e.id
      );
    }
    function b(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium", children: e.title }),
                (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.meta }),
              ],
            }),
            (0, t.jsx)("p", { className: "text-xs text-white/50", children: e.time }),
          ],
        },
        e.id
      );
    }
    function v(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsx)("p", { className: "font-medium", children: e.title }),
            (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.body }),
          ],
        },
        e.id
      );
    }
    function C(e) {
      return (0, t.jsxs)(
        n.Card,
        {
          className: "border-white/10 bg-white/5",
          children: [
            (0, t.jsx)(n.CardHeader, {
              children: (0, t.jsx)(n.CardTitle, {
                className: "text-sm text-white/60",
                children: e.title,
              }),
            }),
            (0, t.jsx)(n.CardContent, { className: "space-y-3", children: e.items.map(f) }),
          ],
        },
        e.id
      );
    }
    function f(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsx)("p", { className: "font-medium", children: e.title }),
            (0, t.jsxs)("p", {
              className: "text-xs text-white/60",
              children: ["Owner: ", e.owner],
            }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "mt-2 bg-white/10 text-white",
              children: e.priority,
            }),
          ],
        },
        e.id
      );
    }
    function N(e) {
      return (0, t.jsxs)(
        n.Card,
        {
          className: "border-white/10 bg-white/5",
          children: [
            (0, t.jsx)(n.CardHeader, {
              children: (0, t.jsx)(n.CardTitle, {
                className: "text-sm text-white/60",
                children: e.title,
              }),
            }),
            (0, t.jsxs)(n.CardContent, {
              children: [
                (0, t.jsx)("p", { className: "text-2xl font-semibold", children: e.value }),
                (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.note }),
              ],
            }),
          ],
        },
        e.title
      );
    }
    function y(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium", children: e.title }),
                (0, t.jsx)("p", { className: "text-xs text-white/60", children: e.meta }),
              ],
            }),
            (0, t.jsx)("p", { className: "text-xs text-white/50", children: e.time }),
          ],
        },
        e.id
      );
    }
    function A(e, s) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsx)("p", { className: "text-sm text-white/70", children: e }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-white/10 text-white",
              children: s % 2 == 0 ? "complete" : "pending",
            }),
          ],
        },
        `${e}-${s}`
      );
    }
    function S(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsx)("p", { className: "text-sm text-white/70", children: e }),
            (0, t.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-white/10 text-white",
              children: "ready",
            }),
          ],
        },
        e
      );
    }
    function T(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-slate-950/60 p-3",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", { className: "font-medium", children: e.name }),
                    (0, t.jsxs)("p", {
                      className: "text-xs text-white/60",
                      children: ["Owner: ", e.owner],
                    }),
                  ],
                }),
                (0, t.jsx)(a.Badge, {
                  variant: "secondary",
                  className: "bg-white/10 text-white",
                  children: e.status,
                }),
              ],
            }),
            (0, t.jsxs)("p", {
              className: "mt-2 text-xs text-white/50",
              children: ["Updated ", e.updated],
            }),
          ],
        },
        e.id
      );
    }
    function R(e) {
      return (0, t.jsxs)(
        n.Card,
        {
          className: "border-white/10 bg-white/5",
          children: [
            (0, t.jsx)(n.CardHeader, {
              children: (0, t.jsx)(n.CardTitle, {
                className: "text-sm text-white/60",
                children: e.title,
              }),
            }),
            (0, t.jsxs)(n.CardContent, {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsx)("p", { className: "text-2xl font-semibold", children: e.value }),
                (0, t.jsx)(a.Badge, {
                  variant: "secondary",
                  className: "bg-white/10 text-white",
                  children: e.trend,
                }),
              ],
            }),
          ],
        },
        e.title
      );
    }
    e.s(["default", () => o], 99404);
  },
]);
