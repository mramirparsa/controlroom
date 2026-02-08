(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  96165,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      n = e.i(2082);
    function o(e) {
      let o,
        i,
        a,
        l,
        s = (0, r.c)(8);
      return (
        s[0] !== e
          ? (({ className: o, ...i } = e), (s[0] = e), (s[1] = o), (s[2] = i))
          : ((o = s[1]), (i = s[2])),
        s[3] !== o
          ? ((a = (0, n.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              o
            )),
            (s[3] = o),
            (s[4] = a))
          : (a = s[4]),
        s[5] !== i || s[6] !== a
          ? ((l = (0, t.jsx)("div", { "data-slot": "card", className: a, ...i })),
            (s[5] = i),
            (s[6] = a),
            (s[7] = l))
          : (l = s[7]),
        l
      );
    }
    function i(e) {
      let o,
        i,
        a,
        l,
        s = (0, r.c)(8);
      return (
        s[0] !== e
          ? (({ className: o, ...i } = e), (s[0] = e), (s[1] = o), (s[2] = i))
          : ((o = s[1]), (i = s[2])),
        s[3] !== o
          ? ((a = (0, n.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              o
            )),
            (s[3] = o),
            (s[4] = a))
          : (a = s[4]),
        s[5] !== i || s[6] !== a
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-header", className: a, ...i })),
            (s[5] = i),
            (s[6] = a),
            (s[7] = l))
          : (l = s[7]),
        l
      );
    }
    function a(e) {
      let o,
        i,
        a,
        l,
        s = (0, r.c)(8);
      return (
        s[0] !== e
          ? (({ className: o, ...i } = e), (s[0] = e), (s[1] = o), (s[2] = i))
          : ((o = s[1]), (i = s[2])),
        s[3] !== o
          ? ((a = (0, n.cn)("leading-none font-semibold", o)), (s[3] = o), (s[4] = a))
          : (a = s[4]),
        s[5] !== i || s[6] !== a
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-title", className: a, ...i })),
            (s[5] = i),
            (s[6] = a),
            (s[7] = l))
          : (l = s[7]),
        l
      );
    }
    function l(e) {
      let o,
        i,
        a,
        l,
        s = (0, r.c)(8);
      return (
        s[0] !== e
          ? (({ className: o, ...i } = e), (s[0] = e), (s[1] = o), (s[2] = i))
          : ((o = s[1]), (i = s[2])),
        s[3] !== o
          ? ((a = (0, n.cn)("text-muted-foreground text-sm", o)), (s[3] = o), (s[4] = a))
          : (a = s[4]),
        s[5] !== i || s[6] !== a
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-description", className: a, ...i })),
            (s[5] = i),
            (s[6] = a),
            (s[7] = l))
          : (l = s[7]),
        l
      );
    }
    function s(e) {
      let o,
        i,
        a,
        l,
        s = (0, r.c)(8);
      return (
        s[0] !== e
          ? (({ className: o, ...i } = e), (s[0] = e), (s[1] = o), (s[2] = i))
          : ((o = s[1]), (i = s[2])),
        s[3] !== o ? ((a = (0, n.cn)("px-6", o)), (s[3] = o), (s[4] = a)) : (a = s[4]),
        s[5] !== i || s[6] !== a
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-content", className: a, ...i })),
            (s[5] = i),
            (s[6] = a),
            (s[7] = l))
          : (l = s[7]),
        l
      );
    }
    e.s([
      "Card",
      () => o,
      "CardContent",
      () => s,
      "CardDescription",
      () => l,
      "CardHeader",
      () => i,
      "CardTitle",
      () => a,
    ]);
  },
  67319,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
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
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function s(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  19984,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(50481)._(e.r(67319)),
      a = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r && ((u = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (u += ":" + e.port)),
        s && "object" == typeof s && (s = String(i.urlQueryToSearchParams(s))));
      let c = e.search || (s && `?${s}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
          : u || (u = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${o}${c}${l}`
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
    function u(e) {
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
          return o;
        },
      }));
    let n = e.r(34706);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = i(e, n)), t && (o.current = i(t, n)));
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
    var n = {
      DecodeError: function () {
        return b;
      },
      MiddlewareNotFoundError: function () {
        return w;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return s;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => l.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let h = "u" > typeof performance,
      g =
        h &&
        ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class b extends Error {}
    class y extends Error {}
    class x extends Error {
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
    class w extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function j(e) {
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
    let n = e.r(52535),
      o = e.r(1253);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
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
          return n;
        },
      }));
    let n = (e) => {};
  },
  19871,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return b;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(50481),
      a = e.r(62482),
      l = i._(e.r(34706)),
      s = e.r(19984),
      u = e.r(58608),
      c = e.r(16679),
      d = e.r(52535),
      f = e.r(86878);
    e.r(96165);
    let p = e.r(26286),
      m = e.r(15937),
      h = e.r(11090);
    function g(e) {
      return "string" == typeof e ? e : (0, s.formatUrl)(e);
    }
    function b(t) {
      var r;
      let n,
        o,
        i,
        [s, b] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
        x = (0, l.useRef)(null),
        {
          href: v,
          as: w,
          children: j,
          prefetch: _ = null,
          passHref: P,
          replace: S,
          shallow: N,
          scroll: O,
          onClick: C,
          onMouseEnter: E,
          onTouchStart: T,
          legacyBehavior: R = !1,
          onNavigate: k,
          ref: L,
          unstable_dynamicOnHover: M,
          ...$
        } = t;
      ((n = j),
        R &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n })));
      let I = l.default.useContext(u.AppRouterContext),
        A = !1 !== _,
        U =
          !1 !== _
            ? null === (r = _) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: F, as: D } = l.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: w ? g(w) : e };
        }, [v, w]);
      if (R) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = l.default.Children.only(n);
      }
      let B = R ? o && "object" == typeof o && o.ref : L,
        z = l.default.useCallback(
          (e) => (
            null !== I && (x.current = (0, p.mountLinkInstance)(e, F, I, U, A, b)),
            () => {
              (x.current && ((0, p.unmountLinkForCurrentNavigation)(x.current), (x.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [A, F, I, U, b]
        ),
        K = {
          ref: (0, c.useMergedRef)(z, B),
          onClick(t) {
            (R || "function" != typeof C || C(t),
              R && o.props && "function" == typeof o.props.onClick && o.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, r, n, o, i, a, s) {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) && "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
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
                    let { dispatchNavigateAction: d } = e.r(10115);
                    l.default.startTransition(() => {
                      d(n || r, i ? "replace" : "push", a ?? !0, o.current);
                    });
                  }
                })(t, F, D, x, S, O, k));
          },
          onMouseEnter(e) {
            (R || "function" != typeof E || E(e),
              R && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
              I && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
          onTouchStart: function (e) {
            (R || "function" != typeof T || T(e),
              R && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
              I && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(D)
          ? (K.href = D)
          : (R && !P && ("a" !== o.type || "href" in o.props)) || (K.href = (0, f.addBasePath)(D)),
        (i = R ? l.default.cloneElement(o, K) : (0, a.jsx)("a", { ...$, ...K, children: n })),
        (0, a.jsx)(y.Provider, { value: s, children: i })
      );
    }
    e.r(41679);
    let y = (0, l.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, l.useContext)(y);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      n = e.i(2082);
    function o(e) {
      let o,
        i,
        a,
        l,
        s,
        u = (0, r.c)(10);
      return (
        u[0] !== e
          ? (({ className: o, type: a, ...i } = e), (u[0] = e), (u[1] = o), (u[2] = i), (u[3] = a))
          : ((o = u[1]), (i = u[2]), (a = u[3])),
        u[4] !== o
          ? ((l = (0, n.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              o
            )),
            (u[4] = o),
            (u[5] = l))
          : (l = u[5]),
        u[6] !== i || u[7] !== l || u[8] !== a
          ? ((s = (0, t.jsx)("input", { type: a, "data-slot": "input", className: l, ...i })),
            (u[6] = i),
            (u[7] = l),
            (u[8] = a),
            (u[9] = s))
          : (s = u[9]),
        s
      );
    }
    e.s(["Input", () => o]);
  },
  50610,
  (e) => {
    "use strict";
    var t = e.i(34706);
    e.i(90761);
    var r = e.i(63849),
      n = e.i(62482),
      o = [
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
      ].reduce((e, o) => {
        let i = (0, r.createSlot)(`Primitive.${o}`),
          a = t.forwardRef((e, t) => {
            let { asChild: r, ...a } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, n.jsx)(r ? i : o, { ...a, ref: t })
            );
          });
        return ((a.displayName = `Primitive.${o}`), { ...e, [o]: a });
      }, {});
    e.s(["Primitive", () => o]);
  },
  79381,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      n = e.i(34706),
      o = e.i(65436),
      i = e.i(35285),
      a = e.i(44014),
      l = e.i(19871),
      s = e.i(58976),
      u = e.i(32103),
      c = e.i(22991),
      d = e.i(39781),
      f = e.i(61156),
      p = e.i(71978);
    let m = o.z.object({ email: o.z.string().email("Enter a valid email") });
    function h() {
      let e,
        o,
        h,
        g,
        b,
        y,
        x,
        v,
        w,
        j,
        _,
        P,
        S,
        N,
        O = (0, r.c)(28),
        [C, E] = (0, n.useState)(!1),
        [T, R] = (0, n.useState)(null);
      O[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { resolver: (0, a.zodResolver)(m), defaultValues: { email: "" } }), (O[0] = e))
        : (e = O[0]);
      let { register: k, handleSubmit: L, formState: M } = (0, i.useForm)(e),
        { errors: $ } = M;
      (O[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = async (e) => {
            E(!0);
            let t = await (0, u.apiClient)("/api/auth/forgot-password", {
              method: "POST",
              body: JSON.stringify({ email: e.email }),
            });
            (E(!1), t.error)
              ? s.toast.error(t.error.message ?? "Request failed")
              : (R(t.data?.token ?? null),
                s.toast.success("If the account exists, a reset link has been generated."));
          }),
          (O[1] = o))
        : (o = O[1]),
        O[2] !== L ? ((h = L(o)), (O[2] = L), (O[3] = h)) : (h = O[3]));
      let I = h;
      (O[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, t.jsxs)(d.CardHeader, {
            children: [
              (0, t.jsx)(d.CardTitle, { children: "Reset your password" }),
              (0, t.jsx)(d.CardDescription, {
                className: "text-white/60",
                children:
                  "We will generate a secure reset link. Check your inbox or use the dev link below.",
              }),
            ],
          })),
          (O[4] = g))
        : (g = O[4]),
        O[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)(p.Label, { htmlFor: "email", children: "Email" })), (O[5] = b))
          : (b = O[5]),
        O[6] !== k ? ((y = k("email")), (O[6] = k), (O[7] = y)) : (y = O[7]),
        O[8] !== y
          ? ((x = (0, t.jsx)(f.Input, {
              id: "email",
              type: "email",
              placeholder: "you@company.com",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...y,
            })),
            (O[8] = y),
            (O[9] = x))
          : (x = O[9]),
        O[10] !== $.email
          ? ((v = $.email
              ? (0, t.jsx)("p", { className: "text-sm text-rose-300", children: $.email.message })
              : null),
            (O[10] = $.email),
            (O[11] = v))
          : (v = O[11]),
        O[12] !== x || O[13] !== v
          ? ((w = (0, t.jsxs)("div", { className: "space-y-2", children: [b, x, v] })),
            (O[12] = x),
            (O[13] = v),
            (O[14] = w))
          : (w = O[14]));
      let A = C ? "Generating..." : "Generate reset link";
      return (
        O[15] !== C || O[16] !== A
          ? ((j = (0, t.jsx)(c.Button, {
              type: "submit",
              className: "w-full bg-white text-slate-900 hover:bg-white/90",
              disabled: C,
              children: A,
            })),
            (O[15] = C),
            (O[16] = A),
            (O[17] = j))
          : (j = O[17]),
        O[18] !== I || O[19] !== j || O[20] !== w
          ? ((_ = (0, t.jsxs)("form", { className: "space-y-5", onSubmit: I, children: [w, j] })),
            (O[18] = I),
            (O[19] = j),
            (O[20] = w),
            (O[21] = _))
          : (_ = O[21]),
        O[22] !== T
          ? ((P = T
              ? (0, t.jsxs)("div", {
                  className:
                    "mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70",
                  children: [
                    "Dev reset link:",
                    " ",
                    (0, t.jsx)(l.default, {
                      className: "text-white underline",
                      href: `/reset-password?token=${T}`,
                      children: "Open reset page",
                    }),
                  ],
                })
              : null),
            (O[22] = T),
            (O[23] = P))
          : (P = O[23]),
        O[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsxs)("div", {
              className: "mt-6 text-center text-sm text-white/60",
              children: [
                "Remembered your password?",
                " ",
                (0, t.jsx)(l.default, {
                  href: "/login",
                  className: "text-white underline",
                  children: "Sign in",
                }),
              ],
            })),
            (O[24] = S))
          : (S = O[24]),
        O[25] !== _ || O[26] !== P
          ? ((N = (0, t.jsx)("main", {
              className:
                "min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
              children: (0, t.jsx)("div", {
                className:
                  "mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-6",
                children: (0, t.jsxs)(d.Card, {
                  className: "border-white/10 bg-white/5 text-white shadow-2xl",
                  children: [g, (0, t.jsxs)(d.CardContent, { children: [_, P, S] })],
                }),
              }),
            })),
            (O[25] = _),
            (O[26] = P),
            (O[27] = N))
          : (N = O[27]),
        N
      );
    }
    e.s(["default", () => h]);
  },
]);
