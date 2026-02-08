(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(2082);
    function s(e) {
      let s,
        i,
        d,
        l,
        n = (0, t.c)(8);
      return (
        n[0] !== e
          ? (({ className: s, ...i } = e), (n[0] = e), (n[1] = s), (n[2] = i))
          : ((s = n[1]), (i = n[2])),
        n[3] !== s
          ? ((d = (0, a.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              s
            )),
            (n[3] = s),
            (n[4] = d))
          : (d = n[4]),
        n[5] !== i || n[6] !== d
          ? ((l = (0, r.jsx)("div", { "data-slot": "card", className: d, ...i })),
            (n[5] = i),
            (n[6] = d),
            (n[7] = l))
          : (l = n[7]),
        l
      );
    }
    function i(e) {
      let s,
        i,
        d,
        l,
        n = (0, t.c)(8);
      return (
        n[0] !== e
          ? (({ className: s, ...i } = e), (n[0] = e), (n[1] = s), (n[2] = i))
          : ((s = n[1]), (i = n[2])),
        n[3] !== s
          ? ((d = (0, a.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              s
            )),
            (n[3] = s),
            (n[4] = d))
          : (d = n[4]),
        n[5] !== i || n[6] !== d
          ? ((l = (0, r.jsx)("div", { "data-slot": "card-header", className: d, ...i })),
            (n[5] = i),
            (n[6] = d),
            (n[7] = l))
          : (l = n[7]),
        l
      );
    }
    function d(e) {
      let s,
        i,
        d,
        l,
        n = (0, t.c)(8);
      return (
        n[0] !== e
          ? (({ className: s, ...i } = e), (n[0] = e), (n[1] = s), (n[2] = i))
          : ((s = n[1]), (i = n[2])),
        n[3] !== s
          ? ((d = (0, a.cn)("leading-none font-semibold", s)), (n[3] = s), (n[4] = d))
          : (d = n[4]),
        n[5] !== i || n[6] !== d
          ? ((l = (0, r.jsx)("div", { "data-slot": "card-title", className: d, ...i })),
            (n[5] = i),
            (n[6] = d),
            (n[7] = l))
          : (l = n[7]),
        l
      );
    }
    function l(e) {
      let s,
        i,
        d,
        l,
        n = (0, t.c)(8);
      return (
        n[0] !== e
          ? (({ className: s, ...i } = e), (n[0] = e), (n[1] = s), (n[2] = i))
          : ((s = n[1]), (i = n[2])),
        n[3] !== s
          ? ((d = (0, a.cn)("text-muted-foreground text-sm", s)), (n[3] = s), (n[4] = d))
          : (d = n[4]),
        n[5] !== i || n[6] !== d
          ? ((l = (0, r.jsx)("div", { "data-slot": "card-description", className: d, ...i })),
            (n[5] = i),
            (n[6] = d),
            (n[7] = l))
          : (l = n[7]),
        l
      );
    }
    function n(e) {
      let s,
        i,
        d,
        l,
        n = (0, t.c)(8);
      return (
        n[0] !== e
          ? (({ className: s, ...i } = e), (n[0] = e), (n[1] = s), (n[2] = i))
          : ((s = n[1]), (i = n[2])),
        n[3] !== s ? ((d = (0, a.cn)("px-6", s)), (n[3] = s), (n[4] = d)) : (d = n[4]),
        n[5] !== i || n[6] !== d
          ? ((l = (0, r.jsx)("div", { "data-slot": "card-content", className: d, ...i })),
            (n[5] = i),
            (n[6] = d),
            (n[7] = l))
          : (l = n[7]),
        l
      );
    }
    e.s([
      "Card",
      () => s,
      "CardContent",
      () => n,
      "CardDescription",
      () => l,
      "CardHeader",
      () => i,
      "CardTitle",
      () => d,
    ]);
  },
  76111,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(8857),
      s = e.i(19546),
      i = e.i(2082);
    let d = (0, a.cva)(
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
      let a,
        l,
        n,
        o,
        c,
        m,
        x = (0, t.c)(13);
      x[0] !== e
        ? (({ className: a, variant: n, asChild: o, ...l } = e),
          (x[0] = e),
          (x[1] = a),
          (x[2] = l),
          (x[3] = n),
          (x[4] = o))
        : ((a = x[1]), (l = x[2]), (n = x[3]), (o = x[4]));
      let u = void 0 === n ? "default" : n,
        h = void 0 !== o && o ? s.Slot.Root : "span";
      return (
        x[5] !== a || x[6] !== u
          ? ((c = (0, i.cn)(d({ variant: u }), a)), (x[5] = a), (x[6] = u), (x[7] = c))
          : (c = x[7]),
        x[8] !== h || x[9] !== l || x[10] !== c || x[11] !== u
          ? ((m = (0, r.jsx)(h, { "data-slot": "badge", "data-variant": u, className: c, ...l })),
            (x[8] = h),
            (x[9] = l),
            (x[10] = c),
            (x[11] = u),
            (x[12] = m))
          : (m = x[12]),
        m
      );
    }
    e.s(["Badge", () => l]);
  },
  26244,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(76111),
      s = e.i(22991),
      i = e.i(39781);
    let d = (e, r) => {
        let t = 0;
        for (let a = 0; a < e.length; a += 1) t = (31 * t + e.charCodeAt(a)) % r;
        return t;
      },
      l = (e) => {
        let a,
          l,
          p,
          v,
          b,
          j,
          N,
          y,
          w,
          C,
          k,
          $,
          A,
          _,
          S,
          B,
          T,
          H,
          M,
          z,
          L,
          P,
          R,
          O,
          V,
          I,
          U,
          E = (0, t.c)(65),
          { title: Z, description: q, variant: D, seed: K } = e;
        (E[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = Array.from({ length: 4 })), (E[0] = a))
          : (a = E[0]),
          E[1] !== K
            ? ((l = a.map((e, r) => ({
                label: ["Velocity", "Coverage", "Engagement", "Reliability"][r % 4],
                value: `${60 + d(K, 30) + 5 * r}%`,
                trend: r % 2 == 0 ? "+4%" : "-2%",
              }))),
              (E[1] = K),
              (E[2] = l))
            : (l = E[2]));
        let W = l;
        (E[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = Array.from({ length: 3 })), (E[3] = p))
          : (p = E[3]),
          E[4] !== K
            ? ((v = p.map((e, r) => ({
                label: ["SLA", "Backlog", "Risk"][r % 3],
                value: `${70 + d(K, 20) + 3 * r}%`,
              }))),
              (E[4] = K),
              (E[5] = v))
            : (v = E[5]));
        let F = v;
        (E[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = Array.from({ length: 6 })), (E[6] = b))
          : (b = E[6]),
          E[7] !== K || E[8] !== Z
            ? ((j = b.map((e, r) => ({
                id: `${K}-${r}`,
                name: `${Z} item ${r + 1}`,
                owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][r % 5],
                status: ["active", "monitor", "risk", "paused"][r % 4],
                updated: `${d(K, 18) + r + 1}h ago`,
              }))),
              (E[7] = K),
              (E[8] = Z),
              (E[9] = j))
            : (j = E[9]));
        let G = j;
        (E[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = Array.from({ length: 3 })), (E[10] = N))
          : (N = E[10]),
          E[11] !== K
            ? ((y = N.map((e, r) => ({
                id: `${K}-alert-${r}`,
                title: ["Policy update", "Cost spike", "Review required"][r % 3],
                severity: ["info", "warn", "danger"][r % 3],
                note: "Action recommended within 48h",
              }))),
              (E[11] = K),
              (E[12] = y))
            : (y = E[12]));
        let J = y;
        (E[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = Array.from({ length: 5 })), (E[13] = w))
          : (w = E[13]),
          E[14] !== K || E[15] !== Z
            ? ((C = w.map((e, r) => ({
                id: `${K}-event-${r}`,
                title: `${Z} update ${r + 1}`,
                meta: `Owner: ${["Ava", "Theo", "Nia", "Miles", "Zara"][r % 5]}`,
                time: `${d(K, 12) + r + 1}h ago`,
              }))),
              (E[14] = K),
              (E[15] = Z),
              (E[16] = C))
            : (C = E[16]));
        let Q = C;
        (E[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = ["Planned", "In progress", "Review", "Done"]), (E[17] = k))
          : (k = E[17]),
          E[18] !== K
            ? (($ = k.map((e, r) => ({
                id: `${K}-col-${r}`,
                title: e,
                items: Array.from({ length: 3 }).map((r, t) => ({
                  id: `${K}-${e}-${t}`,
                  title: `${e} item ${t + 1}`,
                  owner: ["Ava", "Theo", "Nia", "Miles", "Zara"][t % 5],
                  priority: ["low", "medium", "high"][t % 3],
                })),
              }))),
              (E[18] = K),
              (E[19] = $))
            : ($ = E[19]));
        let X = $;
        (E[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = Array.from({ length: 3 })), (E[20] = A))
          : (A = E[20]),
          E[21] !== K
            ? ((_ = A.map((e, r) => ({
                title: ["Adoption", "Efficiency", "Satisfaction"][r % 3],
                value: `${40 + d(K, 40) + 7 * r}%`,
                note: "Benchmark aligned with last 30 days",
              }))),
              (E[21] = K),
              (E[22] = _))
            : (_ = E[22]));
        let Y = _;
        E[23] !== J ||
        E[24] !== X ||
        E[25] !== Y ||
        E[26] !== W ||
        E[27] !== F ||
        E[28] !== G ||
        E[29] !== Q
          ? ((S = {
              metrics: W,
              quickStats: F,
              rows: G,
              alerts: J,
              timeline: Q,
              board: X,
              insights: Y,
            }),
            (E[23] = J),
            (E[24] = X),
            (E[25] = Y),
            (E[26] = W),
            (E[27] = F),
            (E[28] = G),
            (E[29] = Q),
            (E[30] = S))
          : (S = E[30]);
        let ee = S;
        return (
          E[31] !== Z
            ? ((B = (0, r.jsx)("p", {
                className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                children: Z,
              })),
              (T = (0, r.jsx)("h1", {
                className: "text-2xl font-bold text-foreground",
                children: Z,
              })),
              (E[31] = Z),
              (E[32] = B),
              (E[33] = T))
            : ((B = E[32]), (T = E[33])),
          E[34] !== q
            ? ((H = q
                ? (0, r.jsx)("p", { className: "mt-1 text-sm text-muted-foreground", children: q })
                : null),
              (E[34] = q),
              (E[35] = H))
            : (H = E[35]),
          E[36] !== B || E[37] !== T || E[38] !== H
            ? ((M = (0, r.jsxs)("div", { children: [B, T, H] })),
              (E[36] = B),
              (E[37] = T),
              (E[38] = H),
              (E[39] = M))
            : (M = E[39]),
          E[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)(s.Button, {
                    variant: "outline",
                    size: "sm",
                    className: "rounded-xl",
                    children: "Export",
                  }),
                  (0, r.jsx)(s.Button, {
                    size: "sm",
                    className:
                      "rounded-xl bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/20",
                    children: "New entry",
                  }),
                ],
              })),
              (E[40] = z))
            : (z = E[40]),
          E[41] !== M
            ? ((L = (0, r.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [M, z],
              })),
              (E[41] = M),
              (E[42] = L))
            : (L = E[42]),
          E[43] !== ee || E[44] !== D
            ? ((P =
                "metrics" === D
                  ? (0, r.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, r.jsx)("div", {
                          className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
                          children: ee.metrics.map(n),
                        }),
                        (0, r.jsxs)("div", {
                          className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                          children: [
                            (0, r.jsxs)(i.Card, {
                              className: "section-card",
                              children: [
                                (0, r.jsx)(i.CardHeader, {
                                  children: (0, r.jsx)(i.CardTitle, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Pulse",
                                  }),
                                }),
                                (0, r.jsxs)(i.CardContent, {
                                  className: "space-y-3",
                                  children: [
                                    ee.quickStats.map(o),
                                    (0, r.jsx)("div", { className: "gradient-divider" }),
                                    (0, r.jsx)("div", {
                                      className: "text-xs text-muted-foreground",
                                      children: "Metrics update every 15 minutes.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)(i.Card, {
                              className: "section-card lg:col-span-2",
                              children: [
                                (0, r.jsx)(i.CardHeader, {
                                  children: (0, r.jsx)(i.CardTitle, {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Alerts & signals",
                                  }),
                                }),
                                (0, r.jsx)(i.CardContent, {
                                  className: "grid gap-3 md:grid-cols-3",
                                  children: ee.alerts.map(c),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null),
              (E[43] = ee),
              (E[44] = D),
              (E[45] = P))
            : (P = E[45]),
          E[46] !== ee || E[47] !== D
            ? ((R =
                "table" === D
                  ? (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                      children: [
                        (0, r.jsxs)(i.Card, {
                          className: "section-card lg:col-span-2",
                          children: [
                            (0, r.jsx)(i.CardHeader, {
                              children: (0, r.jsx)(i.CardTitle, {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Latest records",
                              }),
                            }),
                            (0, r.jsx)(i.CardContent, {
                              className: "space-y-3",
                              children: ee.rows.map(m),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(i.Card, {
                          className: "section-card",
                          children: [
                            (0, r.jsx)(i.CardHeader, {
                              children: (0, r.jsx)(i.CardTitle, {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Highlights",
                              }),
                            }),
                            (0, r.jsx)(i.CardContent, {
                              className: "space-y-4",
                              children: ee.metrics.slice(0, 3).map(x),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null),
              (E[46] = ee),
              (E[47] = D),
              (E[48] = R))
            : (R = E[48]),
          E[49] !== ee || E[50] !== D
            ? ((O =
                "board" === D
                  ? (0, r.jsx)("div", {
                      className: "grid grid-cols-1 gap-4 xl:grid-cols-4",
                      children: ee.board.map(u),
                    })
                  : null),
              (E[49] = ee),
              (E[50] = D),
              (E[51] = O))
            : (O = E[51]),
          E[52] !== ee || E[53] !== D
            ? ((V =
                "timeline" === D
                  ? (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                      children: [
                        (0, r.jsxs)(i.Card, {
                          className: "section-card lg:col-span-2",
                          children: [
                            (0, r.jsx)(i.CardHeader, {
                              children: (0, r.jsx)(i.CardTitle, {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Activity timeline",
                              }),
                            }),
                            (0, r.jsx)(i.CardContent, {
                              className: "space-y-0",
                              children: ee.timeline.map((e, t) =>
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className: "relative flex gap-4 pb-4",
                                    children: [
                                      t !== ee.timeline.length - 1 &&
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute left-2.5 top-6 h-full w-0.5 bg-border",
                                        }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10",
                                        children: (0, r.jsx)("div", {
                                          className: "h-2 w-2 rounded-full bg-primary",
                                        }),
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-between",
                                        children: [
                                          (0, r.jsxs)("div", {
                                            children: [
                                              (0, r.jsx)("p", {
                                                className: "font-medium text-foreground",
                                                children: e.title,
                                              }),
                                              (0, r.jsx)("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: e.meta,
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: e.time,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(i.Card, {
                          className: "section-card",
                          children: [
                            (0, r.jsx)(i.CardHeader, {
                              children: (0, r.jsx)(i.CardTitle, {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Signals",
                              }),
                            }),
                            (0, r.jsx)(i.CardContent, {
                              className: "space-y-3",
                              children: ee.metrics.slice(0, 4).map(h),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null),
              (E[52] = ee),
              (E[53] = D),
              (E[54] = V))
            : (V = E[54]),
          E[55] !== ee || E[56] !== D
            ? ((I =
                "insights" === D
                  ? (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                      children: [
                        ee.insights.map(g),
                        (0, r.jsxs)(i.Card, {
                          className: "section-card lg:col-span-2",
                          children: [
                            (0, r.jsx)(i.CardHeader, {
                              children: (0, r.jsx)(i.CardTitle, {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Highlights",
                              }),
                            }),
                            (0, r.jsx)(i.CardContent, {
                              className: "space-y-3",
                              children: ee.rows.slice(0, 4).map(f),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null),
              (E[55] = ee),
              (E[56] = D),
              (E[57] = I))
            : (I = E[57]),
          E[58] !== L || E[59] !== P || E[60] !== R || E[61] !== O || E[62] !== V || E[63] !== I
            ? ((U = (0, r.jsxs)("div", { className: "space-y-6", children: [L, P, R, O, V, I] })),
              (E[58] = L),
              (E[59] = P),
              (E[60] = R),
              (E[61] = O),
              (E[62] = V),
              (E[63] = I),
              (E[64] = U))
            : (U = E[64]),
          U
        );
      };
    function n(e, t) {
      return (0, r.jsx)(
        i.Card,
        {
          className: `group relative overflow-hidden rounded-2xl border-0 bg-linear-to-br ${["from-indigo-500 to-indigo-600 shadow-indigo-500/20", "from-sky-500 to-cyan-500 shadow-sky-500/20", "from-amber-500 to-orange-500 shadow-amber-500/20", "from-rose-500 to-pink-500 shadow-rose-500/20"][t]} p-1 shadow-lg transition-all hover:shadow-xl`,
          children: (0, r.jsxs)("div", {
            className: "relative rounded-xl bg-white/10 p-4 backdrop-blur-sm",
            children: [
              (0, r.jsx)("div", {
                className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20",
                children: (0, r.jsx)("svg", {
                  className: "h-5 w-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, r.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: [
                      "M13 10V3L4 14h7v7l9-11h-7z",
                      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    ][t],
                  }),
                }),
              }),
              (0, r.jsx)("p", {
                className: "text-xs font-medium text-white/80",
                children: e.label,
              }),
              (0, r.jsx)("p", {
                className: "mt-1 text-2xl font-bold text-white",
                children: e.value,
              }),
              (0, r.jsx)(a.Badge, {
                className: "mt-2 border-0 bg-white/20 text-white",
                children: e.trend,
              }),
            ],
          }),
        },
        e.label
      );
    }
    function o(e) {
      return (0, r.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, r.jsx)("p", { className: "text-sm text-muted-foreground", children: e.label }),
            (0, r.jsx)("p", { className: "text-lg font-bold text-foreground", children: e.value }),
          ],
        },
        e.label
      );
    }
    function c(e) {
      return (0, r.jsxs)(
        "div",
        {
          className: "rounded-xl border border-border/60 bg-muted/50 p-3",
          children: [
            (0, r.jsx)("p", { className: "font-medium text-foreground", children: e.title }),
            (0, r.jsx)("p", { className: "text-xs text-muted-foreground", children: e.note }),
            (0, r.jsx)("span", {
              className: `chip mt-3 inline-flex ${"info" === e.severity ? "chip-info" : "warn" === e.severity ? "chip-warn" : "chip-danger"}`,
              children: e.severity,
            }),
          ],
        },
        e.id
      );
    }
    function m(e) {
      return (0, r.jsxs)(
        "div",
        {
          className:
            "group rounded-xl border border-border/60 bg-muted/30 p-4 transition-all hover:bg-muted/50",
          children: [
            (0, r.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("p", { className: "font-medium text-foreground", children: e.name }),
                    (0, r.jsxs)("p", {
                      className: "text-xs text-muted-foreground",
                      children: ["Owner: ", e.owner],
                    }),
                  ],
                }),
                (0, r.jsx)(a.Badge, {
                  variant: "secondary",
                  className: "bg-primary/10 text-primary",
                  children: e.status,
                }),
              ],
            }),
            (0, r.jsxs)("p", {
              className: "mt-2 text-xs text-muted-foreground",
              children: ["Updated ", e.updated],
            }),
          ],
        },
        e.id
      );
    }
    function x(e) {
      return (0, r.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("p", { className: "text-sm text-muted-foreground", children: e.label }),
                (0, r.jsx)("p", {
                  className: "text-lg font-bold text-foreground",
                  children: e.value,
                }),
              ],
            }),
            (0, r.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-primary/10 text-primary",
              children: e.trend,
            }),
          ],
        },
        e.label
      );
    }
    function u(e, t) {
      let s = [
        "border-l-slate-400",
        "border-l-blue-400",
        "border-l-amber-400",
        "border-l-emerald-400",
      ];
      return (0, r.jsxs)(
        i.Card,
        {
          className: "section-card",
          children: [
            (0, r.jsx)(i.CardHeader, {
              children: (0, r.jsxs)(i.CardTitle, {
                className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
                children: [
                  (0, r.jsx)("span", {
                    className: `h-2 w-2 rounded-full ${3 === t ? "bg-emerald-500" : 2 === t ? "bg-amber-500" : 1 === t ? "bg-blue-500" : "bg-slate-400"}`,
                  }),
                  e.title,
                  (0, r.jsx)(a.Badge, {
                    variant: "secondary",
                    className: "ml-auto bg-muted text-muted-foreground",
                    children: e.items.length,
                  }),
                ],
              }),
            }),
            (0, r.jsx)(i.CardContent, {
              className: "space-y-3",
              children: e.items.map((e) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: `rounded-xl border border-l-4 ${s[t]} border-border/60 bg-muted/30 p-3 transition-all hover:bg-muted/50`,
                    children: [
                      (0, r.jsx)("p", {
                        className: "font-medium text-foreground",
                        children: e.title,
                      }),
                      (0, r.jsxs)("p", {
                        className: "text-xs text-muted-foreground",
                        children: ["Owner: ", e.owner],
                      }),
                      (0, r.jsx)(a.Badge, {
                        variant: "secondary",
                        className: `mt-2 ${"high" === e.priority ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" : "medium" === e.priority ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`,
                        children: e.priority,
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        },
        e.id
      );
    }
    function h(e) {
      return (0, r.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("p", { className: "text-sm text-muted-foreground", children: e.label }),
                (0, r.jsx)("p", {
                  className: "text-lg font-bold text-foreground",
                  children: e.value,
                }),
              ],
            }),
            (0, r.jsx)(a.Badge, {
              variant: "secondary",
              className: "bg-primary/10 text-primary",
              children: e.trend,
            }),
          ],
        },
        e.label
      );
    }
    function g(e) {
      return (0, r.jsx)(
        i.Card,
        {
          className:
            "group relative overflow-hidden rounded-2xl border-0 p-1 shadow-lg transition-all hover:shadow-xl",
          style: { background: "linear-gradient(135deg, var(--primary), var(--accent))" },
          children: (0, r.jsxs)("div", {
            className: "relative h-full rounded-xl bg-card p-5",
            children: [
              (0, r.jsx)("div", {
                className:
                  "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10",
                children: (0, r.jsx)("svg", {
                  className: "h-5 w-5 text-primary",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, r.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  }),
                }),
              }),
              (0, r.jsx)("p", {
                className: "text-sm font-medium text-muted-foreground",
                children: e.title,
              }),
              (0, r.jsx)("p", {
                className: "mt-1 text-3xl font-bold text-foreground",
                children: e.value,
              }),
              (0, r.jsx)("p", {
                className: "mt-2 text-xs text-muted-foreground",
                children: e.note,
              }),
            ],
          }),
        },
        e.title
      );
    }
    function f(e) {
      return (0, r.jsxs)(
        "div",
        {
          className:
            "rounded-xl border border-border/60 bg-muted/30 p-3 transition-all hover:bg-muted/50",
          children: [
            (0, r.jsx)("p", { className: "font-medium text-foreground", children: e.name }),
            (0, r.jsxs)("p", {
              className: "text-xs text-muted-foreground",
              children: ["Updated ", e.updated],
            }),
          ],
        },
        e.id
      );
    }
    var p = e.i(72743);
    e.s(
      [
        "SectionPage",
        0,
        (e) => {
          let a,
            s,
            i,
            d = (0, t.c)(11),
            { sectionId: n, tabId: o } = e;
          d[0] !== n ? ((a = (0, p.getSectionById)(n)), (d[0] = n), (d[1] = a)) : (a = d[1]);
          let c = a;
          d[2] !== c?.children || d[3] !== n || d[4] !== o
            ? ((s = o ? (0, p.getSectionChild)(n, o) : (c?.children[0] ?? null)),
              (d[2] = c?.children),
              (d[3] = n),
              (d[4] = o),
              (d[5] = s))
            : (s = d[5]);
          let m = s;
          if (!c || !m) return null;
          let x = `${c.label} \xb7 ${m.label}`,
            u = m.variant ?? "metrics",
            h = `${c.id}-${m.id}`;
          return (
            d[6] !== m.description || d[7] !== x || d[8] !== u || d[9] !== h
              ? ((i = (0, r.jsx)(l, { title: x, description: m.description, variant: u, seed: h })),
                (d[6] = m.description),
                (d[7] = x),
                (d[8] = u),
                (d[9] = h),
                (d[10] = i))
              : (i = d[10]),
            i
          );
        },
      ],
      26244
    );
  },
  7777,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(26244);
    function s() {
      let e,
        s = (0, t.c)(1);
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(a.SectionPage, { sectionId: "users", tabId: "teams" })), (s[0] = e))
          : (e = s[0]),
        e
      );
    }
    e.s(["default", () => s]);
  },
]);
