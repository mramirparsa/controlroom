(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  66887,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.last = function (e) {
        return e[e.length - 1];
      }));
  },
  50430,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.toArray = function (e) {
        return Array.isArray(e) ? e : Array.from(e);
      }));
  },
  31586,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isLength = function (e) {
        return Number.isSafeInteger(e) && e >= 0;
      }));
  },
  51242,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(31586);
    r.isArrayLike = function (e) {
      return null != e && "function" != typeof e && n.isLength(e.length);
    };
  },
  57812,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(66887),
      i = e.r(50430),
      o = e.r(51242);
    r.last = function (e) {
      if (o.isArrayLike(e)) return n.last(i.toArray(e));
    };
  },
  7920,
  (e, t, r) => {
    t.exports = e.r(57812).last;
  },
  92577,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isUnsafeProperty = function (e) {
        return "__proto__" === e;
      }));
  },
  37740,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isDeepKey = function (e) {
        switch (typeof e) {
          case "number":
          case "symbol":
            return !1;
          case "string":
            return e.includes(".") || e.includes("[") || e.includes("]");
        }
      }));
  },
  77810,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.toKey = function (e) {
        return "string" == typeof e || "symbol" == typeof e
          ? e
          : Object.is(e?.valueOf?.(), -0)
            ? "-0"
            : String(e);
      }));
  },
  2172,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.toString = function e(t) {
        if (null == t) return "";
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return t.map(e).join(",");
        let r = String(t);
        return "0" === r && Object.is(Number(t), -0) ? "-0" : r;
      }));
  },
  20488,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(2172),
      i = e.r(77810);
    r.toPath = function (e) {
      if (Array.isArray(e)) return e.map(i.toKey);
      if ("symbol" == typeof e) return [e];
      e = n.toString(e);
      let t = [],
        r = e.length;
      if (0 === r) return t;
      let o = 0,
        a = "",
        l = "",
        u = !1;
      for (46 === e.charCodeAt(0) && (t.push(""), o++); o < r; ) {
        let n = e[o];
        (l
          ? "\\" === n && o + 1 < r
            ? (a += e[++o])
            : n === l
              ? (l = "")
              : (a += n)
          : u
            ? '"' === n || "'" === n
              ? (l = n)
              : "]" === n
                ? ((u = !1), t.push(a), (a = ""))
                : (a += n)
            : "[" === n
              ? ((u = !0), a && (t.push(a), (a = "")))
              : "." === n
                ? a && (t.push(a), (a = ""))
                : (a += n),
          o++);
      }
      return (a && t.push(a), t);
    };
  },
  16818,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(92577),
      i = e.r(37740),
      o = e.r(77810),
      a = e.r(20488);
    r.get = function e(t, r, l) {
      if (null == t) return l;
      switch (typeof r) {
        case "string": {
          if (n.isUnsafeProperty(r)) return l;
          let o = t[r];
          if (void 0 === o)
            if (i.isDeepKey(r)) return e(t, a.toPath(r), l);
            else return l;
          return o;
        }
        case "number":
        case "symbol": {
          "number" == typeof r && (r = o.toKey(r));
          let e = t[r];
          if (void 0 === e) return l;
          return e;
        }
        default: {
          if (Array.isArray(r)) {
            var u = t,
              c = r,
              s = l;
            if (0 === c.length) return s;
            let e = u;
            for (let t = 0; t < c.length; t++) {
              if (null == e || n.isUnsafeProperty(c[t])) return s;
              e = e[c[t]];
            }
            return void 0 === e ? s : e;
          }
          if (((r = Object.is(r?.valueOf(), -0) ? "-0" : String(r)), n.isUnsafeProperty(r)))
            return l;
          let e = t[r];
          if (void 0 === e) return l;
          return e;
        }
      }
    };
  },
  81098,
  (e, t, r) => {
    t.exports = e.r(16818).get;
  },
  11329,
  (e, t, r) => {
    "use strict";
    var n = e.r(34706),
      i = e.r(65323),
      o =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      a = i.useSyncExternalStore,
      l = n.useRef,
      u = n.useEffect,
      c = n.useMemo,
      s = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
      var f = l(null);
      if (null === f.current) {
        var p = { hasValue: !1, value: null };
        f.current = p;
      } else p = f.current;
      var h = a(
        e,
        (f = c(
          function () {
            function e(e) {
              if (!u) {
                if (((u = !0), (a = e), (e = n(e)), void 0 !== i && p.hasValue)) {
                  var t = p.value;
                  if (i(t, e)) return (l = t);
                }
                return (l = e);
              }
              if (((t = l), o(a, e))) return t;
              var r = n(e);
              return void 0 !== i && i(t, r) ? ((a = e), t) : ((a = e), (l = r));
            }
            var a,
              l,
              u = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, r, n, i]
        ))[0],
        f[1]
      );
      return (
        u(
          function () {
            ((p.hasValue = !0), (p.value = h));
          },
          [h]
        ),
        s(h),
        h
      );
    };
  },
  62995,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(11329);
  },
  2513,
  (e, t, r) => {
    "use strict";
    function n(e) {
      return "symbol" == typeof e ? 1 : null === e ? 2 : void 0 === e ? 3 : 4 * (e != e);
    }
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.compareValues = (e, t, r) => {
        if (e !== t) {
          let i = n(e),
            o = n(t);
          if (i === o && 0 === i) {
            if (e < t) return "desc" === r ? 1 : -1;
            if (e > t) return "desc" === r ? -1 : 1;
          }
          return "desc" === r ? o - i : i - o;
        }
        return 0;
      }));
  },
  28140,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isSymbol = function (e) {
        return "symbol" == typeof e || e instanceof Symbol;
      }));
  },
  28775,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(28140),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      o = /^\w*$/;
    r.isKey = function (e, t) {
      return (
        !Array.isArray(e) &&
        (!!("number" == typeof e || "boolean" == typeof e || null == e || n.isSymbol(e)) ||
          ("string" == typeof e && (o.test(e) || !i.test(e))) ||
          (null != t && Object.hasOwn(t, e)))
      );
    };
  },
  75908,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(2513),
      i = e.r(28775),
      o = e.r(20488);
    r.orderBy = function (e, t, r, a) {
      if (null == e) return [];
      ((r = a ? void 0 : r),
        Array.isArray(e) || (e = Object.values(e)),
        Array.isArray(t) || (t = null == t ? [null] : [t]),
        0 === t.length && (t = [null]),
        Array.isArray(r) || (r = null == r ? [] : [r]),
        (r = r.map((e) => String(e))));
      let l = (e, t) => {
          let r = e;
          for (let e = 0; e < t.length && null != r; ++e) r = r[t[e]];
          return r;
        },
        u = t.map((e) =>
          (Array.isArray(e) && 1 === e.length && (e = e[0]),
          null == e || "function" == typeof e || Array.isArray(e) || i.isKey(e))
            ? e
            : { key: e, path: o.toPath(e) }
        );
      return e
        .map((e) => ({
          original: e,
          criteria: u.map((t) => {
            var r, n;
            return (
              (r = t),
              null == (n = e) || null == r
                ? n
                : "object" == typeof r && "key" in r
                  ? Object.hasOwn(n, r.key)
                    ? n[r.key]
                    : l(n, r.path)
                  : "function" == typeof r
                    ? r(n)
                    : Array.isArray(r)
                      ? l(n, r)
                      : "object" == typeof n
                        ? n[r]
                        : n
            );
          }),
        }))
        .slice()
        .sort((e, t) => {
          for (let i = 0; i < u.length; i++) {
            let o = n.compareValues(e.criteria[i], t.criteria[i], r[i]);
            if (0 !== o) return o;
          }
          return 0;
        })
        .map((e) => e.original);
    };
  },
  32678,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.flatten = function (e, t = 1) {
        let r = [],
          n = Math.floor(t),
          i = (e, t) => {
            for (let o = 0; o < e.length; o++) {
              let a = e[o];
              Array.isArray(a) && t < n ? i(a, t + 1) : r.push(a);
            }
          };
        return (i(e, 0), r);
      }));
  },
  67967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = /^(?:0|[1-9]\d*)$/;
    r.isIndex = function (e, t = Number.MAX_SAFE_INTEGER) {
      switch (typeof e) {
        case "number":
          return Number.isInteger(e) && e >= 0 && e < t;
        case "symbol":
          return !1;
        case "string":
          return n.test(e);
      }
    };
  },
  10458,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isObject = function (e) {
        return null !== e && ("object" == typeof e || "function" == typeof e);
      }));
  },
  89395,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isEqualsSameValueZero = function (e, t) {
        return e === t || (Number.isNaN(e) && Number.isNaN(t));
      }));
  },
  26593,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(67967),
      i = e.r(51242),
      o = e.r(10458),
      a = e.r(89395);
    r.isIterateeCall = function (e, t, r) {
      return (
        !!o.isObject(r) &&
        ((!!("number" == typeof t && i.isArrayLike(r) && n.isIndex(t)) && t < r.length) ||
          ("string" == typeof t && t in r)) &&
        a.isEqualsSameValueZero(r[t], e)
      );
    };
  },
  55666,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(75908),
      i = e.r(32678),
      o = e.r(26593);
    r.sortBy = function (e, ...t) {
      let r = t.length;
      return (
        r > 1 && o.isIterateeCall(e, t[0], t[1])
          ? (t = [])
          : r > 2 && o.isIterateeCall(t[0], t[1], t[2]) && (t = [t[0]]),
        n.orderBy(e, i.flatten(t), ["asc"])
      );
    };
  },
  46772,
  (e, t, r) => {
    t.exports = e.r(55666).sortBy;
  },
  80456,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.debounce = function (e, t, { signal: r, edges: n } = {}) {
        let i,
          o = null,
          a = null != n && n.includes("leading"),
          l = null == n || n.includes("trailing"),
          u = () => {
            null !== o && (e.apply(i, o), (i = void 0), (o = null));
          },
          c = null,
          s = () => {
            (null != c && clearTimeout(c),
              (c = setTimeout(() => {
                ((c = null), l && u(), f());
              }, t)));
          },
          f = () => {
            (null !== c && (clearTimeout(c), (c = null)), (i = void 0), (o = null));
          },
          p = function (...e) {
            if (r?.aborted) return;
            ((i = this), (o = e));
            let t = null == c;
            (s(), a && t && u());
          };
        return (
          (p.schedule = s),
          (p.cancel = f),
          (p.flush = () => {
            u();
          }),
          r?.addEventListener("abort", f, { once: !0 }),
          p
        );
      }));
  },
  90172,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(80456);
    r.debounce = function (e, t = 0, r = {}) {
      let i;
      "object" != typeof r && (r = {});
      let { leading: o = !1, trailing: a = !0, maxWait: l } = r,
        u = [, ,];
      (o && (u[0] = "leading"), a && (u[1] = "trailing"));
      let c = null,
        s = n.debounce(
          function (...t) {
            ((i = e.apply(this, t)), (c = null));
          },
          t,
          { edges: u }
        ),
        f = function (...t) {
          return null != l && (null === c && (c = Date.now()), Date.now() - c >= l)
            ? ((i = e.apply(this, t)), (c = Date.now()), s.cancel(), s.schedule(), i)
            : (s.apply(this, t), i);
        };
      return ((f.cancel = s.cancel), (f.flush = () => (s.flush(), i)), f);
    };
  },
  54203,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(90172);
    r.throttle = function (e, t = 0, r = {}) {
      let { leading: i = !0, trailing: o = !0 } = r;
      return n.debounce(e, t, { leading: i, maxWait: t, trailing: o });
    };
  },
  30116,
  (e, t, r) => {
    t.exports = e.r(54203).throttle;
  },
  56173,
  (e, t, r) => {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for,
      i = n ? Symbol.for("react.element") : 60103,
      o = n ? Symbol.for("react.portal") : 60106,
      a = n ? Symbol.for("react.fragment") : 60107,
      l = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      c = n ? Symbol.for("react.provider") : 60109,
      s = n ? Symbol.for("react.context") : 60110,
      f = n ? Symbol.for("react.async_mode") : 60111,
      p = n ? Symbol.for("react.concurrent_mode") : 60111,
      h = n ? Symbol.for("react.forward_ref") : 60112,
      d = n ? Symbol.for("react.suspense") : 60113,
      y = n ? Symbol.for("react.suspense_list") : 60120,
      v = n ? Symbol.for("react.memo") : 60115,
      g = n ? Symbol.for("react.lazy") : 60116,
      m = n ? Symbol.for("react.block") : 60121,
      b = n ? Symbol.for("react.fundamental") : 60117,
      x = n ? Symbol.for("react.responder") : 60118,
      w = n ? Symbol.for("react.scope") : 60119;
    function O(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case i:
            switch ((e = e.type)) {
              case f:
              case p:
              case a:
              case u:
              case l:
              case d:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case s:
                  case h:
                  case g:
                  case v:
                  case c:
                    return e;
                  default:
                    return t;
                }
            }
          case o:
            return t;
        }
      }
    }
    function S(e) {
      return O(e) === p;
    }
    ((r.AsyncMode = f),
      (r.ConcurrentMode = p),
      (r.ContextConsumer = s),
      (r.ContextProvider = c),
      (r.Element = i),
      (r.ForwardRef = h),
      (r.Fragment = a),
      (r.Lazy = g),
      (r.Memo = v),
      (r.Portal = o),
      (r.Profiler = u),
      (r.StrictMode = l),
      (r.Suspense = d),
      (r.isAsyncMode = function (e) {
        return S(e) || O(e) === f;
      }),
      (r.isConcurrentMode = S),
      (r.isContextConsumer = function (e) {
        return O(e) === s;
      }),
      (r.isContextProvider = function (e) {
        return O(e) === c;
      }),
      (r.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
      }),
      (r.isForwardRef = function (e) {
        return O(e) === h;
      }),
      (r.isFragment = function (e) {
        return O(e) === a;
      }),
      (r.isLazy = function (e) {
        return O(e) === g;
      }),
      (r.isMemo = function (e) {
        return O(e) === v;
      }),
      (r.isPortal = function (e) {
        return O(e) === o;
      }),
      (r.isProfiler = function (e) {
        return O(e) === u;
      }),
      (r.isStrictMode = function (e) {
        return O(e) === l;
      }),
      (r.isSuspense = function (e) {
        return O(e) === d;
      }),
      (r.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === a ||
          e === p ||
          e === u ||
          e === l ||
          e === d ||
          e === y ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === g ||
              e.$$typeof === v ||
              e.$$typeof === c ||
              e.$$typeof === s ||
              e.$$typeof === h ||
              e.$$typeof === b ||
              e.$$typeof === x ||
              e.$$typeof === w ||
              e.$$typeof === m))
        );
      }),
      (r.typeOf = O));
  },
  99370,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(56173);
  },
  50674,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(28140);
    r.toNumber = function (e) {
      return n.isSymbol(e) ? NaN : Number(e);
    };
  },
  67918,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(50674);
    r.toFinite = function (e) {
      return e
        ? (e = n.toNumber(e)) === 1 / 0 || e === -1 / 0
          ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
          : e == e
            ? e
            : 0
        : 0 === e
          ? e
          : 0;
    };
  },
  61396,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(26593),
      i = e.r(67918);
    r.range = function (e, t, r) {
      (r && "number" != typeof r && n.isIterateeCall(e, t, r) && (t = r = void 0),
        (e = i.toFinite(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = i.toFinite(t)),
        (r = void 0 === r ? (e < t ? 1 : -1) : i.toFinite(r)));
      let o = Math.max(Math.ceil((t - e) / (r || 1)), 0),
        a = Array(o);
      for (let t = 0; t < o; t++) ((a[t] = e), (e += r));
      return a;
    };
  },
  33635,
  (e, t, r) => {
    t.exports = e.r(61396).range;
  },
  48879,
  (e, t, r) => {
    !(function (r) {
      "use strict";
      var n,
        i = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        o = !0,
        a = "[DecimalError] ",
        l = a + "Invalid argument: ",
        u = a + "Exponent out of range: ",
        c = Math.floor,
        s = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        p = c(1286742750677284.5),
        h = {};
      function d(e, t) {
        var r,
          n,
          i,
          a,
          l,
          u,
          c,
          s,
          f = e.constructor,
          p = f.precision;
        if (!e.s || !t.s) return (t.s || (t = new f(e)), o ? P(t, p) : t);
        if (((c = e.d), (s = t.d), (l = e.e), (i = t.e), (c = c.slice()), (a = l - i))) {
          for (
            a < 0 ? ((n = c), (a = -a), (u = s.length)) : ((n = s), (i = l), (u = c.length)),
              a > (u = (l = Math.ceil(p / 7)) > u ? l + 1 : u + 1) && ((a = u), (n.length = 1)),
              n.reverse();
            a--;
          )
            n.push(0);
          n.reverse();
        }
        for (
          (u = c.length) - (a = s.length) < 0 && ((a = u), (n = s), (s = c), (c = n)), r = 0;
          a;
        )
          ((r = ((c[--a] = c[a] + s[a] + r) / 1e7) | 0), (c[a] %= 1e7));
        for (r && (c.unshift(r), ++i), u = c.length; 0 == c[--u]; ) c.pop();
        return ((t.d = c), (t.e = i), o ? P(t, p) : t);
      }
      function y(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(l + e);
      }
      function v(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          o = "",
          a = e[0];
        if (i > 0) {
          for (o += a, t = 1; t < i; t++)
            ((r = 7 - (n = e[t] + "").length) && (o += w(r)), (o += n));
          (r = 7 - (n = (a = e[t]) + "").length) && (o += w(r));
        } else if (0 === a) return "0";
        for (; a % 10 == 0; ) a /= 10;
        return o + a;
      }
      ((h.absoluteValue = h.abs =
        function () {
          var e = new this.constructor(this);
          return (e.s && (e.s = 1), e);
        }),
        (h.comparedTo = h.cmp =
          function (e) {
            var t, r, n, i;
            if (((e = new this.constructor(e)), this.s !== e.s)) return this.s || -e.s;
            if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
            for (t = 0, r = (n = this.d.length) < (i = e.d.length) ? n : i; t < r; ++t)
              if (this.d[t] !== e.d[t]) return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
          }),
        (h.decimalPlaces = h.dp =
          function () {
            var e = this.d.length - 1,
              t = (e - this.e) * 7;
            if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
            return t < 0 ? 0 : t;
          }),
        (h.dividedBy = h.div =
          function (e) {
            return g(this, new this.constructor(e));
          }),
        (h.dividedToIntegerBy = h.idiv =
          function (e) {
            var t = this.constructor;
            return P(g(this, new t(e), 0, 1), t.precision);
          }),
        (h.equals = h.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (h.exponent = function () {
          return b(this);
        }),
        (h.greaterThan = h.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (h.greaterThanOrEqualTo = h.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (h.isInteger = h.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (h.isNegative = h.isneg =
          function () {
            return this.s < 0;
          }),
        (h.isPositive = h.ispos =
          function () {
            return this.s > 0;
          }),
        (h.isZero = function () {
          return 0 === this.s;
        }),
        (h.lessThan = h.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (h.lessThanOrEqualTo = h.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (h.logarithm = h.log =
          function (e) {
            var t,
              r = this.constructor,
              i = r.precision,
              l = i + 5;
            if (void 0 === e) e = new r(10);
            else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(a + "NaN");
            if (this.s < 1) throw Error(a + (this.s ? "NaN" : "-Infinity"));
            return this.eq(n)
              ? new r(0)
              : ((o = !1), (t = g(O(this, l), O(e, l), l)), (o = !0), P(t, i));
          }),
        (h.minus = h.sub =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? A(this, e) : d(this, ((e.s = -e.s), e))
            );
          }),
        (h.modulo = h.mod =
          function (e) {
            var t,
              r = this.constructor,
              n = r.precision;
            if (!(e = new r(e)).s) throw Error(a + "NaN");
            return this.s
              ? ((o = !1), (t = g(this, e, 0, 1).times(e)), (o = !0), this.minus(t))
              : P(new r(this), n);
          }),
        (h.naturalExponential = h.exp =
          function () {
            return m(this);
          }),
        (h.naturalLogarithm = h.ln =
          function () {
            return O(this);
          }),
        (h.negated = h.neg =
          function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s || 0), e);
          }),
        (h.plus = h.add =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? d(this, e) : A(this, ((e.s = -e.s), e))
            );
          }),
        (h.precision = h.sd =
          function (e) {
            var t, r, n;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(l + e);
            if (((t = b(this) + 1), (r = 7 * (n = this.d.length - 1) + 1), (n = this.d[n]))) {
              for (; n % 10 == 0; n /= 10) r--;
              for (n = this.d[0]; n >= 10; n /= 10) r++;
            }
            return e && t > r ? t : r;
          }),
        (h.squareRoot = h.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              l,
              u,
              s = this.constructor;
            if (this.s < 1) {
              if (!this.s) return new s(0);
              throw Error(a + "NaN");
            }
            for (
              e = b(this),
                o = !1,
                0 == (i = Math.sqrt(+this)) || i == 1 / 0
                  ? (((t = v(this.d)).length + e) % 2 == 0 && (t += "0"),
                    (i = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    (n = new s(
                      (t =
                        i == 1 / 0
                          ? "5e" + e
                          : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)
                    )))
                  : (n = new s(i.toString())),
                i = u = (r = s.precision) + 3;
              ;
            )
              if (
                ((n = (l = n).plus(g(this, l, u + 2)).times(0.5)),
                v(l.d).slice(0, u) === (t = v(n.d)).slice(0, u))
              ) {
                if (((t = t.slice(u - 3, u + 1)), i == u && "4999" == t)) {
                  if ((P(l, r + 1, 0), l.times(l).eq(this))) {
                    n = l;
                    break;
                  }
                } else if ("9999" != t) break;
                u += 4;
              }
            return ((o = !0), P(n, r));
          }),
        (h.times = h.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              a,
              l,
              u,
              c,
              s,
              f = this.constructor,
              p = this.d,
              h = (e = new f(e)).d;
            if (!this.s || !e.s) return new f(0);
            for (
              e.s *= this.s,
                r = this.e + e.e,
                (c = p.length) < (s = h.length) &&
                  ((a = p), (p = h), (h = a), (l = c), (c = s), (s = l)),
                a = [],
                n = l = c + s;
              n--;
            )
              a.push(0);
            for (n = s; --n >= 0; ) {
              for (t = 0, i = c + n; i > n; )
                ((u = a[i] + h[n] * p[i - n - 1] + t),
                  (a[i--] = (u % 1e7) | 0),
                  (t = (u / 1e7) | 0));
              a[i] = ((a[i] + t) % 1e7) | 0;
            }
            for (; !a[--l]; ) a.pop();
            return (t ? ++r : a.shift(), (e.d = a), (e.e = r), o ? P(e, f.precision) : e);
          }),
        (h.toDecimalPlaces = h.todp =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === e)
              ? r
              : (y(e, 0, 1e9), void 0 === t ? (t = n.rounding) : y(t, 0, 8), P(r, e + b(r) + 1, t));
          }),
        (h.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = j(n, !0))
              : (y(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : y(t, 0, 8),
                (r = j((n = P(new i(n), e + 1, t)), !0, e + 1))),
            r
          );
        }),
        (h.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return void 0 === e
            ? j(this)
            : (y(e, 0, 1e9),
              void 0 === t ? (t = i.rounding) : y(t, 0, 8),
              (r = j((n = P(new i(this), e + b(this) + 1, t)).abs(), !1, e + b(n) + 1)),
              this.isneg() && !this.isZero() ? "-" + r : r);
        }),
        (h.toInteger = h.toint =
          function () {
            var e = this.constructor;
            return P(new e(this), b(this) + 1, e.rounding);
          }),
        (h.toNumber = function () {
          return +this;
        }),
        (h.toPower = h.pow =
          function (e) {
            var t,
              r,
              i,
              l,
              u,
              s,
              f = this,
              p = f.constructor,
              h = +(e = new p(e));
            if (!e.s) return new p(n);
            if (!(f = new p(f)).s) {
              if (e.s < 1) throw Error(a + "Infinity");
              return f;
            }
            if (f.eq(n)) return f;
            if (((i = p.precision), e.eq(n))) return P(f, i);
            if (((s = (t = e.e) >= (r = e.d.length - 1)), (u = f.s), s)) {
              if ((r = h < 0 ? -h : h) <= 0x1fffffffffffff) {
                for (
                  l = new p(n), t = Math.ceil(i / 7 + 4), o = !1;
                  r % 2 && E((l = l.times(f)).d, t), 0 !== (r = c(r / 2));
                )
                  E((f = f.times(f)).d, t);
                return ((o = !0), e.s < 0 ? new p(n).div(l) : P(l, i));
              }
            } else if (u < 0) throw Error(a + "NaN");
            return (
              (u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
              (f.s = 1),
              (o = !1),
              (l = e.times(O(f, i + 12))),
              (o = !0),
              ((l = m(l)).s = u),
              l
            );
          }),
        (h.toPrecision = function (e, t) {
          var r,
            n,
            i = this,
            o = i.constructor;
          return (
            void 0 === e
              ? ((r = b(i)), (n = j(i, r <= o.toExpNeg || r >= o.toExpPos)))
              : (y(e, 1, 1e9),
                void 0 === t ? (t = o.rounding) : y(t, 0, 8),
                (r = b((i = P(new o(i), e, t)))),
                (n = j(i, e <= r || r <= o.toExpNeg, e))),
            n
          );
        }),
        (h.toSignificantDigits = h.tosd =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (y(e, 1, 1e9), void 0 === t ? (t = r.rounding) : y(t, 0, 8)),
              P(new r(this), e, t)
            );
          }),
        (h.toString =
          h.valueOf =
          h.val =
          h.toJSON =
            function () {
              var e = b(this),
                t = this.constructor;
              return j(this, e <= t.toExpNeg || e >= t.toExpPos);
            }));
      var g = (function () {
        function e(e, t) {
          var r,
            n = 0,
            i = e.length;
          for (e = e.slice(); i--; )
            ((r = e[i] * t + n), (e[i] = (r % 1e7) | 0), (n = (r / 1e7) | 0));
          return (n && e.unshift(n), e);
        }
        function t(e, t, r, n) {
          var i, o;
          if (r != n) o = r > n ? 1 : -1;
          else
            for (i = o = 0; i < r; i++)
              if (e[i] != t[i]) {
                o = e[i] > t[i] ? 1 : -1;
                break;
              }
          return o;
        }
        function r(e, t, r) {
          for (var n = 0; r--; )
            ((e[r] -= n), (n = +(e[r] < t[r])), (e[r] = 1e7 * n + e[r] - t[r]));
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (n, i, o, l) {
          var u,
            c,
            s,
            f,
            p,
            h,
            d,
            y,
            v,
            g,
            m,
            x,
            w,
            O,
            S,
            A,
            j,
            E,
            _ = n.constructor,
            M = n.s == i.s ? 1 : -1,
            k = n.d,
            T = i.d;
          if (!n.s) return new _(n);
          if (!i.s) throw Error(a + "Division by zero");
          for (
            s = 0, c = n.e - i.e, j = T.length, S = k.length, y = (d = new _(M)).d = [];
            T[s] == (k[s] || 0);
          )
            ++s;
          if (
            (T[s] > (k[s] || 0) && --c,
            (x = null == o ? (o = _.precision) : l ? o + (b(n) - b(i)) + 1 : o) < 0)
          )
            return new _(0);
          if (((x = (x / 7 + 2) | 0), (s = 0), 1 == j))
            for (f = 0, T = T[0], x++; (s < S || f) && x--; s++)
              ((w = 1e7 * f + (k[s] || 0)), (y[s] = (w / T) | 0), (f = (w % T) | 0));
          else {
            for (
              (f = (1e7 / (T[0] + 1)) | 0) > 1 &&
                ((T = e(T, f)), (k = e(k, f)), (j = T.length), (S = k.length)),
                O = j,
                g = (v = k.slice(0, j)).length;
              g < j;
            )
              v[g++] = 0;
            ((E = T.slice()).unshift(0), (A = T[0]), T[1] >= 1e7 / 2 && ++A);
            do
              ((f = 0),
                (u = t(T, v, j, g)) < 0
                  ? ((m = v[0]),
                    j != g && (m = 1e7 * m + (v[1] || 0)),
                    (f = (m / A) | 0) > 1
                      ? (f >= 1e7 && (f = 1e7 - 1),
                        (h = (p = e(T, f)).length),
                        (g = v.length),
                        1 == (u = t(p, v, h, g)) && (f--, r(p, j < h ? E : T, h)))
                      : (0 == f && (u = f = 1), (p = T.slice())),
                    (h = p.length) < g && p.unshift(0),
                    r(v, p, g),
                    -1 == u &&
                      ((g = v.length), (u = t(T, v, j, g)) < 1 && (f++, r(v, j < g ? E : T, g))),
                    (g = v.length))
                  : 0 === u && (f++, (v = [0])),
                (y[s++] = f),
                u && v[0] ? (v[g++] = k[O] || 0) : ((v = [k[O]]), (g = 1)));
            while ((O++ < S || void 0 !== v[0]) && x--);
          }
          return (y[0] || y.shift(), (d.e = c), P(d, l ? o + b(d) + 1 : o));
        };
      })();
      function m(e, t) {
        var r,
          i,
          a,
          l,
          c,
          f = 0,
          p = 0,
          h = e.constructor,
          d = h.precision;
        if (b(e) > 16) throw Error(u + b(e));
        if (!e.s) return new h(n);
        for (null == t ? ((o = !1), (c = d)) : (c = t), l = new h(0.03125); e.abs().gte(0.1); )
          ((e = e.times(l)), (p += 5));
        for (
          c += ((Math.log(s(2, p)) / Math.LN10) * 2 + 5) | 0, r = i = a = new h(n), h.precision = c;
          ;
        ) {
          if (
            ((i = P(i.times(e), c)),
            (r = r.times(++f)),
            v((l = a.plus(g(i, r, c))).d).slice(0, c) === v(a.d).slice(0, c))
          ) {
            for (; p--; ) a = P(a.times(a), c);
            return ((h.precision = d), null == t ? ((o = !0), P(a, d)) : a);
          }
          a = l;
        }
      }
      function b(e) {
        for (var t = 7 * e.e, r = e.d[0]; r >= 10; r /= 10) t++;
        return t;
      }
      function x(e, t, r) {
        if (t > e.LN10.sd())
          throw ((o = !0), r && (e.precision = r), Error(a + "LN10 precision limit exceeded"));
        return P(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function O(e, t) {
        var r,
          i,
          l,
          u,
          c,
          s,
          f,
          p,
          h,
          d = 1,
          y = e,
          m = y.d,
          w = y.constructor,
          S = w.precision;
        if (y.s < 1) throw Error(a + (y.s ? "NaN" : "-Infinity"));
        if (y.eq(n)) return new w(0);
        if ((null == t ? ((o = !1), (p = S)) : (p = t), y.eq(10)))
          return (null == t && (o = !0), x(w, p));
        if (((w.precision = p += 10), (i = (r = v(m)).charAt(0)), !(15e14 > Math.abs((u = b(y))))))
          return (
            (f = x(w, p + 2, S).times(u + "")),
            (y = O(new w(i + "." + r.slice(1)), p - 10).plus(f)),
            (w.precision = S),
            null == t ? ((o = !0), P(y, S)) : y
          );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); )
          ((i = (r = v((y = y.times(e)).d)).charAt(0)), d++);
        for (
          u = b(y),
            i > 1 ? ((y = new w("0." + r)), u++) : (y = new w(i + "." + r.slice(1))),
            s = c = y = g(y.minus(n), y.plus(n), p),
            h = P(y.times(y), p),
            l = 3;
          ;
        ) {
          if (
            ((c = P(c.times(h), p)),
            v((f = s.plus(g(c, new w(l), p))).d).slice(0, p) === v(s.d).slice(0, p))
          )
            return (
              (s = s.times(2)),
              0 !== u && (s = s.plus(x(w, p + 2, S).times(u + ""))),
              (s = g(s, new w(d), p)),
              (w.precision = S),
              null == t ? ((o = !0), P(s, S)) : s
            );
          ((s = f), (l += 2));
        }
      }
      function S(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
        )
          ++n;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = c((r = r - n - 1) / 7)),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; ) e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          if ((e.d.push(+t), o && (e.e > p || e.e < -p))) throw Error(u + r);
        } else ((e.s = 0), (e.e = 0), (e.d = [0]));
        return e;
      }
      function P(e, t, r) {
        var n,
          i,
          a,
          l,
          f,
          h,
          d,
          y,
          v = e.d;
        for (l = 1, a = v[0]; a >= 10; a /= 10) l++;
        if ((n = t - l) < 0) ((n += 7), (i = t), (d = v[(y = 0)]));
        else {
          if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return e;
          for (l = 1, d = a = v[y]; a >= 10; a /= 10) l++;
          ((n %= 7), (i = n - 7 + l));
        }
        if (
          (void 0 !== r &&
            ((f = ((d / (a = s(10, l - i - 1))) % 10) | 0),
            (h = t < 0 || void 0 !== v[y + 1] || d % a),
            (h =
              r < 4
                ? (f || h) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : f > 5 ||
                  (5 == f &&
                    (4 == r ||
                      h ||
                      (6 == r && ((n > 0 ? (i > 0 ? d / s(10, l - i) : 0) : v[y - 1]) % 10) & 1) ||
                      r == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            h
              ? ((a = b(e)),
                (v.length = 1),
                (t = t - a - 1),
                (v[0] = s(10, (7 - (t % 7)) % 7)),
                (e.e = c(-t / 7) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (0 == n
            ? ((v.length = y), (a = 1), y--)
            : ((v.length = y + 1),
              (a = s(10, 7 - n)),
              (v[y] = i > 0 ? (((d / s(10, l - i)) % s(10, i)) | 0) * a : 0)),
          h)
        )
          for (;;)
            if (0 == y) {
              1e7 == (v[0] += a) && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[y] += a), 1e7 != v[y])) break;
              ((v[y--] = 0), (a = 1));
            }
        for (n = v.length; 0 === v[--n]; ) v.pop();
        if (o && (e.e > p || e.e < -p)) throw Error(u + b(e));
        return e;
      }
      function A(e, t) {
        var r,
          n,
          i,
          a,
          l,
          u,
          c,
          s,
          f,
          p,
          h = e.constructor,
          d = h.precision;
        if (!e.s || !t.s) return (t.s ? (t.s = -t.s) : (t = new h(e)), o ? P(t, d) : t);
        if (((c = e.d), (p = t.d), (n = t.e), (s = e.e), (c = c.slice()), (l = s - n))) {
          for (
            (f = l < 0) ? ((r = c), (l = -l), (u = p.length)) : ((r = p), (n = s), (u = c.length)),
              l > (i = Math.max(Math.ceil(d / 7), u) + 2) && ((l = i), (r.length = 1)),
              r.reverse(),
              i = l;
            i--;
          )
            r.push(0);
          r.reverse();
        } else {
          for ((f = (i = c.length) < (u = p.length)) && (u = i), i = 0; i < u; i++)
            if (c[i] != p[i]) {
              f = c[i] < p[i];
              break;
            }
          l = 0;
        }
        for (
          f && ((r = c), (c = p), (p = r), (t.s = -t.s)), u = c.length, i = p.length - u;
          i > 0;
          --i
        )
          c[u++] = 0;
        for (i = p.length; i > l; ) {
          if (c[--i] < p[i]) {
            for (a = i; a && 0 === c[--a]; ) c[a] = 1e7 - 1;
            (--c[a], (c[i] += 1e7));
          }
          c[i] -= p[i];
        }
        for (; 0 === c[--u]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --n;
        return c[0] ? ((t.d = c), (t.e = n), o ? P(t, d) : t) : new h(0);
      }
      function j(e, t, r) {
        var n,
          i = b(e),
          o = v(e.d),
          a = o.length;
        return (
          t
            ? (r && (n = r - a) > 0
                ? (o = o.charAt(0) + "." + o.slice(1) + w(n))
                : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
              (o = o + (i < 0 ? "e" : "e+") + i))
            : i < 0
              ? ((o = "0." + w(-i - 1) + o), r && (n = r - a) > 0 && (o += w(n)))
              : i >= a
                ? ((o += w(i + 1 - a)), r && (n = r - i - 1) > 0 && (o = o + "." + w(n)))
                : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)),
                  r && (n = r - a) > 0 && (i + 1 === a && (o += "."), (o += w(n)))),
          e.s < 0 ? "-" + o : o
        );
      }
      function E(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function _(e) {
        if (!e || "object" != typeof e) throw Error(a + "Object expected");
        var t,
          r,
          n,
          i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (t = 0; t < i.length; t += 3)
          if (void 0 !== (n = e[(r = i[t])]))
            if (c(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(l + r + ": " + n);
        if (void 0 !== (n = e[(r = "LN10")]))
          if (n == Math.LN10) this[r] = new this(n);
          else throw Error(l + r + ": " + n);
        return this;
      }
      if (
        (((i = (function e(t) {
          var r, n, i;
          function o(e) {
            if (!(this instanceof o)) return new o(e);
            if (((this.constructor = o), e instanceof o)) {
              ((this.s = e.s), (this.e = e.e), (this.d = (e = e.d) ? e.slice() : e));
              return;
            }
            if ("number" == typeof e) {
              if (0 * e != 0) throw Error(l + e);
              if (e > 0) this.s = 1;
              else if (e < 0) ((e = -e), (this.s = -1));
              else {
                ((this.s = 0), (this.e = 0), (this.d = [0]));
                return;
              }
              if (e === ~~e && e < 1e7) {
                ((this.e = 0), (this.d = [e]));
                return;
              }
              return S(this, e.toString());
            }
            if ("string" != typeof e) throw Error(l + e);
            if (
              (45 === e.charCodeAt(0) ? ((e = e.slice(1)), (this.s = -1)) : (this.s = 1), f.test(e))
            )
              S(this, e);
            else throw Error(l + e);
          }
          if (
            ((o.prototype = h),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = e),
            (o.config = o.set = _),
            void 0 === t && (t = {}),
            t)
          )
            for (
              r = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;
            )
              t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
          return (o.config(t), o);
        })(i)).default = i.Decimal =
          i),
        (n = new i(1)),
        "function" == typeof define && define.amd)
      ) {
        let t;
        (e.r, void 0 !== (t = i) && e.v(t));
      } else
        t.exports
          ? (t.exports = i)
          : (r ||
              (r =
                "u" > typeof self && self && self.self == self ? self : Function("return this")()),
            (r.Decimal = i));
    })(e.e);
  },
  40976,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isPlainObject = function (e) {
        if ("object" != typeof e || null == e) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        if ("[object Object]" !== Object.prototype.toString.call(e)) {
          let t = e[Symbol.toStringTag];
          return (
            null != t &&
            !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable &&
            e.toString() === `[object ${t}]`
          );
        }
        let t = e;
        for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }));
  },
  32178,
  (e, t, r) => {
    t.exports = e.r(40976).isPlainObject;
  },
  59703,
  (e, t, r) => {
    "use strict";
    var n = e.r(34706),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      o = n.useSyncExternalStore,
      a = n.useRef,
      l = n.useEffect,
      u = n.useMemo,
      c = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, s) {
      var f = a(null);
      if (null === f.current) {
        var p = { hasValue: !1, value: null };
        f.current = p;
      } else p = f.current;
      var h = o(
        e,
        (f = u(
          function () {
            function e(e) {
              if (!l) {
                if (((l = !0), (o = e), (e = n(e)), void 0 !== s && p.hasValue)) {
                  var t = p.value;
                  if (s(t, e)) return (a = t);
                }
                return (a = e);
              }
              if (((t = a), i(o, e))) return t;
              var r = n(e);
              return void 0 !== s && s(t, r) ? ((o = e), t) : ((o = e), (a = r));
            }
            var o,
              a,
              l = !1,
              u = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === u
                ? void 0
                : function () {
                    return e(u());
                  },
            ];
          },
          [t, r, n, s]
        ))[0],
        f[1]
      );
      return (
        l(
          function () {
            ((p.hasValue = !0), (p.value = h));
          },
          [h]
        ),
        c(h),
        h
      );
    };
  },
  77194,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(59703);
  },
  51675,
  (e, t, r) => {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      i = "~";
    function o() {}
    function a(e, t, r) {
      ((this.fn = e), (this.context = t), (this.once = r || !1));
    }
    function l(e, t, r, n, o) {
      if ("function" != typeof r) throw TypeError("The listener must be a function");
      var l = new a(r, n || e, o),
        u = i ? i + t : t;
      return (
        e._events[u]
          ? e._events[u].fn
            ? (e._events[u] = [e._events[u], l])
            : e._events[u].push(l)
          : ((e._events[u] = l), e._eventsCount++),
        e
      );
    }
    function u(e, t) {
      0 == --e._eventsCount ? (e._events = new o()) : delete e._events[t];
    }
    function c() {
      ((this._events = new o()), (this._eventsCount = 0));
    }
    (Object.create && ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
      (c.prototype.eventNames = function () {
        var e,
          t,
          r = [];
        if (0 === this._eventsCount) return r;
        for (t in (e = this._events)) n.call(e, t) && r.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
      }),
      (c.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, o = r.length, a = Array(o); n < o; n++) a[n] = r[n].fn;
        return a;
      }),
      (c.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (c.prototype.emit = function (e, t, r, n, o, a) {
        var l = i ? i + e : e;
        if (!this._events[l]) return !1;
        var u,
          c,
          s = this._events[l],
          f = arguments.length;
        if (s.fn) {
          switch ((s.once && this.removeListener(e, s.fn, void 0, !0), f)) {
            case 1:
              return (s.fn.call(s.context), !0);
            case 2:
              return (s.fn.call(s.context, t), !0);
            case 3:
              return (s.fn.call(s.context, t, r), !0);
            case 4:
              return (s.fn.call(s.context, t, r, n), !0);
            case 5:
              return (s.fn.call(s.context, t, r, n, o), !0);
            case 6:
              return (s.fn.call(s.context, t, r, n, o, a), !0);
          }
          for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
          s.fn.apply(s.context, u);
        } else {
          var p,
            h = s.length;
          for (c = 0; c < h; c++)
            switch ((s[c].once && this.removeListener(e, s[c].fn, void 0, !0), f)) {
              case 1:
                s[c].fn.call(s[c].context);
                break;
              case 2:
                s[c].fn.call(s[c].context, t);
                break;
              case 3:
                s[c].fn.call(s[c].context, t, r);
                break;
              case 4:
                s[c].fn.call(s[c].context, t, r, n);
                break;
              default:
                if (!u) for (p = 1, u = Array(f - 1); p < f; p++) u[p - 1] = arguments[p];
                s[c].fn.apply(s[c].context, u);
            }
        }
        return !0;
      }),
      (c.prototype.on = function (e, t, r) {
        return l(this, e, t, r, !1);
      }),
      (c.prototype.once = function (e, t, r) {
        return l(this, e, t, r, !0);
      }),
      (c.prototype.removeListener = function (e, t, r, n) {
        var o = i ? i + e : e;
        if (!this._events[o]) return this;
        if (!t) return (u(this, o), this);
        var a = this._events[o];
        if (a.fn) a.fn !== t || (n && !a.once) || (r && a.context !== r) || u(this, o);
        else {
          for (var l = 0, c = [], s = a.length; l < s; l++)
            (a[l].fn !== t || (n && !a[l].once) || (r && a[l].context !== r)) && c.push(a[l]);
          c.length ? (this._events[o] = 1 === c.length ? c[0] : c) : u(this, o);
        }
        return this;
      }),
      (c.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && u(this, t))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (c.prototype.off = c.prototype.removeListener),
      (c.prototype.addListener = c.prototype.on),
      (c.prefixed = i),
      (c.EventEmitter = c),
      (t.exports = c));
  },
  20452,
  30254,
  56144,
  85322,
  28463,
  46833,
  45629,
  87459,
  47806,
  2161,
  81601,
  4913,
  29225,
  41554,
  89587,
  84315,
  55895,
  92694,
  51381,
  70731,
  47612,
  45604,
  16145,
  41934,
  6351,
  42667,
  74046,
  55443,
  48101,
  72540,
  80869,
  45999,
  68732,
  79809,
  64323,
  28024,
  93168,
  77667,
  31930,
  51648,
  76304,
  92547,
  83027,
  24417,
  49352,
  68098,
  42365,
  72063,
  83742,
  45389,
  83171,
  12596,
  91670,
  63955,
  65799,
  25297,
  76082,
  37016,
  (e) => {
    "use strict";
    e.s(["Line", () => v$, "computeLinePoints", () => vF], 20452);
    var t,
      r,
      n,
      i,
      o,
      a,
      l,
      u,
      c,
      s,
      f,
      p,
      h,
      d,
      y,
      v,
      g,
      m,
      b,
      x,
      w,
      O,
      S,
      P,
      A,
      j,
      E,
      _,
      M,
      k,
      T,
      C,
      D,
      I,
      N,
      L,
      z = e.i(34706),
      R = e.i(62388),
      B = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
      ];
    function U(e) {
      return "string" == typeof e && B.includes(e);
    }
    var F = new Set([
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-relevant",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "className",
      "color",
      "height",
      "id",
      "lang",
      "max",
      "media",
      "method",
      "min",
      "name",
      "style",
      "target",
      "width",
      "role",
      "tabIndex",
      "accentHeight",
      "accumulate",
      "additive",
      "alignmentBaseline",
      "allowReorder",
      "alphabetic",
      "amplitude",
      "arabicForm",
      "ascent",
      "attributeName",
      "attributeType",
      "autoReverse",
      "azimuth",
      "baseFrequency",
      "baselineShift",
      "baseProfile",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "capHeight",
      "clip",
      "clipPath",
      "clipPathUnits",
      "clipRule",
      "colorInterpolation",
      "colorInterpolationFilters",
      "colorProfile",
      "colorRendering",
      "contentScriptType",
      "contentStyleType",
      "cursor",
      "cx",
      "cy",
      "d",
      "decelerate",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominantBaseline",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "elevation",
      "enableBackground",
      "end",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fillOpacity",
      "fillRule",
      "filter",
      "filterRes",
      "filterUnits",
      "floodColor",
      "floodOpacity",
      "focusable",
      "fontFamily",
      "fontSize",
      "fontSizeAdjust",
      "fontStretch",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "format",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyphName",
      "glyphOrientationHorizontal",
      "glyphOrientationVertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "hanging",
      "horizAdvX",
      "horizOriginX",
      "href",
      "ideographic",
      "imageRendering",
      "in2",
      "in",
      "intercept",
      "k1",
      "k2",
      "k3",
      "k4",
      "k",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letterSpacing",
      "lightingColor",
      "limitingConeAngle",
      "local",
      "markerEnd",
      "markerHeight",
      "markerMid",
      "markerStart",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "mode",
      "numOctaves",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlinePosition",
      "overlineThickness",
      "paintOrder",
      "panose1",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointerEvents",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "r",
      "radius",
      "refX",
      "refY",
      "renderingIntent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "seed",
      "shapeRendering",
      "slope",
      "spacing",
      "specularConstant",
      "specularExponent",
      "speed",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stopColor",
      "stopOpacity",
      "strikethroughPosition",
      "strikethroughThickness",
      "string",
      "stroke",
      "strokeDasharray",
      "strokeDashoffset",
      "strokeLinecap",
      "strokeLinejoin",
      "strokeMiterlimit",
      "strokeOpacity",
      "strokeWidth",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textAnchor",
      "textDecoration",
      "textLength",
      "textRendering",
      "to",
      "transform",
      "u1",
      "u2",
      "underlinePosition",
      "underlineThickness",
      "unicode",
      "unicodeBidi",
      "unicodeRange",
      "unitsPerEm",
      "vAlphabetic",
      "values",
      "vectorEffect",
      "version",
      "vertAdvY",
      "vertOriginX",
      "vertOriginY",
      "vHanging",
      "vIdeographic",
      "viewTarget",
      "visibility",
      "vMathematical",
      "widths",
      "wordSpacing",
      "writingMode",
      "x1",
      "x2",
      "x",
      "xChannelSelector",
      "xHeight",
      "xlinkActuate",
      "xlinkArcrole",
      "xlinkHref",
      "xlinkRole",
      "xlinkShow",
      "xlinkTitle",
      "xlinkType",
      "xmlBase",
      "xmlLang",
      "xmlns",
      "xmlnsXlink",
      "xmlSpace",
      "y1",
      "y2",
      "y",
      "yChannelSelector",
      "z",
      "zoomAndPan",
      "ref",
      "key",
      "angle",
    ]);
    function $(e) {
      return "string" == typeof e && F.has(e);
    }
    function K(e) {
      return "string" == typeof e && e.startsWith("data-");
    }
    function W(e) {
      if ("object" != typeof e || null === e) return {};
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && ($(r) || K(r)) && (t[r] = e[r]);
      return t;
    }
    function q(e) {
      return null == e
        ? null
        : (0, z.isValidElement)(e) && "object" == typeof e.props && null !== e.props
          ? W(e.props)
          : "object" != typeof e || Array.isArray(e)
            ? null
            : W(e);
    }
    function Y(e) {
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && ($(r) || K(r) || U(r)) && (t[r] = e[r]);
      return t;
    }
    function H(e) {
      return null == e
        ? null
        : (0, z.isValidElement)(e)
          ? Y(e.props)
          : "object" != typeof e || Array.isArray(e)
            ? null
            : Y(e);
    }
    (e.s(
      [
        "isDataAttribute",
        () => K,
        "isSvgElementPropKey",
        () => $,
        "svgPropertiesNoEvents",
        () => W,
        "svgPropertiesNoEventsFromUnknown",
        () => q,
      ],
      30254
    ),
      e.s(
        ["svgPropertiesAndEvents", () => Y, "svgPropertiesAndEventsFromUnknown", () => H],
        56144
      ));
    var V = ["children", "className"];
    function X() {
      return (X = Object.assign.bind()).apply(null, arguments);
    }
    var G = z.forwardRef((e, t) => {
      var { children: r, className: n } = e,
        i = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        })(e, V),
        o = (0, R.clsx)("recharts-layer", n);
      return z.createElement("g", X({ className: o }, Y(i), { ref: t }), r);
    });
    e.s(["Layer", () => G], 85322);
    var Z = e.i(7920),
      Q = e.i(81098);
    function J(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        r = 10 ** t,
        n = Math.round(e * r) / r;
      return Object.is(n, -0) ? 0 : n;
    }
    function ee(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        r[n - 1] = arguments[n];
      return e.reduce((e, t, n) => {
        var i = r[n - 1];
        return "string" == typeof i ? e + i + t : void 0 !== i ? e + J(i) + t : e + t;
      }, "");
    }
    var et = (e) => (0 === e ? 0 : e > 0 ? 1 : -1),
      er = (e) => "number" == typeof e && e != +e,
      en = (e) => "string" == typeof e && e.indexOf("%") === e.length - 1,
      ei = (e) => ("number" == typeof e || e instanceof Number) && !er(e),
      eo = (e) => ei(e) || "string" == typeof e,
      ea = 0,
      el = (e) => {
        var t = ++ea;
        return "".concat(e || "").concat(t);
      },
      eu = function (e, t) {
        var r,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ei(e) && "string" != typeof e) return n;
        if (en(e)) {
          if (null == t) return n;
          var o = e.indexOf("%");
          r = (t * parseFloat(e.slice(0, o))) / 100;
        } else r = +e;
        return (er(r) && (r = n), i && null != t && r > t && (r = t), r);
      },
      ec = (e) => {
        if (!Array.isArray(e)) return !1;
        for (var t = e.length, r = {}, n = 0; n < t; n++)
          if (r[String(e[n])]) return !0;
          else r[String(e[n])] = !0;
        return !1;
      };
    function es(e, t, r) {
      return ei(e) && ei(t) ? J(e + r * (t - e)) : t;
    }
    function ef(e, t, r) {
      if (e && e.length)
        return e.find((e) => e && ("function" == typeof t ? t(e) : (0, Q.default)(e, t)) === r);
    }
    var ep = (e) => null == e,
      eh = (e) => (ep(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
    function ed(e) {
      return null != e;
    }
    function ey() {}
    e.s(
      [
        "findEntryInArray",
        () => ef,
        "getPercentValue",
        () => eu,
        "hasDuplicate",
        () => ec,
        "interpolate",
        () => es,
        "isNan",
        () => er,
        "isNotNil",
        () => ed,
        "isNullish",
        () => ep,
        "isNumOrStr",
        () => eo,
        "isNumber",
        () => ei,
        "isPercent",
        () => en,
        "mathSign",
        () => et,
        "noop",
        () => ey,
        "uniqueId",
        () => el,
        "upperFirst",
        () => eh,
      ],
      28463
    );
    var ev = {
      devToolsEnabled: !0,
      isSsr: !(
        "u" > typeof window &&
        window.document &&
        window.document.createElement &&
        window.setTimeout
      ),
    };
    function eg(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    e.s(["Global", () => ev], 46833);
    var em = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eg(Object(r), !0).forEach(function (t) {
                var n, i, o;
                ((n = e),
                  (i = t),
                  (o = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = o));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eg(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      })({}, { cacheSize: 2e3, enableCache: !0 }),
      eb = new (class {
        constructor(e) {
          (!(function (e, t, r) {
            var n;
            (t =
              "symbol" ==
              typeof (n = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
              })(t, "string"))
                ? n
                : n + "") in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r);
          })(this, "cache", new Map()),
            (this.maxSize = e));
        }
        get(e) {
          var t = this.cache.get(e);
          return (void 0 !== t && (this.cache.delete(e), this.cache.set(e, t)), t);
        }
        set(e, t) {
          if (this.cache.has(e)) this.cache.delete(e);
          else if (this.cache.size >= this.maxSize) {
            var r = this.cache.keys().next().value;
            null != r && this.cache.delete(r);
          }
          this.cache.set(e, t);
        }
        clear() {
          this.cache.clear();
        }
        size() {
          return this.cache.size;
        }
      })(em.cacheSize),
      ex = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre",
      },
      ew = "recharts_measurement_span",
      eO = (e, t) => {
        try {
          var r = document.getElementById(ew);
          (r ||
            ((r = document.createElement("span")).setAttribute("id", ew),
            r.setAttribute("aria-hidden", "true"),
            document.body.appendChild(r)),
            Object.assign(r.style, ex, t),
            (r.textContent = "".concat(e)));
          var n = r.getBoundingClientRect();
          return { width: n.width, height: n.height };
        } catch (e) {
          return { width: 0, height: 0 };
        }
      },
      eS = function (e) {
        var t,
          r,
          n,
          i,
          o,
          a,
          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e || ev.isSsr) return { width: 0, height: 0 };
        if (!em.enableCache) return eO(e, l);
        var u =
            ((t = l.fontSize || ""),
            (r = l.fontFamily || ""),
            (n = l.fontWeight || ""),
            (i = l.fontStyle || ""),
            (o = l.letterSpacing || ""),
            (a = l.textTransform || ""),
            ""
              .concat(e, "|")
              .concat(t, "|")
              .concat(r, "|")
              .concat(n, "|")
              .concat(i, "|")
              .concat(o, "|")
              .concat(a)),
          c = eb.get(u);
        if (c) return c;
        var s = eO(e, l);
        return (eb.set(u, s), s);
      };
    e.s(["getStringSize", () => eS], 45629);
    var eP = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      eA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      ej = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      eE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      e_ = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
      eM = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
    class ek {
      static parse(e) {
        var t,
          [, r, n] = null != (t = eE.exec(e)) ? t : [];
        return null == r ? ek.NaN : new ek(parseFloat(r), null != n ? n : "");
      }
      constructor(e, t) {
        ((this.num = e),
          (this.unit = t),
          (this.num = e),
          (this.unit = t),
          er(e) && (this.unit = ""),
          "" === t || ej.test(t) || ((this.num = NaN), (this.unit = "")),
          (function (e) {
            return eM.includes(e);
          })(t) &&
            ((this.num = (function (e, t) {
              return e * e_[t];
            })(e, t)),
            (this.unit = "px")));
      }
      add(e) {
        return this.unit !== e.unit ? new ek(NaN, "") : new ek(this.num + e.num, this.unit);
      }
      subtract(e) {
        return this.unit !== e.unit ? new ek(NaN, "") : new ek(this.num - e.num, this.unit);
      }
      multiply(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new ek(NaN, "")
          : new ek(this.num * e.num, this.unit || e.unit);
      }
      divide(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new ek(NaN, "")
          : new ek(this.num / e.num, this.unit || e.unit);
      }
      toString() {
        return "".concat(this.num).concat(this.unit);
      }
      isNaN() {
        return er(this.num);
      }
    }
    function eT(e) {
      if (null == e || e.includes("NaN")) return "NaN";
      for (var t = e; t.includes("*") || t.includes("/"); ) {
        var r,
          [, n, i, o] = null != (r = eP.exec(t)) ? r : [],
          a = ek.parse(null != n ? n : ""),
          l = ek.parse(null != o ? o : ""),
          u = "*" === i ? a.multiply(l) : a.divide(l);
        if (u.isNaN()) return "NaN";
        t = t.replace(eP, u.toString());
      }
      for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
        var c,
          [, s, f, p] = null != (c = eA.exec(t)) ? c : [],
          h = ek.parse(null != s ? s : ""),
          d = ek.parse(null != p ? p : ""),
          y = "+" === f ? h.add(d) : h.subtract(d);
        if (y.isNaN()) return "NaN";
        t = t.replace(eA, y.toString());
      }
      return t;
    }
    ((r = "NaN"),
      (n = new ek(NaN, "")),
      (r =
        "symbol" ==
        typeof (t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(r, "string"))
          ? t
          : t + "") in ek
        ? Object.defineProperty(ek, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (ek[r] = n));
    var eC = /\(([^()]*)\)/;
    function eD(e) {
      var t = (function (e) {
        try {
          var t;
          return (
            (t = e.replace(/\s+/g, "")),
            (t = (function (e) {
              for (var t, r = e; null != (t = eC.exec(r)); ) {
                var [, n] = t;
                r = r.replace(eC, eT(n));
              }
              return r;
            })(t)),
            (t = eT(t))
          );
        } catch (e) {
          return "NaN";
        }
      })(e.slice(5, -1));
      return "NaN" === t ? "" : t;
    }
    function eI(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function eN(e, t) {
      var r = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eI(Object(r), !0).forEach(function (t) {
                var n, i, o;
                ((n = e),
                  (i = t),
                  (o = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = o));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eI(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      })({}, e);
      return Object.keys(t).reduce(
        (e, r) => (void 0 === e[r] && void 0 !== t[r] && (e[r] = t[r]), e),
        r
      );
    }
    function eL(e) {
      return Number.isFinite(e);
    }
    function ez(e) {
      return "number" == typeof e && e > 0 && Number.isFinite(e);
    }
    e.s(["resolveDefaultProps", () => eN], 87459);
    var eR = [
        "x",
        "y",
        "lineHeight",
        "capHeight",
        "fill",
        "scaleToFit",
        "textAnchor",
        "verticalAnchor",
      ],
      eB = ["dx", "dy", "angle", "className", "breakAll"];
    function eU() {
      return (eU = Object.assign.bind()).apply(null, arguments);
    }
    function eF(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    var e$ = /[ \f\n\r\t\v\u2028\u2029]+/,
      eK = (e) => {
        var { children: t, breakAll: r, style: n } = e;
        try {
          var i = [];
          ep(t) || (i = r ? t.toString().split("") : t.toString().split(e$));
          var o = i.map((e) => ({ word: e, width: eS(e, n).width })),
            a = r ? 0 : eS(" ", n).width;
          return { wordsWithComputedWidth: o, spaceWidth: a };
        } catch (e) {
          return null;
        }
      };
    function eW(e) {
      return "start" === e || "middle" === e || "end" === e || "inherit" === e;
    }
    var eq = (e, t, r, n) =>
        e.reduce((e, i) => {
          var { word: o, width: a } = i,
            l = e[e.length - 1];
          return (
            l && null != a && (null == t || n || l.width + a + r < Number(t))
              ? (l.words.push(o), (l.width += a + r))
              : e.push({ words: [o], width: a }),
            e
          );
        }, []),
      eY = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
      eH = (e, t, r, n, i, o, a, l) => {
        var u = eK({ breakAll: r, style: n, children: e.slice(0, t) + "…" });
        if (!u) return [!1, []];
        var c = eq(u.wordsWithComputedWidth, o, a, l);
        return [c.length > i || eY(c).width > Number(o), c];
      },
      eV = (e) => [{ words: ep(e) ? [] : e.toString().split(e$), width: void 0 }],
      eX = "#808080",
      eG = {
        angle: 0,
        breakAll: !1,
        capHeight: "0.71em",
        fill: eX,
        lineHeight: "1em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end",
        x: 0,
        y: 0,
      },
      eZ = (0, z.forwardRef)((e, t) => {
        var r,
          n = eN(e, eG),
          {
            x: i,
            y: o,
            lineHeight: a,
            capHeight: l,
            fill: u,
            scaleToFit: c,
            textAnchor: s,
            verticalAnchor: f,
          } = n,
          p = eF(n, eR),
          h = (0, z.useMemo)(
            () =>
              ((e) => {
                var {
                  width: t,
                  scaleToFit: r,
                  children: n,
                  style: i,
                  breakAll: o,
                  maxLines: a,
                } = e;
                if ((t || r) && !ev.isSsr) {
                  var l = eK({ breakAll: o, children: n, style: i });
                  if (!l) return eV(n);
                  var { wordsWithComputedWidth: u, spaceWidth: c } = l;
                  return ((e, t, r, n, i) => {
                    var o,
                      { maxLines: a, children: l, style: u, breakAll: c } = e,
                      s = ei(a),
                      f = String(l),
                      p = eq(t, n, r, i);
                    if (!s || i || !(p.length > a || eY(p).width > Number(n))) return p;
                    for (var h = 0, d = f.length - 1, y = 0; h <= d && y <= f.length - 1; ) {
                      var v = Math.floor((h + d) / 2),
                        [g, m] = eH(f, v - 1, c, u, a, n, r, i),
                        [b] = eH(f, v, c, u, a, n, r, i);
                      if ((g || b || (h = v + 1), g && b && (d = v - 1), !g && b)) {
                        o = m;
                        break;
                      }
                      y++;
                    }
                    return o || p;
                  })({ breakAll: o, children: n, maxLines: a, style: i }, u, c, t, !!r);
                }
                return eV(n);
              })({
                breakAll: p.breakAll,
                children: p.children,
                maxLines: p.maxLines,
                scaleToFit: c,
                style: p.style,
                width: p.width,
              }),
            [p.breakAll, p.children, p.maxLines, c, p.style, p.width]
          ),
          { dx: d, dy: y, angle: v, className: g, breakAll: m } = p,
          b = eF(p, eB);
        if (!eo(i) || !eo(o) || 0 === h.length) return null;
        var x = Number(i) + (ei(d) ? d : 0),
          w = Number(o) + (ei(y) ? y : 0);
        if (!eL(x) || !eL(w)) return null;
        switch (f) {
          case "start":
            r = eD("calc(".concat(l, ")"));
            break;
          case "middle":
            r = eD(
              "calc("
                .concat((h.length - 1) / 2, " * -")
                .concat(a, " + (")
                .concat(l, " / 2))")
            );
            break;
          default:
            r = eD("calc(".concat(h.length - 1, " * -").concat(a, ")"));
        }
        var O = [],
          S = h[0];
        if (c && null != S) {
          var P = S.width,
            { width: A } = p;
          O.push("scale(".concat(ei(A) && ei(P) ? A / P : 1, ")"));
        }
        return (
          v && O.push("rotate(".concat(v, ", ").concat(x, ", ").concat(w, ")")),
          O.length && (b.transform = O.join(" ")),
          z.createElement(
            "text",
            eU({}, Y(b), {
              ref: t,
              x: x,
              y: w,
              className: (0, R.clsx)("recharts-text", g),
              textAnchor: s,
              fill: u.includes("url") ? eX : u,
            }),
            h.map((e, t) => {
              var n = e.words.join(m ? "" : " ");
              return z.createElement(
                "tspan",
                { x: x, dy: 0 === t ? r : a, key: "".concat(n, "-").concat(t) },
                n
              );
            })
          )
        );
      });
    function eQ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function eJ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? eQ(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eQ(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    ((eZ.displayName = "Text"), e.s(["Text", () => eZ, "isValidTextAnchor", () => eW], 47806));
    var e0 = Math.PI / 180,
      e1 = (e, t, r, n) => ({ x: e + Math.cos(-e0 * n) * r, y: t + Math.sin(-e0 * n) * r }),
      e2 = function (e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, brushBottom: 0 };
        return (
          Math.min(
            Math.abs(e - (r.left || 0) - (r.right || 0)),
            Math.abs(t - (r.top || 0) - (r.bottom || 0))
          ) / 2
        );
      },
      e5 = (e, t) => {
        var r,
          { chartX: n, chartY: i } = e,
          { radius: o, angle: a } = ((e, t) => {
            var { x: r, y: n } = e,
              { cx: i, cy: o } = t,
              a = ((e, t) => {
                var { x: r, y: n } = e,
                  { x: i, y: o } = t;
                return Math.sqrt((r - i) ** 2 + (n - o) ** 2);
              })({ x: r, y: n }, { x: i, y: o });
            if (a <= 0) return { radius: a, angle: 0 };
            var l = Math.acos((r - i) / a);
            return (
              n > o && (l = 2 * Math.PI - l),
              { radius: a, angle: (180 * l) / Math.PI, angleInRadian: l }
            );
          })({ x: n, y: i }, t),
          { innerRadius: l, outerRadius: u } = t;
        if (o < l || o > u || 0 === o) return null;
        var { startAngle: c, endAngle: s } = ((e) => {
            var { startAngle: t, endAngle: r } = e,
              n = Math.min(Math.floor(t / 360), Math.floor(r / 360));
            return { startAngle: t - 360 * n, endAngle: r - 360 * n };
          })(t),
          f = a;
        if (c <= s) {
          for (; f > s; ) f -= 360;
          for (; f < c; ) f += 360;
          r = f >= c && f <= s;
        } else {
          for (; f > c; ) f -= 360;
          for (; f < s; ) f += 360;
          r = f >= s && f <= c;
        }
        return r
          ? eJ(
              eJ({}, t),
              {},
              {
                radius: o,
                angle: ((e, t) => {
                  var { startAngle: r, endAngle: n } = t;
                  return e + 360 * Math.min(Math.floor(r / 360), Math.floor(n / 360));
                })(f, t),
              }
            )
          : null;
      };
    e.s(
      [
        "RADIAN",
        () => e0,
        "getMaxRadius",
        () => e2,
        "inRangeOfSector",
        () => e5,
        "polarToCartesian",
        () => e1,
      ],
      2161
    );
    var e3 = e.i(62995),
      e6 = (0, z.createContext)(null),
      e8 = (e) => e,
      e4 = () => {
        var e = (0, z.useContext)(e6);
        return e ? e.store.dispatch : e8;
      },
      e7 = () => {},
      e9 = () => e7,
      te = (e, t) => e === t;
    function tt(e) {
      var t = (0, z.useContext)(e6),
        r = (0, z.useMemo)(
          () =>
            t
              ? (t) => {
                  if (null != t) return e(t);
                }
              : e7,
          [t, e]
        );
      return (0, e3.useSyncExternalStoreWithSelector)(
        t ? t.subscription.addNestedSub : e9,
        t ? t.store.getState : e7,
        t ? t.store.getState : e7,
        r,
        te
      );
    }
    (e.s(["useAppDispatch", () => e4, "useAppSelector", () => tt], 81601), e.i(89283));
    var tr = Symbol.for("immer-nothing"),
      tn = Symbol.for("immer-draftable"),
      ti = Symbol.for("immer-state");
    function to(e) {
      throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
    }
    var ta = Object,
      tl = ta.getPrototypeOf,
      tu = "constructor",
      tc = "prototype",
      ts = "configurable",
      tf = "enumerable",
      tp = "writable",
      th = "value",
      td = (e) => !!e && !!e[ti];
    function ty(e) {
      return !!e && (tm(e) || tP(e) || !!e[tn] || !!e[tu]?.[tn] || tA(e) || tj(e));
    }
    var tv = ta[tc][tu].toString(),
      tg = new WeakMap();
    function tm(e) {
      if (!e || !tE(e)) return !1;
      let t = tl(e);
      if (null === t || t === ta[tc]) return !0;
      let r = ta.hasOwnProperty.call(t, tu) && t[tu];
      if (r === Object) return !0;
      if (!t_(r)) return !1;
      let n = tg.get(r);
      return (void 0 === n && ((n = Function.toString.call(r)), tg.set(r, n)), n === tv);
    }
    function tb(e, t, r = !0) {
      0 === tx(e)
        ? (r ? Reflect.ownKeys(e) : ta.keys(e)).forEach((r) => {
            t(r, e[r], e);
          })
        : e.forEach((r, n) => t(n, r, e));
    }
    function tx(e) {
      let t = e[ti];
      return t ? t.type_ : tP(e) ? 1 : tA(e) ? 2 : 3 * !!tj(e);
    }
    var tw = (e, t, r = tx(e)) => (2 === r ? e.has(t) : ta[tc].hasOwnProperty.call(e, t)),
      tO = (e, t, r = tx(e)) => (2 === r ? e.get(t) : e[t]),
      tS = (e, t, r, n = tx(e)) => {
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
      },
      tP = Array.isArray,
      tA = (e) => e instanceof Map,
      tj = (e) => e instanceof Set,
      tE = (e) => "object" == typeof e,
      t_ = (e) => "function" == typeof e,
      tM = (e) => (e.modified_ ? e.copy_ : e.base_);
    function tk(e, t) {
      if (tA(e)) return new Map(e);
      if (tj(e)) return new Set(e);
      if (tP(e)) return Array[tc].slice.call(e);
      let r = tm(e);
      if (!0 !== t && ("class_only" !== t || r)) {
        let t = tl(e);
        if (null !== t && r) return { ...e };
        let n = ta.create(t);
        return ta.assign(n, e);
      }
      {
        let t = ta.getOwnPropertyDescriptors(e);
        delete t[ti];
        let r = Reflect.ownKeys(t);
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            o = t[i];
          (!1 === o[tp] && ((o[tp] = !0), (o[ts] = !0)),
            (o.get || o.set) && (t[i] = { [ts]: !0, [tp]: !0, [tf]: o[tf], [th]: e[i] }));
        }
        return ta.create(tl(e), t);
      }
    }
    function tT(e, t = !1) {
      return (
        tD(e) ||
          td(e) ||
          !ty(e) ||
          (tx(e) > 1 && ta.defineProperties(e, { set: tC, add: tC, clear: tC, delete: tC }),
          ta.freeze(e),
          t &&
            tb(
              e,
              (e, t) => {
                tT(t, !0);
              },
              !1
            )),
        e
      );
    }
    var tC = {
      [th]: function () {
        to(2);
      },
    };
    function tD(e) {
      return !(null !== e && tE(e)) || ta.isFrozen(e);
    }
    var tI = "MapSet",
      tN = "Patches",
      tL = "ArrayMethods",
      tz = {};
    function tR(e) {
      let t = tz[e];
      return (t || to(0, e), t);
    }
    var tB = (e) => !!tz[e];
    function tU(e, t) {
      t &&
        ((e.patchPlugin_ = tR(tN)),
        (e.patches_ = []),
        (e.inversePatches_ = []),
        (e.patchListener_ = t));
    }
    function tF(e) {
      (t$(e), e.drafts_.forEach(tW), (e.drafts_ = null));
    }
    function t$(e) {
      e === o && (o = e.parent_);
    }
    var tK = (e) =>
      (o = {
        drafts_: [],
        parent_: o,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
        handledSet_: new Set(),
        processedForPatches_: new Set(),
        mapSetPlugin_: tB(tI) ? tR(tI) : void 0,
        arrayMethodsPlugin_: tB(tL) ? tR(tL) : void 0,
      });
    function tW(e) {
      let t = e[ti];
      0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
    }
    function tq(e, t) {
      t.unfinalizedDrafts_ = t.drafts_.length;
      let r = t.drafts_[0];
      if (void 0 !== e && e !== r) {
        (r[ti].modified_ && (tF(t), to(4)), ty(e) && (e = tY(t, e)));
        let { patchPlugin_: n } = t;
        n && n.generateReplacementPatches_(r[ti].base_, e, t);
      } else e = tY(t, r);
      return (
        (function (e, t, r = !1) {
          !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && tT(t, r);
        })(t, e, !0),
        tF(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== tr ? e : void 0
      );
    }
    function tY(e, t) {
      if (tD(t)) return t;
      let r = t[ti];
      if (!r) return tQ(t, e.handledSet_, e);
      if (!tV(r, e)) return t;
      if (!r.modified_) return r.base_;
      if (!r.finalized_) {
        let { callbacks_: t } = r;
        if (t) for (; t.length > 0; ) t.pop()(e);
        tZ(r, e);
      }
      return r.copy_;
    }
    function tH(e) {
      ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
    }
    var tV = (e, t) => e.scope_ === t,
      tX = [];
    function tG(e, t, r, n) {
      let i = e.copy_ || e.base_,
        o = e.type_;
      if (void 0 !== n && tO(i, n, o) === t) return void tS(i, n, r, o);
      if (!e.draftLocations_) {
        let t = (e.draftLocations_ = new Map());
        tb(i, (e, r) => {
          if (td(r)) {
            let n = t.get(r) || [];
            (n.push(e), t.set(r, n));
          }
        });
      }
      for (let n of e.draftLocations_.get(t) ?? tX) tS(i, n, r, o);
    }
    function tZ(e, t) {
      if (
        e.modified_ &&
        !e.finalized_ &&
        (3 === e.type_ ||
          (1 === e.type_ && e.allIndicesReassigned_) ||
          (e.assigned_?.size ?? 0) > 0)
      ) {
        let { patchPlugin_: r } = t;
        if (r) {
          let n = r.getPath(e);
          n && r.generatePatches_(e, n, t);
        }
        tH(e);
      }
    }
    function tQ(e, t, r) {
      return (
        (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) ||
          td(e) ||
          t.has(e) ||
          !ty(e) ||
          tD(e) ||
          (t.add(e),
          tb(e, (n, i) => {
            if (td(i)) {
              let t = i[ti];
              tV(t, r) && (tS(e, n, tM(t), e.type_), tH(t));
            } else ty(i) && tQ(i, t, r);
          })),
        e
      );
    }
    var tJ = {
        get(e, t) {
          let r;
          if (t === ti) return e;
          let n = e.scope_.arrayMethodsPlugin_,
            i = 1 === e.type_ && "string" == typeof t;
          if (i && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
          let o = e.copy_ || e.base_;
          if (!tw(o, t, e.type_)) {
            var a;
            let r;
            return ((a = e), (r = t2(o, t)) ? (th in r ? r[th] : r.get?.call(a.draft_)) : void 0);
          }
          let l = o[t];
          if (
            e.finalized_ ||
            !ty(l) ||
            (i &&
              e.operationMethod &&
              n?.isMutatingArrayMethod(e.operationMethod) &&
              Number.isInteger((r = +t)) &&
              String(r) === t)
          )
            return l;
          if (l === t1(e.base_, t)) {
            t3(e);
            let r = 1 === e.type_ ? +t : t,
              n = t6(e.scope_, l, e, r);
            return (e.copy_[r] = n);
          }
          return l;
        },
        has: (e, t) => t in (e.copy_ || e.base_),
        ownKeys: (e) => Reflect.ownKeys(e.copy_ || e.base_),
        set(e, t, r) {
          let n = t2(e.copy_ || e.base_, t);
          if (n?.set) return (n.set.call(e.draft_, r), !0);
          if (!e.modified_) {
            let n = t1(e.copy_ || e.base_, t),
              i = n?.[ti];
            if (i && i.base_ === r) return ((e.copy_[t] = r), e.assigned_.set(t, !1), !0);
            if (
              (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
              (void 0 !== r || tw(e.base_, t, e.type_))
            )
              return !0;
            (t3(e), t5(e));
          }
          return (
            !!(
              (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            ) ||
            ((e.copy_[t] = r),
            e.assigned_.set(t, !0),
            !(function (e, t, r) {
              let { scope_: n } = e;
              if (td(r)) {
                let i = r[ti];
                tV(i, n) &&
                  i.callbacks_.push(function () {
                    (t3(e), tG(e, r, tM(i), t));
                  });
              } else
                ty(r) &&
                  e.callbacks_.push(function () {
                    let i = e.copy_ || e.base_;
                    3 === e.type_
                      ? i.has(r) && tQ(r, n.handledSet_, n)
                      : tO(i, t, e.type_) === r &&
                        n.drafts_.length > 1 &&
                        (e.assigned_.get(t) ?? !1) === !0 &&
                        e.copy_ &&
                        tQ(tO(e.copy_, t, e.type_), n.handledSet_, n);
                  });
            })(e, t, r),
            !0)
          );
        },
        deleteProperty: (e, t) => (
          t3(e),
          void 0 !== t1(e.base_, t) || t in e.base_
            ? (e.assigned_.set(t, !1), t5(e))
            : e.assigned_.delete(t),
          e.copy_ && delete e.copy_[t],
          !0
        ),
        getOwnPropertyDescriptor(e, t) {
          let r = e.copy_ || e.base_,
            n = Reflect.getOwnPropertyDescriptor(r, t);
          return n
            ? { [tp]: !0, [ts]: 1 !== e.type_ || "length" !== t, [tf]: n[tf], [th]: r[t] }
            : n;
        },
        defineProperty() {
          to(11);
        },
        getPrototypeOf: (e) => tl(e.base_),
        setPrototypeOf() {
          to(12);
        },
      },
      t0 = {};
    for (let e in tJ) {
      let t = tJ[e];
      t0[e] = function () {
        let e = arguments;
        return ((e[0] = e[0][0]), t.apply(this, e));
      };
    }
    function t1(e, t) {
      let r = e[ti];
      return (r ? r.copy_ || r.base_ : e)[t];
    }
    function t2(e, t) {
      if (!(t in e)) return;
      let r = tl(e);
      for (; r; ) {
        let e = Object.getOwnPropertyDescriptor(r, t);
        if (e) return e;
        r = tl(r);
      }
    }
    function t5(e) {
      !e.modified_ && ((e.modified_ = !0), e.parent_ && t5(e.parent_));
    }
    function t3(e) {
      e.copy_ ||
        ((e.assigned_ = new Map()), (e.copy_ = tk(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
    }
    function t6(e, t, r, n) {
      let [i, a] = tA(t)
        ? tR(tI).proxyMap_(t, r)
        : tj(t)
          ? tR(tI).proxySet_(t, r)
          : (function (e, t) {
              let r = tP(e),
                n = {
                  type_: +!!r,
                  scope_: t ? t.scope_ : o,
                  modified_: !1,
                  finalized_: !1,
                  assigned_: void 0,
                  parent_: t,
                  base_: e,
                  draft_: null,
                  copy_: null,
                  revoke_: null,
                  isManual_: !1,
                  callbacks_: void 0,
                },
                i = n,
                a = tJ;
              r && ((i = [n]), (a = t0));
              let { revoke: l, proxy: u } = Proxy.revocable(i, a);
              return ((n.draft_ = u), (n.revoke_ = l), [u, n]);
            })(t, r);
      if (
        ((r?.scope_ ?? o).drafts_.push(i),
        (a.callbacks_ = r?.callbacks_ ?? []),
        (a.key_ = n),
        r && void 0 !== n)
      )
        r.callbacks_.push(function (e) {
          if (!a || !tV(a, e)) return;
          e.mapSetPlugin_?.fixSetContents(a);
          let t = tM(a);
          (tG(r, a.draft_ ?? a, t, n), tZ(a, e));
        });
      else
        a.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(a);
          let { patchPlugin_: t } = e;
          a.modified_ && t && t.generatePatches_(a, [], e);
        });
      return i;
    }
    function t8(e) {
      return (
        td(e) || to(10, e),
        (function e(t) {
          let r;
          if (!ty(t) || tD(t)) return t;
          let n = t[ti],
            i = !0;
          if (n) {
            if (!n.modified_) return n.base_;
            ((n.finalized_ = !0),
              (r = tk(t, n.scope_.immer_.useStrictShallowCopy_)),
              (i = n.scope_.immer_.shouldUseStrictIteration()));
          } else r = tk(t, !0);
          return (
            tb(
              r,
              (t, n) => {
                tS(r, t, e(n));
              },
              i
            ),
            n && (n.finalized_ = !1),
            r
          );
        })(e)
      );
    }
    ((t0.deleteProperty = function (e, t) {
      return t0.set.call(this, e, t, void 0);
    }),
      (t0.set = function (e, t, r) {
        return tJ.set.call(this, e[0], t, r, e[0]);
      }));
    var t4 = new (class {
        constructor(e) {
          ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (e, t, r) => {
              let n;
              if (t_(e) && !t_(t)) {
                let r = t;
                t = e;
                let n = this;
                return function (e = r, ...i) {
                  return n.produce(e, (e) => t.call(this, e, ...i));
                };
              }
              if ((t_(t) || to(6), void 0 === r || t_(r) || to(7), ty(e))) {
                let i = tK(this),
                  o = t6(i, e, void 0),
                  a = !0;
                try {
                  ((n = t(o)), (a = !1));
                } finally {
                  a ? tF(i) : t$(i);
                }
                return (tU(i, r), tq(n, i));
              }
              if (e && tE(e)) to(1, e);
              else {
                if (
                  (void 0 === (n = t(e)) && (n = e),
                  n === tr && (n = void 0),
                  this.autoFreeze_ && tT(n, !0),
                  r)
                ) {
                  let t = [],
                    i = [];
                  (tR(tN).generateReplacementPatches_(e, n, { patches_: t, inversePatches_: i }),
                    r(t, i));
                }
                return n;
              }
            }),
            (this.produceWithPatches = (e, t) => {
              let r, n;
              return t_(e)
                ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
                : [
                    this.produce(e, t, (e, t) => {
                      ((r = e), (n = t));
                    }),
                    r,
                    n,
                  ];
            }),
            ((e) => "boolean" == typeof e)(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
            ((e) => "boolean" == typeof e)(e?.useStrictShallowCopy) &&
              this.setUseStrictShallowCopy(e.useStrictShallowCopy),
            ((e) => "boolean" == typeof e)(e?.useStrictIteration) &&
              this.setUseStrictIteration(e.useStrictIteration));
        }
        createDraft(e) {
          (ty(e) || to(8), td(e) && (e = t8(e)));
          let t = tK(this),
            r = t6(t, e, void 0);
          return ((r[ti].isManual_ = !0), t$(t), r);
        }
        finishDraft(e, t) {
          let r = e && e[ti];
          (r && r.isManual_) || to(9);
          let { scope_: n } = r;
          return (tU(n, t), tq(void 0, n));
        }
        setAutoFreeze(e) {
          this.autoFreeze_ = e;
        }
        setUseStrictShallowCopy(e) {
          this.useStrictShallowCopy_ = e;
        }
        setUseStrictIteration(e) {
          this.useStrictIteration_ = e;
        }
        shouldUseStrictIteration() {
          return this.useStrictIteration_;
        }
        applyPatches(e, t) {
          let r;
          for (r = t.length - 1; r >= 0; r--) {
            let n = t[r];
            if (0 === n.path.length && "replace" === n.op) {
              e = n.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          let n = tR(tN).applyPatches_;
          return td(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
        }
      })().produce,
      t7 = Symbol("NOT_FOUND"),
      t9 = (e) => (Array.isArray(e) ? e : [e]),
      re = 0,
      rt = class {
        revision = re;
        _value;
        _lastValue;
        _isEqual = rr;
        constructor(e, t = rr) {
          ((this._value = this._lastValue = e), (this._isEqual = t));
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this.value !== e && ((this._value = e), (this.revision = ++re));
        }
      };
    function rr(e, t) {
      return e === t;
    }
    function rn(e) {
      return (e instanceof rt || console.warn("Not a valid cell! ", e), e.value);
    }
    var ri = (e, t) => !1;
    function ro() {
      return (function (e, t = rr) {
        return new rt(null, t);
      })(0, ri);
    }
    var ra = (e) => {
      let t = e.collectionTag;
      (null === t && (t = e.collectionTag = ro()), rn(t));
    };
    Symbol();
    var rl = 0,
      ru = Object.getPrototypeOf({}),
      rc = class {
        constructor(e) {
          ((this.value = e), (this.value = e), (this.tag.value = e));
        }
        proxy = new Proxy(this, rs);
        tag = ro();
        tags = {};
        children = {};
        collectionTag = null;
        id = rl++;
      },
      rs = {
        get: (e, t) =>
          (function () {
            let { value: r } = e,
              n = Reflect.get(r, t);
            if ("symbol" == typeof t || t in ru) return n;
            if ("object" == typeof n && null !== n) {
              var i;
              let r = e.children[t];
              return (
                void 0 === r &&
                  (r = e.children[t] = Array.isArray((i = n)) ? new rf(i) : new rc(i)),
                r.tag && rn(r.tag),
                r.proxy
              );
            }
            {
              let r = e.tags[t];
              return (void 0 === r && ((r = e.tags[t] = ro()).value = n), rn(r), n);
            }
          })(),
        ownKeys: (e) => (ra(e), Reflect.ownKeys(e.value)),
        getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
        has: (e, t) => Reflect.has(e.value, t),
      },
      rf = class {
        constructor(e) {
          ((this.value = e), (this.value = e), (this.tag.value = e));
        }
        proxy = new Proxy([this], rp);
        tag = ro();
        tags = {};
        children = {};
        collectionTag = null;
        id = rl++;
      },
      rp = {
        get: ([e], t) => ("length" === t && ra(e), rs.get(e, t)),
        ownKeys: ([e]) => rs.ownKeys(e),
        getOwnPropertyDescriptor: ([e], t) => rs.getOwnPropertyDescriptor(e, t),
        has: ([e], t) => rs.has(e, t),
      },
      rh = (e, t) => e === t;
    function rd(e, t) {
      let r,
        {
          equalityCheck: n = rh,
          maxSize: i = 1,
          resultEqualityCheck: o,
        } = "object" == typeof t ? t : { equalityCheck: t },
        a = function (e, t) {
          if (null === e || null === t || e.length !== t.length) return !1;
          let { length: r } = e;
          for (let i = 0; i < r; i++) if (!n(e[i], t[i])) return !1;
          return !0;
        },
        l = 0,
        u =
          i <= 1
            ? {
                get: (e) => (r && a(r.key, e) ? r.value : t7),
                put(e, t) {
                  r = { key: e, value: t };
                },
                getEntries: () => (r ? [r] : []),
                clear() {
                  r = void 0;
                },
              }
            : (function (e, t) {
                let r = [];
                function n(e) {
                  let n = r.findIndex((r) => t(e, r.key));
                  if (n > -1) {
                    let e = r[n];
                    return (n > 0 && (r.splice(n, 1), r.unshift(e)), e.value);
                  }
                  return t7;
                }
                return {
                  get: n,
                  put: function (t, i) {
                    n(t) === t7 && (r.unshift({ key: t, value: i }), r.length > e && r.pop());
                  },
                  getEntries: function () {
                    return r;
                  },
                  clear: function () {
                    r = [];
                  },
                };
              })(i, a);
      function c() {
        let t = u.get(arguments);
        if (t === t7) {
          if (((t = e.apply(null, arguments)), l++, o)) {
            let e = u.getEntries().find((e) => o(e.value, t));
            e && ((t = e.value), 0 !== l && l--);
          }
          u.put(arguments, t);
        }
        return t;
      }
      return (
        (c.clearCache = () => {
          (u.clear(), c.resetResultsCount());
        }),
        (c.resultsCount = () => l),
        (c.resetResultsCount = () => {
          l = 0;
        }),
        c
      );
    }
    var ry =
      "u" > typeof WeakRef
        ? WeakRef
        : class {
            constructor(e) {
              this.value = e;
            }
            deref() {
              return this.value;
            }
          };
    function rv() {
      return { s: 0, v: void 0, o: null, p: null };
    }
    function rg(e, t = {}) {
      let r,
        n = rv(),
        { resultEqualityCheck: i } = t,
        o = 0;
      function a() {
        let t,
          a = n,
          { length: l } = arguments;
        for (let e = 0; e < l; e++) {
          let t = arguments[e];
          if ("function" == typeof t || ("object" == typeof t && null !== t)) {
            let e = a.o;
            null === e && (a.o = e = new WeakMap());
            let r = e.get(t);
            void 0 === r ? ((a = rv()), e.set(t, a)) : (a = r);
          } else {
            let e = a.p;
            null === e && (a.p = e = new Map());
            let r = e.get(t);
            void 0 === r ? ((a = rv()), e.set(t, a)) : (a = r);
          }
        }
        let u = a;
        if (1 === a.s) t = a.v;
        else if (((t = e.apply(null, arguments)), o++, i)) {
          let e = r?.deref?.() ?? r;
          (null != e && i(e, t) && ((t = e), 0 !== o && o--),
            (r = ("object" == typeof t && null !== t) || "function" == typeof t ? new ry(t) : t));
        }
        return ((u.s = 1), (u.v = t), t);
      }
      return (
        (a.clearCache = () => {
          ((n = rv()), a.resetResultsCount());
        }),
        (a.resultsCount = () => o),
        (a.resetResultsCount = () => {
          o = 0;
        }),
        a
      );
    }
    function rm(e, ...t) {
      let r = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
        n = (...e) => {
          let t,
            n,
            i = 0,
            o = 0,
            a = {},
            l = e.pop();
          ("object" == typeof l && ((a = l), (l = e.pop())),
            (function (e, t = `expected a function, instead received ${typeof e}`) {
              if ("function" != typeof e) throw TypeError(t);
            })(
              l,
              `createSelector expects an output function after the inputs, but received: [${typeof l}]`
            ));
          let {
              memoize: u,
              memoizeOptions: c = [],
              argsMemoize: s = rg,
              argsMemoizeOptions: f = [],
              devModeChecks: p = {},
            } = { ...r, ...a },
            h = t9(c),
            d = t9(f),
            y =
              (!(function (
                e,
                t = "expected all items to be functions, instead received the following types: "
              ) {
                if (!e.every((e) => "function" == typeof e)) {
                  let r = e
                    .map((e) =>
                      "function" == typeof e ? `function ${e.name || "unnamed"}()` : typeof e
                    )
                    .join(", ");
                  throw TypeError(`${t}[${r}]`);
                }
              })(
                (t = Array.isArray(e[0]) ? e[0] : e),
                "createSelector expects all input-selectors to be functions, but received the following types: "
              ),
              t),
            v = u(
              function () {
                return (i++, l.apply(null, arguments));
              },
              ...h
            );
          return Object.assign(
            s(
              function () {
                o++;
                let e = (function (e, t) {
                  let r = [],
                    { length: n } = e;
                  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
                  return r;
                })(y, arguments);
                return (n = v.apply(null, e));
              },
              ...d
            ),
            {
              resultFunc: l,
              memoizedResultFunc: v,
              dependencies: y,
              dependencyRecomputations: () => o,
              resetDependencyRecomputations: () => {
                o = 0;
              },
              lastResult: () => n,
              recomputations: () => i,
              resetRecomputations: () => {
                i = 0;
              },
              memoize: u,
              argsMemoize: s,
            }
          );
        };
      return (Object.assign(n, { withTypes: () => n }), n);
    }
    var rb = rm(rg),
      rx = Object.assign(
        (e, t = rb) => {
          !(function (e, t = `expected an object, instead received ${typeof e}`) {
            if ("object" != typeof e) throw TypeError(t);
          })(
            e,
            `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
          );
          let r = Object.keys(e);
          return t(
            r.map((t) => e[t]),
            (...e) => e.reduce((e, t, n) => ((e[r[n]] = t), e), {})
          );
        },
        { withTypes: () => rx }
      );
    function rw(e) {
      return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    e.s(
      [
        "createSelector",
        () => rb,
        "createSelectorCreator",
        () => rm,
        "lruMemoize",
        () => rd,
        "weakMapMemoize",
        () => rg,
      ],
      4913
    );
    var rO = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
      rS = () => Math.random().toString(36).substring(7).split("").join("."),
      rP = {
        INIT: `@@redux/INIT${rS()}`,
        REPLACE: `@@redux/REPLACE${rS()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${rS()}`,
      };
    function rA(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = e;
      for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
    }
    function rj(e) {
      let t,
        r = Object.keys(e),
        n = {};
      for (let t = 0; t < r.length; t++) {
        let i = r[t];
        "function" == typeof e[i] && (n[i] = e[i]);
      }
      let i = Object.keys(n);
      try {
        Object.keys(n).forEach((e) => {
          let t = n[e];
          if (void 0 === t(void 0, { type: rP.INIT })) throw Error(rw(12));
          if (void 0 === t(void 0, { type: rP.PROBE_UNKNOWN_ACTION() })) throw Error(rw(13));
        });
      } catch (e) {
        t = e;
      }
      return function (e = {}, r) {
        if (t) throw t;
        let o = !1,
          a = {};
        for (let t = 0; t < i.length; t++) {
          let l = i[t],
            u = n[l],
            c = e[l],
            s = u(c, r);
          if (void 0 === s) throw (r && r.type, Error(rw(14)));
          ((a[l] = s), (o = o || s !== c));
        }
        return (o = o || i.length !== Object.keys(e).length) ? a : e;
      };
    }
    function rE(...e) {
      return 0 === e.length
        ? (e) => e
        : 1 === e.length
          ? e[0]
          : e.reduce(
              (e, t) =>
                (...r) =>
                  e(t(...r))
            );
    }
    function r_(e) {
      return rA(e) && "type" in e && "string" == typeof e.type;
    }
    function rM(e) {
      return ({ dispatch: t, getState: r }) =>
        (n) =>
        (i) =>
          "function" == typeof i ? i(t, r, e) : n(i);
    }
    var rk = rM(),
      rT =
        "u" > typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
              if (0 != arguments.length)
                return "object" == typeof arguments[0] ? rE : rE.apply(null, arguments);
            };
    function rC(e, t) {
      function r(...n) {
        if (t) {
          let r = t(...n);
          if (!r) throw Error(nf(0));
          return {
            type: e,
            payload: r.payload,
            ...("meta" in r && { meta: r.meta }),
            ...("error" in r && { error: r.error }),
          };
        }
        return { type: e, payload: n[0] };
      }
      return (
        (r.toString = () => `${e}`),
        (r.type = e),
        (r.match = (t) => r_(t) && t.type === e),
        r
      );
    }
    "u" > typeof window &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__;
    var rD = class e extends Array {
      constructor(...t) {
        (super(...t), Object.setPrototypeOf(this, e.prototype));
      }
      static get [Symbol.species]() {
        return e;
      }
      concat(...e) {
        return super.concat.apply(this, e);
      }
      prepend(...t) {
        return 1 === t.length && Array.isArray(t[0])
          ? new e(...t[0].concat(this))
          : new e(...t.concat(this));
      }
    };
    function rI(e) {
      return ty(e) ? t4(e, () => {}) : e;
    }
    function rN(e, t, r) {
      return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
    }
    var rL = "RTK_autoBatch",
      rz = () => (e) => ({ payload: e, meta: { [rL]: !0 } }),
      rR = (e) => (t) => {
        setTimeout(t, e);
      },
      rB =
        (e = { type: "raf" }) =>
        (t) =>
        (...r) => {
          let n = t(...r),
            i = !0,
            o = !1,
            a = !1,
            l = new Set(),
            u =
              "tick" === e.type
                ? queueMicrotask
                : "raf" === e.type
                  ? "u" > typeof window && window.requestAnimationFrame
                    ? window.requestAnimationFrame
                    : rR(10)
                  : "callback" === e.type
                    ? e.queueNotification
                    : rR(e.timeout),
            c = () => {
              ((a = !1), o && ((o = !1), l.forEach((e) => e())));
            };
          return Object.assign({}, n, {
            subscribe(e) {
              let t = n.subscribe(() => i && e());
              return (
                l.add(e),
                () => {
                  (t(), l.delete(e));
                }
              );
            },
            dispatch(e) {
              try {
                return ((o = !(i = !e?.meta?.[rL])) && !a && ((a = !0), u(c)), n.dispatch(e));
              } finally {
                i = !0;
              }
            },
          });
        };
    function rU(e) {
      let t,
        r = {},
        n = [],
        i = {
          addCase(e, t) {
            let n = "string" == typeof e ? e : e.type;
            if (!n) throw Error(nf(28));
            if (n in r) throw Error(nf(29));
            return ((r[n] = t), i);
          },
          addAsyncThunk: (e, t) => (
            t.pending && (r[e.pending.type] = t.pending),
            t.rejected && (r[e.rejected.type] = t.rejected),
            t.fulfilled && (r[e.fulfilled.type] = t.fulfilled),
            t.settled && n.push({ matcher: e.settled, reducer: t.settled }),
            i
          ),
          addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), i),
          addDefaultCase: (e) => ((t = e), i),
        };
      return (e(i), [r, n, t]);
    }
    var rF = Symbol.for("rtk-slice-createasyncthunk"),
      r$ =
        (((i = r$ || {}).reducer = "reducer"),
        (i.reducerWithPrepare = "reducerWithPrepare"),
        (i.asyncThunk = "asyncThunk"),
        i),
      rK = (function ({ creators: e } = {}) {
        let t = e?.asyncThunk?.[rF];
        return function (e) {
          let r,
            { name: n, reducerPath: i = n } = e;
          if (!n) throw Error(nf(11));
          let o =
              ("function" == typeof e.reducers
                ? e.reducers(
                    (function () {
                      function e(e, t) {
                        return { _reducerDefinitionType: "asyncThunk", payloadCreator: e, ...t };
                      }
                      return (
                        (e.withTypes = () => e),
                        {
                          reducer: (e) =>
                            Object.assign({ [e.name]: (...t) => e(...t) }[e.name], {
                              _reducerDefinitionType: "reducer",
                            }),
                          preparedReducer: (e, t) => ({
                            _reducerDefinitionType: "reducerWithPrepare",
                            prepare: e,
                            reducer: t,
                          }),
                          asyncThunk: e,
                        }
                      );
                    })()
                  )
                : e.reducers) || {},
            a = Object.keys(o),
            l = {},
            u = {},
            c = {},
            s = [],
            f = {
              addCase(e, t) {
                let r = "string" == typeof e ? e : e.type;
                if (!r) throw Error(nf(12));
                if (r in u) throw Error(nf(13));
                return ((u[r] = t), f);
              },
              addMatcher: (e, t) => (s.push({ matcher: e, reducer: t }), f),
              exposeAction: (e, t) => ((c[e] = t), f),
              exposeCaseReducer: (e, t) => ((l[e] = t), f),
            };
          function p() {
            let [t = {}, r = [], n] =
                "function" == typeof e.extraReducers ? rU(e.extraReducers) : [e.extraReducers],
              i = { ...t, ...u };
            return (function (e, t) {
              let r,
                [n, i, o] = rU(t);
              if ("function" == typeof e) r = () => rI(e());
              else {
                let t = rI(e);
                r = () => t;
              }
              function a(e = r(), t) {
                let l = [
                  n[t.type],
                  ...i.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
                ];
                return (
                  0 === l.filter((e) => !!e).length && (l = [o]),
                  l.reduce((e, r) => {
                    if (r)
                      if (td(e)) {
                        let n = r(e, t);
                        return void 0 === n ? e : n;
                      } else {
                        if (ty(e)) return t4(e, (e) => r(e, t));
                        let n = r(e, t);
                        if (void 0 === n) {
                          if (null === e) return e;
                          throw Error(
                            "A case reducer on a non-draftable value must not return undefined"
                          );
                        }
                        return n;
                      }
                    return e;
                  }, e)
                );
              }
              return ((a.getInitialState = r), a);
            })(e.initialState, (e) => {
              for (let t in i) e.addCase(t, i[t]);
              for (let t of s) e.addMatcher(t.matcher, t.reducer);
              for (let t of r) e.addMatcher(t.matcher, t.reducer);
              n && e.addDefaultCase(n);
            });
          }
          a.forEach((r) => {
            let i = o[r],
              a = {
                reducerName: r,
                type: `${n}/${r}`,
                createNotation: "function" == typeof e.reducers,
              };
            "asyncThunk" === i._reducerDefinitionType
              ? (function ({ type: e, reducerName: t }, r, n, i) {
                  if (!i) throw Error(nf(18));
                  let {
                      payloadCreator: o,
                      fulfilled: a,
                      pending: l,
                      rejected: u,
                      settled: c,
                      options: s,
                    } = r,
                    f = i(e, o, s);
                  (n.exposeAction(t, f),
                    a && n.addCase(f.fulfilled, a),
                    l && n.addCase(f.pending, l),
                    u && n.addCase(f.rejected, u),
                    c && n.addMatcher(f.settled, c),
                    n.exposeCaseReducer(t, {
                      fulfilled: a || rW,
                      pending: l || rW,
                      rejected: u || rW,
                      settled: c || rW,
                    }));
                })(a, i, f, t)
              : (function ({ type: e, reducerName: t, createNotation: r }, n, i) {
                  let o, a;
                  if ("reducer" in n) {
                    if (r && "reducerWithPrepare" !== n._reducerDefinitionType) throw Error(nf(17));
                    ((o = n.reducer), (a = n.prepare));
                  } else o = n;
                  i.addCase(e, o)
                    .exposeCaseReducer(t, o)
                    .exposeAction(t, a ? rC(e, a) : rC(e));
                })(a, i, f);
          });
          let h = (e) => e,
            d = new Map(),
            y = new WeakMap();
          function v(e, t) {
            return (r || (r = p()), r(e, t));
          }
          function g() {
            return (r || (r = p()), r.getInitialState());
          }
          function m(t, r = !1) {
            function n(e) {
              let i = e[t];
              return (void 0 === i && r && (i = rN(y, n, g)), i);
            }
            function i(t = h) {
              let n = rN(d, r, () => new WeakMap());
              return rN(n, t, () => {
                let n = {};
                for (let [i, o] of Object.entries(e.selectors ?? {}))
                  n[i] = (function (e, t, r, n) {
                    function i(o, ...a) {
                      let l = t(o);
                      return (void 0 === l && n && (l = r()), e(l, ...a));
                    }
                    return ((i.unwrapped = e), i);
                  })(o, t, () => rN(y, t, g), r);
                return n;
              });
            }
            return {
              reducerPath: t,
              getSelectors: i,
              get selectors() {
                return i(n);
              },
              selectSlice: n,
            };
          }
          let b = {
            name: n,
            reducer: v,
            actions: c,
            caseReducers: l,
            getInitialState: g,
            ...m(i),
            injectInto(e, { reducerPath: t, ...r } = {}) {
              let n = t ?? i;
              return (e.inject({ reducerPath: n, reducer: v }, r), { ...b, ...m(n, !0) });
            },
          };
          return b;
        };
      })();
    function rW() {}
    var rq = "listener",
      rY = "completed",
      rH = "cancelled",
      rV = `task-${rH}`,
      rX = `task-${rY}`,
      rG = `${rq}-${rH}`,
      rZ = `${rq}-${rY}`,
      rQ = class {
        constructor(e) {
          ((this.code = e), (this.message = `task ${rH} (reason: ${e})`));
        }
        name = "TaskAbortError";
        message;
      },
      rJ = (e, t) => {
        if ("function" != typeof e) throw TypeError(nf(32));
      },
      r0 = () => {},
      r1 = (e, t = r0) => (e.catch(t), e),
      r2 = (e, t) => (
        e.addEventListener("abort", t, { once: !0 }),
        () => e.removeEventListener("abort", t)
      ),
      r5 = (e) => {
        if (e.aborted) throw new rQ(e.reason);
      };
    function r3(e, t) {
      let r = r0;
      return new Promise((n, i) => {
        let o = () => i(new rQ(e.reason));
        e.aborted ? o() : ((r = r2(e, o)), t.finally(() => r()).then(n, i));
      }).finally(() => {
        r = r0;
      });
    }
    var r6 = async (e, t) => {
        try {
          await Promise.resolve();
          let t = await e();
          return { status: "ok", value: t };
        } catch (e) {
          return { status: e instanceof rQ ? "cancelled" : "rejected", error: e };
        } finally {
          t?.();
        }
      },
      r8 = (e) => (t) => r1(r3(e, t).then((t) => (r5(e), t))),
      r4 = (e) => {
        let t = r8(e);
        return (e) => t(new Promise((t) => setTimeout(t, e)));
      },
      { assign: r7 } = Object,
      r9 = {},
      ne = "listenerMiddleware",
      nt = (e) => {
        let { type: t, actionCreator: r, matcher: n, predicate: i, effect: o } = e;
        if (t) i = rC(t).match;
        else if (r) ((t = r.type), (i = r.match));
        else if (n) i = n;
        else if (i);
        else throw Error(nf(21));
        return (rJ(o, "options.listener"), { predicate: i, type: t, effect: o });
      },
      nr = r7(
        (e) => {
          let { type: t, predicate: r, effect: n } = nt(e);
          return {
            id: ((e = 21) => {
              let t = "",
                r = e;
              for (; r--; )
                t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                  (64 * Math.random()) | 0
                ];
              return t;
            })(),
            effect: n,
            type: t,
            predicate: r,
            pending: new Set(),
            unsubscribe: () => {
              throw Error(nf(22));
            },
          };
        },
        { withTypes: () => nr }
      ),
      nn = (e, t) => {
        let { type: r, effect: n, predicate: i } = nt(t);
        return Array.from(e.values()).find(
          (e) => ("string" == typeof r ? e.type === r : e.predicate === i) && e.effect === n
        );
      },
      ni = (e) => {
        e.pending.forEach((e) => {
          e.abort(rG);
        });
      },
      no = (e, t, r) => {
        try {
          e(t, r);
        } catch (e) {
          setTimeout(() => {
            throw e;
          }, 0);
        }
      },
      na = r7(rC(`${ne}/add`), { withTypes: () => na }),
      nl = rC(`${ne}/removeAll`),
      nu = r7(rC(`${ne}/remove`), { withTypes: () => nu }),
      nc = (...e) => {
        console.error(`${ne}/error`, ...e);
      },
      ns = (e = {}) => {
        let t = new Map(),
          r = new Map(),
          { extra: n, onError: i = nc } = e;
        rJ(i, "onError");
        let o = (e) => {
          var r;
          return (
            ((r = nn(t, e) ?? nr(e)).unsubscribe = () => t.delete(r.id)),
            t.set(r.id, r),
            (e) => {
              (r.unsubscribe(), e?.cancelActive && ni(r));
            }
          );
        };
        r7(o, { withTypes: () => o });
        let a = (e) => {
          let r = nn(t, e);
          return (r && (r.unsubscribe(), e.cancelActive && ni(r)), !!r);
        };
        r7(a, { withTypes: () => a });
        let l = async (e, a, l, u) => {
            var c, s;
            let f,
              p = new AbortController(),
              h =
                ((c = p.signal),
                (f = async (e, t) => {
                  r5(c);
                  let r = () => {},
                    n = [
                      new Promise((t, n) => {
                        let i = o({
                          predicate: e,
                          effect: (e, r) => {
                            (r.unsubscribe(), t([e, r.getState(), r.getOriginalState()]));
                          },
                        });
                        r = () => {
                          (i(), n());
                        };
                      }),
                    ];
                  null != t && n.push(new Promise((e) => setTimeout(e, t, null)));
                  try {
                    let e = await r3(c, Promise.race(n));
                    return (r5(c), e);
                  } finally {
                    r();
                  }
                }),
                (e, t) => r1(f(e, t))),
              d = [];
            try {
              let i;
              (e.pending.add(p),
                (i = r.get(e) ?? 0),
                r.set(e, i + 1),
                await Promise.resolve(
                  e.effect(
                    a,
                    r7({}, l, {
                      getOriginalState: u,
                      condition: (e, t) => h(e, t).then(Boolean),
                      take: h,
                      delay: r4(p.signal),
                      pause: r8(p.signal),
                      extra: n,
                      signal: p.signal,
                      fork:
                        ((s = p.signal),
                        (e, t) => {
                          rJ(e, "taskExecutor");
                          let r = new AbortController();
                          r2(s, () => r.abort(s.reason));
                          let n = r6(
                            async () => {
                              (r5(s), r5(r.signal));
                              let t = await e({
                                pause: r8(r.signal),
                                delay: r4(r.signal),
                                signal: r.signal,
                              });
                              return (r5(r.signal), t);
                            },
                            () => r.abort(rX)
                          );
                          return (
                            t?.autoJoin && d.push(n.catch(r0)),
                            {
                              result: r8(s)(n),
                              cancel() {
                                r.abort(rV);
                              },
                            }
                          );
                        }),
                      unsubscribe: e.unsubscribe,
                      subscribe: () => {
                        t.set(e.id, e);
                      },
                      cancelActiveListeners: () => {
                        e.pending.forEach((e, t, r) => {
                          e !== p && (e.abort(rG), r.delete(e));
                        });
                      },
                      cancel: () => {
                        (p.abort(rG), e.pending.delete(p));
                      },
                      throwIfCancelled: () => {
                        r5(p.signal);
                      },
                    })
                  )
                ));
            } catch (e) {
              e instanceof rQ || no(i, e, { raisedBy: "effect" });
            } finally {
              let t;
              (await Promise.all(d),
                p.abort(rZ),
                1 === (t = r.get(e) ?? 1) ? r.delete(e) : r.set(e, t - 1),
                e.pending.delete(p));
            }
          },
          u = () => {
            for (let e of r.keys()) ni(e);
            t.clear();
          };
        return {
          middleware: (e) => (r) => (n) => {
            let c;
            if (!r_(n)) return r(n);
            if (na.match(n)) return o(n.payload);
            if (nl.match(n)) return void u();
            if (nu.match(n)) return a(n.payload);
            let s = e.getState(),
              f = () => {
                if (s === r9) throw Error(nf(23));
                return s;
              };
            try {
              if (((c = r(n)), t.size > 0)) {
                let r = e.getState();
                for (let o of Array.from(t.values())) {
                  let t = !1;
                  try {
                    t = o.predicate(n, r, s);
                  } catch (e) {
                    ((t = !1), no(i, e, { raisedBy: "predicate" }));
                  }
                  t && l(o, n, e, f);
                }
              }
            } finally {
              s = r9;
            }
            return c;
          },
          startListening: o,
          stopListening: a,
          clearListeners: u,
        };
      };
    function nf(e) {
      return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    Symbol.for("rtk-state-proxy-original");
    var np = rK({
        name: "chartLayout",
        initialState: {
          layoutType: "horizontal",
          width: 0,
          height: 0,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          scale: 1,
        },
        reducers: {
          setLayout(e, t) {
            e.layoutType = t.payload;
          },
          setChartSize(e, t) {
            ((e.width = t.payload.width), (e.height = t.payload.height));
          },
          setMargin(e, t) {
            var r, n, i, o;
            ((e.margin.top = null != (r = t.payload.top) ? r : 0),
              (e.margin.right = null != (n = t.payload.right) ? n : 0),
              (e.margin.bottom = null != (i = t.payload.bottom) ? i : 0),
              (e.margin.left = null != (o = t.payload.left) ? o : 0));
          },
          setScale(e, t) {
            e.scale = t.payload;
          },
        },
      }),
      { setMargin: nh, setLayout: nd, setChartSize: ny, setScale: nv } = np.actions,
      ng = np.reducer,
      nm = e.i(46772),
      nb = (e) => e.legend.settings;
    function nx(e) {
      return "object" == typeof e && "length" in e ? e : Array.from(e);
    }
    function nw(e) {
      return function () {
        return e;
      };
    }
    function nO(e, t) {
      if ((i = e.length) > 1)
        for (var r, n, i, o = 1, a = e[t[0]], l = a.length; o < i; ++o)
          for (n = a, a = e[t[o]], r = 0; r < l; ++r)
            a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
    }
    function nS(e) {
      for (var t = e.length, r = Array(t); --t >= 0; ) r[t] = t;
      return r;
    }
    function nP(e, t) {
      return e[t];
    }
    function nA(e) {
      let t = [];
      return ((t.key = e), t);
    }
    function nj(e, t, r) {
      return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
    }
    function nE(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function n_(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nE(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nE(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function nM(e, t, r) {
      return ep(e) || ep(t)
        ? r
        : eo(t)
          ? (0, Q.default)(e, t, r)
          : "function" == typeof t
            ? t(e)
            : r;
    }
    (rb([(e) => e.legend.payload, nb], (e, t) => {
      var { itemSorter: r } = t,
        n = e.flat(1);
      return r ? (0, nm.default)(n, r) : n;
    }),
      Array.prototype.slice);
    var nk = (e, t, r) => {
        if (t && r) {
          var { width: n, height: i } = r,
            { align: o, verticalAlign: a, layout: l } = t;
          if (
            ("vertical" === l || ("horizontal" === l && "middle" === a)) &&
            "center" !== o &&
            ei(e[o])
          )
            return n_(n_({}, e), {}, { [o]: e[o] + (n || 0) });
          if (
            ("horizontal" === l || ("vertical" === l && "center" === o)) &&
            "middle" !== a &&
            ei(e[a])
          )
            return n_(n_({}, e), {}, { [a]: e[a] + (i || 0) });
        }
        return e;
      },
      nT = (e, t) =>
        ("horizontal" === e && "xAxis" === t) ||
        ("vertical" === e && "yAxis" === t) ||
        ("centric" === e && "angleAxis" === t) ||
        ("radial" === e && "radiusAxis" === t),
      nC = {
        sign: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var o = 0, a = 0, l = 0; l < r; ++l) {
                  var u = e[l],
                    c = null == u ? void 0 : u[i];
                  if (null != c) {
                    var s = c[1],
                      f = c[0],
                      p = er(s) ? f : s;
                    p >= 0
                      ? ((c[0] = o), (o += p), (c[1] = o))
                      : ((c[0] = a), (a += p), (c[1] = a));
                  }
                }
          }
        },
        expand: function (e, t) {
          if ((n = e.length) > 0) {
            for (var r, n, i, o = 0, a = e[0].length; o < a; ++o) {
              for (i = r = 0; r < n; ++r) i += e[r][o][1] || 0;
              if (i) for (r = 0; r < n; ++r) e[r][o][1] /= i;
            }
            nO(e, t);
          }
        },
        none: nO,
        silhouette: function (e, t) {
          if ((r = e.length) > 0) {
            for (var r, n = 0, i = e[t[0]], o = i.length; n < o; ++n) {
              for (var a = 0, l = 0; a < r; ++a) l += e[a][n][1] || 0;
              i[n][1] += i[n][0] = -l / 2;
            }
            nO(e, t);
          }
        },
        wiggle: function (e, t) {
          if ((i = e.length) > 0 && (n = (r = e[t[0]]).length) > 0) {
            for (var r, n, i, o = 0, a = 1; a < n; ++a) {
              for (var l = 0, u = 0, c = 0; l < i; ++l) {
                for (
                  var s = e[t[l]], f = s[a][1] || 0, p = (f - (s[a - 1][1] || 0)) / 2, h = 0;
                  h < l;
                  ++h
                ) {
                  var d = e[t[h]];
                  p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                }
                ((u += f), (c += p * f));
              }
              ((r[a - 1][1] += r[a - 1][0] = o), u && (o -= c / u));
            }
            ((r[a - 1][1] += r[a - 1][0] = o), nO(e, t));
          }
        },
        positive: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var o = 0, a = 0; a < r; ++a) {
                  var l = e[a],
                    u = null == l ? void 0 : l[i];
                  if (null != u) {
                    var c = er(u[1]) ? u[0] : u[1];
                    c >= 0 ? ((u[0] = o), (o += c), (u[1] = o)) : ((u[0] = 0), (u[1] = 0));
                  }
                }
          }
        },
      },
      nD = (e, t, r) => {
        var n,
          i = null != (n = nC[r]) ? n : nO,
          o = (function () {
            var e = nw([]),
              t = nS,
              r = nO,
              n = nP;
            function i(i) {
              var o,
                a,
                l = Array.from(e.apply(this, arguments), nA),
                u = l.length,
                c = -1;
              for (let e of i)
                for (o = 0, ++c; o < u; ++o) (l[o][c] = [0, +n(e, l[o].key, c, i)]).data = e;
              for (o = 0, a = nx(t(l)); o < u; ++o) l[a[o]].index = o;
              return (r(l, a), l);
            }
            return (
              (i.keys = function (t) {
                return arguments.length
                  ? ((e = "function" == typeof t ? t : nw(Array.from(t))), i)
                  : e;
              }),
              (i.value = function (e) {
                return arguments.length ? ((n = "function" == typeof e ? e : nw(+e)), i) : n;
              }),
              (i.order = function (e) {
                return arguments.length
                  ? ((t = null == e ? nS : "function" == typeof e ? e : nw(Array.from(e))), i)
                  : t;
              }),
              (i.offset = function (e) {
                return arguments.length ? ((r = null == e ? nO : e), i) : r;
              }),
              i
            );
          })()
            .keys(t)
            .value((e, t) => Number(nM(e, t, 0)))
            .order(nS)
            .offset(i)(e);
        return (
          o.forEach((r, n) => {
            r.forEach((r, i) => {
              var o = nM(e[i], t[n], 0);
              Array.isArray(o) &&
                2 === o.length &&
                ei(o[0]) &&
                ei(o[1]) &&
                ((r[0] = o[0]), (r[1] = o[1]));
            });
          }),
          o
        );
      };
    function nI(e) {
      var { axis: t, ticks: r, bandSize: n, entry: i, index: o, dataKey: a } = e;
      if ("category" === t.type) {
        if (!t.allowDuplicatedCategory && t.dataKey && !ep(i[t.dataKey])) {
          var l = ef(r, "value", i[t.dataKey]);
          if (l) return l.coordinate + n / 2;
        }
        return null != r && r[o] ? r[o].coordinate + n / 2 : null;
      }
      var u = nM(i, ep(a) ? t.dataKey : a),
        c = t.scale.map(u);
      return ei(c) ? c : null;
    }
    var nN = (e, t, r) => {
        if (null != e) {
          let n;
          return [
            (n = Object.keys(e).reduce(
              (n, i) => {
                var o = e[i];
                if (!o) return n;
                var { stackedData: a } = o,
                  l = a.reduce(
                    (e, n) => {
                      var i,
                        o = [Math.min(...(i = nj(n, t, r).flat(2).filter(ei))), Math.max(...i)];
                      return eL(o[0]) && eL(o[1])
                        ? [Math.min(e[0], o[0]), Math.max(e[1], o[1])]
                        : e;
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
              },
              [1 / 0, -1 / 0]
            ))[0] ===
            1 / 0
              ? 0
              : n[0],
            n[1] === -1 / 0 ? 0 : n[1],
          ];
        }
      },
      nL = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      nz = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      nR = (e, t, r) => {
        if (e && e.scale && e.scale.bandwidth) {
          var n = e.scale.bandwidth();
          if (!r || n > 0) return n;
        }
        if (e && t && t.length >= 2) {
          for (
            var i = (0, nm.default)(t, (e) => e.coordinate), o = 1 / 0, a = 1, l = i.length;
            a < l;
            a++
          ) {
            var u = i[a],
              c = i[a - 1];
            o = Math.min(
              ((null == u ? void 0 : u.coordinate) || 0) -
                ((null == c ? void 0 : c.coordinate) || 0),
              o
            );
          }
          return o === 1 / 0 ? 0 : o;
        }
        return r ? void 0 : 0;
      };
    function nB(e) {
      var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: o } = e;
      return n_(n_({}, t), {}, { dataKey: r, payload: n, value: i, name: o });
    }
    function nU(e, t) {
      return e ? String(e) : "string" == typeof t ? t : void 0;
    }
    var nF = (e, t) => ("horizontal" === t ? e.chartX : "vertical" === t ? e.chartY : void 0),
      n$ = (e, t) => ("centric" === t ? e.angle : e.radius);
    e.s(
      [
        "MAX_VALUE_REG",
        () => nz,
        "MIN_VALUE_REG",
        () => nL,
        "appendOffsetOfLegend",
        () => nk,
        "calculateCartesianTooltipPos",
        () => nF,
        "calculatePolarTooltipPos",
        () => n$,
        "getBandSizeOfAxis",
        () => nR,
        "getCateCoordinateOfLine",
        () => nI,
        "getDomainOfStackGroups",
        () => nN,
        "getStackedData",
        () => nD,
        "getTooltipEntry",
        () => nB,
        "getTooltipNameProp",
        () => nU,
        "getValueByDataKey",
        () => nM,
        "isCategoricalAxis",
        () => nT,
      ],
      29225
    );
    var nK = (e) => e.layout.width,
      nW = (e) => e.layout.height,
      nq = (e) => e.layout.scale,
      nY = (e) => e.layout.margin,
      nH = rb(
        (e) => e.cartesianAxis.xAxis,
        (e) => Object.values(e)
      ),
      nV = rb(
        (e) => e.cartesianAxis.yAxis,
        (e) => Object.values(e)
      ),
      nX = "data-recharts-item-index",
      nG = "data-recharts-item-id";
    function nZ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function nQ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nZ(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nZ(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(
      [
        "DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME",
        () => nG,
        "DATA_ITEM_INDEX_ATTRIBUTE_NAME",
        () => nX,
        "DEFAULT_Y_AXIS_WIDTH",
        () => 60,
      ],
      41554
    );
    var nJ = rb(
        [
          nK,
          nW,
          nY,
          (e) => e.brush.height,
          function (e) {
            return nV(e).reduce(
              (e, t) =>
                "left" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0
            );
          },
          function (e) {
            return nV(e).reduce(
              (e, t) =>
                "right" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0
            );
          },
          function (e) {
            return nH(e).reduce(
              (e, t) => ("top" !== t.orientation || t.mirror || t.hide ? e : e + t.height),
              0
            );
          },
          function (e) {
            return nH(e).reduce(
              (e, t) => ("bottom" !== t.orientation || t.mirror || t.hide ? e : e + t.height),
              0
            );
          },
          nb,
          (e) => e.legend.size,
        ],
        (e, t, r, n, i, o, a, l, u, c) => {
          var s = { left: (r.left || 0) + i, right: (r.right || 0) + o },
            f = nQ(nQ({}, { top: (r.top || 0) + a, bottom: (r.bottom || 0) + l }), s),
            p = f.bottom;
          f.bottom += n;
          var h = e - (f = nk(f, u, c)).left - f.right,
            d = t - f.top - f.bottom;
          return nQ(
            nQ({ brushBottom: p }, f),
            {},
            { width: Math.max(h, 0), height: Math.max(d, 0) }
          );
        }
      ),
      n0 = rb(nJ, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
      n1 = rb(nK, nW, (e, t) => ({ x: 0, y: 0, width: e, height: t }));
    e.s(
      [
        "selectAxisViewBox",
        () => n1,
        "selectChartOffsetInternal",
        () => nJ,
        "selectChartViewBox",
        () => n0,
      ],
      89587
    );
    var n2 = (0, z.createContext)(null),
      n5 = () => null != (0, z.useContext)(n2);
    e.s(["useIsPanorama", () => n5], 84315);
    var n3 = (e) => e.brush,
      n6 = rb([n3, nJ, nY], (e, t, r) => ({
        height: e.height,
        x: ei(e.x) ? e.x : t.left,
        y: ei(e.y)
          ? e.y
          : t.top + t.height + t.brushBottom - ((null == r ? void 0 : r.bottom) || 0),
        width: ei(e.width) ? e.width : t.width,
      })),
      n8 = e.i(30116),
      n4 = function (e, t) {
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
          n[i - 2] = arguments[i];
        if (
          "u" > typeof console &&
          console.warn &&
          (void 0 === t && console.warn("LogUtils requires an error message argument"), !e)
        )
          if (void 0 === t)
            console.warn(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var o = 0;
            console.warn(t.replace(/%s/g, () => n[o++]));
          }
      },
      n7 = "100%",
      n9 = "100%",
      ie = { width: -1, height: -1 },
      it = (e, t, r) => {
        var { width: n = n7, height: i = n9, aspect: o, maxHeight: a } = r,
          l = en(n) ? e : Number(n),
          u = en(i) ? t : Number(i);
        return (
          o && o > 0 && (l ? (u = l / o) : u && (l = u * o), a && null != u && u > a && (u = a)),
          { calculatedWidth: l, calculatedHeight: u }
        );
      },
      ir = { width: 0, height: 0, overflow: "visible" },
      ii = { width: 0, overflowX: "visible" },
      io = { height: 0, overflowY: "visible" },
      ia = {};
    function il() {
      return (il = Object.assign.bind()).apply(null, arguments);
    }
    function iu(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ic(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? iu(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : iu(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var is = (0, z.createContext)(ie);
    function ip(e) {
      var { children: t, width: r, height: n } = e,
        i = (0, z.useMemo)(() => ({ width: r, height: n }), [r, n]);
      return ez(i.width) && ez(i.height) ? z.createElement(is.Provider, { value: i }, t) : null;
    }
    var ih = () => (0, z.useContext)(is),
      id = (0, z.forwardRef)((e, t) => {
        var {
            aspect: r,
            initialDimension: n = ie,
            width: i,
            height: o,
            minWidth: a = 0,
            minHeight: l,
            maxHeight: u,
            children: c,
            debounce: s = 0,
            id: f,
            className: p,
            onResize: h,
            style: d = {},
          } = e,
          y = (0, z.useRef)(null),
          v = (0, z.useRef)();
        ((v.current = h), (0, z.useImperativeHandle)(t, () => y.current));
        var [g, m] = (0, z.useState)({ containerWidth: n.width, containerHeight: n.height }),
          b = (0, z.useCallback)((e, t) => {
            m((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, z.useEffect)(() => {
          if (null == y.current || "u" < typeof ResizeObserver) return ey;
          var e = (e) => {
            var t,
              r = e[0];
            if (null != r) {
              var { width: n, height: i } = r.contentRect;
              (b(n, i), null == (t = v.current) || t.call(v, n, i));
            }
          };
          s > 0 && (e = (0, n8.default)(e, s, { trailing: !0, leading: !1 }));
          var t = new ResizeObserver(e),
            { width: r, height: n } = y.current.getBoundingClientRect();
          return (
            b(r, n),
            t.observe(y.current),
            () => {
              t.disconnect();
            }
          );
        }, [b, s]);
        var { containerWidth: x, containerHeight: w } = g;
        n4(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var { calculatedWidth: O, calculatedHeight: S } = it(x, w, {
          width: i,
          height: o,
          aspect: r,
          maxHeight: u,
        });
        return (
          n4(
            (null != O && O > 0) || (null != S && S > 0),
            "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
            O,
            S,
            i,
            o,
            a,
            l,
            r
          ),
          z.createElement(
            "div",
            {
              id: f ? "".concat(f) : void 0,
              className: (0, R.clsx)("recharts-responsive-container", p),
              style: ic(
                ic({}, d),
                {},
                { width: i, height: o, minWidth: a, minHeight: l, maxHeight: u }
              ),
              ref: y,
            },
            z.createElement(
              "div",
              {
                style: ((e) => {
                  var { width: t, height: r } = e,
                    n = en(t),
                    i = en(r);
                  return n && i ? ir : n ? ii : i ? io : ia;
                })({ width: i, height: o }),
              },
              z.createElement(ip, { width: O, height: S }, c)
            )
          )
        );
      }),
      iy = (0, z.forwardRef)((e, t) => {
        var r = ih();
        if (ez(r.width) && ez(r.height)) return e.children;
        var { width: n, height: i } = (function (e) {
            var { width: t, height: r, aspect: n } = e,
              i = t,
              o = r;
            return (
              void 0 === i && void 0 === o
                ? ((i = n7), (o = n9))
                : void 0 === i
                  ? (i = n && n > 0 ? void 0 : n7)
                  : void 0 === o && (o = n && n > 0 ? void 0 : n9),
              { width: i, height: o }
            );
          })({ width: e.width, height: e.height, aspect: e.aspect }),
          { calculatedWidth: o, calculatedHeight: a } = it(void 0, void 0, {
            width: n,
            height: i,
            aspect: e.aspect,
            maxHeight: e.maxHeight,
          });
        return ei(o) && ei(a)
          ? z.createElement(ip, { width: o, height: a }, e.children)
          : z.createElement(id, il({}, e, { width: n, height: i, ref: t }));
      });
    function iv(e) {
      if (e)
        return {
          x: e.x,
          y: e.y,
          upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
          lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
          width: e.width,
          height: e.height,
        };
    }
    e.s(["ResponsiveContainer", () => iy, "useResponsiveContainerContext", () => ih], 55895);
    var ig = () => {
        var e,
          t = n5(),
          r = tt(n0),
          n = tt(n6),
          i = null == (e = tt(n3)) ? void 0 : e.padding;
        return t && n && i
          ? {
              width: n.width - i.left - i.right,
              height: n.height - i.top - i.bottom,
              x: i.left,
              y: i.top,
            }
          : r;
      },
      im = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 },
      ib = () => {
        var e;
        return null != (e = tt(nJ)) ? e : im;
      },
      ix = () => tt(nK),
      iw = () => tt(nW),
      iO = (e) => e.layout.layoutType,
      iS = () => tt(iO),
      iP = () => {
        var e = iS();
        if ("horizontal" === e || "vertical" === e) return e;
      },
      iA = (e) => {
        var t = e.layout.layoutType;
        if ("centric" === t || "radial" === t) return t;
      },
      ij = () => void 0 !== iS(),
      iE = (e) => {
        var t = e4(),
          r = n5(),
          { width: n, height: i } = e,
          o = ih(),
          a = n,
          l = i;
        return (
          o && ((a = o.width > 0 ? o.width : n), (l = o.height > 0 ? o.height : i)),
          (0, z.useEffect)(() => {
            !r && ez(a) && ez(l) && t(ny({ width: a, height: l }));
          }, [t, r, a, l]),
          null
        );
      };
    e.s(
      [
        "ReportChartSize",
        () => iE,
        "cartesianViewBoxToTrapezoid",
        () => iv,
        "selectChartLayout",
        () => iO,
        "selectPolarChartLayout",
        () => iA,
        "useCartesianChartLayout",
        () => iP,
        "useChartHeight",
        () => iw,
        "useChartLayout",
        () => iS,
        "useChartWidth",
        () => ix,
        "useIsInChartContext",
        () => ij,
        "useOffsetInternal",
        () => ib,
        "useViewBox",
        () => ig,
      ],
      92694
    );
    var i_ = {
      grid: -100,
      barBackground: -50,
      area: 100,
      cursorRectangle: 200,
      bar: 300,
      line: 400,
      axis: 500,
      scatter: 600,
      activeBar: 1e3,
      cursorLine: 1100,
      activeDot: 1200,
      label: 2e3,
    };
    e.s(["DefaultZIndexes", () => i_], 51381);
    var iM = {
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        allowDataOverflow: !1,
        angle: 0,
        angleAxisId: 0,
        axisLine: !0,
        axisLineType: "polygon",
        cx: 0,
        cy: 0,
        hide: !1,
        includeHidden: !1,
        label: !1,
        orientation: "outer",
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickLine: !0,
        tickSize: 8,
        type: "auto",
        zIndex: i_.axis,
      },
      ik = {
        allowDataOverflow: !1,
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        angle: 0,
        axisLine: !0,
        includeHidden: !1,
        hide: !1,
        label: !1,
        orientation: "right",
        radiusAxisId: 0,
        reversed: !1,
        scale: "auto",
        stroke: "#ccc",
        tick: !0,
        tickCount: 5,
        tickLine: !0,
        type: "auto",
        zIndex: i_.axis,
      },
      iT = (e, t) => {
        if (e && t) return null != e && e.reversed ? [t[1], t[0]] : t;
      };
    function iC(e, t, r) {
      return "auto" !== r ? r : null != e ? (nT(e, t) ? "category" : "number") : void 0;
    }
    function iD(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function iI(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? iD(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : iD(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(["getAxisTypeBasedOnLayout", () => iC], 70731);
    var iN = {
        allowDataOverflow: iM.allowDataOverflow,
        allowDecimals: iM.allowDecimals,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        domain: void 0,
        id: iM.angleAxisId,
        includeHidden: !1,
        name: void 0,
        reversed: iM.reversed,
        scale: iM.scale,
        tick: iM.tick,
        tickCount: void 0,
        ticks: void 0,
        type: iM.type,
        unit: void 0,
      },
      iL = {
        allowDataOverflow: ik.allowDataOverflow,
        allowDecimals: ik.allowDecimals,
        allowDuplicatedCategory: ik.allowDuplicatedCategory,
        dataKey: void 0,
        domain: void 0,
        id: ik.radiusAxisId,
        includeHidden: ik.includeHidden,
        name: void 0,
        reversed: ik.reversed,
        scale: ik.scale,
        tick: ik.tick,
        tickCount: ik.tickCount,
        ticks: void 0,
        type: ik.type,
        unit: void 0,
      },
      iz = rb(
        [
          (e, t) => {
            if (null != t) return e.polarAxis.angleAxis[t];
          },
          iA,
        ],
        (e, t) => {
          if (null != e) return e;
          var r,
            n = null != (r = iC(t, "angleAxis", iN.type)) ? r : "category";
          return iI(iI({}, iN), {}, { type: n });
        }
      ),
      iR = rb([(e, t) => e.polarAxis.radiusAxis[t], iA], (e, t) => {
        if (null != e) return e;
        var r,
          n = null != (r = iC(t, "radiusAxis", iL.type)) ? r : "category";
        return iI(iI({}, iL), {}, { type: n });
      }),
      iB = (e) => e.polarOptions,
      iU = rb([nK, nW, nJ], e2),
      iF = rb([iB, iU], (e, t) => {
        if (null != e) return eu(e.innerRadius, t, 0);
      }),
      i$ = rb([iB, iU], (e, t) => {
        if (null != e) return eu(e.outerRadius, t, 0.8 * t);
      }),
      iK = rb([iB], (e) => {
        if (null == e) return [0, 0];
        var { startAngle: t, endAngle: r } = e;
        return [t, r];
      });
    rb([iz, iK], iT);
    var iW = rb([iU, iF, i$], (e, t, r) => {
      if (null != e && null != t && null != r) return [t, r];
    });
    rb([iR, iW], iT);
    var iq = rb([iO, iB, iF, i$, nK, nW], (e, t, r, n, i, o) => {
        if (("centric" === e || "radial" === e) && null != t && null != r && null != n) {
          var { cx: a, cy: l, startAngle: u, endAngle: c } = t;
          return {
            cx: eu(a, i, i / 2),
            cy: eu(l, o, o / 2),
            innerRadius: r,
            outerRadius: n,
            startAngle: u,
            endAngle: c,
            clockWise: !1,
          };
        }
      }),
      iY = e.i(90761);
    function iH(e, t) {
      return (
        (!!(Array.isArray(e) && Array.isArray(t)) && 0 === e.length && 0 === t.length) || e === t
      );
    }
    var iV = rb(
        (e) => e.zIndex.zIndexMap,
        (e, t) => t,
        (e, t, r) => r,
        (e, t, r) => {
          if (null != t) {
            var n = e[t];
            if (null != n) return r ? n.panoramaElement : n.element;
          }
        }
      ),
      iX = rb(
        (e) => e.zIndex.zIndexMap,
        (e) =>
          Array.from(
            new Set(
              Object.keys(e)
                .map((e) => parseInt(e, 10))
                .concat(Object.values(i_))
            )
          ).sort((e, t) => e - t),
        {
          memoizeOptions: {
            resultEqualityCheck: function (e, t) {
              if (e.length === t.length) {
                for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                return !0;
              }
              return !1;
            },
          },
        }
      ),
      iG = Symbol.for("immer-nothing"),
      iZ = Symbol.for("immer-draftable"),
      iQ = Symbol.for("immer-state");
    function iJ(e) {
      throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
    }
    var i0 = Object.getPrototypeOf;
    function i1(e) {
      return !!e && !!e[iQ];
    }
    function i2(e) {
      return (
        !!e && (i6(e) || Array.isArray(e) || !!e[iZ] || !!e.constructor?.[iZ] || oe(e) || ot(e))
      );
    }
    var i5 = Object.prototype.constructor.toString(),
      i3 = new WeakMap();
    function i6(e) {
      if (!e || "object" != typeof e) return !1;
      let t = Object.getPrototypeOf(e);
      if (null === t || t === Object.prototype) return !0;
      let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      if (r === Object) return !0;
      if ("function" != typeof r) return !1;
      let n = i3.get(r);
      return (void 0 === n && ((n = Function.toString.call(r)), i3.set(r, n)), n === i5);
    }
    function i8(e, t, r = !0) {
      0 === i4(e)
        ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
            t(r, e[r], e);
          })
        : e.forEach((r, n) => t(n, r, e));
    }
    function i4(e) {
      let t = e[iQ];
      return t ? t.type_ : Array.isArray(e) ? 1 : oe(e) ? 2 : 3 * !!ot(e);
    }
    function i7(e, t) {
      return 2 === i4(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
    }
    function i9(e, t, r) {
      let n = i4(e);
      2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
    }
    function oe(e) {
      return e instanceof Map;
    }
    function ot(e) {
      return e instanceof Set;
    }
    function or(e) {
      return e.copy_ || e.base_;
    }
    function on(e, t) {
      if (oe(e)) return new Map(e);
      if (ot(e)) return new Set(e);
      if (Array.isArray(e)) return Array.prototype.slice.call(e);
      let r = i6(e);
      if (!0 !== t && ("class_only" !== t || r)) {
        let t = i0(e);
        return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
      }
      {
        let t = Object.getOwnPropertyDescriptors(e);
        delete t[iQ];
        let r = Reflect.ownKeys(t);
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            o = t[i];
          (!1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[i] = { configurable: !0, writable: !0, enumerable: o.enumerable, value: e[i] }));
        }
        return Object.create(i0(e), t);
      }
    }
    function oi(e, t = !1) {
      return (
        oa(e) ||
          i1(e) ||
          !i2(e) ||
          (i4(e) > 1 && Object.defineProperties(e, { set: oo, add: oo, clear: oo, delete: oo }),
          Object.freeze(e),
          t && Object.values(e).forEach((e) => oi(e, !0))),
        e
      );
    }
    var oo = {
      value: function () {
        iJ(2);
      },
    };
    function oa(e) {
      return null === e || "object" != typeof e || Object.isFrozen(e);
    }
    var ol = {};
    function ou(e) {
      let t = ol[e];
      return (t || iJ(0, e), t);
    }
    function oc(e, t) {
      t && (ou("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
    }
    function os(e) {
      (of(e), e.drafts_.forEach(oh), (e.drafts_ = null));
    }
    function of(e) {
      e === a && (a = e.parent_);
    }
    function op(e) {
      return (a = {
        drafts_: [],
        parent_: a,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
      });
    }
    function oh(e) {
      let t = e[iQ];
      0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
    }
    function od(e, t) {
      t.unfinalizedDrafts_ = t.drafts_.length;
      let r = t.drafts_[0];
      return (
        void 0 !== e && e !== r
          ? (r[iQ].modified_ && (os(t), iJ(4)),
            i2(e) && ((e = oy(t, e)), t.parent_ || og(t, e)),
            t.patches_ &&
              ou("Patches").generateReplacementPatches_(
                r[iQ].base_,
                e,
                t.patches_,
                t.inversePatches_
              ))
          : (e = oy(t, r, [])),
        os(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== iG ? e : void 0
      );
    }
    function oy(e, t, r) {
      if (oa(t)) return t;
      let n = e.immer_.shouldUseStrictIteration(),
        i = t[iQ];
      if (!i) return (i8(t, (n, o) => ov(e, i, t, n, o, r), n), t);
      if (i.scope_ !== e) return t;
      if (!i.modified_) return (og(e, i.base_, !0), i.base_);
      if (!i.finalized_) {
        ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
        let t = i.copy_,
          o = t,
          a = !1;
        (3 === i.type_ && ((o = new Set(t)), t.clear(), (a = !0)),
          i8(o, (n, o) => ov(e, i, t, n, o, r, a), n),
          og(e, t, !1),
          r && e.patches_ && ou("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_));
      }
      return i.copy_;
    }
    function ov(e, t, r, n, i, o, a) {
      if (null == i || ("object" != typeof i && !a)) return;
      let l = oa(i);
      if (!l || a) {
        if (i1(i)) {
          let a = oy(e, i, o && t && 3 !== t.type_ && !i7(t.assigned_, n) ? o.concat(n) : void 0);
          if ((i9(r, n, a), !i1(a))) return;
          e.canAutoFreeze_ = !1;
        } else a && r.add(i);
        if (i2(i) && !l) {
          if (
            (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
            (t && t.base_ && t.base_[n] === i && l)
          )
            return;
          (oy(e, i),
            (!t || !t.scope_.parent_) &&
              "symbol" != typeof n &&
              (oe(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) &&
              og(e, i));
        }
      }
    }
    function og(e, t, r = !1) {
      !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && oi(t, r);
    }
    var om = {
        get(e, t) {
          if (t === iQ) return e;
          let r = or(e);
          if (!i7(r, t)) {
            var n;
            let i;
            return (
              (n = e),
              (i = ow(r, t)) ? ("value" in i ? i.value : i.get?.call(n.draft_)) : void 0
            );
          }
          let i = r[t];
          return e.finalized_ || !i2(i)
            ? i
            : i === ox(e.base_, t)
              ? (oS(e), (e.copy_[t] = oA(i, e)))
              : i;
        },
        has: (e, t) => t in or(e),
        ownKeys: (e) => Reflect.ownKeys(or(e)),
        set(e, t, r) {
          let n = ow(or(e), t);
          if (n?.set) return (n.set.call(e.draft_, r), !0);
          if (!e.modified_) {
            let n = ox(or(e), t),
              i = n?.[iQ];
            if (i && i.base_ === r) return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
            if (
              (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
              (void 0 !== r || i7(e.base_, t))
            )
              return !0;
            (oS(e), oO(e));
          }
          return (
            !!(
              (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            ) || ((e.copy_[t] = r), (e.assigned_[t] = !0), !0)
          );
        },
        deleteProperty: (e, t) => (
          void 0 !== ox(e.base_, t) || t in e.base_
            ? ((e.assigned_[t] = !1), oS(e), oO(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        ),
        getOwnPropertyDescriptor(e, t) {
          let r = or(e),
            n = Reflect.getOwnPropertyDescriptor(r, t);
          return n
            ? {
                writable: !0,
                configurable: 1 !== e.type_ || "length" !== t,
                enumerable: n.enumerable,
                value: r[t],
              }
            : n;
        },
        defineProperty() {
          iJ(11);
        },
        getPrototypeOf: (e) => i0(e.base_),
        setPrototypeOf() {
          iJ(12);
        },
      },
      ob = {};
    function ox(e, t) {
      let r = e[iQ];
      return (r ? or(r) : e)[t];
    }
    function ow(e, t) {
      if (!(t in e)) return;
      let r = i0(e);
      for (; r; ) {
        let e = Object.getOwnPropertyDescriptor(r, t);
        if (e) return e;
        r = i0(r);
      }
    }
    function oO(e) {
      !e.modified_ && ((e.modified_ = !0), e.parent_ && oO(e.parent_));
    }
    function oS(e) {
      e.copy_ || (e.copy_ = on(e.base_, e.scope_.immer_.useStrictShallowCopy_));
    }
    (i8(om, (e, t) => {
      ob[e] = function () {
        return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
      };
    }),
      (ob.deleteProperty = function (e, t) {
        return ob.set.call(this, e, t, void 0);
      }),
      (ob.set = function (e, t, r) {
        return om.set.call(this, e[0], t, r, e[0]);
      }));
    var oP = class {
      constructor(e) {
        ((this.autoFreeze_ = !0),
          (this.useStrictShallowCopy_ = !1),
          (this.useStrictIteration_ = !0),
          (this.produce = (e, t, r) => {
            let n;
            if ("function" == typeof e && "function" != typeof t) {
              let r = t;
              t = e;
              let n = this;
              return function (e = r, ...i) {
                return n.produce(e, (e) => t.call(this, e, ...i));
              };
            }
            if (
              ("function" != typeof t && iJ(6),
              void 0 !== r && "function" != typeof r && iJ(7),
              i2(e))
            ) {
              let i = op(this),
                o = oA(e, void 0),
                a = !0;
              try {
                ((n = t(o)), (a = !1));
              } finally {
                a ? os(i) : of(i);
              }
              return (oc(i, r), od(n, i));
            }
            if (e && "object" == typeof e) iJ(1, e);
            else {
              if (
                (void 0 === (n = t(e)) && (n = e),
                n === iG && (n = void 0),
                this.autoFreeze_ && oi(n, !0),
                r)
              ) {
                let t = [],
                  i = [];
                (ou("Patches").generateReplacementPatches_(e, n, t, i), r(t, i));
              }
              return n;
            }
          }),
          (this.produceWithPatches = (e, t) => {
            let r, n;
            return "function" == typeof e
              ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
              : [
                  this.produce(e, t, (e, t) => {
                    ((r = e), (n = t));
                  }),
                  r,
                  n,
                ];
          }),
          "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
          "boolean" == typeof e?.useStrictShallowCopy &&
            this.setUseStrictShallowCopy(e.useStrictShallowCopy),
          "boolean" == typeof e?.useStrictIteration &&
            this.setUseStrictIteration(e.useStrictIteration));
      }
      createDraft(e) {
        var t;
        (i2(e) || iJ(8),
          i1(e) &&
            (i1((t = e)) || iJ(10, t),
            (e = (function e(t) {
              let r;
              if (!i2(t) || oa(t)) return t;
              let n = t[iQ],
                i = !0;
              if (n) {
                if (!n.modified_) return n.base_;
                ((n.finalized_ = !0),
                  (r = on(t, n.scope_.immer_.useStrictShallowCopy_)),
                  (i = n.scope_.immer_.shouldUseStrictIteration()));
              } else r = on(t, !0);
              return (
                i8(
                  r,
                  (t, n) => {
                    i9(r, t, e(n));
                  },
                  i
                ),
                n && (n.finalized_ = !1),
                r
              );
            })(t))));
        let r = op(this),
          n = oA(e, void 0);
        return ((n[iQ].isManual_ = !0), of(r), n);
      }
      finishDraft(e, t) {
        let r = e && e[iQ];
        (r && r.isManual_) || iJ(9);
        let { scope_: n } = r;
        return (oc(n, t), od(void 0, n));
      }
      setAutoFreeze(e) {
        this.autoFreeze_ = e;
      }
      setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
      }
      setUseStrictIteration(e) {
        this.useStrictIteration_ = e;
      }
      shouldUseStrictIteration() {
        return this.useStrictIteration_;
      }
      applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
          let n = t[r];
          if (0 === n.path.length && "replace" === n.op) {
            e = n.value;
            break;
          }
        }
        r > -1 && (t = t.slice(r + 1));
        let n = ou("Patches").applyPatches_;
        return i1(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
      }
    };
    function oA(e, t) {
      let r = oe(e)
        ? ou("MapSet").proxyMap_(e, t)
        : ot(e)
          ? ou("MapSet").proxySet_(e, t)
          : (function (e, t) {
              let r = Array.isArray(e),
                n = {
                  type_: +!!r,
                  scope_: t ? t.scope_ : a,
                  modified_: !1,
                  finalized_: !1,
                  assigned_: {},
                  parent_: t,
                  base_: e,
                  draft_: null,
                  copy_: null,
                  revoke_: null,
                  isManual_: !1,
                },
                i = n,
                o = om;
              r && ((i = [n]), (o = ob));
              let { revoke: l, proxy: u } = Proxy.revocable(i, o);
              return ((n.draft_ = u), (n.revoke_ = l), u);
            })(e, t);
      return ((t ? t.scope_ : a).drafts_.push(r), r);
    }
    function oj(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function oE(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? oj(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oj(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    new oP().produce;
    var o_ = {
        zIndexMap: Object.values(i_).reduce(
          (e, t) =>
            oE(oE({}, e), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }),
          {}
        ),
      },
      oM = new Set(Object.values(i_)),
      ok = rK({
        name: "zIndex",
        initialState: o_,
        reducers: {
          registerZIndexPortal: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r]
                ? (e.zIndexMap[r].consumers += 1)
                : (e.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 });
            },
            prepare: rz(),
          },
          unregisterZIndexPortal: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r] &&
                ((e.zIndexMap[r].consumers -= 1),
                e.zIndexMap[r].consumers <= 0 && !oM.has(r) && delete e.zIndexMap[r]);
            },
            prepare: rz(),
          },
          registerZIndexPortalElement: {
            reducer: (e, t) => {
              var { zIndex: r, element: n, isPanorama: i } = t.payload;
              e.zIndexMap[r]
                ? i
                  ? (e.zIndexMap[r].panoramaElement = n)
                  : (e.zIndexMap[r].element = n)
                : (e.zIndexMap[r] = {
                    consumers: 0,
                    element: i ? void 0 : n,
                    panoramaElement: i ? n : void 0,
                  });
            },
            prepare: rz(),
          },
          unregisterZIndexPortalElement: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r] &&
                (t.payload.isPanorama
                  ? (e.zIndexMap[r].panoramaElement = void 0)
                  : (e.zIndexMap[r].element = void 0));
            },
            prepare: rz(),
          },
        },
      }),
      {
        registerZIndexPortal: oT,
        unregisterZIndexPortal: oC,
        registerZIndexPortalElement: oD,
        unregisterZIndexPortalElement: oI,
      } = ok.actions,
      oN = ok.reducer;
    function oL(e) {
      var { zIndex: t, children: r } = e,
        n = ij() && void 0 !== t && 0 !== t,
        i = n5(),
        o = e4();
      (0, z.useLayoutEffect)(
        () =>
          n
            ? (o(oT({ zIndex: t })),
              () => {
                o(oC({ zIndex: t }));
              })
            : ey,
        [o, t, n]
      );
      var a = tt((e) => iV(e, t, i));
      return n ? (a ? (0, iY.createPortal)(r, a) : null) : r;
    }
    function oz(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function oR(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? oz(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oz(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(["ZIndexLayer", () => oL], 47612);
    var oB = ["labelRef"],
      oU = ["content"];
    function oF(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    function o$(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function oK(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? o$(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o$(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function oW() {
      return (oW = Object.assign.bind()).apply(null, arguments);
    }
    var oq = (0, z.createContext)(null),
      oY = (e) => {
        var { x: t, y: r, upperWidth: n, lowerWidth: i, width: o, height: a, children: l } = e,
          u = (0, z.useMemo)(
            () => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: o, height: a }),
            [t, r, n, i, o, a]
          );
        return z.createElement(oq.Provider, { value: u }, l);
      },
      oH = () => {
        var e = (0, z.useContext)(oq),
          t = ig();
        return e || (t ? iv(t) : void 0);
      },
      oV = (0, z.createContext)(null),
      oX = (e) => null != e && "function" == typeof e,
      oG = (e) => null != e && "cx" in e && ei(e.cx),
      oZ = { angle: 0, offset: 5, zIndex: i_.label, position: "middle", textBreakAll: !1 };
    function oQ(e) {
      var t,
        r,
        n,
        i,
        o,
        a = eN(e, oZ),
        {
          viewBox: l,
          parentViewBox: u,
          position: c,
          value: s,
          children: f,
          content: p,
          className: h = "",
          textBreakAll: d,
          labelRef: y,
        } = a,
        v = ((t = (0, z.useContext)(oV)), (r = tt(iq)), t || r),
        g = oH(),
        m = (function (e) {
          if (!oG(e)) return e;
          var { cx: t, cy: r, outerRadius: n } = e,
            i = 2 * n;
          return { x: t - n, y: r - n, width: i, upperWidth: i, lowerWidth: i, height: i };
        })((n = null == l ? ("center" === c ? g : null != v ? v : g) : oG(l) ? l : iv(l)));
      if (!n || (ep(s) && ep(f) && !(0, z.isValidElement)(p) && "function" != typeof p))
        return null;
      var b = oK(oK({}, a), {}, { viewBox: n });
      if ((0, z.isValidElement)(p)) {
        var { labelRef: x } = b,
          w = oF(b, oB);
        return (0, z.cloneElement)(p, w);
      }
      if ("function" == typeof p) {
        var { content: O } = b,
          S = oF(b, oU);
        if (((i = (0, z.createElement)(p, S)), (0, z.isValidElement)(i))) return i;
      } else
        i = ((e) => {
          var { value: t, formatter: r } = e,
            n = ep(e.children) ? t : e.children;
          return "function" == typeof r ? r(n) : n;
        })(a);
      var P = Y(a);
      if (oG(n)) {
        if ("insideStart" === c || "insideEnd" === c || "end" === c)
          return ((e, t, r, n, i) => {
            var o,
              a,
              { offset: l, className: u } = e,
              {
                cx: c,
                cy: s,
                innerRadius: f,
                outerRadius: p,
                startAngle: h,
                endAngle: d,
                clockWise: y,
              } = i,
              v = (f + p) / 2,
              g = et(d - h) * Math.min(Math.abs(d - h), 360),
              m = g >= 0 ? 1 : -1;
            switch (t) {
              case "insideStart":
                ((o = h + m * l), (a = y));
                break;
              case "insideEnd":
                ((o = d - m * l), (a = !y));
                break;
              case "end":
                ((o = d + m * l), (a = y));
                break;
              default:
                throw Error("Unsupported position ".concat(t));
            }
            a = g <= 0 ? a : !a;
            var b = e1(c, s, v, o),
              x = e1(c, s, v, o + (a ? 1 : -1) * 359),
              w = "M"
                .concat(b.x, ",")
                .concat(b.y, "\n    A")
                .concat(v, ",")
                .concat(v, ",0,1,")
                .concat(+!a, ",\n    ")
                .concat(x.x, ",")
                .concat(x.y),
              O = ep(e.id) ? el("recharts-radial-line-") : e.id;
            return z.createElement(
              "text",
              oW({}, n, {
                dominantBaseline: "central",
                className: (0, R.clsx)("recharts-radial-bar-label", u),
              }),
              z.createElement("defs", null, z.createElement("path", { id: O, d: w })),
              z.createElement("textPath", { xlinkHref: "#".concat(O) }, r)
            );
          })(a, c, i, P, n);
        o = ((e, t, r) => {
          var { cx: n, cy: i, innerRadius: o, outerRadius: a, startAngle: l, endAngle: u } = e,
            c = (l + u) / 2;
          if ("outside" === r) {
            var { x: s, y: f } = e1(n, i, a + t, c);
            return { x: s, y: f, textAnchor: s >= n ? "start" : "end", verticalAnchor: "middle" };
          }
          if ("center" === r) return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
          if ("centerTop" === r)
            return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
          if ("centerBottom" === r)
            return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
          var { x: p, y: h } = e1(n, i, (o + a) / 2, c);
          return { x: p, y: h, textAnchor: "middle", verticalAnchor: "middle" };
        })(n, a.offset, a.position);
      } else {
        if (!m) return null;
        var A = ((e) => {
          var { viewBox: t, position: r, offset: n = 0, parentViewBox: i, clamp: o } = e,
            { x: a, y: l, height: u, upperWidth: c, lowerWidth: s } = iv(t),
            f = a + (c - s) / 2,
            p = (a + f) / 2,
            h = (c + s) / 2,
            d = u >= 0 ? 1 : -1,
            y = d * n,
            v = d > 0 ? "end" : "start",
            g = d > 0 ? "start" : "end",
            m = c >= 0 ? 1 : -1,
            b = m * n,
            x = m > 0 ? "end" : "start",
            w = m > 0 ? "start" : "end";
          if ("top" === r) {
            var O = { x: a + c / 2, y: l - y, horizontalAnchor: "middle", verticalAnchor: v };
            return (o && i && ((O.height = Math.max(l - i.y, 0)), (O.width = c)), O);
          }
          if ("bottom" === r) {
            var S = { x: f + s / 2, y: l + u + y, horizontalAnchor: "middle", verticalAnchor: g };
            return (
              o && i && ((S.height = Math.max(i.y + i.height - (l + u), 0)), (S.width = s)),
              S
            );
          }
          if ("left" === r) {
            var P = { x: p - b, y: l + u / 2, horizontalAnchor: x, verticalAnchor: "middle" };
            return (o && i && ((P.width = Math.max(P.x - i.x, 0)), (P.height = u)), P);
          }
          if ("right" === r) {
            var A = { x: p + h + b, y: l + u / 2, horizontalAnchor: w, verticalAnchor: "middle" };
            return (o && i && ((A.width = Math.max(i.x + i.width - A.x, 0)), (A.height = u)), A);
          }
          var j = o && i ? { width: h, height: u } : {};
          return "insideLeft" === r
            ? oR({ x: p + b, y: l + u / 2, horizontalAnchor: w, verticalAnchor: "middle" }, j)
            : "insideRight" === r
              ? oR({ x: p + h - b, y: l + u / 2, horizontalAnchor: x, verticalAnchor: "middle" }, j)
              : "insideTop" === r
                ? oR({ x: a + c / 2, y: l + y, horizontalAnchor: "middle", verticalAnchor: g }, j)
                : "insideBottom" === r
                  ? oR(
                      { x: f + s / 2, y: l + u - y, horizontalAnchor: "middle", verticalAnchor: v },
                      j
                    )
                  : "insideTopLeft" === r
                    ? oR({ x: a + b, y: l + y, horizontalAnchor: w, verticalAnchor: g }, j)
                    : "insideTopRight" === r
                      ? oR({ x: a + c - b, y: l + y, horizontalAnchor: x, verticalAnchor: g }, j)
                      : "insideBottomLeft" === r
                        ? oR({ x: f + b, y: l + u - y, horizontalAnchor: w, verticalAnchor: v }, j)
                        : "insideBottomRight" === r
                          ? oR(
                              {
                                x: f + s - b,
                                y: l + u - y,
                                horizontalAnchor: x,
                                verticalAnchor: v,
                              },
                              j
                            )
                          : r &&
                              "object" == typeof r &&
                              (ei(r.x) || en(r.x)) &&
                              (ei(r.y) || en(r.y))
                            ? oR(
                                {
                                  x: a + eu(r.x, h),
                                  y: l + eu(r.y, u),
                                  horizontalAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                j
                              )
                            : oR(
                                {
                                  x: a + c / 2,
                                  y: l + u / 2,
                                  horizontalAnchor: "middle",
                                  verticalAnchor: "middle",
                                },
                                j
                              );
        })({
          viewBox: m,
          position: c,
          offset: a.offset,
          parentViewBox: oG(u) ? void 0 : u,
          clamp: !0,
        });
        o = oK(
          oK(
            { x: A.x, y: A.y, textAnchor: A.horizontalAnchor, verticalAnchor: A.verticalAnchor },
            void 0 !== A.width ? { width: A.width } : {}
          ),
          void 0 !== A.height ? { height: A.height } : {}
        );
      }
      return z.createElement(
        oL,
        { zIndex: a.zIndex },
        z.createElement(
          eZ,
          oW({ ref: y, className: (0, R.clsx)("recharts-label", h) }, P, o, {
            textAnchor: eW(P.textAnchor) ? P.textAnchor : o.textAnchor,
            breakAll: d,
          }),
          i
        )
      );
    }
    function oJ(e) {
      var { label: t, labelRef: r } = e;
      return (
        ((e, t, r) => {
          if (!e) return null;
          var n = { viewBox: t, labelRef: r };
          return !0 === e
            ? z.createElement(oQ, oW({ key: "label-implicit" }, n))
            : eo(e)
              ? z.createElement(oQ, oW({ key: "label-implicit", value: e }, n))
              : (0, z.isValidElement)(e)
                ? e.type === oQ
                  ? (0, z.cloneElement)(e, oK({ key: "label-implicit" }, n))
                  : z.createElement(oQ, oW({ key: "label-implicit", content: e }, n))
                : oX(e)
                  ? z.createElement(oQ, oW({ key: "label-implicit", content: e }, n))
                  : e && "object" == typeof e
                    ? z.createElement(oQ, oW({}, e, { key: "label-implicit" }, n))
                    : null;
        })(t, oH(), r) || null
      );
    }
    ((oQ.displayName = "Label"),
      e.s(
        [
          "CartesianLabelContextProvider",
          () => oY,
          "CartesianLabelFromLabelProp",
          () => oJ,
          "Label",
          () => oQ,
          "isLabelContentAFunction",
          () => oX,
        ],
        45604
      ));
    var o0 = ["valueAccessor"],
      o1 = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
    function o2() {
      return (o2 = Object.assign.bind()).apply(null, arguments);
    }
    function o5(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    var o3 = (e) => (Array.isArray(e.value) ? (0, Z.default)(e.value) : e.value),
      o6 = (0, z.createContext)(void 0),
      o8 = o6.Provider,
      o4 = (0, z.createContext)(void 0),
      o7 = o4.Provider;
    function o9(e) {
      var { valueAccessor: t = o3 } = e,
        r = o5(e, o0),
        { dataKey: n, clockWise: i, id: o, textBreakAll: a, zIndex: l } = r,
        u = o5(r, o1),
        c = (0, z.useContext)(o6),
        s = (0, z.useContext)(o4),
        f = c || s;
      return f && f.length
        ? z.createElement(
            oL,
            { zIndex: null != l ? l : i_.label },
            z.createElement(
              G,
              { className: "recharts-label-list" },
              f.map((e, i) => {
                var l,
                  c = ep(n) ? t(e, i) : nM(e.payload, n),
                  s = ep(o) ? {} : { id: "".concat(o, "-").concat(i) };
                return z.createElement(
                  oQ,
                  o2({ key: "label-".concat(i) }, Y(e), u, s, {
                    fill: null != (l = r.fill) ? l : e.fill,
                    parentViewBox: e.parentViewBox,
                    value: c,
                    textBreakAll: a,
                    viewBox: e.viewBox,
                    index: i,
                    zIndex: 0,
                  })
                );
              })
            )
          )
        : null;
    }
    function ae(e) {
      var { label: t } = e;
      return t
        ? !0 === t
          ? z.createElement(o9, { key: "labelList-implicit" })
          : z.isValidElement(t) || oX(t)
            ? z.createElement(o9, { key: "labelList-implicit", content: t })
            : "object" == typeof t
              ? z.createElement(o9, o2({ key: "labelList-implicit" }, t, { type: String(t.type) }))
              : null
        : null;
    }
    ((o9.displayName = "LabelList"),
      e.s(
        [
          "CartesianLabelListContextProvider",
          () => o8,
          "LabelListFromLabelProp",
          () => ae,
          "PolarLabelListContextProvider",
          () => o7,
        ],
        16145
      ));
    var at = (e) => "radius" in e && "startAngle" in e && "endAngle" in e,
      ar = (e, t) => {
        if (!e || "function" == typeof e || "boolean" == typeof e) return null;
        var r = e;
        if (
          ((0, z.isValidElement)(e) && (r = e.props),
          "object" != typeof r && "function" != typeof r)
        )
          return null;
        var n = {};
        return (
          Object.keys(r).forEach((e) => {
            U(e) && (n[e] = t || ((t) => r[e](r, t)));
          }),
          n
        );
      },
      an = (e, t, r) => {
        if (null === e || ("object" != typeof e && "function" != typeof e)) return null;
        var n = null;
        return (
          Object.keys(e).forEach((i) => {
            var o = e[i];
            U(i) && "function" == typeof o && (n || (n = {}), (n[i] = (e) => (o(t, r, e), null)));
          }),
          n
        );
      };
    function ai() {
      return (ai = Object.assign.bind()).apply(null, arguments);
    }
    e.s(
      [
        "adaptEventHandlers",
        () => ar,
        "adaptEventsOfChild",
        () => an,
        "isPolarCoordinate",
        () => at,
      ],
      41934
    );
    var ao = (e) => {
        var { cx: t, cy: r, r: n, className: i } = e,
          o = (0, R.clsx)("recharts-dot", i);
        return ei(t) && ei(r) && ei(n)
          ? z.createElement("circle", ai({}, W(e), ar(e), { className: o, cx: t, cy: r, r: n }))
          : null;
      },
      aa = e.i(99370),
      al = (e) => ("string" == typeof e ? e : e ? e.displayName || e.name || "Component" : ""),
      au = null,
      ac = null,
      as = (e) => {
        if (e === au && Array.isArray(ac)) return ac;
        var t = [];
        return (
          z.Children.forEach(e, (e) => {
            ep(e) || ((0, aa.isFragment)(e) ? (t = t.concat(as(e.props.children))) : t.push(e));
          }),
          (ac = t),
          (au = e),
          t
        );
      };
    function af(e, t) {
      var r = [],
        n = [];
      return (
        (n = Array.isArray(t) ? t.map((e) => al(e)) : [al(t)]),
        as(e).forEach((e) => {
          var t = (0, Q.default)(e, "type.displayName") || (0, Q.default)(e, "type.name");
          t && -1 !== n.indexOf(t) && r.push(e);
        }),
        r
      );
    }
    var ap = (e) => !e || "object" != typeof e || !("clipDot" in e) || !!e.clipDot;
    e.s(["findAllByType", () => af, "isClipDot", () => ap], 6351);
    var ah = ["points"];
    function ad(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ay(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ad(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ad(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function av() {
      return (av = Object.assign.bind()).apply(null, arguments);
    }
    function ag(e) {
      var { option: t, dotProps: r, className: n } = e;
      if ((0, z.isValidElement)(t)) return (0, z.cloneElement)(t, r);
      if ("function" == typeof t) return t(r);
      var i = (0, R.clsx)(n, "boolean" != typeof t ? t.className : ""),
        o = null != r ? r : {},
        { points: a } = o,
        l = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        })(o, ah);
      return z.createElement(ao, av({}, l, { className: i }));
    }
    function am(e) {
      var {
        points: t,
        dot: r,
        className: n,
        dotClassName: i,
        dataKey: o,
        baseProps: a,
        needClip: l,
        clipPathId: u,
        zIndex: c = i_.scatter,
      } = e;
      if (null == t || (!r && 1 !== t.length)) return null;
      var s = ap(r),
        f = H(r),
        p = t.map((e, n) => {
          var l,
            u,
            c = ay(
              ay(ay({ r: 3 }, a), f),
              {},
              {
                index: n,
                cx: null != (l = e.x) ? l : void 0,
                cy: null != (u = e.y) ? u : void 0,
                dataKey: o,
                value: e.value,
                payload: e.payload,
                points: t,
              }
            );
          return z.createElement(ag, {
            key: "dot-".concat(n),
            option: r,
            dotProps: c,
            className: i,
          });
        }),
        h = {};
      return (
        l && null != u && (h.clipPath = "url(#clipPath-".concat(s ? "" : "dots-").concat(u, ")")),
        z.createElement(oL, { zIndex: c }, z.createElement(G, av({ className: n }, h), p))
      );
    }
    var ab = e.i(33635);
    function ax(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(e);
          break;
        default:
          this.range(t).domain(e);
      }
      return this;
    }
    function aw(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" == typeof e ? this.interpolator(e) : this.range(e);
          break;
        default:
          (this.domain(e), "function" == typeof t ? this.interpolator(t) : this.range(t));
      }
      return this;
    }
    (e.s([], 32859), e.i(32859), e.s([], 41786), e.i(41786));
    class aO extends Map {
      constructor(e, t = aP) {
        if (
          (super(),
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: t } }),
          null != e)
        )
          for (const [t, r] of e) this.set(t, r);
      }
      get(e) {
        return super.get(aS(this, e));
      }
      has(e) {
        return super.has(aS(this, e));
      }
      set(e, t) {
        return super.set(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return e.has(n) ? e.get(n) : (e.set(n, r), r);
          })(this, e),
          t
        );
      }
      delete(e) {
        return super.delete(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
          })(this, e)
        );
      }
    }
    function aS({ _intern: e, _key: t }, r) {
      let n = t(r);
      return e.has(n) ? e.get(n) : r;
    }
    function aP(e) {
      return null !== e && "object" == typeof e ? e.valueOf() : e;
    }
    let aA = Symbol("implicit");
    function aj() {
      var e = new aO(),
        t = [],
        r = [],
        n = aA;
      function i(i) {
        let o = e.get(i);
        if (void 0 === o) {
          if (n !== aA) return n;
          e.set(i, (o = t.push(i) - 1));
        }
        return r[o % r.length];
      }
      return (
        (i.domain = function (r) {
          if (!arguments.length) return t.slice();
          for (let n of ((t = []), (e = new aO()), r)) e.has(n) || e.set(n, t.push(n) - 1);
          return i;
        }),
        (i.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i) : r.slice();
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((n = e), i) : n;
        }),
        (i.copy = function () {
          return aj(t, r).unknown(n);
        }),
        ax.apply(i, arguments),
        i
      );
    }
    function aE() {
      var e,
        t,
        r = aj().unknown(void 0),
        n = r.domain,
        i = r.range,
        o = 0,
        a = 1,
        l = !1,
        u = 0,
        c = 0,
        s = 0.5;
      function f() {
        var r = n().length,
          f = a < o,
          p = f ? a : o,
          h = f ? o : a;
        ((e = (h - p) / Math.max(1, r - u + 2 * c)),
          l && (e = Math.floor(e)),
          (p += (h - p - e * (r - u)) * s),
          (t = e * (1 - u)),
          l && ((p = Math.round(p)), (t = Math.round(t))));
        var d = (function (e, t, r) {
          ((e *= 1),
            (t *= 1),
            (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
          for (var n = -1, i = 0 | Math.max(0, Math.ceil((t - e) / r)), o = Array(i); ++n < i; )
            o[n] = e + n * r;
          return o;
        })(r).map(function (t) {
          return p + e * t;
        });
        return i(f ? d.reverse() : d);
      }
      return (
        delete r.unknown,
        (r.domain = function (e) {
          return arguments.length ? (n(e), f()) : n();
        }),
        (r.range = function (e) {
          return arguments.length ? (([o, a] = e), (o *= 1), (a *= 1), f()) : [o, a];
        }),
        (r.rangeRound = function (e) {
          return (([o, a] = e), (o *= 1), (a *= 1), (l = !0), f());
        }),
        (r.bandwidth = function () {
          return t;
        }),
        (r.step = function () {
          return e;
        }),
        (r.round = function (e) {
          return arguments.length ? ((l = !!e), f()) : l;
        }),
        (r.padding = function (e) {
          return arguments.length ? ((u = Math.min(1, (c = +e))), f()) : u;
        }),
        (r.paddingInner = function (e) {
          return arguments.length ? ((u = Math.min(1, e)), f()) : u;
        }),
        (r.paddingOuter = function (e) {
          return arguments.length ? ((c = +e), f()) : c;
        }),
        (r.align = function (e) {
          return arguments.length ? ((s = Math.max(0, Math.min(1, e))), f()) : s;
        }),
        (r.copy = function () {
          return aE(n(), [o, a]).round(l).paddingInner(u).paddingOuter(c).align(s);
        }),
        ax.apply(f(), arguments)
      );
    }
    function a_() {
      return (function e(t) {
        var r = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return e(r());
          }),
          t
        );
      })(aE.apply(null, arguments).paddingInner(1));
    }
    let aM = Math.sqrt(50),
      ak = Math.sqrt(10),
      aT = Math.sqrt(2);
    function aC(e, t, r) {
      let n,
        i,
        o,
        a = (t - e) / Math.max(0, r),
        l = Math.floor(Math.log10(a)),
        u = a / Math.pow(10, l),
        c = u >= aM ? 10 : u >= ak ? 5 : u >= aT ? 2 : 1;
      return (l < 0
        ? ((n = Math.round(e * (o = Math.pow(10, -l) / c))),
          (i = Math.round(t * o)),
          n / o < e && ++n,
          i / o > t && --i,
          (o = -o))
        : ((n = Math.round(e / (o = Math.pow(10, l) * c))),
          (i = Math.round(t / o)),
          n * o < e && ++n,
          i * o > t && --i),
      i < n && 0.5 <= r && r < 2)
        ? aC(e, t, 2 * r)
        : [n, i, o];
    }
    function aD(e, t, r) {
      if (((t *= 1), (e *= 1), !((r *= 1) > 0))) return [];
      if (e === t) return [e];
      let n = t < e,
        [i, o, a] = n ? aC(t, e, r) : aC(e, t, r);
      if (!(o >= i)) return [];
      let l = o - i + 1,
        u = Array(l);
      if (n)
        if (a < 0) for (let e = 0; e < l; ++e) u[e] = -((o - e) / a);
        else for (let e = 0; e < l; ++e) u[e] = (o - e) * a;
      else if (a < 0) for (let e = 0; e < l; ++e) u[e] = -((i + e) / a);
      else for (let e = 0; e < l; ++e) u[e] = (i + e) * a;
      return u;
    }
    function aI(e, t, r) {
      return aC((e *= 1), (t *= 1), (r *= 1))[2];
    }
    function aN(e, t, r) {
      ((t *= 1), (e *= 1), (r *= 1));
      let n = t < e,
        i = n ? aI(t, e, r) : aI(e, t, r);
      return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
    }
    function aL(e, t) {
      return null == e || null == t ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }
    function az(e, t) {
      return null == e || null == t ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    function aR(e) {
      let t, r, n;
      function i(e, n, o = 0, a = e.length) {
        if (o < a) {
          if (0 !== t(n, n)) return a;
          do {
            let t = (o + a) >>> 1;
            0 > r(e[t], n) ? (o = t + 1) : (a = t);
          } while (o < a);
        }
        return o;
      }
      return (
        2 !== e.length
          ? ((t = aL), (r = (t, r) => aL(e(t), r)), (n = (t, r) => e(t) - r))
          : ((t = e === aL || e === az ? e : aB), (r = e), (n = e)),
        {
          left: i,
          center: function (e, t, r = 0, o = e.length) {
            let a = i(e, t, r, o - 1);
            return a > r && n(e[a - 1], t) > -n(e[a], t) ? a - 1 : a;
          },
          right: function (e, n, i = 0, o = e.length) {
            if (i < o) {
              if (0 !== t(n, n)) return o;
              do {
                let t = (i + o) >>> 1;
                0 >= r(e[t], n) ? (i = t + 1) : (o = t);
              } while (i < o);
            }
            return i;
          },
        }
      );
    }
    function aB() {
      return 0;
    }
    function aU(e) {
      return null === e ? NaN : +e;
    }
    let aF = aR(aL),
      a$ = aF.right;
    function aK(e, t, r) {
      ((e.prototype = t.prototype = r), (r.constructor = e));
    }
    function aW(e, t) {
      var r = Object.create(e.prototype);
      for (var n in t) r[n] = t[n];
      return r;
    }
    function aq() {}
    (aF.left, aR(aU).center);
    var aY = "\\s*([+-]?\\d+)\\s*",
      aH = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      aV = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      aX = /^#([0-9a-f]{3,8})$/,
      aG = RegExp(`^rgb\\(${aY},${aY},${aY}\\)$`),
      aZ = RegExp(`^rgb\\(${aV},${aV},${aV}\\)$`),
      aQ = RegExp(`^rgba\\(${aY},${aY},${aY},${aH}\\)$`),
      aJ = RegExp(`^rgba\\(${aV},${aV},${aV},${aH}\\)$`),
      a0 = RegExp(`^hsl\\(${aH},${aV},${aV}\\)$`),
      a1 = RegExp(`^hsla\\(${aH},${aV},${aV},${aH}\\)$`),
      a2 = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
      };
    function a5() {
      return this.rgb().formatHex();
    }
    function a3() {
      return this.rgb().formatRgb();
    }
    function a6(e) {
      var t, r;
      return (
        (e = (e + "").trim().toLowerCase()),
        (t = aX.exec(e))
          ? ((r = t[1].length),
            (t = parseInt(t[1], 16)),
            6 === r
              ? a8(t)
              : 3 === r
                ? new a9(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1
                  )
                : 8 === r
                  ? a4((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
                  : 4 === r
                    ? a4(
                        ((t >> 12) & 15) | ((t >> 8) & 240),
                        ((t >> 8) & 15) | ((t >> 4) & 240),
                        ((t >> 4) & 15) | (240 & t),
                        (((15 & t) << 4) | (15 & t)) / 255
                      )
                    : null)
          : (t = aG.exec(e))
            ? new a9(t[1], t[2], t[3], 1)
            : (t = aZ.exec(e))
              ? new a9((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
              : (t = aQ.exec(e))
                ? a4(t[1], t[2], t[3], t[4])
                : (t = aJ.exec(e))
                  ? a4((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
                  : (t = a0.exec(e))
                    ? lo(t[1], t[2] / 100, t[3] / 100, 1)
                    : (t = a1.exec(e))
                      ? lo(t[1], t[2] / 100, t[3] / 100, t[4])
                      : a2.hasOwnProperty(e)
                        ? a8(a2[e])
                        : "transparent" === e
                          ? new a9(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function a8(e) {
      return new a9((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
    }
    function a4(e, t, r, n) {
      return (n <= 0 && (e = t = r = NaN), new a9(e, t, r, n));
    }
    function a7(e, t, r, n) {
      var i;
      return 1 == arguments.length
        ? ((i = e) instanceof aq || (i = a6(i)), i)
          ? new a9((i = i.rgb()).r, i.g, i.b, i.opacity)
          : new a9()
        : new a9(e, t, r, null == n ? 1 : n);
    }
    function a9(e, t, r, n) {
      ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
    }
    function le() {
      return `#${li(this.r)}${li(this.g)}${li(this.b)}`;
    }
    function lt() {
      let e = lr(this.opacity);
      return `${1 === e ? "rgb(" : "rgba("}${ln(this.r)}, ${ln(this.g)}, ${ln(this.b)}${1 === e ? ")" : `, ${e})`}`;
    }
    function lr(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
    }
    function ln(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0));
    }
    function li(e) {
      return ((e = ln(e)) < 16 ? "0" : "") + e.toString(16);
    }
    function lo(e, t, r, n) {
      return (
        n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
        new ll(e, t, r, n)
      );
    }
    function la(e) {
      if (e instanceof ll) return new ll(e.h, e.s, e.l, e.opacity);
      if ((e instanceof aq || (e = a6(e)), !e)) return new ll();
      if (e instanceof ll) return e;
      var t = (e = e.rgb()).r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        o = Math.max(t, r, n),
        a = NaN,
        l = o - i,
        u = (o + i) / 2;
      return (
        l
          ? ((a =
              t === o ? (r - n) / l + (r < n) * 6 : r === o ? (n - t) / l + 2 : (t - r) / l + 4),
            (l /= u < 0.5 ? o + i : 2 - o - i),
            (a *= 60))
          : (l = u > 0 && u < 1 ? 0 : a),
        new ll(a, l, u, e.opacity)
      );
    }
    function ll(e, t, r, n) {
      ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
    }
    function lu(e) {
      return (e = (e || 0) % 360) < 0 ? e + 360 : e;
    }
    function lc(e) {
      return Math.max(0, Math.min(1, e || 0));
    }
    function ls(e, t, r) {
      return (
        (e < 60
          ? t + ((r - t) * e) / 60
          : e < 180
            ? r
            : e < 240
              ? t + ((r - t) * (240 - e)) / 60
              : t) * 255
      );
    }
    function lf(e, t, r, n, i) {
      var o = e * e,
        a = o * e;
      return (
        ((1 - 3 * e + 3 * o - a) * t +
          (4 - 6 * o + 3 * a) * r +
          (1 + 3 * e + 3 * o - 3 * a) * n +
          a * i) /
        6
      );
    }
    (aK(aq, a6, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: a5,
      formatHex: a5,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return la(this).formatHsl();
      },
      formatRgb: a3,
      toString: a3,
    }),
      aK(
        a9,
        a7,
        aW(aq, {
          brighter(e) {
            return (
              (e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e)),
              new a9(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new a9(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new a9(ln(this.r), ln(this.g), ln(this.b), lr(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: le,
          formatHex: le,
          formatHex8: function () {
            return `#${li(this.r)}${li(this.g)}${li(this.b)}${li((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
          },
          formatRgb: lt,
          toString: lt,
        })
      ),
      aK(
        ll,
        function (e, t, r, n) {
          return 1 == arguments.length ? la(e) : new ll(e, t, r, null == n ? 1 : n);
        },
        aW(aq, {
          brighter(e) {
            return (
              (e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e)),
              new ll(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new ll(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb() {
            var e = (this.h % 360) + (this.h < 0) * 360,
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              r = this.l,
              n = r + (r < 0.5 ? r : 1 - r) * t,
              i = 2 * r - n;
            return new a9(
              ls(e >= 240 ? e - 240 : e + 120, i, n),
              ls(e, i, n),
              ls(e < 120 ? e + 240 : e - 120, i, n),
              this.opacity
            );
          },
          clamp() {
            return new ll(lu(this.h), lc(this.s), lc(this.l), lr(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let e = lr(this.opacity);
            return `${1 === e ? "hsl(" : "hsla("}${lu(this.h)}, ${100 * lc(this.s)}%, ${100 * lc(this.l)}%${1 === e ? ")" : `, ${e})`}`;
          },
        })
      ));
    let lp = (e) => () => e;
    function lh(e, t) {
      var r = t - e;
      return r
        ? function (t) {
            return e + t * r;
          }
        : lp(isNaN(e) ? t : e);
    }
    let ld = (function e(t) {
      var r,
        n =
          1 == (r = +t)
            ? lh
            : function (e, t) {
                var n, i, o;
                return t - e
                  ? ((n = e),
                    (i = t),
                    (n = Math.pow(n, (o = r))),
                    (i = Math.pow(i, o) - n),
                    (o = 1 / o),
                    function (e) {
                      return Math.pow(n + e * i, o);
                    })
                  : lp(isNaN(e) ? t : e);
              };
      function i(e, t) {
        var r = n((e = a7(e)).r, (t = a7(t)).r),
          i = n(e.g, t.g),
          o = n(e.b, t.b),
          a = lh(e.opacity, t.opacity);
        return function (t) {
          return ((e.r = r(t)), (e.g = i(t)), (e.b = o(t)), (e.opacity = a(t)), e + "");
        };
      }
      return ((i.gamma = e), i);
    })(1);
    function ly(e) {
      return function (t) {
        var r,
          n,
          i = t.length,
          o = Array(i),
          a = Array(i),
          l = Array(i);
        for (r = 0; r < i; ++r)
          ((n = a7(t[r])), (o[r] = n.r || 0), (a[r] = n.g || 0), (l[r] = n.b || 0));
        return (
          (o = e(o)),
          (a = e(a)),
          (l = e(l)),
          (n.opacity = 1),
          function (e) {
            return ((n.r = o(e)), (n.g = a(e)), (n.b = l(e)), n + "");
          }
        );
      };
    }
    function lv(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return e * (1 - r) + t * r;
        }
      );
    }
    (ly(function (e) {
      var t = e.length - 1;
      return function (r) {
        var n = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), t - 1) : Math.floor(r * t),
          i = e[n],
          o = e[n + 1],
          a = n > 0 ? e[n - 1] : 2 * i - o,
          l = n < t - 1 ? e[n + 2] : 2 * o - i;
        return lf((r - n / t) * t, a, i, o, l);
      };
    }),
      ly(function (e) {
        var t = e.length;
        return function (r) {
          var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
            i = e[(n + t - 1) % t],
            o = e[n % t],
            a = e[(n + 1) % t],
            l = e[(n + 2) % t];
          return lf((r - n / t) * t, i, o, a, l);
        };
      }));
    var lg = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      lm = RegExp(lg.source, "g");
    function lb(e, t) {
      var r,
        n,
        i = typeof t;
      return null == t || "boolean" === i
        ? lp(t)
        : ("number" === i
            ? lv
            : "string" === i
              ? (n = a6(t))
                ? ((t = n), ld)
                : function (e, t) {
                    var r,
                      n,
                      i,
                      o,
                      a,
                      l = (lg.lastIndex = lm.lastIndex = 0),
                      u = -1,
                      c = [],
                      s = [];
                    for (e += "", t += ""; (i = lg.exec(e)) && (o = lm.exec(t)); )
                      ((a = o.index) > l &&
                        ((a = t.slice(l, a)), c[u] ? (c[u] += a) : (c[++u] = a)),
                        (i = i[0]) === (o = o[0])
                          ? c[u]
                            ? (c[u] += o)
                            : (c[++u] = o)
                          : ((c[++u] = null), s.push({ i: u, x: lv(i, o) })),
                        (l = lm.lastIndex));
                    return (
                      l < t.length && ((a = t.slice(l)), c[u] ? (c[u] += a) : (c[++u] = a)),
                      c.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (e) {
                              return r(e) + "";
                            })
                          : ((n = t),
                            function () {
                              return n;
                            })
                        : ((t = s.length),
                          function (e) {
                            for (var r, n = 0; n < t; ++n) c[(r = s[n]).i] = r.x(e);
                            return c.join("");
                          })
                    );
                  }
              : t instanceof a6
                ? ld
                : t instanceof Date
                  ? function (e, t) {
                      var r = new Date();
                      return (
                        (e *= 1),
                        (t *= 1),
                        function (n) {
                          return (r.setTime(e * (1 - n) + t * n), r);
                        }
                      );
                    }
                  : !ArrayBuffer.isView((r = t)) || r instanceof DataView
                    ? Array.isArray(t)
                      ? function (e, t) {
                          var r,
                            n = t ? t.length : 0,
                            i = e ? Math.min(n, e.length) : 0,
                            o = Array(i),
                            a = Array(n);
                          for (r = 0; r < i; ++r) o[r] = lb(e[r], t[r]);
                          for (; r < n; ++r) a[r] = t[r];
                          return function (e) {
                            for (r = 0; r < i; ++r) a[r] = o[r](e);
                            return a;
                          };
                        }
                      : ("function" != typeof t.valueOf && "function" != typeof t.toString) ||
                          isNaN(t)
                        ? function (e, t) {
                            var r,
                              n = {},
                              i = {};
                            for (r in ((null === e || "object" != typeof e) && (e = {}),
                            (null === t || "object" != typeof t) && (t = {}),
                            t))
                              r in e ? (n[r] = lb(e[r], t[r])) : (i[r] = t[r]);
                            return function (e) {
                              for (r in n) i[r] = n[r](e);
                              return i;
                            };
                          }
                        : lv
                    : function (e, t) {
                        t || (t = []);
                        var r,
                          n = e ? Math.min(t.length, e.length) : 0,
                          i = t.slice();
                        return function (o) {
                          for (r = 0; r < n; ++r) i[r] = e[r] * (1 - o) + t[r] * o;
                          return i;
                        };
                      })(e, t);
    }
    function lx(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return Math.round(e * (1 - r) + t * r);
        }
      );
    }
    function lw(e) {
      return +e;
    }
    var lO = [0, 1];
    function lS(e) {
      return e;
    }
    function lP(e, t) {
      var r;
      return (t -= e *= 1)
        ? function (r) {
            return (r - e) / t;
          }
        : ((r = isNaN(t) ? NaN : 0.5),
          function () {
            return r;
          });
    }
    function lA(e, t, r) {
      var n = e[0],
        i = e[1],
        o = t[0],
        a = t[1];
      return (
        i < n ? ((n = lP(i, n)), (o = r(a, o))) : ((n = lP(n, i)), (o = r(o, a))),
        function (e) {
          return o(n(e));
        }
      );
    }
    function lj(e, t, r) {
      var n = Math.min(e.length, t.length) - 1,
        i = Array(n),
        o = Array(n),
        a = -1;
      for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++a < n; )
        ((i[a] = lP(e[a], e[a + 1])), (o[a] = r(t[a], t[a + 1])));
      return function (t) {
        var r = a$(e, t, 1, n) - 1;
        return o[r](i[r](t));
      };
    }
    function lE(e, t) {
      return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function l_() {
      var e,
        t,
        r,
        n,
        i,
        o,
        a = lO,
        l = lO,
        u = lb,
        c = lS;
      function s() {
        var e,
          t,
          r,
          u = Math.min(a.length, l.length);
        return (
          c !== lS &&
            ((e = a[0]),
            (t = a[u - 1]),
            e > t && ((r = e), (e = t), (t = r)),
            (c = function (r) {
              return Math.max(e, Math.min(t, r));
            })),
          (n = u > 2 ? lj : lA),
          (i = o = null),
          f
        );
      }
      function f(t) {
        return null == t || isNaN((t *= 1)) ? r : (i || (i = n(a.map(e), l, u)))(e(c(t)));
      }
      return (
        (f.invert = function (r) {
          return c(t((o || (o = n(l, a.map(e), lv)))(r)));
        }),
        (f.domain = function (e) {
          return arguments.length ? ((a = Array.from(e, lw)), s()) : a.slice();
        }),
        (f.range = function (e) {
          return arguments.length ? ((l = Array.from(e)), s()) : l.slice();
        }),
        (f.rangeRound = function (e) {
          return ((l = Array.from(e)), (u = lx), s());
        }),
        (f.clamp = function (e) {
          return arguments.length ? ((c = !!e || lS), s()) : c !== lS;
        }),
        (f.interpolate = function (e) {
          return arguments.length ? ((u = e), s()) : u;
        }),
        (f.unknown = function (e) {
          return arguments.length ? ((r = e), f) : r;
        }),
        function (r, n) {
          return ((e = r), (t = n), s());
        }
      );
    }
    function lM() {
      return l_()(lS, lS);
    }
    function lk(e, t) {
      if (!isFinite(e) || 0 === e) return null;
      var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
        n = e.slice(0, r);
      return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
    }
    function lT(e) {
      return (e = lk(Math.abs(e))) ? e[1] : NaN;
    }
    var lC = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function lD(e) {
      var t;
      if (!(t = lC.exec(e))) throw Error("invalid format: " + e);
      return new lI({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10],
      });
    }
    function lI(e) {
      ((this.fill = void 0 === e.fill ? " " : e.fill + ""),
        (this.align = void 0 === e.align ? ">" : e.align + ""),
        (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
        (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
        (this.zero = !!e.zero),
        (this.width = void 0 === e.width ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = void 0 === e.precision ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = void 0 === e.type ? "" : e.type + ""));
    }
    function lN(e, t) {
      var r = lk(e, t);
      if (!r) return e + "";
      var n = r[0],
        i = r[1];
      return i < 0
        ? "0." + Array(-i).join("0") + n
        : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + Array(i - n.length + 2).join("0");
    }
    ((lD.prototype = lI.prototype),
      (lI.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      }));
    let lL = {
      "%": (e, t) => (100 * e).toFixed(t),
      b: (e) => Math.round(e).toString(2),
      c: (e) => e + "",
      d: function (e) {
        return Math.abs((e = Math.round(e))) >= 1e21
          ? e.toLocaleString("en").replace(/,/g, "")
          : e.toString(10);
      },
      e: (e, t) => e.toExponential(t),
      f: (e, t) => e.toFixed(t),
      g: (e, t) => e.toPrecision(t),
      o: (e) => Math.round(e).toString(8),
      p: (e, t) => lN(100 * e, t),
      r: lN,
      s: function (e, t) {
        var r = lk(e, t);
        if (!r) return ((l = void 0), e.toPrecision(t));
        var n = r[0],
          i = r[1],
          o = i - (l = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          a = n.length;
        return o === a
          ? n
          : o > a
            ? n + Array(o - a + 1).join("0")
            : o > 0
              ? n.slice(0, o) + "." + n.slice(o)
              : "0." + Array(1 - o).join("0") + lk(e, Math.max(0, t + o - 1))[0];
      },
      X: (e) => Math.round(e).toString(16).toUpperCase(),
      x: (e) => Math.round(e).toString(16),
    };
    function lz(e) {
      return e;
    }
    var lR = Array.prototype.map,
      lB = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function lU(e, t, r, n) {
      var i,
        o,
        a = aN(e, t, r);
      switch ((n = lD(null == n ? ",f" : n)).type) {
        case "s":
          var l = Math.max(Math.abs(e), Math.abs(t));
          return (
            null != n.precision ||
              isNaN(
                (o = Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(lT(l) / 3))) - lT(Math.abs(a))
                ))
              ) ||
              (n.precision = o),
            s(n, l)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (o =
                Math.max(
                  0,
                  lT(Math.abs(Math.max(Math.abs(e), Math.abs(t))) - (i = Math.abs((i = a)))) - lT(i)
                ) + 1)
            ) ||
            (n.precision = o - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN((o = Math.max(0, -lT(Math.abs(a))))) ||
            (n.precision = o - ("%" === n.type) * 2);
      }
      return c(n);
    }
    function lF(e) {
      var t = e.domain;
      return (
        (e.ticks = function (e) {
          var r = t();
          return aD(r[0], r[r.length - 1], null == e ? 10 : e);
        }),
        (e.tickFormat = function (e, r) {
          var n = t();
          return lU(n[0], n[n.length - 1], null == e ? 10 : e, r);
        }),
        (e.nice = function (r) {
          null == r && (r = 10);
          var n,
            i,
            o = t(),
            a = 0,
            l = o.length - 1,
            u = o[a],
            c = o[l],
            s = 10;
          for (c < u && ((i = u), (u = c), (c = i), (i = a), (a = l), (l = i)); s-- > 0; ) {
            if ((i = aI(u, c, r)) === n) return ((o[a] = u), (o[l] = c), t(o));
            if (i > 0) ((u = Math.floor(u / i) * i), (c = Math.ceil(c / i) * i));
            else if (i < 0) ((u = Math.ceil(u * i) / i), (c = Math.floor(c * i) / i));
            else break;
            n = i;
          }
          return e;
        }),
        e
      );
    }
    function l$() {
      var e = lM();
      return (
        (e.copy = function () {
          return lE(e, l$());
        }),
        ax.apply(e, arguments),
        lF(e)
      );
    }
    function lK(e) {
      var t;
      function r(e) {
        return null == e || isNaN((e *= 1)) ? t : e;
      }
      return (
        (r.invert = r),
        (r.domain = r.range =
          function (t) {
            return arguments.length ? ((e = Array.from(t, lw)), r) : e.slice();
          }),
        (r.unknown = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.copy = function () {
          return lK(e).unknown(t);
        }),
        (e = arguments.length ? Array.from(e, lw) : [0, 1]),
        lF(r)
      );
    }
    function lW(e, t) {
      e = e.slice();
      var r,
        n = 0,
        i = e.length - 1,
        o = e[n],
        a = e[i];
      return (
        a < o && ((r = n), (n = i), (i = r), (r = o), (o = a), (a = r)),
        (e[n] = t.floor(o)),
        (e[i] = t.ceil(a)),
        e
      );
    }
    function lq(e) {
      return Math.log(e);
    }
    function lY(e) {
      return Math.exp(e);
    }
    function lH(e) {
      return -Math.log(-e);
    }
    function lV(e) {
      return -Math.exp(-e);
    }
    function lX(e) {
      return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
    }
    function lG(e) {
      return (t, r) => -e(-t, r);
    }
    function lZ(e) {
      let t,
        r,
        n = e(lq, lY),
        i = n.domain,
        o = 10;
      function a() {
        var a, l;
        return (
          (t =
            (a = o) === Math.E
              ? Math.log
              : (10 === a && Math.log10) ||
                (2 === a && Math.log2) ||
                ((a = Math.log(a)), (e) => Math.log(e) / a)),
          (r = 10 === (l = o) ? lX : l === Math.E ? Math.exp : (e) => Math.pow(l, e)),
          i()[0] < 0 ? ((t = lG(t)), (r = lG(r)), e(lH, lV)) : e(lq, lY),
          n
        );
      }
      return (
        (n.base = function (e) {
          return arguments.length ? ((o = +e), a()) : o;
        }),
        (n.domain = function (e) {
          return arguments.length ? (i(e), a()) : i();
        }),
        (n.ticks = (e) => {
          let n,
            a,
            l = i(),
            u = l[0],
            c = l[l.length - 1],
            s = c < u;
          s && ([u, c] = [c, u]);
          let f = t(u),
            p = t(c),
            h = null == e ? 10 : +e,
            d = [];
          if (!(o % 1) && p - f < h) {
            if (((f = Math.floor(f)), (p = Math.ceil(p)), u > 0)) {
              for (; f <= p; ++f)
                for (n = 1; n < o; ++n)
                  if (!((a = f < 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (a > c) break;
                    d.push(a);
                  }
            } else
              for (; f <= p; ++f)
                for (n = o - 1; n >= 1; --n)
                  if (!((a = f > 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (a > c) break;
                    d.push(a);
                  }
            2 * d.length < h && (d = aD(u, c, h));
          } else d = aD(f, p, Math.min(p - f, h)).map(r);
          return s ? d.reverse() : d;
        }),
        (n.tickFormat = (e, i) => {
          if (
            (null == e && (e = 10),
            null == i && (i = 10 === o ? "s" : ","),
            "function" != typeof i &&
              (o % 1 || null != (i = lD(i)).precision || (i.trim = !0), (i = c(i))),
            e === 1 / 0)
          )
            return i;
          let a = Math.max(1, (o * e) / n.ticks().length);
          return (e) => {
            let n = e / r(Math.round(t(e)));
            return (n * o < o - 0.5 && (n *= o), n <= a ? i(e) : "");
          };
        }),
        (n.nice = () =>
          i(lW(i(), { floor: (e) => r(Math.floor(t(e))), ceil: (e) => r(Math.ceil(t(e))) }))),
        n
      );
    }
    function lQ() {
      let e = lZ(l_()).domain([1, 10]);
      return ((e.copy = () => lE(e, lQ()).base(e.base())), ax.apply(e, arguments), e);
    }
    function lJ(e) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
      };
    }
    function l0(e) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      };
    }
    function l1(e) {
      var t = 1,
        r = e(lJ(1), l0(t));
      return (
        (r.constant = function (r) {
          return arguments.length ? e(lJ((t = +r)), l0(t)) : t;
        }),
        lF(r)
      );
    }
    function l2() {
      var e = l1(l_());
      return (
        (e.copy = function () {
          return lE(e, l2()).constant(e.constant());
        }),
        ax.apply(e, arguments)
      );
    }
    function l5(e) {
      return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      };
    }
    function l3(e) {
      return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
    }
    function l6(e) {
      return e < 0 ? -e * e : e * e;
    }
    function l8(e) {
      var t = e(lS, lS),
        r = 1;
      return (
        (t.exponent = function (t) {
          return arguments.length
            ? 1 == (r = +t)
              ? e(lS, lS)
              : 0.5 === r
                ? e(l3, l6)
                : e(l5(r), l5(1 / r))
            : r;
        }),
        lF(t)
      );
    }
    function l4() {
      var e = l8(l_());
      return (
        (e.copy = function () {
          return lE(e, l4()).exponent(e.exponent());
        }),
        ax.apply(e, arguments),
        e
      );
    }
    function l7() {
      return l4.apply(null, arguments).exponent(0.5);
    }
    function l9(e) {
      return Math.sign(e) * e * e;
    }
    function ue() {
      var e,
        t = lM(),
        r = [0, 1],
        n = !1;
      function i(r) {
        var i,
          o = Math.sign((i = t(r))) * Math.sqrt(Math.abs(i));
        return isNaN(o) ? e : n ? Math.round(o) : o;
      }
      return (
        (i.invert = function (e) {
          return t.invert(l9(e));
        }),
        (i.domain = function (e) {
          return arguments.length ? (t.domain(e), i) : t.domain();
        }),
        (i.range = function (e) {
          return arguments.length ? (t.range((r = Array.from(e, lw)).map(l9)), i) : r.slice();
        }),
        (i.rangeRound = function (e) {
          return i.range(e).round(!0);
        }),
        (i.round = function (e) {
          return arguments.length ? ((n = !!e), i) : n;
        }),
        (i.clamp = function (e) {
          return arguments.length ? (t.clamp(e), i) : t.clamp();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return ue(t.domain(), r).round(n).clamp(t.clamp()).unknown(e);
        }),
        ax.apply(i, arguments),
        lF(i)
      );
    }
    function ut(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e) null != t && (r < t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) && (r < i || (void 0 === r && i >= i)) && (r = i);
      }
      return r;
    }
    function ur(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e) null != t && (r > t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) && (r > i || (void 0 === r && i >= i)) && (r = i);
      }
      return r;
    }
    function un(e, t) {
      return (null == e || !(e >= e)) - (null == t || !(t >= t)) || (e < t ? -1 : +(e > t));
    }
    function ui(e, t, r) {
      let n = e[t];
      ((e[t] = e[r]), (e[r] = n));
    }
    function uo() {
      var e,
        t = [],
        r = [],
        n = [];
      function i() {
        var e = 0,
          i = Math.max(1, r.length);
        for (n = Array(i - 1); ++e < i; )
          n[e - 1] = (function (e, t, r = aU) {
            if (!(!(n = e.length) || isNaN((t *= 1)))) {
              if (t <= 0 || n < 2) return +r(e[0], 0, e);
              if (t >= 1) return +r(e[n - 1], n - 1, e);
              var n,
                i = (n - 1) * t,
                o = Math.floor(i),
                a = +r(e[o], o, e);
              return a + (r(e[o + 1], o + 1, e) - a) * (i - o);
            }
          })(t, e / i);
        return o;
      }
      function o(t) {
        return null == t || isNaN((t *= 1)) ? e : r[a$(n, t)];
      }
      return (
        (o.invertExtent = function (e) {
          var i = r.indexOf(e);
          return i < 0
            ? [NaN, NaN]
            : [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
        }),
        (o.domain = function (e) {
          if (!arguments.length) return t.slice();
          for (let r of ((t = []), e)) null == r || isNaN((r *= 1)) || t.push(r);
          return (t.sort(aL), i());
        }),
        (o.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i()) : r.slice();
        }),
        (o.unknown = function (t) {
          return arguments.length ? ((e = t), o) : e;
        }),
        (o.quantiles = function () {
          return n.slice();
        }),
        (o.copy = function () {
          return uo().domain(t).range(r).unknown(e);
        }),
        ax.apply(o, arguments)
      );
    }
    function ua() {
      var e,
        t = 0,
        r = 1,
        n = 1,
        i = [0.5],
        o = [0, 1];
      function a(t) {
        return null != t && t <= t ? o[a$(i, t, 0, n)] : e;
      }
      function l() {
        var e = -1;
        for (i = Array(n); ++e < n; ) i[e] = ((e + 1) * r - (e - n) * t) / (n + 1);
        return a;
      }
      return (
        (a.domain = function (e) {
          return arguments.length ? (([t, r] = e), (t *= 1), (r *= 1), l()) : [t, r];
        }),
        (a.range = function (e) {
          return arguments.length ? ((n = (o = Array.from(e)).length - 1), l()) : o.slice();
        }),
        (a.invertExtent = function (e) {
          var a = o.indexOf(e);
          return a < 0 ? [NaN, NaN] : a < 1 ? [t, i[0]] : a >= n ? [i[n - 1], r] : [i[a - 1], i[a]];
        }),
        (a.unknown = function (t) {
          return (arguments.length && (e = t), a);
        }),
        (a.thresholds = function () {
          return i.slice();
        }),
        (a.copy = function () {
          return ua().domain([t, r]).range(o).unknown(e);
        }),
        ax.apply(lF(a), arguments)
      );
    }
    function ul() {
      var e,
        t = [0.5],
        r = [0, 1],
        n = 1;
      function i(i) {
        return null != i && i <= i ? r[a$(t, i, 0, n)] : e;
      }
      return (
        (i.domain = function (e) {
          return arguments.length
            ? ((n = Math.min((t = Array.from(e)).length, r.length - 1)), i)
            : t.slice();
        }),
        (i.range = function (e) {
          return arguments.length
            ? ((r = Array.from(e)), (n = Math.min(t.length, r.length - 1)), i)
            : r.slice();
        }),
        (i.invertExtent = function (e) {
          var n = r.indexOf(e);
          return [t[n - 1], t[n]];
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return ul().domain(t).range(r).unknown(e);
        }),
        ax.apply(i, arguments)
      );
    }
    ((c = (u = (function (e) {
      var t,
        r,
        n,
        i =
          void 0 === e.grouping || void 0 === e.thousands
            ? lz
            : ((t = lR.call(e.grouping, Number)),
              (r = e.thousands + ""),
              function (e, n) {
                for (
                  var i = e.length, o = [], a = 0, l = t[0], u = 0;
                  i > 0 &&
                  l > 0 &&
                  (u + l + 1 > n && (l = Math.max(1, n - u)),
                  o.push(e.substring((i -= l), i + l)),
                  !((u += l + 1) > n));
                )
                  l = t[(a = (a + 1) % t.length)];
                return o.reverse().join(r);
              }),
        o = void 0 === e.currency ? "" : e.currency[0] + "",
        a = void 0 === e.currency ? "" : e.currency[1] + "",
        u = void 0 === e.decimal ? "." : e.decimal + "",
        c =
          void 0 === e.numerals
            ? lz
            : ((n = lR.call(e.numerals, String)),
              function (e) {
                return e.replace(/[0-9]/g, function (e) {
                  return n[+e];
                });
              }),
        s = void 0 === e.percent ? "%" : e.percent + "",
        f = void 0 === e.minus ? "−" : e.minus + "",
        p = void 0 === e.nan ? "NaN" : e.nan + "";
      function h(e, t) {
        var r = (e = lD(e)).fill,
          n = e.align,
          h = e.sign,
          d = e.symbol,
          y = e.zero,
          v = e.width,
          g = e.comma,
          m = e.precision,
          b = e.trim,
          x = e.type;
        ("n" === x
          ? ((g = !0), (x = "g"))
          : lL[x] || (void 0 === m && (m = 12), (b = !0), (x = "g")),
          (y || ("0" === r && "=" === n)) && ((y = !0), (r = "0"), (n = "=")));
        var w =
            (t && void 0 !== t.prefix ? t.prefix : "") +
            ("$" === d ? o : "#" === d && /[boxX]/.test(x) ? "0" + x.toLowerCase() : ""),
          O =
            ("$" === d ? a : /[%p]/.test(x) ? s : "") + (t && void 0 !== t.suffix ? t.suffix : ""),
          S = lL[x],
          P = /[defgprs%]/.test(x);
        function A(e) {
          var t,
            o,
            a,
            s = w,
            d = O;
          if ("c" === x) ((d = S(e) + d), (e = ""));
          else {
            var A = (e *= 1) < 0 || 1 / e < 0;
            if (
              ((e = isNaN(e) ? p : S(Math.abs(e), m)),
              b &&
                (e = (function (e) {
                  e: for (var t, r = e.length, n = 1, i = -1; n < r; ++n)
                    switch (e[n]) {
                      case ".":
                        i = t = n;
                        break;
                      case "0":
                        (0 === i && (i = n), (t = n));
                        break;
                      default:
                        if (!+e[n]) break e;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                })(e)),
              A && 0 == +e && "+" !== h && (A = !1),
              (s = (A ? ("(" === h ? h : f) : "-" === h || "(" === h ? "" : h) + s),
              (d =
                ("s" !== x || isNaN(e) || void 0 === l ? "" : lB[8 + l / 3]) +
                d +
                (A && "(" === h ? ")" : "")),
              P)
            ) {
              for (t = -1, o = e.length; ++t < o; )
                if (48 > (a = e.charCodeAt(t)) || a > 57) {
                  ((d = (46 === a ? u + e.slice(t + 1) : e.slice(t)) + d), (e = e.slice(0, t)));
                  break;
                }
            }
          }
          g && !y && (e = i(e, 1 / 0));
          var j = s.length + e.length + d.length,
            E = j < v ? Array(v - j + 1).join(r) : "";
          switch ((g && y && ((e = i(E + e, E.length ? v - d.length : 1 / 0)), (E = "")), n)) {
            case "<":
              e = s + e + d + E;
              break;
            case "=":
              e = s + E + e + d;
              break;
            case "^":
              e = E.slice(0, (j = E.length >> 1)) + s + e + d + E.slice(j);
              break;
            default:
              e = E + s + e + d;
          }
          return c(e);
        }
        return (
          (m =
            void 0 === m
              ? 6
              : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
          (A.toString = function () {
            return e + "";
          }),
          A
        );
      }
      return {
        format: h,
        formatPrefix: function (e, t) {
          var r = 3 * Math.max(-8, Math.min(8, Math.floor(lT(t) / 3))),
            n = Math.pow(10, -r),
            i = h((((e = lD(e)).type = "f"), e), { suffix: lB[8 + r / 3] });
          return function (e) {
            return i(n * e);
          };
        },
      };
    })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
      (s = u.formatPrefix));
    let uu = new Date(),
      uc = new Date();
    function us(e, t, r, n) {
      function i(t) {
        return (e((t = 0 == arguments.length ? new Date() : new Date(+t))), t);
      }
      return (
        (i.floor = (t) => (e((t = new Date(+t))), t)),
        (i.ceil = (r) => (e((r = new Date(r - 1))), t(r, 1), e(r), r)),
        (i.round = (e) => {
          let t = i(e),
            r = i.ceil(e);
          return e - t < r - e ? t : r;
        }),
        (i.offset = (e, r) => (t((e = new Date(+e)), null == r ? 1 : Math.floor(r)), e)),
        (i.range = (r, n, o) => {
          let a,
            l = [];
          if (((r = i.ceil(r)), (o = null == o ? 1 : Math.floor(o)), !(r < n) || !(o > 0)))
            return l;
          do (l.push((a = new Date(+r))), t(r, o), e(r));
          while (a < r && r < n);
          return l;
        }),
        (i.filter = (r) =>
          us(
            (t) => {
              if (t >= t) for (; e(t), !r(t); ) t.setTime(t - 1);
            },
            (e, n) => {
              if (e >= e)
                if (n < 0) for (; ++n <= 0; ) for (; t(e, -1), !r(e); );
                else for (; --n >= 0; ) for (; t(e, 1), !r(e); );
            }
          )),
        r &&
          ((i.count = (t, n) => (
            uu.setTime(+t),
            uc.setTime(+n),
            e(uu),
            e(uc),
            Math.floor(r(uu, uc))
          )),
          (i.every = (e) =>
            isFinite((e = Math.floor(e))) && e > 0
              ? e > 1
                ? i.filter(n ? (t) => n(t) % e == 0 : (t) => i.count(0, t) % e == 0)
                : i
              : null)),
        i
      );
    }
    let uf = us(
      (e) => {
        (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setFullYear(e.getFullYear() + t);
      },
      (e, t) => t.getFullYear() - e.getFullYear(),
      (e) => e.getFullYear()
    );
    ((uf.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? us(
            (t) => {
              (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                t.setMonth(0, 1),
                t.setHours(0, 0, 0, 0));
            },
            (t, r) => {
              t.setFullYear(t.getFullYear() + r * e);
            }
          )
        : null),
      uf.range);
    let up = us(
      (e) => {
        (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setUTCFullYear(e.getUTCFullYear() + t);
      },
      (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
      (e) => e.getUTCFullYear()
    );
    ((up.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? us(
            (t) => {
              (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                t.setUTCMonth(0, 1),
                t.setUTCHours(0, 0, 0, 0));
            },
            (t, r) => {
              t.setUTCFullYear(t.getUTCFullYear() + r * e);
            }
          )
        : null),
      up.range);
    let uh = us(
      (e) => {
        (e.setDate(1), e.setHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setMonth(e.getMonth() + t);
      },
      (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
      (e) => e.getMonth()
    );
    uh.range;
    let ud = us(
      (e) => {
        (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setUTCMonth(e.getUTCMonth() + t);
      },
      (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
      (e) => e.getUTCMonth()
    );
    ud.range;
    function uy(e) {
      return us(
        (t) => {
          (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setDate(e.getDate() + 7 * t);
        },
        (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5
      );
    }
    let uv = uy(0),
      ug = uy(1),
      um = uy(2),
      ub = uy(3),
      ux = uy(4),
      uw = uy(5),
      uO = uy(6);
    function uS(e) {
      return us(
        (t) => {
          (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + 7 * t);
        },
        (e, t) => (t - e) / 6048e5
      );
    }
    (uv.range, ug.range, um.range, ub.range, ux.range, uw.range, uO.range);
    let uP = uS(0),
      uA = uS(1),
      uj = uS(2),
      uE = uS(3),
      u_ = uS(4),
      uM = uS(5),
      uk = uS(6);
    (uP.range, uA.range, uj.range, uE.range, u_.range, uM.range, uk.range);
    let uT = us(
      (e) => e.setHours(0, 0, 0, 0),
      (e, t) => e.setDate(e.getDate() + t),
      (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5,
      (e) => e.getDate() - 1
    );
    uT.range;
    let uC = us(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => e.getUTCDate() - 1
    );
    uC.range;
    let uD = us(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => Math.floor(e / 864e5)
    );
    uD.range;
    let uI = us(
      (e) => {
        e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds() - 6e4 * e.getMinutes());
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getHours()
    );
    uI.range;
    let uN = us(
      (e) => {
        e.setUTCMinutes(0, 0, 0);
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getUTCHours()
    );
    uN.range;
    let uL = us(
      (e) => {
        e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getMinutes()
    );
    uL.range;
    let uz = us(
      (e) => {
        e.setUTCSeconds(0, 0);
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getUTCMinutes()
    );
    uz.range;
    let uR = us(
      (e) => {
        e.setTime(e - e.getMilliseconds());
      },
      (e, t) => {
        e.setTime(+e + 1e3 * t);
      },
      (e, t) => (t - e) / 1e3,
      (e) => e.getUTCSeconds()
    );
    uR.range;
    let uB = us(
      () => {},
      (e, t) => {
        e.setTime(+e + t);
      },
      (e, t) => t - e
    );
    function uU(e, t, r, n, i, o) {
      let a = [
        [uR, 1, 1e3],
        [uR, 5, 5e3],
        [uR, 15, 15e3],
        [uR, 30, 3e4],
        [o, 1, 6e4],
        [o, 5, 3e5],
        [o, 15, 9e5],
        [o, 30, 18e5],
        [i, 1, 36e5],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [n, 1, 864e5],
        [n, 2, 1728e5],
        [r, 1, 6048e5],
        [t, 1, 2592e6],
        [t, 3, 7776e6],
        [e, 1, 31536e6],
      ];
      function l(t, r, n) {
        let i = Math.abs(r - t) / n,
          o = aR(([, , e]) => e).right(a, i);
        if (o === a.length) return e.every(aN(t / 31536e6, r / 31536e6, n));
        if (0 === o) return uB.every(Math.max(aN(t, r, n), 1));
        let [l, u] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
        return l.every(u);
      }
      return [
        function (e, t, r) {
          let n = t < e;
          n && ([e, t] = [t, e]);
          let i = r && "function" == typeof r.range ? r : l(e, t, r),
            o = i ? i.range(e, +t + 1) : [];
          return n ? o.reverse() : o;
        },
        l,
      ];
    }
    ((uB.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? e > 1
          ? us(
              (t) => {
                t.setTime(Math.floor(t / e) * e);
              },
              (t, r) => {
                t.setTime(+t + r * e);
              },
              (t, r) => (r - t) / e
            )
          : uB
        : null),
      uB.range);
    let [uF, u$] = uU(up, ud, uP, uD, uN, uz),
      [uK, uW] = uU(uf, uh, uv, uT, uI, uL);
    function uq(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return (t.setFullYear(e.y), t);
      }
      return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
    }
    function uY(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return (t.setUTCFullYear(e.y), t);
      }
      return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
    }
    function uH(e, t, r) {
      return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
    }
    var uV = { "-": "", _: " ", 0: "0" },
      uX = /^\s*\d+/,
      uG = /^%/,
      uZ = /[\\^$*+?|[\]().{}]/g;
    function uQ(e, t, r) {
      var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        o = i.length;
      return n + (o < r ? Array(r - o + 1).join(t) + i : i);
    }
    function uJ(e) {
      return e.replace(uZ, "\\$&");
    }
    function u0(e) {
      return RegExp("^(?:" + e.map(uJ).join("|") + ")", "i");
    }
    function u1(e) {
      return new Map(e.map((e, t) => [e.toLowerCase(), t]));
    }
    function u2(e, t, r) {
      var n = uX.exec(t.slice(r, r + 1));
      return n ? ((e.w = +n[0]), r + n[0].length) : -1;
    }
    function u5(e, t, r) {
      var n = uX.exec(t.slice(r, r + 1));
      return n ? ((e.u = +n[0]), r + n[0].length) : -1;
    }
    function u3(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.U = +n[0]), r + n[0].length) : -1;
    }
    function u6(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.V = +n[0]), r + n[0].length) : -1;
    }
    function u8(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.W = +n[0]), r + n[0].length) : -1;
    }
    function u4(e, t, r) {
      var n = uX.exec(t.slice(r, r + 4));
      return n ? ((e.y = +n[0]), r + n[0].length) : -1;
    }
    function u7(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
    }
    function u9(e, t, r) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
      return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
    }
    function ce(e, t, r) {
      var n = uX.exec(t.slice(r, r + 1));
      return n ? ((e.q = 3 * n[0] - 3), r + n[0].length) : -1;
    }
    function ct(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
    }
    function cr(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.d = +n[0]), r + n[0].length) : -1;
    }
    function cn(e, t, r) {
      var n = uX.exec(t.slice(r, r + 3));
      return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
    }
    function ci(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.H = +n[0]), r + n[0].length) : -1;
    }
    function co(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.M = +n[0]), r + n[0].length) : -1;
    }
    function ca(e, t, r) {
      var n = uX.exec(t.slice(r, r + 2));
      return n ? ((e.S = +n[0]), r + n[0].length) : -1;
    }
    function cl(e, t, r) {
      var n = uX.exec(t.slice(r, r + 3));
      return n ? ((e.L = +n[0]), r + n[0].length) : -1;
    }
    function cu(e, t, r) {
      var n = uX.exec(t.slice(r, r + 6));
      return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
    }
    function cc(e, t, r) {
      var n = uG.exec(t.slice(r, r + 1));
      return n ? r + n[0].length : -1;
    }
    function cs(e, t, r) {
      var n = uX.exec(t.slice(r));
      return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
    }
    function cf(e, t, r) {
      var n = uX.exec(t.slice(r));
      return n ? ((e.s = +n[0]), r + n[0].length) : -1;
    }
    function cp(e, t) {
      return uQ(e.getDate(), t, 2);
    }
    function ch(e, t) {
      return uQ(e.getHours(), t, 2);
    }
    function cd(e, t) {
      return uQ(e.getHours() % 12 || 12, t, 2);
    }
    function cy(e, t) {
      return uQ(1 + uT.count(uf(e), e), t, 3);
    }
    function cv(e, t) {
      return uQ(e.getMilliseconds(), t, 3);
    }
    function cg(e, t) {
      return cv(e, t) + "000";
    }
    function cm(e, t) {
      return uQ(e.getMonth() + 1, t, 2);
    }
    function cb(e, t) {
      return uQ(e.getMinutes(), t, 2);
    }
    function cx(e, t) {
      return uQ(e.getSeconds(), t, 2);
    }
    function cw(e) {
      var t = e.getDay();
      return 0 === t ? 7 : t;
    }
    function cO(e, t) {
      return uQ(uv.count(uf(e) - 1, e), t, 2);
    }
    function cS(e) {
      var t = e.getDay();
      return t >= 4 || 0 === t ? ux(e) : ux.ceil(e);
    }
    function cP(e, t) {
      return ((e = cS(e)), uQ(ux.count(uf(e), e) + (4 === uf(e).getDay()), t, 2));
    }
    function cA(e) {
      return e.getDay();
    }
    function cj(e, t) {
      return uQ(ug.count(uf(e) - 1, e), t, 2);
    }
    function cE(e, t) {
      return uQ(e.getFullYear() % 100, t, 2);
    }
    function c_(e, t) {
      return uQ((e = cS(e)).getFullYear() % 100, t, 2);
    }
    function cM(e, t) {
      return uQ(e.getFullYear() % 1e4, t, 4);
    }
    function ck(e, t) {
      var r = e.getDay();
      return uQ((e = r >= 4 || 0 === r ? ux(e) : ux.ceil(e)).getFullYear() % 1e4, t, 4);
    }
    function cT(e) {
      var t = e.getTimezoneOffset();
      return (t > 0 ? "-" : ((t *= -1), "+")) + uQ((t / 60) | 0, "0", 2) + uQ(t % 60, "0", 2);
    }
    function cC(e, t) {
      return uQ(e.getUTCDate(), t, 2);
    }
    function cD(e, t) {
      return uQ(e.getUTCHours(), t, 2);
    }
    function cI(e, t) {
      return uQ(e.getUTCHours() % 12 || 12, t, 2);
    }
    function cN(e, t) {
      return uQ(1 + uC.count(up(e), e), t, 3);
    }
    function cL(e, t) {
      return uQ(e.getUTCMilliseconds(), t, 3);
    }
    function cz(e, t) {
      return cL(e, t) + "000";
    }
    function cR(e, t) {
      return uQ(e.getUTCMonth() + 1, t, 2);
    }
    function cB(e, t) {
      return uQ(e.getUTCMinutes(), t, 2);
    }
    function cU(e, t) {
      return uQ(e.getUTCSeconds(), t, 2);
    }
    function cF(e) {
      var t = e.getUTCDay();
      return 0 === t ? 7 : t;
    }
    function c$(e, t) {
      return uQ(uP.count(up(e) - 1, e), t, 2);
    }
    function cK(e) {
      var t = e.getUTCDay();
      return t >= 4 || 0 === t ? u_(e) : u_.ceil(e);
    }
    function cW(e, t) {
      return ((e = cK(e)), uQ(u_.count(up(e), e) + (4 === up(e).getUTCDay()), t, 2));
    }
    function cq(e) {
      return e.getUTCDay();
    }
    function cY(e, t) {
      return uQ(uA.count(up(e) - 1, e), t, 2);
    }
    function cH(e, t) {
      return uQ(e.getUTCFullYear() % 100, t, 2);
    }
    function cV(e, t) {
      return uQ((e = cK(e)).getUTCFullYear() % 100, t, 2);
    }
    function cX(e, t) {
      return uQ(e.getUTCFullYear() % 1e4, t, 4);
    }
    function cG(e, t) {
      var r = e.getUTCDay();
      return uQ((e = r >= 4 || 0 === r ? u_(e) : u_.ceil(e)).getUTCFullYear() % 1e4, t, 4);
    }
    function cZ() {
      return "+0000";
    }
    function cQ() {
      return "%";
    }
    function cJ(e) {
      return +e;
    }
    function c0(e) {
      return Math.floor(e / 1e3);
    }
    function c1(e) {
      return new Date(e);
    }
    function c2(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }
    function c5(e, t, r, n, i, o, a, l, u, c) {
      var s = lM(),
        f = s.invert,
        p = s.domain,
        h = c(".%L"),
        d = c(":%S"),
        y = c("%I:%M"),
        v = c("%I %p"),
        g = c("%a %d"),
        m = c("%b %d"),
        b = c("%B"),
        x = c("%Y");
      function w(e) {
        return (
          u(e) < e
            ? h
            : l(e) < e
              ? d
              : a(e) < e
                ? y
                : o(e) < e
                  ? v
                  : n(e) < e
                    ? i(e) < e
                      ? g
                      : m
                    : r(e) < e
                      ? b
                      : x
        )(e);
      }
      return (
        (s.invert = function (e) {
          return new Date(f(e));
        }),
        (s.domain = function (e) {
          return arguments.length ? p(Array.from(e, c2)) : p().map(c1);
        }),
        (s.ticks = function (t) {
          var r = p();
          return e(r[0], r[r.length - 1], null == t ? 10 : t);
        }),
        (s.tickFormat = function (e, t) {
          return null == t ? w : c(t);
        }),
        (s.nice = function (e) {
          var r = p();
          return (
            (e && "function" == typeof e.range) ||
              (e = t(r[0], r[r.length - 1], null == e ? 10 : e)),
            e ? p(lW(r, e)) : s
          );
        }),
        (s.copy = function () {
          return lE(s, c5(e, t, r, n, i, o, a, l, u, c));
        }),
        s
      );
    }
    function c3() {
      return ax.apply(
        c5(uK, uW, uf, uh, uv, uT, uI, uL, uR, p).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2),
        ]),
        arguments
      );
    }
    function c6() {
      return ax.apply(
        c5(uF, u$, up, ud, uP, uC, uN, uz, uR, h).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2),
        ]),
        arguments
      );
    }
    function c8() {
      var e,
        t,
        r,
        n,
        i,
        o = 0,
        a = 1,
        l = lS,
        u = !1;
      function c(t) {
        return null == t || isNaN((t *= 1))
          ? i
          : l(0 === r ? 0.5 : ((t = (n(t) - e) * r), u ? Math.max(0, Math.min(1, t)) : t));
      }
      function s(e) {
        return function (t) {
          var r, n;
          return arguments.length ? (([r, n] = t), (l = e(r, n)), c) : [l(0), l(1)];
        };
      }
      return (
        (c.domain = function (i) {
          return arguments.length
            ? (([o, a] = i),
              (e = n((o *= 1))),
              (t = n((a *= 1))),
              (r = e === t ? 0 : 1 / (t - e)),
              c)
            : [o, a];
        }),
        (c.clamp = function (e) {
          return arguments.length ? ((u = !!e), c) : u;
        }),
        (c.interpolator = function (e) {
          return arguments.length ? ((l = e), c) : l;
        }),
        (c.range = s(lb)),
        (c.rangeRound = s(lx)),
        (c.unknown = function (e) {
          return arguments.length ? ((i = e), c) : i;
        }),
        function (i) {
          return ((n = i), (e = i(o)), (t = i(a)), (r = e === t ? 0 : 1 / (t - e)), c);
        }
      );
    }
    function c4(e, t) {
      return t
        .domain(e.domain())
        .interpolator(e.interpolator())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function c7() {
      var e = lF(c8()(lS));
      return (
        (e.copy = function () {
          return c4(e, c7());
        }),
        aw.apply(e, arguments)
      );
    }
    function c9() {
      var e = lZ(c8()).domain([1, 10]);
      return (
        (e.copy = function () {
          return c4(e, c9()).base(e.base());
        }),
        aw.apply(e, arguments)
      );
    }
    function se() {
      var e = l1(c8());
      return (
        (e.copy = function () {
          return c4(e, se()).constant(e.constant());
        }),
        aw.apply(e, arguments)
      );
    }
    function st() {
      var e = l8(c8());
      return (
        (e.copy = function () {
          return c4(e, st()).exponent(e.exponent());
        }),
        aw.apply(e, arguments)
      );
    }
    function sr() {
      return st.apply(null, arguments).exponent(0.5);
    }
    function sn() {
      var e = [],
        t = lS;
      function r(r) {
        if (null != r && !isNaN((r *= 1))) return t((a$(e, r, 1) - 1) / (e.length - 1));
      }
      return (
        (r.domain = function (t) {
          if (!arguments.length) return e.slice();
          for (let r of ((e = []), t)) null == r || isNaN((r *= 1)) || e.push(r);
          return (e.sort(aL), r);
        }),
        (r.interpolator = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.range = function () {
          return e.map((r, n) => t(n / (e.length - 1)));
        }),
        (r.quantiles = function (t) {
          return Array.from({ length: t + 1 }, (r, n) =>
            (function (e, t, r) {
              if (
                !(
                  !(n = (e = Float64Array.from(
                    (function* (e, t) {
                      if (void 0 === t) for (let t of e) null != t && (t *= 1) >= t && (yield t);
                      else {
                        let r = -1;
                        for (let n of e) null != (n = t(n, ++r, e)) && (n *= 1) >= n && (yield n);
                      }
                    })(e, void 0)
                  )).length) || isNaN((t *= 1))
                )
              ) {
                if (t <= 0 || n < 2) return ur(e);
                if (t >= 1) return ut(e);
                var n,
                  i = (n - 1) * t,
                  o = Math.floor(i),
                  a = ut(
                    (function e(t, r, n = 0, i = 1 / 0, o) {
                      if (
                        ((r = Math.floor(r)),
                        (n = Math.floor(Math.max(0, n))),
                        (i = Math.floor(Math.min(t.length - 1, i))),
                        !(n <= r && r <= i))
                      )
                        return t;
                      for (
                        o =
                          void 0 === o
                            ? un
                            : (function (e = aL) {
                                if (e === aL) return un;
                                if ("function" != typeof e)
                                  throw TypeError("compare is not a function");
                                return (t, r) => {
                                  let n = e(t, r);
                                  return n || 0 === n ? n : (0 === e(r, r)) - (0 === e(t, t));
                                };
                              })(o);
                        i > n;
                      ) {
                        if (i - n > 600) {
                          let a = i - n + 1,
                            l = r - n + 1,
                            u = Math.log(a),
                            c = 0.5 * Math.exp((2 * u) / 3),
                            s = 0.5 * Math.sqrt((u * c * (a - c)) / a) * (l - a / 2 < 0 ? -1 : 1),
                            f = Math.max(n, Math.floor(r - (l * c) / a + s)),
                            p = Math.min(i, Math.floor(r + ((a - l) * c) / a + s));
                          e(t, r, f, p, o);
                        }
                        let a = t[r],
                          l = n,
                          u = i;
                        for (ui(t, n, r), o(t[i], a) > 0 && ui(t, n, i); l < u; ) {
                          for (ui(t, l, u), ++l, --u; 0 > o(t[l], a); ) ++l;
                          for (; o(t[u], a) > 0; ) --u;
                        }
                        (0 === o(t[n], a) ? ui(t, n, u) : ui(t, ++u, i),
                          u <= r && (n = u + 1),
                          r <= u && (i = u - 1));
                      }
                      return t;
                    })(e, o).subarray(0, o + 1)
                  );
                return a + (ur(e.subarray(o + 1)) - a) * (i - o);
              }
            })(e, n / t)
          );
        }),
        (r.copy = function () {
          return sn(t).domain(e);
        }),
        aw.apply(r, arguments)
      );
    }
    function si() {
      var e,
        t,
        r,
        n,
        i,
        o,
        a,
        l = 0,
        u = 0.5,
        c = 1,
        s = 1,
        f = lS,
        p = !1;
      function h(e) {
        return isNaN((e *= 1))
          ? a
          : ((e = 0.5 + ((e = +o(e)) - t) * (s * e < s * t ? n : i)),
            f(p ? Math.max(0, Math.min(1, e)) : e));
      }
      function d(e) {
        return function (t) {
          var r, n, i;
          return arguments.length
            ? (([r, n, i] = t),
              (f = (function (e, t) {
                void 0 === t && ((t = e), (e = lb));
                for (var r = 0, n = t.length - 1, i = t[0], o = Array(n < 0 ? 0 : n); r < n; )
                  o[r] = e(i, (i = t[++r]));
                return function (e) {
                  var t = Math.max(0, Math.min(n - 1, Math.floor((e *= n))));
                  return o[t](e - t);
                };
              })(e, [r, n, i])),
              h)
            : [f(0), f(0.5), f(1)];
        };
      }
      return (
        (h.domain = function (a) {
          return arguments.length
            ? (([l, u, c] = a),
              (e = o((l *= 1))),
              (t = o((u *= 1))),
              (r = o((c *= 1))),
              (n = e === t ? 0 : 0.5 / (t - e)),
              (i = t === r ? 0 : 0.5 / (r - t)),
              (s = t < e ? -1 : 1),
              h)
            : [l, u, c];
        }),
        (h.clamp = function (e) {
          return arguments.length ? ((p = !!e), h) : p;
        }),
        (h.interpolator = function (e) {
          return arguments.length ? ((f = e), h) : f;
        }),
        (h.range = d(lb)),
        (h.rangeRound = d(lx)),
        (h.unknown = function (e) {
          return arguments.length ? ((a = e), h) : a;
        }),
        function (a) {
          return (
            (o = a),
            (e = a(l)),
            (t = a(u)),
            (r = a(c)),
            (n = e === t ? 0 : 0.5 / (t - e)),
            (i = t === r ? 0 : 0.5 / (r - t)),
            (s = t < e ? -1 : 1),
            h
          );
        }
      );
    }
    function so() {
      var e = lF(si()(lS));
      return (
        (e.copy = function () {
          return c4(e, so());
        }),
        aw.apply(e, arguments)
      );
    }
    function sa() {
      var e = lZ(si()).domain([0.1, 1, 10]);
      return (
        (e.copy = function () {
          return c4(e, sa()).base(e.base());
        }),
        aw.apply(e, arguments)
      );
    }
    function sl() {
      var e = l1(si());
      return (
        (e.copy = function () {
          return c4(e, sl()).constant(e.constant());
        }),
        aw.apply(e, arguments)
      );
    }
    function su() {
      var e = l8(si());
      return (
        (e.copy = function () {
          return c4(e, su()).exponent(e.exponent());
        }),
        aw.apply(e, arguments)
      );
    }
    function sc() {
      return su.apply(null, arguments).exponent(0.5);
    }
    ((p = (f = (function (e) {
      var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        o = e.days,
        a = e.shortDays,
        l = e.months,
        u = e.shortMonths,
        c = u0(i),
        s = u1(i),
        f = u0(o),
        p = u1(o),
        h = u0(a),
        d = u1(a),
        y = u0(l),
        v = u1(l),
        g = u0(u),
        m = u1(u),
        b = {
          a: function (e) {
            return a[e.getDay()];
          },
          A: function (e) {
            return o[e.getDay()];
          },
          b: function (e) {
            return u[e.getMonth()];
          },
          B: function (e) {
            return l[e.getMonth()];
          },
          c: null,
          d: cp,
          e: cp,
          f: cg,
          g: c_,
          G: ck,
          H: ch,
          I: cd,
          j: cy,
          L: cv,
          m: cm,
          M: cb,
          p: function (e) {
            return i[+(e.getHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getMonth() / 3);
          },
          Q: cJ,
          s: c0,
          S: cx,
          u: cw,
          U: cO,
          V: cP,
          w: cA,
          W: cj,
          x: null,
          X: null,
          y: cE,
          Y: cM,
          Z: cT,
          "%": cQ,
        },
        x = {
          a: function (e) {
            return a[e.getUTCDay()];
          },
          A: function (e) {
            return o[e.getUTCDay()];
          },
          b: function (e) {
            return u[e.getUTCMonth()];
          },
          B: function (e) {
            return l[e.getUTCMonth()];
          },
          c: null,
          d: cC,
          e: cC,
          f: cz,
          g: cV,
          G: cG,
          H: cD,
          I: cI,
          j: cN,
          L: cL,
          m: cR,
          M: cB,
          p: function (e) {
            return i[+(e.getUTCHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getUTCMonth() / 3);
          },
          Q: cJ,
          s: c0,
          S: cU,
          u: cF,
          U: c$,
          V: cW,
          w: cq,
          W: cY,
          x: null,
          X: null,
          y: cH,
          Y: cX,
          Z: cZ,
          "%": cQ,
        },
        w = {
          a: function (e, t, r) {
            var n = h.exec(t.slice(r));
            return n ? ((e.w = d.get(n[0].toLowerCase())), r + n[0].length) : -1;
          },
          A: function (e, t, r) {
            var n = f.exec(t.slice(r));
            return n ? ((e.w = p.get(n[0].toLowerCase())), r + n[0].length) : -1;
          },
          b: function (e, t, r) {
            var n = g.exec(t.slice(r));
            return n ? ((e.m = m.get(n[0].toLowerCase())), r + n[0].length) : -1;
          },
          B: function (e, t, r) {
            var n = y.exec(t.slice(r));
            return n ? ((e.m = v.get(n[0].toLowerCase())), r + n[0].length) : -1;
          },
          c: function (e, r, n) {
            return P(e, t, r, n);
          },
          d: cr,
          e: cr,
          f: cu,
          g: u7,
          G: u4,
          H: ci,
          I: ci,
          j: cn,
          L: cl,
          m: ct,
          M: co,
          p: function (e, t, r) {
            var n = c.exec(t.slice(r));
            return n ? ((e.p = s.get(n[0].toLowerCase())), r + n[0].length) : -1;
          },
          q: ce,
          Q: cs,
          s: cf,
          S: ca,
          u: u5,
          U: u3,
          V: u6,
          w: u2,
          W: u8,
          x: function (e, t, n) {
            return P(e, r, t, n);
          },
          X: function (e, t, r) {
            return P(e, n, t, r);
          },
          y: u7,
          Y: u4,
          Z: u9,
          "%": cc,
        };
      function O(e, t) {
        return function (r) {
          var n,
            i,
            o,
            a = [],
            l = -1,
            u = 0,
            c = e.length;
          for (r instanceof Date || (r = new Date(+r)); ++l < c; )
            37 === e.charCodeAt(l) &&
              (a.push(e.slice(u, l)),
              null != (i = uV[(n = e.charAt(++l))])
                ? (n = e.charAt(++l))
                : (i = "e" === n ? " " : "0"),
              (o = t[n]) && (n = o(r, i)),
              a.push(n),
              (u = l + 1));
          return (a.push(e.slice(u, l)), a.join(""));
        };
      }
      function S(e, t) {
        return function (r) {
          var n,
            i,
            o = uH(1900, void 0, 1);
          if (P(o, e, (r += ""), 0) != r.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
          if (
            (!t || "Z" in o || (o.Z = 0),
            "p" in o && (o.H = (o.H % 12) + 12 * o.p),
            void 0 === o.m && (o.m = "q" in o ? o.q : 0),
            "V" in o)
          ) {
            if (o.V < 1 || o.V > 53) return null;
            ("w" in o || (o.w = 1),
              "Z" in o
                ? ((n =
                    (i = (n = uY(uH(o.y, 0, 1))).getUTCDay()) > 4 || 0 === i ? uA.ceil(n) : uA(n)),
                  (n = uC.offset(n, (o.V - 1) * 7)),
                  (o.y = n.getUTCFullYear()),
                  (o.m = n.getUTCMonth()),
                  (o.d = n.getUTCDate() + ((o.w + 6) % 7)))
                : ((n = (i = (n = uq(uH(o.y, 0, 1))).getDay()) > 4 || 0 === i ? ug.ceil(n) : ug(n)),
                  (n = uT.offset(n, (o.V - 1) * 7)),
                  (o.y = n.getFullYear()),
                  (o.m = n.getMonth()),
                  (o.d = n.getDate() + ((o.w + 6) % 7))));
          } else
            ("W" in o || "U" in o) &&
              ("w" in o || (o.w = "u" in o ? o.u % 7 : +("W" in o)),
              (i = "Z" in o ? uY(uH(o.y, 0, 1)).getUTCDay() : uq(uH(o.y, 0, 1)).getDay()),
              (o.m = 0),
              (o.d =
                "W" in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return "Z" in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), uY(o)) : uq(o);
        };
      }
      function P(e, t, r, n) {
        for (var i, o, a = 0, l = t.length, u = r.length; a < l; ) {
          if (n >= u) return -1;
          if (37 === (i = t.charCodeAt(a++))) {
            if (!(o = w[(i = t.charAt(a++)) in uV ? t.charAt(a++) : i]) || (n = o(e, r, n)) < 0)
              return -1;
          } else if (i != r.charCodeAt(n++)) return -1;
        }
        return n;
      }
      return (
        (b.x = O(r, b)),
        (b.X = O(n, b)),
        (b.c = O(t, b)),
        (x.x = O(r, x)),
        (x.X = O(n, x)),
        (x.c = O(t, x)),
        {
          format: function (e) {
            var t = O((e += ""), b);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          parse: function (e) {
            var t = S((e += ""), !1);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcFormat: function (e) {
            var t = O((e += ""), x);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcParse: function (e) {
            var t = S((e += ""), !0);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    })).format),
      f.parse,
      (h = f.utcFormat),
      f.utcParse,
      e.s(
        [
          "scaleBand",
          () => aE,
          "scaleDiverging",
          () => so,
          "scaleDivergingLog",
          () => sa,
          "scaleDivergingPow",
          () => su,
          "scaleDivergingSqrt",
          () => sc,
          "scaleDivergingSymlog",
          () => sl,
          "scaleIdentity",
          () => lK,
          "scaleImplicit",
          0,
          aA,
          "scaleLinear",
          () => l$,
          "scaleLog",
          () => lQ,
          "scaleOrdinal",
          () => aj,
          "scalePoint",
          () => a_,
          "scalePow",
          () => l4,
          "scaleQuantile",
          () => uo,
          "scaleQuantize",
          () => ua,
          "scaleRadial",
          () => ue,
          "scaleSequential",
          () => c7,
          "scaleSequentialLog",
          () => c9,
          "scaleSequentialPow",
          () => st,
          "scaleSequentialQuantile",
          () => sn,
          "scaleSequentialSqrt",
          () => sr,
          "scaleSequentialSymlog",
          () => se,
          "scaleSqrt",
          () => l7,
          "scaleSymlog",
          () => l2,
          "scaleThreshold",
          () => ul,
          "scaleTime",
          () => c3,
          "scaleUtc",
          () => c6,
          "tickFormat",
          () => lU,
        ],
        59525
      ),
      e.i(59525),
      e.s(
        [
          "scaleBand",
          () => aE,
          "scaleDiverging",
          () => so,
          "scaleDivergingLog",
          () => sa,
          "scaleDivergingPow",
          () => su,
          "scaleDivergingSqrt",
          () => sc,
          "scaleDivergingSymlog",
          () => sl,
          "scaleIdentity",
          () => lK,
          "scaleImplicit",
          0,
          aA,
          "scaleLinear",
          () => l$,
          "scaleLog",
          () => lQ,
          "scaleOrdinal",
          () => aj,
          "scalePoint",
          () => a_,
          "scalePow",
          () => l4,
          "scaleQuantile",
          () => uo,
          "scaleQuantize",
          () => ua,
          "scaleRadial",
          () => ue,
          "scaleSequential",
          () => c7,
          "scaleSequentialLog",
          () => c9,
          "scaleSequentialPow",
          () => st,
          "scaleSequentialQuantile",
          () => sn,
          "scaleSequentialSqrt",
          () => sr,
          "scaleSequentialSymlog",
          () => se,
          "scaleSqrt",
          () => l7,
          "scaleSymlog",
          () => l2,
          "scaleThreshold",
          () => ul,
          "scaleTime",
          () => c3,
          "scaleUtc",
          () => c6,
          "tickFormat",
          () => lU,
        ],
        48293
      ));
    var ss = e.i(48293),
      sf = (e) => e.chartData,
      sp = rb([sf], (e) => {
        var t = null != e.chartData ? e.chartData.length - 1 : 0;
        return {
          chartData: e.chartData,
          computedData: e.computedData,
          dataEndIndex: t,
          dataStartIndex: 0,
        };
      }),
      sh = (e, t, r, n) => (n ? sp(e) : sf(e));
    function sd(e) {
      if (Array.isArray(e) && 2 === e.length) {
        var [t, r] = e;
        if (eL(t) && eL(r)) return !0;
      }
      return !1;
    }
    function sy(e, t, r) {
      return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
    }
    function sv(e, t) {
      if (t && "function" != typeof e && Array.isArray(e) && 2 === e.length) {
        var r,
          n,
          [i, o] = e;
        if (eL(i)) r = i;
        else if ("function" == typeof i) return;
        if (eL(o)) n = o;
        else if ("function" == typeof o) return;
        var a = [r, n];
        if (sd(a)) return a;
      }
    }
    e.s(
      [
        "selectChartDataAndAlwaysIgnoreIndexes",
        () => sp,
        "selectChartDataWithIndexes",
        () => sf,
        "selectChartDataWithIndexesIfNotInPanoramaPosition4",
        () => sh,
      ],
      42667
    );
    var sg = e.i(48879);
    function sm(e) {
      return 0 === e ? 1 : Math.floor(new sg.default(e).abs().log(10).toNumber()) + 1;
    }
    function sb(e, t, r) {
      for (var n = new sg.default(e), i = 0, o = []; n.lt(t) && i < 1e5; )
        (o.push(n.toNumber()), (n = n.add(r)), i++);
      return o;
    }
    var sx = (e) => {
        var [t, r] = e,
          [n, i] = [t, r];
        return (t > r && ([n, i] = [r, t]), [n, i]);
      },
      sw = (e, t, r) => {
        if (e.lte(0)) return new sg.default(0);
        var n = sm(e.toNumber()),
          i = new sg.default(10).pow(n),
          o = e.div(i),
          a = 1 !== n ? 0.05 : 0.1,
          l = new sg.default(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i);
        return new sg.default(t ? l.toNumber() : Math.ceil(l.toNumber()));
      },
      sO = function (e, t, r, n) {
        var i,
          o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((t - e) / (r - 1)))
          return {
            step: new sg.default(0),
            tickMin: new sg.default(0),
            tickMax: new sg.default(0),
          };
        var a = sw(new sg.default(t).sub(e).div(r - 1), n, o),
          l = Math.ceil(
            (i =
              e <= 0 && t >= 0
                ? new sg.default(0)
                : (i = new sg.default(e).add(t).div(2)).sub(new sg.default(i).mod(a)))
              .sub(e)
              .div(a)
              .toNumber()
          ),
          u = Math.ceil(new sg.default(t).sub(i).div(a).toNumber()),
          c = l + u + 1;
        return c > r
          ? sO(e, t, r, n, o + 1)
          : (c < r && ((u = t > 0 ? u + (r - c) : u), (l = t > 0 ? l : l + (r - c))),
            {
              step: a,
              tickMin: i.sub(new sg.default(l).mul(a)),
              tickMax: i.add(new sg.default(u).mul(a)),
            });
      },
      sS = function (e) {
        var [t, r] = e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = Math.max(n, 2),
          [a, l] = sx([t, r]);
        if (a === -1 / 0 || l === 1 / 0) {
          var u =
            l === 1 / 0 ? [a, ...Array(n - 1).fill(1 / 0)] : [...Array(n - 1).fill(-1 / 0), l];
          return t > r ? u.reverse() : u;
        }
        if (a === l)
          return ((e, t, r) => {
            var n = new sg.default(1),
              i = new sg.default(e);
            if (!i.isint() && r) {
              var o = Math.abs(e);
              o < 1
                ? ((n = new sg.default(10).pow(sm(e) - 1)),
                  (i = new sg.default(Math.floor(i.div(n).toNumber())).mul(n)))
                : o > 1 && (i = new sg.default(Math.floor(e)));
            } else
              0 === e
                ? (i = new sg.default(Math.floor((t - 1) / 2)))
                : r || (i = new sg.default(Math.floor(e)));
            for (var a = Math.floor((t - 1) / 2), l = [], u = 0; u < t; u++)
              l.push(i.add(new sg.default(u - a).mul(n)).toNumber());
            return l;
          })(a, n, i);
        var { step: c, tickMin: s, tickMax: f } = sO(a, l, o, i, 0),
          p = sb(s, f.add(new sg.default(0.1).mul(c)), c);
        return t > r ? p.reverse() : p;
      },
      sP = function (e, t) {
        var [r, n] = e,
          i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [o, a] = sx([r, n]);
        if (o === -1 / 0 || a === 1 / 0) return [r, n];
        if (o === a) return [o];
        var l = Math.max(t, 2),
          u = sw(new sg.default(a).sub(o).div(l - 1), i, 0),
          c = [...sb(new sg.default(o), new sg.default(a), u), a];
        return (!1 === i && (c = c.map((e) => Math.round(e))), r > n ? c.reverse() : c);
      },
      sA = (e) => e.rootProps.barCategoryGap,
      sj = (e) => e.rootProps.stackOffset,
      sE = (e) => e.rootProps.reverseStackOrder,
      s_ = (e) => e.options.chartName,
      sM = (e) => e.rootProps.syncId,
      sk = (e) => e.rootProps.syncMethod,
      sT = (e) => e.options.eventEmitter;
    e.s(
      [
        "selectBarCategoryGap",
        () => sA,
        "selectChartName",
        () => s_,
        "selectEventEmitter",
        () => sT,
        "selectReverseStackOrder",
        () => sE,
        "selectStackOffsetType",
        () => sj,
        "selectSyncId",
        () => sM,
        "selectSyncMethod",
        () => sk,
      ],
      74046
    );
    var sC = (e, t) => t;
    e.s(["pickAxisType", () => sC], 55443);
    var sD = (e, t, r) => r;
    function sI(e) {
      return null == e ? void 0 : e.id;
    }
    function sN(e, t, r) {
      var { chartData: n = [] } = t,
        { allowDuplicatedCategory: i, dataKey: o } = r,
        a = new Map();
      return (
        e.forEach((e) => {
          var t,
            r = null != (t = e.data) ? t : n;
          if (null != r && 0 !== r.length) {
            var l = sI(e);
            r.forEach((t, r) => {
              var n,
                u = null == o || i ? r : String(nM(t, o, null)),
                c = nM(t, e.dataKey, 0);
              (Object.assign((n = a.has(u) ? a.get(u) : {}), { [l]: c }), a.set(u, n));
            });
          }
        }),
        Array.from(a.values())
      );
    }
    function sL(e) {
      return "stackId" in e && null != e.stackId && null != e.dataKey;
    }
    e.s(["pickAxisId", () => sD], 48101);
    var sz = (e, t) => e === t || (null != e && null != t && e[0] === t[0] && e[1] === t[1]),
      sR = (e) => {
        var t = iO(e);
        return "horizontal" === t
          ? "xAxis"
          : "vertical" === t
            ? "yAxis"
            : "centric" === t
              ? "angleAxis"
              : "radiusAxis";
      },
      sB = (e) => e.tooltip.settings.axisId;
    function sU(e) {
      var t = e.ticks,
        r = e.bandwidth,
        n = e.range(),
        i = [Math.min(...n), Math.max(...n)];
      return {
        domain: () => e.domain(),
        range: (function (e) {
          function t() {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(() => i),
        rangeMin: () => i[0],
        rangeMax: () => i[1],
        isInRange(e) {
          var t = i[0],
            r = i[1];
          return t <= r ? e >= t && e <= r : e >= r && e <= t;
        },
        bandwidth: r ? () => r.call(e) : void 0,
        ticks: t ? (r) => t.call(e, r) : void 0,
        map: (t, r) => {
          var n = e(t);
          if (null != n) {
            if (e.bandwidth && null != r && r.position) {
              var i = e.bandwidth();
              switch (r.position) {
                case "middle":
                  n += i / 2;
                  break;
                case "end":
                  n += i;
              }
            }
            return n;
          }
        },
      };
    }
    function sF(e, t, r) {
      if ("function" == typeof e) return sU(e.copy().domain(t).range(r));
      if (null != e) {
        var n = (function (e) {
          if (e in ss) return ss[e]();
          var t = "scale".concat(eh(e));
          if (t in ss) return ss[t]();
        })(e);
        if (null != n) return (n.domain(t).range(r), sU(n));
      }
    }
    var s$ = (e, t) => {
      if (null != t)
        if ("linear" !== e) return t;
        else {
          if (!sd(t)) {
            for (var r, n, i = 0; i < t.length; i++) {
              var o = t[i];
              eL(o) && ((void 0 === r || o < r) && (r = o), (void 0 === n || o > n) && (n = o));
            }
            return void 0 !== r && void 0 !== n ? [r, n] : void 0;
          }
          return t;
        }
    };
    function sK(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function sW(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? sK(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : sK(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(["combineCheckedDomain", () => s$], 72540);
    var sq = [0, "auto"],
      sY = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: void 0,
        height: 30,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "bottom",
        padding: { left: 0, right: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "category",
        unit: void 0,
      },
      sH = (e, t) => e.cartesianAxis.xAxis[t],
      sV = (e, t) => {
        var r = sH(e, t);
        return null == r ? sY : r;
      },
      sX = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: sq,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "left",
        padding: { top: 0, bottom: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "number",
        unit: void 0,
        width: 60,
      },
      sG = (e, t) => e.cartesianAxis.yAxis[t],
      sZ = (e, t) => {
        var r = sG(e, t);
        return null == r ? sX : r;
      },
      sQ = {
        domain: [0, "auto"],
        includeHidden: !1,
        reversed: !1,
        allowDataOverflow: !1,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        id: 0,
        name: "",
        range: [64, 64],
        scale: "auto",
        type: "number",
        unit: "",
      },
      sJ = (e, t) => {
        var r = e.cartesianAxis.zAxis[t];
        return null == r ? sQ : r;
      },
      s0 = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return sV(e, r);
          case "yAxis":
            return sZ(e, r);
          case "zAxis":
            return sJ(e, r);
          case "angleAxis":
            return iz(e, r);
          case "radiusAxis":
            return iR(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      s1 = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return sV(e, r);
          case "yAxis":
            return sZ(e, r);
          case "angleAxis":
            return iz(e, r);
          case "radiusAxis":
            return iR(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      s2 = (e) =>
        e.graphicalItems.cartesianItems.some((e) => "bar" === e.type) ||
        e.graphicalItems.polarItems.some((e) => "radialBar" === e.type);
    function s5(e, t) {
      return (r) => {
        switch (e) {
          case "xAxis":
            return "xAxisId" in r && r.xAxisId === t;
          case "yAxis":
            return "yAxisId" in r && r.yAxisId === t;
          case "zAxis":
            return "zAxisId" in r && r.zAxisId === t;
          case "angleAxis":
            return "angleAxisId" in r && r.angleAxisId === t;
          case "radiusAxis":
            return "radiusAxisId" in r && r.radiusAxisId === t;
          default:
            return !1;
        }
      };
    }
    var s3 = (e) => e.graphicalItems.cartesianItems,
      s6 = rb([sC, sD], s5),
      s8 = (e, t, r) =>
        e.filter(r).filter((e) => (null == t ? void 0 : t.includeHidden) === !0 || !e.hide),
      s4 = rb([s3, s0, s6], s8, { memoizeOptions: { resultEqualityCheck: iH } }),
      s7 = rb([s4], (e) => e.filter((e) => "area" === e.type || "bar" === e.type).filter(sL)),
      s9 = (e) => e.filter((e) => !("stackId" in e) || void 0 === e.stackId),
      fe = rb([s4], s9),
      ft = (e) =>
        e
          .map((e) => e.data)
          .filter(Boolean)
          .flat(1),
      fr = rb([s4], ft, { memoizeOptions: { resultEqualityCheck: iH } }),
      fn = (e, t) => {
        var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
        return e.length > 0 ? e : r.slice(n, i + 1);
      },
      fi = rb([fr, sh], fn),
      fo = (e, t, r) =>
        (null == t ? void 0 : t.dataKey) != null
          ? e.map((e) => ({ value: nM(e, t.dataKey) }))
          : r.length > 0
            ? r.map((e) => e.dataKey).flatMap((t) => e.map((e) => ({ value: nM(e, t) })))
            : e.map((e) => ({ value: e })),
      fa = rb([fi, s0, s4], fo);
    function fl(e, t) {
      switch (e) {
        case "xAxis":
          return "x" === t.direction;
        case "yAxis":
          return "y" === t.direction;
        default:
          return !1;
      }
    }
    function fu(e) {
      if (eo(e) || e instanceof Date) {
        var t = Number(e);
        if (eL(t)) return t;
      }
    }
    function fc(e) {
      if (Array.isArray(e)) {
        var t = [fu(e[0]), fu(e[1])];
        return sd(t) ? t : void 0;
      }
      var r = fu(e);
      if (null != r) return [r, r];
    }
    function fs(e) {
      return e.map(fu).filter(ed);
    }
    var ff = (e) => {
        var t = sR(e),
          r = sB(e);
        return s1(e, t, r);
      },
      fp = rb([ff], (e) => (null == e ? void 0 : e.dataKey)),
      fh = rb([s7, sh, ff], sN),
      fd = (e, t, r, n) =>
        Object.fromEntries(
          Object.entries(
            t.reduce((e, t) => {
              if (null == t.stackId) return e;
              var r = e[t.stackId];
              return (null == r && (r = []), r.push(t), (e[t.stackId] = r), e);
            }, {})
          ).map((t) => {
            var [i, o] = t,
              a = n ? [...o].reverse() : o;
            return [i, { stackedData: nD(e, a.map(sI), r), graphicalItems: a }];
          })
        ),
      fy = rb([fh, s7, sj, sE], fd),
      fv = (e, t, r, n) => {
        var { dataStartIndex: i, dataEndIndex: o } = t;
        if (null == n && "zAxis" !== r) {
          var a = nN(e, i, o);
          if (null == a || 0 !== a[0] || 0 !== a[1]) return a;
        }
      },
      fg = rb([s0], (e) => e.allowDataOverflow),
      fm = (e) => {
        var t;
        if (null == e || !("domain" in e)) return sq;
        if (null != e.domain) return e.domain;
        if ("ticks" in e && null != e.ticks) {
          if ("number" === e.type) {
            var r = fs(e.ticks);
            return [Math.min(...r), Math.max(...r)];
          }
          if ("category" === e.type) return e.ticks.map(String);
        }
        return null != (t = null == e ? void 0 : e.domain) ? t : sq;
      },
      fb = rb([s0], fm),
      fx = rb([fb, fg], sv),
      fw = rb([fy, sf, sC, fx], fv, { memoizeOptions: { resultEqualityCheck: sz } }),
      fO = (e) => e.errorBars,
      fS = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t.filter(Boolean);
        if (0 !== n.length) {
          var i = n.flat();
          return [Math.min(...i), Math.max(...i)];
        }
      },
      fP = (e, t, r, n, i) => {
        var o, a;
        if (
          (r.length > 0 &&
            e.forEach((e) => {
              r.forEach((r) => {
                var l,
                  u,
                  c = null == (l = n[r.id]) ? void 0 : l.filter((e) => fl(i, e)),
                  s = nM(e, null != (u = t.dataKey) ? u : r.dataKey),
                  f =
                    !(!c || "number" != typeof s || er(s)) && c.length
                      ? fs(
                          c.flatMap((t) => {
                            var r,
                              n,
                              i = nM(e, t.dataKey);
                            if ((Array.isArray(i) ? ([r, n] = i) : (r = n = i), eL(r) && eL(n)))
                              return [s - r, s + n];
                          })
                        )
                      : [];
                if (f.length >= 2) {
                  var p = Math.min(...f),
                    h = Math.max(...f);
                  ((null == o || p < o) && (o = p), (null == a || h > a) && (a = h));
                }
                var d = fc(s);
                null != d &&
                  ((o = null == o ? d[0] : Math.min(o, d[0])),
                  (a = null == a ? d[1] : Math.max(a, d[1])));
              });
            }),
          (null == t ? void 0 : t.dataKey) != null &&
            e.forEach((e) => {
              var r = fc(nM(e, t.dataKey));
              null != r &&
                ((o = null == o ? r[0] : Math.min(o, r[0])),
                (a = null == a ? r[1] : Math.max(a, r[1])));
            }),
          eL(o) && eL(a))
        )
          return [o, a];
      },
      fA = rb([fi, s0, fe, fO, sC], fP, { memoizeOptions: { resultEqualityCheck: sz } });
    function fj(e) {
      var { value: t } = e;
      if (eo(t) || t instanceof Date) return t;
    }
    var fE = (e) => e.referenceElements.dots,
      f_ = (e, t, r) =>
        e
          .filter((e) => "extendDomain" === e.ifOverflow)
          .filter((e) => ("xAxis" === t ? e.xAxisId === r : e.yAxisId === r)),
      fM = rb([fE, sC, sD], f_),
      fk = (e) => e.referenceElements.areas,
      fT = rb([fk, sC, sD], f_),
      fC = (e) => e.referenceElements.lines,
      fD = rb([fC, sC, sD], f_),
      fI = (e, t) => {
        if (null != e) {
          var r = fs(e.map((e) => ("xAxis" === t ? e.x : e.y)));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      fN = rb(fM, sC, fI),
      fL = (e, t) => {
        if (null != e) {
          var r = fs(e.flatMap((e) => ["xAxis" === t ? e.x1 : e.y1, "xAxis" === t ? e.x2 : e.y2]));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      fz = rb([fT, sC], fL),
      fR = (e, t) => {
        if (null != e) {
          var r = e.flatMap((e) =>
            "xAxis" === t
              ? (function (e) {
                  if (null != e.x) return fs([e.x]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.x);
                  return null == r || 0 === r.length ? [] : fs(r);
                })(e)
              : (function (e) {
                  if (null != e.y) return fs([e.y]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.y);
                  return null == r || 0 === r.length ? [] : fs(r);
                })(e)
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      fB = rb([fD, sC], fR),
      fU = rb(fN, fB, fz, (e, t, r) => fS(e, r, t)),
      fF = (e, t, r, n, i, o, a, l) =>
        null != r
          ? r
          : (function (e, t, r) {
              if (r || null != t) {
                if ("function" == typeof e && null != t)
                  try {
                    var n = e(t, r);
                    if (sd(n)) return sy(n, t, r);
                  } catch (e) {}
                if (Array.isArray(e) && 2 === e.length) {
                  var i,
                    o,
                    [a, l] = e;
                  if ("auto" === a) null != t && (i = Math.min(...t));
                  else if (ei(a)) i = a;
                  else if ("function" == typeof a)
                    try {
                      null != t && (i = a(null == t ? void 0 : t[0]));
                    } catch (e) {}
                  else if ("string" == typeof a && nL.test(a)) {
                    var u = nL.exec(a);
                    if (null == u || null == u[1] || null == t) i = void 0;
                    else {
                      var c = +u[1];
                      i = t[0] - c;
                    }
                  } else i = null == t ? void 0 : t[0];
                  if ("auto" === l) null != t && (o = Math.max(...t));
                  else if (ei(l)) o = l;
                  else if ("function" == typeof l)
                    try {
                      null != t && (o = l(null == t ? void 0 : t[1]));
                    } catch (e) {}
                  else if ("string" == typeof l && nz.test(l)) {
                    var s = nz.exec(l);
                    if (null == s || null == s[1] || null == t) o = void 0;
                    else {
                      var f = +s[1];
                      o = t[1] + f;
                    }
                  } else o = null == t ? void 0 : t[1];
                  var p = [i, o];
                  if (sd(p)) return null == t ? p : sy(p, t, r);
                }
              }
            })(
              t,
              ("vertical" === a && "xAxis" === l) || ("horizontal" === a && "yAxis" === l)
                ? fS(n, o, i)
                : fS(o, i),
              e.allowDataOverflow
            ),
      f$ = rb([s0, fb, fx, fw, fA, fU, iO, sC], fF, {
        memoizeOptions: { resultEqualityCheck: sz },
      }),
      fK = [0, 1],
      fW = (e, t, r, n, i, o, a) => {
        if ((null != e && null != r && 0 !== r.length) || void 0 !== a) {
          var l,
            u,
            { dataKey: c, type: s } = e,
            f = nT(t, o);
          return f && null == c
            ? (0, ab.default)(0, null != (u = null == r ? void 0 : r.length) ? u : 0)
            : "category" === s
              ? ((l = n.map(fj).filter((e) => null != e)),
                f && (null == e.dataKey || (e.allowDuplicatedCategory && ec(l)))
                  ? (0, ab.default)(0, n.length)
                  : e.allowDuplicatedCategory
                    ? l
                    : Array.from(new Set(l)))
              : "expand" === i
                ? fK
                : a;
        }
      },
      fq = rb([s0, iO, fi, fa, sj, sC, f$], fW),
      fY = (e, t, r) => {
        if (null != e) {
          var { scale: n, type: i } = e;
          if ("auto" === n)
            return "category" === i &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !t))
              ? "point"
              : "category" === i
                ? "band"
                : "linear";
          if ("string" == typeof n) {
            var o = "scale".concat(eh(n));
            return o in ss ? o : "point";
          }
        }
      },
      fH = rb([s0, s2, s_], fY);
    function fV(e, t, r, n) {
      if (null != r && null != n)
        return "function" == typeof e.scale ? sF(e.scale, r, n) : sF(t, r, n);
    }
    var fX = (e, t, r) => {
        var n = fm(t);
        if ("auto" === r || "linear" === r) {
          if (
            null != t &&
            t.tickCount &&
            Array.isArray(n) &&
            ("auto" === n[0] || "auto" === n[1]) &&
            sd(e)
          )
            return sS(e, t.tickCount, t.allowDecimals);
          if (null != t && t.tickCount && "number" === t.type && sd(e))
            return sP(e, t.tickCount, t.allowDecimals);
        }
      },
      fG = rb([fq, s1, fH], fX),
      fZ = (e, t, r, n) => {
        if (
          "angleAxis" !== n &&
          (null == e ? void 0 : e.type) === "number" &&
          sd(t) &&
          Array.isArray(r) &&
          r.length > 0
        ) {
          var i, o;
          return [
            Math.min(t[0], null != (i = r[0]) ? i : 0),
            Math.max(t[1], null != (o = r[r.length - 1]) ? o : 0),
          ];
        }
        return t;
      },
      fQ = rb([s0, fq, fG, sC], fZ),
      fJ = rb(fa, s0, (e, t) => {
        if (t && "number" === t.type) {
          var r = 1 / 0,
            n = Array.from(fs(e.map((e) => e.value))).sort((e, t) => e - t),
            i = n[0],
            o = n[n.length - 1];
          if (null == i || null == o) return 1 / 0;
          var a = o - i;
          if (0 === a) return 1 / 0;
          for (var l = 0; l < n.length - 1; l++) {
            var u = n[l],
              c = n[l + 1];
            null != u && null != c && (r = Math.min(r, c - u));
          }
          return r / a;
        }
      }),
      f0 = rb(
        fJ,
        iO,
        sA,
        nJ,
        (e, t, r, n, i) => i,
        (e, t, r, n, i) => {
          if (!eL(e)) return 0;
          var o = "vertical" === t ? n.height : n.width;
          if ("gap" === i) return (e * o) / 2;
          if ("no-gap" === i) {
            var a = eu(r, e * o),
              l = (e * o) / 2;
            return l - a - ((l - a) / o) * a;
          }
          return 0;
        }
      ),
      f1 = rb(
        sV,
        (e, t, r) => {
          var n = sV(e, t);
          return null == n || "string" != typeof n.padding ? 0 : f0(e, "xAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { left: 0, right: 0 };
          var r,
            n,
            { padding: i } = e;
          return "string" == typeof i
            ? { left: t, right: t }
            : {
                left: (null != (r = i.left) ? r : 0) + t,
                right: (null != (n = i.right) ? n : 0) + t,
              };
        }
      ),
      f2 = rb(
        sZ,
        (e, t, r) => {
          var n = sZ(e, t);
          return null == n || "string" != typeof n.padding ? 0 : f0(e, "yAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { top: 0, bottom: 0 };
          var r,
            n,
            { padding: i } = e;
          return "string" == typeof i
            ? { top: t, bottom: t }
            : {
                top: (null != (r = i.top) ? r : 0) + t,
                bottom: (null != (n = i.bottom) ? n : 0) + t,
              };
        }
      ),
      f5 = rb([nJ, f1, n6, n3, (e, t, r) => r], (e, t, r, n, i) => {
        var { padding: o } = n;
        return i ? [o.left, r.width - o.right] : [e.left + t.left, e.left + e.width - t.right];
      }),
      f3 = rb([nJ, iO, f2, n6, n3, (e, t, r) => r], (e, t, r, n, i, o) => {
        var { padding: a } = i;
        return o
          ? [n.height - a.bottom, a.top]
          : "horizontal" === t
            ? [e.top + e.height - r.bottom, e.top + r.top]
            : [e.top + r.top, e.top + e.height - r.bottom];
      }),
      f6 = (e, t, r, n) => {
        var i;
        switch (t) {
          case "xAxis":
            return f5(e, r, n);
          case "yAxis":
            return f3(e, r, n);
          case "zAxis":
            return null == (i = sJ(e, r)) ? void 0 : i.range;
          case "angleAxis":
            return iK(e);
          case "radiusAxis":
            return iW(e, r);
          default:
            return;
        }
      },
      f8 = rb([s0, f6], iT),
      f4 = rb([fH, fQ], s$),
      f7 = rb([s0, fH, f4, f8], fV);
    function f9(e, t) {
      return e.id < t.id ? -1 : +(e.id > t.id);
    }
    rb([s4, fO, sC], (e, t, r) =>
      e
        .flatMap((e) => t[e.id])
        .filter(Boolean)
        .filter((e) => fl(r, e))
    );
    var pe = (e, t) => t,
      pt = (e, t, r) => r,
      pr = rb(nH, pe, pt, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(f9)
      ),
      pn = rb(nV, pe, pt, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(f9)
      ),
      pi = (e, t) => ({ width: e.width, height: t.height }),
      po = rb(nJ, sV, pi),
      pa = rb(nW, nJ, pr, pe, pt, (e, t, r, n, i) => {
        var o,
          a = {};
        return (
          r.forEach((r) => {
            var l = pi(t, r);
            null == o &&
              (o = ((e, t, r) => {
                switch (t) {
                  case "top":
                    return e.top;
                  case "bottom":
                    return r - e.bottom;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("top" === n && !i) || ("bottom" === n && i);
            ((a[r.id] = o - Number(u) * l.height), (o += (u ? -1 : 1) * l.height));
          }),
          a
        );
      }),
      pl = rb(nK, nJ, pn, pe, pt, (e, t, r, n, i) => {
        var o,
          a = {};
        return (
          r.forEach((r) => {
            var l = { width: "number" == typeof r.width ? r.width : 60, height: t.height };
            null == o &&
              (o = ((e, t, r) => {
                switch (t) {
                  case "left":
                    return e.left;
                  case "right":
                    return r - e.right;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("left" === n && !i) || ("right" === n && i);
            ((a[r.id] = o - Number(u) * l.width), (o += (u ? -1 : 1) * l.width));
          }),
          a
        );
      }),
      pu = rb(
        [
          nJ,
          sV,
          (e, t) => {
            var r = sV(e, t);
            if (null != r) return pa(e, r.orientation, r.mirror);
          },
          (e, t) => t,
        ],
        (e, t, r, n) => {
          if (null != t) {
            var i = null == r ? void 0 : r[n];
            return null == i ? { x: e.left, y: 0 } : { x: e.left, y: i };
          }
        }
      ),
      pc = rb(
        [
          nJ,
          sZ,
          (e, t) => {
            var r = sZ(e, t);
            if (null != r) return pl(e, r.orientation, r.mirror);
          },
          (e, t) => t,
        ],
        (e, t, r, n) => {
          if (null != t) {
            var i = null == r ? void 0 : r[n];
            return null == i ? { x: 0, y: e.top } : { x: i, y: e.top };
          }
        }
      ),
      ps = rb(nJ, sZ, (e, t) => ({
        width: "number" == typeof t.width ? t.width : 60,
        height: e.height,
      })),
      pf = (e, t, r, n) => {
        if (null != r) {
          var { allowDuplicatedCategory: i, type: o, dataKey: a } = r,
            l = nT(e, n),
            u = t.map((e) => e.value);
          if (a && l && "category" === o && i && ec(u)) return u;
        }
      },
      pp = rb([iO, fa, s0, sC], pf),
      ph = (e, t, r, n) => {
        if (null != r && null != r.dataKey) {
          var { type: i, scale: o } = r;
          if (nT(e, n) && ("number" === i || "auto" !== o)) return t.map((e) => e.value);
        }
      },
      pd = rb([iO, fa, s1, sC], ph);
    rb(
      [
        iO,
        (e, t, r) => {
          switch (t) {
            case "xAxis":
              return sV(e, r);
            case "yAxis":
              return sZ(e, r);
            default:
              throw Error("Unexpected axis type: ".concat(t));
          }
        },
        fH,
        f7,
        pp,
        pd,
        f6,
        fG,
        sC,
      ],
      (e, t, r, n, i, o, a, l, u) => {
        if (null != t) {
          var c = nT(e, u);
          return {
            angle: t.angle,
            interval: t.interval,
            minTickGap: t.minTickGap,
            orientation: t.orientation,
            tick: t.tick,
            tickCount: t.tickCount,
            tickFormatter: t.tickFormatter,
            ticks: t.ticks,
            type: t.type,
            unit: t.unit,
            axisType: u,
            categoricalDomain: o,
            duplicateDomain: i,
            isCategorical: c,
            niceTicks: l,
            range: a,
            realScaleType: r,
            scale: n,
          };
        }
      }
    );
    var py = rb([iO, s1, fH, f7, fG, f6, pp, pd, sC], (e, t, r, n, i, o, a, l, u) => {
        if (null != t && null != n) {
          var c = nT(e, u),
            { type: s, ticks: f, tickCount: p } = t,
            h = "scaleBand" === r && "function" == typeof n.bandwidth ? n.bandwidth() / 2 : 2,
            d = "category" === s && n.bandwidth ? n.bandwidth() / h : 0;
          d = "angleAxis" === u && null != o && o.length >= 2 ? 2 * et(o[0] - o[1]) * d : d;
          var y = f || i;
          return y
            ? y
                .map((e, t) => {
                  var r = a ? a.indexOf(e) : e,
                    i = n.map(r);
                  return eL(i) ? { index: t, coordinate: i + d, value: e, offset: d } : null;
                })
                .filter(ed)
            : c && l
              ? l
                  .map((e, t) => {
                    var r = n.map(e);
                    return eL(r) ? { coordinate: r + d, value: e, index: t, offset: d } : null;
                  })
                  .filter(ed)
              : n.ticks
                ? n
                    .ticks(p)
                    .map((e, t) => {
                      var r = n.map(e);
                      return eL(r) ? { coordinate: r + d, value: e, index: t, offset: d } : null;
                    })
                    .filter(ed)
                : n
                    .domain()
                    .map((e, t) => {
                      var r = n.map(e);
                      return eL(r)
                        ? { coordinate: r + d, value: a ? a[e] : e, index: t, offset: d }
                        : null;
                    })
                    .filter(ed);
        }
      }),
      pv = rb([iO, s1, f7, f6, pp, pd, sC], (e, t, r, n, i, o, a) => {
        if (null != t && null != r && null != n && n[0] !== n[1]) {
          var l = nT(e, a),
            { tickCount: u } = t,
            c = 0;
          return ((c =
            "angleAxis" === a && (null == n ? void 0 : n.length) >= 2
              ? 2 * et(n[0] - n[1]) * c
              : c),
          l && o)
            ? o
                .map((e, t) => {
                  var n = r.map(e);
                  return eL(n) ? { coordinate: n + c, value: e, index: t, offset: c } : null;
                })
                .filter(ed)
            : r.ticks
              ? r
                  .ticks(u)
                  .map((e, t) => {
                    var n = r.map(e);
                    return eL(n) ? { coordinate: n + c, value: e, index: t, offset: c } : null;
                  })
                  .filter(ed)
              : r
                  .domain()
                  .map((e, t) => {
                    var n = r.map(e);
                    return eL(n)
                      ? { coordinate: n + c, value: i ? i[e] : e, index: t, offset: c }
                      : null;
                  })
                  .filter(ed);
        }
      }),
      pg = rb(s0, f7, (e, t) => {
        if (null != e && null != t) return sW(sW({}, e), {}, { scale: t });
      }),
      pm = rb([s0, fH, fq, f8], fV);
    rb(
      (e, t, r) => sJ(e, r),
      pm,
      (e, t) => {
        if (null != e && null != t) return sW(sW({}, e), {}, { scale: t });
      }
    );
    var pb = rb([iO, nH, nV], (e, t, r) => {
      switch (e) {
        case "horizontal":
          return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
        case "vertical":
          return r.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
        case "centric":
        case "radial":
          return "left-to-right";
        default:
          return;
      }
    });
    e.s(
      [
        "combineAppliedValues",
        () => fo,
        "combineAreasDomain",
        () => fL,
        "combineAxisDomain",
        () => fW,
        "combineAxisDomainWithNiceTicks",
        () => fZ,
        "combineCategoricalDomain",
        () => ph,
        "combineDisplayedData",
        () => fn,
        "combineDomainOfAllAppliedNumericalValuesIncludingErrorValues",
        () => fP,
        "combineDomainOfStackGroups",
        () => fv,
        "combineDotsDomain",
        () => fI,
        "combineDuplicateDomain",
        () => pf,
        "combineGraphicalItemsData",
        () => ft,
        "combineGraphicalItemsSettings",
        () => s8,
        "combineLinesDomain",
        () => fR,
        "combineNiceTicks",
        () => fX,
        "combineNumericalDomain",
        () => fF,
        "combineRealScaleType",
        () => fY,
        "combineScaleFunction",
        () => fV,
        "combineStackGroups",
        () => fd,
        "filterGraphicalNotStackedItems",
        () => s9,
        "filterReferenceElements",
        () => f_,
        "getDomainDefinition",
        () => fm,
        "implicitXAxis",
        () => sY,
        "implicitYAxis",
        () => sX,
        "itemAxisPredicate",
        () => s5,
        "mergeDomains",
        () => fS,
        "selectAllErrorBarSettings",
        () => fO,
        "selectAxisDomain",
        () => fq,
        "selectAxisRange",
        () => f6,
        "selectAxisWithScale",
        () => pg,
        "selectBaseAxis",
        () => s0,
        "selectChartDirection",
        () => pb,
        "selectDomainDefinition",
        () => fb,
        "selectDomainFromUserPreference",
        () => fx,
        "selectHasBar",
        () => s2,
        "selectRealScaleType",
        () => fH,
        "selectReferenceAreas",
        () => fk,
        "selectReferenceDots",
        () => fE,
        "selectReferenceLines",
        () => fC,
        "selectRenderableAxisSettings",
        () => s1,
        "selectTicksOfAxis",
        () => py,
        "selectTicksOfGraphicalItem",
        () => pv,
        "selectTooltipAxis",
        () => ff,
        "selectTooltipAxisDataKey",
        () => fp,
        "selectUnfilteredCartesianItems",
        () => s3,
        "selectXAxisPosition",
        () => pu,
        "selectXAxisSettings",
        () => sV,
        "selectXAxisSettingsNoDefaults",
        () => sH,
        "selectXAxisSize",
        () => po,
        "selectYAxisPosition",
        () => pc,
        "selectYAxisSettings",
        () => sZ,
        "selectYAxisSettingsNoDefaults",
        () => sG,
        "selectYAxisSize",
        () => ps,
      ],
      80869
    );
    var px = (e) => e.options.defaultTooltipEventType,
      pw = (e) => e.options.validateTooltipEventTypes;
    function pO(e, t, r) {
      if (null == e) return t;
      var n = e ? "axis" : "item";
      return null == r ? t : r.includes(n) ? n : t;
    }
    function pS(e, t) {
      return pO(t, px(e), pw(e));
    }
    function pP(e) {
      return tt((t) => pS(t, e));
    }
    e.s(
      [
        "combineTooltipEventType",
        () => pO,
        "selectDefaultTooltipEventType",
        () => px,
        "selectTooltipEventType",
        () => pS,
        "selectValidateTooltipEventTypes",
        () => pw,
        "useTooltipEventType",
        () => pP,
      ],
      45999
    );
    var pA = (e, t) => {
        var r,
          n = Number(t);
        if (!er(n) && null != t)
          return n >= 0 ? (null == e || null == (r = e[n]) ? void 0 : r.value) : void 0;
      },
      pj = {
        active: !1,
        index: null,
        dataKey: void 0,
        graphicalItemId: void 0,
        coordinate: void 0,
      },
      pE = rK({
        name: "tooltip",
        initialState: {
          itemInteraction: { click: pj, hover: pj },
          axisInteraction: { click: pj, hover: pj },
          keyboardInteraction: pj,
          syncInteraction: {
            active: !1,
            index: null,
            dataKey: void 0,
            label: void 0,
            coordinate: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0,
          },
          tooltipItemPayloads: [],
          settings: {
            shared: void 0,
            trigger: "hover",
            axisId: 0,
            active: !1,
            defaultIndex: void 0,
          },
        },
        reducers: {
          addTooltipEntrySettings: {
            reducer(e, t) {
              e.tooltipItemPayloads.push(t.payload);
            },
            prepare: rz(),
          },
          replaceTooltipEntrySettings: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = t8(e).tooltipItemPayloads.indexOf(r);
              i > -1 && (e.tooltipItemPayloads[i] = n);
            },
            prepare: rz(),
          },
          removeTooltipEntrySettings: {
            reducer(e, t) {
              var r = t8(e).tooltipItemPayloads.indexOf(t.payload);
              r > -1 && e.tooltipItemPayloads.splice(r, 1);
            },
            prepare: rz(),
          },
          setTooltipSettingsState(e, t) {
            e.settings = t.payload;
          },
          setActiveMouseOverItemIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.hover.active = !0),
              (e.itemInteraction.hover.index = t.payload.activeIndex),
              (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId),
              (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
          },
          mouseLeaveChart(e) {
            ((e.itemInteraction.hover.active = !1), (e.axisInteraction.hover.active = !1));
          },
          mouseLeaveItem(e) {
            e.itemInteraction.hover.active = !1;
          },
          setActiveClickItemIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.itemInteraction.click.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.click.index = t.payload.activeIndex),
              (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId),
              (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
          },
          setMouseOverAxisIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.axisInteraction.hover.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.hover.index = t.payload.activeIndex),
              (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
          },
          setMouseClickAxisIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.click.active = !0),
              (e.axisInteraction.click.index = t.payload.activeIndex),
              (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
          },
          setSyncInteraction(e, t) {
            e.syncInteraction = t.payload;
          },
          setKeyboardInteraction(e, t) {
            ((e.keyboardInteraction.active = t.payload.active),
              (e.keyboardInteraction.index = t.payload.activeIndex),
              (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
          },
        },
      }),
      {
        addTooltipEntrySettings: p_,
        replaceTooltipEntrySettings: pM,
        removeTooltipEntrySettings: pk,
        setTooltipSettingsState: pT,
        setActiveMouseOverItemIndex: pC,
        mouseLeaveItem: pD,
        mouseLeaveChart: pI,
        setActiveClickItemIndex: pN,
        setMouseOverAxisIndex: pL,
        setMouseClickAxisIndex: pz,
        setSyncInteraction: pR,
        setKeyboardInteraction: pB,
      } = pE.actions,
      pU = pE.reducer;
    function pF(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function p$(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pF(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pF(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(
      [
        "addTooltipEntrySettings",
        () => p_,
        "mouseLeaveChart",
        () => pI,
        "mouseLeaveItem",
        () => pD,
        "noInteraction",
        () => pj,
        "removeTooltipEntrySettings",
        () => pk,
        "replaceTooltipEntrySettings",
        () => pM,
        "setActiveClickItemIndex",
        () => pN,
        "setActiveMouseOverItemIndex",
        () => pC,
        "setKeyboardInteraction",
        () => pB,
        "setMouseClickAxisIndex",
        () => pz,
        "setMouseOverAxisIndex",
        () => pL,
        "setSyncInteraction",
        () => pR,
        "setTooltipSettingsState",
        () => pT,
        "tooltipReducer",
        () => pU,
      ],
      68732
    );
    var pK = (e, t, r, n) => {
        if (null == t) return pj;
        var i,
          o,
          a,
          l =
            ((i = e),
            (o = t),
            (a = r),
            "axis" === o
              ? "click" === a
                ? i.axisInteraction.click
                : i.axisInteraction.hover
              : "click" === a
                ? i.itemInteraction.click
                : i.itemInteraction.hover);
        if (null == l) return pj;
        if (l.active) return l;
        if (e.keyboardInteraction.active) return e.keyboardInteraction;
        if (e.syncInteraction.active && null != e.syncInteraction.index) return e.syncInteraction;
        var u = !0 === e.settings.active;
        if (null != l.index) {
          if (u) return p$(p$({}, l), {}, { active: !0 });
        } else if (null != n)
          return {
            active: !0,
            coordinate: void 0,
            dataKey: void 0,
            index: n,
            graphicalItemId: void 0,
          };
        return p$(p$({}, pj), {}, { coordinate: l.coordinate });
      },
      pW = (e, t, r, n) => {
        var i = null == e ? void 0 : e.index;
        if (null == i) return null;
        var o = Number(i);
        if (!eL(o)) return i;
        var a = Infinity;
        t.length > 0 && (a = t.length - 1);
        var l = Math.max(0, Math.min(o, a)),
          u = t[l];
        return null == u
          ? String(l)
          : !(function (e, t, r) {
                if (null == r || null == t) return !0;
                var n = nM(e, t);
                return (
                  !(null != n && sd(r)) ||
                  (function (e, t) {
                    var r = (function (e) {
                        if ("number" == typeof e) return Number.isFinite(e) ? e : void 0;
                        if (e instanceof Date) {
                          var t = e.valueOf();
                          return Number.isFinite(t) ? t : void 0;
                        }
                        var r = Number(e);
                        return Number.isFinite(r) ? r : void 0;
                      })(e),
                      n = t[0],
                      i = t[1];
                    if (void 0 === r) return !1;
                    var o = Math.min(n, i),
                      a = Math.max(n, i);
                    return r >= o && r <= a;
                  })(n, r)
                );
              })(u, r, n)
            ? null
            : String(l);
      },
      pq = (e, t, r, n, i, o, a) => {
        if (null != o) {
          var l = a[0],
            u = null == l ? void 0 : l.getPosition(o);
          if (null != u) return u;
          var c = null == i ? void 0 : i[Number(o)];
          if (c)
            if ("horizontal" === r) return { x: c.coordinate, y: (n.top + t) / 2 };
            else return { x: (n.left + e) / 2, y: c.coordinate };
        }
      },
      pY = (e, t, r, n) => {
        if ("axis" === t) return e.tooltipItemPayloads;
        if (0 === e.tooltipItemPayloads.length) return [];
        if (
          null ==
            (i =
              "hover" === r
                ? e.itemInteraction.hover.graphicalItemId
                : e.itemInteraction.click.graphicalItemId) &&
          null != n
        ) {
          var i,
            o = e.tooltipItemPayloads[0];
          return null != o ? [o] : [];
        }
        return e.tooltipItemPayloads.filter((e) => {
          var t;
          return (null == (t = e.settings) ? void 0 : t.graphicalItemId) === i;
        });
      },
      pH = (e) => e.options.tooltipPayloadSearcher,
      pV = (e) => e.tooltip;
    function pX(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function pG(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pX(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pX(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var pZ = (e, t, r, n, i, o, a) => {
        if (null != t && null != o) {
          var { chartData: l, computedData: u, dataStartIndex: c, dataEndIndex: s } = r;
          return e.reduce((e, r) => {
            var f,
              p,
              h,
              { dataDefinedOnItem: d, settings: y } = r,
              v = null != d ? d : l,
              g = Array.isArray(v) ? nj(v, c, s) : v,
              m = null != (f = null == y ? void 0 : y.dataKey) ? f : n,
              b = null == y ? void 0 : y.nameKey;
            return (
              Array.isArray(
                (p =
                  n && Array.isArray(g) && !Array.isArray(g[0]) && "axis" === a
                    ? ef(g, n, i)
                    : o(g, t, u, b))
              )
                ? p.forEach((t) => {
                    var r = pG(
                      pG({}, y),
                      {},
                      { name: t.name, unit: t.unit, color: void 0, fill: void 0 }
                    );
                    e.push(
                      nB({
                        tooltipEntrySettings: r,
                        dataKey: t.dataKey,
                        payload: t.payload,
                        value: nM(t.payload, t.dataKey),
                        name: t.name,
                      })
                    );
                  })
                : e.push(
                    nB({
                      tooltipEntrySettings: y,
                      dataKey: m,
                      payload: p,
                      value: nM(p, m),
                      name: null != (h = nM(p, b)) ? h : null == y ? void 0 : y.name,
                    })
                  ),
              e
            );
          }, []);
        }
      },
      pQ = rb([ff, s2, s_], fY),
      pJ = rb(
        [(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems],
        (e, t) => [...e, ...t]
      ),
      p0 = rb([sR, sB], s5),
      p1 = rb([pJ, ff, p0], s8, { memoizeOptions: { resultEqualityCheck: iH } }),
      p2 = rb([p1], (e) => e.filter(sL)),
      p5 = rb([p1], ft, { memoizeOptions: { resultEqualityCheck: iH } }),
      p3 = rb([p5, sf], fn),
      p6 = rb([p2, sf, ff], sN),
      p8 = rb([p3, ff, p1], fo),
      p4 = rb([ff], fm),
      p7 = rb([ff], (e) => e.allowDataOverflow),
      p9 = rb([p4, p7], sv),
      he = rb([p1], (e) => e.filter(sL)),
      ht = rb([p6, he, sj, sE], fd),
      hr = rb([ht, sf, sR, p9], fv),
      hn = rb([p1], s9),
      hi = rb([p3, ff, hn, fO, sR], fP, { memoizeOptions: { resultEqualityCheck: sz } }),
      ho = rb([fE, sR, sB], f_),
      ha = rb([ho, sR], fI),
      hl = rb([fk, sR, sB], f_),
      hu = rb([hl, sR], fL),
      hc = rb([fC, sR, sB], f_),
      hs = rb([hc, sR], fR),
      hf = rb([ha, hs, hu], fS),
      hp = rb([ff, p4, p9, hr, hi, hf, iO, sR], fF),
      hh = rb([ff, iO, p3, p8, sj, sR, hp], fW),
      hd = rb([hh, ff, pQ], fX),
      hy = rb([ff, hh, hd, sR], fZ),
      hv = (e) => {
        var t = sR(e),
          r = sB(e);
        return f6(e, t, r, !1);
      },
      hg = rb([ff, hv], iT),
      hm = rb([ff, pQ, hy, hg], fV),
      hb = rb([iO, p8, ff, sR], pf),
      hx = rb([iO, p8, ff, sR], ph),
      hw = rb([iO, ff, pQ, hm, hv, hb, hx, sR], (e, t, r, n, i, o, a, l) => {
        if (t) {
          var { type: u } = t,
            c = nT(e, l);
          if (n) {
            var s = "scaleBand" === r && n.bandwidth ? n.bandwidth() / 2 : 2,
              f = "category" === u && n.bandwidth ? n.bandwidth() / s : 0;
            return ((f =
              "angleAxis" === l && null != i && (null == i ? void 0 : i.length) >= 2
                ? 2 * et(i[0] - i[1]) * f
                : f),
            c && a)
              ? a
                  .map((e, t) => {
                    var r = n.map(e);
                    return eL(r) ? { coordinate: r + f, value: e, index: t, offset: f } : null;
                  })
                  .filter(ed)
              : n
                  .domain()
                  .map((e, t) => {
                    var r = n.map(e);
                    return eL(r)
                      ? { coordinate: r + f, value: o ? o[e] : e, index: t, offset: f }
                      : null;
                  })
                  .filter(ed);
          }
        }
      }),
      hO = rb([px, pw, (e) => e.tooltip.settings], (e, t, r) => pO(r.shared, e, t)),
      hS = (e) => e.tooltip.settings.trigger,
      hP = (e) => e.tooltip.settings.defaultIndex,
      hA = rb([pV, hO, hS, hP], pK),
      hj = rb([hA, p3, fp, hh], pW),
      hE = rb([hw, hj], pA),
      h_ = rb([hA], (e) => {
        if (e) return e.dataKey;
      }),
      hM = rb([hA], (e) => {
        if (e) return e.graphicalItemId;
      }),
      hk = rb([pV, hO, hS, hP], pY),
      hT = rb([nK, nW, iO, nJ, hw, hP, hk], pq),
      hC = rb([hA, hT], (e, t) => (null != e && e.coordinate ? e.coordinate : t)),
      hD = rb([hA], (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.active) && t;
      }),
      hI = rb([hk, hj, sf, fp, hE, pH, hO], pZ),
      hN = rb([hI], (e) => {
        if (null != e) return Array.from(new Set(e.map((e) => e.payload).filter((e) => null != e)));
      });
    function hL(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hz(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? hL(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : hL(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(
      [
        "selectActiveLabel",
        () => hE,
        "selectActiveTooltipCoordinate",
        () => hC,
        "selectActiveTooltipDataKey",
        () => h_,
        "selectActiveTooltipDataPoints",
        () => hN,
        "selectActiveTooltipGraphicalItemId",
        () => hM,
        "selectActiveTooltipIndex",
        () => hj,
        "selectAllGraphicalItemsSettings",
        () => p1,
        "selectIsTooltipActive",
        () => hD,
        "selectTooltipAxisDomain",
        () => hh,
        "selectTooltipAxisRangeWithReverse",
        () => hg,
        "selectTooltipAxisScale",
        () => hm,
        "selectTooltipAxisTicks",
        () => hw,
        "selectTooltipDisplayedData",
        () => p3,
      ],
      79809
    );
    var hR = rK({
        name: "cartesianAxis",
        initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
        reducers: {
          addXAxis: {
            reducer(e, t) {
              e.xAxis[t.payload.id] = t.payload;
            },
            prepare: rz(),
          },
          replaceXAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.xAxis[r.id] &&
                (r.id !== n.id && delete e.xAxis[r.id], (e.xAxis[n.id] = n));
            },
            prepare: rz(),
          },
          removeXAxis: {
            reducer(e, t) {
              delete e.xAxis[t.payload.id];
            },
            prepare: rz(),
          },
          addYAxis: {
            reducer(e, t) {
              e.yAxis[t.payload.id] = t.payload;
            },
            prepare: rz(),
          },
          replaceYAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.yAxis[r.id] &&
                (r.id !== n.id && delete e.yAxis[r.id], (e.yAxis[n.id] = n));
            },
            prepare: rz(),
          },
          removeYAxis: {
            reducer(e, t) {
              delete e.yAxis[t.payload.id];
            },
            prepare: rz(),
          },
          addZAxis: {
            reducer(e, t) {
              e.zAxis[t.payload.id] = t.payload;
            },
            prepare: rz(),
          },
          replaceZAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.zAxis[r.id] &&
                (r.id !== n.id && delete e.zAxis[r.id], (e.zAxis[n.id] = n));
            },
            prepare: rz(),
          },
          removeZAxis: {
            reducer(e, t) {
              delete e.zAxis[t.payload.id];
            },
            prepare: rz(),
          },
          updateYAxisWidth(e, t) {
            var { id: r, width: n } = t.payload,
              i = e.yAxis[r];
            if (i) {
              var o,
                a = i.widthHistory || [];
              if (
                3 === a.length &&
                a[0] === a[2] &&
                n === a[1] &&
                n !== i.width &&
                1 >= Math.abs(n - (null != (o = a[0]) ? o : 0))
              )
                return;
              var l = [...a, n].slice(-3);
              e.yAxis[r] = hz(hz({}, i), {}, { width: n, widthHistory: l });
            }
          },
        },
      }),
      {
        addXAxis: hB,
        replaceXAxis: hU,
        removeXAxis: hF,
        addYAxis: h$,
        replaceYAxis: hK,
        removeYAxis: hW,
        addZAxis: hq,
        replaceZAxis: hY,
        removeZAxis: hH,
        updateYAxisWidth: hV,
      } = hR.actions,
      hX = hR.reducer;
    e.s(
      [
        "addXAxis",
        () => hB,
        "addYAxis",
        () => h$,
        "cartesianAxisReducer",
        () => hX,
        "defaultAxisId",
        () => 0,
        "removeXAxis",
        () => hF,
        "removeYAxis",
        () => hW,
        "replaceXAxis",
        () => hU,
        "replaceYAxis",
        () => hK,
        "updateYAxisWidth",
        () => hV,
      ],
      64323
    );
    var hG = rb([nJ], (e) => ({ top: e.top, bottom: e.bottom, left: e.left, right: e.right })),
      hZ = rb([hG, nK, nW], (e, t, r) => {
        if (e && null != t && null != r)
          return {
            x: e.left,
            y: e.top,
            width: Math.max(0, t - e.left - e.right),
            height: Math.max(0, r - e.top - e.bottom),
          };
      });
    function hQ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hJ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? hQ(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : hQ(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var h0 = (e) => {
      var t,
        { point: r, childIndex: n, mainColor: i, activeDot: o, dataKey: a, clipPath: l } = e;
      if (!1 === o || null == r.x || null == r.y) return null;
      var u = hJ(
        hJ(
          hJ(
            {},
            {
              index: n,
              dataKey: a,
              cx: r.x,
              cy: r.y,
              r: 4,
              fill: null != i ? i : "none",
              strokeWidth: 2,
              stroke: "#fff",
              payload: r.payload,
              value: r.value,
            }
          ),
          q(o)
        ),
        ar(o)
      );
      return (
        (t = (0, z.isValidElement)(o)
          ? (0, z.cloneElement)(o, u)
          : "function" == typeof o
            ? o(u)
            : z.createElement(ao, u)),
        z.createElement(G, { className: "recharts-active-dot", clipPath: l }, t)
      );
    };
    function h1(e) {
      var {
          points: t,
          mainColor: r,
          activeDot: n,
          itemDataKey: i,
          clipPath: o,
          zIndex: a = i_.activeDot,
        } = e,
        l = tt(hj),
        u = tt(hN);
      if (null == t || null == u) return null;
      var c = t.find((e) => u.includes(e.payload));
      return ep(c)
        ? null
        : z.createElement(
            oL,
            { zIndex: a },
            z.createElement(h0, {
              point: c,
              childIndex: Number(l),
              mainColor: r,
              dataKey: i,
              activeDot: n,
              clipPath: o,
            })
          );
    }
    function h2(e) {
      var { tooltipEntrySettings: t } = e,
        r = e4(),
        n = n5(),
        i = (0, z.useRef)(null);
      return (
        (0, z.useLayoutEffect)(() => {
          n ||
            (null === i.current ? r(p_(t)) : i.current !== t && r(pM({ prev: i.current, next: t })),
            (i.current = t));
        }, [t, r, n]),
        (0, z.useLayoutEffect)(
          () => () => {
            i.current && (r(pk(i.current)), (i.current = null));
          },
          [r]
        ),
        null
      );
    }
    e.s(["SetTooltipEntrySettings", () => h2], 28024);
    var h5 = ["children"],
      h3 = (0, z.createContext)({
        data: [],
        xAxisId: "xAxis-0",
        yAxisId: "yAxis-0",
        dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
        errorBarOffset: 0,
      });
    function h6(e) {
      var { children: t } = e,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        })(e, h5);
      return z.createElement(h3.Provider, { value: r }, t);
    }
    function h8(e, t) {
      var r,
        n,
        i = tt((t) => sV(t, e)),
        o = tt((e) => sZ(e, t)),
        a = null != (r = null == i ? void 0 : i.allowDataOverflow) ? r : sY.allowDataOverflow,
        l = null != (n = null == o ? void 0 : o.allowDataOverflow) ? n : sX.allowDataOverflow;
      return { needClip: a || l, needClipX: a, needClipY: l };
    }
    function h4(e) {
      var { xAxisId: t, yAxisId: r, clipPathId: n } = e,
        i = tt(hZ),
        { needClipX: o, needClipY: a, needClip: l } = h8(t, r);
      if (!l || !i) return null;
      var { x: u, y: c, width: s, height: f } = i;
      return z.createElement(
        "clipPath",
        { id: "clipPath-".concat(n) },
        z.createElement("rect", {
          x: o ? u : u - s / 2,
          y: a ? c : c - f / 2,
          width: o ? s : 2 * s,
          height: a ? f : 2 * f,
        })
      );
    }
    var h7 = (e, t, r, n) => pg(e, "xAxis", t, n),
      h9 = (e, t, r, n) => pv(e, "xAxis", t, n),
      de = (e, t, r, n) => pg(e, "yAxis", r, n),
      dt = (e, t, r, n) => pv(e, "yAxis", r, n),
      dr = rb([iO, h7, de, h9, dt], (e, t, r, n, i) =>
        nT(e, "xAxis") ? nR(t, n, !1) : nR(r, i, !1)
      );
    function dn(e) {
      return "line" === e.type;
    }
    var di = rb([s3, (e, t, r, n, i) => i], (e, t) => e.filter(dn).find((e) => e.id === t)),
      da = rb([iO, h7, de, h9, dt, di, dr, sh], (e, t, r, n, i, o, a, l) => {
        var u,
          { chartData: c, dataStartIndex: s, dataEndIndex: f } = l;
        if (
          null != o &&
          null != t &&
          null != r &&
          null != n &&
          null != i &&
          0 !== n.length &&
          0 !== i.length &&
          null != a &&
          ("horizontal" === e || "vertical" === e)
        ) {
          var { dataKey: p, data: h } = o;
          if (null != (u = null != h && h.length > 0 ? h : null == c ? void 0 : c.slice(s, f + 1)))
            return vF({
              layout: e,
              xAxis: t,
              yAxis: r,
              xAxisTicks: n,
              yAxisTicks: i,
              dataKey: p,
              bandSize: a,
              displayedData: u,
            });
        }
      }),
      dl = rK({
        name: "legend",
        initialState: {
          settings: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "middle",
            itemSorter: "value",
          },
          size: { width: 0, height: 0 },
          payload: [],
        },
        reducers: {
          setLegendSize(e, t) {
            ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
          },
          setLegendSettings(e, t) {
            ((e.settings.align = t.payload.align),
              (e.settings.layout = t.payload.layout),
              (e.settings.verticalAlign = t.payload.verticalAlign),
              (e.settings.itemSorter = t.payload.itemSorter));
          },
          addLegendPayload: {
            reducer(e, t) {
              e.payload.push(t.payload);
            },
            prepare: rz(),
          },
          replaceLegendPayload: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = t8(e).payload.indexOf(r);
              i > -1 && (e.payload[i] = n);
            },
            prepare: rz(),
          },
          removeLegendPayload: {
            reducer(e, t) {
              var r = t8(e).payload.indexOf(t.payload);
              r > -1 && e.payload.splice(r, 1);
            },
            prepare: rz(),
          },
        },
      }),
      {
        setLegendSize: du,
        setLegendSettings: dc,
        addLegendPayload: ds,
        replaceLegendPayload: df,
        removeLegendPayload: dp,
      } = dl.actions,
      dh = dl.reducer;
    function dd(e) {
      var { legendPayload: t } = e,
        r = e4(),
        n = n5(),
        i = (0, z.useRef)(null);
      return (
        (0, z.useLayoutEffect)(() => {
          n ||
            (null === i.current ? r(ds(t)) : i.current !== t && r(df({ prev: i.current, next: t })),
            (i.current = t));
        }, [r, n, t]),
        (0, z.useLayoutEffect)(
          () => () => {
            i.current && (r(dp(i.current)), (i.current = null));
          },
          [r]
        ),
        null
      );
    }
    function dy(e) {
      var { legendPayload: t } = e,
        r = e4(),
        n = tt(iO),
        i = (0, z.useRef)(null);
      return (
        (0, z.useLayoutEffect)(() => {
          ("centric" === n || "radial" === n) &&
            (null === i.current ? r(ds(t)) : i.current !== t && r(df({ prev: i.current, next: t })),
            (i.current = t));
        }, [r, n, t]),
        (0, z.useLayoutEffect)(
          () => () => {
            i.current && (r(dp(i.current)), (i.current = null));
          },
          [r]
        ),
        null
      );
    }
    function dv(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation-",
        r = (0, z.useRef)(el(t)),
        n = (0, z.useRef)(e);
      return (n.current !== e && ((r.current = el(t)), (n.current = e)), r.current);
    }
    (e.s(["SetLegendPayload", () => dd, "SetPolarLegendPayload", () => dy], 93168),
      e.s(["useAnimationId", () => dv], 77667));
    var dg =
        null != (d = z["useId".toString()])
          ? d
          : () => {
              var [e] = z.useState(() => el("uid-"));
              return e;
            },
      dm = (0, z.createContext)(void 0),
      db = (e) => {
        var t,
          r,
          { id: n, type: i, children: o } = e,
          a = ((t = "recharts-".concat(i)), (r = dg()), n || (t ? "".concat(t, "-").concat(r) : r));
        return z.createElement(dm.Provider, { value: a }, o(a));
      };
    e.s(["RegisterGraphicalItemId", () => db], 31930);
    var dx = rK({
        name: "graphicalItems",
        initialState: { cartesianItems: [], polarItems: [] },
        reducers: {
          addCartesianGraphicalItem: {
            reducer(e, t) {
              e.cartesianItems.push(t.payload);
            },
            prepare: rz(),
          },
          replaceCartesianGraphicalItem: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = t8(e).cartesianItems.indexOf(r);
              i > -1 && (e.cartesianItems[i] = n);
            },
            prepare: rz(),
          },
          removeCartesianGraphicalItem: {
            reducer(e, t) {
              var r = t8(e).cartesianItems.indexOf(t.payload);
              r > -1 && e.cartesianItems.splice(r, 1);
            },
            prepare: rz(),
          },
          addPolarGraphicalItem: {
            reducer(e, t) {
              e.polarItems.push(t.payload);
            },
            prepare: rz(),
          },
          removePolarGraphicalItem: {
            reducer(e, t) {
              var r = t8(e).polarItems.indexOf(t.payload);
              r > -1 && e.polarItems.splice(r, 1);
            },
            prepare: rz(),
          },
        },
      }),
      {
        addCartesianGraphicalItem: dw,
        replaceCartesianGraphicalItem: dO,
        removeCartesianGraphicalItem: dS,
        addPolarGraphicalItem: dP,
        removePolarGraphicalItem: dA,
      } = dx.actions,
      dj = dx.reducer,
      dE = (0, z.memo)((e) => {
        var t = e4(),
          r = (0, z.useRef)(null);
        return (
          (0, z.useLayoutEffect)(() => {
            (null === r.current ? t(dw(e)) : r.current !== e && t(dO({ prev: r.current, next: e })),
              (r.current = e));
          }, [t, e]),
          (0, z.useLayoutEffect)(
            () => () => {
              r.current && (t(dS(r.current)), (r.current = null));
            },
            [t]
          ),
          null
        );
      });
    function d_(e) {
      var t = e4();
      return (
        (0, z.useLayoutEffect)(
          () => (
            t(dP(e)),
            () => {
              t(dA(e));
            }
          ),
          [t, e]
        ),
        null
      );
    }
    function dM(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function dk(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dM(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dM(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    e.s(["SetCartesianGraphicalItem", () => dE, "SetPolarGraphicalItem", () => d_], 51648);
    var dT = (e, t, r) =>
        e
          .map((e) =>
            ""
              .concat(
                e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase())),
                " "
              )
              .concat(t, "ms ")
              .concat(r)
          )
          .join(","),
      dC = (e, t) => Object.keys(t).reduce((r, n) => dk(dk({}, r), {}, { [n]: e(n, t[n]) }), {});
    function dD(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function dI(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dD(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dD(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var dN = (e, t, r) => e + (t - e) * r,
      dL = (e) => {
        var { from: t, to: r } = e;
        return t !== r;
      },
      dz = (e, t, r) => {
        var n = dC((t, r) => {
          if (dL(r)) {
            var [n, i] = e(r.from, r.to, r.velocity);
            return dI(dI({}, r), {}, { from: n, velocity: i });
          }
          return r;
        }, t);
        return r < 1
          ? dC(
              (e, t) =>
                dL(t) && null != n[e]
                  ? dI(
                      dI({}, t),
                      {},
                      { velocity: dN(t.velocity, n[e].velocity, r), from: dN(t.from, n[e].from, r) }
                    )
                  : t,
              t
            )
          : dz(e, n, r - 1);
      },
      dR = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
      dB = (e, t) => e.map((e, r) => e * t ** r).reduce((e, t) => e + t),
      dU = (e, t) => (r) => dB(dR(e, t), r),
      dF = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        if (1 === t.length)
          switch (t[0]) {
            case "linear":
              return [0, 0, 1, 1];
            case "ease":
              return [0.25, 0.1, 0.25, 1];
            case "ease-in":
              return [0.42, 0, 1, 1];
            case "ease-out":
              return [0.42, 0, 0.58, 1];
            case "ease-in-out":
              return [0, 0, 0.58, 1];
            default:
              var n = ((e) => {
                var t,
                  r = e.split("(");
                if (2 !== r.length || "cubic-bezier" !== r[0]) return null;
                var n = null == (t = r[1]) || null == (t = t.split(")")[0]) ? void 0 : t.split(",");
                if (null == n || 4 !== n.length) return null;
                var i = n.map((e) => parseFloat(e));
                return [i[0], i[1], i[2], i[3]];
              })(t[0]);
              if (n) return n;
          }
        return 4 === t.length ? t : [0, 0, 1, 1];
      },
      d$ = function () {
        return ((e, t, r, n) => {
          var i = dU(e, r),
            o = dU(t, n),
            a = (t) =>
              dB(
                [
                  ...dR(e, r)
                    .map((e, t) => e * t)
                    .slice(1),
                  0,
                ],
                t
              ),
            l = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
            u = (e) => {
              for (var t = e > 1 ? 1 : e, r = t, n = 0; n < 8; ++n) {
                var u = i(r) - t,
                  c = a(r);
                if (1e-4 > Math.abs(u - t) || c < 1e-4) break;
                r = l(r - u / c);
              }
              return o(r);
            };
          return ((u.isStepper = !1), u);
        })(...dF(...arguments));
      },
      dK = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { stiff: t = 100, damping: r = 8, dt: n = 17 } = e,
          i = (e, i, o) => {
            var a = o + ((-(e - i) * t - o * r) * n) / 1e3,
              l = (o * n) / 1e3 + e;
            return 1e-4 > Math.abs(l - i) && 1e-4 > Math.abs(a) ? [i, 0] : [l, a];
          };
        return ((i.isStepper = !0), (i.dt = n), i);
      };
    class dW {
      setTimeout(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = performance.now(),
          n = null,
          i = (o) => {
            o - r >= t
              ? e(o)
              : "function" == typeof requestAnimationFrame && (n = requestAnimationFrame(i));
          };
        return (
          (n = requestAnimationFrame(i)),
          () => {
            null != n && cancelAnimationFrame(n);
          }
        );
      }
    }
    var dq = (0, z.createContext)(function () {
        var e, t, r, n, i;
        return (
          (e = new dW()),
          (t = () => null),
          (r = !1),
          (n = null),
          (i = (o) => {
            if (!r) {
              if (Array.isArray(o)) {
                if (!o.length) return;
                var [a, ...l] = o;
                if ("number" == typeof a) {
                  n = e.setTimeout(i.bind(null, l), a);
                  return;
                }
                (i(a), (n = e.setTimeout(i.bind(null, l))));
                return;
              }
              ("string" == typeof o && t(o),
                "object" == typeof o && t(o),
                "function" == typeof o && o());
            }
          }),
          {
            stop: () => {
              r = !0;
            },
            start: (e) => {
              ((r = !1), n && (n(), (n = null)), i(e));
            },
            subscribe: (e) => (
              (t = e),
              () => {
                t = () => null;
              }
            ),
            getTimeoutController: () => e,
          }
        );
      }),
      dY = {
        begin: 0,
        duration: 1e3,
        easing: "ease",
        isActive: !0,
        canBegin: !0,
        onAnimationEnd: () => {},
        onAnimationStart: () => {},
      },
      dH = { t: 0 },
      dV = { t: 1 };
    function dX(e) {
      var t,
        r,
        n,
        i = eN(e, dY),
        {
          isActive: o,
          canBegin: a,
          duration: l,
          easing: u,
          begin: c,
          onAnimationEnd: s,
          onAnimationStart: f,
          children: p,
        } = i,
        h = "auto" === o ? !ev.isSsr : o,
        d =
          ((t = i.animationId),
          (r = i.animationManager),
          (n = (0, z.useContext)(dq)),
          (0, z.useMemo)(() => (null != r ? r : n(t)), [t, r, n])),
        [y, v] = (0, z.useState)(h ? dH : dV),
        g = (0, z.useRef)(null);
      return (
        (0, z.useEffect)(() => {
          h || v(dV);
        }, [h]),
        (0, z.useEffect)(() => {
          if (!h || !a) return ey;
          var e = ((e, t, r, n, i, o) => {
            var a,
              l,
              u,
              c,
              s,
              f,
              p,
              h,
              d = [Object.keys(e), Object.keys(t)].reduce((e, t) => e.filter((e) => t.includes(e)));
            return null == r
              ? () => (i(dI(dI({}, e), t)), () => {})
              : !0 === r.isStepper
                ? ((l = d.reduce(
                    (r, n) => dI(dI({}, r), {}, { [n]: { from: e[n], velocity: 0, to: t[n] } }),
                    {}
                  )),
                  (u = null),
                  (c = (n) => {
                    a || (a = n);
                    var s = (n - a) / r.dt;
                    ((l = dz(r, l, s)),
                      i(
                        dI(
                          dI(dI({}, e), t),
                          dC((e, t) => t.from, l)
                        )
                      ),
                      (a = n),
                      Object.values(l).filter(dL).length && (u = o.setTimeout(c)));
                  }),
                  () => (
                    (u = o.setTimeout(c)),
                    () => {
                      var e;
                      null == (e = u) || e();
                    }
                  ))
                : ((f = null),
                  (p = d.reduce((r, n) => {
                    var i = e[n],
                      o = t[n];
                    return null == i || null == o ? r : dI(dI({}, r), {}, { [n]: [i, o] });
                  }, {})),
                  (h = (a) => {
                    s || (s = a);
                    var l = (a - s) / n,
                      u = dC((e, t) => dN(...t, r(l)), p);
                    if ((i(dI(dI(dI({}, e), t), u)), l < 1)) f = o.setTimeout(h);
                    else {
                      var c = dC((e, t) => dN(...t, r(1)), p);
                      i(dI(dI(dI({}, e), t), c));
                    }
                  }),
                  () => (
                    (f = o.setTimeout(h)),
                    () => {
                      var e;
                      null == (e = f) || e();
                    }
                  ));
          })(
            dH,
            dV,
            ((e) => {
              if ("string" == typeof e)
                switch (e) {
                  case "ease":
                  case "ease-in-out":
                  case "ease-out":
                  case "ease-in":
                  case "linear":
                    return d$(e);
                  case "spring":
                    return dK();
                  default:
                    if ("cubic-bezier" === e.split("(")[0]) return d$(e);
                }
              return "function" == typeof e ? e : null;
            })(u),
            l,
            v,
            d.getTimeoutController()
          );
          return (
            d.start([
              f,
              c,
              () => {
                g.current = e();
              },
              l,
              s,
            ]),
            () => {
              (d.stop(), g.current && g.current(), s());
            }
          );
        }, [h, a, l, u, c, f, s, d]),
        p(y.t)
      );
    }
    e.s(["JavascriptAnimate", () => dX], 76304);
    var dG = e.i(32178),
      dZ = ["radius"],
      dQ = ["radius"];
    function dJ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function d0(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dJ(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dJ(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function d1() {
      return (d1 = Object.assign.bind()).apply(null, arguments);
    }
    function d2(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    function d5(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
      );
    }
    var d3 = (e, t, r, n, i) => {
        var o = J(r),
          a = J(n),
          l = Math.min(Math.abs(o) / 2, Math.abs(a) / 2),
          u = a >= 0 ? 1 : -1,
          c = o >= 0 ? 1 : -1,
          s = +((a >= 0 && o >= 0) || (a < 0 && o < 0));
        if (l > 0 && Array.isArray(i)) {
          for (var f = [0, 0, 0, 0], p = 0; p < 4; p++) {
            var h,
              d,
              A = null != (d = i[p]) ? d : 0;
            f[p] = A > l ? l : A;
          }
          ((h = ee(y || (y = d5(["M", ",", ""])), e, t + u * f[0])),
            f[0] > 0 &&
              (h += ee(
                v || (v = d5(["A ", ",", ",0,0,", ",", ",", ""])),
                f[0],
                f[0],
                s,
                e + c * f[0],
                t
              )),
            (h += ee(g || (g = d5(["L ", ",", ""])), e + r - c * f[1], t)),
            f[1] > 0 &&
              (h += ee(
                m || (m = d5(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[1],
                f[1],
                s,
                e + r,
                t + u * f[1]
              )),
            (h += ee(b || (b = d5(["L ", ",", ""])), e + r, t + n - u * f[2])),
            f[2] > 0 &&
              (h += ee(
                x || (x = d5(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[2],
                f[2],
                s,
                e + r - c * f[2],
                t + n
              )),
            (h += ee(w || (w = d5(["L ", ",", ""])), e + c * f[3], t + n)),
            f[3] > 0 &&
              (h += ee(
                O || (O = d5(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[3],
                f[3],
                s,
                e,
                t + n - u * f[3]
              )),
            (h += "Z"));
        } else if (l > 0 && i === +i && i > 0) {
          var j = Math.min(l, i);
          h = ee(
            S ||
              (S = d5([
                "M ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                " Z",
              ])),
            e,
            t + u * j,
            j,
            j,
            s,
            e + c * j,
            t,
            e + r - c * j,
            t,
            j,
            j,
            s,
            e + r,
            t + u * j,
            e + r,
            t + n - u * j,
            j,
            j,
            s,
            e + r - c * j,
            t + n,
            e + c * j,
            t + n,
            j,
            j,
            s,
            e,
            t + n - u * j
          );
        } else h = ee(P || (P = d5(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
        return h;
      },
      d6 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      d8 = (e) => {
        var t = eN(e, d6),
          r = (0, z.useRef)(null),
          [n, i] = (0, z.useState)(-1);
        (0, z.useEffect)(() => {
          if (r.current && r.current.getTotalLength)
            try {
              var e = r.current.getTotalLength();
              e && i(e);
            } catch (e) {}
        }, []);
        var { x: o, y: a, width: l, height: u, radius: c, className: s } = t,
          {
            animationEasing: f,
            animationDuration: p,
            animationBegin: h,
            isAnimationActive: d,
            isUpdateAnimationActive: y,
          } = t,
          v = (0, z.useRef)(l),
          g = (0, z.useRef)(u),
          m = (0, z.useRef)(o),
          b = (0, z.useRef)(a),
          x = dv(
            (0, z.useMemo)(() => ({ x: o, y: a, width: l, height: u, radius: c }), [o, a, l, u, c]),
            "rectangle-"
          );
        if (o !== +o || a !== +a || l !== +l || u !== +u || 0 === l || 0 === u) return null;
        var w = (0, R.clsx)("recharts-rectangle", s);
        if (!y) {
          var O = Y(t),
            { radius: S } = O,
            P = d2(O, dZ);
          return z.createElement(
            "path",
            d1({}, P, {
              x: J(o),
              y: J(a),
              width: J(l),
              height: J(u),
              radius: "number" == typeof c ? c : void 0,
              className: w,
              d: d3(o, a, l, u, c),
            })
          );
        }
        var A = v.current,
          j = g.current,
          E = m.current,
          _ = b.current,
          M = "0px ".concat(-1 === n ? 1 : n, "px"),
          k = "".concat(n, "px 0px"),
          T = dT(["strokeDasharray"], p, "string" == typeof f ? f : d6.animationEasing);
        return z.createElement(
          dX,
          {
            animationId: x,
            key: x,
            canBegin: n > 0,
            duration: p,
            easing: f,
            isActive: y,
            begin: h,
          },
          (e) => {
            var n,
              i = es(A, l, e),
              s = es(j, u, e),
              f = es(E, o, e),
              p = es(_, a, e);
            (r.current && ((v.current = i), (g.current = s), (m.current = f), (b.current = p)),
              (n = d
                ? e > 0
                  ? { transition: T, strokeDasharray: k }
                  : { strokeDasharray: M }
                : { strokeDasharray: k }));
            var h = Y(t),
              { radius: y } = h,
              x = d2(h, dQ);
            return z.createElement(
              "path",
              d1({}, x, {
                radius: "number" == typeof c ? c : void 0,
                className: w,
                d: d3(f, p, i, s, c),
                ref: r,
                style: d0(d0({}, n), t.style),
              })
            );
          }
        );
      };
    function d4(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function d7(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d4(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d4(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function d9() {
      return (d9 = Object.assign.bind()).apply(null, arguments);
    }
    function ye(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
      );
    }
    e.s(["Rectangle", () => d8], 92547);
    var yt = (e, t, r, n, i) => {
        var o = r - n;
        return (
          ee(A || (A = ye(["M ", ",", ""])), e, t) +
          ee(j || (j = ye(["L ", ",", ""])), e + r, t) +
          ee(E || (E = ye(["L ", ",", ""])), e + r - o / 2, t + i) +
          ee(_ || (_ = ye(["L ", ",", ""])), e + r - o / 2 - n, t + i) +
          ee(M || (M = ye(["L ", ",", " Z"])), e, t)
        );
      },
      yr = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      yn = (e) => {
        var t = eN(e, yr),
          { x: r, y: n, upperWidth: i, lowerWidth: o, height: a, className: l } = t,
          {
            animationEasing: u,
            animationDuration: c,
            animationBegin: s,
            isUpdateAnimationActive: f,
          } = t,
          p = (0, z.useRef)(null),
          [h, d] = (0, z.useState)(-1),
          y = (0, z.useRef)(i),
          v = (0, z.useRef)(o),
          g = (0, z.useRef)(a),
          m = (0, z.useRef)(r),
          b = (0, z.useRef)(n),
          x = dv(e, "trapezoid-");
        if (
          ((0, z.useEffect)(() => {
            if (p.current && p.current.getTotalLength)
              try {
                var e = p.current.getTotalLength();
                e && d(e);
              } catch (e) {}
          }, []),
          r !== +r ||
            n !== +n ||
            i !== +i ||
            o !== +o ||
            a !== +a ||
            (0 === i && 0 === o) ||
            0 === a)
        )
          return null;
        var w = (0, R.clsx)("recharts-trapezoid", l);
        if (!f)
          return z.createElement(
            "g",
            null,
            z.createElement("path", d9({}, Y(t), { className: w, d: yt(r, n, i, o, a) }))
          );
        var O = y.current,
          S = v.current,
          P = g.current,
          A = m.current,
          j = b.current,
          E = "0px ".concat(-1 === h ? 1 : h, "px"),
          _ = "".concat(h, "px 0px"),
          M = dT(["strokeDasharray"], c, u);
        return z.createElement(
          dX,
          {
            animationId: x,
            key: x,
            canBegin: h > 0,
            duration: c,
            easing: u,
            isActive: f,
            begin: s,
          },
          (e) => {
            var l = es(O, i, e),
              u = es(S, o, e),
              c = es(P, a, e),
              s = es(A, r, e),
              f = es(j, n, e);
            p.current &&
              ((y.current = l), (v.current = u), (g.current = c), (m.current = s), (b.current = f));
            var h = e > 0 ? { transition: M, strokeDasharray: _ } : { strokeDasharray: E };
            return z.createElement(
              "path",
              d9({}, Y(t), {
                className: w,
                d: yt(s, f, l, u, c),
                ref: p,
                style: d7(d7({}, h), t.style),
              })
            );
          }
        );
      };
    function yi() {
      return (yi = Object.assign.bind()).apply(null, arguments);
    }
    function yo(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
      );
    }
    var ya = (e) => {
        var {
            cx: t,
            cy: r,
            radius: n,
            angle: i,
            sign: o,
            isExternal: a,
            cornerRadius: l,
            cornerIsExternal: u,
          } = e,
          c = l * (a ? 1 : -1) + n,
          s = Math.asin(l / c) / e0,
          f = u ? i : i + o * s,
          p = e1(t, r, c, f);
        return {
          center: p,
          circleTangency: e1(t, r, n, f),
          lineTangency: e1(t, r, c * Math.cos(s * e0), u ? i - o * s : i),
          theta: s,
        };
      },
      yl = (e) => {
        var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: o, endAngle: a } = e,
          l = et(a - o) * Math.min(Math.abs(a - o), 359.999),
          u = o + l,
          c = e1(t, r, i, o),
          s = e1(t, r, i, u),
          f = ee(
            k || (k = yo(["M ", ",", "\n    A ", ",", ",0,\n    ", ",", ",\n    ", ",", "\n  "])),
            c.x,
            c.y,
            i,
            i,
            +(Math.abs(l) > 180),
            +(o > u),
            s.x,
            s.y
          );
        if (n > 0) {
          var p = e1(t, r, n, o),
            h = e1(t, r, n, u);
          f += ee(
            T ||
              (T = yo([
                "L ",
                ",",
                "\n            A ",
                ",",
                ",0,\n            ",
                ",",
                ",\n            ",
                ",",
                " Z",
              ])),
            h.x,
            h.y,
            n,
            n,
            +(Math.abs(l) > 180),
            +(o <= u),
            p.x,
            p.y
          );
        } else f += ee(C || (C = yo(["L ", ",", " Z"])), t, r);
        return f;
      },
      yu = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
      },
      yc = (e) => {
        var t,
          r = eN(e, yu),
          {
            cx: n,
            cy: i,
            innerRadius: o,
            outerRadius: a,
            cornerRadius: l,
            forceCornerRadius: u,
            cornerIsExternal: c,
            startAngle: s,
            endAngle: f,
            className: p,
          } = r;
        if (a < o || s === f) return null;
        var h = (0, R.clsx)("recharts-sector", p),
          d = a - o,
          y = eu(l, d, 0, !0);
        return (
          (t =
            y > 0 && 360 > Math.abs(s - f)
              ? ((e) => {
                  var {
                      cx: t,
                      cy: r,
                      innerRadius: n,
                      outerRadius: i,
                      cornerRadius: o,
                      forceCornerRadius: a,
                      cornerIsExternal: l,
                      startAngle: u,
                      endAngle: c,
                    } = e,
                    s = et(c - u),
                    {
                      circleTangency: f,
                      lineTangency: p,
                      theta: h,
                    } = ya({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: u,
                      sign: s,
                      cornerRadius: o,
                      cornerIsExternal: l,
                    }),
                    {
                      circleTangency: d,
                      lineTangency: y,
                      theta: v,
                    } = ya({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: c,
                      sign: -s,
                      cornerRadius: o,
                      cornerIsExternal: l,
                    }),
                    g = l ? Math.abs(u - c) : Math.abs(u - c) - h - v;
                  if (g < 0)
                    return a
                      ? ee(
                          D ||
                            (D = yo([
                              "M ",
                              ",",
                              "\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n      ",
                            ])),
                          p.x,
                          p.y,
                          o,
                          o,
                          2 * o,
                          o,
                          o,
                          -(2 * o)
                        )
                      : yl({
                          cx: t,
                          cy: r,
                          innerRadius: n,
                          outerRadius: i,
                          startAngle: u,
                          endAngle: c,
                        });
                  var m = ee(
                    I ||
                      (I = yo([
                        "M ",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,",
                        ",",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n  ",
                      ])),
                    p.x,
                    p.y,
                    o,
                    o,
                    +(s < 0),
                    f.x,
                    f.y,
                    i,
                    i,
                    +(g > 180),
                    +(s < 0),
                    d.x,
                    d.y,
                    o,
                    o,
                    +(s < 0),
                    y.x,
                    y.y
                  );
                  if (n > 0) {
                    var {
                        circleTangency: b,
                        lineTangency: x,
                        theta: w,
                      } = ya({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: u,
                        sign: s,
                        isExternal: !0,
                        cornerRadius: o,
                        cornerIsExternal: l,
                      }),
                      {
                        circleTangency: O,
                        lineTangency: S,
                        theta: P,
                      } = ya({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: c,
                        sign: -s,
                        isExternal: !0,
                        cornerRadius: o,
                        cornerIsExternal: l,
                      }),
                      A = l ? Math.abs(u - c) : Math.abs(u - c) - w - P;
                    if (A < 0 && 0 === o) return "".concat(m, "L").concat(t, ",").concat(r, "Z");
                    m += ee(
                      N ||
                        (N = yo([
                          "L",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,",
                          ",",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "Z",
                        ])),
                      S.x,
                      S.y,
                      o,
                      o,
                      +(s < 0),
                      O.x,
                      O.y,
                      n,
                      n,
                      +(A > 180),
                      +(s > 0),
                      b.x,
                      b.y,
                      o,
                      o,
                      +(s < 0),
                      x.x,
                      x.y
                    );
                  } else m += ee(L || (L = yo(["L", ",", "Z"])), t, r);
                  return m;
                })({
                  cx: n,
                  cy: i,
                  innerRadius: o,
                  outerRadius: a,
                  cornerRadius: Math.min(y, d / 2),
                  forceCornerRadius: u,
                  cornerIsExternal: c,
                  startAngle: s,
                  endAngle: f,
                })
              : yl({ cx: n, cy: i, innerRadius: o, outerRadius: a, startAngle: s, endAngle: f })),
          z.createElement("path", yi({}, Y(r), { className: h, d: t }))
        );
      };
    e.s(["Sector", () => yc], 83027);
    let ys = Math.PI,
      yf = 2 * ys,
      yp = yf - 1e-6;
    function yh(e) {
      this._ += e[0];
      for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
    }
    class yd {
      constructor(e) {
        ((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == e
              ? yh
              : (function (e) {
                  let t = Math.floor(e);
                  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
                  if (t > 15) return yh;
                  let r = 10 ** t;
                  return function (e) {
                    this._ += e[0];
                    for (let t = 1, n = e.length; t < n; ++t)
                      this._ += Math.round(arguments[t] * r) / r + e[t];
                  };
                })(e)));
      }
      moveTo(e, t) {
        this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
      }
      closePath() {
        null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(e, t) {
        this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
      }
      quadraticCurveTo(e, t, r, n) {
        this._append`Q${+e},${+t},${(this._x1 = +r)},${(this._y1 = +n)}`;
      }
      bezierCurveTo(e, t, r, n, i, o) {
        this._append`C${+e},${+t},${+r},${+n},${(this._x1 = +i)},${(this._y1 = +o)}`;
      }
      arcTo(e, t, r, n, i) {
        if (((e *= 1), (t *= 1), (r *= 1), (n *= 1), (i *= 1) < 0))
          throw Error(`negative radius: ${i}`);
        let o = this._x1,
          a = this._y1,
          l = r - e,
          u = n - t,
          c = o - e,
          s = a - t,
          f = c * c + s * s;
        if (null === this._x1) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
        else if (f > 1e-6)
          if (Math.abs(s * l - u * c) > 1e-6 && i) {
            let p = r - o,
              h = n - a,
              d = l * l + u * u,
              y = Math.sqrt(d),
              v = Math.sqrt(f),
              g = i * Math.tan((ys - Math.acos((d + f - (p * p + h * h)) / (2 * y * v))) / 2),
              m = g / v,
              b = g / y;
            (Math.abs(m - 1) > 1e-6 && this._append`L${e + m * c},${t + m * s}`,
              this
                ._append`A${i},${i},0,0,${+(s * p > c * h)},${(this._x1 = e + b * l)},${(this._y1 = t + b * u)}`);
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      }
      arc(e, t, r, n, i, o) {
        if (((e *= 1), (t *= 1), (r *= 1), (o = !!o), r < 0)) throw Error(`negative radius: ${r}`);
        let a = r * Math.cos(n),
          l = r * Math.sin(n),
          u = e + a,
          c = t + l,
          s = 1 ^ o,
          f = o ? n - i : i - n;
        (null === this._x1
          ? this._append`M${u},${c}`
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) &&
            this._append`L${u},${c}`,
          r &&
            (f < 0 && (f = (f % yf) + yf),
            f > yp
              ? this
                  ._append`A${r},${r},0,1,${s},${e - a},${t - l}A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = c)}`
              : f > 1e-6 &&
                this
                  ._append`A${r},${r},0,${+(f >= ys)},${s},${(this._x1 = e + r * Math.cos(i))},${(this._y1 = t + r * Math.sin(i))}`));
      }
      rect(e, t, r, n) {
        this
          ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(r *= 1)}v${+n}h${-r}Z`;
      }
      toString() {
        return this._;
      }
    }
    function yy(e) {
      let t = 3;
      return (
        (e.digits = function (r) {
          if (!arguments.length) return t;
          if (null == r) t = null;
          else {
            let e = Math.floor(r);
            if (!(e >= 0)) throw RangeError(`invalid digits: ${r}`);
            t = e;
          }
          return e;
        }),
        () => new yd(t)
      );
    }
    yd.prototype;
    let yv = Math.cos,
      yg = Math.sin,
      ym = Math.sqrt,
      yb = Math.PI,
      yx = 2 * yb;
    ym(3);
    let yw = {
        draw(e, t) {
          let r = ym(t / yb);
          (e.moveTo(r, 0), e.arc(0, 0, r, 0, yx));
        },
      },
      yO = ym(1 / 3),
      yS = 2 * yO,
      yP = yg(yb / 10) / yg((7 * yb) / 10),
      yA = yg(yx / 10) * yP,
      yj = -yv(yx / 10) * yP,
      yE = ym(3);
    ym(3);
    let y_ = ym(3) / 2,
      yM = 1 / ym(12),
      yk = (yM / 2 + 1) * 3;
    var yT = ["type", "size", "sizeType"];
    function yC() {
      return (yC = Object.assign.bind()).apply(null, arguments);
    }
    function yD(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function yI(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yD(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yD(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var yN = {
        symbolCircle: yw,
        symbolCross: {
          draw(e, t) {
            let r = ym(t / 5) / 2;
            (e.moveTo(-3 * r, -r),
              e.lineTo(-r, -r),
              e.lineTo(-r, -3 * r),
              e.lineTo(r, -3 * r),
              e.lineTo(r, -r),
              e.lineTo(3 * r, -r),
              e.lineTo(3 * r, r),
              e.lineTo(r, r),
              e.lineTo(r, 3 * r),
              e.lineTo(-r, 3 * r),
              e.lineTo(-r, r),
              e.lineTo(-3 * r, r),
              e.closePath());
          },
        },
        symbolDiamond: {
          draw(e, t) {
            let r = ym(t / yS),
              n = r * yO;
            (e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath());
          },
        },
        symbolSquare: {
          draw(e, t) {
            let r = ym(t),
              n = -r / 2;
            e.rect(n, n, r, r);
          },
        },
        symbolStar: {
          draw(e, t) {
            let r = ym(0.8908130915292852 * t),
              n = yA * r,
              i = yj * r;
            (e.moveTo(0, -r), e.lineTo(n, i));
            for (let t = 1; t < 5; ++t) {
              let o = (yx * t) / 5,
                a = yv(o),
                l = yg(o);
              (e.lineTo(l * r, -a * r), e.lineTo(a * n - l * i, l * n + a * i));
            }
            e.closePath();
          },
        },
        symbolTriangle: {
          draw(e, t) {
            let r = -ym(t / (3 * yE));
            (e.moveTo(0, 2 * r), e.lineTo(-yE * r, -r), e.lineTo(yE * r, -r), e.closePath());
          },
        },
        symbolWye: {
          draw(e, t) {
            let r = ym(t / yk),
              n = r / 2,
              i = r * yM,
              o = r * yM + r,
              a = -n;
            (e.moveTo(n, i),
              e.lineTo(n, o),
              e.lineTo(a, o),
              e.lineTo(-0.5 * n - y_ * i, y_ * n + -0.5 * i),
              e.lineTo(-0.5 * n - y_ * o, y_ * n + -0.5 * o),
              e.lineTo(-0.5 * a - y_ * o, y_ * a + -0.5 * o),
              e.lineTo(-0.5 * n + y_ * i, -0.5 * i - y_ * n),
              e.lineTo(-0.5 * n + y_ * o, -0.5 * o - y_ * n),
              e.lineTo(-0.5 * a + y_ * o, -0.5 * o - y_ * a),
              e.closePath());
          },
        },
      },
      yL = Math.PI / 180,
      yz = (e) => {
        var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e,
          i = yI(
            yI(
              {},
              (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                      }
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < o.length; n++)
                    ((r = o[n]),
                      -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
                }
                return i;
              })(e, yT)
            ),
            {},
            { type: t, size: r, sizeType: n }
          ),
          o = "circle";
        "string" == typeof t && (o = t);
        var { className: a, cx: l, cy: u } = i,
          c = Y(i);
        return ei(l) && ei(u) && ei(r)
          ? z.createElement(
              "path",
              yC({}, c, {
                className: (0, R.clsx)("recharts-symbols", a),
                transform: "translate(".concat(l, ", ").concat(u, ")"),
                d: (() => {
                  var e,
                    t = ((e = o), yN["symbol".concat(eh(e))] || yw),
                    i = (function (e, t) {
                      let r = null,
                        n = yy(i);
                      function i() {
                        let i;
                        if (
                          (r || (r = i = n()),
                          e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
                          i)
                        )
                          return ((r = null), i + "" || null);
                      }
                      return (
                        (e = "function" == typeof e ? e : nw(e || yw)),
                        (t = "function" == typeof t ? t : nw(void 0 === t ? 64 : +t)),
                        (i.type = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : nw(t)), i)
                            : e;
                        }),
                        (i.size = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : nw(+e)), i)
                            : t;
                        }),
                        (i.context = function (e) {
                          return arguments.length ? ((r = null == e ? null : e), i) : r;
                        }),
                        i
                      );
                    })()
                      .type(t)
                      .size(
                        ((e, t, r) => {
                          if ("area" === t) return e;
                          switch (r) {
                            case "cross":
                              return (5 * e * e) / 9;
                            case "diamond":
                              return (0.5 * e * e) / Math.sqrt(3);
                            case "square":
                              return e * e;
                            case "star":
                              var n = 18 * yL;
                              return (
                                1.25 * e * e * (Math.tan(n) - Math.tan(2 * n) * Math.tan(n) ** 2)
                              );
                            case "triangle":
                              return (Math.sqrt(3) * e * e) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
                            default:
                              return (Math.PI * e * e) / 4;
                          }
                        })(r, n, o)
                      )();
                  if (null !== i) return i;
                })(),
              })
            )
          : null;
      };
    function yR(e) {
      this._context = e;
    }
    function yB(e) {
      return new yR(e);
    }
    function yU(e) {
      return e[0];
    }
    function yF(e) {
      return e[1];
    }
    function y$(e, t) {
      var r = nw(!0),
        n = null,
        i = yB,
        o = null,
        a = yy(l);
      function l(l) {
        var u,
          c,
          s,
          f = (l = nx(l)).length,
          p = !1;
        for (null == n && (o = i((s = a()))), u = 0; u <= f; ++u)
          (!(u < f && r((c = l[u]), u, l)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()),
            p && o.point(+e(c, u, l), +t(c, u, l)));
        if (s) return ((o = null), s + "" || null);
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? yU : nw(e)),
        (t = "function" == typeof t ? t : void 0 === t ? yF : nw(t)),
        (l.x = function (t) {
          return arguments.length ? ((e = "function" == typeof t ? t : nw(+t)), l) : e;
        }),
        (l.y = function (e) {
          return arguments.length ? ((t = "function" == typeof e ? e : nw(+e)), l) : t;
        }),
        (l.defined = function (e) {
          return arguments.length ? ((r = "function" == typeof e ? e : nw(!!e)), l) : r;
        }),
        (l.curve = function (e) {
          return arguments.length ? ((i = e), null != n && (o = i(n)), l) : i;
        }),
        (l.context = function (e) {
          return arguments.length ? (null == e ? (n = o = null) : (o = i((n = e))), l) : n;
        }),
        l
      );
    }
    function yK(e, t, r) {
      var n = null,
        i = nw(!0),
        o = null,
        a = yB,
        l = null,
        u = yy(c);
      function c(c) {
        var s,
          f,
          p,
          h,
          d,
          y = (c = nx(c)).length,
          v = !1,
          g = Array(y),
          m = Array(y);
        for (null == o && (l = a((d = u()))), s = 0; s <= y; ++s) {
          if (!(s < y && i((h = c[s]), s, c)) === v)
            if ((v = !v)) ((f = s), l.areaStart(), l.lineStart());
            else {
              for (l.lineEnd(), l.lineStart(), p = s - 1; p >= f; --p) l.point(g[p], m[p]);
              (l.lineEnd(), l.areaEnd());
            }
          v &&
            ((g[s] = +e(h, s, c)),
            (m[s] = +t(h, s, c)),
            l.point(n ? +n(h, s, c) : g[s], r ? +r(h, s, c) : m[s]));
        }
        if (d) return ((l = null), d + "" || null);
      }
      function s() {
        return y$().defined(i).curve(a).context(o);
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? yU : nw(+e)),
        (t = "function" == typeof t ? t : void 0 === t ? nw(0) : nw(+t)),
        (r = "function" == typeof r ? r : void 0 === r ? yF : nw(+r)),
        (c.x = function (t) {
          return arguments.length ? ((e = "function" == typeof t ? t : nw(+t)), (n = null), c) : e;
        }),
        (c.x0 = function (t) {
          return arguments.length ? ((e = "function" == typeof t ? t : nw(+t)), c) : e;
        }),
        (c.x1 = function (e) {
          return arguments.length
            ? ((n = null == e ? null : "function" == typeof e ? e : nw(+e)), c)
            : n;
        }),
        (c.y = function (e) {
          return arguments.length ? ((t = "function" == typeof e ? e : nw(+e)), (r = null), c) : t;
        }),
        (c.y0 = function (e) {
          return arguments.length ? ((t = "function" == typeof e ? e : nw(+e)), c) : t;
        }),
        (c.y1 = function (e) {
          return arguments.length
            ? ((r = null == e ? null : "function" == typeof e ? e : nw(+e)), c)
            : r;
        }),
        (c.lineX0 = c.lineY0 =
          function () {
            return s().x(e).y(t);
          }),
        (c.lineY1 = function () {
          return s().x(e).y(r);
        }),
        (c.lineX1 = function () {
          return s().x(n).y(t);
        }),
        (c.defined = function (e) {
          return arguments.length ? ((i = "function" == typeof e ? e : nw(!!e)), c) : i;
        }),
        (c.curve = function (e) {
          return arguments.length ? ((a = e), null != o && (l = a(o)), c) : a;
        }),
        (c.context = function (e) {
          return arguments.length ? (null == e ? (o = l = null) : (l = a((o = e))), c) : o;
        }),
        c
      );
    }
    function yW() {}
    function yq(e, t, r) {
      e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + r) / 6
      );
    }
    function yY(e) {
      this._context = e;
    }
    function yH(e) {
      this._context = e;
    }
    function yV(e) {
      this._context = e;
    }
    ((yz.registerSymbol = (e, t) => {
      yN["symbol".concat(eh(e))] = t;
    }),
      (yR.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(e, t);
          }
        },
      }),
      (yY.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              yq(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
            default:
              yq(this, e, t);
          }
          ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
        },
      }),
      (yH.prototype = {
        areaStart: yW,
        areaEnd: yW,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x2, this._y2), this._context.closePath());
              break;
            case 2:
              (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4));
          }
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1), (this._x2 = e), (this._y2 = t));
              break;
            case 1:
              ((this._point = 2), (this._x3 = e), (this._y3 = t));
              break;
            case 2:
              ((this._point = 3),
                (this._x4 = e),
                (this._y4 = t),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + e) / 6,
                  (this._y0 + 4 * this._y1 + t) / 6
                ));
              break;
            default:
              yq(this, e, t);
          }
          ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
        },
      }),
      (yV.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var r = (this._x0 + 4 * this._x1 + e) / 6,
                n = (this._y0 + 4 * this._y1 + t) / 6;
              this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
              break;
            case 3:
              this._point = 4;
            default:
              yq(this, e, t);
          }
          ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
        },
      }));
    class yX {
      constructor(e, t) {
        ((this._context = e), (this._x = t));
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line));
      }
      point(e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ((this._point = 1),
              this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo(
                  (this._x0 = (this._x0 + e) / 2),
                  this._y0,
                  this._x0,
                  t,
                  e,
                  t
                )
              : this._context.bezierCurveTo(
                  this._x0,
                  (this._y0 = (this._y0 + t) / 2),
                  e,
                  this._y0,
                  e,
                  t
                );
        }
        ((this._x0 = e), (this._y0 = t));
      }
    }
    function yG(e) {
      this._context = e;
    }
    yG.prototype = {
      areaStart: yW,
      areaEnd: yW,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (e, t) {
        ((e *= 1),
          (t *= 1),
          this._point
            ? this._context.lineTo(e, t)
            : ((this._point = 1), this._context.moveTo(e, t)));
      },
    };
    function yZ(e, t, r) {
      var n = e._x1 - e._x0,
        i = t - e._x1,
        o = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        a = (r - e._y1) / (i || (n < 0 && -0));
      return (
        ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
          Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs((o * i + a * n) / (n + i))) || 0
      );
    }
    function yQ(e, t) {
      var r = e._x1 - e._x0;
      return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
    }
    function yJ(e, t, r) {
      var n = e._x0,
        i = e._y0,
        o = e._x1,
        a = e._y1,
        l = (o - n) / 3;
      e._context.bezierCurveTo(n + l, i + l * t, o - l, a - l * r, o, a);
    }
    function y0(e) {
      this._context = e;
    }
    function y1(e) {
      this._context = new y2(e);
    }
    function y2(e) {
      this._context = e;
    }
    function y5(e) {
      this._context = e;
    }
    function y3(e) {
      var t,
        r,
        n = e.length - 1,
        i = Array(n),
        o = Array(n),
        a = Array(n);
      for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
        ((i[t] = 1), (o[t] = 4), (a[t] = 4 * e[t] + 2 * e[t + 1]));
      for (i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
        ((r = i[t] / o[t - 1]), (o[t] -= r), (a[t] -= r * a[t - 1]));
      for (i[n - 1] = a[n - 1] / o[n - 1], t = n - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / o[t];
      for (t = 0, o[n - 1] = (e[n] + i[n - 1]) / 2; t < n - 1; ++t) o[t] = 2 * e[t + 1] - i[t + 1];
      return [i, o];
    }
    function y6(e, t) {
      ((this._context = e), (this._t = t));
    }
    function y8() {
      return (y8 = Object.assign.bind()).apply(null, arguments);
    }
    function y4(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function y7(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? y4(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y4(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    ((y0.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            yJ(this, this._t0, yQ(this, this._t0));
        }
        ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (e, t) {
        var r = NaN;
        if (((t *= 1), (e *= 1) !== this._x1 || t !== this._y1)) {
          switch (this._point) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3), yJ(this, yQ(this, (r = yZ(this, e, t))), r));
              break;
            default:
              yJ(this, this._t0, (r = yZ(this, e, t)));
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t),
            (this._t0 = r));
        }
      },
    }),
      ((y1.prototype = Object.create(y0.prototype)).point = function (e, t) {
        y0.prototype.point.call(this, t, e);
      }),
      (y2.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, e);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, e);
        },
        bezierCurveTo: function (e, t, r, n, i, o) {
          this._context.bezierCurveTo(t, e, n, r, o, i);
        },
      }),
      (y5.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = []), (this._y = []));
        },
        lineEnd: function () {
          var e = this._x,
            t = this._y,
            r = e.length;
          if (r)
            if (
              (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]),
              2 === r)
            )
              this._context.lineTo(e[1], t[1]);
            else
              for (var n = y3(e), i = y3(t), o = 0, a = 1; a < r; ++o, ++a)
                this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], e[a], t[a]);
          ((this._line || (0 !== this._line && 1 === r)) && this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null));
        },
        point: function (e, t) {
          (this._x.push(+e), this._y.push(+t));
        },
      }),
      (y6.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = this._y = NaN), (this._point = 0));
        },
        lineEnd: function () {
          (0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
              else {
                var r = this._x * (1 - this._t) + e * this._t;
                (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
              }
          }
          ((this._x = e), (this._y = t));
        },
      }));
    var y9 = {
        curveBasisClosed: function (e) {
          return new yH(e);
        },
        curveBasisOpen: function (e) {
          return new yV(e);
        },
        curveBasis: function (e) {
          return new yY(e);
        },
        curveBumpX: function (e) {
          return new yX(e, !0);
        },
        curveBumpY: function (e) {
          return new yX(e, !1);
        },
        curveLinearClosed: function (e) {
          return new yG(e);
        },
        curveLinear: yB,
        curveMonotoneX: function (e) {
          return new y0(e);
        },
        curveMonotoneY: function (e) {
          return new y1(e);
        },
        curveNatural: function (e) {
          return new y5(e);
        },
        curveStep: function (e) {
          return new y6(e, 0.5);
        },
        curveStepAfter: function (e) {
          return new y6(e, 1);
        },
        curveStepBefore: function (e) {
          return new y6(e, 0);
        },
      },
      ve = (e) => eL(e.x) && eL(e.y),
      vt = (e) => null != e.base && ve(e.base) && ve(e),
      vr = (e) => e.x,
      vn = (e) => e.y,
      vi = (e) => {
        var { className: t, points: r, path: n, pathRef: i } = e,
          o = iS();
        if ((!r || !r.length) && !n) return null;
        var a = {
            type: e.type,
            points: e.points,
            baseLine: e.baseLine,
            layout: e.layout || o,
            connectNulls: e.connectNulls,
          },
          l =
            r && r.length
              ? ((e) => {
                  var {
                      type: t = "linear",
                      points: r = [],
                      baseLine: n,
                      layout: i,
                      connectNulls: o = !1,
                    } = e,
                    a = ((e, t) => {
                      if ("function" == typeof e) return e;
                      var r = "curve".concat(eh(e));
                      if (("curveMonotone" === r || "curveBump" === r) && t) {
                        var n = y9["".concat(r).concat("vertical" === t ? "Y" : "X")];
                        if (n) return n;
                      }
                      return y9[r] || yB;
                    })(t, i),
                    l = o ? r.filter(ve) : r;
                  if (Array.isArray(n)) {
                    var u = r.map((e, t) => y7(y7({}, e), {}, { base: n[t] }));
                    return (
                      "vertical" === i
                        ? yK()
                            .y(vn)
                            .x1(vr)
                            .x0((e) => e.base.x)
                        : yK()
                            .x(vr)
                            .y1(vn)
                            .y0((e) => e.base.y)
                    )
                      .defined(vt)
                      .curve(a)(o ? u.filter(vt) : u);
                  }
                  return (
                    "vertical" === i && ei(n)
                      ? yK().y(vn).x1(vr).x0(n)
                      : ei(n)
                        ? yK().x(vr).y1(vn).y0(n)
                        : y$().x(vr).y(vn)
                  )
                    .defined(ve)
                    .curve(a)(l);
                })(a)
              : n;
        return z.createElement(
          "path",
          y8({}, W(e), ar(e), {
            className: (0, R.clsx)("recharts-curve", t),
            d: null === l ? void 0 : l,
            ref: i,
          })
        );
      };
    e.s(["Curve", () => vi], 24417);
    var vo = ["option", "shapeType", "activeClassName"];
    function va(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vl(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? va(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : va(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function vu(e) {
      var { shapeType: t, elementProps: r } = e;
      switch (t) {
        case "rectangle":
          return z.createElement(d8, r);
        case "trapezoid":
          return z.createElement(yn, r);
        case "sector":
          return z.createElement(yc, r);
        case "symbols":
          if ("symbols" === t) return z.createElement(yz, r);
          break;
        case "curve":
          return z.createElement(vi, r);
        default:
          return null;
      }
    }
    function vc(e) {
      var t,
        { option: r, shapeType: n, activeClassName: i = "recharts-active-shape" } = e,
        o = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        })(e, vo);
      if ((0, z.isValidElement)(r))
        t = (0, z.cloneElement)(r, vl(vl({}, o), (0, z.isValidElement)(r) ? r.props : r));
      else if ("function" == typeof r) t = r(o, o.index);
      else if ((0, dG.default)(r) && "boolean" != typeof r) {
        var a = vl(vl({}, o), r);
        t = z.createElement(vu, { shapeType: n, elementProps: a });
      } else t = z.createElement(vu, { shapeType: n, elementProps: o });
      return o.isActive ? z.createElement(G, { className: i }, t) : t;
    }
    (e.s(["Shape", () => vc], 49352), e.i(77194));
    var vs = { notify() {}, get: () => [] },
      vf =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      vp = "u" > typeof navigator && "ReactNative" === navigator.product,
      vh = vf || vp ? z.useLayoutEffect : z.useEffect;
    function vd(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    var vy = Symbol.for("react-redux-context"),
      vv = "u" > typeof globalThis ? globalThis : {},
      vg = (function () {
        if (!z.createContext) return {};
        let e = (vv[vy] ??= new Map()),
          t = e.get(z.createContext);
        return (t || ((t = z.createContext(null)), e.set(z.createContext, t)), t);
      })(),
      vm = function (e) {
        let { children: t, context: r, serverState: n, store: i } = e,
          o = z.useMemo(() => {
            let e = (function (e, t) {
              let r,
                n = vs,
                i = 0,
                o = !1;
              function a() {
                c.onStateChange && c.onStateChange();
              }
              function l() {
                if ((i++, !r)) {
                  let t, i;
                  ((r = e.subscribe(a)),
                    (t = null),
                    (i = null),
                    (n = {
                      clear() {
                        ((t = null), (i = null));
                      },
                      notify() {
                        let e = t;
                        for (; e; ) (e.callback(), (e = e.next));
                      },
                      get() {
                        let e = [],
                          r = t;
                        for (; r; ) (e.push(r), (r = r.next));
                        return e;
                      },
                      subscribe(e) {
                        let r = !0,
                          n = (i = { callback: e, next: null, prev: i });
                        return (
                          n.prev ? (n.prev.next = n) : (t = n),
                          function () {
                            r &&
                              null !== t &&
                              ((r = !1),
                              n.next ? (n.next.prev = n.prev) : (i = n.prev),
                              n.prev ? (n.prev.next = n.next) : (t = n.next));
                          }
                        );
                      },
                    }));
                }
              }
              function u() {
                (i--, r && 0 === i && (r(), (r = void 0), n.clear(), (n = vs)));
              }
              let c = {
                addNestedSub: function (e) {
                  l();
                  let t = n.subscribe(e),
                    r = !1;
                  return () => {
                    r || ((r = !0), t(), u());
                  };
                },
                notifyNestedSubs: function () {
                  n.notify();
                },
                handleChangeWrapper: a,
                isSubscribed: function () {
                  return o;
                },
                trySubscribe: function () {
                  o || ((o = !0), l());
                },
                tryUnsubscribe: function () {
                  o && ((o = !1), u());
                },
                getListeners: () => n,
              };
              return c;
            })(i);
            return { store: i, subscription: e, getServerState: n ? () => n : void 0 };
          }, [i, n]),
          a = z.useMemo(() => i.getState(), [i]);
        return (
          vh(() => {
            let { subscription: e } = o;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              a !== i.getState() && e.notifyNestedSubs(),
              () => {
                (e.tryUnsubscribe(), (e.onStateChange = void 0));
              }
            );
          }, [o, a]),
          z.createElement((r || vg).Provider, { value: o }, t)
        );
      };
    function vb(e = vg) {
      return function () {
        return z.useContext(e);
      };
    }
    var vx = vb(),
      vw = new Set([
        "axisLine",
        "tickLine",
        "activeBar",
        "activeDot",
        "activeLabel",
        "activeShape",
        "allowEscapeViewBox",
        "background",
        "cursor",
        "dot",
        "label",
        "line",
        "margin",
        "padding",
        "position",
        "shape",
        "style",
        "tick",
        "wrapperStyle",
        "radius",
      ]);
    function vO(e, t) {
      for (var r of new Set([...Object.keys(e), ...Object.keys(t)]))
        if (vw.has(r)) {
          if (null == e[r] && null == t[r]) continue;
          if (
            !(function (e, t) {
              if (vd(e, t)) return !0;
              if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
              let r = Object.keys(e),
                n = Object.keys(t);
              if (r.length !== n.length) return !1;
              for (let n = 0; n < r.length; n++)
                if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !vd(e[r[n]], t[r[n]]))
                  return !1;
              return !0;
            })(e[r], t[r])
          )
            return !1;
        } else {
          var n, i;
          if (
            ((n = e[r]),
            (i = t[r]),
            (null != n || null != i) &&
              ("number" == typeof n && "number" == typeof i
                ? n !== i && (n == n || i == i)
                : n !== i))
          )
            return !1;
        }
      return !0;
    }
    e.s(["propsAreEqual", () => vO], 68098);
    var vS = ["id"],
      vP = ["type", "layout", "connectNulls", "needClip", "shape"],
      vA = [
        "activeDot",
        "animateNewValues",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "connectNulls",
        "dot",
        "hide",
        "isAnimationActive",
        "label",
        "legendType",
        "xAxisId",
        "yAxisId",
        "id",
      ];
    function vj() {
      return (vj = Object.assign.bind()).apply(null, arguments);
    }
    function vE(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function v_(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vE(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vE(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function vM(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    var vk = z.memo((e) => {
        var {
            dataKey: t,
            data: r,
            stroke: n,
            strokeWidth: i,
            fill: o,
            name: a,
            hide: l,
            unit: u,
            tooltipType: c,
            id: s,
          } = e,
          f = {
            dataDefinedOnItem: r,
            getPosition: ey,
            settings: {
              stroke: n,
              strokeWidth: i,
              fill: o,
              dataKey: t,
              nameKey: void 0,
              name: nU(a, t),
              hide: l,
              type: c,
              color: n,
              unit: u,
              graphicalItemId: s,
            },
          };
        return z.createElement(h2, { tooltipEntrySettings: f });
      }),
      vT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
    function vC(e) {
      var { clipPathId: t, points: r, props: n } = e,
        { dot: i, dataKey: o, needClip: a } = n,
        { id: l } = n,
        u = W(vM(n, vS));
      return z.createElement(am, {
        points: r,
        dot: i,
        className: "recharts-line-dots",
        dotClassName: "recharts-line-dot",
        dataKey: o,
        baseProps: u,
        needClip: a,
        clipPathId: t,
      });
    }
    function vD(e) {
      var { showLabels: t, children: r, points: n } = e,
        i = (0, z.useMemo)(
          () =>
            null == n
              ? void 0
              : n.map((e) => {
                  var t,
                    r,
                    n = {
                      x: null != (t = e.x) ? t : 0,
                      y: null != (r = e.y) ? r : 0,
                      width: 0,
                      lowerWidth: 0,
                      upperWidth: 0,
                      height: 0,
                    };
                  return v_(
                    v_({}, n),
                    {},
                    {
                      value: e.value,
                      payload: e.payload,
                      viewBox: n,
                      parentViewBox: void 0,
                      fill: void 0,
                    }
                  );
                }),
          [n]
        );
      return z.createElement(o8, { value: t ? i : void 0 }, r);
    }
    function vI(e) {
      var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: o } = e,
        { type: a, layout: l, connectNulls: u, needClip: c, shape: s } = o,
        f = v_(
          v_({}, Y(vM(o, vP))),
          {},
          {
            fill: "none",
            className: "recharts-line-curve",
            clipPath: c ? "url(#clipPath-".concat(t, ")") : void 0,
            points: n,
            type: a,
            layout: l,
            connectNulls: u,
            strokeDasharray: null != i ? i : o.strokeDasharray,
          }
        );
      return z.createElement(
        z.Fragment,
        null,
        (null == n ? void 0 : n.length) > 1 &&
          z.createElement(vc, vj({ shapeType: "curve", option: s }, f, { pathRef: r })),
        z.createElement(vC, { points: n, clipPathId: t, props: o })
      );
    }
    function vN(e) {
      var {
          clipPathId: t,
          props: r,
          pathRef: n,
          previousPointsRef: i,
          longestAnimatedLengthRef: o,
        } = e,
        {
          points: a,
          strokeDasharray: l,
          isAnimationActive: u,
          animationBegin: c,
          animationDuration: s,
          animationEasing: f,
          animateNewValues: p,
          width: h,
          height: d,
          onAnimationEnd: y,
          onAnimationStart: v,
        } = r,
        g = i.current,
        m = dv(a, "recharts-line-"),
        b = (0, z.useRef)(m),
        [x, w] = (0, z.useState)(!1),
        O = (0, z.useCallback)(() => {
          ("function" == typeof y && y(), w(!1));
        }, [y]),
        S = (0, z.useCallback)(() => {
          ("function" == typeof v && v(), w(!0));
        }, [v]),
        P = (function (e) {
          try {
            return (e && e.getTotalLength && e.getTotalLength()) || 0;
          } catch (e) {
            return 0;
          }
        })(n.current),
        A = (0, z.useRef)(0);
      b.current !== m && ((A.current = o.current), (b.current = m));
      var j = A.current;
      return z.createElement(
        vD,
        { points: a, showLabels: !x },
        r.children,
        z.createElement(
          dX,
          {
            animationId: m,
            begin: c,
            duration: s,
            isActive: u,
            easing: f,
            onAnimationEnd: O,
            onAnimationStart: S,
            key: m,
          },
          (e) => {
            var c,
              s = Math.min(es(j, P + j, e), P);
            if (
              ((c = u
                ? l
                  ? ((e, t, r) => {
                      var n = r.reduce((e, t) => e + t);
                      if (!n) return vT(t, e);
                      for (
                        var i = Math.floor(e / n), o = e % n, a = t - e, l = [], u = 0, c = 0;
                        u < r.length;
                        c += null != (s = r[u]) ? s : 0, ++u
                      ) {
                        var s,
                          f = r[u];
                        if (null != f && c + f > o) {
                          l = [...r.slice(0, u), o - c];
                          break;
                        }
                      }
                      var p = l.length % 2 == 0 ? [0, a] : [a];
                      return [
                        ...(function (e, t) {
                          for (var r = e.length % 2 != 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
                            n = [...n, ...r];
                          return n;
                        })(r, i),
                        ...l,
                        ...p,
                      ]
                        .map((e) => "".concat(e, "px"))
                        .join(", ");
                    })(
                      s,
                      P,
                      ""
                        .concat(l)
                        .split(/[,\s]+/gim)
                        .map((e) => parseFloat(e))
                    )
                  : vT(P, s)
                : null == l
                  ? void 0
                  : String(l)),
              e > 0 && P > 0 && ((i.current = a), (o.current = Math.max(o.current, s))),
              g)
            ) {
              var f = g.length / a.length,
                y =
                  1 === e
                    ? a
                    : a.map((t, r) => {
                        var n = Math.floor(r * f);
                        if (g[n]) {
                          var i = g[n];
                          return v_(v_({}, t), {}, { x: es(i.x, t.x, e), y: es(i.y, t.y, e) });
                        }
                        return p
                          ? v_(v_({}, t), {}, { x: es(2 * h, t.x, e), y: es(d / 2, t.y, e) })
                          : v_(v_({}, t), {}, { x: t.x, y: t.y });
                      });
              return (
                (i.current = y),
                z.createElement(vI, {
                  props: r,
                  points: y,
                  clipPathId: t,
                  pathRef: n,
                  strokeDasharray: c,
                })
              );
            }
            return z.createElement(vI, {
              props: r,
              points: a,
              clipPathId: t,
              pathRef: n,
              strokeDasharray: c,
            });
          }
        ),
        z.createElement(ae, { label: r.label })
      );
    }
    function vL(e) {
      var { clipPathId: t, props: r } = e,
        n = (0, z.useRef)(null),
        i = (0, z.useRef)(0),
        o = (0, z.useRef)(null);
      return z.createElement(vN, {
        props: r,
        clipPathId: t,
        previousPointsRef: n,
        longestAnimatedLengthRef: i,
        pathRef: o,
      });
    }
    var vz = (e, t) => {
      var r, n;
      return {
        x: null != (r = e.x) ? r : void 0,
        y: null != (n = e.y) ? n : void 0,
        value: e.value,
        errorVal: nM(e.payload, t),
      };
    };
    class vR extends z.Component {
      render() {
        var {
          hide: e,
          dot: t,
          points: r,
          className: n,
          xAxisId: i,
          yAxisId: o,
          top: a,
          left: l,
          width: u,
          height: c,
          id: s,
          needClip: f,
          zIndex: p,
        } = this.props;
        if (e) return null;
        var h = (0, R.clsx)("recharts-line", n),
          { r: d, strokeWidth: y } = (function (e) {
            var t = q(e);
            if (null != t) {
              var { r, strokeWidth: n } = t,
                i = Number(r),
                o = Number(n);
              return (
                (Number.isNaN(i) || i < 0) && (i = 3),
                (Number.isNaN(o) || o < 0) && (o = 2),
                { r: i, strokeWidth: o }
              );
            }
            return { r: 3, strokeWidth: 2 };
          })(t),
          v = ap(t),
          g = 2 * d + y,
          m = f ? "url(#clipPath-".concat(v ? "" : "dots-").concat(s, ")") : void 0;
        return z.createElement(
          oL,
          { zIndex: p },
          z.createElement(
            G,
            { className: h },
            f &&
              z.createElement(
                "defs",
                null,
                z.createElement(h4, { clipPathId: s, xAxisId: i, yAxisId: o }),
                !v &&
                  z.createElement(
                    "clipPath",
                    { id: "clipPath-dots-".concat(s) },
                    z.createElement("rect", {
                      x: l - g / 2,
                      y: a - g / 2,
                      width: u + g,
                      height: c + g,
                    })
                  )
              ),
            z.createElement(
              h6,
              { xAxisId: i, yAxisId: o, data: r, dataPointFormatter: vz, errorBarOffset: 0 },
              z.createElement(vL, { props: this.props, clipPathId: s })
            )
          ),
          z.createElement(h1, {
            activeDot: this.props.activeDot,
            points: r,
            mainColor: this.props.stroke,
            itemDataKey: this.props.dataKey,
            clipPath: m,
          })
        );
      }
    }
    var vB = {
      activeDot: !0,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      connectNulls: !1,
      dot: !0,
      fill: "#fff",
      hide: !1,
      isAnimationActive: "auto",
      label: !1,
      legendType: "line",
      stroke: "#3182bd",
      strokeWidth: 1,
      xAxisId: 0,
      yAxisId: 0,
      zIndex: i_.line,
      type: "linear",
    };
    function vU(e) {
      var t = eN(e, vB),
        {
          activeDot: r,
          animateNewValues: n,
          animationBegin: i,
          animationDuration: o,
          animationEasing: a,
          connectNulls: l,
          dot: u,
          hide: c,
          isAnimationActive: s,
          label: f,
          legendType: p,
          xAxisId: h,
          yAxisId: d,
          id: y,
        } = t,
        v = vM(t, vA),
        { needClip: g } = h8(h, d),
        m = tt(hZ),
        b = iS(),
        x = n5(),
        w = tt((e) => da(e, h, d, x, y));
      if (("horizontal" !== b && "vertical" !== b) || null == w || null == m) return null;
      var { height: O, width: S, x: P, y: A } = m;
      return z.createElement(
        vR,
        vj({}, v, {
          id: y,
          connectNulls: l,
          dot: u,
          activeDot: r,
          animateNewValues: n,
          animationBegin: i,
          animationDuration: o,
          animationEasing: a,
          isAnimationActive: s,
          hide: c,
          label: f,
          legendType: p,
          xAxisId: h,
          yAxisId: d,
          points: w,
          layout: b,
          height: O,
          width: S,
          left: P,
          top: A,
          needClip: g,
        })
      );
    }
    function vF(e) {
      var {
        layout: t,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: o,
        dataKey: a,
        bandSize: l,
        displayedData: u,
      } = e;
      return u
        .map((e, u) => {
          var c = nM(e, a);
          if ("horizontal" === t) {
            var s = nI({ axis: r, ticks: i, bandSize: l, entry: e, index: u }),
              f = ep(c) ? null : n.scale.map(c);
            return { x: s, y: null != f ? f : null, value: c, payload: e };
          }
          var p = ep(c) ? null : r.scale.map(c),
            h = nI({ axis: n, ticks: o, bandSize: l, entry: e, index: u });
          return null == p || null == h ? null : { x: p, y: h, value: c, payload: e };
        })
        .filter(Boolean);
    }
    var v$ = z.memo(function (e) {
      var t = eN(e, vB),
        r = n5();
      return z.createElement(db, { id: t.id, type: "line" }, (e) =>
        z.createElement(
          z.Fragment,
          null,
          z.createElement(dd, {
            legendPayload: ((e) => {
              var { dataKey: t, name: r, stroke: n, legendType: i, hide: o } = e;
              return [{ inactive: o, dataKey: t, type: i, color: n, value: nU(r, t), payload: e }];
            })(t),
          }),
          z.createElement(vk, {
            dataKey: t.dataKey,
            data: t.data,
            stroke: t.stroke,
            strokeWidth: t.strokeWidth,
            fill: t.fill,
            name: t.name,
            hide: t.hide,
            unit: t.unit,
            tooltipType: t.tooltipType,
            id: e,
          }),
          z.createElement(dE, {
            type: "line",
            id: e,
            data: t.data,
            xAxisId: t.xAxisId,
            yAxisId: t.yAxisId,
            zAxisId: 0,
            dataKey: t.dataKey,
            hide: t.hide,
            isPanorama: r,
          }),
          z.createElement(vU, vj({}, t, { id: e }))
        )
      );
    }, vO);
    v$.displayName = "Line";
    var vK = (e, t) => {
        if (t && Array.isArray(e)) {
          var r = Number.parseInt(t, 10);
          if (!er(r)) return e[r];
        }
      },
      vW = rK({
        name: "options",
        initialState: {
          chartName: "",
          tooltipPayloadSearcher: () => void 0,
          eventEmitter: void 0,
          defaultTooltipEventType: "axis",
        },
        reducers: {
          createEventEmitter: (e) => {
            null == e.eventEmitter && (e.eventEmitter = Symbol("rechartsEventEmitter"));
          },
        },
      }),
      vq = vW.reducer,
      { createEventEmitter: vY } = vW.actions;
    e.s(
      [
        "arrayTooltipSearcher",
        () => vK,
        "createEventEmitter",
        () => vY,
        "optionsReducer",
        () => vq,
      ],
      42365
    );
    var vH = rK({
        name: "chartData",
        initialState: {
          chartData: void 0,
          computedData: void 0,
          dataStartIndex: 0,
          dataEndIndex: 0,
        },
        reducers: {
          setChartData(e, t) {
            if (((e.chartData = t.payload), null == t.payload)) {
              ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
              return;
            }
            t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1);
          },
          setComputedData(e, t) {
            e.computedData = t.payload;
          },
          setDataStartEndIndexes(e, t) {
            var { startIndex: r, endIndex: n } = t.payload;
            (null != r && (e.dataStartIndex = r), null != n && (e.dataEndIndex = n));
          },
        },
      }),
      { setChartData: vV, setDataStartEndIndexes: vX, setComputedData: vG } = vH.actions,
      vZ = vH.reducer;
    function vQ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vJ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vQ(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vQ(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var v0 = (e, t, r, n, i) => {
        var o = null != (f = null == t ? void 0 : t.length) ? f : 0;
        if (o <= 1 || null == e) return 0;
        if ("angleAxis" === n && null != i && 1e-6 >= Math.abs(Math.abs(i[1] - i[0]) - 360))
          for (var a = 0; a < o; a++) {
            var l =
                a > 0
                  ? null == (p = r[a - 1])
                    ? void 0
                    : p.coordinate
                  : null == (h = r[o - 1])
                    ? void 0
                    : h.coordinate,
              u = null == (d = r[a]) ? void 0 : d.coordinate,
              c =
                a >= o - 1
                  ? null == (y = r[0])
                    ? void 0
                    : y.coordinate
                  : null == (v = r[a + 1])
                    ? void 0
                    : v.coordinate,
              s = void 0;
            if (null != l && null != u && null != c)
              if (et(u - l) !== et(c - u)) {
                var f,
                  p,
                  h,
                  d,
                  y,
                  v,
                  g,
                  m = [];
                if (et(c - u) === et(i[1] - i[0])) {
                  s = c;
                  var b = u + i[1] - i[0];
                  ((m[0] = Math.min(b, (b + l) / 2)), (m[1] = Math.max(b, (b + l) / 2)));
                } else {
                  s = l;
                  var x = c + i[1] - i[0];
                  ((m[0] = Math.min(u, (x + u) / 2)), (m[1] = Math.max(u, (x + u) / 2)));
                }
                var w = [Math.min(u, (s + u) / 2), Math.max(u, (s + u) / 2)];
                if ((e > w[0] && e <= w[1]) || (e >= m[0] && e <= m[1]))
                  return null == (g = r[a]) ? void 0 : g.index;
              } else {
                var O,
                  S = Math.min(l, c),
                  P = Math.max(l, c);
                if (e > (S + u) / 2 && e <= (P + u) / 2)
                  return null == (O = r[a]) ? void 0 : O.index;
              }
          }
        else if (t)
          for (var A = 0; A < o; A++) {
            var j = t[A];
            if (null != j) {
              var E = t[A + 1],
                _ = t[A - 1];
              if (
                (0 === A && null != E && e <= (j.coordinate + E.coordinate) / 2) ||
                (A === o - 1 && null != _ && e > (j.coordinate + _.coordinate) / 2) ||
                (A > 0 &&
                  A < o - 1 &&
                  null != _ &&
                  null != E &&
                  e > (j.coordinate + _.coordinate) / 2 &&
                  e <= (j.coordinate + E.coordinate) / 2)
              )
                return j.index;
            }
          }
        return -1;
      },
      v1 = () => tt(s_),
      v2 = (e, t) => t,
      v5 = (e, t, r) => r,
      v3 = (e, t, r, n) => n,
      v6 = rb(hw, (e) => (0, nm.default)(e, (e) => e.coordinate)),
      v8 = rb([pV, v2, v5, v3], pK),
      v4 = rb([v8, p3, fp, hh], pW),
      v7 = (e, t, r) => {
        if (null != t) {
          var n = pV(e);
          return "axis" === t
            ? "hover" === r
              ? n.axisInteraction.hover.dataKey
              : n.axisInteraction.click.dataKey
            : "hover" === r
              ? n.itemInteraction.hover.dataKey
              : n.itemInteraction.click.dataKey;
        }
      },
      v9 = rb([pV, v2, v5, v3], pY),
      ge = rb([nK, nW, iO, nJ, hw, v3, v9], pq),
      gt = rb([v8, ge], (e, t) => {
        var r;
        return null != (r = e.coordinate) ? r : t;
      }),
      gr = rb([hw, v4], pA),
      gn = rb([v9, v4, sf, fp, gr, pH, v2], pZ),
      gi = rb([v8, v4], (e, t) => ({ isActive: e.active && null != t, activeIndex: t })),
      go = (e, t, r, n, i, o, a, l) => {
        if (e && t && n && i && o) {
          if ("horizontal" === t || "vertical" === t) {
            if (!e || !n || !i || !o) return;
            if (
              (function (e, t) {
                var { chartX: r, chartY: n } = e;
                return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
              })(e, l)
            ) {
              var u = v0(nF(e, t), a, o, n, i),
                c = ((e, t, r, n) => {
                  var i = t.find((e) => e && e.index === r);
                  if (i) {
                    if ("horizontal" === e) return { x: i.coordinate, y: n.chartY };
                    if ("vertical" === e) return { x: n.chartX, y: i.coordinate };
                  }
                  return { x: 0, y: 0 };
                })(t, o, u, e);
              return { activeIndex: String(u), activeCoordinate: c };
            }
            return;
          }
          if (e && n && i && o && r) {
            var s = e5(e, r);
            if (s) {
              var f = v0(n$(s, t), a, o, n, i),
                p = ((e, t, r, n) => {
                  var i = t.find((e) => e && e.index === r);
                  if (i) {
                    if ("centric" === e) {
                      var o = i.coordinate,
                        { radius: a } = n;
                      return vJ(vJ(vJ({}, n), e1(n.cx, n.cy, a, o)), {}, { angle: o, radius: a });
                    }
                    var l = i.coordinate,
                      { angle: u } = n;
                    return vJ(vJ(vJ({}, n), e1(n.cx, n.cy, l, u)), {}, { angle: u, radius: l });
                  }
                  return {
                    angle: 0,
                    clockWise: !1,
                    cx: 0,
                    cy: 0,
                    endAngle: 0,
                    innerRadius: 0,
                    outerRadius: 0,
                    radius: 0,
                    startAngle: 0,
                    x: 0,
                    y: 0,
                  };
                })(t, o, f, s);
              return { activeIndex: String(f), activeCoordinate: p };
            }
            return;
          }
        }
      };
    e.s(
      [
        "combineActiveProps",
        () => go,
        "selectActiveCoordinate",
        () => gt,
        "selectActiveLabel",
        () => gr,
        "selectCoordinateForDefaultIndex",
        () => ge,
        "selectIsTooltipActive",
        () => gi,
        "selectOrderedTooltipTicks",
        () => v6,
        "selectTooltipDataKey",
        () => v7,
        "selectTooltipPayload",
        () => gn,
        "useChartName",
        () => v1,
      ],
      72063
    );
    var ga = rb([(e, t) => t, iO, iq, sR, hg, hw, v6, nJ], go),
      gl = (e) => {
        var t = e.currentTarget.getBoundingClientRect(),
          r = t.width / e.currentTarget.offsetWidth,
          n = t.height / e.currentTarget.offsetHeight;
        return {
          chartX: Math.round((e.clientX - t.left) / r),
          chartY: Math.round((e.clientY - t.top) / n),
        };
      },
      gu = rC("mouseClick"),
      gc = ns();
    gc.startListening({
      actionCreator: gu,
      effect: (e, t) => {
        var r = e.payload,
          n = ga(t.getState(), gl(r));
        (null == n ? void 0 : n.activeIndex) != null &&
          t.dispatch(
            pz({
              activeIndex: n.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: n.activeCoordinate,
            })
          );
      },
    });
    var gs = rC("mouseMove"),
      gf = ns(),
      gp = null;
    function gh(e, t) {
      return t instanceof HTMLElement
        ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">')
        : t === window
          ? "global.window"
          : "children" === e && "object" == typeof t && null !== t
            ? "<<CHILDREN>>"
            : t;
    }
    gf.startListening({
      actionCreator: gs,
      effect: (e, t) => {
        var r = e.payload;
        null !== gp && cancelAnimationFrame(gp);
        var n = gl(r);
        gp = requestAnimationFrame(() => {
          var e = t.getState();
          if ("axis" === pS(e, e.tooltip.settings.shared)) {
            var r = ga(e, n);
            (null == r ? void 0 : r.activeIndex) != null
              ? t.dispatch(
                  pL({
                    activeIndex: r.activeIndex,
                    activeDataKey: void 0,
                    activeCoordinate: r.activeCoordinate,
                  })
                )
              : t.dispatch(pI());
          }
          gp = null;
        });
      },
    });
    var gd = rK({
        name: "referenceElements",
        initialState: { dots: [], areas: [], lines: [] },
        reducers: {
          addDot: (e, t) => {
            e.dots.push(t.payload);
          },
          removeDot: (e, t) => {
            var r = t8(e).dots.findIndex((e) => e === t.payload);
            -1 !== r && e.dots.splice(r, 1);
          },
          addArea: (e, t) => {
            e.areas.push(t.payload);
          },
          removeArea: (e, t) => {
            var r = t8(e).areas.findIndex((e) => e === t.payload);
            -1 !== r && e.areas.splice(r, 1);
          },
          addLine: (e, t) => {
            e.lines.push(t.payload);
          },
          removeLine: (e, t) => {
            var r = t8(e).lines.findIndex((e) => e === t.payload);
            -1 !== r && e.lines.splice(r, 1);
          },
        },
      }),
      {
        addDot: gy,
        removeDot: gv,
        addArea: gg,
        removeArea: gm,
        addLine: gb,
        removeLine: gx,
      } = gd.actions,
      gw = gd.reducer,
      gO = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
      gS = rK({
        name: "brush",
        initialState: gO,
        reducers: { setBrushSettings: (e, t) => (null == t.payload ? gO : t.payload) },
      }),
      { setBrushSettings: gP } = gS.actions,
      gA = gS.reducer,
      gj = {
        accessibilityLayer: !0,
        barCategoryGap: "10%",
        barGap: 4,
        barSize: void 0,
        className: void 0,
        maxBarSize: void 0,
        stackOffset: "none",
        syncId: void 0,
        syncMethod: "index",
        baseValue: void 0,
        reverseStackOrder: !1,
      },
      gE = rK({
        name: "rootProps",
        initialState: gj,
        reducers: {
          updateOptions: (e, t) => {
            var r;
            ((e.accessibilityLayer = t.payload.accessibilityLayer),
              (e.barCategoryGap = t.payload.barCategoryGap),
              (e.barGap = null != (r = t.payload.barGap) ? r : gj.barGap),
              (e.barSize = t.payload.barSize),
              (e.maxBarSize = t.payload.maxBarSize),
              (e.stackOffset = t.payload.stackOffset),
              (e.syncId = t.payload.syncId),
              (e.syncMethod = t.payload.syncMethod),
              (e.className = t.payload.className),
              (e.baseValue = t.payload.baseValue),
              (e.reverseStackOrder = t.payload.reverseStackOrder));
          },
        },
      }),
      g_ = gE.reducer,
      { updateOptions: gM } = gE.actions,
      gk = rK({
        name: "polarAxis",
        initialState: { radiusAxis: {}, angleAxis: {} },
        reducers: {
          addRadiusAxis(e, t) {
            e.radiusAxis[t.payload.id] = t.payload;
          },
          removeRadiusAxis(e, t) {
            delete e.radiusAxis[t.payload.id];
          },
          addAngleAxis(e, t) {
            e.angleAxis[t.payload.id] = t.payload;
          },
          removeAngleAxis(e, t) {
            delete e.angleAxis[t.payload.id];
          },
        },
      }),
      {
        addRadiusAxis: gT,
        removeRadiusAxis: gC,
        addAngleAxis: gD,
        removeAngleAxis: gI,
      } = gk.actions,
      gN = gk.reducer,
      gL = rK({
        name: "polarOptions",
        initialState: null,
        reducers: { updatePolarOptions: (e, t) => t.payload },
      }),
      { updatePolarOptions: gz } = gL.actions,
      gR = gL.reducer;
    e.s(["polarOptionsReducer", () => gR, "updatePolarOptions", () => gz], 83742);
    var gB = rC("keyDown"),
      gU = rC("focus"),
      gF = ns();
    (gF.startListening({
      actionCreator: gB,
      effect: (e, t) => {
        var r = t.getState();
        if (!1 === r.rootProps.accessibilityLayer) return;
        var { keyboardInteraction: n } = r.tooltip,
          i = e.payload;
        if ("ArrowRight" === i || "ArrowLeft" === i || "Enter" === i) {
          var o = pW(n, p3(r), fp(r), hh(r)),
            a = null == o ? -1 : Number(o);
          if (Number.isFinite(a) && !(a < 0)) {
            var l = hw(r);
            if ("Enter" === i) {
              var u = ge(r, "axis", "hover", String(n.index));
              t.dispatch(pB({ active: !n.active, activeIndex: n.index, activeCoordinate: u }));
              return;
            }
            var c = a + ("ArrowRight" === i ? 1 : -1) * ("left-to-right" === pb(r) ? 1 : -1);
            if (null != l && !(c >= l.length) && !(c < 0)) {
              var s = ge(r, "axis", "hover", String(c));
              t.dispatch(pB({ active: !0, activeIndex: c.toString(), activeCoordinate: s }));
            }
          }
        }
      },
    }),
      gF.startListening({
        actionCreator: gU,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var { keyboardInteraction: n } = r.tooltip;
            if (!n.active && null == n.index) {
              var i = ge(r, "axis", "hover", String("0"));
              t.dispatch(pB({ active: !0, activeIndex: "0", activeCoordinate: i }));
            }
          }
        },
      }));
    var g$ = rC("externalEvent"),
      gK = ns(),
      gW = new Map();
    gK.startListening({
      actionCreator: g$,
      effect: (e, t) => {
        var { handler: r, reactEvent: n } = e.payload;
        if (null != r) {
          n.persist();
          var i = n.type,
            o = gW.get(i);
          void 0 !== o && cancelAnimationFrame(o);
          var a = requestAnimationFrame(() => {
            try {
              var e = t.getState(),
                o = {
                  activeCoordinate: hC(e),
                  activeDataKey: h_(e),
                  activeIndex: hj(e),
                  activeLabel: hE(e),
                  activeTooltipIndex: hj(e),
                  isTooltipActive: hD(e),
                };
              r(o, n);
            } finally {
              gW.delete(i);
            }
          });
          gW.set(i, a);
        }
      },
    });
    var gq = rb([pV], (e) => e.tooltipItemPayloads),
      gY = rb([gq, (e, t) => t, (e, t, r) => r], (e, t, r) => {
        if (null != t) {
          var n = e.find((e) => e.settings.graphicalItemId === r);
          if (null != n) {
            var { getPosition: i } = n;
            if (null != i) return i(t);
          }
        }
      }),
      gH = rC("touchMove"),
      gV = ns();
    gV.startListening({
      actionCreator: gH,
      effect: (e, t) => {
        var r = e.payload;
        if (null != r.touches && 0 !== r.touches.length) {
          var n = t.getState(),
            i = pS(n, n.tooltip.settings.shared);
          if ("axis" === i) {
            var o = r.touches[0];
            if (null == o) return;
            var a = ga(
              n,
              gl({ clientX: o.clientX, clientY: o.clientY, currentTarget: r.currentTarget })
            );
            (null == a ? void 0 : a.activeIndex) != null &&
              t.dispatch(
                pL({
                  activeIndex: a.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: a.activeCoordinate,
                })
              );
          } else if ("item" === i) {
            var l,
              u = r.touches[0];
            if (null == document.elementFromPoint || null == u) return;
            var c = document.elementFromPoint(u.clientX, u.clientY);
            if (!c || !c.getAttribute) return;
            var s = c.getAttribute(nX),
              f = null != (l = c.getAttribute(nG)) ? l : void 0,
              p = p1(n).find((e) => e.id === f);
            if (null == s || null == p || null == f) return;
            var { dataKey: h } = p,
              d = gY(n, s, f);
            t.dispatch(
              pC({
                activeDataKey: h,
                activeIndex: s,
                activeCoordinate: d,
                activeGraphicalItemId: f,
              })
            );
          }
        }
      },
    });
    var gX = rK({
        name: "errorBars",
        initialState: {},
        reducers: {
          addErrorBar: (e, t) => {
            var { itemId: r, errorBar: n } = t.payload;
            (e[r] || (e[r] = []), e[r].push(n));
          },
          replaceErrorBar: (e, t) => {
            var { itemId: r, prev: n, next: i } = t.payload;
            e[r] &&
              (e[r] = e[r].map((e) =>
                e.dataKey === n.dataKey && e.direction === n.direction ? i : e
              ));
          },
          removeErrorBar: (e, t) => {
            var { itemId: r, errorBar: n } = t.payload;
            e[r] &&
              (e[r] = e[r].filter((e) => e.dataKey !== n.dataKey || e.direction !== n.direction));
          },
        },
      }),
      { addErrorBar: gG, replaceErrorBar: gZ, removeErrorBar: gQ } = gX.actions,
      gJ = rj({
        brush: gA,
        cartesianAxis: hX,
        chartData: vZ,
        errorBars: gX.reducer,
        graphicalItems: dj,
        layout: ng,
        legend: dh,
        options: vq,
        polarAxis: gN,
        polarOptions: gR,
        referenceElements: gw,
        rootProps: g_,
        tooltip: pU,
        zIndex: oN,
      }),
      g0 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Chart";
        return (function (e) {
          let t,
            r,
            n,
            i = function (e) {
              let {
                  thunk: t = !0,
                  immutableCheck: r = !0,
                  serializableCheck: n = !0,
                  actionCreatorCheck: i = !0,
                } = e ?? {},
                o = new rD();
              return (t && ("boolean" == typeof t ? o.push(rk) : o.push(rM(t.extraArgument))), o);
            },
            {
              reducer: o,
              middleware: a,
              devTools: l = !0,
              duplicateMiddlewareCheck: u = !0,
              preloadedState: c,
              enhancers: s,
            } = e || {};
          if ("function" == typeof o) t = o;
          else if (rA(o)) t = rj(o);
          else throw Error(nf(1));
          r = "function" == typeof a ? a(i) : i();
          let f = rE;
          l && (f = rT({ trace: !1, ...("object" == typeof l && l) }));
          let p =
            ((n = (function (...e) {
              return (t) => (r, n) => {
                let i = t(r, n),
                  o = () => {
                    throw Error(rw(15));
                  },
                  a = { getState: i.getState, dispatch: (e, ...t) => o(e, ...t) };
                return ((o = rE(...e.map((e) => e(a)))(i.dispatch)), { ...i, dispatch: o });
              };
            })(...r)),
            function (e) {
              let { autoBatch: t = !0 } = e ?? {},
                r = new rD(n);
              return (t && r.push(rB("object" == typeof t ? t : void 0)), r);
            });
          return (function e(t, r, n) {
            if ("function" != typeof t) throw Error(rw(2));
            if (
              ("function" == typeof r && "function" == typeof n) ||
              ("function" == typeof n && "function" == typeof arguments[3])
            )
              throw Error(rw(0));
            if (("function" == typeof r && void 0 === n && ((n = r), (r = void 0)), void 0 !== n)) {
              if ("function" != typeof n) throw Error(rw(1));
              return n(e)(t, r);
            }
            let i = t,
              o = r,
              a = new Map(),
              l = a,
              u = 0,
              c = !1;
            function s() {
              l === a &&
                ((l = new Map()),
                a.forEach((e, t) => {
                  l.set(t, e);
                }));
            }
            function f() {
              if (c) throw Error(rw(3));
              return o;
            }
            function p(e) {
              if ("function" != typeof e) throw Error(rw(4));
              if (c) throw Error(rw(5));
              let t = !0;
              s();
              let r = u++;
              return (
                l.set(r, e),
                function () {
                  if (t) {
                    if (c) throw Error(rw(6));
                    ((t = !1), s(), l.delete(r), (a = null));
                  }
                }
              );
            }
            function h(e) {
              if (!rA(e)) throw Error(rw(7));
              if (void 0 === e.type) throw Error(rw(8));
              if ("string" != typeof e.type) throw Error(rw(17));
              if (c) throw Error(rw(9));
              try {
                ((c = !0), (o = i(o, e)));
              } finally {
                c = !1;
              }
              return (
                (a = l).forEach((e) => {
                  e();
                }),
                e
              );
            }
            return (
              h({ type: rP.INIT }),
              {
                dispatch: h,
                subscribe: p,
                getState: f,
                replaceReducer: function (e) {
                  if ("function" != typeof e) throw Error(rw(10));
                  ((i = e), h({ type: rP.REPLACE }));
                },
                [rO]: function () {
                  return {
                    subscribe(e) {
                      if ("object" != typeof e || null === e) throw Error(rw(11));
                      function t() {
                        e.next && e.next(f());
                      }
                      return (t(), { unsubscribe: p(t) });
                    },
                    [rO]() {
                      return this;
                    },
                  };
                },
              }
            );
          })(t, c, f(...("function" == typeof s ? s(p) : p())));
        })({
          reducer: gJ,
          preloadedState: e,
          middleware: (e) =>
            e({
              serializableCheck: !1,
              immutableCheck: !["commonjs", "es6", "production"].includes("es6"),
            }).concat([gc.middleware, gf.middleware, gF.middleware, gK.middleware, gV.middleware]),
          enhancers: (e) => {
            var t = e;
            return ("function" == typeof e && (t = e()), t.concat(rB({ type: "raf" })));
          },
          devTools: ev.devToolsEnabled && {
            serialize: { replacer: gh },
            name: "recharts-".concat(t),
          },
        });
      };
    function g1(e) {
      var { preloadedState: t, children: r, reduxStoreName: n } = e,
        i = n5(),
        o = (0, z.useRef)(null);
      return i
        ? r
        : (null == o.current && (o.current = g0(t, n)),
          z.createElement(vm, { context: e6, store: o.current }, r));
    }
    e.s(["RechartsStoreProvider", () => g1], 45389);
    var g2 = (e) => {
      var { chartData: t } = e,
        r = e4(),
        n = n5();
      return (
        (0, z.useEffect)(
          () =>
            n
              ? () => {}
              : (r(vV(t)),
                () => {
                  r(vV(void 0));
                }),
          [t, r, n]
        ),
        null
      );
    };
    e.s(["ChartDataContextProvider", () => g2], 83171);
    var g5 = (0, z.memo)(function (e) {
      var { layout: t, margin: r } = e,
        n = e4(),
        i = n5();
      return (
        (0, z.useEffect)(() => {
          i || (n(nd(t)), n(nh(r)));
        }, [n, i, t, r]),
        null
      );
    }, vO);
    function g3(e) {
      var t = e4();
      return (
        (0, z.useEffect)(() => {
          t(gM(e));
        }, [t, e]),
        null
      );
    }
    (e.s(["ReportMainChartProps", () => g5], 12596), e.s(["ReportChartProps", () => g3], 91670));
    var g6 = () => {
      var e;
      return null == (e = tt((e) => e.rootProps.accessibilityLayer)) || e;
    };
    e.s(["useAccessibilityLayer", () => g6], 63955);
    var g8 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
    function g4() {
      return (g4 = Object.assign.bind()).apply(null, arguments);
    }
    var g7 = (0, z.forwardRef)((e, t) => {
      var {
          children: r,
          width: n,
          height: i,
          viewBox: o,
          className: a,
          style: l,
          title: u,
          desc: c,
        } = e,
        s = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
          }
          return i;
        })(e, g8),
        f = o || { width: n, height: i, x: 0, y: 0 },
        p = (0, R.clsx)("recharts-surface", a);
      return z.createElement(
        "svg",
        g4({}, Y(s), {
          className: p,
          width: n,
          height: i,
          style: l,
          viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
          ref: t,
        }),
        z.createElement("title", null, u),
        z.createElement("desc", null, c),
        r
      );
    });
    function g9(e) {
      var { zIndex: t, isPanorama: r } = e,
        n = (0, z.useRef)(null),
        i = e4();
      return (
        (0, z.useLayoutEffect)(
          () => (
            n.current && i(oD({ zIndex: t, element: n.current, isPanorama: r })),
            () => {
              i(oI({ zIndex: t, isPanorama: r }));
            }
          ),
          [i, t, r]
        ),
        z.createElement("g", { tabIndex: -1, ref: n })
      );
    }
    function me(e) {
      var { children: t, isPanorama: r } = e,
        n = tt(iX);
      if (!n || 0 === n.length) return t;
      var i = n.filter((e) => e < 0),
        o = n.filter((e) => e > 0);
      return z.createElement(
        z.Fragment,
        null,
        i.map((e) => z.createElement(g9, { key: e, zIndex: e, isPanorama: r })),
        t,
        o.map((e) => z.createElement(g9, { key: e, zIndex: e, isPanorama: r }))
      );
    }
    var mt = ["children"];
    function mr() {
      return (mr = Object.assign.bind()).apply(null, arguments);
    }
    var mn = { width: "100%", height: "100%", display: "block" },
      mi = (0, z.forwardRef)((e, t) => {
        var r,
          n,
          i = ix(),
          o = iw(),
          a = g6();
        if (!ez(i) || !ez(o)) return null;
        var { children: l, otherAttributes: u, title: c, desc: s } = e;
        return (
          null != u &&
            ((r = "number" == typeof u.tabIndex ? u.tabIndex : a ? 0 : void 0),
            (n = "string" == typeof u.role ? u.role : a ? "application" : void 0)),
          z.createElement(
            g7,
            mr({}, u, {
              title: c,
              desc: s,
              role: n,
              tabIndex: r,
              width: i,
              height: o,
              style: mn,
              ref: t,
            }),
            l
          )
        );
      }),
      mo = (e) => {
        var { children: t } = e,
          r = tt(n6);
        if (!r) return null;
        var { width: n, height: i, y: o, x: a } = r;
        return z.createElement(g7, { width: n, height: i, x: a, y: o }, t);
      },
      ma = (0, z.forwardRef)((e, t) => {
        var { children: r } = e,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                ((r = o[n]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
          })(e, mt);
        return n5()
          ? z.createElement(mo, null, z.createElement(me, { isPanorama: !0 }, r))
          : z.createElement(mi, mr({ ref: t }, n), z.createElement(me, { isPanorama: !1 }, r));
      }),
      ml = new (e.i(51675).default)(),
      mu = "recharts.syncEvent.tooltip",
      mc = "recharts.syncEvent.brush";
    function ms(e) {
      return e.tooltip.syncInteraction;
    }
    var mf = ["x", "y"];
    function mp(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mh(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mp(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mp(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function md() {
      var e,
        t,
        r,
        n,
        i,
        o,
        a,
        l,
        u,
        c,
        s,
        f = e4();
      ((0, z.useEffect)(() => {
        f(vY());
      }, [f]),
        (e = tt(sM)),
        (t = tt(sT)),
        (r = e4()),
        (n = tt(sk)),
        (i = tt(hw)),
        (o = iS()),
        (a = ig()),
        (l = tt((e) => e.rootProps.className)),
        (0, z.useEffect)(() => {
          if (null == e) return ey;
          var l = (l, u, c) => {
            if (t !== c && e === l) {
              if ("index" === n) {
                if (
                  a &&
                  null != u &&
                  null != (s = u.payload) &&
                  s.coordinate &&
                  u.payload.sourceViewBox
                ) {
                  var s,
                    f,
                    p = u.payload.coordinate,
                    { x: h, y: d } = p,
                    y = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        i = (function (e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (-1 !== t.indexOf(n)) continue;
                              r[n] = e[n];
                            }
                          return r;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                          ((r = o[n]),
                            -1 === t.indexOf(r) &&
                              {}.propertyIsEnumerable.call(e, r) &&
                              (i[r] = e[r]));
                      }
                      return i;
                    })(p, mf),
                    { x: v, y: g, width: m, height: b } = u.payload.sourceViewBox,
                    x = mh(
                      mh({}, y),
                      {},
                      {
                        x: a.x + (m ? (h - v) / m : 0) * a.width,
                        y: a.y + (b ? (d - g) / b : 0) * a.height,
                      }
                    );
                  r(mh(mh({}, u), {}, { payload: mh(mh({}, u.payload), {}, { coordinate: x }) }));
                } else r(u);
                return;
              }
              if (null != i) {
                if ("function" == typeof n) {
                  var w = n(i, {
                    activeTooltipIndex: null == u.payload.index ? void 0 : Number(u.payload.index),
                    isTooltipActive: u.payload.active,
                    activeIndex: null == u.payload.index ? void 0 : Number(u.payload.index),
                    activeLabel: u.payload.label,
                    activeDataKey: u.payload.dataKey,
                    activeCoordinate: u.payload.coordinate,
                  });
                  f = i[w];
                } else "value" === n && (f = i.find((e) => String(e.value) === u.payload.label));
                var { coordinate: O } = u.payload;
                if (null == f || !1 === u.payload.active || null == O || null == a)
                  return void r(
                    pR({
                      active: !1,
                      coordinate: void 0,
                      dataKey: void 0,
                      index: null,
                      label: void 0,
                      sourceViewBox: void 0,
                      graphicalItemId: void 0,
                    })
                  );
                var { x: S, y: P } = O,
                  A = Math.min(S, a.x + a.width),
                  j = Math.min(P, a.y + a.height),
                  E = {
                    x: "horizontal" === o ? f.coordinate : A,
                    y: "horizontal" === o ? j : f.coordinate,
                  };
                r(
                  pR({
                    active: u.payload.active,
                    coordinate: E,
                    dataKey: u.payload.dataKey,
                    index: String(f.index),
                    label: u.payload.label,
                    sourceViewBox: u.payload.sourceViewBox,
                    graphicalItemId: u.payload.graphicalItemId,
                  })
                );
              }
            }
          };
          return (
            ml.on(mu, l),
            () => {
              ml.off(mu, l);
            }
          );
        }, [l, r, t, e, n, i, o, a]),
        (u = tt(sM)),
        (c = tt(sT)),
        (s = e4()),
        (0, z.useEffect)(() => {
          if (null == u) return ey;
          var e = (e, t, r) => {
            c !== r && u === e && s(vX(t));
          };
          return (
            ml.on(mc, e),
            () => {
              ml.off(mc, e);
            }
          );
        }, [s, c, u]));
    }
    function my(e, t, r, n, i, o) {
      var a = tt((r) => v7(r, e, t)),
        l = tt(sT),
        u = tt(sM),
        c = tt(sk),
        s = tt(ms),
        f = null == s ? void 0 : s.active,
        p = ig();
      (0, z.useEffect)(() => {
        if (!f && null != u && null != l) {
          var e = pR({
            active: o,
            coordinate: r,
            dataKey: a,
            index: i,
            label: "number" == typeof n ? String(n) : n,
            sourceViewBox: p,
            graphicalItemId: void 0,
          });
          ml.emit(mu, u, e, l);
        }
      }, [f, r, a, i, n, l, u, c, o, p]);
    }
    e.s(
      [
        "useSynchronisedEventsFromOtherCharts",
        () => md,
        "useTooltipChartSynchronisation",
        () => my,
      ],
      65799
    );
    var mv = (0, z.createContext)(null),
      mg = () => (0, z.useContext)(mv);
    e.s(["TooltipPortalContext", () => mv, "useTooltipPortal", () => mg], 25297);
    var mm = (0, z.createContext)(null);
    function mb(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mx() {
      return (mx = Object.assign.bind()).apply(null, arguments);
    }
    var mw = () => (md(), null);
    function mO(e) {
      if ("number" == typeof e) return e;
      if ("string" == typeof e) {
        var t = parseFloat(e);
        if (!Number.isNaN(t)) return t;
      }
      return 0;
    }
    var mS = (0, z.forwardRef)((e, t) => {
        var r,
          n,
          i = (0, z.useRef)(null),
          [o, a] = (0, z.useState)({
            containerWidth: mO(null == (r = e.style) ? void 0 : r.width),
            containerHeight: mO(null == (n = e.style) ? void 0 : n.height),
          }),
          l = (0, z.useCallback)((e, t) => {
            a((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          u = (0, z.useCallback)(
            (e) => {
              if (("function" == typeof t && t(e), null != e && "u" > typeof ResizeObserver)) {
                var { width: r, height: n } = e.getBoundingClientRect();
                l(r, n);
                var o = new ResizeObserver((e) => {
                  var t = e[0];
                  if (null != t) {
                    var { width: r, height: n } = t.contentRect;
                    l(r, n);
                  }
                });
                (o.observe(e), (i.current = o));
              }
            },
            [t, l]
          );
        return (
          (0, z.useEffect)(
            () => () => {
              var e = i.current;
              null != e && e.disconnect();
            },
            [l]
          ),
          z.createElement(
            z.Fragment,
            null,
            z.createElement(iE, { width: o.containerWidth, height: o.containerHeight }),
            z.createElement("div", mx({ ref: u }, e))
          )
        );
      }),
      mP = (0, z.forwardRef)((e, t) => {
        var { width: r, height: n } = e,
          [i, o] = (0, z.useState)({ containerWidth: mO(r), containerHeight: mO(n) }),
          a = (0, z.useCallback)((e, t) => {
            o((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          l = (0, z.useCallback)(
            (e) => {
              if (("function" == typeof t && t(e), null != e)) {
                var { width: r, height: n } = e.getBoundingClientRect();
                a(r, n);
              }
            },
            [t, a]
          );
        return z.createElement(
          z.Fragment,
          null,
          z.createElement(iE, { width: i.containerWidth, height: i.containerHeight }),
          z.createElement("div", mx({ ref: l }, e))
        );
      }),
      mA = (0, z.forwardRef)((e, t) => {
        var { width: r, height: n } = e;
        return z.createElement(
          z.Fragment,
          null,
          z.createElement(iE, { width: r, height: n }),
          z.createElement("div", mx({ ref: t }, e))
        );
      }),
      mj = (0, z.forwardRef)((e, t) => {
        var { width: r, height: n } = e;
        return "string" == typeof r || "string" == typeof n
          ? z.createElement(mP, mx({}, e, { ref: t }))
          : "number" == typeof r && "number" == typeof n
            ? z.createElement(mA, mx({}, e, { width: r, height: n, ref: t }))
            : z.createElement(
                z.Fragment,
                null,
                z.createElement(iE, { width: r, height: n }),
                z.createElement("div", mx({ ref: t }, e))
              );
      }),
      mE = (0, z.forwardRef)((e, t) => {
        var {
            children: r,
            className: n,
            height: i,
            onClick: o,
            onContextMenu: a,
            onDoubleClick: l,
            onMouseDown: u,
            onMouseEnter: c,
            onMouseLeave: s,
            onMouseMove: f,
            onMouseUp: p,
            onTouchEnd: h,
            onTouchMove: d,
            onTouchStart: y,
            style: v,
            width: g,
            responsive: m,
            dispatchTouchEvents: b = !0,
          } = e,
          x = (0, z.useRef)(null),
          w = e4(),
          [O, S] = (0, z.useState)(null),
          [P, A] = (0, z.useState)(null),
          j = (function () {
            var e = e4(),
              [t, r] = (0, z.useState)(null),
              n = tt(nq);
            return (
              (0, z.useEffect)(() => {
                if (null != t) {
                  var r = t.getBoundingClientRect().width / t.offsetWidth;
                  eL(r) && r !== n && e(nv(r));
                }
              }, [t, e, n]),
              r
            );
          })(),
          E = ih(),
          _ = (null == E ? void 0 : E.width) > 0 ? E.width : g,
          M = (null == E ? void 0 : E.height) > 0 ? E.height : i,
          k = (0, z.useCallback)(
            (e) => {
              (j(e), "function" == typeof t && t(e), S(e), A(e), null != e && (x.current = e));
            },
            [j, t, S, A]
          ),
          T = (0, z.useCallback)(
            (e) => {
              (w(gu(e)), w(g$({ handler: o, reactEvent: e })));
            },
            [w, o]
          ),
          C = (0, z.useCallback)(
            (e) => {
              (w(gs(e)), w(g$({ handler: c, reactEvent: e })));
            },
            [w, c]
          ),
          D = (0, z.useCallback)(
            (e) => {
              (w(pI()), w(g$({ handler: s, reactEvent: e })));
            },
            [w, s]
          ),
          I = (0, z.useCallback)(
            (e) => {
              (w(gs(e)), w(g$({ handler: f, reactEvent: e })));
            },
            [w, f]
          ),
          N = (0, z.useCallback)(() => {
            w(gU());
          }, [w]),
          L = (0, z.useCallback)(
            (e) => {
              w(gB(e.key));
            },
            [w]
          ),
          B = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: a, reactEvent: e }));
            },
            [w, a]
          ),
          U = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: l, reactEvent: e }));
            },
            [w, l]
          ),
          F = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: u, reactEvent: e }));
            },
            [w, u]
          ),
          $ = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: p, reactEvent: e }));
            },
            [w, p]
          ),
          K = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: y, reactEvent: e }));
            },
            [w, y]
          ),
          W = (0, z.useCallback)(
            (e) => {
              (b && w(gH(e)), w(g$({ handler: d, reactEvent: e })));
            },
            [w, b, d]
          ),
          q = (0, z.useCallback)(
            (e) => {
              w(g$({ handler: h, reactEvent: e }));
            },
            [w, h]
          );
        return z.createElement(
          mv.Provider,
          { value: O },
          z.createElement(
            mm.Provider,
            { value: P },
            z.createElement(
              m ? mS : mj,
              {
                width: null != _ ? _ : null == v ? void 0 : v.width,
                height: null != M ? M : null == v ? void 0 : v.height,
                className: (0, R.clsx)("recharts-wrapper", n),
                style: (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? mb(Object(r), !0).forEach(function (t) {
                          var n, i, o;
                          ((n = e),
                            (i = t),
                            (o = r[t]),
                            (i = (function (e) {
                              var t = (function (e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                  var n = r.call(e, t || "default");
                                  if ("object" != typeof n) return n;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === t ? String : Number)(e);
                              })(e, "string");
                              return "symbol" == typeof t ? t : t + "";
                            })(i)) in n
                              ? Object.defineProperty(n, i, {
                                  value: o,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (n[i] = o));
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : mb(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                  }
                  return e;
                })({ position: "relative", cursor: "default", width: _, height: M }, v),
                onClick: T,
                onContextMenu: B,
                onDoubleClick: U,
                onFocus: N,
                onKeyDown: L,
                onMouseDown: F,
                onMouseEnter: C,
                onMouseLeave: D,
                onMouseMove: I,
                onMouseUp: $,
                onTouchEnd: q,
                onTouchMove: W,
                onTouchStart: K,
                ref: k,
              },
              z.createElement(mw, null),
              r
            )
          )
        );
      }),
      m_ = (0, z.createContext)(void 0),
      mM = (e) => {
        var { children: t } = e,
          [r] = (0, z.useState)("".concat(el("recharts"), "-clip")),
          n = tt(hZ);
        if (null == n) return null;
        var { x: i, y: o, width: a, height: l } = n;
        return z.createElement(
          m_.Provider,
          { value: r },
          z.createElement(
            "defs",
            null,
            z.createElement(
              "clipPath",
              { id: r },
              z.createElement("rect", { x: i, y: o, height: l, width: a })
            )
          ),
          t
        );
      },
      mk = [
        "width",
        "height",
        "responsive",
        "children",
        "className",
        "style",
        "compact",
        "title",
        "desc",
      ],
      mT = (0, z.forwardRef)((e, t) => {
        var {
            width: r,
            height: n,
            responsive: i,
            children: o,
            className: a,
            style: l,
            compact: u,
            title: c,
            desc: s,
          } = e,
          f = W(
            (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  ((r = o[n]),
                    -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, mk)
          );
        return u
          ? z.createElement(
              z.Fragment,
              null,
              z.createElement(iE, { width: r, height: n }),
              z.createElement(ma, { otherAttributes: f, title: c, desc: s }, o)
            )
          : z.createElement(
              mE,
              {
                className: a,
                style: l,
                width: r,
                height: n,
                responsive: null != i && i,
                onClick: e.onClick,
                onMouseLeave: e.onMouseLeave,
                onMouseEnter: e.onMouseEnter,
                onMouseMove: e.onMouseMove,
                onMouseDown: e.onMouseDown,
                onMouseUp: e.onMouseUp,
                onContextMenu: e.onContextMenu,
                onDoubleClick: e.onDoubleClick,
                onTouchStart: e.onTouchStart,
                onTouchMove: e.onTouchMove,
                onTouchEnd: e.onTouchEnd,
              },
              z.createElement(
                ma,
                { otherAttributes: f, title: c, desc: s, ref: t },
                z.createElement(mM, null, o)
              )
            );
      });
    function mC() {
      return (mC = Object.assign.bind()).apply(null, arguments);
    }
    e.s(["CategoricalChart", () => mT], 76082);
    var mD = {
        accessibilityLayer: !0,
        barCategoryGap: "10%",
        barGap: 4,
        layout: "horizontal",
        margin: { top: 5, right: 5, bottom: 5, left: 5 },
        responsive: !1,
        reverseStackOrder: !1,
        stackOffset: "none",
        syncMethod: "index",
      },
      mI = (0, z.forwardRef)(function (e, t) {
        var r,
          n = eN(e.categoricalChartProps, mD),
          {
            chartName: i,
            defaultTooltipEventType: o,
            validateTooltipEventTypes: a,
            tooltipPayloadSearcher: l,
            categoricalChartProps: u,
          } = e;
        return z.createElement(
          g1,
          {
            preloadedState: {
              options: {
                chartName: i,
                defaultTooltipEventType: o,
                validateTooltipEventTypes: a,
                tooltipPayloadSearcher: l,
                eventEmitter: void 0,
              },
            },
            reduxStoreName: null != (r = u.id) ? r : i,
          },
          z.createElement(g2, { chartData: u.data }),
          z.createElement(g5, { layout: n.layout, margin: n.margin }),
          z.createElement(g3, {
            baseValue: n.baseValue,
            accessibilityLayer: n.accessibilityLayer,
            barCategoryGap: n.barCategoryGap,
            maxBarSize: n.maxBarSize,
            stackOffset: n.stackOffset,
            barGap: n.barGap,
            barSize: n.barSize,
            syncId: n.syncId,
            syncMethod: n.syncMethod,
            className: n.className,
            reverseStackOrder: n.reverseStackOrder,
          }),
          z.createElement(mT, mC({}, n, { ref: t }))
        );
      }),
      mN = ["axis"],
      mL = (0, z.forwardRef)((e, t) =>
        z.createElement(mI, {
          chartName: "LineChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: mN,
          tooltipPayloadSearcher: vK,
          categoricalChartProps: e,
          ref: t,
        })
      );
    e.s(["LineChart", () => mL], 37016);
  },
  25001,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.uniqBy = function (e, t) {
        let r = new Map();
        for (let n = 0; n < e.length; n++) {
          let i = e[n],
            o = t(i, n, e);
          r.has(o) || r.set(o, i);
        }
        return Array.from(r.values());
      }));
  },
  92835,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.ary = function (e, t) {
        return function (...r) {
          return e.apply(this, r.slice(0, t));
        };
      }));
  },
  76260,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.identity = function (e) {
        return e;
      }));
  },
  16740,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isObjectLike = function (e) {
        return "object" == typeof e && null !== e;
      }));
  },
  24836,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(51242),
      i = e.r(16740);
    r.isArrayLikeObject = function (e) {
      return i.isObjectLike(e) && n.isArrayLike(e);
    };
  },
  36947,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(16818);
    r.property = function (e) {
      return function (t) {
        return n.get(t, e);
      };
    };
  },
  47988,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isPrimitive = function (e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }));
  },
  95193,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(10458),
      i = e.r(47988),
      o = e.r(89395);
    function a(e, t, r, c) {
      if (t === e) return !0;
      switch (typeof t) {
        case "object":
          return (function (e, t, r, n) {
            if (null == t) return !0;
            if (Array.isArray(t)) return l(e, t, r, n);
            if (t instanceof Map) {
              var o = e,
                a = t,
                c = r,
                s = n;
              if (0 === a.size) return !0;
              if (!(o instanceof Map)) return !1;
              for (let [e, t] of a.entries()) if (!1 === c(o.get(e), t, e, o, a, s)) return !1;
              return !0;
            }
            if (t instanceof Set) return u(e, t, r, n);
            let f = Object.keys(t);
            if (null == e || i.isPrimitive(e)) return 0 === f.length;
            if (0 === f.length) return !0;
            if (n?.has(t)) return n.get(t) === e;
            n?.set(t, e);
            try {
              for (let o = 0; o < f.length; o++) {
                let a = f[o];
                if (
                  (!i.isPrimitive(e) && !(a in e)) ||
                  (void 0 === t[a] && void 0 !== e[a]) ||
                  (null === t[a] && null !== e[a]) ||
                  !r(e[a], t[a], a, e, t, n)
                )
                  return !1;
              }
              return !0;
            } finally {
              n?.delete(t);
            }
          })(e, t, r, c);
        case "function":
          if (Object.keys(t).length > 0) return a(e, { ...t }, r, c);
          return o.isEqualsSameValueZero(e, t);
        default:
          if (!n.isObject(e)) return o.isEqualsSameValueZero(e, t);
          if ("string" == typeof t) return "" === t;
          return !0;
      }
    }
    function l(e, t, r, n) {
      if (0 === t.length) return !0;
      if (!Array.isArray(e)) return !1;
      let i = new Set();
      for (let o = 0; o < t.length; o++) {
        let a = t[o],
          l = !1;
        for (let u = 0; u < e.length; u++) {
          if (i.has(u)) continue;
          let c = e[u],
            s = !1;
          if ((r(c, a, o, e, t, n) && (s = !0), s)) {
            (i.add(u), (l = !0));
            break;
          }
        }
        if (!l) return !1;
      }
      return !0;
    }
    function u(e, t, r, n) {
      return 0 === t.size || (e instanceof Set && l([...e], [...t], r, n));
    }
    ((r.isMatchWith = function e(t, r, n) {
      return "function" != typeof n
        ? e(t, r, () => void 0)
        : a(
            t,
            r,
            function e(t, r, i, o, l, u) {
              let c = n(t, r, i, o, l, u);
              return void 0 !== c ? !!c : a(t, r, e, u);
            },
            new Map()
          );
    }),
      (r.isSetMatch = u));
  },
  79438,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(95193);
    r.isMatch = function (e, t) {
      return n.isMatchWith(e, t, () => void 0);
    };
  },
  17666,
  (e, t, r) => {
    var n = {
        675: function (e, t) {
          "use strict";
          ((t.byteLength = function (e) {
            var t = u(e),
              r = t[0],
              n = t[1];
            return ((r + n) * 3) / 4 - n;
          }),
            (t.toByteArray = function (e) {
              var t,
                r,
                o = u(e),
                a = o[0],
                l = o[1],
                c = new i(((a + l) * 3) / 4 - l),
                s = 0,
                f = l > 0 ? a - 4 : a;
              for (r = 0; r < f; r += 4)
                ((t =
                  (n[e.charCodeAt(r)] << 18) |
                  (n[e.charCodeAt(r + 1)] << 12) |
                  (n[e.charCodeAt(r + 2)] << 6) |
                  n[e.charCodeAt(r + 3)]),
                  (c[s++] = (t >> 16) & 255),
                  (c[s++] = (t >> 8) & 255),
                  (c[s++] = 255 & t));
              return (
                2 === l &&
                  ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
                  (c[s++] = 255 & t)),
                1 === l &&
                  ((t =
                    (n[e.charCodeAt(r)] << 10) |
                    (n[e.charCodeAt(r + 1)] << 4) |
                    (n[e.charCodeAt(r + 2)] >> 2)),
                  (c[s++] = (t >> 8) & 255),
                  (c[s++] = 255 & t)),
                c
              );
            }),
            (t.fromByteArray = function (e) {
              for (var t, n = e.length, i = n % 3, o = [], a = 0, l = n - i; a < l; a += 16383)
                o.push(
                  (function (e, t, n) {
                    for (var i, o = [], a = t; a < n; a += 3)
                      ((i =
                        ((e[a] << 16) & 0xff0000) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                        o.push(
                          r[(i >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]
                        ));
                    return o.join("");
                  })(e, a, a + 16383 > l ? l : a + 16383)
                );
              return (
                1 === i
                  ? o.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                  : 2 === i &&
                    o.push(
                      r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                        r[(t >> 4) & 63] +
                        r[(t << 2) & 63] +
                        "="
                    ),
                o.join("")
              );
            }));
          for (
            var r = [],
              n = [],
              i = "u" > typeof Uint8Array ? Uint8Array : Array,
              o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              a = 0,
              l = o.length;
            a < l;
            ++a
          )
            ((r[a] = o[a]), (n[o.charCodeAt(a)] = a));
          function u(e) {
            var t = e.length;
            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            -1 === r && (r = t);
            var n = r === t ? 0 : 4 - (r % 4);
            return [r, n];
          }
          ((n[45] = 62), (n[95] = 63));
        },
        72: function (e, t, r) {
          "use strict";
          var n = r(675),
            i = r(783),
            o =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          function a(e) {
            if (e > 0x7fffffff)
              throw RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return (Object.setPrototypeOf(t, l.prototype), t);
          }
          function l(e, t, r) {
            if ("number" == typeof e) {
              if ("string" == typeof t)
                throw TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return s(e);
            }
            return u(e, t, r);
          }
          function u(e, t, r) {
            if ("string" == typeof e) {
              var n = e,
                i = t;
              if ((("string" != typeof i || "" === i) && (i = "utf8"), !l.isEncoding(i)))
                throw TypeError("Unknown encoding: " + i);
              var o = 0 | h(n, i),
                u = a(o),
                c = u.write(n, i);
              return (c !== o && (u = u.slice(0, c)), u);
            }
            if (ArrayBuffer.isView(e)) return f(e);
            if (null == e)
              throw TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof e
              );
            if (
              M(e, ArrayBuffer) ||
              (e && M(e.buffer, ArrayBuffer)) ||
              ("u" > typeof SharedArrayBuffer &&
                (M(e, SharedArrayBuffer) || (e && M(e.buffer, SharedArrayBuffer))))
            )
              return (function (e, t, r) {
                var n;
                if (t < 0 || e.byteLength < t)
                  throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0))
                  throw RangeError('"length" is outside of buffer bounds');
                return (
                  Object.setPrototypeOf(
                    (n =
                      void 0 === t && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                          ? new Uint8Array(e, t)
                          : new Uint8Array(e, t, r)),
                    l.prototype
                  ),
                  n
                );
              })(e, t, r);
            if ("number" == typeof e)
              throw TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            var s = e.valueOf && e.valueOf();
            if (null != s && s !== e) return l.from(s, t, r);
            var d = (function (e) {
              if (l.isBuffer(e)) {
                var t = 0 | p(e.length),
                  r = a(t);
                return (0 === r.length || e.copy(r, 0, 0, t), r);
              }
              return void 0 !== e.length
                ? "number" != typeof e.length ||
                  (function (e) {
                    return e != e;
                  })(e.length)
                  ? a(0)
                  : f(e)
                : "Buffer" === e.type && Array.isArray(e.data)
                  ? f(e.data)
                  : void 0;
            })(e);
            if (d) return d;
            if (
              "u" > typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof e[Symbol.toPrimitive]
            )
              return l.from(e[Symbol.toPrimitive]("string"), t, r);
            throw TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e
            );
          }
          function c(e) {
            if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
            if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
          }
          function s(e) {
            return (c(e), a(e < 0 ? 0 : 0 | p(e)));
          }
          function f(e) {
            for (var t = e.length < 0 ? 0 : 0 | p(e.length), r = a(t), n = 0; n < t; n += 1)
              r[n] = 255 & e[n];
            return r;
          }
          ((t.Buffer = l),
            (t.SlowBuffer = function (e) {
              return (+e != e && (e = 0), l.alloc(+e));
            }),
            (t.INSPECT_MAX_BYTES = 50),
            (t.kMaxLength = 0x7fffffff),
            (l.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var e = new Uint8Array(1),
                  t = {
                    foo: function () {
                      return 42;
                    },
                  };
                return (
                  Object.setPrototypeOf(t, Uint8Array.prototype),
                  Object.setPrototypeOf(e, t),
                  42 === e.foo()
                );
              } catch (e) {
                return !1;
              }
            })()),
            !l.TYPED_ARRAY_SUPPORT &&
              "u" > typeof console &&
              "function" == typeof console.error &&
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(l.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (l.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(l.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (l.isBuffer(this)) return this.byteOffset;
              },
            }),
            (l.poolSize = 8192),
            (l.from = function (e, t, r) {
              return u(e, t, r);
            }),
            Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(l, Uint8Array),
            (l.alloc = function (e, t, r) {
              return (c(e), e <= 0)
                ? a(e)
                : void 0 !== t
                  ? "string" == typeof r
                    ? a(e).fill(t, r)
                    : a(e).fill(t)
                  : a(e);
            }),
            (l.allocUnsafe = function (e) {
              return s(e);
            }),
            (l.allocUnsafeSlow = function (e) {
              return s(e);
            }));
          function p(e) {
            if (e >= 0x7fffffff)
              throw RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
              );
            return 0 | e;
          }
          function h(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e)
              throw TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof e
              );
            var r = e.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var i = !1; ; )
              switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return A(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return E(e).length;
                default:
                  if (i) return n ? -1 : A(e).length;
                  ((t = ("" + t).toLowerCase()), (i = !0));
              }
          }
          function d(e, t, r) {
            var i,
              o,
              a,
              l = !1;
            if (
              ((void 0 === t || t < 0) && (t = 0),
              t > this.length ||
                ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0 || (r >>>= 0) <= (t >>>= 0)))
            )
              return "";
            for (e || (e = "utf8"); ; )
              switch (e) {
                case "hex":
                  return (function (e, t, r) {
                    var n = e.length;
                    ((!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n));
                    for (var i = "", o = t; o < r; ++o) i += k[e[o]];
                    return i;
                  })(this, t, r);
                case "utf8":
                case "utf-8":
                  return m(this, t, r);
                case "ascii":
                  return (function (e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                    return n;
                  })(this, t, r);
                case "latin1":
                case "binary":
                  return (function (e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                    return n;
                  })(this, t, r);
                case "base64":
                  return (
                    (i = this),
                    (o = t),
                    (a = r),
                    0 === o && a === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, a))
                  );
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (function (e, t, r) {
                    for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
                      i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                    return i;
                  })(this, t, r);
                default:
                  if (l) throw TypeError("Unknown encoding: " + e);
                  ((e = (e + "").toLowerCase()), (l = !0));
              }
          }
          function y(e, t, r) {
            var n = e[t];
            ((e[t] = e[r]), (e[r] = n));
          }
          function v(e, t, r, n, i) {
            var o;
            if (0 === e.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 0x7fffffff
                  ? (r = 0x7fffffff)
                  : r < -0x80000000 && (r = -0x80000000),
              (o = r *= 1) != o && (r = i ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length)
            )
              if (i) return -1;
              else r = e.length - 1;
            else if (r < 0)
              if (!i) return -1;
              else r = 0;
            if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
              return 0 === t.length ? -1 : g(e, t, r, n, i);
            if ("number" == typeof t) {
              if (((t &= 255), "function" == typeof Uint8Array.prototype.indexOf))
                if (i) return Uint8Array.prototype.indexOf.call(e, t, r);
                else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
              return g(e, [t], r, n, i);
            }
            throw TypeError("val must be string, number or Buffer");
          }
          function g(e, t, r, n, i) {
            var o,
              a = 1,
              l = e.length,
              u = t.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              ((a = 2), (l /= 2), (u /= 2), (r /= 2));
            }
            function c(e, t) {
              return 1 === a ? e[t] : e.readUInt16BE(t * a);
            }
            if (i) {
              var s = -1;
              for (o = r; o < l; o++)
                if (c(e, o) === c(t, -1 === s ? 0 : o - s)) {
                  if ((-1 === s && (s = o), o - s + 1 === u)) return s * a;
                } else (-1 !== s && (o -= o - s), (s = -1));
            } else
              for (r + u > l && (r = l - u), o = r; o >= 0; o--) {
                for (var f = !0, p = 0; p < u; p++)
                  if (c(e, o + p) !== c(t, p)) {
                    f = !1;
                    break;
                  }
                if (f) return o;
              }
            return -1;
          }
          ((l.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== l.prototype;
          }),
            (l.compare = function (e, t) {
              if (
                (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
                M(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
                !l.isBuffer(e) || !l.isBuffer(t))
              )
                throw TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (e === t) return 0;
              for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                if (e[i] !== t[i]) {
                  ((r = e[i]), (n = t[i]));
                  break;
                }
              return r < n ? -1 : +(n < r);
            }),
            (l.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (l.concat = function (e, t) {
              if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
              if (0 === e.length) return l.alloc(0);
              if (void 0 === t) for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
              var r,
                n = l.allocUnsafe(t),
                i = 0;
              for (r = 0; r < e.length; ++r) {
                var o = e[r];
                if ((M(o, Uint8Array) && (o = l.from(o)), !l.isBuffer(o)))
                  throw TypeError('"list" argument must be an Array of Buffers');
                (o.copy(n, i), (i += o.length));
              }
              return n;
            }),
            (l.byteLength = h),
            (l.prototype._isBuffer = !0),
            (l.prototype.swap16 = function () {
              var e = this.length;
              if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
              for (var t = 0; t < e; t += 2) y(this, t, t + 1);
              return this;
            }),
            (l.prototype.swap32 = function () {
              var e = this.length;
              if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
              for (var t = 0; t < e; t += 4) (y(this, t, t + 3), y(this, t + 1, t + 2));
              return this;
            }),
            (l.prototype.swap64 = function () {
              var e = this.length;
              if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
              for (var t = 0; t < e; t += 8)
                (y(this, t, t + 7),
                  y(this, t + 1, t + 6),
                  y(this, t + 2, t + 5),
                  y(this, t + 3, t + 4));
              return this;
            }),
            (l.prototype.toString = function () {
              var e = this.length;
              return 0 === e
                ? ""
                : 0 == arguments.length
                  ? m(this, 0, e)
                  : d.apply(this, arguments);
            }),
            (l.prototype.toLocaleString = l.prototype.toString),
            (l.prototype.equals = function (e) {
              if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
              return this === e || 0 === l.compare(this, e);
            }),
            (l.prototype.inspect = function () {
              var e = "",
                r = t.INSPECT_MAX_BYTES;
              return (
                (e = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (e += " ... "),
                "<Buffer " + e + ">"
              );
            }),
            o && (l.prototype[o] = l.prototype.inspect),
            (l.prototype.compare = function (e, t, r, n, i) {
              if ((M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)))
                throw TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof e
                );
              if (
                (void 0 === t && (t = 0),
                void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                t < 0 || r > e.length || n < 0 || i > this.length)
              )
                throw RangeError("out of range index");
              if (n >= i && t >= r) return 0;
              if (n >= i) return -1;
              if (t >= r) return 1;
              if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
              for (
                var o = i - n,
                  a = r - t,
                  u = Math.min(o, a),
                  c = this.slice(n, i),
                  s = e.slice(t, r),
                  f = 0;
                f < u;
                ++f
              )
                if (c[f] !== s[f]) {
                  ((o = c[f]), (a = s[f]));
                  break;
                }
              return o < a ? -1 : +(a < o);
            }),
            (l.prototype.includes = function (e, t, r) {
              return -1 !== this.indexOf(e, t, r);
            }),
            (l.prototype.indexOf = function (e, t, r) {
              return v(this, e, t, r, !0);
            }),
            (l.prototype.lastIndexOf = function (e, t, r) {
              return v(this, e, t, r, !1);
            }));
          function m(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
              var o,
                a,
                l,
                u,
                c = e[i],
                s = null,
                f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
              if (i + f <= r)
                switch (f) {
                  case 1:
                    c < 128 && (s = c);
                    break;
                  case 2:
                    (192 & (o = e[i + 1])) == 128 &&
                      (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                      (s = u);
                    break;
                  case 3:
                    ((o = e[i + 1]),
                      (a = e[i + 2]),
                      (192 & o) == 128 &&
                        (192 & a) == 128 &&
                        (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 &&
                        (u < 55296 || u > 57343) &&
                        (s = u));
                    break;
                  case 4:
                    ((o = e[i + 1]),
                      (a = e[i + 2]),
                      (l = e[i + 3]),
                      (192 & o) == 128 &&
                        (192 & a) == 128 &&
                        (192 & l) == 128 &&
                        (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & l)) >
                          65535 &&
                        u < 1114112 &&
                        (s = u));
                }
              (null === s
                ? ((s = 65533), (f = 1))
                : s > 65535 &&
                  ((s -= 65536), n.push(((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))),
                n.push(s),
                (i += f));
            }
            var p = n,
              h = p.length;
            if (h <= 4096) return String.fromCharCode.apply(String, p);
            for (var d = "", y = 0; y < h; )
              d += String.fromCharCode.apply(String, p.slice(y, (y += 4096)));
            return d;
          }
          function b(e, t, r) {
            if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
            if (e + t > r) throw RangeError("Trying to access beyond buffer length");
          }
          function x(e, t, r, n, i, o) {
            if (!l.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw RangeError("Index out of range");
          }
          function w(e, t, r, n, i, o) {
            if (r + n > e.length || r < 0) throw RangeError("Index out of range");
          }
          function O(e, t, r, n, o) {
            return (
              (t *= 1),
              (r >>>= 0),
              o || w(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
              i.write(e, t, r, n, 23, 4),
              r + 4
            );
          }
          function S(e, t, r, n, o) {
            return (
              (t *= 1),
              (r >>>= 0),
              o || w(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
              i.write(e, t, r, n, 52, 8),
              r + 8
            );
          }
          ((l.prototype.write = function (e, t, r, n) {
            if (void 0 === t) ((n = "utf8"), (r = this.length), (t = 0));
            else if (void 0 === r && "string" == typeof t) ((n = t), (r = this.length), (t = 0));
            else if (isFinite(t))
              ((t >>>= 0),
                isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0)));
            else
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            var i,
              o,
              a,
              l,
              u,
              c,
              s,
              f,
              p = this.length - t;
            if (
              ((void 0 === r || r > p) && (r = p),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var h = !1; ; )
              switch (n) {
                case "hex":
                  return (function (e, t, r, n) {
                    r = Number(r) || 0;
                    var i = e.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    var o = t.length;
                    n > o / 2 && (n = o / 2);
                    for (var a = 0; a < n; ++a) {
                      var l,
                        u = parseInt(t.substr(2 * a, 2), 16);
                      if ((l = u) != l) break;
                      e[r + a] = u;
                    }
                    return a;
                  })(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return ((i = t), (o = r), _(A(e, this.length - i), this, i, o));
                case "ascii":
                  return ((a = t), (l = r), _(j(e), this, a, l));
                case "latin1":
                case "binary":
                  return (function (e, t, r, n) {
                    return _(j(t), e, r, n);
                  })(this, e, t, r);
                case "base64":
                  return ((u = t), (c = r), _(E(e), this, u, c));
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (
                    (s = t),
                    (f = r),
                    _(
                      (function (e, t) {
                        for (var r, n, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                          ((n = (r = e.charCodeAt(o)) >> 8), i.push(r % 256), i.push(n));
                        return i;
                      })(e, this.length - s),
                      this,
                      s,
                      f
                    )
                  );
                default:
                  if (h) throw TypeError("Unknown encoding: " + n);
                  ((n = ("" + n).toLowerCase()), (h = !0));
              }
          }),
            (l.prototype.toJSON = function () {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            }),
            (l.prototype.slice = function (e, t) {
              var r = this.length;
              ((e = ~~e),
                (t = void 0 === t ? r : ~~t),
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                t < e && (t = e));
              var n = this.subarray(e, t);
              return (Object.setPrototypeOf(n, l.prototype), n);
            }),
            (l.prototype.readUIntLE = function (e, t, r) {
              ((e >>>= 0), (t >>>= 0), r || b(e, t, this.length));
              for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
              return n;
            }),
            (l.prototype.readUIntBE = function (e, t, r) {
              ((e >>>= 0), (t >>>= 0), r || b(e, t, this.length));
              for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); ) n += this[e + --t] * i;
              return n;
            }),
            (l.prototype.readUInt8 = function (e, t) {
              return ((e >>>= 0), t || b(e, 1, this.length), this[e]);
            }),
            (l.prototype.readUInt16LE = function (e, t) {
              return ((e >>>= 0), t || b(e, 2, this.length), this[e] | (this[e + 1] << 8));
            }),
            (l.prototype.readUInt16BE = function (e, t) {
              return ((e >>>= 0), t || b(e, 2, this.length), (this[e] << 8) | this[e + 1]);
            }),
            (l.prototype.readUInt32LE = function (e, t) {
              return (
                (e >>>= 0),
                t || b(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 0x1000000 * this[e + 3]
              );
            }),
            (l.prototype.readUInt32BE = function (e, t) {
              return (
                (e >>>= 0),
                t || b(e, 4, this.length),
                0x1000000 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
            (l.prototype.readIntLE = function (e, t, r) {
              ((e >>>= 0), (t >>>= 0), r || b(e, t, this.length));
              for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
              return (n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n);
            }),
            (l.prototype.readIntBE = function (e, t, r) {
              ((e >>>= 0), (t >>>= 0), r || b(e, t, this.length));
              for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
                o += this[e + --n] * i;
              return (o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o);
            }),
            (l.prototype.readInt8 = function (e, t) {
              return ((e >>>= 0), t || b(e, 1, this.length), 128 & this[e])
                ? -((255 - this[e] + 1) * 1)
                : this[e];
            }),
            (l.prototype.readInt16LE = function (e, t) {
              ((e >>>= 0), t || b(e, 2, this.length));
              var r = this[e] | (this[e + 1] << 8);
              return 32768 & r ? 0xffff0000 | r : r;
            }),
            (l.prototype.readInt16BE = function (e, t) {
              ((e >>>= 0), t || b(e, 2, this.length));
              var r = this[e + 1] | (this[e] << 8);
              return 32768 & r ? 0xffff0000 | r : r;
            }),
            (l.prototype.readInt32LE = function (e, t) {
              return (
                (e >>>= 0),
                t || b(e, 4, this.length),
                this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
              );
            }),
            (l.prototype.readInt32BE = function (e, t) {
              return (
                (e >>>= 0),
                t || b(e, 4, this.length),
                (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
              );
            }),
            (l.prototype.readFloatLE = function (e, t) {
              return ((e >>>= 0), t || b(e, 4, this.length), i.read(this, e, !0, 23, 4));
            }),
            (l.prototype.readFloatBE = function (e, t) {
              return ((e >>>= 0), t || b(e, 4, this.length), i.read(this, e, !1, 23, 4));
            }),
            (l.prototype.readDoubleLE = function (e, t) {
              return ((e >>>= 0), t || b(e, 8, this.length), i.read(this, e, !0, 52, 8));
            }),
            (l.prototype.readDoubleBE = function (e, t) {
              return ((e >>>= 0), t || b(e, 8, this.length), i.read(this, e, !1, 52, 8));
            }),
            (l.prototype.writeUIntLE = function (e, t, r, n) {
              if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r) - 1;
                x(this, e, t, r, i, 0);
              }
              var o = 1,
                a = 0;
              for (this[t] = 255 & e; ++a < r && (o *= 256); ) this[t + a] = (e / o) & 255;
              return t + r;
            }),
            (l.prototype.writeUIntBE = function (e, t, r, n) {
              if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r) - 1;
                x(this, e, t, r, i, 0);
              }
              var o = r - 1,
                a = 1;
              for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) this[t + o] = (e / a) & 255;
              return t + r;
            }),
            (l.prototype.writeUInt8 = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 1, 255, 0),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (l.prototype.writeUInt16LE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
            (l.prototype.writeUInt16BE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
            (l.prototype.writeUInt32LE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 4, 0xffffffff, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
            (l.prototype.writeUInt32BE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 4, 0xffffffff, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
            (l.prototype.writeIntLE = function (e, t, r, n) {
              if (((e *= 1), (t >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                x(this, e, t, r, i - 1, -i);
              }
              var o = 0,
                a = 1,
                l = 0;
              for (this[t] = 255 & e; ++o < r && (a *= 256); )
                (e < 0 && 0 === l && 0 !== this[t + o - 1] && (l = 1),
                  (this[t + o] = (((e / a) | 0) - l) & 255));
              return t + r;
            }),
            (l.prototype.writeIntBE = function (e, t, r, n) {
              if (((e *= 1), (t >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                x(this, e, t, r, i - 1, -i);
              }
              var o = r - 1,
                a = 1,
                l = 0;
              for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                (e < 0 && 0 === l && 0 !== this[t + o + 1] && (l = 1),
                  (this[t + o] = (((e / a) | 0) - l) & 255));
              return t + r;
            }),
            (l.prototype.writeInt8 = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 1, 127, -128),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (l.prototype.writeInt16LE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 2, 32767, -32768),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
            (l.prototype.writeInt16BE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 2, 32767, -32768),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
            (l.prototype.writeInt32LE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24),
                t + 4
              );
            }),
            (l.prototype.writeInt32BE = function (e, t, r) {
              return (
                (e *= 1),
                (t >>>= 0),
                r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
                e < 0 && (e = 0xffffffff + e + 1),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
            (l.prototype.writeFloatLE = function (e, t, r) {
              return O(this, e, t, !0, r);
            }),
            (l.prototype.writeFloatBE = function (e, t, r) {
              return O(this, e, t, !1, r);
            }),
            (l.prototype.writeDoubleLE = function (e, t, r) {
              return S(this, e, t, !0, r);
            }),
            (l.prototype.writeDoubleBE = function (e, t, r) {
              return S(this, e, t, !1, r);
            }),
            (l.prototype.copy = function (e, t, r, n) {
              if (!l.isBuffer(e)) throw TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                n > 0 && n < r && (n = r),
                n === r || 0 === e.length || 0 === this.length)
              )
                return 0;
              if (t < 0) throw RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length) throw RangeError("Index out of range");
              if (n < 0) throw RangeError("sourceEnd out of bounds");
              (n > this.length && (n = this.length),
                e.length - t < n - r && (n = e.length - t + r));
              var i = n - r;
              if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(t, r, n);
              else if (this === e && r < t && t < n)
                for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
              else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
              return i;
            }),
            (l.prototype.fill = function (e, t, r, n) {
              if ("string" == typeof e) {
                if (
                  ("string" == typeof t
                    ? ((n = t), (t = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw TypeError("encoding must be a string");
                if ("string" == typeof n && !l.isEncoding(n))
                  throw TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                  var i,
                    o = e.charCodeAt(0);
                  (("utf8" === n && o < 128) || "latin1" === n) && (e = o);
                }
              } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
              if (t < 0 || this.length < t || this.length < r)
                throw RangeError("Out of range index");
              if (r <= t) return this;
              if (
                ((t >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                e || (e = 0),
                "number" == typeof e)
              )
                for (i = t; i < r; ++i) this[i] = e;
              else {
                var a = l.isBuffer(e) ? e : l.from(e, n),
                  u = a.length;
                if (0 === u)
                  throw TypeError('The value "' + e + '" is invalid for argument "value"');
                for (i = 0; i < r - t; ++i) this[i + t] = a[i % u];
              }
              return this;
            }));
          var P = /[^+/0-9A-Za-z-_]/g;
          function A(e, t) {
            t = t || 1 / 0;
            for (var r, n = e.length, i = null, o = [], a = 0; a < n; ++a) {
              if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                if (!i) {
                  if (r > 56319 || a + 1 === n) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  ((t -= 3) > -1 && o.push(239, 191, 189), (i = r));
                  continue;
                }
                r = (((i - 55296) << 10) | (r - 56320)) + 65536;
              } else i && (t -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((t -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else if (r < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                );
              } else throw Error("Invalid code point");
            }
            return o;
          }
          function j(e) {
            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t;
          }
          function E(e) {
            return n.toByteArray(
              (function (e) {
                if ((e = (e = e.split("=")[0]).trim().replace(P, "")).length < 2) return "";
                for (; e.length % 4 != 0; ) e += "=";
                return e;
              })(e)
            );
          }
          function _(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) t[i + r] = e[i];
            return i;
          }
          function M(e, t) {
            return (
              e instanceof t ||
              (null != e &&
                null != e.constructor &&
                null != e.constructor.name &&
                e.constructor.name === t.name)
            );
          }
          var k = (function () {
            for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
              for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
            return t;
          })();
        },
        783: function (e, t) {
          ((t.read = function (e, t, r, n, i) {
            var o,
              a,
              l = 8 * i - n - 1,
              u = (1 << l) - 1,
              c = u >> 1,
              s = -7,
              f = r ? i - 1 : 0,
              p = r ? -1 : 1,
              h = e[t + f];
            for (
              f += p, o = h & ((1 << -s) - 1), h >>= -s, s += l;
              s > 0;
              o = 256 * o + e[t + f], f += p, s -= 8
            );
            for (
              a = o & ((1 << -s) - 1), o >>= -s, s += n;
              s > 0;
              a = 256 * a + e[t + f], f += p, s -= 8
            );
            if (0 === o) o = 1 - c;
            else {
              if (o === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
              ((a += Math.pow(2, n)), (o -= c));
            }
            return (h ? -1 : 1) * a * Math.pow(2, o - n);
          }),
            (t.write = function (e, t, r, n, i, o) {
              var a,
                l,
                u,
                c = 8 * o - i - 1,
                s = (1 << c) - 1,
                f = s >> 1,
                p = 5960464477539062e-23 * (23 === i),
                h = n ? 0 : o - 1,
                d = n ? 1 : -1,
                y = +(t < 0 || (0 === t && 1 / t < 0));
              for (
                isNaN((t = Math.abs(t))) || t === 1 / 0
                  ? ((l = +!!isNaN(t)), (a = s))
                  : ((a = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                    a + f >= 1 ? (t += p / u) : (t += p * Math.pow(2, 1 - f)),
                    t * u >= 2 && (a++, (u /= 2)),
                    a + f >= s
                      ? ((l = 0), (a = s))
                      : a + f >= 1
                        ? ((l = (t * u - 1) * Math.pow(2, i)), (a += f))
                        : ((l = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
                i >= 8;
                e[r + h] = 255 & l, h += d, l /= 256, i -= 8
              );
              for (a = (a << i) | l, c += i; c > 0; e[r + h] = 255 & a, h += d, a /= 256, c -= 8);
              e[r + h - d] |= 128 * y;
            }));
        },
      },
      i = {};
    function o(e) {
      var t = i[e];
      if (void 0 !== t) return t.exports;
      var r = (i[e] = { exports: {} }),
        a = !0;
      try {
        (n[e](r, r.exports, o), (a = !1));
      } finally {
        a && delete i[e];
      }
      return r.exports;
    }
    ((o.ab = "/ROOT/Desktop/js project/controlroom/node_modules/next/dist/compiled/buffer/"),
      (t.exports = o(72)));
  },
  86324,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.getSymbols = function (e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }));
  },
  76272,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.getTag = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }));
  },
  37991,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.argumentsTag = "[object Arguments]"),
      (r.arrayBufferTag = "[object ArrayBuffer]"),
      (r.arrayTag = "[object Array]"),
      (r.bigInt64ArrayTag = "[object BigInt64Array]"),
      (r.bigUint64ArrayTag = "[object BigUint64Array]"),
      (r.booleanTag = "[object Boolean]"),
      (r.dataViewTag = "[object DataView]"),
      (r.dateTag = "[object Date]"),
      (r.errorTag = "[object Error]"),
      (r.float32ArrayTag = "[object Float32Array]"),
      (r.float64ArrayTag = "[object Float64Array]"),
      (r.functionTag = "[object Function]"),
      (r.int16ArrayTag = "[object Int16Array]"),
      (r.int32ArrayTag = "[object Int32Array]"),
      (r.int8ArrayTag = "[object Int8Array]"),
      (r.mapTag = "[object Map]"),
      (r.numberTag = "[object Number]"),
      (r.objectTag = "[object Object]"),
      (r.regexpTag = "[object RegExp]"),
      (r.setTag = "[object Set]"),
      (r.stringTag = "[object String]"),
      (r.symbolTag = "[object Symbol]"),
      (r.uint16ArrayTag = "[object Uint16Array]"),
      (r.uint32ArrayTag = "[object Uint32Array]"),
      (r.uint8ArrayTag = "[object Uint8Array]"),
      (r.uint8ClampedArrayTag = "[object Uint8ClampedArray]"));
  },
  15184,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
      (r.isTypedArray = function (e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }));
  },
  38559,
  (e, t, r) => {
    "use strict";
    var n = e.i(17666);
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let i = e.r(86324),
      o = e.r(76272),
      a = e.r(37991),
      l = e.r(47988),
      u = e.r(15184);
    function c(e, t, r, i = new Map(), f) {
      let p = f?.(e, t, r, i);
      if (void 0 !== p) return p;
      if (l.isPrimitive(e)) return e;
      if (i.has(e)) return i.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        i.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, i, f);
        return (
          Object.hasOwn(e, "index") && (t.index = e.index),
          Object.hasOwn(e, "input") && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
      }
      if (e instanceof Map) {
        let t = new Map();
        for (let [n, o] of (i.set(e, t), e)) t.set(n, c(o, n, r, i, f));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        for (let n of (i.set(e, t), e)) t.add(c(n, void 0, r, i, f));
        return t;
      }
      if (void 0 !== n.Buffer && n.Buffer.isBuffer(e)) return e.subarray();
      if (u.isTypedArray(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        i.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, i, f);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if ("u" > typeof File && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if ("u" > typeof Blob && e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if (e instanceof Error) {
        let t = new e.constructor();
        return (
          i.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          s(t, e, r, i, f),
          t
        );
      }
      if (e instanceof Boolean) {
        let t = new Boolean(e.valueOf());
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if (e instanceof Number) {
        let t = new Number(e.valueOf());
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if (e instanceof String) {
        let t = new String(e.valueOf());
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      if (
        "object" == typeof e &&
        (function (e) {
          switch (o.getTag(e)) {
            case a.argumentsTag:
            case a.arrayTag:
            case a.arrayBufferTag:
            case a.dataViewTag:
            case a.booleanTag:
            case a.dateTag:
            case a.float32ArrayTag:
            case a.float64ArrayTag:
            case a.int8ArrayTag:
            case a.int16ArrayTag:
            case a.int32ArrayTag:
            case a.mapTag:
            case a.numberTag:
            case a.objectTag:
            case a.regexpTag:
            case a.setTag:
            case a.stringTag:
            case a.symbolTag:
            case a.uint8ArrayTag:
            case a.uint8ClampedArrayTag:
            case a.uint16ArrayTag:
            case a.uint32ArrayTag:
              return !0;
            default:
              return !1;
          }
        })(e)
      ) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (i.set(e, t), s(t, e, r, i, f), t);
      }
      return e;
    }
    function s(e, t, r = e, n, o) {
      let a = [...Object.keys(t), ...i.getSymbols(t)];
      for (let i = 0; i < a.length; i++) {
        let l = a[i],
          u = Object.getOwnPropertyDescriptor(e, l);
        (null == u || u.writable) && (e[l] = c(t[l], l, r, n, o));
      }
    }
    ((r.cloneDeepWith = function (e, t) {
      return c(e, void 0, e, new Map(), t);
    }),
      (r.cloneDeepWithImpl = c),
      (r.copyProperties = s));
  },
  38033,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(38559);
    r.cloneDeep = function (e) {
      return n.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    };
  },
  15799,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(79438),
      i = e.r(38033);
    r.matches = function (e) {
      return ((e = i.cloneDeep(e)), (t) => n.isMatch(t, e));
    };
  },
  87640,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(38559),
      i = e.r(76272),
      o = e.r(37991);
    r.cloneDeepWith = function (e, t) {
      return n.cloneDeepWith(e, (r, a, l, u) => {
        let c = t?.(r, a, l, u);
        if (void 0 !== c) return c;
        if ("object" == typeof e) {
          if (i.getTag(e) === o.objectTag && "function" != typeof e.constructor) {
            let t = {};
            return (u.set(e, t), n.copyProperties(t, e, l, u), t);
          }
          switch (Object.prototype.toString.call(e)) {
            case o.numberTag:
            case o.stringTag:
            case o.booleanTag: {
              let t = new e.constructor(e?.valueOf());
              return (n.copyProperties(t, e), t);
            }
            case o.argumentsTag: {
              let t = {};
              return (
                n.copyProperties(t, e),
                (t.length = e.length),
                (t[Symbol.iterator] = e[Symbol.iterator]),
                t
              );
            }
            default:
              return;
          }
        }
      });
    };
  },
  10703,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(87640);
    r.cloneDeep = function (e) {
      return n.cloneDeepWith(e);
    };
  },
  10984,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(76272);
    r.isArguments = function (e) {
      return null !== e && "object" == typeof e && "[object Arguments]" === n.getTag(e);
    };
  },
  22864,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(37740),
      i = e.r(67967),
      o = e.r(10984),
      a = e.r(20488);
    r.has = function (e, t) {
      let r;
      if (
        0 ===
        (r = Array.isArray(t)
          ? t
          : "string" == typeof t && n.isDeepKey(t) && e?.[t] == null
            ? a.toPath(t)
            : [t]).length
      )
        return !1;
      let l = e;
      for (let e = 0; e < r.length; e++) {
        let t = r[e];
        if (
          (null == l || !Object.hasOwn(l, t)) &&
          !((Array.isArray(l) || o.isArguments(l)) && i.isIndex(t) && t < l.length)
        )
          return !1;
        l = l[t];
      }
      return !0;
    };
  },
  17921,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(79438),
      i = e.r(77810),
      o = e.r(10703),
      a = e.r(16818),
      l = e.r(22864);
    r.matchesProperty = function (e, t) {
      switch (typeof e) {
        case "object":
          Object.is(e?.valueOf(), -0) && (e = "-0");
          break;
        case "number":
          e = i.toKey(e);
      }
      return (
        (t = o.cloneDeep(t)),
        function (r) {
          let i = a.get(r, e);
          return void 0 === i ? l.has(r, e) : void 0 === t ? void 0 === i : n.isMatch(i, t);
        }
      );
    };
  },
  43587,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(76260),
      i = e.r(36947),
      o = e.r(15799),
      a = e.r(17921);
    r.iteratee = function (e) {
      if (null == e) return n.identity;
      switch (typeof e) {
        case "function":
          return e;
        case "object":
          if (Array.isArray(e) && 2 === e.length) return a.matchesProperty(e[0], e[1]);
          return o.matches(e);
        case "string":
        case "symbol":
        case "number":
          return i.property(e);
      }
    };
  },
  92325,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
    let n = e.r(25001),
      i = e.r(92835),
      o = e.r(76260),
      a = e.r(24836),
      l = e.r(43587);
    r.uniqBy = function (e, t = o.identity) {
      return a.isArrayLikeObject(e) ? n.uniqBy(Array.from(e), i.ary(l.iteratee(t), 1)) : [];
    };
  },
  28498,
  (e, t, r) => {
    t.exports = e.r(92325).uniqBy;
  },
  66066,
  98073,
  94172,
  (e) => {
    "use strict";
    var t = e.i(34706),
      r = e.i(90761),
      n = e.i(46772),
      i = e.i(62388),
      o = e.i(28463);
    function a() {
      return (a = Object.assign.bind()).apply(null, arguments);
    }
    function l(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function c(e) {
      return Array.isArray(e) && (0, o.isNumOrStr)(e[0]) && (0, o.isNumOrStr)(e[1])
        ? e.join(" ~ ")
        : e;
    }
    var s = {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      f = { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" },
      p = {},
      h = (e) => {
        var {
            separator: r = " : ",
            contentStyle: l,
            itemStyle: h,
            labelStyle: d = p,
            payload: y,
            formatter: v,
            itemSorter: g,
            wrapperClassName: m,
            labelClassName: b,
            label: x,
            labelFormatter: w,
            accessibilityLayer: O = !1,
          } = e,
          S = u(u({}, s), l),
          P = u({ margin: 0 }, d),
          A = !(0, o.isNullish)(x),
          j = A ? x : "",
          E = (0, i.clsx)("recharts-default-tooltip", m),
          _ = (0, i.clsx)("recharts-tooltip-label", b);
        return (
          A && w && null != y && (j = w(x, y)),
          t.createElement(
            "div",
            a({ className: E, style: S }, O ? { role: "status", "aria-live": "assertive" } : {}),
            t.createElement(
              "p",
              { className: _, style: P },
              t.isValidElement(j) ? j : "".concat(j)
            ),
            (() => {
              if (y && y.length) {
                var e = (g ? (0, n.default)(y, g) : y).map((e, n) => {
                  if ("none" === e.type) return null;
                  var i = e.formatter || v || c,
                    { value: a, name: l } = e,
                    s = a,
                    p = l,
                    d = i(a, l, e, n, y);
                  if (Array.isArray(d)) [s, p] = d;
                  else {
                    if (null == d) return null;
                    s = d;
                  }
                  var g = u(u({}, f), {}, { color: e.color || f.color }, h);
                  return t.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(n),
                      style: g,
                    },
                    (0, o.isNumOrStr)(p)
                      ? t.createElement("span", { className: "recharts-tooltip-item-name" }, p)
                      : null,
                    (0, o.isNumOrStr)(p)
                      ? t.createElement("span", { className: "recharts-tooltip-item-separator" }, r)
                      : null,
                    t.createElement("span", { className: "recharts-tooltip-item-value" }, s),
                    t.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      e.unit || ""
                    )
                  );
                });
                return t.createElement(
                  "ul",
                  { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } },
                  e
                );
              }
              return null;
            })()
          )
        );
      },
      d = t,
      y = "recharts-tooltip-wrapper",
      v = { visibility: "hidden" };
    function g(e) {
      var {
        allowEscapeViewBox: t,
        coordinate: r,
        key: n,
        offset: i,
        position: a,
        reverseDirection: l,
        tooltipDimension: u,
        viewBox: c,
        viewBoxDimension: s,
      } = e;
      if (a && (0, o.isNumber)(a[n])) return a[n];
      var f = r[n] - u - (i > 0 ? i : 0),
        p = r[n] + i;
      if (t[n]) return l[n] ? f : p;
      var h = c[n];
      return null == h
        ? 0
        : l[n]
          ? f < h
            ? Math.max(p, h)
            : Math.max(f, h)
          : null == s
            ? 0
            : p + u > h + s
              ? Math.max(f, h)
              : Math.max(p, h);
    }
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              x(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function x(e, t, r) {
      var n;
      return (
        (t =
          "symbol" ==
          typeof (n = (function (e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != typeof n) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string"))
            ? n
            : n + "") in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    class w extends d.PureComponent {
      constructor() {
        (super(...arguments),
          x(this, "state", { dismissed: !1, dismissedAtCoordinate: { x: 0, y: 0 } }),
          x(this, "handleKeyDown", (e) => {
            if ("Escape" === e.key) {
              var t, r, n, i;
              this.setState({
                dismissed: !0,
                dismissedAtCoordinate: {
                  x: null != (t = null == (r = this.props.coordinate) ? void 0 : r.x) ? t : 0,
                  y: null != (n = null == (i = this.props.coordinate) ? void 0 : i.y) ? n : 0,
                },
              });
            }
          }));
      }
      componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
      }
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
      }
      componentDidUpdate() {
        var e, t;
        this.state.dismissed &&
          ((null == (e = this.props.coordinate) ? void 0 : e.x) !==
            this.state.dismissedAtCoordinate.x ||
            (null == (t = this.props.coordinate) ? void 0 : t.y) !==
              this.state.dismissedAtCoordinate.y) &&
          (this.state.dismissed = !1);
      }
      render() {
        var {
            active: e,
            allowEscapeViewBox: t,
            animationDuration: r,
            animationEasing: n,
            children: a,
            coordinate: l,
            hasPayload: u,
            isAnimationActive: c,
            offset: s,
            position: f,
            reverseDirection: p,
            useTranslate3d: h,
            viewBox: m,
            wrapperStyle: x,
            lastBoundingBox: w,
            innerRef: O,
            hasPortalFromProps: S,
          } = this.props,
          { cssClasses: P, cssProperties: A } = (function (e) {
            var t,
              r,
              n,
              {
                allowEscapeViewBox: a,
                coordinate: l,
                offsetTop: u,
                offsetLeft: c,
                position: s,
                reverseDirection: f,
                tooltipBox: p,
                useTranslate3d: h,
                viewBox: d,
              } = e;
            return {
              cssProperties: (t =
                p.height > 0 && p.width > 0 && l
                  ? (function (e) {
                      var { translateX: t, translateY: r, useTranslate3d: n } = e;
                      return {
                        transform: n
                          ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
                          : "translate(".concat(t, "px, ").concat(r, "px)"),
                      };
                    })({
                      translateX: (r = g({
                        allowEscapeViewBox: a,
                        coordinate: l,
                        key: "x",
                        offset: c,
                        position: s,
                        reverseDirection: f,
                        tooltipDimension: p.width,
                        viewBox: d,
                        viewBoxDimension: d.width,
                      })),
                      translateY: (n = g({
                        allowEscapeViewBox: a,
                        coordinate: l,
                        key: "y",
                        offset: u,
                        position: s,
                        reverseDirection: f,
                        tooltipDimension: p.height,
                        viewBox: d,
                        viewBoxDimension: d.height,
                      })),
                      useTranslate3d: h,
                    })
                  : v),
              cssClasses: (function (e) {
                var { coordinate: t, translateX: r, translateY: n } = e;
                return (0, i.clsx)(y, {
                  ["".concat(y, "-right")]:
                    (0, o.isNumber)(r) && t && (0, o.isNumber)(t.x) && r >= t.x,
                  ["".concat(y, "-left")]:
                    (0, o.isNumber)(r) && t && (0, o.isNumber)(t.x) && r < t.x,
                  ["".concat(y, "-bottom")]:
                    (0, o.isNumber)(n) && t && (0, o.isNumber)(t.y) && n >= t.y,
                  ["".concat(y, "-top")]:
                    (0, o.isNumber)(n) && t && (0, o.isNumber)(t.y) && n < t.y,
                });
              })({ translateX: r, translateY: n, coordinate: l }),
            };
          })({
            allowEscapeViewBox: t,
            coordinate: l,
            offsetLeft: "number" == typeof s ? s : s.x,
            offsetTop: "number" == typeof s ? s : s.y,
            position: f,
            reverseDirection: p,
            tooltipBox: { height: w.height, width: w.width },
            useTranslate3d: h,
            viewBox: m,
          }),
          j = S
            ? {}
            : b(
                b({ transition: c && e ? "transform ".concat(r, "ms ").concat(n) : void 0 }, A),
                {},
                {
                  pointerEvents: "none",
                  visibility: !this.state.dismissed && e && u ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }
              ),
          E = b(
            b({}, j),
            {},
            { visibility: !this.state.dismissed && e && u ? "visible" : "hidden" },
            x
          );
        return d.createElement(
          "div",
          { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: P, style: E, ref: O },
          a
        );
      }
    }
    var O = e.i(28498),
      S = e.i(92694),
      P = e.i(63955),
      A = e.i(41934),
      j = e.i(24417),
      E = e.i(56144),
      _ = ["x", "y", "top", "left", "width", "height", "className"];
    function M() {
      return (M = Object.assign.bind()).apply(null, arguments);
    }
    function k(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var T = (e) => {
        var {
            x: r = 0,
            y: n = 0,
            top: a = 0,
            left: l = 0,
            width: u = 0,
            height: c = 0,
            className: s,
          } = e,
          f = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? k(Object(r), !0).forEach(function (t) {
                    var n, i, o;
                    ((n = e),
                      (i = t),
                      (o = r[t]),
                      (i = (function (e) {
                        var t = (function (e, t) {
                          if ("object" != typeof e || !e) return e;
                          var r = e[Symbol.toPrimitive];
                          if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw TypeError("@@toPrimitive must return a primitive value.");
                          }
                          return ("string" === t ? String : Number)(e);
                        })(e, "string");
                        return "symbol" == typeof t ? t : t + "";
                      })(i)) in n
                        ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[i] = o));
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : k(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
            }
            return e;
          })(
            { x: r, y: n, top: a, left: l, width: u, height: c },
            (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  ((r = o[n]),
                    -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, _)
          );
        return (0, o.isNumber)(r) &&
          (0, o.isNumber)(n) &&
          (0, o.isNumber)(u) &&
          (0, o.isNumber)(c) &&
          (0, o.isNumber)(a) &&
          (0, o.isNumber)(l)
          ? t.createElement(
              "path",
              M({}, (0, E.svgPropertiesAndEvents)(f), {
                className: (0, i.clsx)("recharts-cross", s),
                d: "M"
                  .concat(r, ",")
                  .concat(a, "v")
                  .concat(c, "M")
                  .concat(l, ",")
                  .concat(n, "h")
                  .concat(u),
              })
            )
          : null;
      },
      C = e.i(92547),
      D = e.i(2161);
    function I(e) {
      var { cx: t, cy: r, radius: n, startAngle: i, endAngle: o } = e;
      return {
        points: [(0, D.polarToCartesian)(t, r, n, i), (0, D.polarToCartesian)(t, r, n, o)],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: o,
      };
    }
    var N = e.i(83027),
      L = e.i(81601),
      z = e.i(29225),
      R = e.i(80869),
      B = e.i(79809);
    function U(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? U(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var $ = e.i(72063),
      K = e.i(30254),
      W = e.i(47612),
      q = e.i(51381);
    function Y() {
      return (Y = Object.assign.bind()).apply(null, arguments);
    }
    function H(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function V(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? H(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function X(e) {
      var { cursor: r, cursorComp: n, cursorProps: i } = e;
      return (0, t.isValidElement)(r) ? (0, t.cloneElement)(r, i) : (0, t.createElement)(n, i);
    }
    function G(e) {
      var r,
        n,
        o,
        a,
        l,
        {
          coordinate: u,
          payload: c,
          index: s,
          offset: f,
          tooltipAxisBandSize: p,
          layout: h,
          cursor: d,
          tooltipEventType: y,
          chartName: v,
        } = e;
      if (!d || !u || ("ScatterChart" !== v && "axis" !== y)) return null;
      if ("ScatterChart" === v) ((o = u), (a = T), (l = q.DefaultZIndexes.cursorLine));
      else if ("BarChart" === v)
        ((r = p / 2),
          (o = {
            stroke: "none",
            fill: "#ccc",
            x: "horizontal" === h ? u.x - r : f.left + 0.5,
            y: "horizontal" === h ? f.top + 0.5 : u.y - r,
            width: "horizontal" === h ? p : f.width - 1,
            height: "horizontal" === h ? f.height - 1 : p,
          }),
          (a = C.Rectangle),
          (l = q.DefaultZIndexes.cursorRectangle));
      else if ("radial" === h && (0, A.isPolarCoordinate)(u)) {
        var { cx: g, cy: m, radius: b, startAngle: x, endAngle: w } = I(u);
        ((o = { cx: g, cy: m, startAngle: x, endAngle: w, innerRadius: b, outerRadius: b }),
          (a = N.Sector),
          (l = q.DefaultZIndexes.cursorLine));
      } else
        ((o = {
          points: (function (e, t, r) {
            if ("horizontal" === e)
              return [
                { x: t.x, y: r.top },
                { x: t.x, y: r.top + r.height },
              ];
            if ("vertical" === e)
              return [
                { x: r.left, y: t.y },
                { x: r.left + r.width, y: t.y },
              ];
            if ((0, A.isPolarCoordinate)(t)) {
              if ("centric" === e) {
                var { cx: n, cy: i, innerRadius: o, outerRadius: a, angle: l } = t,
                  u = (0, D.polarToCartesian)(n, i, o, l),
                  c = (0, D.polarToCartesian)(n, i, a, l);
                return [
                  { x: u.x, y: u.y },
                  { x: c.x, y: c.y },
                ];
              }
              return I(t);
            }
          })(h, u, f),
        }),
          (a = j.Curve),
          (l = q.DefaultZIndexes.cursorLine));
      var O = "object" == typeof d && "className" in d ? d.className : void 0,
        S = V(
          V(
            V(V({ stroke: "#ccc", pointerEvents: "none" }, f), o),
            (0, K.svgPropertiesNoEventsFromUnknown)(d)
          ),
          {},
          { payload: c, payloadIndex: s, className: (0, i.clsx)("recharts-tooltip-cursor", O) }
        );
      return t.createElement(
        W.ZIndexLayer,
        { zIndex: null != (n = e.zIndex) ? n : l },
        t.createElement(X, { cursor: d, cursorComp: a, cursorProps: S })
      );
    }
    function Z(e) {
      var r,
        n,
        i,
        o =
          ((r = (0, L.useAppSelector)(R.selectTooltipAxis)),
          (n = (0, L.useAppSelector)(B.selectTooltipAxisTicks)),
          (i = (0, L.useAppSelector)(B.selectTooltipAxisScale)),
          r && i
            ? (0, z.getBandSizeOfAxis)(F(F({}, r), {}, { scale: i }), n)
            : (0, z.getBandSizeOfAxis)(void 0, n)),
        a = (0, S.useOffsetInternal)(),
        l = (0, S.useChartLayout)(),
        u = (0, $.useChartName)();
      return null == o || null == a || null == l || null == u
        ? null
        : t.createElement(
            G,
            Y({}, e, { offset: a, layout: l, tooltipAxisBandSize: o, chartName: u })
          );
    }
    var Q = e.i(25297),
      J = e.i(68732),
      ee = e.i(65799),
      et = e.i(45999),
      er = e.i(87459);
    function en(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ei(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? en(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : en(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function eo(e) {
      return e.dataKey;
    }
    var ea = [],
      el = {
        allowEscapeViewBox: { x: !1, y: !1 },
        animationDuration: 400,
        animationEasing: "ease",
        axisId: 0,
        contentStyle: {},
        cursor: !0,
        filterNull: !0,
        includeHidden: !1,
        isAnimationActive: "auto",
        itemSorter: "name",
        itemStyle: {},
        labelStyle: {},
        offset: 10,
        reverseDirection: { x: !1, y: !1 },
        separator: " : ",
        trigger: "hover",
        useTranslate3d: !1,
        wrapperStyle: {},
      };
    function eu(e) {
      var n,
        i,
        o,
        a,
        l = (0, er.resolveDefaultProps)(e, el),
        {
          active: u,
          allowEscapeViewBox: c,
          animationDuration: s,
          animationEasing: f,
          content: p,
          filterNull: d,
          isAnimationActive: y,
          offset: v,
          payloadUniqBy: g,
          position: m,
          reverseDirection: b,
          useTranslate3d: x,
          wrapperStyle: A,
          cursor: j,
          shared: E,
          trigger: _,
          defaultIndex: M,
          portal: k,
          axisId: T,
        } = l,
        C = (0, L.useAppDispatch)(),
        D = "number" == typeof M ? String(M) : M;
      (0, t.useEffect)(() => {
        C(
          (0, J.setTooltipSettingsState)({
            shared: E,
            trigger: _,
            axisId: T,
            active: u,
            defaultIndex: D,
          })
        );
      }, [C, E, _, T, u, D]);
      var I = (0, S.useViewBox)(),
        N = (0, P.useAccessibilityLayer)(),
        z = (0, et.useTooltipEventType)(E),
        { activeIndex: R, isActive: B } =
          null != (o = (0, L.useAppSelector)((e) => (0, $.selectIsTooltipActive)(e, z, _, D)))
            ? o
            : {},
        U = (0, L.useAppSelector)((e) => (0, $.selectTooltipPayload)(e, z, _, D)),
        F = (0, L.useAppSelector)((e) => (0, $.selectActiveLabel)(e, z, _, D)),
        K = (0, L.useAppSelector)((e) => (0, $.selectActiveCoordinate)(e, z, _, D)),
        W = (0, Q.useTooltipPortal)(),
        q = null != (a = null != u ? u : B) && a,
        [Y, H] = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            [r, n] = (0, t.useState)({ height: 0, left: 0, top: 0, width: 0 }),
            i = (0, t.useCallback)(
              (e) => {
                if (null != e) {
                  var t = e.getBoundingClientRect(),
                    i = { height: t.height, left: t.left, top: t.top, width: t.width };
                  (Math.abs(i.height - r.height) > 1 ||
                    Math.abs(i.left - r.left) > 1 ||
                    Math.abs(i.top - r.top) > 1 ||
                    Math.abs(i.width - r.width) > 1) &&
                    n({ height: i.height, left: i.left, top: i.top, width: i.width });
                }
              },
              [r.width, r.height, r.top, r.left, ...e]
            );
          return [r, i];
        })([U, q]),
        V = "axis" === z ? F : void 0;
      (0, ee.useTooltipChartSynchronisation)(z, _, K, V, R, q);
      var X = null != k ? k : W;
      if (null == X || null == I || null == z) return null;
      var G = null != U ? U : ea;
      (q || (G = ea),
        d &&
          G.length &&
          ((n = G.filter((e) => null != e.value && (!0 !== e.hide || l.includeHidden))),
          (G =
            !0 === g ? (0, O.default)(n, eo) : "function" == typeof g ? (0, O.default)(n, g) : n)));
      var en = G.length > 0,
        eu = t.createElement(
          w,
          {
            allowEscapeViewBox: c,
            animationDuration: s,
            animationEasing: f,
            isAnimationActive: y,
            active: q,
            coordinate: K,
            hasPayload: en,
            offset: v,
            position: m,
            reverseDirection: b,
            useTranslate3d: x,
            viewBox: I,
            wrapperStyle: A,
            lastBoundingBox: Y,
            innerRef: H,
            hasPortalFromProps: !!k,
          },
          ((i = ei(
            ei({}, l),
            {},
            {
              payload: G,
              label: V,
              active: q,
              activeIndex: R,
              coordinate: K,
              accessibilityLayer: N,
            }
          )),
          t.isValidElement(p)
            ? t.cloneElement(p, i)
            : "function" == typeof p
              ? t.createElement(p, i)
              : t.createElement(h, i))
        );
      return t.createElement(
        t.Fragment,
        null,
        (0, r.createPortal)(eu, X),
        q &&
          t.createElement(Z, {
            cursor: j,
            tooltipEventType: z,
            coordinate: K,
            payload: G,
            index: R,
          })
      );
    }
    e.s(["Tooltip", () => eu], 66066);
    var ec = e.i(45629),
      es = e.i(46833),
      ef = function (e) {
        var { width: t, height: r } = e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
          o = Math.atan(r / t);
        return Math.abs(i > o && i < Math.PI - o ? r / Math.sin(i) : t / Math.cos(i));
      };
    function ep(e, t) {
      if (t < 1) return [];
      if (1 === t) return e;
      for (var r = [], n = 0; n < e.length; n += t) {
        var i = e[n];
        void 0 !== i && r.push(i);
      }
      return r;
    }
    function eh(e, t, r, n, i) {
      if (e * t < e * n || e * t > e * i) return !1;
      var o = r();
      return e * (t - (e * o) / 2 - n) >= 0 && e * (t + (e * o) / 2 - i) <= 0;
    }
    function ed(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ey(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ed(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ed(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function ev(e, t, r) {
      var n,
        {
          tick: i,
          ticks: a,
          viewBox: l,
          minTickGap: u,
          orientation: c,
          interval: s,
          tickFormatter: f,
          unit: p,
          angle: h,
        } = e;
      if (!a || !a.length || !i) return [];
      if ((0, o.isNumber)(s) || es.Global.isSsr)
        return null != (n = ep(a, ((0, o.isNumber)(s) ? s : 0) + 1)) ? n : [];
      var d = "top" === c || "bottom" === c ? "width" : "height",
        y =
          p && "width" === d
            ? (0, ec.getStringSize)(p, { fontSize: t, letterSpacing: r })
            : { width: 0, height: 0 },
        v = (e, n) => {
          var i,
            o = "function" == typeof f ? f(e.value, n) : e.value;
          return "width" === d
            ? ((i = (0, ec.getStringSize)(o, { fontSize: t, letterSpacing: r })),
              ef({ width: i.width + y.width, height: i.height + y.height }, h))
            : (0, ec.getStringSize)(o, { fontSize: t, letterSpacing: r })[d];
        },
        g = a[0],
        m = a[1],
        b =
          a.length >= 2 && null != g && null != m
            ? (0, o.mathSign)(m.coordinate - g.coordinate)
            : 1,
        x = (function (e, t, r) {
          var n = "width" === r,
            { x: i, y: o, width: a, height: l } = e;
          return 1 === t
            ? { start: n ? i : o, end: n ? i + a : o + l }
            : { start: n ? i + a : o + l, end: n ? i : o };
        })(l, b, d);
      return "equidistantPreserveStart" === s
        ? (function (e, t, r, n, i) {
            for (
              var o, a = (n || []).slice(), { start: l, end: u } = t, c = 0, s = 1, f = l;
              s <= a.length;
            )
              if (
                (o = (function () {
                  var t,
                    o = null == n ? void 0 : n[c];
                  if (void 0 === o) return { v: ep(n, s) };
                  var a = c,
                    p = () => (void 0 === t && (t = r(o, a)), t),
                    h = o.coordinate,
                    d = 0 === c || eh(e, h, p, f, u);
                  (d || ((c = 0), (f = l), (s += 1)), d && ((f = h + e * (p() / 2 + i)), (c += s)));
                })())
              )
                return o.v;
            return [];
          })(b, x, v, a, u)
        : "equidistantPreserveEnd" === s
          ? (function (e, t, r, n, i) {
              var o = (n || []).slice().length;
              if (0 === o) return [];
              for (var { start: a, end: l } = t, u = 1; u <= o; u++) {
                for (
                  var c, s = (o - 1) % u, f = a, p = !0, h = s;
                  h < o &&
                  (0 ===
                    (c = (function () {
                      var t,
                        o = n[h];
                      if (null == o) return 0;
                      var a = h,
                        u = () => (void 0 === t && (t = r(o, a)), t),
                        c = o.coordinate,
                        d = h === s || eh(e, c, u, f, l);
                      if (!d) return ((p = !1), 1);
                      d && (f = c + e * (u() / 2 + i));
                    })()) ||
                    1 !== c);
                  h += u
                );
                if (p) {
                  for (var d = [], y = s; y < o; y += u) {
                    var v = n[y];
                    null != v && d.push(v);
                  }
                  return d;
                }
              }
              return [];
            })(b, x, v, a, u)
          : ("preserveStart" === s || "preserveStartEnd" === s
              ? (function (e, t, r, n, i, o) {
                  var a = (n || []).slice(),
                    l = a.length,
                    { start: u, end: c } = t;
                  if (o) {
                    var s = n[l - 1];
                    if (null != s) {
                      var f = r(s, l - 1),
                        p = e * (s.coordinate + (e * f) / 2 - c);
                      ((a[l - 1] = s =
                        ey(
                          ey({}, s),
                          {},
                          { tickCoord: p > 0 ? s.coordinate - p * e : s.coordinate }
                        )),
                        null != s.tickCoord &&
                          eh(e, s.tickCoord, () => f, u, c) &&
                          ((c = s.tickCoord - e * (f / 2 + i)),
                          (a[l - 1] = ey(ey({}, s), {}, { isShow: !0 }))));
                    }
                  }
                  for (
                    var h = o ? l - 1 : l,
                      d = function (t) {
                        var n,
                          o = a[t];
                        if (null == o) return 1;
                        var l = o,
                          s = () => (void 0 === n && (n = r(o, t)), n);
                        if (0 === t) {
                          var f = e * (l.coordinate - (e * s()) / 2 - u);
                          a[t] = l = ey(
                            ey({}, l),
                            {},
                            { tickCoord: f < 0 ? l.coordinate - f * e : l.coordinate }
                          );
                        } else a[t] = l = ey(ey({}, l), {}, { tickCoord: l.coordinate });
                        null != l.tickCoord &&
                          eh(e, l.tickCoord, s, u, c) &&
                          ((u = l.tickCoord + e * (s() / 2 + i)),
                          (a[t] = ey(ey({}, l), {}, { isShow: !0 })));
                      },
                      y = 0;
                    y < h;
                    y++
                  )
                    if (d(y)) continue;
                  return a;
                })(b, x, v, a, u, "preserveStartEnd" === s)
              : (function (e, t, r, n, i) {
                  for (
                    var o = (n || []).slice(),
                      a = o.length,
                      { start: l } = t,
                      { end: u } = t,
                      c = function (t) {
                        var n,
                          c = o[t];
                        if (null == c) return 1;
                        var s = c,
                          f = () => (void 0 === n && (n = r(c, t)), n);
                        if (t === a - 1) {
                          var p = e * (s.coordinate + (e * f()) / 2 - u);
                          o[t] = s = ey(
                            ey({}, s),
                            {},
                            { tickCoord: p > 0 ? s.coordinate - p * e : s.coordinate }
                          );
                        } else o[t] = s = ey(ey({}, s), {}, { tickCoord: s.coordinate });
                        null != s.tickCoord &&
                          eh(e, s.tickCoord, f, l, u) &&
                          ((u = s.tickCoord - e * (f() / 2 + i)),
                          (o[t] = ey(ey({}, s), {}, { isShow: !0 })));
                      },
                      s = a - 1;
                    s >= 0;
                    s--
                  )
                    if (c(s)) continue;
                  return o;
                })(b, x, v, a, u)
            ).filter((e) => e.isShow);
    }
    e.s(["getTicks", () => ev], 98073);
    var eg = (e) => {
      var { ticks: t, label: r, labelGapWithTick: n = 5, tickSize: i = 0, tickMargin: o = 0 } = e,
        a = 0;
      if (t) {
        Array.from(t).forEach((e) => {
          if (e) {
            var t = e.getBoundingClientRect();
            t.width > a && (a = t.width);
          }
        });
        var l = r ? r.getBoundingClientRect().width : 0;
        return Math.round(a + (i + o) + l + (r ? n : 0));
      }
      return 0;
    };
    e.s(["getCalculatedYAxisWidth", () => eg], 94172);
  },
  75755,
  (e) => {
    "use strict";
    function t(e) {
      return e && "object" == typeof e && "className" in e && "string" == typeof e.className
        ? e.className
        : "";
    }
    e.s(["getClassNameFromUnknown", () => t]);
  },
  90390,
  26368,
  (e) => {
    "use strict";
    var t = e.i(34706),
      r = e.i(62388),
      n = e.i(81098),
      i = e.i(85322),
      o = e.i(47806),
      a = e.i(45604),
      l = e.i(28463),
      u = e.i(41934),
      c = e.i(98073),
      s = e.i(30254),
      f = e.i(94172),
      p = e.i(87459),
      h = e.i(47612),
      d = e.i(51381),
      y = e.i(75755),
      v = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType"];
    function g() {
      return (g = Object.assign.bind()).apply(null, arguments);
    }
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var x = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      viewBox: { x: 0, y: 0, width: 0, height: 0 },
      orientation: "bottom",
      ticks: [],
      stroke: "#666",
      tickLine: !0,
      axisLine: !0,
      tick: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd",
      zIndex: d.DefaultZIndexes.axis,
    };
    function w(e) {
      var {
        x: i,
        y: o,
        width: a,
        height: l,
        orientation: u,
        mirror: c,
        axisLine: f,
        otherSvgProps: p,
      } = e;
      if (!f) return null;
      var h = b(b(b({}, p), (0, s.svgPropertiesNoEvents)(f)), {}, { fill: "none" });
      if ("top" === u || "bottom" === u) {
        var d = +(("top" === u && !c) || ("bottom" === u && c));
        h = b(b({}, h), {}, { x1: i, y1: o + d * l, x2: i + a, y2: o + d * l });
      } else {
        var y = +(("left" === u && !c) || ("right" === u && c));
        h = b(b({}, h), {}, { x1: i + y * a, y1: o, x2: i + y * a, y2: o + l });
      }
      return t.createElement(
        "line",
        g({}, h, {
          className: (0, r.clsx)("recharts-cartesian-axis-line", (0, n.default)(f, "className")),
        })
      );
    }
    function O(e) {
      var n,
        { option: i, tickProps: a, value: l } = e,
        u = (0, r.clsx)(a.className, "recharts-cartesian-axis-tick-value");
      if (t.isValidElement(i)) n = t.cloneElement(i, b(b({}, a), {}, { className: u }));
      else if ("function" == typeof i) n = i(b(b({}, a), {}, { className: u }));
      else {
        var c = "recharts-cartesian-axis-tick-value";
        ("boolean" != typeof i && (c = (0, r.clsx)(c, (0, y.getClassNameFromUnknown)(i))),
          (n = t.createElement(o.Text, g({}, a, { className: c }), l)));
      }
      return n;
    }
    var S = (0, t.forwardRef)((e, o) => {
        var {
            ticks: a = [],
            tick: f,
            tickLine: p,
            stroke: y,
            tickFormatter: v,
            unit: m,
            padding: x,
            tickTextProps: w,
            orientation: S,
            mirror: P,
            x: A,
            y: j,
            width: E,
            height: _,
            tickSize: M,
            tickMargin: k,
            fontSize: T,
            letterSpacing: C,
            getTicksConfig: D,
            events: I,
            axisType: N,
          } = e,
          L = (0, c.getTicks)(b(b({}, D), {}, { ticks: a }), T, C),
          z = (function (e, t) {
            switch (e) {
              case "left":
                return t ? "start" : "end";
              case "right":
                return t ? "end" : "start";
              default:
                return "middle";
            }
          })(S, P),
          R = (function (e, t) {
            switch (e) {
              case "left":
              case "right":
                return "middle";
              case "top":
                return t ? "start" : "end";
              default:
                return t ? "end" : "start";
            }
          })(S, P),
          B = (0, s.svgPropertiesNoEvents)(D),
          U = (0, s.svgPropertiesNoEventsFromUnknown)(f),
          F = {};
        "object" == typeof p && (F = p);
        var $ = b(b({}, B), {}, { fill: "none" }, F),
          K = L.map((e) =>
            b(
              { entry: e },
              (function (e, t, r, n, i, o, a, u, c) {
                var s,
                  f,
                  p,
                  h,
                  d,
                  y,
                  v = u ? -1 : 1,
                  g = e.tickSize || a,
                  m = (0, l.isNumber)(e.tickCoord) ? e.tickCoord : e.coordinate;
                switch (o) {
                  case "top":
                    ((s = f = e.coordinate), (y = (p = (h = r + !u * i) - v * g) - v * c), (d = m));
                    break;
                  case "left":
                    ((p = h = e.coordinate), (d = (s = (f = t + !u * n) - v * g) - v * c), (y = m));
                    break;
                  case "right":
                    ((p = h = e.coordinate), (d = (s = (f = t + u * n) + v * g) + v * c), (y = m));
                    break;
                  default:
                    ((s = f = e.coordinate), (y = (p = (h = r + u * i) + v * g) + v * c), (d = m));
                }
                return { line: { x1: s, y1: p, x2: f, y2: h }, tick: { x: d, y: y } };
              })(e, A, j, E, _, S, M, P, k)
            )
          ),
          W = K.map((e) => {
            var { entry: o, line: a } = e;
            return t.createElement(
              i.Layer,
              {
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(o.value, "-").concat(o.coordinate, "-").concat(o.tickCoord),
              },
              p &&
                t.createElement(
                  "line",
                  g({}, $, a, {
                    className: (0, r.clsx)(
                      "recharts-cartesian-axis-tick-line",
                      (0, n.default)(p, "className")
                    ),
                  })
                )
            );
          }),
          q = K.map((e, r) => {
            var n,
              o,
              { entry: a, tick: l } = e,
              c = b(
                b(
                  b(b({ verticalAnchor: R }, B), {}, { textAnchor: z, stroke: "none", fill: y }, l),
                  {},
                  {
                    index: r,
                    payload: a,
                    visibleTicksCount: L.length,
                    tickFormatter: v,
                    padding: x,
                  },
                  w
                ),
                {},
                {
                  angle:
                    null != (n = null != (o = null == w ? void 0 : w.angle) ? o : B.angle) ? n : 0,
                }
              ),
              s = b(b({}, c), U);
            return t.createElement(
              i.Layer,
              g(
                {
                  className: "recharts-cartesian-axis-tick-label",
                  key: "tick-label-"
                    .concat(a.value, "-")
                    .concat(a.coordinate, "-")
                    .concat(a.tickCoord),
                },
                (0, u.adaptEventsOfChild)(I, a, r)
              ),
              f &&
                t.createElement(O, {
                  option: f,
                  tickProps: s,
                  value: ""
                    .concat("function" == typeof v ? v(a.value, r) : a.value)
                    .concat(m || ""),
                })
            );
          });
        return t.createElement(
          "g",
          { className: "recharts-cartesian-axis-ticks recharts-".concat(N, "-ticks") },
          q.length > 0 &&
            t.createElement(
              h.ZIndexLayer,
              { zIndex: d.DefaultZIndexes.label },
              t.createElement(
                "g",
                {
                  className: "recharts-cartesian-axis-tick-labels recharts-".concat(
                    N,
                    "-tick-labels"
                  ),
                  ref: o,
                },
                q
              )
            ),
          W.length > 0 &&
            t.createElement(
              "g",
              {
                className: "recharts-cartesian-axis-tick-lines recharts-".concat(N, "-tick-lines"),
              },
              W
            )
        );
      }),
      P = (0, t.forwardRef)((e, n) => {
        var { axisLine: o, width: l, height: u, className: c, hide: p, ticks: d, axisType: y } = e,
          g = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                ((r = o[n]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
          })(e, v),
          [m, b] = (0, t.useState)(""),
          [x, O] = (0, t.useState)(""),
          P = (0, t.useRef)(null);
        (0, t.useImperativeHandle)(n, () => ({
          getCalculatedWidth: () => {
            var t;
            return (0, f.getCalculatedYAxisWidth)({
              ticks: P.current,
              label: null == (t = e.labelRef) ? void 0 : t.current,
              labelGapWithTick: 5,
              tickSize: e.tickSize,
              tickMargin: e.tickMargin,
            });
          },
        }));
        var A = (0, t.useCallback)(
          (e) => {
            if (e) {
              var t = e.getElementsByClassName("recharts-cartesian-axis-tick-value");
              P.current = t;
              var r = t[0];
              if (r) {
                var n = window.getComputedStyle(r),
                  i = n.fontSize,
                  o = n.letterSpacing;
                (i !== m || o !== x) && (b(i), O(o));
              }
            }
          },
          [m, x]
        );
        return p || (null != l && l <= 0) || (null != u && u <= 0)
          ? null
          : t.createElement(
              h.ZIndexLayer,
              { zIndex: e.zIndex },
              t.createElement(
                i.Layer,
                { className: (0, r.clsx)("recharts-cartesian-axis", c) },
                t.createElement(w, {
                  x: e.x,
                  y: e.y,
                  width: l,
                  height: u,
                  orientation: e.orientation,
                  mirror: e.mirror,
                  axisLine: o,
                  otherSvgProps: (0, s.svgPropertiesNoEvents)(e),
                }),
                t.createElement(S, {
                  ref: A,
                  axisType: y,
                  events: g,
                  fontSize: m,
                  getTicksConfig: e,
                  height: e.height,
                  letterSpacing: x,
                  mirror: e.mirror,
                  orientation: e.orientation,
                  padding: e.padding,
                  stroke: e.stroke,
                  tick: e.tick,
                  tickFormatter: e.tickFormatter,
                  tickLine: e.tickLine,
                  tickMargin: e.tickMargin,
                  tickSize: e.tickSize,
                  tickTextProps: e.tickTextProps,
                  ticks: d,
                  unit: e.unit,
                  width: e.width,
                  x: e.x,
                  y: e.y,
                }),
                t.createElement(
                  a.CartesianLabelContextProvider,
                  {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    lowerWidth: e.width,
                    upperWidth: e.width,
                  },
                  t.createElement(a.CartesianLabelFromLabelProp, {
                    label: e.label,
                    labelRef: e.labelRef,
                  }),
                  e.children
                )
              )
            );
      }),
      A = t.forwardRef((e, r) => {
        var n = (0, p.resolveDefaultProps)(e, x);
        return t.createElement(P, g({}, n, { ref: r }));
      });
    A.displayName = "CartesianAxis";
    var j = e.i(81601),
      E = e.i(64323),
      _ = e.i(80869),
      M = e.i(89587),
      k = e.i(84315),
      T = e.i(68098),
      C = ["domain", "range"],
      D = ["domain", "range"];
    function I(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    function N(e, t) {
      return (
        e === t ||
        (!!(Array.isArray(e) && 2 === e.length && Array.isArray(t)) &&
          2 === t.length &&
          e[0] === t[0] &&
          e[1] === t[1])
      );
    }
    function L(e, t) {
      if (e === t) return !0;
      var { domain: r, range: n } = e,
        i = I(e, C),
        { domain: o, range: a } = t,
        l = I(t, D);
      return !!N(r, o) && !!N(n, a) && (0, T.propsAreEqual)(i, l);
    }
    var z = e.i(92694),
      R = e.i(70731),
      B = ["type"],
      U = ["dangerouslySetInnerHTML", "ticks", "scale"],
      F = ["id", "scale"];
    function $() {
      return ($ = Object.assign.bind()).apply(null, arguments);
    }
    function K(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function W(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? K(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function q(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    function Y(e) {
      var r = (0, j.useAppDispatch)(),
        n = (0, t.useRef)(null),
        i = (0, z.useCartesianChartLayout)(),
        { type: o } = e,
        a = q(e, B),
        l = (0, R.getAxisTypeBasedOnLayout)(i, "xAxis", o),
        u = (0, t.useMemo)(() => {
          if (null != l) return W(W({}, a), {}, { type: l });
        }, [a, l]);
      return (
        (0, t.useLayoutEffect)(() => {
          null != u &&
            (null === n.current
              ? r((0, E.addXAxis)(u))
              : n.current !== u && r((0, E.replaceXAxis)({ prev: n.current, next: u })),
            (n.current = u));
        }, [u, r]),
        (0, t.useLayoutEffect)(
          () => () => {
            n.current && (r((0, E.removeXAxis)(n.current)), (n.current = null));
          },
          [r]
        ),
        null
      );
    }
    var H = (e) => {
        var { xAxisId: n, className: i } = e,
          o = (0, j.useAppSelector)(M.selectAxisViewBox),
          a = (0, k.useIsPanorama)(),
          l = "xAxis",
          u = (0, j.useAppSelector)((e) => (0, _.selectTicksOfAxis)(e, l, n, a)),
          c = (0, j.useAppSelector)((e) => (0, _.selectXAxisSize)(e, n)),
          s = (0, j.useAppSelector)((e) => (0, _.selectXAxisPosition)(e, n)),
          f = (0, j.useAppSelector)((e) => (0, _.selectXAxisSettingsNoDefaults)(e, n));
        if (null == c || null == s || null == f) return null;
        var { dangerouslySetInnerHTML: p, ticks: h, scale: d } = e,
          y = q(e, U),
          { id: v, scale: g } = f,
          m = q(f, F);
        return t.createElement(
          A,
          $({}, y, m, {
            x: s.x,
            y: s.y,
            width: c.width,
            height: c.height,
            className: (0, r.clsx)("recharts-".concat(l, " ").concat(l), i),
            viewBox: o,
            ticks: u,
            axisType: l,
          })
        );
      },
      V = {
        allowDataOverflow: _.implicitXAxis.allowDataOverflow,
        allowDecimals: _.implicitXAxis.allowDecimals,
        allowDuplicatedCategory: _.implicitXAxis.allowDuplicatedCategory,
        angle: _.implicitXAxis.angle,
        axisLine: x.axisLine,
        height: _.implicitXAxis.height,
        hide: !1,
        includeHidden: _.implicitXAxis.includeHidden,
        interval: _.implicitXAxis.interval,
        label: !1,
        minTickGap: _.implicitXAxis.minTickGap,
        mirror: _.implicitXAxis.mirror,
        orientation: _.implicitXAxis.orientation,
        padding: _.implicitXAxis.padding,
        reversed: _.implicitXAxis.reversed,
        scale: _.implicitXAxis.scale,
        tick: _.implicitXAxis.tick,
        tickCount: _.implicitXAxis.tickCount,
        tickLine: x.tickLine,
        tickSize: x.tickSize,
        type: _.implicitXAxis.type,
        xAxisId: 0,
      },
      X = t.memo((e) => {
        var r = (0, p.resolveDefaultProps)(e, V);
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(Y, {
            allowDataOverflow: r.allowDataOverflow,
            allowDecimals: r.allowDecimals,
            allowDuplicatedCategory: r.allowDuplicatedCategory,
            angle: r.angle,
            dataKey: r.dataKey,
            domain: r.domain,
            height: r.height,
            hide: r.hide,
            id: r.xAxisId,
            includeHidden: r.includeHidden,
            interval: r.interval,
            minTickGap: r.minTickGap,
            mirror: r.mirror,
            name: r.name,
            orientation: r.orientation,
            padding: r.padding,
            reversed: r.reversed,
            scale: r.scale,
            tick: r.tick,
            tickCount: r.tickCount,
            tickFormatter: r.tickFormatter,
            ticks: r.ticks,
            type: r.type,
            unit: r.unit,
          }),
          t.createElement(H, r)
        );
      }, L);
    ((X.displayName = "XAxis"), e.s(["XAxis", () => X], 90390));
    var G = ["type"],
      Z = ["dangerouslySetInnerHTML", "ticks", "scale"],
      Q = ["id", "scale"];
    function J() {
      return (J = Object.assign.bind()).apply(null, arguments);
    }
    function ee(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function et(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ee(Object(r), !0).forEach(function (t) {
              var n, i, o;
              ((n = e),
                (i = t),
                (o = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function er(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          ((r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
      }
      return i;
    }
    function en(e) {
      var r = (0, j.useAppDispatch)(),
        n = (0, t.useRef)(null),
        i = (0, z.useCartesianChartLayout)(),
        { type: o } = e,
        a = er(e, G),
        l = (0, R.getAxisTypeBasedOnLayout)(i, "yAxis", o),
        u = (0, t.useMemo)(() => {
          if (null != l) return et(et({}, a), {}, { type: l });
        }, [l, a]);
      return (
        (0, t.useLayoutEffect)(() => {
          null != u &&
            (null === n.current
              ? r((0, E.addYAxis)(u))
              : n.current !== u && r((0, E.replaceYAxis)({ prev: n.current, next: u })),
            (n.current = u));
        }, [u, r]),
        (0, t.useLayoutEffect)(
          () => () => {
            n.current && (r((0, E.removeYAxis)(n.current)), (n.current = null));
          },
          [r]
        ),
        null
      );
    }
    function ei(e) {
      var { yAxisId: n, className: i, width: o, label: l } = e,
        u = (0, t.useRef)(null),
        c = (0, t.useRef)(null),
        s = (0, j.useAppSelector)(M.selectAxisViewBox),
        f = (0, k.useIsPanorama)(),
        p = (0, j.useAppDispatch)(),
        h = "yAxis",
        d = (0, j.useAppSelector)((e) => (0, _.selectYAxisSize)(e, n)),
        y = (0, j.useAppSelector)((e) => (0, _.selectYAxisPosition)(e, n)),
        v = (0, j.useAppSelector)((e) => (0, _.selectTicksOfAxis)(e, h, n, f)),
        g = (0, j.useAppSelector)((e) => (0, _.selectYAxisSettingsNoDefaults)(e, n));
      if (
        ((0, t.useLayoutEffect)(() => {
          if (
            !(
              "auto" !== o ||
              !d ||
              (0, a.isLabelContentAFunction)(l) ||
              (0, t.isValidElement)(l)
            ) &&
            null != g
          ) {
            var e = u.current;
            if (e) {
              var r = e.getCalculatedWidth();
              Math.round(d.width) !== Math.round(r) &&
                p((0, E.updateYAxisWidth)({ id: n, width: r }));
            }
          }
        }, [v, d, p, l, n, o, g]),
        null == d || null == y || null == g)
      )
        return null;
      var { dangerouslySetInnerHTML: m, ticks: b, scale: x } = e,
        w = er(e, Z),
        { id: O, scale: S } = g,
        P = er(g, Q);
      return t.createElement(
        A,
        J({}, w, P, {
          ref: u,
          labelRef: c,
          x: y.x,
          y: y.y,
          tickTextProps: "auto" === o ? { width: void 0 } : { width: o },
          width: d.width,
          height: d.height,
          className: (0, r.clsx)("recharts-".concat(h, " ").concat(h), i),
          viewBox: s,
          ticks: v,
          axisType: h,
        })
      );
    }
    var eo = {
        allowDataOverflow: _.implicitYAxis.allowDataOverflow,
        allowDecimals: _.implicitYAxis.allowDecimals,
        allowDuplicatedCategory: _.implicitYAxis.allowDuplicatedCategory,
        angle: _.implicitYAxis.angle,
        axisLine: x.axisLine,
        hide: !1,
        includeHidden: _.implicitYAxis.includeHidden,
        interval: _.implicitYAxis.interval,
        label: !1,
        minTickGap: _.implicitYAxis.minTickGap,
        mirror: _.implicitYAxis.mirror,
        orientation: _.implicitYAxis.orientation,
        padding: _.implicitYAxis.padding,
        reversed: _.implicitYAxis.reversed,
        scale: _.implicitYAxis.scale,
        tick: _.implicitYAxis.tick,
        tickCount: _.implicitYAxis.tickCount,
        tickLine: x.tickLine,
        tickSize: x.tickSize,
        type: _.implicitYAxis.type,
        width: _.implicitYAxis.width,
        yAxisId: 0,
      },
      ea = t.memo((e) => {
        var r = (0, p.resolveDefaultProps)(e, eo);
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(en, {
            interval: r.interval,
            id: r.yAxisId,
            scale: r.scale,
            type: r.type,
            domain: r.domain,
            allowDataOverflow: r.allowDataOverflow,
            dataKey: r.dataKey,
            allowDuplicatedCategory: r.allowDuplicatedCategory,
            allowDecimals: r.allowDecimals,
            tickCount: r.tickCount,
            padding: r.padding,
            includeHidden: r.includeHidden,
            reversed: r.reversed,
            ticks: r.ticks,
            width: r.width,
            orientation: r.orientation,
            mirror: r.mirror,
            hide: r.hide,
            unit: r.unit,
            name: r.name,
            angle: r.angle,
            minTickGap: r.minTickGap,
            tick: r.tick,
            tickFormatter: r.tickFormatter,
          }),
          t.createElement(ei, r)
        );
      }, L);
    ((ea.displayName = "YAxis"), e.s(["YAxis", () => ea], 26368));
  },
]);
