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
        s,
        a,
        i,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: o, ...s } = e), (l[0] = e), (l[1] = o), (l[2] = s))
          : ((o = l[1]), (s = l[2])),
        l[3] !== o
          ? ((a = (0, n.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              o
            )),
            (l[3] = o),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== s || l[6] !== a
          ? ((i = (0, t.jsx)("div", { "data-slot": "card", className: a, ...s })),
            (l[5] = s),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      );
    }
    function s(e) {
      let o,
        s,
        a,
        i,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: o, ...s } = e), (l[0] = e), (l[1] = o), (l[2] = s))
          : ((o = l[1]), (s = l[2])),
        l[3] !== o
          ? ((a = (0, n.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              o
            )),
            (l[3] = o),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== s || l[6] !== a
          ? ((i = (0, t.jsx)("div", { "data-slot": "card-header", className: a, ...s })),
            (l[5] = s),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      );
    }
    function a(e) {
      let o,
        s,
        a,
        i,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: o, ...s } = e), (l[0] = e), (l[1] = o), (l[2] = s))
          : ((o = l[1]), (s = l[2])),
        l[3] !== o
          ? ((a = (0, n.cn)("leading-none font-semibold", o)), (l[3] = o), (l[4] = a))
          : (a = l[4]),
        l[5] !== s || l[6] !== a
          ? ((i = (0, t.jsx)("div", { "data-slot": "card-title", className: a, ...s })),
            (l[5] = s),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      );
    }
    function i(e) {
      let o,
        s,
        a,
        i,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: o, ...s } = e), (l[0] = e), (l[1] = o), (l[2] = s))
          : ((o = l[1]), (s = l[2])),
        l[3] !== o
          ? ((a = (0, n.cn)("text-muted-foreground text-sm", o)), (l[3] = o), (l[4] = a))
          : (a = l[4]),
        l[5] !== s || l[6] !== a
          ? ((i = (0, t.jsx)("div", { "data-slot": "card-description", className: a, ...s })),
            (l[5] = s),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      );
    }
    function l(e) {
      let o,
        s,
        a,
        i,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: o, ...s } = e), (l[0] = e), (l[1] = o), (l[2] = s))
          : ((o = l[1]), (s = l[2])),
        l[3] !== o ? ((a = (0, n.cn)("px-6", o)), (l[3] = o), (l[4] = a)) : (a = l[4]),
        l[5] !== s || l[6] !== a
          ? ((i = (0, t.jsx)("div", { "data-slot": "card-content", className: a, ...s })),
            (l[5] = s),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      );
    }
    e.s([
      "Card",
      () => o,
      "CardContent",
      () => l,
      "CardDescription",
      () => i,
      "CardHeader",
      () => s,
      "CardTitle",
      () => a,
    ]);
  },
  59587,
  (e, t, r) => {
    t.exports = e.r(11661);
  },
  67319,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return s;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function s(e) {
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
    function i(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function l(e, ...t) {
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
        return i;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let s = e.r(50481)._(e.r(67319)),
      a = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        i = e.hash || "",
        l = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r && ((u = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
          : u || (u = ""),
        i && "#" !== i[0] && (i = "#" + i),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${o}${c}${i}`
      );
    }
    let l = [
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
      return i(e);
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
          } else (e && (r.current = s(e, n)), t && (o.current = s(t, n)));
        },
        [e, t]
      );
    }
    function s(e, t) {
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
        return v;
      },
      MissingStaticPage: function () {
        return w;
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
        return s;
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
        return l;
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
        return P;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => i.test(e);
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
    class w extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class v extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function P(e) {
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
          return s;
        },
      }));
    let n = e.r(52535),
      o = e.r(1253);
    function s(e) {
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
    let s = e.r(50481),
      a = e.r(62482),
      i = s._(e.r(34706)),
      l = e.r(19984),
      u = e.r(58608),
      c = e.r(16679),
      d = e.r(52535),
      f = e.r(86878);
    e.r(96165);
    let p = e.r(26286),
      m = e.r(15937),
      h = e.r(11090);
    function g(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function b(t) {
      var r;
      let n,
        o,
        s,
        [l, b] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
        x = (0, i.useRef)(null),
        {
          href: w,
          as: v,
          children: P,
          prefetch: j = null,
          passHref: _,
          replace: S,
          shallow: N,
          scroll: C,
          onClick: O,
          onMouseEnter: E,
          onTouchStart: T,
          legacyBehavior: R = !1,
          onNavigate: L,
          ref: M,
          unstable_dynamicOnHover: k,
          ...U
        } = t;
      ((n = P),
        R &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n })));
      let I = i.default.useContext(u.AppRouterContext),
        $ = !1 !== j,
        A =
          !1 !== j
            ? null === (r = j) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: F, as: D } = i.default.useMemo(() => {
          let e = g(w);
          return { href: e, as: v ? g(v) : e };
        }, [w, v]);
      if (R) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = i.default.Children.only(n);
      }
      let B = R ? o && "object" == typeof o && o.ref : M,
        z = i.default.useCallback(
          (e) => (
            null !== I && (x.current = (0, p.mountLinkInstance)(e, F, I, A, $, b)),
            () => {
              (x.current && ((0, p.unmountLinkForCurrentNavigation)(x.current), (x.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [$, F, I, A, b]
        ),
        K = {
          ref: (0, c.useMergedRef)(z, B),
          onClick(t) {
            (R || "function" != typeof O || O(t),
              R && o.props && "function" == typeof o.props.onClick && o.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, r, n, o, s, a, l) {
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
                      s && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(10115);
                    i.default.startTransition(() => {
                      d(n || r, s ? "replace" : "push", a ?? !0, o.current);
                    });
                  }
                })(t, F, D, x, S, C, L));
          },
          onMouseEnter(e) {
            (R || "function" != typeof E || E(e),
              R && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
              I && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === k));
          },
          onTouchStart: function (e) {
            (R || "function" != typeof T || T(e),
              R && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
              I && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === k));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(D)
          ? (K.href = D)
          : (R && !_ && ("a" !== o.type || "href" in o.props)) || (K.href = (0, f.addBasePath)(D)),
        (s = R ? i.default.cloneElement(o, K) : (0, a.jsx)("a", { ...U, ...K, children: n })),
        (0, a.jsx)(y.Provider, { value: l, children: s })
      );
    }
    e.r(41679);
    let y = (0, i.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, i.useContext)(y);
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
        s,
        a,
        i,
        l,
        u = (0, r.c)(10);
      return (
        u[0] !== e
          ? (({ className: o, type: a, ...s } = e), (u[0] = e), (u[1] = o), (u[2] = s), (u[3] = a))
          : ((o = u[1]), (s = u[2]), (a = u[3])),
        u[4] !== o
          ? ((i = (0, n.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              o
            )),
            (u[4] = o),
            (u[5] = i))
          : (i = u[5]),
        u[6] !== s || u[7] !== i || u[8] !== a
          ? ((l = (0, t.jsx)("input", { type: a, "data-slot": "input", className: i, ...s })),
            (u[6] = s),
            (u[7] = i),
            (u[8] = a),
            (u[9] = l))
          : (l = u[9]),
        l
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
        let s = (0, r.createSlot)(`Primitive.${o}`),
          a = t.forwardRef((e, t) => {
            let { asChild: r, ...a } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, n.jsx)(r ? s : o, { ...a, ref: t })
            );
          });
        return ((a.displayName = `Primitive.${o}`), { ...e, [o]: a });
      }, {});
    e.s(["Primitive", () => o]);
  },
  54682,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      n = e.i(34706),
      o = e.i(59587),
      s = e.i(65436),
      a = e.i(35285),
      i = e.i(44014),
      l = e.i(19871),
      u = e.i(58976),
      c = e.i(32103),
      d = e.i(22991),
      f = e.i(39781),
      p = e.i(61156),
      m = e.i(71978);
    let h = s.z
      .object({
        password: s.z.string().min(8, "Minimum 8 characters"),
        confirmPassword: s.z.string().min(8, "Minimum 8 characters"),
      })
      .refine((e) => e.password === e.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    function g(e) {
      let { onToken: t } = e;
      return (t((0, o.useSearchParams)().get("token")), null);
    }
    function b() {
      let e,
        s,
        b,
        y,
        x,
        w,
        v,
        P,
        j,
        _,
        S,
        N,
        C,
        O,
        E,
        T,
        R,
        L,
        M,
        k = (0, r.c)(40),
        U = (0, o.useRouter)(),
        [I, $] = (0, n.useState)(null),
        [A, F] = (0, n.useState)(!1);
      k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = {
            resolver: (0, i.zodResolver)(h),
            defaultValues: { password: "", confirmPassword: "" },
          }),
          (k[0] = e))
        : (e = k[0]);
      let { register: D, handleSubmit: B, formState: z } = (0, a.useForm)(e),
        { errors: K } = z;
      (k[1] !== U || k[2] !== I
        ? ((s = async (e) => {
            if (!I) return void u.toast.error("Reset token is missing");
            F(!0);
            let t = await (0, c.apiClient)("/api/auth/reset-password", {
              method: "POST",
              body: JSON.stringify({ token: I, password: e.password }),
            });
            (F(!1), t.error)
              ? u.toast.error(t.error.message ?? "Reset failed")
              : (u.toast.success("Password updated. Please sign in."), U.push("/login"));
          }),
          (k[1] = U),
          (k[2] = I),
          (k[3] = s))
        : (s = k[3]),
        k[4] !== B || k[5] !== s ? ((b = B(s)), (k[4] = B), (k[5] = s), (k[6] = b)) : (b = k[6]));
      let J = b;
      (k[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (0, t.jsx)(n.Suspense, {
            fallback: (0, t.jsx)("p", { children: "Loading..." }),
            children: (0, t.jsx)(g, { onToken: $ }),
          })),
          (k[7] = y))
        : (y = k[7]),
        k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, t.jsxs)(f.CardHeader, {
              children: [
                (0, t.jsx)(f.CardTitle, { children: "Set a new password" }),
                (0, t.jsx)(f.CardDescription, {
                  className: "text-white/60",
                  children: "Choose a strong password to secure your account.",
                }),
              ],
            })),
            (k[8] = x))
          : (x = k[8]),
        k[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, t.jsx)(m.Label, { htmlFor: "password", children: "Password" })), (k[9] = w))
          : (w = k[9]),
        k[10] !== D ? ((v = D("password")), (k[10] = D), (k[11] = v)) : (v = k[11]),
        k[12] !== v
          ? ((P = (0, t.jsx)(p.Input, {
              id: "password",
              type: "password",
              placeholder: "••••••••",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...v,
            })),
            (k[12] = v),
            (k[13] = P))
          : (P = k[13]),
        k[14] !== K.password
          ? ((j = K.password
              ? (0, t.jsx)("p", {
                  className: "text-sm text-rose-300",
                  children: K.password.message,
                })
              : null),
            (k[14] = K.password),
            (k[15] = j))
          : (j = k[15]),
        k[16] !== P || k[17] !== j
          ? ((_ = (0, t.jsxs)("div", { className: "space-y-2", children: [w, P, j] })),
            (k[16] = P),
            (k[17] = j),
            (k[18] = _))
          : (_ = k[18]),
        k[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)(m.Label, {
              htmlFor: "confirmPassword",
              children: "Confirm password",
            })),
            (k[19] = S))
          : (S = k[19]),
        k[20] !== D ? ((N = D("confirmPassword")), (k[20] = D), (k[21] = N)) : (N = k[21]),
        k[22] !== N
          ? ((C = (0, t.jsx)(p.Input, {
              id: "confirmPassword",
              type: "password",
              placeholder: "••••••••",
              className: "border-white/10 bg-white/10 text-white placeholder:text-white/40",
              ...N,
            })),
            (k[22] = N),
            (k[23] = C))
          : (C = k[23]),
        k[24] !== K.confirmPassword
          ? ((O = K.confirmPassword
              ? (0, t.jsx)("p", {
                  className: "text-sm text-rose-300",
                  children: K.confirmPassword.message,
                })
              : null),
            (k[24] = K.confirmPassword),
            (k[25] = O))
          : (O = k[25]),
        k[26] !== C || k[27] !== O
          ? ((E = (0, t.jsxs)("div", { className: "space-y-2", children: [S, C, O] })),
            (k[26] = C),
            (k[27] = O),
            (k[28] = E))
          : (E = k[28]));
      let Q = A ? "Updating..." : "Update password";
      return (
        k[29] !== A || k[30] !== Q
          ? ((T = (0, t.jsx)(d.Button, {
              type: "submit",
              className: "w-full bg-white text-slate-900 hover:bg-white/90",
              disabled: A,
              children: Q,
            })),
            (k[29] = A),
            (k[30] = Q),
            (k[31] = T))
          : (T = k[31]),
        k[32] !== J || k[33] !== _ || k[34] !== E || k[35] !== T
          ? ((R = (0, t.jsxs)("form", {
              className: "space-y-5",
              onSubmit: J,
              children: [_, E, T],
            })),
            (k[32] = J),
            (k[33] = _),
            (k[34] = E),
            (k[35] = T),
            (k[36] = R))
          : (R = k[36]),
        k[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, t.jsxs)("div", {
              className: "mt-6 text-center text-sm text-white/60",
              children: [
                "Return to",
                " ",
                (0, t.jsx)(l.default, {
                  href: "/login",
                  className: "text-white underline",
                  children: "sign in",
                }),
              ],
            })),
            (k[37] = L))
          : (L = k[37]),
        k[38] !== R
          ? ((M = (0, t.jsxs)("main", {
              className:
                "min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white",
              children: [
                y,
                (0, t.jsx)("div", {
                  className:
                    "mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-6",
                  children: (0, t.jsxs)(f.Card, {
                    className: "border-white/10 bg-white/5 text-white shadow-2xl",
                    children: [x, (0, t.jsxs)(f.CardContent, { children: [R, L] })],
                  }),
                }),
              ],
            })),
            (k[38] = R),
            (k[39] = M))
          : (M = k[39]),
        M
      );
    }
    e.s(["default", () => b]);
  },
]);
