(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  96165,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = (e) => {};
  },
  72743,
  94282,
  43401,
  49298,
  88577,
  88327,
  25406,
  88506,
  67617,
  (e) => {
    "use strict";
    var t = e.i(34706);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      a = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
          r ? r.toUpperCase() : t.toLowerCase()
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var n = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let i = (0, t.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: a = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: l = "",
            children: s,
            iconNode: c,
            ...d
          },
          u
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: u,
              ...n,
              width: a,
              height: a,
              stroke: e,
              strokeWidth: o ? (24 * Number(i)) / Number(a) : i,
              className: r("lucide", l),
              ...(!s &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                  return !1;
                })(d) && { "aria-hidden": "true" }),
              ...d,
            },
            [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(s) ? s : [s])]
          )
      ),
      o = (e, n) => {
        let o = (0, t.forwardRef)(({ className: o, ...l }, s) =>
          (0, t.createElement)(i, {
            ref: s,
            iconNode: n,
            className: r(
              `lucide-${a(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              o
            ),
            ...l,
          })
        );
        return ((o.displayName = a(e)), o);
      };
    e.s(["default", () => o], 94282);
    let l = o("chart-column", [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
      ["path", { d: "M18 17V9", key: "2bz60n" }],
      ["path", { d: "M13 17V5", key: "1frdt8" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }],
    ]);
    e.s(["BarChart3", () => l], 43401);
    let s = o("file-text", [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6",
        },
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M10 9H8", key: "b1mrlr" }],
      ["path", { d: "M16 13H8", key: "t4e002" }],
      ["path", { d: "M16 17H8", key: "z1uh3a" }],
    ]);
    e.s(["FileText", () => s], 49298);
    let c = o("layout-dashboard", [
      ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
      ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
      ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
      ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }],
    ]);
    e.s(["LayoutDashboard", () => c], 88577);
    let d = o("megaphone", [
      [
        "path",
        {
          d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
          key: "q8bfy3",
        },
      ],
      ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
      ["path", { d: "M8 6v8", key: "15ugcq" }],
    ]);
    e.s(["Megaphone", () => d], 88327);
    let u = o("package-search", [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h",
        },
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
      ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
      ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }],
    ]);
    e.s(["PackageSearch", () => u], 25406);
    let m = o("plug", [
        ["path", { d: "M12 22v-5", key: "1ega77" }],
        ["path", { d: "M15 8V2", key: "18g5xt" }],
        [
          "path",
          {
            d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",
            key: "1xoxul",
          },
        ],
        ["path", { d: "M9 8V2", key: "14iosj" }],
      ]),
      f = o("settings", [
        [
          "path",
          {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]),
      h = o("shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]),
      p = o("shopping-bag", [
        ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
        ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
        [
          "path",
          {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm",
          },
        ],
      ]);
    e.s(["ShoppingBag", () => p], 88506);
    let b = o("users", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]);
    e.s(["Users", () => b], 67617);
    let g = [
        {
          id: "dashboard",
          label: "Dashboard",
          href: "/dashboard",
          icon: c,
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
          icon: b,
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
          icon: s,
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
          icon: p,
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
          icon: u,
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
          icon: d,
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
          icon: l,
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
          icon: m,
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
          icon: h,
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
          icon: f,
          children: [
            { id: "general", label: "General", variant: "insights" },
            { id: "security", label: "Security", variant: "timeline" },
            { id: "billing", label: "Billing", variant: "table" },
            { id: "notifications", label: "Notifications", variant: "board" },
            { id: "api", label: "API & Keys", variant: "metrics" },
          ],
        },
      ],
      x = (e) => g.find((t) => t.id === e) ?? null;
    e.s(
      [
        "getSectionById",
        0,
        x,
        "getSectionChild",
        0,
        (e, t) => {
          let r = x(e);
          return r ? (r.children.find((e) => e.id === t) ?? null) : null;
        },
        "sectionNavigation",
        0,
        g,
      ],
      72743
    );
  },
  59587,
  (e, t, r) => {
    t.exports = e.r(11661);
  },
  67319,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      assign: function () {
        return s;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var n in a) Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
    function i(e) {
      let t = {};
      for (let [r, a] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = a) : Array.isArray(e) ? e.push(a) : (t[r] = [e, a]);
      }
      return t;
    }
    function o(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [r, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(r, o(e));
        else t.set(r, o(a));
      return t;
    }
    function s(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, a] of r.entries()) e.append(t, a);
      }
      return e;
    }
  },
  19984,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var n in a) Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
    let i = e.r(50481)._(e.r(67319)),
      o = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        a = e.protocol || "",
        n = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r && ((c = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (c += ":" + e.port)),
        s && "object" == typeof s && (s = String(i.urlQueryToSearchParams(s))));
      let d = e.search || (s && `?${s}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || o.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), n && "/" !== n[0] && (n = "/" + n))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        d && "?" !== d[0] && (d = "?" + d),
        (n = n.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${a}${c}${n}${d}${l}`
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return l(e);
    }
  },
  16679,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let a = e.r(34706);
    function n(e, t) {
      let r = (0, a.useRef)(null),
        n = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = n.current;
            t && ((n.current = null), t());
          } else (e && (r.current = i(e, a)), t && (n.current = i(t, a)));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  52535,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return y;
      },
      SP: function () {
        return p;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return o;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return s;
      },
      isResSent: function () {
        return m;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return f;
      },
      stringifyError: function () {
        return k;
      },
    };
    for (var n in a) Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function o(e) {
      let t,
        r = !1;
      return (...a) => (r || ((r = !0), (t = e(...a))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => l.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function m(e) {
      return e.finished || e.headersSent;
    }
    function f(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await h(t.Component, t.ctx) } : {};
      let a = await e.getInitialProps(t);
      if (r && m(r)) return a;
      if (!a)
        throw Object.defineProperty(
          Error(
            `"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return a;
    }
    let p = "u" > typeof performance,
      b =
        p &&
        ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class g extends Error {}
    class x extends Error {}
    class y extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class v extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class j extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function k(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  15937,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let a = e.r(52535),
      n = e.r(1253);
    function i(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, n.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  41679,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = (e) => {};
  },
  19871,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var n in a) Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
    let i = e.r(50481),
      o = e.r(62482),
      l = i._(e.r(34706)),
      s = e.r(19984),
      c = e.r(58608),
      d = e.r(16679),
      u = e.r(52535),
      m = e.r(86878);
    e.r(96165);
    let f = e.r(26286),
      h = e.r(15937),
      p = e.r(11090);
    function b(e) {
      return "string" == typeof e ? e : (0, s.formatUrl)(e);
    }
    function g(t) {
      var r;
      let a,
        n,
        i,
        [s, g] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
        y = (0, l.useRef)(null),
        {
          href: v,
          as: j,
          children: k,
          prefetch: N = null,
          passHref: w,
          replace: S,
          shallow: _,
          scroll: M,
          onClick: C,
          onMouseEnter: P,
          onTouchStart: E,
          legacyBehavior: A = !1,
          onNavigate: O,
          ref: z,
          unstable_dynamicOnHover: L,
          ...R
        } = t;
      ((a = k),
        A &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, o.jsx)("a", { children: a })));
      let $ = l.default.useContext(c.AppRouterContext),
        T = !1 !== N,
        I =
          !1 !== N
            ? null === (r = N) || "auto" === r
              ? p.FetchStrategy.PPR
              : p.FetchStrategy.Full
            : p.FetchStrategy.PPR,
        { href: B, as: U } = l.default.useMemo(() => {
          let e = b(v);
          return { href: e, as: j ? b(j) : e };
        }, [v, j]);
      if (A) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        n = l.default.Children.only(a);
      }
      let F = A ? n && "object" == typeof n && n.ref : z,
        D = l.default.useCallback(
          (e) => (
            null !== $ && (y.current = (0, f.mountLinkInstance)(e, B, $, I, T, g)),
            () => {
              (y.current && ((0, f.unmountLinkForCurrentNavigation)(y.current), (y.current = null)),
                (0, f.unmountPrefetchableInstance)(e));
            }
          ),
          [T, B, $, I, g]
        ),
        V = {
          ref: (0, d.useMergedRef)(D, F),
          onClick(t) {
            (A || "function" != typeof C || C(t),
              A && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, a, n, i, o, s) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) && "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), s)) {
                      let e = !1;
                      if (
                        (s({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: u } = e.r(10115);
                    l.default.startTransition(() => {
                      u(a || r, i ? "replace" : "push", o ?? !0, n.current);
                    });
                  }
                })(t, B, U, y, S, M, O));
          },
          onMouseEnter(e) {
            (A || "function" != typeof P || P(e),
              A && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
              $ && T && (0, f.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (A || "function" != typeof E || E(e),
              A && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
              $ && T && (0, f.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(U)
          ? (V.href = U)
          : (A && !w && ("a" !== n.type || "href" in n.props)) || (V.href = (0, m.addBasePath)(U)),
        (i = A ? l.default.cloneElement(n, V) : (0, o.jsx)("a", { ...R, ...V, children: a })),
        (0, o.jsx)(x.Provider, { value: s, children: i })
      );
    }
    e.r(41679);
    let x = (0, l.createContext)(f.IDLE_LINK_STATUS),
      y = () => (0, l.useContext)(x);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  50610,
  (e) => {
    "use strict";
    var t = e.i(34706);
    e.i(90761);
    var r = e.i(63849),
      a = e.i(62482),
      n = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, n) => {
        let i = (0, r.createSlot)(`Primitive.${n}`),
          o = t.forwardRef((e, t) => {
            let { asChild: r, ...o } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(r ? i : n, { ...o, ref: t })
            );
          });
        return ((o.displayName = `Primitive.${n}`), { ...e, [n]: o });
      }, {});
    e.s(["Primitive", () => n]);
  },
  25051,
  (e, t, r) => {
    "use strict";
    var a = e.r(34706),
      n =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      i = a.useState,
      o = a.useEffect,
      l = a.useLayoutEffect,
      s = a.useDebugValue;
    function c(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !n(e, r);
      } catch (e) {
        return !0;
      }
    }
    var d =
      "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              a = i({ inst: { value: r, getSnapshot: t } }),
              n = a[0].inst,
              d = a[1];
            return (
              l(
                function () {
                  ((n.value = r), (n.getSnapshot = t), c(n) && d({ inst: n }));
                },
                [e, r, t]
              ),
              o(
                function () {
                  return (
                    c(n) && d({ inst: n }),
                    e(function () {
                      c(n) && d({ inst: n });
                    })
                  );
                },
                [e]
              ),
              s(r),
              r
            );
          };
    r.useSyncExternalStore = void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : d;
  },
  65323,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(25051);
  },
  57761,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(34706),
      n = e.i(59587),
      i = e.i(16220),
      o = e.i(22991),
      l = globalThis?.document ? a.useLayoutEffect : () => {},
      s = e.i(50610),
      c = e.i(65323);
    function d() {
      return () => {};
    }
    var u = "Avatar",
      [m, f] = (function (e, r = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => a.createContext(e));
            return function (r) {
              let n = r?.[e] || t;
              return a.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: n } }), [r, n]);
            };
          };
        return (
          (i.scopeName = e),
          [
            function (r, i) {
              let o = a.createContext(i),
                l = n.length;
              n = [...n, i];
              let s = (r) => {
                let { scope: n, children: i, ...s } = r,
                  c = n?.[e]?.[l] || o,
                  d = a.useMemo(() => s, Object.values(s));
                return (0, t.jsx)(c.Provider, { value: d, children: i });
              };
              return (
                (s.displayName = r + "Provider"),
                [
                  s,
                  function (t, n) {
                    let s = n?.[e]?.[l] || o,
                      c = a.useContext(s);
                    if (c) return c;
                    if (void 0 !== i) return i;
                    throw Error(`\`${t}\` must be used within \`${r}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let n = r.reduce((t, { useScope: r, scopeName: a }) => {
                    let n = r(e)[`__scope${a}`];
                    return { ...t, ...n };
                  }, {});
                  return a.useMemo(() => ({ [`__scope${t.scopeName}`]: n }), [n]);
                };
              };
              return ((r.scopeName = t.scopeName), r);
            })(i, ...r),
          ]
        );
      })(u),
      [h, p] = m(u),
      b = a.forwardRef((e, r) => {
        let { __scopeAvatar: n, ...i } = e,
          [o, l] = a.useState("idle");
        return (0, t.jsx)(h, {
          scope: n,
          imageLoadingStatus: o,
          onImageLoadingStatusChange: l,
          children: (0, t.jsx)(s.Primitive.span, { ...i, ref: r }),
        });
      });
    b.displayName = u;
    var g = "AvatarImage",
      x = a.forwardRef((e, r) => {
        var n;
        let i,
          { __scopeAvatar: o, src: u, onLoadingStatusChange: m = () => {}, ...f } = e,
          h = p(g, o),
          b = (function (e, { referrerPolicy: t, crossOrigin: r }) {
            let n = (0, c.useSyncExternalStore)(
                d,
                () => !0,
                () => !1
              ),
              i = a.useRef(null),
              o = n ? (i.current || (i.current = new window.Image()), i.current) : null,
              [s, u] = a.useState(() => j(o, e));
            return (
              l(() => {
                u(j(o, e));
              }, [o, e]),
              l(() => {
                let e = (e) => () => {
                  u(e);
                };
                if (!o) return;
                let a = e("loaded"),
                  n = e("error");
                return (
                  o.addEventListener("load", a),
                  o.addEventListener("error", n),
                  t && (o.referrerPolicy = t),
                  "string" == typeof r && (o.crossOrigin = r),
                  () => {
                    (o.removeEventListener("load", a), o.removeEventListener("error", n));
                  }
                );
              }, [o, r, t]),
              s
            );
          })(u, f),
          x =
            ((n = (e) => {
              (m(e), h.onImageLoadingStatusChange(e));
            }),
            (i = a.useRef(n)),
            a.useEffect(() => {
              i.current = n;
            }),
            a.useMemo(
              () =>
                (...e) =>
                  i.current?.(...e),
              []
            ));
        return (
          l(() => {
            "idle" !== b && x(b);
          }, [b, x]),
          "loaded" === b ? (0, t.jsx)(s.Primitive.img, { ...f, ref: r, src: u }) : null
        );
      });
    x.displayName = g;
    var y = "AvatarFallback",
      v = a.forwardRef((e, r) => {
        let { __scopeAvatar: n, delayMs: i, ...o } = e,
          l = p(y, n),
          [c, d] = a.useState(void 0 === i);
        return (
          a.useEffect(() => {
            if (void 0 !== i) {
              let e = window.setTimeout(() => d(!0), i);
              return () => window.clearTimeout(e);
            }
          }, [i]),
          c && "loaded" !== l.imageLoadingStatus
            ? (0, t.jsx)(s.Primitive.span, { ...o, ref: r })
            : null
        );
      });
    function j(e, t) {
      return e
        ? t
          ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
          : "error"
        : "idle";
    }
    ((v.displayName = y),
      e.s(
        [
          "Avatar",
          () => b,
          "AvatarFallback",
          () => v,
          "AvatarImage",
          () => x,
          "Fallback",
          () => v,
          "Image",
          () => x,
          "Root",
          () => b,
          "createAvatarScope",
          () => f,
        ],
        85597
      ));
    var k = e.i(85597),
      k = k,
      N = e.i(2082);
    function w(e) {
      let a,
        n,
        i,
        o,
        l,
        s = (0, r.c)(10);
      s[0] !== e
        ? (({ className: a, size: i, ...n } = e), (s[0] = e), (s[1] = a), (s[2] = n), (s[3] = i))
        : ((a = s[1]), (n = s[2]), (i = s[3]));
      let c = void 0 === i ? "default" : i;
      return (
        s[4] !== a
          ? ((o = (0, N.cn)(
              "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
              a
            )),
            (s[4] = a),
            (s[5] = o))
          : (o = s[5]),
        s[6] !== n || s[7] !== c || s[8] !== o
          ? ((l = (0, t.jsx)(k.Root, {
              "data-slot": "avatar",
              "data-size": c,
              className: o,
              ...n,
            })),
            (s[6] = n),
            (s[7] = c),
            (s[8] = o),
            (s[9] = l))
          : (l = s[9]),
        l
      );
    }
    function S(e) {
      let a,
        n,
        i,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: a, ...n } = e), (l[0] = e), (l[1] = a), (l[2] = n))
          : ((a = l[1]), (n = l[2])),
        l[3] !== a
          ? ((i = (0, N.cn)(
              "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs",
              a
            )),
            (l[3] = a),
            (l[4] = i))
          : (i = l[4]),
        l[5] !== n || l[6] !== i
          ? ((o = (0, t.jsx)(k.Fallback, { "data-slot": "avatar-fallback", className: i, ...n })),
            (l[5] = n),
            (l[6] = i),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    var _ = e.i(19871),
      M = e.i(72743),
      C = e.i(43401),
      P = e.i(49298),
      E = e.i(88577),
      A = e.i(88327),
      O = e.i(94282);
    let z = (0, O.default)("moon", [
      [
        "path",
        {
          d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
          key: "kfwtm",
        },
      ],
    ]);
    var L = e.i(25406);
    let R = (0, O.default)("panel-left-close", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }],
      ]),
      $ = (0, O.default)("panel-left-open", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }],
      ]),
      T = (0, O.default)("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    var I = e.i(88506);
    let B = (0, O.default)("sliders-vertical", [
        ["path", { d: "M10 8h4", key: "1sr2af" }],
        ["path", { d: "M12 21v-9", key: "17s77i" }],
        ["path", { d: "M12 8V3", key: "13r4qs" }],
        ["path", { d: "M17 16h4", key: "h1uq16" }],
        ["path", { d: "M19 12V3", key: "o1uvq1" }],
        ["path", { d: "M19 21v-5", key: "qua636" }],
        ["path", { d: "M3 14h4", key: "bcjad9" }],
        ["path", { d: "M5 10V3", key: "cb8scm" }],
        ["path", { d: "M5 21v-7", key: "1w1uti" }],
      ]),
      U = (0, O.default)("sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    var F = e.i(67617);
    let D = (0, O.default)("wrench", [
        [
          "path",
          {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
            key: "1ngwbx",
          },
        ],
      ]),
      V = (e, t) => e === t || e.startsWith(`${t}/`);
    function q(e) {
      let l,
        s,
        c,
        d,
        u,
        m,
        f,
        h,
        p,
        b,
        g,
        x,
        y,
        v,
        j,
        k,
        N,
        O,
        q,
        X,
        ee,
        et,
        er,
        ea,
        en,
        ei,
        eo,
        el,
        es,
        ec,
        ed,
        eu,
        em,
        ef,
        eh,
        ep,
        eb,
        eg,
        ex,
        ey,
        ev,
        ej,
        ek = (0, r.c)(97),
        { children: eN } = e,
        ew = (0, n.useRouter)(),
        eS = (0, n.usePathname)(),
        { isAuthenticated: e_, isHydrating: eM, user: eC, logout: eP } = (0, i.useAuthStore)(),
        [eE, eA] = (0, a.useState)(!1),
        [eO, ez] = (0, a.useState)(Y),
        [eL, eR] = (0, a.useState)(J);
      (ek[0] !== e_ || ek[1] !== eM || ek[2] !== ew
        ? ((l = () => {
            eM || e_ || ew.replace("/login");
          }),
          (s = [eM, e_, ew]),
          (ek[0] = e_),
          (ek[1] = eM),
          (ek[2] = ew),
          (ek[3] = l),
          (ek[4] = s))
        : ((l = ek[3]), (s = ek[4])),
        (0, a.useEffect)(l, s),
        ek[5] !== eO
          ? ((c = () => {
              localStorage.setItem("controlroom.sidebarCollapsed", String(eO));
            }),
            (d = [eO]),
            (ek[5] = eO),
            (ek[6] = c),
            (ek[7] = d))
          : ((c = ek[6]), (d = ek[7])),
        (0, a.useEffect)(c, d),
        ek[8] !== eL
          ? ((u = () => {
              let e = document.documentElement;
              ("dark" === eL ? e.classList.add("dark") : e.classList.remove("dark"),
                localStorage.setItem("controlroom.theme", eL));
            }),
            (m = [eL]),
            (ek[8] = eL),
            (ek[9] = u),
            (ek[10] = m))
          : ((u = ek[9]), (m = ek[10])),
        (0, a.useEffect)(u, m),
        ek[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = {
              dashboard: E.LayoutDashboard,
              users: F.Users,
              content: P.FileText,
              catalog: I.ShoppingBag,
              orders: L.PackageSearch,
              marketing: A.Megaphone,
              analytics: C.BarChart3,
              integrations: D,
              system: T,
              settings: B,
            }),
            (ek[11] = f))
          : (f = ek[11]));
      let e$ = f;
      if (eM) {
        let e, r, a, n, i;
        return (
          ek[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "mb-8 h-10 w-36 animate-pulse rounded-xl bg-muted/40",
              })),
              (ek[12] = e))
            : (e = ek[12]),
          ek[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, t.jsxs)("aside", {
                className: "hidden w-72 border-r border-border/60 bg-background px-6 py-8 lg:block",
                children: [
                  e,
                  (0, t.jsx)("div", {
                    className: "space-y-4",
                    children: Array.from({ length: 8 }).map(Q),
                  }),
                ],
              })),
              (ek[13] = r))
            : (r = ek[13]),
          ek[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, t.jsxs)("header", {
                className: "flex items-center justify-between border-b border-border/60 px-6 py-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, t.jsx)("div", { className: "h-3 w-24 rounded bg-muted/40" }),
                      (0, t.jsx)("div", { className: "h-5 w-40 rounded bg-muted/40" }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: "h-9 w-32 rounded bg-muted/40" }),
                ],
              })),
              (ek[14] = a))
            : (a = ek[14]),
          ek[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, t.jsxs)("div", {
                className: "flex flex-1 flex-col",
                children: [
                  a,
                  (0, t.jsx)("main", {
                    className: "flex-1 px-6 py-8",
                    children: (0, t.jsx)("div", {
                      className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                      children: Array.from({ length: 6 }).map(G),
                    }),
                  }),
                ],
              })),
              (ek[15] = n))
            : (n = ek[15]),
          ek[16] !== n || ek[17] !== r
            ? ((i = (0, t.jsx)("div", {
                className: "min-h-screen bg-background text-foreground",
                children: (0, t.jsxs)("div", { className: "flex min-h-screen", children: [r, n] }),
              })),
              (ek[16] = n),
              (ek[17] = r),
              (ek[18] = i))
            : (i = ek[18]),
          i
        );
      }
      if (!e_) return null;
      let eT = `fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${eE ? "opacity-100" : "pointer-events-none opacity-0"}`;
      (ek[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = () => eA(!1)), (ek[19] = h))
        : (h = ek[19]),
        ek[20] !== eT
          ? ((p = (0, t.jsx)("div", { className: eT, onClick: h })), (ek[20] = eT), (ek[21] = p))
          : (p = ek[21]));
      let eI = `fixed left-0 top-0 z-50 h-screen w-72 border-r border-border/40 bg-card/90 px-4 py-6 backdrop-blur-xl transition-transform duration-300 lg:hidden ${eE ? "translate-x-0" : "-translate-x-full"}`;
      (ek[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (0, t.jsx)("div", {
            className:
              "relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25",
            children: (0, t.jsx)("span", {
              className: "text-lg font-bold text-white",
              children: "C",
            }),
          })),
          (g = (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("p", {
                className:
                  "text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
                children: "ControlRoom",
              }),
              (0, t.jsx)("p", {
                className: "text-base font-semibold text-foreground",
                children: "Operations",
              }),
            ],
          })),
          (ek[22] = b),
          (ek[23] = g))
        : ((b = ek[22]), (g = ek[23])),
        ek[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = () => eA(!1)), (ek[24] = x))
          : (x = ek[24]),
        ek[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, t.jsxs)("div", {
              className: "mb-6 flex items-center gap-3",
              children: [
                b,
                g,
                (0, t.jsx)(o.Button, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "ml-auto h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground",
                  onClick: x,
                  "aria-label": "Close sidebar",
                  children: (0, t.jsx)(R, { size: 14 }),
                }),
              ],
            })),
            (ek[25] = y))
          : (y = ek[25]),
        ek[26] !== eS
          ? ((v = M.sectionNavigation.map((e) => {
              let r = e$[e.id] ?? E.LayoutDashboard,
                a = V(eS, e.href);
              return (0, t.jsxs)(
                _.default,
                {
                  href: e.href,
                  className: `group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${a ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
                  onClick: () => eA(!1),
                  children: [
                    (0, t.jsx)(r, {
                      size: 18,
                      className: `transition-colors ${a ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`,
                    }),
                    (0, t.jsx)("span", { className: "font-medium", children: e.label }),
                  ],
                },
                e.id
              );
            })),
            (ek[26] = eS),
            (ek[27] = v))
          : (v = ek[27]),
        ek[28] !== v
          ? ((j = (0, t.jsx)("div", {
              className:
                "max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border/40 bg-background/60 p-3 shadow-sm backdrop-blur-sm",
              children: (0, t.jsx)("nav", { className: "space-y-1 text-sm", children: v }),
            })),
            (ek[28] = v),
            (ek[29] = j))
          : (j = ek[29]),
        ek[30] !== eI || ek[31] !== j
          ? ((k = (0, t.jsxs)("aside", { className: eI, children: [y, j] })),
            (ek[30] = eI),
            (ek[31] = j),
            (ek[32] = k))
          : (k = ek[32]));
      let eB = `fixed left-0 top-0 hidden h-screen border-r border-border/40 bg-card/50 py-6 backdrop-blur-xl transition-all duration-300 lg:block ${eO ? "w-20 px-3" : "w-72 px-4"}`;
      ek[33] !== eO
        ? ((N = eO
            ? (0, t.jsxs)("div", {
                className: "mb-6 flex flex-col items-center gap-3",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25",
                    children: (0, t.jsx)("span", {
                      className: "text-lg font-bold text-white",
                      children: "C",
                    }),
                  }),
                  (0, t.jsx)(o.Button, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground",
                    onClick: () => ez(Z),
                    "aria-label": "Toggle sidebar",
                    children: (0, t.jsx)($, { size: 14 }),
                  }),
                ],
              })
            : (0, t.jsxs)("div", {
                className: "mb-6 flex items-center gap-3",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/25",
                    children: (0, t.jsx)("span", {
                      className: "text-lg font-bold text-white",
                      children: "C",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
                        children: "ControlRoom",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-base font-semibold text-foreground",
                        children: "Operations",
                      }),
                    ],
                  }),
                  (0, t.jsx)(o.Button, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "ml-auto h-8 w-8 rounded-lg border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground",
                    onClick: () => ez(H),
                    "aria-label": "Toggle sidebar",
                    children: (0, t.jsx)(R, { size: 14 }),
                  }),
                ],
              })),
          (ek[33] = eO),
          (ek[34] = N))
        : (N = ek[34]);
      let eU = `max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border/40 bg-background/60 shadow-sm backdrop-blur-sm ${eO ? "p-2" : "p-3"}`,
        eF = `space-y-1 text-sm ${eO ? "flex flex-col items-center" : ""}`;
      (ek[35] !== eS || ek[36] !== eO
        ? ((O = M.sectionNavigation.map((e) => {
            let r = e$[e.id] ?? E.LayoutDashboard,
              a = V(eS, e.href);
            return (0, t.jsxs)(
              _.default,
              {
                href: e.href,
                className: `group flex items-center rounded-xl transition-all duration-200 ${a ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"} ${eO ? "mx-auto h-10 w-10 justify-center" : "gap-3 px-3 py-2.5"}`,
                children: [
                  (0, t.jsx)(r, {
                    size: 18,
                    className: `transition-colors ${a ? "text-primary" : eO ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`,
                  }),
                  eO ? null : (0, t.jsx)("span", { className: "font-medium", children: e.label }),
                ],
              },
              e.id
            );
          })),
          (ek[35] = eS),
          (ek[36] = eO),
          (ek[37] = O))
        : (O = ek[37]),
        ek[38] !== eF || ek[39] !== O
          ? ((q = (0, t.jsx)("nav", { className: eF, children: O })),
            (ek[38] = eF),
            (ek[39] = O),
            (ek[40] = q))
          : (q = ek[40]),
        ek[41] !== eU || ek[42] !== q
          ? ((X = (0, t.jsx)("div", { className: eU, children: q })),
            (ek[41] = eU),
            (ek[42] = q),
            (ek[43] = X))
          : (X = ek[43]),
        ek[44] !== eO || ek[45] !== eC?.email || ek[46] !== eC?.name
          ? ((ee = eO
              ? null
              : (0, t.jsx)("div", {
                  className: "absolute bottom-6 left-4 right-4",
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex items-center gap-3 rounded-xl border border-border/40 bg-muted/50 p-3",
                    children: [
                      (0, t.jsx)(w, {
                        className: "h-9 w-9",
                        children: (0, t.jsx)(S, {
                          className: "bg-primary/10 text-sm font-semibold text-primary",
                          children: eC?.name?.split(" ").map(W).slice(0, 2).join(""),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex-1 truncate",
                        children: [
                          (0, t.jsx)("p", {
                            className: "truncate text-sm font-medium text-foreground",
                            children: eC?.name,
                          }),
                          (0, t.jsx)("p", {
                            className: "truncate text-xs text-muted-foreground",
                            children: eC?.email,
                          }),
                        ],
                      }),
                    ],
                  }),
                })),
            (ek[44] = eO),
            (ek[45] = eC?.email),
            (ek[46] = eC?.name),
            (ek[47] = ee))
          : (ee = ek[47]),
        ek[48] !== eB || ek[49] !== N || ek[50] !== X || ek[51] !== ee
          ? ((et = (0, t.jsxs)("aside", { className: eB, children: [N, X, ee] })),
            (ek[48] = eB),
            (ek[49] = N),
            (ek[50] = X),
            (ek[51] = ee),
            (ek[52] = et))
          : (et = ek[52]));
      let eD = `flex min-h-screen flex-1 flex-col transition-all duration-300 ${eO ? "lg:ml-20" : "lg:ml-72"}`;
      (ek[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((er = () => eA(!0)), (ek[53] = er))
        : (er = ek[53]),
        ek[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((ea = (0, t.jsx)(o.Button, {
              variant: "ghost",
              size: "icon",
              className:
                "h-9 w-9 rounded-xl border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden",
              onClick: er,
              "aria-label": "Open sidebar",
              children: (0, t.jsx)($, { size: 16 }),
            })),
            (en = (0, t.jsx)("p", {
              className: "text-xs font-medium text-muted-foreground",
              children: "Welcome back",
            })),
            (ek[54] = ea),
            (ek[55] = en))
          : ((ea = ek[54]), (en = ek[55])));
      let eV = eC?.name ?? "Operator";
      (ek[56] !== eV
        ? ((ei = (0, t.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              ea,
              (0, t.jsxs)("div", {
                children: [
                  en,
                  (0, t.jsx)("h2", {
                    className: "text-xl font-bold text-foreground",
                    children: eV,
                  }),
                ],
              }),
            ],
          })),
          (ek[56] = eV),
          (ek[57] = ei))
        : (ei = ek[57]),
        ek[58] !== eL
          ? ((eo = (0, t.jsx)(o.Button, {
              variant: "ghost",
              size: "icon",
              className:
                "h-9 w-9 rounded-xl border border-border/40 text-muted-foreground hover:bg-accent hover:text-foreground",
              onClick: () => eR("dark" === eL ? "light" : "dark"),
              children: "dark" === eL ? (0, t.jsx)(U, { size: 16 }) : (0, t.jsx)(z, { size: 16 }),
            })),
            (ek[58] = eL),
            (ek[59] = eo))
          : (eo = ek[59]));
      let eq = eC?.name;
      ek[60] !== eq
        ? ((el = (0, t.jsx)("p", {
            className: "text-sm font-medium text-foreground",
            children: eq,
          })),
          (ek[60] = eq),
          (ek[61] = el))
        : (el = ek[61]);
      let eK = eC?.role;
      return (
        ek[62] !== eK
          ? ((es = (0, t.jsx)("p", {
              className: "text-xs capitalize text-muted-foreground",
              children: eK,
            })),
            (ek[62] = eK),
            (ek[63] = es))
          : (es = ek[63]),
        ek[64] !== el || ek[65] !== es
          ? ((ec = (0, t.jsxs)("div", { className: "text-right", children: [el, es] })),
            (ek[64] = el),
            (ek[65] = es),
            (ek[66] = ec))
          : (ec = ek[66]),
        ek[67] !== eC?.name
          ? ((ed = eC?.name?.split(" ").map(K).slice(0, 2).join("")),
            (ek[67] = eC?.name),
            (ek[68] = ed))
          : (ed = ek[68]),
        ek[69] !== ed
          ? ((eu = (0, t.jsx)(w, {
              className: "h-10 w-10 border-2 border-primary/20",
              children: (0, t.jsx)(S, {
                className: "bg-primary text-sm font-semibold text-primary-foreground",
                children: ed,
              }),
            })),
            (ek[69] = ed),
            (ek[70] = eu))
          : (eu = ek[70]),
        ek[71] !== ec || ek[72] !== eu
          ? ((em = (0, t.jsxs)("div", {
              className: "hidden items-center gap-3 sm:flex",
              children: [ec, eu],
            })),
            (ek[71] = ec),
            (ek[72] = eu),
            (ek[73] = em))
          : (em = ek[73]),
        ek[74] !== eP
          ? ((ef = (0, t.jsx)(o.Button, {
              variant: "outline",
              size: "sm",
              className: "h-9 rounded-xl border-border/40 text-sm font-medium",
              onClick: eP,
              children: "Log out",
            })),
            (ek[74] = eP),
            (ek[75] = ef))
          : (ef = ek[75]),
        ek[76] !== eo || ek[77] !== em || ek[78] !== ef
          ? ((eh = (0, t.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [eo, em, ef],
            })),
            (ek[76] = eo),
            (ek[77] = em),
            (ek[78] = ef),
            (ek[79] = eh))
          : (eh = ek[79]),
        ek[80] !== ei || ek[81] !== eh
          ? ((ep = (0, t.jsxs)("header", {
              className:
                "sticky top-0 z-10 flex items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-xl",
              children: [ei, eh],
            })),
            (ek[80] = ei),
            (ek[81] = eh),
            (ek[82] = ep))
          : (ep = ek[82]),
        ek[83] !== eN
          ? ((eb = (0, t.jsx)("main", { className: "flex-1 px-6 py-8", children: eN })),
            (ek[83] = eN),
            (ek[84] = eb))
          : (eb = ek[84]),
        ek[85] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, t.jsxs)("span", {
              children: [
                "Built with ❤️ by",
                " ",
                (0, t.jsx)("a", {
                  href: "https://amirshasti.ir",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-semibold text-foreground hover:text-primary",
                  children: "Amirhossein Shasti",
                }),
              ],
            })),
            (ex = (0, t.jsx)("span", {
              className: "hidden text-muted-foreground/40 sm:inline",
              children: "•",
            })),
            (ek[85] = eg),
            (ek[86] = ex))
          : ((eg = ek[85]), (ex = ek[86])),
        ek[87] === Symbol.for("react.memo_cache_sentinel")
          ? ((ey = (0, t.jsx)("footer", {
              className: "border-t border-border/30 bg-background/80 px-6 py-4 backdrop-blur-xl",
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-muted-foreground",
                children: [
                  eg,
                  ex,
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, t.jsx)("a", {
                        href: "https://github.com/mramirparsa",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
                        children: "GitHub",
                      }),
                      (0, t.jsx)("a", {
                        href: "https://t.me/mramirparsa",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
                        children: "Telegram",
                      }),
                      (0, t.jsx)("a", {
                        href: "https://instagram.com/__Amirhossein1999",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
                        children: "Instagram",
                      }),
                    ],
                  }),
                ],
              }),
            })),
            (ek[87] = ey))
          : (ey = ek[87]),
        ek[88] !== eD || ek[89] !== ep || ek[90] !== eb
          ? ((ev = (0, t.jsxs)("div", { className: eD, children: [ep, eb, ey] })),
            (ek[88] = eD),
            (ek[89] = ep),
            (ek[90] = eb),
            (ek[91] = ev))
          : (ev = ek[91]),
        ek[92] !== p || ek[93] !== k || ek[94] !== et || ek[95] !== ev
          ? ((ej = (0, t.jsx)("div", {
              className: "min-h-screen bg-background text-foreground",
              children: (0, t.jsxs)("div", { className: "flex", children: [p, k, et, ev] }),
            })),
            (ek[92] = p),
            (ek[93] = k),
            (ek[94] = et),
            (ek[95] = ev),
            (ek[96] = ej))
          : (ej = ek[96]),
        ej
      );
    }
    function K(e) {
      return e[0];
    }
    function W(e) {
      return e[0];
    }
    function H(e) {
      return !e;
    }
    function Z(e) {
      return !e;
    }
    function G(e, r) {
      return (0, t.jsx)(
        "div",
        { className: "h-32 rounded-2xl border border-border/60 bg-muted/30" },
        r
      );
    }
    function Q(e, r) {
      return (0, t.jsxs)(
        "div",
        {
          className: "space-y-2",
          children: [
            (0, t.jsx)("div", { className: "h-3 w-20 rounded bg-muted/40" }),
            (0, t.jsx)("div", {
              className: "space-y-1",
              children: Array.from({ length: 3 }).map(X),
            }),
          ],
        },
        r
      );
    }
    function X(e, r) {
      return (0, t.jsx)("div", { className: "h-8 w-full rounded bg-muted/40" }, r);
    }
    function J() {
      return localStorage.getItem("controlroom.theme") ?? "dark";
    }
    function Y() {
      return "true" === localStorage.getItem("controlroom.sidebarCollapsed");
    }
    e.s(["default", () => q], 57761);
  },
]);
