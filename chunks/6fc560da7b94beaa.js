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
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function a(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-header", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function n(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)("leading-none font-semibold", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-title", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function l(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)("text-muted-foreground text-sm", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-description", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function o(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i ? ((n = (0, s.cn)("px-6", i)), (o[3] = i), (o[4] = n)) : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", { "data-slot": "card-content", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    e.s([
      "Card",
      () => i,
      "CardContent",
      () => o,
      "CardDescription",
      () => l,
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
    function l(e) {
      let s,
        l,
        o,
        c,
        u,
        d,
        h = (0, r.c)(13);
      h[0] !== e
        ? (({ className: s, variant: o, asChild: c, ...l } = e),
          (h[0] = e),
          (h[1] = s),
          (h[2] = l),
          (h[3] = o),
          (h[4] = c))
        : ((s = h[1]), (l = h[2]), (o = h[3]), (c = h[4]));
      let p = void 0 === o ? "default" : o,
        f = void 0 !== c && c ? i.Slot.Root : "span";
      return (
        h[5] !== s || h[6] !== p
          ? ((u = (0, a.cn)(n({ variant: p }), s)), (h[5] = s), (h[6] = p), (h[7] = u))
          : (u = h[7]),
        h[8] !== f || h[9] !== l || h[10] !== u || h[11] !== p
          ? ((d = (0, t.jsx)(f, { "data-slot": "badge", "data-variant": p, className: u, ...l })),
            (h[8] = f),
            (h[9] = l),
            (h[10] = u),
            (h[11] = p),
            (h[12] = d))
          : (d = h[12]),
        d
      );
    }
    e.s(["Badge", () => l]);
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
      l = e.i(79553),
      o = e.i(44517),
      c = class extends a.Subscribable {
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
        #l;
        #r;
        #t;
        #o;
        #c;
        #u;
        #d;
        #h;
        #p;
        #f = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            u(this.#s, this.options) ? this.#b() : this.updateResult(),
            this.#m());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return d(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return d(this.#s, this.options, this.options.refetchOnWindowFocus);
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
              "boolean" != typeof (0, l.resolveEnabled)(this.options.enabled, this.#s))
          )
            throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
          (this.#x(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, l.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && h(this.#s, r, this.options, t) && this.#b(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, l.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, l.resolveEnabled)(t.enabled, this.#s) ||
                (0, l.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, l.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#g());
          let i = this.#R();
          s &&
            (this.#s !== r ||
              (0, l.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, l.resolveEnabled)(t.enabled, this.#s) ||
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
            (0, l.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#a = i), (this.#l = this.options), (this.#n = this.#s.state)),
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
          return (e?.throwOnError || (t = t.catch(l.noop)), t);
        }
        #g() {
          this.#v();
          let e = (0, l.resolveStaleTime)(this.options.staleTime, this.#s);
          if (l.isServer || this.#a.isStale || !(0, l.isValidTimeout)(e)) return;
          let t = (0, l.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#d = o.timeoutManager.setTimeout(() => {
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
            !l.isServer &&
              !1 !== (0, l.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, l.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#h = o.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#b();
              }, this.#p)));
        }
        #m() {
          (this.#g(), this.#w(this.#R()));
        }
        #v() {
          this.#d && (o.timeoutManager.clearTimeout(this.#d), (this.#d = void 0));
        }
        #y() {
          this.#h && (o.timeoutManager.clearInterval(this.#h), (this.#h = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            a = this.options,
            o = this.#a,
            c = this.#n,
            d = this.#l,
            f = e !== s ? e.state : this.#i,
            { state: b } = e,
            m = { ...b },
            v = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && u(e, t),
              l = r && h(e, s, t, a);
            ((n || l) && (m = { ...m, ...(0, i.fetchState)(b.data, e.options) }),
              "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle"));
          }
          let { error: y, errorUpdatedAt: x, status: g } = m;
          r = m.data;
          let R = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (o?.isPlaceholderData && t.placeholderData === d?.placeholderData
              ? ((e = o.data), (R = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#u?.state.data, this.#u)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, l.replaceData)(o?.data, e, t)), (v = !0)));
          }
          if (t.select && void 0 !== r && !R)
            if (o && r === c?.data && t.select === this.#o) r = this.#c;
            else
              try {
                ((this.#o = t.select),
                  (r = t.select(r)),
                  (r = (0, l.replaceData)(o?.data, r, t)),
                  (this.#c = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((y = this.#t), (r = this.#c), (x = Date.now()), (g = "error"));
          let w = "fetching" === m.fetchStatus,
            j = "pending" === g,
            C = "error" === g,
            T = j && w,
            Q = void 0 !== r,
            S = {
              status: g,
              fetchStatus: m.fetchStatus,
              isPending: j,
              isSuccess: "success" === g,
              isError: C,
              isInitialLoading: T,
              isLoading: T,
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
              isLoadingError: C && !Q,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: v,
              isRefetchError: C && Q,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, l.resolveEnabled)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== S.data,
              r = "error" === S.status && !t,
              i = (e) => {
                r ? e.reject(S.error) : t && e.resolve(S.data);
              },
              a = () => {
                i((this.#r = S.promise = (0, n.pendingThenable)()));
              },
              l = this.#r;
            switch (l.status) {
              case "pending":
                e.queryHash === s.queryHash && i(l);
                break;
              case "fulfilled":
                (r || S.data !== l.value) && a();
                break;
              case "rejected":
                (r && S.error === l.reason) || a();
            }
          }
          return S;
        }
        updateResult() {
          let e = this.#a,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#n = this.#s.state),
            (this.#l = this.options),
            void 0 !== this.#n.data && (this.#u = this.#s),
            (0, l.shallowEqualObjects)(t, e))
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
    function u(e, t) {
      return (
        (!1 !== (0, l.resolveEnabled)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
        (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
      );
    }
    function d(e, t, r) {
      if (
        !1 !== (0, l.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, l.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && p(e, t));
      }
      return !1;
    }
    function h(e, t, r, s) {
      return (
        (e !== t || !1 === (0, l.resolveEnabled)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        p(e, r)
      );
    }
    function p(e, t) {
      return (
        !1 !== (0, l.resolveEnabled)(t.enabled, e) &&
        e.isStaleByTime((0, l.resolveStaleTime)(t.staleTime, e))
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
          o = (0, b.useQueryClient)(r),
          c = o.defaultQueryOptions(e);
        o.getDefaultOptions().queries?._experimental_beforeQuery?.(c);
        let u = o.getQueryCache().get(c.queryHash);
        if (((c._optimisticResults = a ? "isRestoring" : "optimistic"), c.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = c.staleTime;
          ((c.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof c.gcTime && (c.gcTime = Math.max(c.gcTime, 1e3)));
        }
        ((i =
          u?.state.error && "function" == typeof c.throwOnError
            ? (0, l.shouldThrowError)(c.throwOnError, [u.state.error, u])
            : c.throwOnError),
          (c.suspense || c.experimental_prefetchInRender || i) &&
            !n.isReset() &&
            (c.retryOnMount = !1),
          f.useEffect(() => {
            n.clearReset();
          }, [n]));
        let d = !o.getQueryCache().get(c.queryHash),
          [h] = f.useState(() => new t(o, c)),
          p = h.getOptimisticResult(c),
          x = !a && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = x ? h.subscribe(s.notifyManager.batchCalls(e)) : l.noop;
                return (h.updateResult(), t);
              },
              [h, x]
            ),
            () => h.getCurrentResult(),
            () => h.getCurrentResult()
          ),
          f.useEffect(() => {
            h.setOptions(c);
          }, [c, h]),
          c?.suspense && p.isPending)
        )
          throw y(c, h, n);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, l.shouldThrowError)(r, [e.error, s])))({
            result: p,
            errorResetBoundary: n,
            throwOnError: c.throwOnError,
            query: u,
            suspense: c.suspense,
          })
        )
          throw p.error;
        if (
          (o.getDefaultOptions().queries?._experimental_afterQuery?.(c, p),
          c.experimental_prefetchInRender && !l.isServer && p.isLoading && p.isFetching && !a)
        ) {
          let e = d ? y(c, h, n) : u?.promise;
          e?.catch(l.noop).finally(() => {
            h.updateResult();
          });
        }
        return c.notifyOnChangeProps ? p : h.trackResult(p);
      })(e, c, t);
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
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)("w-full caption-bottom text-sm", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("div", {
              "data-slot": "table-container",
              className: "relative w-full overflow-x-auto",
              children: (0, t.jsx)("table", { "data-slot": "table", className: n, ...a }),
            })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function a(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i ? ((n = (0, s.cn)("[&_tr]:border-b", i)), (o[3] = i), (o[4] = n)) : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("thead", { "data-slot": "table-header", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function n(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)("[&_tr:last-child]:border-0", i)), (o[3] = i), (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("tbody", { "data-slot": "table-body", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function l(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)(
              "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("tr", { "data-slot": "table-row", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function o(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)(
              "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("th", { "data-slot": "table-head", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    function c(e) {
      let i,
        a,
        n,
        l,
        o = (0, r.c)(8);
      return (
        o[0] !== e
          ? (({ className: i, ...a } = e), (o[0] = e), (o[1] = i), (o[2] = a))
          : ((i = o[1]), (a = o[2])),
        o[3] !== i
          ? ((n = (0, s.cn)(
              "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
              i
            )),
            (o[3] = i),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== a || o[6] !== n
          ? ((l = (0, t.jsx)("td", { "data-slot": "table-cell", className: n, ...a })),
            (o[5] = a),
            (o[6] = n),
            (o[7] = l))
          : (l = o[7]),
        l
      );
    }
    e.s([
      "Table",
      () => i,
      "TableBody",
      () => n,
      "TableCell",
      () => c,
      "TableHead",
      () => o,
      "TableHeader",
      () => a,
      "TableRow",
      () => l,
    ]);
  },
  86888,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(34706),
      i = e.i(19871),
      a = e.i(59587),
      n = e.i(3021),
      l = e.i(32103),
      o = e.i(22991),
      c = e.i(39781),
      u = e.i(76111),
      d = e.i(59115);
    function h() {
      let e,
        u,
        h,
        b,
        m,
        v,
        y,
        x,
        g,
        R,
        w,
        j,
        C,
        T,
        Q,
        S,
        I,
        E = (0, r.c)(46),
        O = (0, a.useParams)(),
        [N, k] = (0, s.useState)("overview");
      E[0] !== O.id
        ? ((e = {
            queryKey: ["project", O.id],
            queryFn: async () => {
              let e = await (0, l.apiClient)(`/api/projects/${O.id}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load project");
              return e.data.project;
            },
          }),
          (E[0] = O.id),
          (E[1] = e))
        : (e = E[1]);
      let { data: D } = (0, n.useQuery)(e);
      E[2] !== O.id
        ? ((u = {
            queryKey: ["project-members", O.id],
            queryFn: async () => {
              let e = await (0, l.apiClient)(`/api/projects/${O.id}/members`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load members");
              return e.data.members;
            },
          }),
          (E[2] = O.id),
          (E[3] = u))
        : (u = E[3]);
      let { data: F } = (0, n.useQuery)(u);
      E[4] !== O.id
        ? ((h = {
            queryKey: ["project-tasks", O.id],
            queryFn: async () => {
              let e = await (0, l.apiClient)(`/api/tasks?projectId=${O.id}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load tasks");
              return e.data.items;
            },
          }),
          (E[4] = O.id),
          (E[5] = h))
        : (h = E[5]);
      let { data: _ } = (0, n.useQuery)(h);
      if (!D) {
        let e;
        return (
          E[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "text-white/60",
                children: "Loading project...",
              })),
              (E[6] = e))
            : (e = E[6]),
          e
        );
      }
      (E[7] !== D.name
        ? ((b = (0, t.jsx)(c.CardTitle, { children: D.name })), (E[7] = D.name), (E[8] = b))
        : (b = E[8]),
        E[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)("p", {
              className: "text-sm text-white/60",
              children: "Project intelligence and delivery insights.",
            })),
            (E[9] = m))
          : (m = E[9]),
        E[10] !== b
          ? ((v = (0, t.jsxs)("div", { children: [b, m] })), (E[10] = b), (E[11] = v))
          : (v = E[11]),
        E[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = ["overview", "members", "activity", "tasks"]), (E[12] = y))
          : (y = E[12]),
        E[13] !== N
          ? ((x = y.map((e) =>
              (0, t.jsx)(
                o.Button,
                {
                  variant: N === e ? "secondary" : "outline",
                  className: "border-white/10 text-white",
                  onClick: () => k(e),
                  children: e,
                },
                e
              )
            )),
            (E[13] = N),
            (E[14] = x))
          : (x = E[14]));
      let U = `/projects/${D.id}/tasks`;
      return (
        E[15] !== U
          ? ((g = (0, t.jsx)(o.Button, {
              asChild: !0,
              variant: "outline",
              className: "border-white/10 text-white",
              children: (0, t.jsx)(i.default, { href: U, children: "Open tasks" }),
            })),
            (E[15] = U),
            (E[16] = g))
          : (g = E[16]),
        E[17] !== x || E[18] !== g
          ? ((R = (0, t.jsxs)("div", { className: "flex flex-wrap gap-2", children: [x, g] })),
            (E[17] = x),
            (E[18] = g),
            (E[19] = R))
          : (R = E[19]),
        E[20] !== R || E[21] !== v
          ? ((w = (0, t.jsxs)(c.CardHeader, {
              className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
              children: [v, R],
            })),
            (E[20] = R),
            (E[21] = v),
            (E[22] = w))
          : (w = E[22]),
        E[23] !== D.budget ||
        E[24] !== D.dueDate ||
        E[25] !== D.startDate ||
        E[26] !== D.status ||
        E[27] !== N
          ? ((j =
              "overview" === N
                ? (0, t.jsxs)("div", {
                    className: "grid gap-4 md:grid-cols-4",
                    children: [
                      (0, t.jsxs)(c.Card, {
                        className: "border-white/10 bg-white/5",
                        children: [
                          (0, t.jsx)(c.CardHeader, {
                            children: (0, t.jsx)(c.CardTitle, {
                              className: "text-sm text-white/60",
                              children: "Status",
                            }),
                          }),
                          (0, t.jsx)(c.CardContent, {
                            className: "text-lg font-semibold capitalize",
                            children: D.status,
                          }),
                        ],
                      }),
                      (0, t.jsxs)(c.Card, {
                        className: "border-white/10 bg-white/5",
                        children: [
                          (0, t.jsx)(c.CardHeader, {
                            children: (0, t.jsx)(c.CardTitle, {
                              className: "text-sm text-white/60",
                              children: "Budget",
                            }),
                          }),
                          (0, t.jsxs)(c.CardContent, {
                            className: "text-lg font-semibold",
                            children: ["$", D.budget.toLocaleString()],
                          }),
                        ],
                      }),
                      (0, t.jsxs)(c.Card, {
                        className: "border-white/10 bg-white/5",
                        children: [
                          (0, t.jsx)(c.CardHeader, {
                            children: (0, t.jsx)(c.CardTitle, {
                              className: "text-sm text-white/60",
                              children: "Start",
                            }),
                          }),
                          (0, t.jsx)(c.CardContent, {
                            className: "text-lg font-semibold",
                            children: new Date(D.startDate).toLocaleDateString(),
                          }),
                        ],
                      }),
                      (0, t.jsxs)(c.Card, {
                        className: "border-white/10 bg-white/5",
                        children: [
                          (0, t.jsx)(c.CardHeader, {
                            children: (0, t.jsx)(c.CardTitle, {
                              className: "text-sm text-white/60",
                              children: "Due",
                            }),
                          }),
                          (0, t.jsx)(c.CardContent, {
                            className: "text-lg font-semibold",
                            children: new Date(D.dueDate).toLocaleDateString(),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (E[23] = D.budget),
            (E[24] = D.dueDate),
            (E[25] = D.startDate),
            (E[26] = D.status),
            (E[27] = N),
            (E[28] = j))
          : (j = E[28]),
        E[29] !== F || E[30] !== N
          ? ((C =
              "members" === N
                ? (0, t.jsx)("div", {
                    className: "rounded-xl border border-white/10",
                    children: (0, t.jsxs)(d.Table, {
                      children: [
                        (0, t.jsx)(d.TableHeader, {
                          children: (0, t.jsxs)(d.TableRow, {
                            children: [
                              (0, t.jsx)(d.TableHead, { children: "User ID" }),
                              (0, t.jsx)(d.TableHead, { children: "Role" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(d.TableBody, { children: F?.map(f) }),
                      ],
                    }),
                  })
                : null),
            (E[29] = F),
            (E[30] = N),
            (E[31] = C))
          : (C = E[31]),
        E[32] !== N
          ? ((T =
              "activity" === N
                ? (0, t.jsx)("div", {
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                    children: "Activity feed will stream here next.",
                  })
                : null),
            (E[32] = N),
            (E[33] = T))
          : (T = E[33]),
        E[34] !== D.id || E[35] !== N || E[36] !== _
          ? ((Q =
              "tasks" === N
                ? (0, t.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: _?.slice(0, 8).map(p),
                      }),
                      (0, t.jsx)(o.Button, {
                        asChild: !0,
                        variant: "outline",
                        className: "border-white/10 text-white",
                        children: (0, t.jsx)(i.default, {
                          href: `/projects/${D.id}/tasks`,
                          children: "See all tasks",
                        }),
                      }),
                    ],
                  })
                : null),
            (E[34] = D.id),
            (E[35] = N),
            (E[36] = _),
            (E[37] = Q))
          : (Q = E[37]),
        E[38] !== j || E[39] !== C || E[40] !== T || E[41] !== Q
          ? ((S = (0, t.jsxs)(c.CardContent, { className: "space-y-6", children: [j, C, T, Q] })),
            (E[38] = j),
            (E[39] = C),
            (E[40] = T),
            (E[41] = Q),
            (E[42] = S))
          : (S = E[42]),
        E[43] !== w || E[44] !== S
          ? ((I = (0, t.jsxs)(c.Card, {
              className: "border-white/10 bg-white/5",
              children: [w, S],
            })),
            (E[43] = w),
            (E[44] = S),
            (E[45] = I))
          : (I = E[45]),
        I
      );
    }
    function p(e) {
      return (0, t.jsx)(
        u.Badge,
        { variant: "secondary", className: "bg-white/10 text-white", children: e.title },
        e.id
      );
    }
    function f(e) {
      return (0, t.jsxs)(
        d.TableRow,
        {
          children: [
            (0, t.jsx)(d.TableCell, { children: e.userId }),
            (0, t.jsx)(d.TableCell, { className: "capitalize", children: e.projectRole }),
          ],
        },
        e.userId
      );
    }
    e.s(["default", () => h]);
  },
]);
