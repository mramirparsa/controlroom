(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39781,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(2082);
    function i(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (l[3] = i),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", { "data-slot": "card", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function a(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (l[3] = i),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-header", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function n(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)("leading-none font-semibold", i)), (l[3] = i), (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-title", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function o(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)("text-muted-foreground text-sm", i)), (l[3] = i), (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-description", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function l(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i ? ((n = (0, s.cn)("px-6", i)), (l[3] = i), (l[4] = n)) : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-content", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    e.s([
      "Card",
      () => i,
      "CardContent",
      () => l,
      "CardDescription",
      () => o,
      "CardHeader",
      () => a,
      "CardTitle",
      () => n,
    ]);
  },
  76111,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(8857),
      i = e.i(19546),
      a = e.i(2082);
    let n = (0, s.cva)(
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
    function o(e) {
      let s,
        o,
        l,
        u,
        c,
        h,
        d = (0, r.c)(13);
      d[0] !== e
        ? (({ className: s, variant: l, asChild: u, ...o } = e),
          (d[0] = e),
          (d[1] = s),
          (d[2] = o),
          (d[3] = l),
          (d[4] = u))
        : ((s = d[1]), (o = d[2]), (l = d[3]), (u = d[4]));
      let p = void 0 === l ? "default" : l,
        f = void 0 !== u && u ? i.Slot.Root : "span";
      return (
        d[5] !== s || d[6] !== p
          ? ((c = (0, a.cn)(n({ variant: p }), s)), (d[5] = s), (d[6] = p), (d[7] = c))
          : (c = d[7]),
        d[8] !== f || d[9] !== o || d[10] !== c || d[11] !== p
          ? ((h = (0, t.jsx)(f, { "data-slot": "badge", "data-variant": p, className: c, ...o })),
            (d[8] = f),
            (d[9] = o),
            (d[10] = c),
            (d[11] = p),
            (d[12] = h))
          : (h = d[12]),
        h
      );
    }
    e.s(["Badge", () => o]);
  },
  61156,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(2082);
    function i(e) {
      let i,
        a,
        n,
        o,
        l,
        u = (0, r.c)(10);
      return (
        u[0] !== e
          ? (({ className: i, type: n, ...a } = e), (u[0] = e), (u[1] = i), (u[2] = a), (u[3] = n))
          : ((i = u[1]), (a = u[2]), (n = u[3])),
        u[4] !== i
          ? ((o = (0, s.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              i
            )),
            (u[4] = i),
            (u[5] = o))
          : (o = u[5]),
        u[6] !== a || u[7] !== o || u[8] !== n
          ? ((l = (0, t.jsx)("input", { type: n, "data-slot": "input", className: o, ...a })),
            (u[6] = a),
            (u[7] = o),
            (u[8] = n),
            (u[9] = l))
          : (l = u[9]),
        l
      );
    }
    e.s(["Input", () => i]);
  },
  3021,
  (e) => {
    "use strict";
    let t;
    var r = e.i(70783),
      s = e.i(33634),
      i = e.i(44835),
      a = e.i(82778),
      n = e.i(76036),
      o = e.i(79553),
      l = e.i(44517),
      u = class extends a.Subscribable {
        constructor(e, t) {
          (super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, n.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t));
        }
        #e;
        #s = void 0;
        #i = void 0;
        #a = void 0;
        #n;
        #o;
        #r;
        #t;
        #l;
        #u;
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
            this.#m());
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
          ((this.listeners = new Set()), this.#v(), this.#y(), this.#s.removeObserver(this));
        }
        setOptions(e) {
          let t = this.options,
            r = this.#s;
          if (
            ((this.options = this.#e.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" != typeof (0, o.resolveEnabled)(this.options.enabled, this.#s))
          )
            throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
          (this.#x(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, t) && this.#b(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#g());
          let i = this.#R();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#w(i);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            i = this.createResult(s, e);
          return (
            (t = this),
            (r = i),
            (0, o.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#a = i), (this.#o = this.options), (this.#n = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#a;
        }
        trackResult(e, t) {
          return new Proxy(e, {
            get: (e, r) => (
              this.trackProp(r),
              t?.(r),
              "promise" === r &&
                (this.trackProp("data"),
                this.options.experimental_prefetchInRender ||
                  "pending" !== this.#r.status ||
                  this.#r.reject(
                    Error("experimental_prefetchInRender feature flag is not enabled")
                  )),
              Reflect.get(e, r)
            ),
          });
        }
        trackProp(e) {
          this.#f.add(e);
        }
        getCurrentQuery() {
          return this.#s;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#e.defaultQueryOptions(e),
            r = this.#e.getQueryCache().build(this.#e, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#b({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#a)
          );
        }
        #b(e) {
          this.#x();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #g() {
          this.#v();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#a.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = l.timeoutManager.setTimeout(() => {
            this.#a.isStale || this.updateResult();
          }, t + 1);
        }
        #R() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #w(e) {
          (this.#y(),
            (this.#p = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = l.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#b();
              }, this.#p)));
        }
        #m() {
          (this.#g(), this.#w(this.#R()));
        }
        #v() {
          this.#h && (l.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #y() {
          this.#d && (l.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            a = this.options,
            l = this.#a,
            u = this.#n,
            h = this.#o,
            f = e !== s ? e.state : this.#i,
            { state: b } = e,
            m = { ...b },
            v = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && c(e, t),
              o = r && d(e, s, t, a);
            ((n || o) && (m = { ...m, ...(0, i.fetchState)(b.data, e.options) }),
              "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle"));
          }
          let { error: y, errorUpdatedAt: x, status: g } = m;
          r = m.data;
          let R = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (l?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = l.data), (R = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, o.replaceData)(l?.data, e, t)), (v = !0)));
          }
          if (t.select && void 0 !== r && !R)
            if (l && r === u?.data && t.select === this.#l) r = this.#u;
            else
              try {
                ((this.#l = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(l?.data, r, t)),
                  (this.#u = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((y = this.#t), (r = this.#u), (x = Date.now()), (g = "error"));
          let w = "fetching" === m.fetchStatus,
            j = "pending" === g,
            T = "error" === g,
            S = j && w,
            C = void 0 !== r,
            O = {
              status: g,
              fetchStatus: m.fetchStatus,
              isPending: j,
              isSuccess: "success" === g,
              isError: T,
              isInitialLoading: S,
              isLoading: S,
              data: r,
              dataUpdatedAt: m.dataUpdatedAt,
              error: y,
              errorUpdatedAt: x,
              failureCount: m.fetchFailureCount,
              failureReason: m.fetchFailureReason,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount:
                m.dataUpdateCount > f.dataUpdateCount || m.errorUpdateCount > f.errorUpdateCount,
              isFetching: w,
              isRefetching: w && !j,
              isLoadingError: T && !C,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: v,
              isRefetchError: T && C,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== O.data,
              r = "error" === O.status && !t,
              i = (e) => {
                r ? e.reject(O.error) : t && e.resolve(O.data);
              },
              a = () => {
                i((this.#r = O.promise = (0, n.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || O.data !== o.value) && a();
                break;
              case "rejected":
                (r && O.error === o.reason) || a();
            }
          }
          return O;
        }
        updateResult() {
          let e = this.#a,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#n = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#n.data && (this.#c = this.#s),
            (0, o.shallowEqualObjects)(t, e))
          )
            return;
          this.#a = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#a).some((t) => this.#a[t] !== e[t] && s.has(t))
            );
          };
          this.#j({ listeners: r() });
        }
        #x() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          ((this.#s = e),
            (this.#i = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#m());
        }
        #j(e) {
          s.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#a);
              }),
              this.#e.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" }));
          });
        }
      };
    function c(e, t) {
      return (
        (!1 !== (0, o.resolveEnabled)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
        (void 0 !== e.state.data && h(e, t, t.refetchOnMount))
      );
    }
    function h(e, t, r) {
      if (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, o.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && p(e, t));
      }
      return !1;
    }
    function d(e, t, r, s) {
      return (
        (e !== t || !1 === (0, o.resolveEnabled)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        p(e, r)
      );
    }
    function p(e, t) {
      return (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        e.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(89283);
    var f = e.i(34706),
      b = e.i(77606);
    e.i(62482);
    var m = f.createContext(
        ((t = !1),
        {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        })
      ),
      v = f.createContext(!1);
    v.Provider;
    var y = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function x(e, t) {
      return (function (e, t, r) {
        let i,
          a = f.useContext(v),
          n = f.useContext(m),
          l = (0, b.useQueryClient)(r),
          u = l.defaultQueryOptions(e);
        l.getDefaultOptions().queries?._experimental_beforeQuery?.(u);
        let c = l.getQueryCache().get(u.queryHash);
        if (((u._optimisticResults = a ? "isRestoring" : "optimistic"), u.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = u.staleTime;
          ((u.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof u.gcTime && (u.gcTime = Math.max(u.gcTime, 1e3)));
        }
        ((i =
          c?.state.error && "function" == typeof u.throwOnError
            ? (0, o.shouldThrowError)(u.throwOnError, [c.state.error, c])
            : u.throwOnError),
          (u.suspense || u.experimental_prefetchInRender || i) &&
            !n.isReset() &&
            (u.retryOnMount = !1),
          f.useEffect(() => {
            n.clearReset();
          }, [n]));
        let h = !l.getQueryCache().get(u.queryHash),
          [d] = f.useState(() => new t(l, u)),
          p = d.getOptimisticResult(u),
          x = !a && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = x ? d.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (d.updateResult(), t);
              },
              [d, x]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          f.useEffect(() => {
            d.setOptions(u);
          }, [u, d]),
          u?.suspense && p.isPending)
        )
          throw y(u, d, n);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
            result: p,
            errorResetBoundary: n,
            throwOnError: u.throwOnError,
            query: c,
            suspense: u.suspense,
          })
        )
          throw p.error;
        if (
          (l.getDefaultOptions().queries?._experimental_afterQuery?.(u, p),
          u.experimental_prefetchInRender && !o.isServer && p.isLoading && p.isFetching && !a)
        ) {
          let e = h ? y(u, d, n) : c?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return u.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, u, t);
    }
    e.s(["useQuery", () => x], 3021);
  },
  59115,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(2082);
    function i(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)("w-full caption-bottom text-sm", i)), (l[3] = i), (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("div", {
              "data-slot": "table-container",
              className: "relative w-full overflow-x-auto",
              children: (0, t.jsx)("table", { "data-slot": "table", className: n, ...a }),
            })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function a(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i ? ((n = (0, s.cn)("[&_tr]:border-b", i)), (l[3] = i), (l[4] = n)) : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("thead", { "data-slot": "table-header", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function n(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)("[&_tr:last-child]:border-0", i)), (l[3] = i), (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("tbody", { "data-slot": "table-body", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function o(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)(
              "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
              i
            )),
            (l[3] = i),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("tr", { "data-slot": "table-row", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function l(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)(
              "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (l[3] = i),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("th", { "data-slot": "table-head", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function u(e) {
      let i,
        a,
        n,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...a } = e), (l[0] = e), (l[1] = i), (l[2] = a))
          : ((i = l[1]), (a = l[2])),
        l[3] !== i
          ? ((n = (0, s.cn)(
              "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (l[3] = i),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== a || l[6] !== n
          ? ((o = (0, t.jsx)("td", { "data-slot": "table-cell", className: n, ...a })),
            (l[5] = a),
            (l[6] = n),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    e.s([
      "Table",
      () => i,
      "TableBody",
      () => n,
      "TableCell",
      () => u,
      "TableHead",
      () => l,
      "TableHeader",
      () => a,
      "TableRow",
      () => o,
    ]);
  },
  68315,
  (e) => {
    "use strict";
    var t = e.i(34706),
      r = e.i(9501),
      s = e.i(33634),
      i = e.i(82778),
      a = e.i(79553),
      n = class extends i.Subscribable {
        #e;
        #a = void 0;
        #T;
        #S;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#C());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
        }
        setOptions(e) {
          let t = this.options;
          ((this.options = this.#e.defaultMutationOptions(e)),
            (0, a.shallowEqualObjects)(this.options, t) ||
              this.#e
                .getMutationCache()
                .notify({ type: "observerOptionsUpdated", mutation: this.#T, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, a.hashKey)(t.mutationKey) !== (0, a.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#T?.state.status === "pending" && this.#T.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#T?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#C(), this.#j(e));
        }
        getCurrentResult() {
          return this.#a;
        }
        reset() {
          (this.#T?.removeObserver(this), (this.#T = void 0), this.#C(), this.#j());
        }
        mutate(e, t) {
          return (
            (this.#S = t),
            this.#T?.removeObserver(this),
            (this.#T = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#T.addObserver(this),
            this.#T.execute(e)
          );
        }
        #C() {
          let e = this.#T?.state ?? (0, r.getDefaultState)();
          this.#a = {
            ...e,
            isPending: "pending" === e.status,
            isSuccess: "success" === e.status,
            isError: "error" === e.status,
            isIdle: "idle" === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #j(e) {
          s.notifyManager.batch(() => {
            if (this.#S && this.hasListeners()) {
              let t = this.#a.variables,
                r = this.#a.context,
                s = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#S.onSuccess?.(e.data, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#S.onSettled?.(e.data, null, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#S.onError?.(e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#S.onSettled?.(void 0, e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              }
            }
            this.listeners.forEach((e) => {
              e(this.#a);
            });
          });
        }
      },
      o = e.i(77606);
    function l(e, r) {
      let i = (0, o.useQueryClient)(r),
        [l] = t.useState(() => new n(i, e));
      t.useEffect(() => {
        l.setOptions(e);
      }, [l, e]);
      let u = t.useSyncExternalStore(
          t.useCallback((e) => l.subscribe(s.notifyManager.batchCalls(e)), [l]),
          () => l.getCurrentResult(),
          () => l.getCurrentResult()
        ),
        c = t.useCallback(
          (e, t) => {
            l.mutate(e, t).catch(a.noop);
          },
          [l]
        );
      if (u.error && (0, a.shouldThrowError)(l.options.throwOnError, [u.error])) throw u.error;
      return { ...u, mutate: c, mutateAsync: u.mutate };
    }
    e.s(["useMutation", () => l], 68315);
  },
  49164,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(34706),
      i = e.i(68315),
      a = e.i(3021),
      n = e.i(77606),
      o = e.i(32103),
      l = e.i(22991),
      u = e.i(39781),
      c = e.i(61156),
      h = e.i(76111),
      d = e.i(59115);
    function p() {
      let e,
        p,
        x,
        g,
        R,
        w,
        j,
        T,
        S,
        C,
        O,
        Q,
        E,
        I,
        k,
        N,
        M,
        _,
        D,
        F,
        P,
        U,
        q,
        H,
        K,
        L,
        B,
        A,
        z,
        W = (0, r.c)(58),
        V = (0, n.useQueryClient)(),
        [$, J] = (0, s.useState)("kanban"),
        [G, X] = (0, s.useState)(""),
        [Y, Z] = (0, s.useState)(""),
        [ee, et] = (0, s.useState)("");
      W[0] !== ee || W[1] !== G || W[2] !== Y
        ? ((e = {
            queryKey: ["tasks", G, Y, ee],
            queryFn: async () => {
              let e = new URLSearchParams({ page: "1", pageSize: "60" });
              (G && e.set("q", G), Y && e.set("status", Y), ee && e.set("priority", ee));
              let t = await (0, o.apiClient)(`/api/tasks?${e}`);
              if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to load tasks");
              return t.data.items;
            },
          }),
          (W[0] = ee),
          (W[1] = G),
          (W[2] = Y),
          (W[3] = e))
        : (e = W[3]);
      let { data: er, isLoading: es, isError: ei, refetch: ea } = (0, a.useQuery)(e);
      W[4] !== V
        ? ((p = { mutationFn: y, onSuccess: () => V.invalidateQueries({ queryKey: ["tasks"] }) }),
          (W[4] = V),
          (W[5] = p))
        : (p = W[5]);
      let en = (0, i.useMutation)(p);
      W[6] !== er ? ((x = er?.filter(v) ?? []), (W[6] = er), (W[7] = x)) : (x = W[7]);
      let eo = x;
      W[8] !== er ? ((g = er?.filter(m) ?? []), (W[8] = er), (W[9] = g)) : (g = W[9]);
      let el = g;
      W[10] !== er ? ((R = er?.filter(b) ?? []), (W[10] = er), (W[11] = R)) : (R = W[11]);
      let eu = R;
      W[12] !== el || W[13] !== eu || W[14] !== eo
        ? ((w = { todo: eo, doing: el, done: eu }),
          (W[12] = el),
          (W[13] = eu),
          (W[14] = eo),
          (W[15] = w))
        : (w = W[15]);
      let ec = w;
      (W[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(u.CardTitle, { children: "Tasks" }),
              (0, t.jsx)("p", {
                className: "text-sm text-white/60",
                children: "Kanban + list views with live updates.",
              }),
            ],
          })),
          (W[16] = j))
        : (j = W[16]),
        W[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (e) => X(e.target.value)), (W[17] = T))
          : (T = W[17]),
        W[18] !== G
          ? ((S = (0, t.jsx)(c.Input, {
              placeholder: "Search tasks...",
              value: G,
              onChange: T,
              className: "w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40",
            })),
            (W[18] = G),
            (W[19] = S))
          : (S = W[19]),
        W[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (e) => Z(e.target.value)),
            (C = (0, t.jsx)("option", { value: "", children: "All statuses" })),
            (O = (0, t.jsx)("option", { value: "todo", children: "todo" })),
            (Q = (0, t.jsx)("option", { value: "doing", children: "doing" })),
            (E = (0, t.jsx)("option", { value: "done", children: "done" })),
            (W[20] = C),
            (W[21] = O),
            (W[22] = Q),
            (W[23] = E),
            (W[24] = I))
          : ((C = W[20]), (O = W[21]), (Q = W[22]), (E = W[23]), (I = W[24])),
        W[25] !== Y
          ? ((k = (0, t.jsxs)("select", {
              className: "h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
              value: Y,
              onChange: I,
              children: [C, O, Q, E],
            })),
            (W[25] = Y),
            (W[26] = k))
          : (k = W[26]),
        W[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (e) => et(e.target.value)),
            (M = (0, t.jsx)("option", { value: "", children: "All priorities" })),
            (_ = (0, t.jsx)("option", { value: "low", children: "low" })),
            (D = (0, t.jsx)("option", { value: "medium", children: "medium" })),
            (F = (0, t.jsx)("option", { value: "high", children: "high" })),
            (P = (0, t.jsx)("option", { value: "urgent", children: "urgent" })),
            (W[27] = N),
            (W[28] = M),
            (W[29] = _),
            (W[30] = D),
            (W[31] = F),
            (W[32] = P))
          : ((N = W[27]), (M = W[28]), (_ = W[29]), (D = W[30]), (F = W[31]), (P = W[32])),
        W[33] !== ee
          ? ((U = (0, t.jsxs)("select", {
              className: "h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
              value: ee,
              onChange: N,
              children: [M, _, D, F, P],
            })),
            (W[33] = ee),
            (W[34] = U))
          : (U = W[34]));
      let eh = "kanban" === $ ? "secondary" : "outline";
      (W[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = () => J("kanban")), (W[35] = q))
        : (q = W[35]),
        W[36] !== eh
          ? ((H = (0, t.jsx)(l.Button, {
              variant: eh,
              className: "border-white/10 text-white",
              onClick: q,
              children: "Kanban",
            })),
            (W[36] = eh),
            (W[37] = H))
          : (H = W[37]));
      let ed = "list" === $ ? "secondary" : "outline";
      return (
        W[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = () => J("list")), (W[38] = K))
          : (K = W[38]),
        W[39] !== ed
          ? ((L = (0, t.jsx)(l.Button, {
              variant: ed,
              className: "border-white/10 text-white",
              onClick: K,
              children: "List",
            })),
            (W[39] = ed),
            (W[40] = L))
          : (L = W[40]),
        W[41] !== k || W[42] !== U || W[43] !== H || W[44] !== L || W[45] !== S
          ? ((B = (0, t.jsxs)(u.CardHeader, {
              className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
              children: [
                j,
                (0, t.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [S, k, U, H, L],
                }),
              ],
            })),
            (W[41] = k),
            (W[42] = U),
            (W[43] = H),
            (W[44] = L),
            (W[45] = S),
            (W[46] = B))
          : (B = W[46]),
        W[47] !== er ||
        W[48] !== ec ||
        W[49] !== ei ||
        W[50] !== es ||
        W[51] !== ea ||
        W[52] !== en ||
        W[53] !== $
          ? ((A = (0, t.jsx)(u.CardContent, {
              children: es
                ? (0, t.jsx)("div", {
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                    children: "Loading tasks...",
                  })
                : ei
                  ? (0, t.jsxs)("div", {
                      className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                      children: [
                        (0, t.jsx)("p", {
                          className: "text-lg font-semibold",
                          children: "Failed to load tasks",
                        }),
                        (0, t.jsx)(l.Button, {
                          className: "mt-4",
                          onClick: () => ea(),
                          children: "Retry",
                        }),
                      ],
                    })
                  : "kanban" === $
                    ? (0, t.jsx)("div", {
                        className: "grid gap-4 md:grid-cols-3",
                        children: ["todo", "doing", "done"].map((e) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              className: "rounded-xl border border-white/10 bg-white/5 p-4",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "mb-3 flex items-center justify-between",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold capitalize",
                                      children: e,
                                    }),
                                    (0, t.jsx)(h.Badge, {
                                      variant: "secondary",
                                      className: "bg-white/10 text-white",
                                      children: ec[e].length,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: "space-y-3",
                                  children: ec[e].map((e) =>
                                    (0, t.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "rounded-lg border border-white/10 bg-slate-950/60 p-3",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-sm font-medium",
                                            children: e.title,
                                          }),
                                          (0, t.jsxs)("p", {
                                            className: "text-xs text-white/60",
                                            children: [e.priority, " priority"],
                                          }),
                                          (0, t.jsxs)("select", {
                                            className:
                                              "mt-3 h-7 rounded-md border border-white/10 bg-slate-950/60 px-2 text-xs",
                                            value: e.status,
                                            onChange: (t) =>
                                              en.mutate({
                                                id: e.id,
                                                patch: { status: t.target.value },
                                              }),
                                            children: [
                                              (0, t.jsx)("option", {
                                                value: "todo",
                                                children: "todo",
                                              }),
                                              (0, t.jsx)("option", {
                                                value: "doing",
                                                children: "doing",
                                              }),
                                              (0, t.jsx)("option", {
                                                value: "done",
                                                children: "done",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            },
                            e
                          )
                        ),
                      })
                    : (0, t.jsx)("div", {
                        className: "rounded-xl border border-white/10",
                        children: (0, t.jsxs)(d.Table, {
                          children: [
                            (0, t.jsx)(d.TableHeader, {
                              children: (0, t.jsxs)(d.TableRow, {
                                children: [
                                  (0, t.jsx)(d.TableHead, { children: "Title" }),
                                  (0, t.jsx)(d.TableHead, { children: "Status" }),
                                  (0, t.jsx)(d.TableHead, { children: "Priority" }),
                                  (0, t.jsx)(d.TableHead, { children: "Due" }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(d.TableBody, { children: er?.map(f) }),
                          ],
                        }),
                      }),
            })),
            (W[47] = er),
            (W[48] = ec),
            (W[49] = ei),
            (W[50] = es),
            (W[51] = ea),
            (W[52] = en),
            (W[53] = $),
            (W[54] = A))
          : (A = W[54]),
        W[55] !== B || W[56] !== A
          ? ((z = (0, t.jsxs)(u.Card, {
              className: "border-white/10 bg-white/5",
              children: [B, A],
            })),
            (W[55] = B),
            (W[56] = A),
            (W[57] = z))
          : (z = W[57]),
        z
      );
    }
    function f(e) {
      return (0, t.jsxs)(
        d.TableRow,
        {
          children: [
            (0, t.jsx)(d.TableCell, { className: "font-medium", children: e.title }),
            (0, t.jsx)(d.TableCell, { className: "capitalize", children: e.status }),
            (0, t.jsx)(d.TableCell, { className: "capitalize", children: e.priority }),
            (0, t.jsx)(d.TableCell, {
              children: e.dueDate ? new Date(e.dueDate).toLocaleDateString() : "-",
            }),
          ],
        },
        e.id
      );
    }
    function b(e) {
      return "done" === e.status;
    }
    function m(e) {
      return "doing" === e.status;
    }
    function v(e) {
      return "todo" === e.status;
    }
    async function y(e) {
      let t = await (0, o.apiClient)(`/api/tasks/${e.id}`, {
        method: "PATCH",
        body: JSON.stringify(e.patch),
      });
      if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to update task");
      return t.data.task;
    }
    e.s(["default", () => p]);
  },
]);
