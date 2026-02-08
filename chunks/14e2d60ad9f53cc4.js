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
        o,
        n,
        l = (0, t.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((o = (0, a.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              s
            )),
            (l[3] = s),
            (l[4] = o))
          : (o = l[4]),
        l[5] !== i || l[6] !== o
          ? ((n = (0, r.jsx)("div", { "data-slot": "card", className: o, ...i })),
            (l[5] = i),
            (l[6] = o),
            (l[7] = n))
          : (n = l[7]),
        n
      );
    }
    function i(e) {
      let s,
        i,
        o,
        n,
        l = (0, t.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((o = (0, a.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              s
            )),
            (l[3] = s),
            (l[4] = o))
          : (o = l[4]),
        l[5] !== i || l[6] !== o
          ? ((n = (0, r.jsx)("div", { "data-slot": "card-header", className: o, ...i })),
            (l[5] = i),
            (l[6] = o),
            (l[7] = n))
          : (n = l[7]),
        n
      );
    }
    function o(e) {
      let s,
        i,
        o,
        n,
        l = (0, t.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((o = (0, a.cn)("leading-none font-semibold", s)), (l[3] = s), (l[4] = o))
          : (o = l[4]),
        l[5] !== i || l[6] !== o
          ? ((n = (0, r.jsx)("div", { "data-slot": "card-title", className: o, ...i })),
            (l[5] = i),
            (l[6] = o),
            (l[7] = n))
          : (n = l[7]),
        n
      );
    }
    function n(e) {
      let s,
        i,
        o,
        n,
        l = (0, t.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s
          ? ((o = (0, a.cn)("text-muted-foreground text-sm", s)), (l[3] = s), (l[4] = o))
          : (o = l[4]),
        l[5] !== i || l[6] !== o
          ? ((n = (0, r.jsx)("div", { "data-slot": "card-description", className: o, ...i })),
            (l[5] = i),
            (l[6] = o),
            (l[7] = n))
          : (n = l[7]),
        n
      );
    }
    function l(e) {
      let s,
        i,
        o,
        n,
        l = (0, t.c)(8);
      return (
        l[0] !== e
          ? (({ className: s, ...i } = e), (l[0] = e), (l[1] = s), (l[2] = i))
          : ((s = l[1]), (i = l[2])),
        l[3] !== s ? ((o = (0, a.cn)("px-6", s)), (l[3] = s), (l[4] = o)) : (o = l[4]),
        l[5] !== i || l[6] !== o
          ? ((n = (0, r.jsx)("div", { "data-slot": "card-content", className: o, ...i })),
            (l[5] = i),
            (l[6] = o),
            (l[7] = n))
          : (n = l[7]),
        n
      );
    }
    e.s([
      "Card",
      () => s,
      "CardContent",
      () => l,
      "CardDescription",
      () => n,
      "CardHeader",
      () => i,
      "CardTitle",
      () => o,
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
    let o = (0, a.cva)(
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
    function n(e) {
      let a,
        n,
        l,
        d,
        c,
        m,
        u = (0, t.c)(13);
      u[0] !== e
        ? (({ className: a, variant: l, asChild: d, ...n } = e),
          (u[0] = e),
          (u[1] = a),
          (u[2] = n),
          (u[3] = l),
          (u[4] = d))
        : ((a = u[1]), (n = u[2]), (l = u[3]), (d = u[4]));
      let h = void 0 === l ? "default" : l,
        x = void 0 !== d && d ? s.Slot.Root : "span";
      return (
        u[5] !== a || u[6] !== h
          ? ((c = (0, i.cn)(o({ variant: h }), a)), (u[5] = a), (u[6] = h), (u[7] = c))
          : (c = u[7]),
        u[8] !== x || u[9] !== n || u[10] !== c || u[11] !== h
          ? ((m = (0, r.jsx)(x, { "data-slot": "badge", "data-variant": h, className: c, ...n })),
            (u[8] = x),
            (u[9] = n),
            (u[10] = c),
            (u[11] = h),
            (u[12] = m))
          : (m = u[12]),
        m
      );
    }
    e.s(["Badge", () => n]);
  },
  59587,
  (e, r, t) => {
    r.exports = e.r(11661);
  },
  61156,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(2082);
    function s(e) {
      let s,
        i,
        o,
        n,
        l,
        d = (0, t.c)(10);
      return (
        d[0] !== e
          ? (({ className: s, type: o, ...i } = e), (d[0] = e), (d[1] = s), (d[2] = i), (d[3] = o))
          : ((s = d[1]), (i = d[2]), (o = d[3])),
        d[4] !== s
          ? ((n = (0, a.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              s
            )),
            (d[4] = s),
            (d[5] = n))
          : (n = d[5]),
        d[6] !== i || d[7] !== n || d[8] !== o
          ? ((l = (0, r.jsx)("input", { type: o, "data-slot": "input", className: n, ...i })),
            (d[6] = i),
            (d[7] = n),
            (d[8] = o),
            (d[9] = l))
          : (l = d[9]),
        l
      );
    }
    e.s(["Input", () => s]);
  },
  50610,
  (e) => {
    "use strict";
    var r = e.i(34706);
    e.i(90761);
    var t = e.i(63849),
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
        let i = (0, t.createSlot)(`Primitive.${s}`),
          o = r.forwardRef((e, r) => {
            let { asChild: t, ...o } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(t ? i : s, { ...o, ref: r })
            );
          });
        return ((o.displayName = `Primitive.${s}`), { ...e, [s]: o });
      }, {});
    e.s(["Primitive", () => s]);
  },
  75531,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      a = e.i(34706),
      s = e.i(59587),
      i = e.i(65436),
      o = e.i(35285),
      n = e.i(44014),
      l = e.i(58976),
      d = e.i(32103),
      c = e.i(76111),
      m = e.i(22991),
      u = e.i(39781),
      h = e.i(61156),
      x = e.i(71978);
    let p = i.z
      .object({
        name: i.z.string().min(2, "Enter your name"),
        email: i.z.string().email("Enter a valid email"),
        password: i.z.string().min(8, "Minimum 8 characters"),
        confirmPassword: i.z.string().min(8, "Minimum 8 characters"),
      })
      .refine((e) => e.password === e.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    function f() {
      let e,
        i,
        f,
        g,
        b,
        w,
        v,
        y,
        j,
        N,
        C,
        P,
        S,
        _,
        k,
        R,
        z,
        B,
        T,
        F,
        I,
        A,
        L,
        O,
        E,
        U,
        D,
        H,
        J,
        K = (0, t.c)(60),
        M = (0, s.useRouter)(),
        [V, $] = (0, a.useState)(!1);
      K[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, n.zodResolver)(p),
            defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
          }),
          (K[0] = e))
        : (e = K[0]);
      let { register: q, handleSubmit: G, formState: Q } = (0, o.useForm)(e),
        { errors: W } = Q;
      (K[1] !== M
        ? ((i = async (e) => {
            $(!0);
            let r = await (0, d.apiClient)("/api/auth/register", {
              method: "POST",
              body: JSON.stringify({ name: e.name, email: e.email, password: e.password }),
            });
            ($(!1), r.error)
              ? l.toast.error(r.error.message ?? "Registration failed")
              : (l.toast.success("Account created. Please sign in."), M.push("/login"));
          }),
          (K[1] = M),
          (K[2] = i))
        : (i = K[2]),
        K[3] !== G || K[4] !== i ? ((f = G(i)), (K[3] = G), (K[4] = i), (K[5] = f)) : (f = K[5]));
      let X = f;
      (K[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, r.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              (0, r.jsx)("div", {
                className: "h-12 w-12 rounded-2xl bg-white/10 p-2",
                children: (0, r.jsx)("div", {
                  className: "h-full w-full rounded-xl bg-linear-to-br from-indigo-400 to-cyan-400",
                }),
              }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className: "text-sm uppercase tracking-[0.3em] text-white/60",
                    children: "ControlRoom",
                  }),
                  (0, r.jsx)("h1", {
                    className: "text-3xl font-semibold",
                    children: "Create your workspace access.",
                  }),
                ],
              }),
            ],
          })),
          (b = (0, r.jsx)("p", {
            className: "text-lg text-white/70",
            children:
              "Set up your profile and start monitoring users, projects, and billing in minutes.",
          })),
          (K[6] = g),
          (K[7] = b))
        : ((g = K[6]), (b = K[7])),
        K[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("div", {
              className: "flex flex-col justify-center space-y-6",
              children: [
                g,
                b,
                (0, r.jsxs)("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    (0, r.jsx)(c.Badge, {
                      variant: "secondary",
                      className: "bg-white/10 text-white",
                      children: "Security-first",
                    }),
                    (0, r.jsx)(c.Badge, {
                      variant: "secondary",
                      className: "bg-white/10 text-white",
                      children: "Role-based access",
                    }),
                    (0, r.jsx)(c.Badge, {
                      variant: "secondary",
                      className: "bg-white/10 text-white",
                      children: "API ready",
                    }),
                  ],
                }),
              ],
            })),
            (K[8] = w))
          : (w = K[8]),
        K[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsxs)(u.CardHeader, {
              children: [
                (0, r.jsx)(u.CardTitle, { children: "Create account" }),
                (0, r.jsx)(u.CardDescription, {
                  className: "text-white/60",
                  children: "Use your work email. Password must be at least 8 characters.",
                }),
              ],
            })),
            (K[9] = v))
          : (v = K[9]),
        K[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)(x.Label, { htmlFor: "name", children: "Full name" })), (K[10] = y))
          : (y = K[10]),
        K[11] !== q ? ((j = q("name")), (K[11] = q), (K[12] = j)) : (j = K[12]),
        K[13] !== j
          ? ((N = (0, r.jsx)(h.Input, {
              id: "name",
              placeholder: "Jordan Smith",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...j,
            })),
            (K[13] = j),
            (K[14] = N))
          : (N = K[14]),
        K[15] !== W.name
          ? ((C = W.name
              ? (0, r.jsx)("p", { className: "text-sm text-rose-300", children: W.name.message })
              : null),
            (K[15] = W.name),
            (K[16] = C))
          : (C = K[16]),
        K[17] !== N || K[18] !== C
          ? ((P = (0, r.jsxs)("div", { className: "space-y-2", children: [y, N, C] })),
            (K[17] = N),
            (K[18] = C),
            (K[19] = P))
          : (P = K[19]),
        K[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(x.Label, { htmlFor: "email", children: "Email" })), (K[20] = S))
          : (S = K[20]),
        K[21] !== q ? ((_ = q("email")), (K[21] = q), (K[22] = _)) : (_ = K[22]),
        K[23] !== _
          ? ((k = (0, r.jsx)(h.Input, {
              id: "email",
              placeholder: "you@company.com",
              type: "email",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ..._,
            })),
            (K[23] = _),
            (K[24] = k))
          : (k = K[24]),
        K[25] !== W.email
          ? ((R = W.email
              ? (0, r.jsx)("p", { className: "text-sm text-rose-300", children: W.email.message })
              : null),
            (K[25] = W.email),
            (K[26] = R))
          : (R = K[26]),
        K[27] !== k || K[28] !== R
          ? ((z = (0, r.jsxs)("div", { className: "space-y-2", children: [S, k, R] })),
            (K[27] = k),
            (K[28] = R),
            (K[29] = z))
          : (z = K[29]),
        K[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, r.jsx)(x.Label, { htmlFor: "password", children: "Password" })), (K[30] = B))
          : (B = K[30]),
        K[31] !== q ? ((T = q("password")), (K[31] = q), (K[32] = T)) : (T = K[32]),
        K[33] !== T
          ? ((F = (0, r.jsx)(h.Input, {
              id: "password",
              type: "password",
              placeholder: "••••••••",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...T,
            })),
            (K[33] = T),
            (K[34] = F))
          : (F = K[34]),
        K[35] !== W.password
          ? ((I = W.password
              ? (0, r.jsx)("p", {
                  className: "text-sm text-rose-300",
                  children: W.password.message,
                })
              : null),
            (K[35] = W.password),
            (K[36] = I))
          : (I = K[36]),
        K[37] !== F || K[38] !== I
          ? ((A = (0, r.jsxs)("div", { className: "space-y-2", children: [B, F, I] })),
            (K[37] = F),
            (K[38] = I),
            (K[39] = A))
          : (A = K[39]),
        K[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, r.jsx)(x.Label, {
              htmlFor: "confirmPassword",
              children: "Confirm password",
            })),
            (K[40] = L))
          : (L = K[40]),
        K[41] !== q ? ((O = q("confirmPassword")), (K[41] = q), (K[42] = O)) : (O = K[42]),
        K[43] !== O
          ? ((E = (0, r.jsx)(h.Input, {
              id: "confirmPassword",
              type: "password",
              placeholder: "••••••••",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...O,
            })),
            (K[43] = O),
            (K[44] = E))
          : (E = K[44]),
        K[45] !== W.confirmPassword
          ? ((U = W.confirmPassword
              ? (0, r.jsx)("p", {
                  className: "text-sm text-rose-300",
                  children: W.confirmPassword.message,
                })
              : null),
            (K[45] = W.confirmPassword),
            (K[46] = U))
          : (U = K[46]),
        K[47] !== E || K[48] !== U
          ? ((D = (0, r.jsxs)("div", { className: "space-y-2", children: [L, E, U] })),
            (K[47] = E),
            (K[48] = U),
            (K[49] = D))
          : (D = K[49]));
      let Y = V ? "Creating..." : "Create account";
      return (
        K[50] !== V || K[51] !== Y
          ? ((H = (0, r.jsx)(m.Button, {
              type: "submit",
              className: "w-full bg-white text-slate-900 hover:bg-white/90",
              disabled: V,
              children: Y,
            })),
            (K[50] = V),
            (K[51] = Y),
            (K[52] = H))
          : (H = K[52]),
        K[53] !== X || K[54] !== P || K[55] !== z || K[56] !== A || K[57] !== D || K[58] !== H
          ? ((J = (0, r.jsx)("main", {
              className:
                "min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
              children: (0, r.jsx)("div", {
                className:
                  "mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6",
                children: (0, r.jsxs)("div", {
                  className: "grid w-full grid-cols-1 gap-10 lg:grid-cols-2",
                  children: [
                    w,
                    (0, r.jsxs)(u.Card, {
                      className: "border-white/10 bg-white/5 text-white shadow-2xl",
                      children: [
                        v,
                        (0, r.jsx)(u.CardContent, {
                          children: (0, r.jsxs)("form", {
                            className: "space-y-5",
                            onSubmit: X,
                            children: [P, z, A, D, H],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })),
            (K[53] = X),
            (K[54] = P),
            (K[55] = z),
            (K[56] = A),
            (K[57] = D),
            (K[58] = H),
            (K[59] = J))
          : (J = K[59]),
        J
      );
    }
    e.s(["default", () => f]);
  },
]);
