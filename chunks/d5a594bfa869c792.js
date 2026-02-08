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
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== e
          ? (({ className: i, ...n } = e), (u[0] = e), (u[1] = i), (u[2] = n))
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
          ? ((o = (0, t.jsx)("div", { "data-slot": "card", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function n(e) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== e
          ? (({ className: i, ...n } = e), (u[0] = e), (u[1] = i), (u[2] = n))
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
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-header", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function a(e) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== e
          ? (({ className: i, ...n } = e), (u[0] = e), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("leading-none font-semibold", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-title", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function o(e) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== e
          ? (({ className: i, ...n } = e), (u[0] = e), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i
          ? ((a = (0, s.cn)("text-muted-foreground text-sm", i)), (u[3] = i), (u[4] = a))
          : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-description", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    function u(e) {
      let i,
        n,
        a,
        o,
        u = (0, r.c)(8);
      return (
        u[0] !== e
          ? (({ className: i, ...n } = e), (u[0] = e), (u[1] = i), (u[2] = n))
          : ((i = u[1]), (n = u[2])),
        u[3] !== i ? ((a = (0, s.cn)("px-6", i)), (u[3] = i), (u[4] = a)) : (a = u[4]),
        u[5] !== n || u[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-content", className: a, ...n })),
            (u[5] = n),
            (u[6] = a),
            (u[7] = o))
          : (o = u[7]),
        o
      );
    }
    e.s([
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
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(8857),
      i = e.i(19546),
      n = e.i(2082);
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
    function o(e) {
      let s,
        o,
        u,
        l,
        c,
        h,
        d = (0, r.c)(13);
      d[0] !== e
        ? (({ className: s, variant: u, asChild: l, ...o } = e),
          (d[0] = e),
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
  3021,
  (e) => {
    "use strict";
    let t;
    var r = e.i(70783),
      s = e.i(33634),
      i = e.i(44835),
      n = e.i(82778),
      a = e.i(76036),
      o = e.i(79553),
      u = e.i(44517),
      l = class extends n.Subscribable {
        constructor(e, t) {
          (super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, a.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t));
        }
        #e;
        #s = void 0;
        #i = void 0;
        #n = void 0;
        #a;
        #o;
        #r;
        #t;
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
            c(this.#s, this.options) ? this.#v() : this.updateResult(),
            this.#b());
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
          ((this.listeners = new Set()), this.#y(), this.#R(), this.#s.removeObserver(this));
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
          (this.#g(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, t) && this.#v(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#m());
          let i = this.#Q();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#T(i);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            i = this.createResult(s, e);
          return (
            (t = this),
            (r = i),
            (0, o.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#n = i), (this.#o = this.options), (this.#a = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#n;
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
          return this.#v({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#n)
          );
        }
        #v(e) {
          this.#g();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #m() {
          this.#y();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#n.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#n.dataUpdatedAt, e);
          this.#h = u.timeoutManager.setTimeout(() => {
            this.#n.isStale || this.updateResult();
          }, t + 1);
        }
        #Q() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #T(e) {
          (this.#R(),
            (this.#p = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = u.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#v();
              }, this.#p)));
        }
        #b() {
          (this.#m(), this.#T(this.#Q()));
        }
        #y() {
          this.#h && (u.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #R() {
          this.#d && (u.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            n = this.options,
            u = this.#n,
            l = this.#a,
            h = this.#o,
            f = e !== s ? e.state : this.#i,
            { state: v } = e,
            b = { ...v },
            y = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && c(e, t),
              o = r && d(e, s, t, n);
            ((a || o) && (b = { ...b, ...(0, i.fetchState)(v.data, e.options) }),
              "isRestoring" === t._optimisticResults && (b.fetchStatus = "idle"));
          }
          let { error: R, errorUpdatedAt: g, status: m } = b;
          r = b.data;
          let Q = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === m) {
            let e;
            (u?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = u.data), (Q = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((m = "success"), (r = (0, o.replaceData)(u?.data, e, t)), (y = !0)));
          }
          if (t.select && void 0 !== r && !Q)
            if (u && r === l?.data && t.select === this.#u) r = this.#l;
            else
              try {
                ((this.#u = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(u?.data, r, t)),
                  (this.#l = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((R = this.#t), (r = this.#l), (g = Date.now()), (m = "error"));
          let T = "fetching" === b.fetchStatus,
            x = "pending" === m,
            I = "error" === m,
            S = x && T,
            O = void 0 !== r,
            E = {
              status: m,
              fetchStatus: b.fetchStatus,
              isPending: x,
              isSuccess: "success" === m,
              isError: I,
              isInitialLoading: S,
              isLoading: S,
              data: r,
              dataUpdatedAt: b.dataUpdatedAt,
              error: R,
              errorUpdatedAt: g,
              failureCount: b.fetchFailureCount,
              failureReason: b.fetchFailureReason,
              errorUpdateCount: b.errorUpdateCount,
              isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
              isFetchedAfterMount:
                b.dataUpdateCount > f.dataUpdateCount || b.errorUpdateCount > f.errorUpdateCount,
              isFetching: T,
              isRefetching: T && !x,
              isLoadingError: I && !O,
              isPaused: "paused" === b.fetchStatus,
              isPlaceholderData: y,
              isRefetchError: I && O,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== E.data,
              r = "error" === E.status && !t,
              i = (e) => {
                r ? e.reject(E.error) : t && e.resolve(E.data);
              },
              n = () => {
                i((this.#r = E.promise = (0, a.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || E.data !== o.value) && n();
                break;
              case "rejected":
                (r && E.error === o.reason) || n();
            }
          }
          return E;
        }
        updateResult() {
          let e = this.#n,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#a = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#a.data && (this.#c = this.#s),
            (0, o.shallowEqualObjects)(t, e))
          )
            return;
          this.#n = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#n).some((t) => this.#n[t] !== e[t] && s.has(t))
            );
          };
          this.#x({ listeners: r() });
        }
        #g() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          ((this.#s = e),
            (this.#i = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#b());
        }
        #x(e) {
          s.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#n);
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
      v = e.i(77606);
    e.i(62482);
    var b = f.createContext(
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
      y = f.createContext(!1);
    y.Provider;
    var R = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function g(e, t) {
      return (function (e, t, r) {
        let i,
          n = f.useContext(y),
          a = f.useContext(b),
          u = (0, v.useQueryClient)(r),
          l = u.defaultQueryOptions(e);
        u.getDefaultOptions().queries?._experimental_beforeQuery?.(l);
        let c = u.getQueryCache().get(l.queryHash);
        if (((l._optimisticResults = n ? "isRestoring" : "optimistic"), l.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = l.staleTime;
          ((l.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
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
          [d] = f.useState(() => new t(u, l)),
          p = d.getOptimisticResult(l),
          g = !n && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = g ? d.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (d.updateResult(), t);
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
          throw R(l, d, a);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
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
          let e = h ? R(l, d, a) : c?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return l.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, l, t);
    }
    e.s(["useQuery", () => g], 3021);
  },
]);
