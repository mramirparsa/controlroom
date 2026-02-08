(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      r = e.i(2082);
    function i(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((n = (0, r.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card", className: n, ...s })),
            (o[5] = s),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function s(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((n = (0, r.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-header", className: n, ...s })),
            (o[5] = s),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function n(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((n = (0, r.cn)("leading-none font-semibold", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-title", className: n, ...s })),
            (o[5] = s),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function l(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((n = (0, r.cn)("text-muted-foreground text-sm", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-description", className: n, ...s })),
            (o[5] = s),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function o(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i ? ((n = (0, r.cn)("px-6", i)), (o[3] = i), (o[4] = n)) : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-content", className: n, ...s })),
            (o[5] = s),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    e.s([
      "Card",
      () => i,
      "CardContent",
      () => o,
      "CardDescription",
      () => l,
      "CardHeader",
      () => s,
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
    function i(e) {
      let i,
        s,
        n,
        l,
        o,
        c = (0, a.c)(10);
      return (
        c[0] !== e
          ? (({ className: i, type: n, ...s } = e), (c[0] = e), (c[1] = i), (c[2] = s), (c[3] = n))
          : ((i = c[1]), (s = c[2]), (n = c[3])),
        c[4] !== i
          ? ((l = (0, r.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              i
            )),
            (c[4] = i),
            (c[5] = l))
          : (l = c[5]),
        c[6] !== s || c[7] !== l || c[8] !== n
          ? ((o = (0, t.jsx)("input", { type: n, "data-slot": "input", className: l, ...s })),
            (c[6] = s),
            (c[7] = l),
            (c[8] = n),
            (c[9] = o))
          : (o = c[9]),
        o
      );
    }
    e.s(["Input", () => i]);
  },
  15120,
  (e) => {
    "use strict";
    var t = e.i(62482),
      a = e.i(48612),
      r = e.i(34706),
      i = e.i(65436),
      s = e.i(35285),
      n = e.i(44014),
      l = e.i(58976),
      o = e.i(22991),
      c = e.i(39781),
      d = e.i(61156),
      m = e.i(71978);
    let u = i.z.object({
      name: i.z.string().min(2, "Enter your name"),
      timezone: i.z.string().min(2, "Enter a timezone"),
      avatarUrl: i.z.string().url("Enter a valid URL").optional().or(i.z.literal("")),
    });
    function x() {
      let e,
        i,
        l,
        x,
        b,
        f,
        p,
        g,
        v,
        j,
        w,
        N,
        y,
        z,
        C,
        S,
        U,
        _,
        T,
        I,
        F,
        L,
        R = (0, a.c)(43);
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, n.zodResolver)(u),
            defaultValues: { name: "", timezone: "", avatarUrl: "" },
          }),
          (R[0] = e))
        : (e = R[0]);
      let { register: E, handleSubmit: O, reset: P, formState: A } = (0, s.useForm)(e),
        { errors: B } = A;
      (R[1] !== P
        ? ((i = () => {
            let e = localStorage.getItem("controlroom.profile");
            e && P(JSON.parse(e));
          }),
          (l = [P]),
          (R[1] = P),
          (R[2] = i),
          (R[3] = l))
        : ((i = R[2]), (l = R[3])),
        (0, r.useEffect)(i, l),
        R[4] !== O ? ((x = O(h)), (R[4] = O), (R[5] = x)) : (x = R[5]));
      let k = x;
      return (
        R[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)(c.CardHeader, {
              children: (0, t.jsx)(c.CardTitle, { children: "Profile" }),
            })),
            (R[6] = b))
          : (b = R[6]),
        R[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, t.jsx)(m.Label, { htmlFor: "name", children: "Full name" })), (R[7] = f))
          : (f = R[7]),
        R[8] !== E ? ((p = E("name")), (R[8] = E), (R[9] = p)) : (p = R[9]),
        R[10] !== p
          ? ((g = (0, t.jsx)(d.Input, {
              id: "name",
              className: "border-white/10 bg-white/10 text-white",
              ...p,
            })),
            (R[10] = p),
            (R[11] = g))
          : (g = R[11]),
        R[12] !== B.name
          ? ((v = B.name
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: B.name.message })
              : null),
            (R[12] = B.name),
            (R[13] = v))
          : (v = R[13]),
        R[14] !== g || R[15] !== v
          ? ((j = (0, t.jsxs)("div", { className: "space-y-2", children: [f, g, v] })),
            (R[14] = g),
            (R[15] = v),
            (R[16] = j))
          : (j = R[16]),
        R[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, t.jsx)(m.Label, { htmlFor: "timezone", children: "Timezone" })), (R[17] = w))
          : (w = R[17]),
        R[18] !== E ? ((N = E("timezone")), (R[18] = E), (R[19] = N)) : (N = R[19]),
        R[20] !== N
          ? ((y = (0, t.jsx)(d.Input, {
              id: "timezone",
              placeholder: "UTC+1",
              className: "border-white/10 bg-white/10 text-white",
              ...N,
            })),
            (R[20] = N),
            (R[21] = y))
          : (y = R[21]),
        R[22] !== B.timezone
          ? ((z = B.timezone
              ? (0, t.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: B.timezone.message,
                })
              : null),
            (R[22] = B.timezone),
            (R[23] = z))
          : (z = R[23]),
        R[24] !== y || R[25] !== z
          ? ((C = (0, t.jsxs)("div", { className: "space-y-2", children: [w, y, z] })),
            (R[24] = y),
            (R[25] = z),
            (R[26] = C))
          : (C = R[26]),
        R[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)(m.Label, { htmlFor: "avatarUrl", children: "Avatar URL" })),
            (R[27] = S))
          : (S = R[27]),
        R[28] !== E ? ((U = E("avatarUrl")), (R[28] = E), (R[29] = U)) : (U = R[29]),
        R[30] !== U
          ? ((_ = (0, t.jsx)(d.Input, {
              id: "avatarUrl",
              placeholder: "https://",
              className: "border-white/10 bg-white/10 text-white",
              ...U,
            })),
            (R[30] = U),
            (R[31] = _))
          : (_ = R[31]),
        R[32] !== B.avatarUrl
          ? ((T = B.avatarUrl
              ? (0, t.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: B.avatarUrl.message,
                })
              : null),
            (R[32] = B.avatarUrl),
            (R[33] = T))
          : (T = R[33]),
        R[34] !== _ || R[35] !== T
          ? ((I = (0, t.jsxs)("div", {
              className: "space-y-2 md:col-span-2",
              children: [S, _, T],
            })),
            (R[34] = _),
            (R[35] = T),
            (R[36] = I))
          : (I = R[36]),
        R[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, t.jsx)("div", {
              className: "md:col-span-2",
              children: (0, t.jsx)(o.Button, {
                type: "submit",
                className: "bg-white text-slate-900 hover:bg-white/90",
                children: "Save changes",
              }),
            })),
            (R[37] = F))
          : (F = R[37]),
        R[38] !== k || R[39] !== j || R[40] !== C || R[41] !== I
          ? ((L = (0, t.jsxs)(c.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                b,
                (0, t.jsx)(c.CardContent, {
                  children: (0, t.jsxs)("form", {
                    className: "grid gap-4 md:grid-cols-2",
                    onSubmit: k,
                    children: [j, C, I, F],
                  }),
                }),
              ],
            })),
            (R[38] = k),
            (R[39] = j),
            (R[40] = C),
            (R[41] = I),
            (R[42] = L))
          : (L = R[42]),
        L
      );
    }
    function h(e) {
      (localStorage.setItem("controlroom.profile", JSON.stringify(e)),
        l.toast.success("Profile saved"));
    }
    e.s(["default", () => x]);
  },
]);
