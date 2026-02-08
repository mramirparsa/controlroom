(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(2082);
    function i(e) {
      let i,
        s,
        l,
        n,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((l = (0, a.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (o[3] = i),
            (o[4] = l))
          : (l = o[4]),
        o[5] !== s || o[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card", className: l, ...s })),
            (o[5] = s),
            (o[6] = l),
            (o[7] = n))
          : (n = o[7]),
        n
      );
    }
    function s(e) {
      let i,
        s,
        l,
        n,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((l = (0, a.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (o[3] = i),
            (o[4] = l))
          : (l = o[4]),
        o[5] !== s || o[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-header", className: l, ...s })),
            (o[5] = s),
            (o[6] = l),
            (o[7] = n))
          : (n = o[7]),
        n
      );
    }
    function l(e) {
      let i,
        s,
        l,
        n,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((l = (0, a.cn)("leading-none font-semibold", i)), (o[3] = i), (o[4] = l))
          : (l = o[4]),
        o[5] !== s || o[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-title", className: l, ...s })),
            (o[5] = s),
            (o[6] = l),
            (o[7] = n))
          : (n = o[7]),
        n
      );
    }
    function n(e) {
      let i,
        s,
        l,
        n,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i
          ? ((l = (0, a.cn)("text-muted-foreground text-sm", i)), (o[3] = i), (o[4] = l))
          : (l = o[4]),
        o[5] !== s || o[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-description", className: l, ...s })),
            (o[5] = s),
            (o[6] = l),
            (o[7] = n))
          : (n = o[7]),
        n
      );
    }
    function o(e) {
      let i,
        s,
        l,
        n,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...s } = e), (o[0] = e), (o[1] = i), (o[2] = s))
          : ((i = o[1]), (s = o[2])),
        o[3] !== i ? ((l = (0, a.cn)("px-6", i)), (o[3] = i), (o[4] = l)) : (l = o[4]),
        o[5] !== s || o[6] !== l
          ? ((n = (0, t.jsx)("div", { "data-slot": "card-content", className: l, ...s })),
            (o[5] = s),
            (o[6] = l),
            (o[7] = n))
          : (n = o[7]),
        n
      );
    }
    e.s([
      "Card",
      () => i,
      "CardContent",
      () => o,
      "CardDescription",
      () => n,
      "CardHeader",
      () => s,
      "CardTitle",
      () => l,
    ]);
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(2082);
    function i(e) {
      let i,
        s,
        l,
        n,
        o,
        c = (0, r.c)(10);
      return (
        c[0] !== e
          ? (({ className: i, type: l, ...s } = e), (c[0] = e), (c[1] = i), (c[2] = s), (c[3] = l))
          : ((i = c[1]), (s = c[2]), (l = c[3])),
        c[4] !== i
          ? ((n = (0, a.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              i
            )),
            (c[4] = i),
            (c[5] = n))
          : (n = c[5]),
        c[6] !== s || c[7] !== n || c[8] !== l
          ? ((o = (0, t.jsx)("input", { type: l, "data-slot": "input", className: n, ...s })),
            (c[6] = s),
            (c[7] = n),
            (c[8] = l),
            (c[9] = o))
          : (o = c[9]),
        o
      );
    }
    e.s(["Input", () => i]);
  },
  95949,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(34706),
      i = e.i(59587),
      s = e.i(65436),
      l = e.i(35285),
      n = e.i(44014),
      o = e.i(58976),
      c = e.i(16220),
      d = e.i(32103),
      m = e.i(22991),
      u = e.i(39781),
      h = e.i(61156),
      x = e.i(71978);
    let b = s.z.object({
      name: s.z.string().min(2, "Enter a name"),
      email: s.z.string().email("Enter a valid email"),
      role: s.z.enum(["owner", "admin", "manager", "member"]),
      status: s.z.enum(["active", "inactive"]),
    });
    function p() {
      let e,
        s,
        p,
        g,
        v,
        j,
        w,
        y,
        N,
        C,
        _,
        S,
        T,
        z,
        A,
        R,
        B,
        E,
        F,
        L,
        O,
        k,
        I,
        P,
        U,
        D,
        H,
        K,
        J,
        M,
        V,
        q,
        G = (0, r.c)(61),
        Q = (0, i.useRouter)(),
        W = (0, c.useAuthStore)(f),
        [X, Y] = (0, a.useState)(!1);
      (G[0] !== Q || G[1] !== W
        ? ((e = () => {
            W && "owner" !== W.role && "admin" !== W.role && Q.replace("/403");
          }),
          (s = [W, Q]),
          (G[0] = Q),
          (G[1] = W),
          (G[2] = e),
          (G[3] = s))
        : ((e = G[2]), (s = G[3])),
        (0, a.useEffect)(e, s),
        G[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = {
              resolver: (0, n.zodResolver)(b),
              defaultValues: { name: "", email: "", role: "member", status: "active" },
            }),
            (G[4] = p))
          : (p = G[4]));
      let { register: Z, handleSubmit: $, formState: ee } = (0, l.useForm)(p),
        { errors: et } = ee;
      (G[5] !== Q
        ? ((g = async (e) => {
            Y(!0);
            let t = await (0, d.apiClient)("/api/users", {
              method: "POST",
              body: JSON.stringify(e),
            });
            (Y(!1), t.error)
              ? o.toast.error(t.error.message ?? "Failed to create user")
              : (o.toast.success("User created"), Q.push("/users"));
          }),
          (G[5] = Q),
          (G[6] = g))
        : (g = G[6]),
        G[7] !== $ || G[8] !== g ? ((v = $(g)), (G[7] = $), (G[8] = g), (G[9] = v)) : (v = G[9]));
      let er = v;
      if (W && "owner" !== W.role && "admin" !== W.role) return null;
      (G[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, t.jsxs)(u.CardHeader, {
            children: [
              (0, t.jsx)(u.CardTitle, { children: "Create user" }),
              (0, t.jsx)(u.CardDescription, {
                className: "text-white/60",
                children: "Add a new team member and set their role.",
              }),
            ],
          })),
          (G[10] = j))
        : (j = G[10]),
        G[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, t.jsx)(x.Label, { htmlFor: "name", children: "Name" })), (G[11] = w))
          : (w = G[11]),
        G[12] !== Z ? ((y = Z("name")), (G[12] = Z), (G[13] = y)) : (y = G[13]),
        G[14] !== y
          ? ((N = (0, t.jsx)(h.Input, {
              id: "name",
              placeholder: "Alex Morgan",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...y,
            })),
            (G[14] = y),
            (G[15] = N))
          : (N = G[15]),
        G[16] !== et.name
          ? ((C = et.name
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: et.name.message })
              : null),
            (G[16] = et.name),
            (G[17] = C))
          : (C = G[17]),
        G[18] !== C || G[19] !== N
          ? ((_ = (0, t.jsxs)("div", { className: "space-y-2", children: [w, N, C] })),
            (G[18] = C),
            (G[19] = N),
            (G[20] = _))
          : (_ = G[20]),
        G[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)(x.Label, { htmlFor: "email", children: "Email" })), (G[21] = S))
          : (S = G[21]),
        G[22] !== Z ? ((T = Z("email")), (G[22] = Z), (G[23] = T)) : (T = G[23]),
        G[24] !== T
          ? ((z = (0, t.jsx)(h.Input, {
              id: "email",
              placeholder: "alex@company.com",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...T,
            })),
            (G[24] = T),
            (G[25] = z))
          : (z = G[25]),
        G[26] !== et.email
          ? ((A = et.email
              ? (0, t.jsx)("p", { className: "text-xs text-rose-300", children: et.email.message })
              : null),
            (G[26] = et.email),
            (G[27] = A))
          : (A = G[27]),
        G[28] !== z || G[29] !== A
          ? ((R = (0, t.jsxs)("div", { className: "space-y-2", children: [S, z, A] })),
            (G[28] = z),
            (G[29] = A),
            (G[30] = R))
          : (R = G[30]),
        G[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, t.jsx)(x.Label, { children: "Role" })), (G[31] = B))
          : (B = G[31]),
        G[32] !== Z ? ((E = Z("role")), (G[32] = Z), (G[33] = E)) : (E = G[33]),
        G[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, t.jsx)("option", { value: "owner", children: "owner" })),
            (L = (0, t.jsx)("option", { value: "admin", children: "admin" })),
            (O = (0, t.jsx)("option", { value: "manager", children: "manager" })),
            (k = (0, t.jsx)("option", { value: "member", children: "member" })),
            (G[34] = F),
            (G[35] = L),
            (G[36] = O),
            (G[37] = k))
          : ((F = G[34]), (L = G[35]), (O = G[36]), (k = G[37])),
        G[38] !== E
          ? ((I = (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                B,
                (0, t.jsxs)("select", {
                  className:
                    "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                  ...E,
                  children: [F, L, O, k],
                }),
              ],
            })),
            (G[38] = E),
            (G[39] = I))
          : (I = G[39]),
        G[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, t.jsx)(x.Label, { children: "Status" })), (G[40] = P))
          : (P = G[40]),
        G[41] !== Z ? ((U = Z("status")), (G[41] = Z), (G[42] = U)) : (U = G[42]),
        G[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, t.jsx)("option", { value: "active", children: "active" })),
            (H = (0, t.jsx)("option", { value: "inactive", children: "inactive" })),
            (G[43] = D),
            (G[44] = H))
          : ((D = G[43]), (H = G[44])),
        G[45] !== U
          ? ((K = (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                P,
                (0, t.jsxs)("select", {
                  className:
                    "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                  ...U,
                  children: [D, H],
                }),
              ],
            })),
            (G[45] = U),
            (G[46] = K))
          : (K = G[46]));
      let ea = X ? "Creating..." : "Create user";
      return (
        G[47] !== ea
          ? ((J = (0, t.jsx)(m.Button, {
              type: "submit",
              className: "bg-white text-slate-900 hover:bg-white/90",
              children: ea,
            })),
            (G[47] = ea),
            (G[48] = J))
          : (J = G[48]),
        G[49] !== Q
          ? ((M = (0, t.jsx)(m.Button, {
              type: "button",
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => Q.push("/users"),
              children: "Cancel",
            })),
            (G[49] = Q),
            (G[50] = M))
          : (M = G[50]),
        G[51] !== J || G[52] !== M
          ? ((V = (0, t.jsxs)("div", { className: "md:col-span-2 flex gap-3", children: [J, M] })),
            (G[51] = J),
            (G[52] = M),
            (G[53] = V))
          : (V = G[53]),
        G[54] !== er || G[55] !== _ || G[56] !== R || G[57] !== I || G[58] !== K || G[59] !== V
          ? ((q = (0, t.jsxs)(u.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                j,
                (0, t.jsx)(u.CardContent, {
                  children: (0, t.jsxs)("form", {
                    className: "grid gap-4 md:grid-cols-2",
                    onSubmit: er,
                    children: [_, R, I, K, V],
                  }),
                }),
              ],
            })),
            (G[54] = er),
            (G[55] = _),
            (G[56] = R),
            (G[57] = I),
            (G[58] = K),
            (G[59] = V),
            (G[60] = q))
          : (q = G[60]),
        q
      );
    }
    function f(e) {
      return e.user;
    }
    e.s(["default", () => p]);
  },
]);
