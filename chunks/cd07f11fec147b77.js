(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      s = e.i(2082);
    function r(e) {
      let r,
        n,
        i,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: r, ...n } = e), (o[0] = e), (o[1] = r), (o[2] = n))
          : ((r = o[1]), (n = o[2])),
        o[3] !== r
          ? ((i = (0, s.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              r
            )),
            (o[3] = r),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, t.jsx)("div", { "data-slot": "card", className: i, ...n })),
            (o[5] = n),
            (o[6] = i),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function n(e) {
      let r,
        n,
        i,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: r, ...n } = e), (o[0] = e), (o[1] = r), (o[2] = n))
          : ((r = o[1]), (n = o[2])),
        o[3] !== r
          ? ((i = (0, s.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              r
            )),
            (o[3] = r),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-header", className: i, ...n })),
            (o[5] = n),
            (o[6] = i),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function i(e) {
      let r,
        n,
        i,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: r, ...n } = e), (o[0] = e), (o[1] = r), (o[2] = n))
          : ((r = o[1]), (n = o[2])),
        o[3] !== r
          ? ((i = (0, s.cn)("leading-none font-semibold", r)), (o[3] = r), (o[4] = i))
          : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-title", className: i, ...n })),
            (o[5] = n),
            (o[6] = i),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function l(e) {
      let r,
        n,
        i,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: r, ...n } = e), (o[0] = e), (o[1] = r), (o[2] = n))
          : ((r = o[1]), (n = o[2])),
        o[3] !== r
          ? ((i = (0, s.cn)("text-muted-foreground text-sm", r)), (o[3] = r), (o[4] = i))
          : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-description", className: i, ...n })),
            (o[5] = n),
            (o[6] = i),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function o(e) {
      let r,
        n,
        i,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: r, ...n } = e), (o[0] = e), (o[1] = r), (o[2] = n))
          : ((r = o[1]), (n = o[2])),
        o[3] !== r ? ((i = (0, s.cn)("px-6", r)), (o[3] = r), (o[4] = i)) : (i = o[4]),
        o[5] !== n || o[6] !== i
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-content", className: i, ...n })),
            (o[5] = n),
            (o[6] = i),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    e.s([
      "Card",
      () => r,
      "CardContent",
      () => o,
      "CardDescription",
      () => l,
      "CardHeader",
      () => n,
      "CardTitle",
      () => i,
    ]);
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      s = e.i(2082);
    function r(e) {
      let r,
        n,
        i,
        l,
        o,
        c = (0, a.c)(10);
      return (
        c[0] !== e
          ? (({ className: r, type: i, ...n } = e), (c[0] = e), (c[1] = r), (c[2] = n), (c[3] = i))
          : ((r = c[1]), (n = c[2]), (i = c[3])),
        c[4] !== r
          ? ((l = (0, s.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              r
            )),
            (c[4] = r),
            (c[5] = l))
          : (l = c[5]),
        c[6] !== n || c[7] !== l || c[8] !== i
          ? ((o = (0, t.jsx)("input", { type: i, "data-slot": "input", className: l, ...n })),
            (c[6] = n),
            (c[7] = l),
            (c[8] = i),
            (c[9] = o))
          : (o = c[9]),
        o
      );
    }
    e.s(["Input", () => r]);
  },
  17084,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      s = e.i(34706),
      r = e.i(65436),
      n = e.i(35285),
      i = e.i(44014),
      l = e.i(58976),
      o = e.i(22991),
      c = e.i(39781),
      d = e.i(61156),
      m = e.i(71978);
    let u = r.z.object({
      name: r.z.string().min(2, "Enter organization name"),
      plan: r.z.string().min(2, "Enter plan"),
      seats: r.z.number().min(1, "Seats must be at least 1"),
    });
    function x() {
      let e,
        r,
        l,
        x,
        h,
        p,
        g,
        f,
        v,
        j,
        N,
        w,
        y,
        S,
        _,
        C,
        z,
        O,
        I,
        T,
        F,
        A,
        B = (0, a.c)(43);
      B[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, i.zodResolver)(u),
            defaultValues: { name: "", plan: "Scale", seats: 25 },
          }),
          (B[0] = e))
        : (e = B[0]);
      let { register: E, handleSubmit: L, reset: P, formState: R } = (0, n.useForm)(e),
        { errors: k } = R;
      (B[1] !== P
        ? ((r = () => {
            let e = localStorage.getItem("controlroom.organization");
            e && P(JSON.parse(e));
          }),
          (l = [P]),
          (B[1] = P),
          (B[2] = r),
          (B[3] = l))
        : ((r = B[2]), (l = B[3])),
        (0, s.useEffect)(r, l),
        B[4] !== L ? ((x = L(b)), (B[4] = L), (B[5] = x)) : (x = B[5]));
      let H = x;
      return (
        B[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, t.jsx)(c.CardHeader, {
              children: (0, t.jsx)(c.CardTitle, { children: "Organization" }),
            })),
            (B[6] = h))
          : (h = B[6]),
        B[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsx)(m.Label, { htmlFor: "name", children: "Organization name" })),
            (B[7] = p))
          : (p = B[7]),
        B[8] !== E ? ((g = E("name")), (B[8] = E), (B[9] = g)) : (g = B[9]),
        B[10] !== g
          ? ((f = (0, t.jsx)(d.Input, {
              id: "name",
              className: "border-white/10 bg-white/10 text-white",
              ...g,
            })),
            (B[10] = g),
            (B[11] = f))
          : (f = B[11]),
        B[12] !== k.name
          ? ((v = k.name
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: k.name.message })
              : null),
            (B[12] = k.name),
            (B[13] = v))
          : (v = B[13]),
        B[14] !== f || B[15] !== v
          ? ((j = (0, t.jsxs)("div", { className: "space-y-2", children: [p, f, v] })),
            (B[14] = f),
            (B[15] = v),
            (B[16] = j))
          : (j = B[16]),
        B[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, t.jsx)(m.Label, { htmlFor: "plan", children: "Plan" })), (B[17] = N))
          : (N = B[17]),
        B[18] !== E ? ((w = E("plan")), (B[18] = E), (B[19] = w)) : (w = B[19]),
        B[20] !== w
          ? ((y = (0, t.jsx)(d.Input, {
              id: "plan",
              className: "border-white/10 bg-white/10 text-white",
              ...w,
            })),
            (B[20] = w),
            (B[21] = y))
          : (y = B[21]),
        B[22] !== k.plan
          ? ((S = k.plan
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: k.plan.message })
              : null),
            (B[22] = k.plan),
            (B[23] = S))
          : (S = B[23]),
        B[24] !== y || B[25] !== S
          ? ((_ = (0, t.jsxs)("div", { className: "space-y-2", children: [N, y, S] })),
            (B[24] = y),
            (B[25] = S),
            (B[26] = _))
          : (_ = B[26]),
        B[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, t.jsx)(m.Label, { htmlFor: "seats", children: "Seats" })), (B[27] = C))
          : (C = B[27]),
        B[28] !== E
          ? ((z = E("seats", { valueAsNumber: !0 })), (B[28] = E), (B[29] = z))
          : (z = B[29]),
        B[30] !== z
          ? ((O = (0, t.jsx)(d.Input, {
              id: "seats",
              type: "number",
              className: "border-white/10 bg-white/10 text-white",
              ...z,
            })),
            (B[30] = z),
            (B[31] = O))
          : (O = B[31]),
        B[32] !== k.seats
          ? ((I = k.seats
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: k.seats.message })
              : null),
            (B[32] = k.seats),
            (B[33] = I))
          : (I = B[33]),
        B[34] !== O || B[35] !== I
          ? ((T = (0, t.jsxs)("div", { className: "space-y-2", children: [C, O, I] })),
            (B[34] = O),
            (B[35] = I),
            (B[36] = T))
          : (T = B[36]),
        B[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, t.jsx)("div", {
              className: "md:col-span-2",
              children: (0, t.jsx)(o.Button, {
                type: "submit",
                className: "bg-white text-slate-900 hover:bg-white/90",
                children: "Save changes",
              }),
            })),
            (B[37] = F))
          : (F = B[37]),
        B[38] !== H || B[39] !== j || B[40] !== _ || B[41] !== T
          ? ((A = (0, t.jsxs)(c.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                h,
                (0, t.jsx)(c.CardContent, {
                  children: (0, t.jsxs)("form", {
                    className: "grid gap-4 md:grid-cols-2",
                    onSubmit: H,
                    children: [j, _, T, F],
                  }),
                }),
              ],
            })),
            (B[38] = H),
            (B[39] = j),
            (B[40] = _),
            (B[41] = T),
            (B[42] = A))
          : (A = B[42]),
        A
      );
    }
    function b(e) {
      (localStorage.setItem("controlroom.organization", JSON.stringify(e)),
        l.toast.success("Organization settings updated"));
    }
    e.s(["default", () => x]);
  },
]);
