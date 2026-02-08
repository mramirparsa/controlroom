(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (t) => {
    "use strict";
    var e = t.i(62482),
      r = t.i(48612),
      s = t.i(2082);
    function i(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (u[3] = i),
            (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", { "data-slot": "card", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function n(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (u[3] = i),
            (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", { "data-slot": "card-header", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function a(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("leading-none font-semibold", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", { "data-slot": "card-title", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function o(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("text-muted-foreground text-sm", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", { "data-slot": "card-description", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function u(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i ? ((a = (0, s.cn)("px-6", i)), (u[3] = i), (u[4] = a)) : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", { "data-slot": "card-content", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    t.s([
      "Card",
      () => i,
      "CardContent",
      () => u,
      "CardDescription",
      () => o,
      "CardHeader",
      () => n,
      "CardTitle",
      () => a,
    ]);
  },
  76111,
  (t) => {
    "use strict";
    var e = t.i(62482),
      r = t.i(48612),
      s = t.i(8857),
      i = t.i(19546),
      n = t.i(2082);
    let a = (0, s.cva)(
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
    function o(t) {
      let s,
        o,
        u,
        l,
        c,
        h,
        d = (0, r.c)(13);
      d[0] !== t
        ? (({ className: s, variant: u, asChild: l, ...o } = t),
          (d[0] = t),
          (d[1] = s),
          (d[2] = o),
          (d[3] = u),
          (d[4] = l))
        : ((s = d[1]), (o = d[2]), (u = d[3]), (l = d[4]));
      let p = void 0 === u ? "default" : u,
        f = void 0 !== l && l ? i.Slot.Root : "span";
      return (
        d[5] !== s || d[6] !== p
          ? ((c = (0, n.cn)(a({ variant: p }), s)), (d[5] = s), (d[6] = p), (d[7] = c))
          : (c = d[7]),
        d[8] !== f || d[9] !== o || d[10] !== c || d[11] !== p
          ? ((h = (0, e.jsx)(f, { "data-slot": "badge", "data-variant": p, className: c, ...o })),
            (d[8] = f),
            (d[9] = o),
            (d[10] = c),
            (d[11] = p),
            (d[12] = h))
          : (h = d[12]),
        h
      );
    }
    t.s(["Badge", () => o]);
  },
  61156,
  (t) => {
    "use strict";
    var e = t.i(62482),
      r = t.i(48612),
      s = t.i(2082);
    function i(t) {
      let i,
        n,
        a,
        o,
        u,
        l = (0, r.c)(10);
      return (
        l[0] !== t
          ? (({ className: i, type: a, ...n } = t), (l[0] = t), (l[1] = i), (l[2] = n), (l[3] = a))
          : ((i = l[1]), (n = l[2]), (a = l[3])),
        l[4] !== i
          ? ((o = (0, s.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              i
            )),
            (l[4] = i),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== n || l[7] !== o || l[8] !== a
          ? ((u = (0, e.jsx)("input", { type: a, "data-slot": "input", className: o, ...n })),
            (l[6] = n),
            (l[7] = o),
            (l[8] = a),
            (l[9] = u))
          : (u = l[9]),
        u
      );
    }
    t.s(["Input", () => i]);
  },
  3021,
  (t) => {
    "use strict";
    let e;
    var r = t.i(70783),
      s = t.i(33634),
      i = t.i(44835),
      n = t.i(82778),
      a = t.i(76036),
      o = t.i(79553),
      u = t.i(44517),
      l = class extends n.Subscribable {
        constructor(t, e) {
          (super(),
            (this.options = e),
            (this.#t = t),
            (this.#e = null),
            (this.#r = (0, a.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(e));
        }
        #t;
        #s = void 0;
        #i = void 0;
        #n = void 0;
        #a;
        #o;
        #r;
        #e;
        #u;
        #l;
        #c;
        #h;
        #d;
        #p;
        #f = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            c(this.#s, this.options) ? this.#b() : this.updateResult(),
            this.#v());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return h(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return h(this.#s, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          ((this.listeners = new Set()), this.#m(), this.#y(), this.#s.removeObserver(this));
        }
        setOptions(t) {
          let e = this.options,
            r = this.#s;
          if (
            ((this.options = this.#t.defaultQueryOptions(t)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" != typeof (0, o.resolveEnabled)(this.options.enabled, this.#s))
          )
            throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
          (this.#g(),
            this.#s.setOptions(this.options),
            e._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, e) &&
              this.#t
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, e) && this.#b(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(e.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(e.staleTime, this.#s)) &&
              this.#R());
          let i = this.#x();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(e.enabled, this.#s) ||
              i !== this.#p) &&
            this.#O(i);
        }
        getOptimisticResult(t) {
          var e, r;
          let s = this.#t.getQueryCache().build(this.#t, t),
            i = this.createResult(s, t);
          return (
            (e = this),
            (r = i),
            (0, o.shallowEqualObjects)(e.getCurrentResult(), r) ||
              ((this.#n = i), (this.#o = this.options), (this.#a = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#n;
        }
        trackResult(t, e) {
          return new Proxy(t, {
            get: (t, r) => (
              this.trackProp(r),
              e?.(r),
              "promise" === r &&
                (this.trackProp("data"),
                this.options.experimental_prefetchInRender ||
                  "pending" !== this.#r.status ||
                  this.#r.reject(
                    Error("experimental_prefetchInRender feature flag is not enabled")
                  )),
              Reflect.get(t, r)
            ),
          });
        }
        trackProp(t) {
          this.#f.add(t);
        }
        getCurrentQuery() {
          return this.#s;
        }
        refetch({ ...t } = {}) {
          return this.fetch({ ...t });
        }
        fetchOptimistic(t) {
          let e = this.#t.defaultQueryOptions(t),
            r = this.#t.getQueryCache().build(this.#t, e);
          return r.fetch().then(() => this.createResult(r, e));
        }
        fetch(t) {
          return this.#b({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#n)
          );
        }
        #b(t) {
          this.#g();
          let e = this.#s.fetch(this.options, t);
          return (t?.throwOnError || (e = e.catch(o.noop)), e);
        }
        #R() {
          this.#m();
          let t = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#n.isStale || !(0, o.isValidTimeout)(t)) return;
          let e = (0, o.timeUntilStale)(this.#n.dataUpdatedAt, t);
          this.#h = u.timeoutManager.setTimeout(() => {
            this.#n.isStale || this.updateResult();
          }, e + 1);
        }
        #x() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #O(t) {
          (this.#y(),
            (this.#p = t),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = u.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#b();
              }, this.#p)));
        }
        #v() {
          (this.#R(), this.#O(this.#x()));
        }
        #m() {
          this.#h && (u.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #y() {
          this.#d && (u.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(t, e) {
          let r,
            s = this.#s,
            n = this.options,
            u = this.#n,
            l = this.#a,
            h = this.#o,
            f = t !== s ? t.state : this.#i,
            { state: b } = t,
            v = { ...b },
            m = !1;
          if (e._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && c(t, e),
              o = r && d(t, s, e, n);
            ((a || o) && (v = { ...v, ...(0, i.fetchState)(b.data, t.options) }),
              "isRestoring" === e._optimisticResults && (v.fetchStatus = "idle"));
          }
          let { error: y, errorUpdatedAt: g, status: R } = v;
          r = v.data;
          let x = !1;
          if (void 0 !== e.placeholderData && void 0 === r && "pending" === R) {
            let t;
            (u?.isPlaceholderData && e.placeholderData === h?.placeholderData
              ? ((t = u.data), (x = !0))
              : (t =
                  "function" == typeof e.placeholderData
                    ? e.placeholderData(this.#c?.state.data, this.#c)
                    : e.placeholderData),
              void 0 !== t && ((R = "success"), (r = (0, o.replaceData)(u?.data, t, e)), (m = !0)));
          }
          if (e.select && void 0 !== r && !x)
            if (u && r === l?.data && e.select === this.#u) r = this.#l;
            else
              try {
                ((this.#u = e.select),
                  (r = e.select(r)),
                  (r = (0, o.replaceData)(u?.data, r, e)),
                  (this.#l = r),
                  (this.#e = null));
              } catch (t) {
                this.#e = t;
              }
          this.#e && ((y = this.#e), (r = this.#l), (g = Date.now()), (R = "error"));
          let O = "fetching" === v.fetchStatus,
            Q = "pending" === R,
            T = "error" === R,
            w = Q && O,
            S = void 0 !== r,
            C = {
              status: R,
              fetchStatus: v.fetchStatus,
              isPending: Q,
              isSuccess: "success" === R,
              isError: T,
              isInitialLoading: w,
              isLoading: w,
              data: r,
              dataUpdatedAt: v.dataUpdatedAt,
              error: y,
              errorUpdatedAt: g,
              failureCount: v.fetchFailureCount,
              failureReason: v.fetchFailureReason,
              errorUpdateCount: v.errorUpdateCount,
              isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
              isFetchedAfterMount:
                v.dataUpdateCount > f.dataUpdateCount || v.errorUpdateCount > f.errorUpdateCount,
              isFetching: O,
              isRefetching: O && !Q,
              isLoadingError: T && !S,
              isPaused: "paused" === v.fetchStatus,
              isPlaceholderData: m,
              isRefetchError: T && S,
              isStale: p(t, e),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(e.enabled, t),
            };
          if (this.options.experimental_prefetchInRender) {
            let e = void 0 !== C.data,
              r = "error" === C.status && !e,
              i = (t) => {
                r ? t.reject(C.error) : e && t.resolve(C.data);
              },
              n = () => {
                i((this.#r = C.promise = (0, a.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                t.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || C.data !== o.value) && n();
                break;
              case "rejected":
                (r && C.error === o.reason) || n();
            }
          }
          return C;
        }
        updateResult() {
          let t = this.#n,
            e = this.createResult(this.#s, this.options);
          if (
            ((this.#a = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#a.data && (this.#c = this.#s),
            (0, o.shallowEqualObjects)(e, t))
          )
            return;
          this.#n = e;
          let r = () => {
            if (!t) return !0;
            let { notifyOnChangeProps: e } = this.options,
              r = "function" == typeof e ? e() : e;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#n).some((e) => this.#n[e] !== t[e] && s.has(e))
            );
          };
          this.#Q({ listeners: r() });
        }
        #g() {
          let t = this.#t.getQueryCache().build(this.#t, this.options);
          if (t === this.#s) return;
          let e = this.#s;
          ((this.#s = t),
            (this.#i = t.state),
            this.hasListeners() && (e?.removeObserver(this), t.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#v());
        }
        #Q(t) {
          s.notifyManager.batch(() => {
            (t.listeners &&
              this.listeners.forEach((t) => {
                t(this.#n);
              }),
              this.#t.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" }));
          });
        }
      };
    function c(t, e) {
      return (
        (!1 !== (0, o.resolveEnabled)(e.enabled, t) &&
          void 0 === t.state.data &&
          ("error" !== t.state.status || !1 !== e.retryOnMount)) ||
        (void 0 !== t.state.data && h(t, e, e.refetchOnMount))
      );
    }
    function h(t, e, r) {
      if (
        !1 !== (0, o.resolveEnabled)(e.enabled, t) &&
        "static" !== (0, o.resolveStaleTime)(e.staleTime, t)
      ) {
        let s = "function" == typeof r ? r(t) : r;
        return "always" === s || (!1 !== s && p(t, e));
      }
      return !1;
    }
    function d(t, e, r, s) {
      return (
        (t !== e || !1 === (0, o.resolveEnabled)(s.enabled, t)) &&
        (!r.suspense || "error" !== t.state.status) &&
        p(t, r)
      );
    }
    function p(t, e) {
      return (
        !1 !== (0, o.resolveEnabled)(e.enabled, t) &&
        t.isStaleByTime((0, o.resolveStaleTime)(e.staleTime, t))
      );
    }
    t.i(89283);
    var f = t.i(34706),
      b = t.i(77606);
    t.i(62482);
    var v = f.createContext(
        ((e = !1),
        {
          clearReset: () => {
            e = !1;
          },
          reset: () => {
            e = !0;
          },
          isReset: () => e,
        })
      ),
      m = f.createContext(!1);
    m.Provider;
    var y = (t, e, r) =>
      e.fetchOptimistic(t).catch(() => {
        r.clearReset();
      });
    function g(t, e) {
      return (function (t, e, r) {
        let i,
          n = f.useContext(m),
          a = f.useContext(v),
          u = (0, b.useQueryClient)(r),
          l = u.defaultQueryOptions(t);
        u.getDefaultOptions().queries?._experimental_beforeQuery?.(l);
        let c = u.getQueryCache().get(l.queryHash);
        if (((l._optimisticResults = n ? "isRestoring" : "optimistic"), l.suspense)) {
          let t = (t) => ("static" === t ? t : Math.max(t ?? 1e3, 1e3)),
            e = l.staleTime;
          ((l.staleTime = "function" == typeof e ? (...r) => t(e(...r)) : t(e)),
            "number" == typeof l.gcTime && (l.gcTime = Math.max(l.gcTime, 1e3)));
        }
        ((i =
          c?.state.error && "function" == typeof l.throwOnError
            ? (0, o.shouldThrowError)(l.throwOnError, [c.state.error, c])
            : l.throwOnError),
          (l.suspense || l.experimental_prefetchInRender || i) &&
            !a.isReset() &&
            (l.retryOnMount = !1),
          f.useEffect(() => {
            a.clearReset();
          }, [a]));
        let h = !u.getQueryCache().get(l.queryHash),
          [d] = f.useState(() => new e(u, l)),
          p = d.getOptimisticResult(l),
          g = !n && !1 !== t.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (t) => {
                let e = g ? d.subscribe(s.notifyManager.batchCalls(t)) : o.noop;
                return (d.updateResult(), e);
              },
              [d, g]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          f.useEffect(() => {
            d.setOptions(l);
          }, [l, d]),
          l?.suspense && p.isPending)
        )
          throw y(l, d, a);
        if (
          (({ result: t, errorResetBoundary: e, throwOnError: r, query: s, suspense: i }) =>
            t.isError &&
            !e.isReset() &&
            !t.isFetching &&
            s &&
            ((i && void 0 === t.data) || (0, o.shouldThrowError)(r, [t.error, s])))({
            result: p,
            errorResetBoundary: a,
            throwOnError: l.throwOnError,
            query: c,
            suspense: l.suspense,
          })
        )
          throw p.error;
        if (
          (u.getDefaultOptions().queries?._experimental_afterQuery?.(l, p),
          l.experimental_prefetchInRender && !o.isServer && p.isLoading && p.isFetching && !n)
        ) {
          let t = h ? y(l, d, a) : c?.promise;
          t?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return l.notifyOnChangeProps ? p : d.trackResult(p);
      })(t, l, e);
    }
    t.s(["useQuery", () => g], 3021);
  },
  59115,
  (t) => {
    "use strict";
    var e = t.i(62482),
      r = t.i(48612),
      s = t.i(2082);
    function i(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("w-full caption-bottom text-sm", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("div", {
              "data-slot": "table-container",
              className: "relative w-full overflow-x-auto",
              children: (0, e.jsx)("table", { "data-slot": "table", className: a, ...n }),
            })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function n(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i ? ((a = (0, s.cn)("[&_tr]:border-b", i)), (u[3] = i), (u[4] = a)) : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("thead", { "data-slot": "table-header", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function a(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("[&_tr:last-child]:border-0", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("tbody", { "data-slot": "table-body", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function o(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)(
              "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
              i
            )),
            (u[3] = i),
            (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("tr", { "data-slot": "table-row", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function u(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)(
              "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (u[3] = i),
            (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("th", { "data-slot": "table-head", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function l(t) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== t
          ? (({ className: i, ...n } = t), (u[0] = t), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)(
              "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (u[3] = i),
            (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, e.jsx)("td", { "data-slot": "table-cell", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    t.s([
      "Table",
      () => i,
      "TableBody",
      () => a,
      "TableCell",
      () => l,
      "TableHead",
      () => u,
      "TableHeader",
      () => n,
      "TableRow",
      () => o,
    ]);
  },
  68315,
  (t) => {
    "use strict";
    var e = t.i(34706),
      r = t.i(9501),
      s = t.i(33634),
      i = t.i(82778),
      n = t.i(79553),
      a = class extends i.Subscribable {
        #t;
        #n = void 0;
        #T;
        #w;
        constructor(t, e) {
          (super(), (this.#t = t), this.setOptions(e), this.bindMethods(), this.#S());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
        }
        setOptions(t) {
          let e = this.options;
          ((this.options = this.#t.defaultMutationOptions(t)),
            (0, n.shallowEqualObjects)(this.options, e) ||
              this.#t
                .getMutationCache()
                .notify({ type: "observerOptionsUpdated", mutation: this.#T, observer: this }),
            e?.mutationKey &&
            this.options.mutationKey &&
            (0, n.hashKey)(e.mutationKey) !== (0, n.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#T?.state.status === "pending" && this.#T.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#T?.removeObserver(this);
        }
        onMutationUpdate(t) {
          (this.#S(), this.#Q(t));
        }
        getCurrentResult() {
          return this.#n;
        }
        reset() {
          (this.#T?.removeObserver(this), (this.#T = void 0), this.#S(), this.#Q());
        }
        mutate(t, e) {
          return (
            (this.#w = e),
            this.#T?.removeObserver(this),
            (this.#T = this.#t.getMutationCache().build(this.#t, this.options)),
            this.#T.addObserver(this),
            this.#T.execute(t)
          );
        }
        #S() {
          let t = this.#T?.state ?? (0, r.getDefaultState)();
          this.#n = {
            ...t,
            isPending: "pending" === t.status,
            isSuccess: "success" === t.status,
            isError: "error" === t.status,
            isIdle: "idle" === t.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #Q(t) {
          s.notifyManager.batch(() => {
            if (this.#w && this.hasListeners()) {
              let e = this.#n.variables,
                r = this.#n.context,
                s = {
                  client: this.#t,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (t?.type === "success") {
                try {
                  this.#w.onSuccess?.(t.data, e, r, s);
                } catch (t) {
                  Promise.reject(t);
                }
                try {
                  this.#w.onSettled?.(t.data, null, e, r, s);
                } catch (t) {
                  Promise.reject(t);
                }
              } else if (t?.type === "error") {
                try {
                  this.#w.onError?.(t.error, e, r, s);
                } catch (t) {
                  Promise.reject(t);
                }
                try {
                  this.#w.onSettled?.(void 0, t.error, e, r, s);
                } catch (t) {
                  Promise.reject(t);
                }
              }
            }
            this.listeners.forEach((t) => {
              t(this.#n);
            });
          });
        }
      },
      o = t.i(77606);
    function u(t, r) {
      let i = (0, o.useQueryClient)(r),
        [u] = e.useState(() => new a(i, t));
      e.useEffect(() => {
        u.setOptions(t);
      }, [u, t]);
      let l = e.useSyncExternalStore(
          e.useCallback((t) => u.subscribe(s.notifyManager.batchCalls(t)), [u]),
          () => u.getCurrentResult(),
          () => u.getCurrentResult()
        ),
        c = e.useCallback(
          (t, e) => {
            u.mutate(t, e).catch(n.noop);
          },
          [u]
        );
      if (l.error && (0, n.shouldThrowError)(u.options.throwOnError, [l.error])) throw l.error;
      return { ...l, mutate: c, mutateAsync: l.mutate };
    }
    t.s(["useMutation", () => u], 68315);
  },
]);
