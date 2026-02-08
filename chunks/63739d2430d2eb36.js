(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      r = e.i(2082);
    function s(e) {
      let s,
        i,
        n,
        d,
        l = (0, a.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((n = (0, r.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              s
            )),
            (l[3] = s),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== i || l[6] !== n
          ? ((d = (0, t.jsx)("div", { "data-slot": "card", className: n, ...i })),
            (l[5] = i),
            (l[6] = n),
            (l[7] = d))
          : (d = l[7]),
        d
      );
    }
    function i(e) {
      let s,
        i,
        n,
        d,
        l = (0, a.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((n = (0, r.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              s
            )),
            (l[3] = s),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== i || l[6] !== n
          ? ((d = (0, t.jsx)("div", { "data-slot": "card-header", className: n, ...i })),
            (l[5] = i),
            (l[6] = n),
            (l[7] = d))
          : (d = l[7]),
        d
      );
    }
    function n(e) {
      let s,
        i,
        n,
        d,
        l = (0, a.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((n = (0, r.cn)("leading-none font-semibold", s)), (l[3] = s), (l[4] = n))
          : (n = l[4]),
        l[5] !== i || l[6] !== n
          ? ((d = (0, t.jsx)("div", { "data-slot": "card-title", className: n, ...i })),
            (l[5] = i),
            (l[6] = n),
            (l[7] = d))
          : (d = l[7]),
        d
      );
    }
    function d(e) {
      let s,
        i,
        n,
        d,
        l = (0, a.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((n = (0, r.cn)("text-muted-foreground text-sm", s)), (l[3] = s), (l[4] = n))
          : (n = l[4]),
        l[5] !== i || l[6] !== n
          ? ((d = (0, t.jsx)("div", { "data-slot": "card-description", className: n, ...i })),
            (l[5] = i),
            (l[6] = n),
            (l[7] = d))
          : (d = l[7]),
        d
      );
    }
    function l(e) {
      let s,
        i,
        n,
        d,
        l = (0, a.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s ? ((n = (0, r.cn)("px-6", s)), (l[3] = s), (l[4] = n)) : (n = l[4]),
        l[5] !== i || l[6] !== n
          ? ((d = (0, t.jsx)("div", { "data-slot": "card-content", className: n, ...i })),
            (l[5] = i),
            (l[6] = n),
            (l[7] = d))
          : (d = l[7]),
        d
      );
    }
    e.s([
      "Card",
      () => s,
      "CardContent",
      () => l,
      "CardDescription",
      () => d,
      "CardHeader",
      () => i,
      "CardTitle",
      () => n,
    ]);
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      r = e.i(2082);
    function s(e) {
      let s,
        i,
        n,
        d,
        l,
        c = (0, a.c)(10);
      return (
        c[0] !== e
          ? (({ className: s, type: n, ...i } = e), (c[0] = e), (c[1] = s), (c[2] = i), (c[3] = n))
          : ((s = c[1]), (i = c[2]), (n = c[3])),
        c[4] !== s
          ? ((d = (0, r.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              s
            )),
            (c[4] = s),
            (c[5] = d))
          : (d = c[5]),
        c[6] !== i || c[7] !== d || c[8] !== n
          ? ((l = (0, t.jsx)("input", { type: n, "data-slot": "input", className: d, ...i })),
            (c[6] = i),
            (c[7] = d),
            (c[8] = n),
            (c[9] = l))
          : (l = c[9]),
        l
      );
    }
    e.s(["Input", () => s]);
  },
  56801,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      r = e.i(34706),
      s = e.i(59587),
      i = e.i(65436),
      n = e.i(35285),
      d = e.i(44014),
      l = e.i(58976),
      c = e.i(32103),
      o = e.i(16220),
      u = e.i(22991),
      m = e.i(39781),
      h = e.i(61156),
      x = e.i(71978);
    let b = i.z.object({
      name: i.z.string().min(2, "Enter a project name"),
      status: i.z.enum(["active", "paused", "completed", "archived"]),
      startDate: i.z.string().min(1, "Select a start date"),
      dueDate: i.z.string().min(1, "Select a due date"),
      budget: i.z.number().min(1e3, "Budget must be at least 1,000"),
    });
    function p() {
      let e,
        i,
        p,
        j,
        f,
        v,
        w,
        y,
        N,
        C,
        D,
        S,
        _,
        z,
        T,
        B,
        F,
        I,
        L,
        P,
        A,
        O,
        R,
        k,
        H,
        K,
        U,
        E,
        J,
        V,
        q,
        G,
        M,
        Q,
        W,
        X = (0, a.c)(73),
        Y = (0, s.useRouter)(),
        Z = (0, o.useAuthStore)(g),
        [$, ee] = (0, r.useState)(!1);
      X[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, d.zodResolver)(b),
            defaultValues: { name: "", status: "active", startDate: "", dueDate: "", budget: 5e4 },
          }),
          (X[0] = e))
        : (e = X[0]);
      let { register: et, handleSubmit: ea, formState: er } = (0, n.useForm)(e),
        { errors: es } = er;
      (X[1] !== Y || X[2] !== Z
        ? ((i = async (e) => {
            if (!Z) return;
            ee(!0);
            let t = await (0, c.apiClient)("/api/projects", {
              method: "POST",
              body: JSON.stringify({ ...e, managerId: Z.id }),
            });
            (ee(!1), t.error)
              ? l.toast.error(t.error.message ?? "Failed to create project")
              : (l.toast.success("Project created"), Y.push("/projects"));
          }),
          (X[1] = Y),
          (X[2] = Z),
          (X[3] = i))
        : (i = X[3]),
        X[4] !== ea || X[5] !== i
          ? ((p = ea(i)), (X[4] = ea), (X[5] = i), (X[6] = p))
          : (p = X[6]));
      let ei = p;
      (X[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, t.jsxs)(m.CardHeader, {
            children: [
              (0, t.jsx)(m.CardTitle, { children: "Create project" }),
              (0, t.jsx)(m.CardDescription, {
                className: "text-white/60",
                children: "Capture the core timeline and budget before assigning members.",
              }),
            ],
          })),
          (X[7] = j))
        : (j = X[7]),
        X[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, t.jsx)(x.Label, { htmlFor: "name", children: "Project name" })), (X[8] = f))
          : (f = X[8]),
        X[9] !== et ? ((v = et("name")), (X[9] = et), (X[10] = v)) : (v = X[10]),
        X[11] !== v
          ? ((w = (0, t.jsx)(h.Input, {
              id: "name",
              placeholder: "Launch enterprise portal",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...v,
            })),
            (X[11] = v),
            (X[12] = w))
          : (w = X[12]),
        X[13] !== es.name
          ? ((y = es.name
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: es.name.message })
              : null),
            (X[13] = es.name),
            (X[14] = y))
          : (y = X[14]),
        X[15] !== w || X[16] !== y
          ? ((N = (0, t.jsxs)("div", { className: "space-y-2", children: [f, w, y] })),
            (X[15] = w),
            (X[16] = y),
            (X[17] = N))
          : (N = X[17]),
        X[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, t.jsx)(x.Label, { children: "Status" })), (X[18] = C))
          : (C = X[18]),
        X[19] !== et ? ((D = et("status")), (X[19] = et), (X[20] = D)) : (D = X[20]),
        X[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)("option", { value: "active", children: "active" })),
            (_ = (0, t.jsx)("option", { value: "paused", children: "paused" })),
            (z = (0, t.jsx)("option", { value: "completed", children: "completed" })),
            (T = (0, t.jsx)("option", { value: "archived", children: "archived" })),
            (X[21] = S),
            (X[22] = _),
            (X[23] = z),
            (X[24] = T))
          : ((S = X[21]), (_ = X[22]), (z = X[23]), (T = X[24])),
        X[25] !== D
          ? ((B = (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                C,
                (0, t.jsxs)("select", {
                  className:
                    "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                  ...D,
                  children: [S, _, z, T],
                }),
              ],
            })),
            (X[25] = D),
            (X[26] = B))
          : (B = X[26]),
        X[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, t.jsx)(x.Label, { htmlFor: "startDate", children: "Start date" })),
            (X[27] = F))
          : (F = X[27]),
        X[28] !== et ? ((I = et("startDate")), (X[28] = et), (X[29] = I)) : (I = X[29]),
        X[30] !== I
          ? ((L = (0, t.jsx)(h.Input, {
              id: "startDate",
              type: "date",
              className: "border-white/10 bg-white/10 text-white",
              ...I,
            })),
            (X[30] = I),
            (X[31] = L))
          : (L = X[31]),
        X[32] !== es.startDate
          ? ((P = es.startDate
              ? (0, t.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: es.startDate.message,
                })
              : null),
            (X[32] = es.startDate),
            (X[33] = P))
          : (P = X[33]),
        X[34] !== L || X[35] !== P
          ? ((A = (0, t.jsxs)("div", { className: "space-y-2", children: [F, L, P] })),
            (X[34] = L),
            (X[35] = P),
            (X[36] = A))
          : (A = X[36]),
        X[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, t.jsx)(x.Label, { htmlFor: "dueDate", children: "Due date" })), (X[37] = O))
          : (O = X[37]),
        X[38] !== et ? ((R = et("dueDate")), (X[38] = et), (X[39] = R)) : (R = X[39]),
        X[40] !== R
          ? ((k = (0, t.jsx)(h.Input, {
              id: "dueDate",
              type: "date",
              className: "border-white/10 bg-white/10 text-white",
              ...R,
            })),
            (X[40] = R),
            (X[41] = k))
          : (k = X[41]),
        X[42] !== es.dueDate
          ? ((H = es.dueDate
              ? (0, t.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: es.dueDate.message,
                })
              : null),
            (X[42] = es.dueDate),
            (X[43] = H))
          : (H = X[43]),
        X[44] !== k || X[45] !== H
          ? ((K = (0, t.jsxs)("div", { className: "space-y-2", children: [O, k, H] })),
            (X[44] = k),
            (X[45] = H),
            (X[46] = K))
          : (K = X[46]),
        X[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, t.jsx)(x.Label, { htmlFor: "budget", children: "Budget" })), (X[47] = U))
          : (U = X[47]),
        X[48] !== et
          ? ((E = et("budget", { valueAsNumber: !0 })), (X[48] = et), (X[49] = E))
          : (E = X[49]),
        X[50] !== E
          ? ((J = (0, t.jsx)(h.Input, {
              id: "budget",
              type: "number",
              step: "100",
              className: "border-white/10 bg-white/10 text-white",
              ...E,
            })),
            (X[50] = E),
            (X[51] = J))
          : (J = X[51]),
        X[52] !== es.budget
          ? ((V = es.budget
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: es.budget.message })
              : null),
            (X[52] = es.budget),
            (X[53] = V))
          : (V = X[53]),
        X[54] !== J || X[55] !== V
          ? ((q = (0, t.jsxs)("div", { className: "space-y-2", children: [U, J, V] })),
            (X[54] = J),
            (X[55] = V),
            (X[56] = q))
          : (q = X[56]));
      let en = $ ? "Creating..." : "Create project";
      return (
        X[57] !== $ || X[58] !== en
          ? ((G = (0, t.jsx)(u.Button, {
              type: "submit",
              className: "bg-white text-slate-900 hover:bg-white/90",
              disabled: $,
              children: en,
            })),
            (X[57] = $),
            (X[58] = en),
            (X[59] = G))
          : (G = X[59]),
        X[60] !== Y
          ? ((M = (0, t.jsx)(u.Button, {
              type: "button",
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => Y.push("/projects"),
              children: "Cancel",
            })),
            (X[60] = Y),
            (X[61] = M))
          : (M = X[61]),
        X[62] !== G || X[63] !== M
          ? ((Q = (0, t.jsxs)("div", { className: "md:col-span-2 flex gap-3", children: [G, M] })),
            (X[62] = G),
            (X[63] = M),
            (X[64] = Q))
          : (Q = X[64]),
        X[65] !== ei ||
        X[66] !== B ||
        X[67] !== A ||
        X[68] !== K ||
        X[69] !== q ||
        X[70] !== Q ||
        X[71] !== N
          ? ((W = (0, t.jsxs)(m.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                j,
                (0, t.jsx)(m.CardContent, {
                  children: (0, t.jsxs)("form", {
                    className: "grid gap-4 md:grid-cols-2",
                    onSubmit: ei,
                    children: [N, B, A, K, q, Q],
                  }),
                }),
              ],
            })),
            (X[65] = ei),
            (X[66] = B),
            (X[67] = A),
            (X[68] = K),
            (X[69] = q),
            (X[70] = Q),
            (X[71] = N),
            (X[72] = W))
          : (W = X[72]),
        W
      );
    }
    function g(e) {
      return e.user;
    }
    e.s(["default", () => p]);
  },
]);
