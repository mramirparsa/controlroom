(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(2082);
    function s(e) {
      let s,
        o,
        l,
        n,
        i = (0, r.c)(8);
      return (
        i[0] !== e
          ? (({ className: s, ...o } = e), (i[0] = e), (i[1] = s), (i[2] = o))
          : ((s = i[1]), (o = i[2])),
        i[3] !== s
          ? ((l = (0, a.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              s
            )),
            (i[3] = s),
            (i[4] = l))
          : (l = i[4]),
        i[5] !== o || i[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card", className: l, ...o })),
            (i[5] = o),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function o(e) {
      let s,
        o,
        l,
        n,
        i = (0, r.c)(8);
      return (
        i[0] !== e
          ? (({ className: s, ...o } = e), (i[0] = e), (i[1] = s), (i[2] = o))
          : ((s = i[1]), (o = i[2])),
        i[3] !== s
          ? ((l = (0, a.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              s
            )),
            (i[3] = s),
            (i[4] = l))
          : (l = i[4]),
        i[5] !== o || i[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-header", className: l, ...o })),
            (i[5] = o),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function l(e) {
      let s,
        o,
        l,
        n,
        i = (0, r.c)(8);
      return (
        i[0] !== e
          ? (({ className: s, ...o } = e), (i[0] = e), (i[1] = s), (i[2] = o))
          : ((s = i[1]), (o = i[2])),
        i[3] !== s
          ? ((l = (0, a.cn)("leading-none font-semibold", s)), (i[3] = s), (i[4] = l))
          : (l = i[4]),
        i[5] !== o || i[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-title", className: l, ...o })),
            (i[5] = o),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function n(e) {
      let s,
        o,
        l,
        n,
        i = (0, r.c)(8);
      return (
        i[0] !== e
          ? (({ className: s, ...o } = e), (i[0] = e), (i[1] = s), (i[2] = o))
          : ((s = i[1]), (o = i[2])),
        i[3] !== s
          ? ((l = (0, a.cn)("text-muted-foreground text-sm", s)), (i[3] = s), (i[4] = l))
          : (l = i[4]),
        i[5] !== o || i[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-description", className: l, ...o })),
            (i[5] = o),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function i(e) {
      let s,
        o,
        l,
        n,
        i = (0, r.c)(8);
      return (
        i[0] !== e
          ? (({ className: s, ...o } = e), (i[0] = e), (i[1] = s), (i[2] = o))
          : ((s = i[1]), (o = i[2])),
        i[3] !== s ? ((l = (0, a.cn)("px-6", s)), (i[3] = s), (i[4] = l)) : (l = i[4]),
        i[5] !== o || i[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-content", className: l, ...o })),
            (i[5] = o),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    e.s([
      "Card",
      () => s,
      "CardContent",
      () => i,
      "CardDescription",
      () => n,
      "CardHeader",
      () => o,
      "CardTitle",
      () => l,
    ]);
  },
  59587,
  (e, t, r) => {
    t.exports = e.r(11661);
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(2082);
    function s(e) {
      let s,
        o,
        l,
        n,
        i,
        c = (0, r.c)(10);
      return (
        c[0] !== e
          ? (({ className: s, type: l, ...o } = e), (c[0] = e), (c[1] = s), (c[2] = o), (c[3] = l))
          : ((s = c[1]), (o = c[2]), (l = c[3])),
        c[4] !== s
          ? ((n = (0, a.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              s
            )),
            (c[4] = s),
            (c[5] = n))
          : (n = c[5]),
        c[6] !== o || c[7] !== n || c[8] !== l
          ? ((i = (0, t.jsx)("input", { type: l, "data-slot": "input", className: n, ...o })),
            (c[6] = o),
            (c[7] = n),
            (c[8] = l),
            (c[9] = i))
          : (i = c[9]),
        i
      );
    }
    e.s(["Input", () => s]);
  },
  50610,
  (e) => {
    "use strict";
    var t = e.i(34706);
    e.i(90761);
    var r = e.i(63849),
      a = e.i(62482),
      s = [
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
      ].reduce((e, s) => {
        let o = (0, r.createSlot)(`Primitive.${s}`),
          l = t.forwardRef((e, t) => {
            let { asChild: r, ...l } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(r ? o : s, { ...l, ref: t })
            );
          });
        return ((l.displayName = `Primitive.${s}`), { ...e, [s]: l });
      }, {});
    e.s(["Primitive", () => s]);
  },
  5118,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(34706),
      s = e.i(59587),
      o = e.i(65436),
      l = e.i(35285),
      n = e.i(44014),
      i = e.i(16220),
      c = e.i(22991),
      d = e.i(39781),
      m = e.i(61156),
      x = e.i(71978),
      u = e.i(58976);
    let h = o.z.object({ email: o.z.string().email(), password: o.z.string().min(8) }),
      f = async () => {
        for (let e of await indexedDB.databases()) e.name && indexedDB.deleteDatabase(e.name);
        window.location.reload();
      };
    function p() {
      let e,
        o,
        p,
        j,
        y,
        N,
        w,
        _,
        k,
        S,
        C,
        z,
        B,
        L,
        M,
        D,
        H,
        A,
        T,
        R,
        W,
        P,
        I,
        V,
        F,
        U,
        O,
        $,
        E,
        K,
        G,
        Q,
        q,
        J,
        X,
        Y,
        Z,
        ee,
        et,
        er,
        ea,
        es,
        eo,
        el,
        en,
        ei,
        ec,
        ed,
        em,
        ex,
        eu,
        eh,
        ef,
        ep,
        eb,
        eg,
        ev,
        ej = (0, r.c)(88),
        ey = (0, s.useRouter)(),
        eN = (0, i.useAuthStore)(v),
        [ew, e_] = (0, a.useState)(!1),
        [ek, eS] = (0, a.useState)(!1);
      (ej[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
            let e = setTimeout(() => eS(!0), 0);
            return () => clearTimeout(e);
          }),
          (o = []),
          (ej[0] = e),
          (ej[1] = o))
        : ((e = ej[0]), (o = ej[1])),
        (0, a.useEffect)(e, o),
        ej[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { resolver: (0, n.zodResolver)(h), defaultValues: { email: "", password: "" } }),
            (ej[2] = p))
          : (p = ej[2]));
      let { register: eC, handleSubmit: ez, formState: eB, setValue: eL } = (0, l.useForm)(p),
        { errors: eM } = eB;
      ej[3] !== eL
        ? ((j = () => {
            (eL("email", "mr.amirr.1998@gmail.com"),
              eL("password", "Password123!"),
              u.toast.info("Demo credentials filled!"));
          }),
          (ej[3] = eL),
          (ej[4] = j))
        : (j = ej[4]);
      let eD = j;
      (ej[5] !== eN || ej[6] !== ey
        ? ((y = async (e) => {
            e_(!0);
            let t = await eN(e);
            (e_(!1), t.ok)
              ? (u.toast.success("Welcome back!"), ey.push("/dashboard"))
              : u.toast.error(t.error ?? "Login failed");
          }),
          (ej[5] = eN),
          (ej[6] = ey),
          (ej[7] = y))
        : (y = ej[7]),
        ej[8] !== ez || ej[9] !== y
          ? ((N = ez(y)), (ej[8] = ez), (ej[9] = y), (ej[10] = N))
          : (N = ej[10]));
      let eH = N;
      (ej[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, t.jsx)("div", {
            className:
              "absolute -left-20 -top-20 h-80 w-80 rounded-full bg-linear-to-br from-primary/30 to-transparent blur-3xl",
          })),
          (_ = (0, t.jsx)("div", {
            className:
              "absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-linear-to-tl from-accent/25 to-transparent blur-3xl",
          })),
          (k = (0, t.jsx)("div", {
            className:
              "absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-linear-to-br from-chart-5/20 to-transparent blur-3xl",
          })),
          (ej[11] = w),
          (ej[12] = _),
          (ej[13] = k))
        : ((w = ej[11]), (_ = ej[12]), (k = ej[13])),
        ej[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)("div", {
              className:
                "absolute left-[15%] top-[20%] h-3 w-3 animate-bounce rounded-full bg-primary/60",
              style: { animationDuration: "3s" },
            })),
            (ej[14] = S))
          : (S = ej[14]),
        ej[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, t.jsx)("div", {
              className:
                "absolute left-[80%] top-[30%] h-2 w-2 animate-bounce rounded-full bg-accent/60",
              style: { animationDuration: "2.5s", animationDelay: "0.5s" },
            })),
            (ej[15] = C))
          : (C = ej[15]),
        ej[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, t.jsx)("div", {
              className:
                "absolute left-[25%] top-[70%] h-2 w-2 animate-bounce rounded-full bg-chart-5/60",
              style: { animationDuration: "3.5s", animationDelay: "1s" },
            })),
            (ej[16] = z))
          : (z = ej[16]),
        ej[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, t.jsxs)("div", {
              className: "pointer-events-none absolute inset-0 overflow-hidden",
              children: [
                w,
                _,
                k,
                S,
                C,
                z,
                (0, t.jsx)("div", {
                  className:
                    "absolute left-[70%] top-[75%] h-3 w-3 animate-bounce rounded-full bg-primary/60",
                  style: { animationDuration: "2.8s", animationDelay: "0.3s" },
                }),
              ],
            })),
            (ej[17] = B))
          : (B = ej[17]),
        ej[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, t.jsx)("div", {
              className: "pointer-events-none absolute inset-0 opacity-[0.015]",
              style: {
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              },
            })),
            (ej[18] = L))
          : (L = ej[18]));
      let eA = `grid w-full grid-cols-1 gap-6 transition-all duration-700 lg:grid-cols-2 lg:gap-12 ${ek ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`;
      return (
        ej[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, t.jsx)("div", {
              className:
                "absolute inset-0 animate-spin rounded-2xl bg-linear-to-br from-primary via-accent to-chart-5 opacity-75 blur-xl",
              style: { animationDuration: "8s" },
            })),
            (ej[19] = M))
          : (M = ej[19]),
        ej[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, t.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, t.jsxs)("div", {
                  className: "relative h-14 w-14",
                  children: [
                    M,
                    (0, t.jsx)("div", {
                      className:
                        "relative flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-2xl",
                      children: (0, t.jsx)("div", {
                        className: "h-7 w-7 rounded-xl bg-linear-to-br from-primary to-accent",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground",
                      children: "ControlRoom",
                    }),
                    (0, t.jsx)("h1", {
                      className: "text-xl font-bold text-foreground lg:text-3xl",
                      children: "Command Center",
                    }),
                  ],
                }),
              ],
            })),
            (ej[20] = D))
          : (D = ej[20]),
        ej[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, t.jsxs)("span", {
              className:
                "bg-linear-to-r from-primary via-accent to-chart-5 bg-clip-text text-transparent",
              children: [" ", "product"],
            })),
            (ej[21] = H))
          : (H = ej[21]),
        ej[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, t.jsxs)("span", {
              className:
                "bg-linear-to-r from-accent via-chart-5 to-primary bg-clip-text text-transparent",
              children: [" ", "team"],
            })),
            (ej[22] = A))
          : (A = ej[22]),
        ej[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, t.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, t.jsxs)("h2", {
                  className: "text-3xl font-bold leading-tight text-foreground lg:text-5xl",
                  children: [
                    "Operate your",
                    H,
                    ",",
                    A,
                    ", and",
                    (0, t.jsxs)("span", {
                      className:
                        "bg-linear-to-r from-chart-5 via-primary to-accent bg-clip-text text-transparent",
                      children: [" ", "growth"],
                    }),
                    ".",
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "text-base text-muted-foreground lg:text-lg",
                  children:
                    "An executive-grade control center for users, projects, tasks, and billing — powered by a production-like mock API.",
                }),
              ],
            })),
            (ej[23] = T))
          : (T = ej[23]),
        ej[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, t.jsx)("div", {
              className: "hidden flex-wrap gap-2 lg:flex",
              children: [
                { label: "Next.js 16", icon: "⚡" },
                { label: "React Query", icon: "🔄" },
                { label: "MSW + IndexedDB", icon: "💾" },
                { label: "RBAC Ready", icon: "🔐" },
                { label: "TypeScript", icon: "📘" },
              ].map(g),
            })),
            (ej[24] = R))
          : (R = ej[24]),
        ej[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, t.jsxs)("div", {
              className: "hidden flex-col justify-center space-y-5 lg:flex",
              children: [
                D,
                T,
                R,
                (0, t.jsx)("div", {
                  className: "hidden grid-cols-3 gap-4 lg:grid",
                  children: [
                    {
                      value: "500+",
                      label: "Users",
                      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                    },
                    {
                      value: "50+",
                      label: "Projects",
                      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    },
                    {
                      value: "99.9%",
                      label: "Uptime",
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    },
                  ].map(b),
                }),
              ],
            })),
            (ej[25] = W))
          : (W = ej[25]),
        ej[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, t.jsx)("div", {
              className: "h-1.5 w-full bg-linear-to-r from-primary via-accent to-chart-5",
            })),
            (ej[26] = P))
          : (P = ej[26]),
        ej[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(d.CardTitle, {
                  className: "text-xl font-bold text-foreground",
                  children: "Welcome back",
                }),
                (0, t.jsx)(d.CardDescription, {
                  className: "mt-1 text-muted-foreground",
                  children: "Sign in to access your dashboard",
                }),
              ],
            })),
            (ej[27] = I))
          : (I = ej[27]),
        ej[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, t.jsx)("div", {
              className:
                "absolute inset-0 animate-pulse rounded-xl bg-linear-to-br from-primary to-accent opacity-50 blur-lg",
            })),
            (ej[28] = V))
          : (V = ej[28]),
        ej[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, t.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                I,
                (0, t.jsxs)("div", {
                  className: "relative",
                  children: [
                    V,
                    (0, t.jsx)("div", {
                      className:
                        "relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-xl",
                      children: (0, t.jsx)("svg", {
                        className: "h-7 w-7 text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, t.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (ej[29] = F))
          : (F = ej[29]),
        ej[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", {
                  className: "text-sm font-semibold text-foreground",
                  children: "Try it instantly",
                }),
                (0, t.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Use demo credentials to explore",
                }),
              ],
            })),
            (ej[30] = U))
          : (U = ej[30]),
        ej[31] !== eD
          ? ((O = (0, t.jsxs)(d.CardHeader, {
              className: "space-y-3 px-5 pb-2 pt-5",
              children: [
                F,
                (0, t.jsx)("div", {
                  className:
                    "rounded-xl border border-primary/20 bg-linear-to-r from-primary/5 to-accent/5 p-2.5",
                  children: (0, t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      U,
                      (0, t.jsx)(c.Button, {
                        type: "button",
                        size: "sm",
                        onClick: eD,
                        className:
                          "h-7 rounded-lg bg-linear-to-r from-primary to-accent px-3 text-[11px] font-semibold text-white shadow-lg shadow-primary/20",
                        children: "Fill demo",
                      }),
                    ],
                  }),
                }),
              ],
            })),
            (ej[31] = eD),
            (ej[32] = O))
          : (O = ej[32]),
        ej[33] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, t.jsx)(x.Label, {
              htmlFor: "email",
              className: "text-sm font-medium text-foreground",
              children: "Email address",
            })),
            (ej[33] = $))
          : ($ = ej[33]),
        ej[34] !== eC ? ((E = eC("email")), (ej[34] = eC), (ej[35] = E)) : (E = ej[35]),
        ej[36] !== E
          ? ((K = (0, t.jsx)(m.Input, {
              id: "email",
              placeholder: "you@company.com",
              type: "email",
              className:
                "h-10 rounded-xl border-border/60 bg-background/80 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
              ...E,
            })),
            (ej[36] = E),
            (ej[37] = K))
          : (K = ej[37]),
        ej[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, t.jsx)("svg", {
              className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              }),
            })),
            (ej[38] = G))
          : (G = ej[38]),
        ej[39] !== K
          ? ((Q = (0, t.jsxs)("div", { className: "relative", children: [K, G] })),
            (ej[39] = K),
            (ej[40] = Q))
          : (Q = ej[40]),
        ej[41] !== eM.email
          ? ((q = eM.email
              ? (0, t.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: eM.email.message,
                })
              : null),
            (ej[41] = eM.email),
            (ej[42] = q))
          : (q = ej[42]),
        ej[43] !== Q || ej[44] !== q
          ? ((J = (0, t.jsxs)("div", { className: "space-y-1.5", children: [$, Q, q] })),
            (ej[43] = Q),
            (ej[44] = q),
            (ej[45] = J))
          : (J = ej[45]),
        ej[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, t.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsx)(x.Label, {
                  htmlFor: "password",
                  className: "text-sm font-medium text-foreground",
                  children: "Password",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: "text-xs font-medium text-primary hover:underline",
                  children: "Forgot password?",
                }),
              ],
            })),
            (ej[46] = X))
          : (X = ej[46]),
        ej[47] !== eC ? ((Y = eC("password")), (ej[47] = eC), (ej[48] = Y)) : (Y = ej[48]),
        ej[49] !== Y
          ? ((Z = (0, t.jsx)(m.Input, {
              id: "password",
              placeholder: "••••••••",
              type: "password",
              className:
                "h-10 rounded-xl border-border/60 bg-background/80 pl-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
              ...Y,
            })),
            (ej[49] = Y),
            (ej[50] = Z))
          : (Z = ej[50]),
        ej[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (0, t.jsx)("svg", {
              className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              }),
            })),
            (ej[51] = ee))
          : (ee = ej[51]),
        ej[52] !== Z
          ? ((et = (0, t.jsxs)("div", { className: "relative", children: [Z, ee] })),
            (ej[52] = Z),
            (ej[53] = et))
          : (et = ej[53]),
        ej[54] !== eM.password
          ? ((er = eM.password
              ? (0, t.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: eM.password.message,
                })
              : null),
            (ej[54] = eM.password),
            (ej[55] = er))
          : (er = ej[55]),
        ej[56] !== et || ej[57] !== er
          ? ((ea = (0, t.jsxs)("div", { className: "space-y-1.5", children: [X, et, er] })),
            (ej[56] = et),
            (ej[57] = er),
            (ej[58] = ea))
          : (ea = ej[58]),
        ej[59] !== ew
          ? ((es = ew
              ? (0, t.jsxs)("span", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsxs)("svg", {
                      className: "h-5 w-5 animate-spin",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        (0, t.jsx)("circle", {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4",
                        }),
                        (0, t.jsx)("path", {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        }),
                      ],
                    }),
                    "Signing in...",
                  ],
                })
              : (0, t.jsxs)("span", {
                  className: "flex items-center gap-2",
                  children: [
                    "Sign in",
                    (0, t.jsx)("svg", {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17 8l4 4m0 0l-4 4m4-4H3",
                      }),
                    }),
                  ],
                })),
            (ej[59] = ew),
            (ej[60] = es))
          : (es = ej[60]),
        ej[61] !== ew || ej[62] !== es
          ? ((eo = (0, t.jsx)(c.Button, {
              type: "submit",
              className: "btn-premium h-10 w-full rounded-xl text-sm",
              disabled: ew,
              children: es,
            })),
            (ej[61] = ew),
            (ej[62] = es),
            (ej[63] = eo))
          : (eo = ej[63]),
        ej[64] !== eH || ej[65] !== J || ej[66] !== ea || ej[67] !== eo
          ? ((el = (0, t.jsxs)("form", {
              className: "space-y-4",
              onSubmit: eH,
              children: [J, ea, eo],
            })),
            (ej[64] = eH),
            (ej[65] = J),
            (ej[66] = ea),
            (ej[67] = eo),
            (ej[68] = el))
          : (el = ej[68]),
        ej[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, t.jsx)("div", {
              className: "absolute inset-0 flex items-center",
              children: (0, t.jsx)("div", { className: "w-full border-t border-border/40" }),
            })),
            (ej[69] = en))
          : (en = ej[69]),
        ej[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (0, t.jsxs)("div", {
              className: "relative",
              children: [
                en,
                (0, t.jsx)("div", {
                  className: "relative flex justify-center",
                  children: (0, t.jsx)("span", {
                    className: "bg-card px-3 text-xs text-muted-foreground",
                    children: "or",
                  }),
                }),
              ],
            })),
            (ej[70] = ei))
          : (ei = ej[70]),
        ej[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (0, t.jsxs)("p", {
              className: "text-center text-sm text-muted-foreground",
              children: [
                "Don't have an account?",
                " ",
                (0, t.jsx)("button", {
                  type: "button",
                  className: "font-semibold text-primary hover:underline",
                  children: "Create one",
                }),
              ],
            })),
            (ej[71] = ec))
          : (ec = ej[71]),
        ej[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, t.jsxs)("div", {
              className: "mt-3 space-y-2",
              children: [
                ei,
                ec,
                (0, t.jsxs)("button", {
                  type: "button",
                  onClick: f,
                  className:
                    "flex w-full items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-destructive",
                  children: [
                    (0, t.jsx)("svg", {
                      className: "h-3 w-3",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                      }),
                    }),
                    "Having issues? Reset database",
                  ],
                }),
              ],
            })),
            (ej[72] = ed))
          : (ed = ej[72]),
        ej[73] !== el
          ? ((em = (0, t.jsxs)(d.CardContent, { className: "px-5 pb-4 pt-3", children: [el, ed] })),
            (ej[73] = el),
            (ej[74] = em))
          : (em = ej[74]),
        ej[75] !== O || ej[76] !== em
          ? ((ex = (0, t.jsx)("div", {
              className: "flex items-center justify-center lg:justify-end",
              children: (0, t.jsxs)(d.Card, {
                className: "glass-card w-full max-w-sm overflow-hidden rounded-2xl border-0",
                children: [P, O, em],
              }),
            })),
            (ej[75] = O),
            (ej[76] = em),
            (ej[77] = ex))
          : (ex = ej[77]),
        ej[78] !== eA || ej[79] !== ex
          ? ((eu = (0, t.jsx)("div", {
              className:
                "relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-6 lg:py-10",
              children: (0, t.jsxs)("div", { className: eA, children: [W, ex] }),
            })),
            (ej[78] = eA),
            (ej[79] = ex),
            (ej[80] = eu))
          : (eu = ej[80]),
        ej[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = (0, t.jsxs)("p", {
              className: "text-sm text-muted-foreground",
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
            (ef = (0, t.jsx)("span", {
              className: "hidden text-muted-foreground/40 sm:inline",
              children: "•",
            })),
            (ej[81] = eh),
            (ej[82] = ef))
          : ((eh = ej[81]), (ef = ej[82])),
        ej[83] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = (0, t.jsxs)("a", {
              href: "https://github.com/mramirparsa",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
              children: [
                (0, t.jsx)("svg", {
                  className: "h-4 w-4",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: (0, t.jsx)("path", {
                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  }),
                }),
                "GitHub",
              ],
            })),
            (ej[83] = ep))
          : (ep = ej[83]),
        ej[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((eb = (0, t.jsxs)("a", {
              href: "https://t.me/mramirparsa",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
              children: [
                (0, t.jsx)("svg", {
                  className: "h-4 w-4",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: (0, t.jsx)("path", {
                    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                  }),
                }),
                "Telegram",
              ],
            })),
            (ej[84] = eb))
          : (eb = ej[84]),
        ej[85] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, t.jsx)("div", {
              className: "mt-auto border-t border-border/20 bg-background/60 py-3 backdrop-blur-sm",
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-center",
                children: [
                  eh,
                  ef,
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      ep,
                      eb,
                      (0, t.jsxs)("a", {
                        href: "https://instagram.com/__Amirhossein1999",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        children: [
                          (0, t.jsx)("svg", {
                            className: "h-4 w-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                            }),
                          }),
                          "Instagram",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })),
            (ej[85] = eg))
          : (eg = ej[85]),
        ej[86] !== eu
          ? ((ev = (0, t.jsxs)("main", {
              className:
                "login-page animated-gradient relative flex h-screen flex-col overflow-hidden",
              children: [B, L, eu, eg],
            })),
            (ej[86] = eu),
            (ej[87] = ev))
          : (ev = ej[87]),
        ev
      );
    }
    function b(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "stats-card p-3 text-center",
          children: [
            (0, t.jsx)("div", {
              className:
                "mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
              children: (0, t.jsx)("svg", {
                className: "h-4 w-4 text-primary",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, t.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: e.icon,
                }),
              }),
            }),
            (0, t.jsx)("p", { className: "text-2xl font-bold text-foreground", children: e.value }),
            (0, t.jsx)("p", { className: "text-xs text-muted-foreground", children: e.label }),
          ],
        },
        e.label
      );
    }
    function g(e) {
      return (0, t.jsxs)(
        "span",
        { className: "feature-tag", children: [(0, t.jsx)("span", { children: e.icon }), e.label] },
        e.label
      );
    }
    function v(e) {
      return e.login;
    }
    e.s(["default", () => p]);
  },
]);
