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
  67319,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return u;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function u(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
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
        return a;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(50481)._(e.r(67319)),
      i = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        a = e.hash || "",
        l = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r && ((c = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(u.urlQueryToSearchParams(l))));
      let s = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
          : c || (c = ""),
        a && "#" !== a[0] && (a = "#" + a),
        s && "?" !== s[0] && (s = "?" + s),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (s = s.replace("#", "%23")),
        `${n}${c}${o}${s}${a}`
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
    function c(e) {
      return a(e);
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
          } else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
        },
        [e, t]
      );
    }
    function u(e, t) {
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
        return g;
      },
      MiddlewareNotFoundError: function () {
        return _;
      },
      MissingStaticPage: function () {
        return P;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return y;
      },
      ST: function () {
        return m;
      },
      WEB_VITALS: function () {
        return u;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return s;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => a.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function s() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await h(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let y = "u" > typeof performance,
      m =
        y &&
        ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class g extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class P extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class _ extends Error {
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
          return u;
        },
      }));
    let n = e.r(52535),
      o = e.r(1253);
    function u(e) {
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
        return g;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(50481),
      i = e.r(62482),
      a = u._(e.r(34706)),
      l = e.r(19984),
      c = e.r(58608),
      s = e.r(16679),
      f = e.r(52535),
      d = e.r(86878);
    e.r(96165);
    let p = e.r(26286),
      h = e.r(15937),
      y = e.r(11090);
    function m(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function g(t) {
      var r;
      let n,
        o,
        u,
        [l, g] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
        v = (0, a.useRef)(null),
        {
          href: P,
          as: _,
          children: j,
          prefetch: O = null,
          passHref: x,
          replace: E,
          shallow: S,
          scroll: T,
          onClick: C,
          onMouseEnter: N,
          onTouchStart: R,
          legacyBehavior: w = !1,
          onNavigate: L,
          ref: M,
          unstable_dynamicOnHover: A,
          ...U
        } = t;
      ((n = j),
        w &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, i.jsx)("a", { children: n })));
      let k = a.default.useContext(c.AppRouterContext),
        $ = !1 !== O,
        I =
          !1 !== O
            ? null === (r = O) || "auto" === r
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        { href: B, as: F } = a.default.useMemo(() => {
          let e = m(P);
          return { href: e, as: _ ? m(_) : e };
        }, [P, _]);
      if (w) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let D = w ? o && "object" == typeof o && o.ref : M,
        K = a.default.useCallback(
          (e) => (
            null !== k && (v.current = (0, p.mountLinkInstance)(e, B, k, I, $, g)),
            () => {
              (v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), (v.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [$, B, k, I, g]
        ),
        z = {
          ref: (0, s.useMergedRef)(K, D),
          onClick(t) {
            (w || "function" != typeof C || C(t),
              w && o.props && "function" == typeof o.props.onClick && o.props.onClick(t),
              !k ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, i, l) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: s } = t.currentTarget;
                    if (
                      ("A" === s.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) && "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      u && (t.preventDefault(), location.replace(r));
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
                    let { dispatchNavigateAction: f } = e.r(10115);
                    a.default.startTransition(() => {
                      f(n || r, u ? "replace" : "push", i ?? !0, o.current);
                    });
                  }
                })(t, B, F, v, E, T, L));
          },
          onMouseEnter(e) {
            (w || "function" != typeof N || N(e),
              w && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
              k && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === A));
          },
          onTouchStart: function (e) {
            (w || "function" != typeof R || R(e),
              w && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
              k && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === A));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(F)
          ? (z.href = F)
          : (w && !x && ("a" !== o.type || "href" in o.props)) || (z.href = (0, d.addBasePath)(F)),
        (u = w ? a.default.cloneElement(o, z) : (0, i.jsx)("a", { ...U, ...z, children: n })),
        (0, i.jsx)(b.Provider, { value: l, children: u })
      );
    }
    e.r(41679);
    let b = (0, a.createContext)(p.IDLE_LINK_STATUS),
      v = () => (0, a.useContext)(b);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  28920,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      n = e.i(34706),
      o = e.i(19871),
      u = e.i(22991);
    function i(e) {
      let i,
        a,
        l,
        c,
        s,
        f,
        d,
        p = (0, r.c)(10),
        { error: h, reset: y } = e;
      return (
        p[0] !== h
          ? ((i = () => {
              console.error(h);
            }),
            (a = [h]),
            (p[0] = h),
            (p[1] = i),
            (p[2] = a))
          : ((i = p[1]), (a = p[2])),
        (0, n.useEffect)(i, a),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)("h1", { className: "text-4xl font-semibold", children: "500" })),
            (c = (0, t.jsx)("p", {
              className: "mt-3 text-white/60",
              children: "An unexpected error occurred.",
            })),
            (p[3] = l),
            (p[4] = c))
          : ((l = p[3]), (c = p[4])),
        p[5] !== y
          ? ((s = (0, t.jsx)(u.Button, {
              variant: "secondary",
              onClick: y,
              children: "Try again",
            })),
            (p[5] = y),
            (p[6] = s))
          : (s = p[6]),
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, t.jsx)(u.Button, {
              asChild: !0,
              variant: "outline",
              className: "border-white/10 text-white",
              children: (0, t.jsx)(o.default, {
                href: "/dashboard",
                children: "Back to dashboard",
              }),
            })),
            (p[7] = f))
          : (f = p[7]),
        p[8] !== s
          ? ((d = (0, t.jsx)("main", {
              className: "flex min-h-screen items-center justify-center bg-slate-950 text-white",
              children: (0, t.jsxs)("div", {
                className: "max-w-md text-center",
                children: [
                  l,
                  c,
                  (0, t.jsxs)("div", {
                    className: "mt-6 flex justify-center gap-3",
                    children: [s, f],
                  }),
                ],
              }),
            })),
            (p[8] = s),
            (p[9] = d))
          : (d = p[9]),
        d
      );
    }
    e.s(["default", () => i]);
  },
]);
