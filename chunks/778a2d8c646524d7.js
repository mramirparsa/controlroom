(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var s = e.i(62482),
      r = e.i(48612),
      t = e.i(2082);
    function a(e) {
      let a,
        i,
        o,
        d,
        n = (0, r.c)(8);
      return (
        n[0] !== e
          ? (({ className: a, ...i } = e), (n[0] = e), (n[1] = a), (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        n[3] !== a
          ? ((o = (0, t.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              a
            )),
            (n[3] = a),
            (n[4] = o))
          : (o = n[4]),
        n[5] !== i || n[6] !== o
          ? ((d = (0, s.jsx)("div", { "data-slot": "card", className: o, ...i })),
            (n[5] = i),
            (n[6] = o),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function i(e) {
      let a,
        i,
        o,
        d,
        n = (0, r.c)(8);
      return (
        n[0] !== e
          ? (({ className: a, ...i } = e), (n[0] = e), (n[1] = a), (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        n[3] !== a
          ? ((o = (0, t.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              a
            )),
            (n[3] = a),
            (n[4] = o))
          : (o = n[4]),
        n[5] !== i || n[6] !== o
          ? ((d = (0, s.jsx)("div", { "data-slot": "card-header", className: o, ...i })),
            (n[5] = i),
            (n[6] = o),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function o(e) {
      let a,
        i,
        o,
        d,
        n = (0, r.c)(8);
      return (
        n[0] !== e
          ? (({ className: a, ...i } = e), (n[0] = e), (n[1] = a), (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        n[3] !== a
          ? ((o = (0, t.cn)("leading-none font-semibold", a)), (n[3] = a), (n[4] = o))
          : (o = n[4]),
        n[5] !== i || n[6] !== o
          ? ((d = (0, s.jsx)("div", { "data-slot": "card-title", className: o, ...i })),
            (n[5] = i),
            (n[6] = o),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function d(e) {
      let a,
        i,
        o,
        d,
        n = (0, r.c)(8);
      return (
        n[0] !== e
          ? (({ className: a, ...i } = e), (n[0] = e), (n[1] = a), (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        n[3] !== a
          ? ((o = (0, t.cn)("text-muted-foreground text-sm", a)), (n[3] = a), (n[4] = o))
          : (o = n[4]),
        n[5] !== i || n[6] !== o
          ? ((d = (0, s.jsx)("div", { "data-slot": "card-description", className: o, ...i })),
            (n[5] = i),
            (n[6] = o),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    function n(e) {
      let a,
        i,
        o,
        d,
        n = (0, r.c)(8);
      return (
        n[0] !== e
          ? (({ className: a, ...i } = e), (n[0] = e), (n[1] = a), (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        n[3] !== a ? ((o = (0, t.cn)("px-6", a)), (n[3] = a), (n[4] = o)) : (o = n[4]),
        n[5] !== i || n[6] !== o
          ? ((d = (0, s.jsx)("div", { "data-slot": "card-content", className: o, ...i })),
            (n[5] = i),
            (n[6] = o),
            (n[7] = d))
          : (d = n[7]),
        d
      );
    }
    e.s([
      "Card",
      () => a,
      "CardContent",
      () => n,
      "CardDescription",
      () => d,
      "CardHeader",
      () => i,
      "CardTitle",
      () => o,
    ]);
  },
  61156,
  (e) => {
    "use strict";
    var s = e.i(62482),
      r = e.i(48612),
      t = e.i(2082);
    function a(e) {
      let a,
        i,
        o,
        d,
        n,
        c = (0, r.c)(10);
      return (
        c[0] !== e
          ? (({ className: a, type: o, ...i } = e), (c[0] = e), (c[1] = a), (c[2] = i), (c[3] = o))
          : ((a = c[1]), (i = c[2]), (o = c[3])),
        c[4] !== a
          ? ((d = (0, t.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              a
            )),
            (c[4] = a),
            (c[5] = d))
          : (d = c[5]),
        c[6] !== i || c[7] !== d || c[8] !== o
          ? ((n = (0, s.jsx)("input", { type: o, "data-slot": "input", className: d, ...i })),
            (c[6] = i),
            (c[7] = d),
            (c[8] = o),
            (c[9] = n))
          : (n = c[9]),
        n
      );
    }
    e.s(["Input", () => a]);
  },
  75578,
  (e) => {
    "use strict";
    var s = e.i(62482),
      r = e.i(48612),
      t = e.i(34706),
      a = e.i(65436),
      i = e.i(35285),
      o = e.i(44014),
      d = e.i(58976),
      n = e.i(32103),
      c = e.i(16220),
      l = e.i(22991),
      m = e.i(39781),
      u = e.i(61156),
      p = e.i(71978);
    let h = a.z
      .object({
        password: a.z.string().min(8, "Minimum 8 characters"),
        confirmPassword: a.z.string().min(8, "Minimum 8 characters"),
      })
      .refine((e) => e.password === e.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    function f() {
      let e,
        a,
        f,
        x,
        b,
        g,
        j,
        v,
        y,
        N,
        C,
        P,
        S,
        _,
        T,
        O,
        k,
        F,
        U = (0, r.c)(38),
        z = (0, c.useAuthStore)(w),
        [A, B] = (0, t.useState)(!1);
      U[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, o.zodResolver)(h),
            defaultValues: { password: "", confirmPassword: "" },
          }),
          (U[0] = e))
        : (e = U[0]);
      let { register: H, handleSubmit: I, formState: L } = (0, i.useForm)(e),
        { errors: R } = L;
      (U[1] !== z
        ? ((a = async (e) => {
            if (!z) return;
            B(!0);
            let s = await (0, n.apiClient)("/api/auth/forgot-password", {
              method: "POST",
              body: JSON.stringify({ email: z.email }),
            });
            if (s.error || !s.data?.token) {
              (B(!1), d.toast.error(s.error?.message ?? "Failed to initiate reset"));
              return;
            }
            let r = await (0, n.apiClient)("/api/auth/reset-password", {
              method: "POST",
              body: JSON.stringify({ token: s.data.token, password: e.password }),
            });
            (B(!1), r.error)
              ? d.toast.error(r.error.message ?? "Failed to update password")
              : d.toast.success("Password updated");
          }),
          (U[1] = z),
          (U[2] = a))
        : (a = U[2]),
        U[3] !== I || U[4] !== a ? ((f = I(a)), (U[3] = I), (U[4] = a), (U[5] = f)) : (f = U[5]));
      let J = f;
      (U[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, s.jsx)(m.CardHeader, {
            children: (0, s.jsx)(m.CardTitle, { children: "Security" }),
          })),
          (U[6] = x))
        : (x = U[6]),
        U[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, s.jsx)(p.Label, { htmlFor: "password", children: "New password" })),
            (U[7] = b))
          : (b = U[7]),
        U[8] !== H ? ((g = H("password")), (U[8] = H), (U[9] = g)) : (g = U[9]),
        U[10] !== g
          ? ((j = (0, s.jsx)(u.Input, {
              id: "password",
              type: "password",
              className: "border-white/10 bg-white/10 text-white",
              ...g,
            })),
            (U[10] = g),
            (U[11] = j))
          : (j = U[11]),
        U[12] !== R.password
          ? ((v = R.password
              ? (0, s.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: R.password.message,
                })
              : null),
            (U[12] = R.password),
            (U[13] = v))
          : (v = U[13]),
        U[14] !== j || U[15] !== v
          ? ((y = (0, s.jsxs)("div", { className: "space-y-2", children: [b, j, v] })),
            (U[14] = j),
            (U[15] = v),
            (U[16] = y))
          : (y = U[16]),
        U[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, s.jsx)(p.Label, {
              htmlFor: "confirmPassword",
              children: "Confirm password",
            })),
            (U[17] = N))
          : (N = U[17]),
        U[18] !== H ? ((C = H("confirmPassword")), (U[18] = H), (U[19] = C)) : (C = U[19]),
        U[20] !== C
          ? ((P = (0, s.jsx)(u.Input, {
              id: "confirmPassword",
              type: "password",
              className: "border-white/10 bg-white/10 text-white",
              ...C,
            })),
            (U[20] = C),
            (U[21] = P))
          : (P = U[21]),
        U[22] !== R.confirmPassword
          ? ((S = R.confirmPassword
              ? (0, s.jsx)("p", {
                  className: "text-xs text-rose-300",
                  children: R.confirmPassword.message,
                })
              : null),
            (U[22] = R.confirmPassword),
            (U[23] = S))
          : (S = U[23]),
        U[24] !== P || U[25] !== S
          ? ((_ = (0, s.jsxs)("div", { className: "space-y-2", children: [N, P, S] })),
            (U[24] = P),
            (U[25] = S),
            (U[26] = _))
          : (_ = U[26]));
      let K = A ? "Updating..." : "Update password";
      return (
        U[27] !== A || U[28] !== K
          ? ((T = (0, s.jsx)("div", {
              className: "md:col-span-2",
              children: (0, s.jsx)(l.Button, {
                type: "submit",
                className: "bg-white text-slate-900 hover:bg-white/90",
                disabled: A,
                children: K,
              }),
            })),
            (U[27] = A),
            (U[28] = K),
            (U[29] = T))
          : (T = U[29]),
        U[30] !== J || U[31] !== _ || U[32] !== T || U[33] !== y
          ? ((O = (0, s.jsxs)(m.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                x,
                (0, s.jsx)(m.CardContent, {
                  children: (0, s.jsxs)("form", {
                    className: "grid gap-4 md:grid-cols-2",
                    onSubmit: J,
                    children: [y, _, T],
                  }),
                }),
              ],
            })),
            (U[30] = J),
            (U[31] = _),
            (U[32] = T),
            (U[33] = y),
            (U[34] = O))
          : (O = U[34]),
        U[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, s.jsxs)(m.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                (0, s.jsx)(m.CardHeader, {
                  children: (0, s.jsx)(m.CardTitle, { children: "Sessions" }),
                }),
                (0, s.jsx)(m.CardContent, {
                  className: "text-white/60",
                  children:
                    "Active sessions are simulated for demo purposes. Use Log out to end the current session.",
                }),
              ],
            })),
            (U[35] = k))
          : (k = U[35]),
        U[36] !== O
          ? ((F = (0, s.jsxs)("div", { className: "space-y-6", children: [O, k] })),
            (U[36] = O),
            (U[37] = F))
          : (F = U[37]),
        F
      );
    }
    function w(e) {
      return e.user;
    }
    e.s(["default", () => f]);
  },
]);
