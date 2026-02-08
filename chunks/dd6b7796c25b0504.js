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
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...n } = e), (l[0] = e), (l[1] = i), (l[2] = n))
          : ((i = l[1]), (n = l[2])),
        l[3] !== i
          ? ((a = (0, s.cn)(
              "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
              i
            )),
            (l[3] = i),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== n || l[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card", className: a, ...n })),
            (l[5] = n),
            (l[6] = a),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function n(e) {
      let i,
        n,
        a,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...n } = e), (l[0] = e), (l[1] = i), (l[2] = n))
          : ((i = l[1]), (n = l[2])),
        l[3] !== i
          ? ((a = (0, s.cn)(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              i
            )),
            (l[3] = i),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== n || l[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-header", className: a, ...n })),
            (l[5] = n),
            (l[6] = a),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function a(e) {
      let i,
        n,
        a,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...n } = e), (l[0] = e), (l[1] = i), (l[2] = n))
          : ((i = l[1]), (n = l[2])),
        l[3] !== i
          ? ((a = (0, s.cn)("leading-none font-semibold", i)), (l[3] = i), (l[4] = a))
          : (a = l[4]),
        l[5] !== n || l[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-title", className: a, ...n })),
            (l[5] = n),
            (l[6] = a),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function o(e) {
      let i,
        n,
        a,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...n } = e), (l[0] = e), (l[1] = i), (l[2] = n))
          : ((i = l[1]), (n = l[2])),
        l[3] !== i
          ? ((a = (0, s.cn)("text-muted-foreground text-sm", i)), (l[3] = i), (l[4] = a))
          : (a = l[4]),
        l[5] !== n || l[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-description", className: a, ...n })),
            (l[5] = n),
            (l[6] = a),
            (l[7] = o))
          : (o = l[7]),
        o
      );
    }
    function l(e) {
      let i,
        n,
        a,
        o,
        l = (0, r.c)(8);
      return (
        l[0] !== e
          ? (({ className: i, ...n } = e), (l[0] = e), (l[1] = i), (l[2] = n))
          : ((i = l[1]), (n = l[2])),
        l[3] !== i ? ((a = (0, s.cn)("px-6", i)), (l[3] = i), (l[4] = a)) : (a = l[4]),
        l[5] !== n || l[6] !== a
          ? ((o = (0, t.jsx)("div", { "data-slot": "card-content", className: a, ...n })),
            (l[5] = n),
            (l[6] = a),
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
      () => n,
      "CardTitle",
      () => a,
    ]);
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
      l = e.i(44517),
      u = class extends n.Subscribable {
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
            c(this.#s, this.options) ? this.#m() : this.updateResult(),
            this.#y());
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
          ((this.listeners = new Set()), this.#b(), this.#v(), this.#s.removeObserver(this));
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
          (this.#R(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, t) && this.#m(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#g());
          let i = this.#x();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#Q(i);
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
          return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#n)
          );
        }
        #m(e) {
          this.#R();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #g() {
          this.#b();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#n.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#n.dataUpdatedAt, e);
          this.#h = l.timeoutManager.setTimeout(() => {
            this.#n.isStale || this.updateResult();
          }, t + 1);
        }
        #x() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #Q(e) {
          (this.#v(),
            (this.#p = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = l.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#m();
              }, this.#p)));
        }
        #y() {
          (this.#g(), this.#Q(this.#x()));
        }
        #b() {
          this.#h && (l.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #v() {
          this.#d && (l.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            n = this.options,
            l = this.#n,
            u = this.#a,
            h = this.#o,
            f = e !== s ? e.state : this.#i,
            { state: m } = e,
            y = { ...m },
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && c(e, t),
              o = r && d(e, s, t, n);
            ((a || o) && (y = { ...y, ...(0, i.fetchState)(m.data, e.options) }),
              "isRestoring" === t._optimisticResults && (y.fetchStatus = "idle"));
          }
          let { error: v, errorUpdatedAt: R, status: g } = y;
          r = y.data;
          let x = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (l?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = l.data), (x = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, o.replaceData)(l?.data, e, t)), (b = !0)));
          }
          if (t.select && void 0 !== r && !x)
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
          this.#t && ((v = this.#t), (r = this.#u), (R = Date.now()), (g = "error"));
          let Q = "fetching" === y.fetchStatus,
            T = "pending" === g,
            S = "error" === g,
            I = T && Q,
            C = void 0 !== r,
            O = {
              status: g,
              fetchStatus: y.fetchStatus,
              isPending: T,
              isSuccess: "success" === g,
              isError: S,
              isInitialLoading: I,
              isLoading: I,
              data: r,
              dataUpdatedAt: y.dataUpdatedAt,
              error: v,
              errorUpdatedAt: R,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
              isFetchedAfterMount:
                y.dataUpdateCount > f.dataUpdateCount || y.errorUpdateCount > f.errorUpdateCount,
              isFetching: Q,
              isRefetching: Q && !T,
              isLoadingError: S && !C,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: b,
              isRefetchError: S && C,
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
              n = () => {
                i((this.#r = O.promise = (0, a.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || O.data !== o.value) && n();
                break;
              case "rejected":
                (r && O.error === o.reason) || n();
            }
          }
          return O;
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
          this.#T({ listeners: r() });
        }
        #R() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          ((this.#s = e),
            (this.#i = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#y());
        }
        #T(e) {
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
      m = e.i(77606);
    e.i(62482);
    var y = f.createContext(
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
      b = f.createContext(!1);
    b.Provider;
    var v = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function R(e, t) {
      return (function (e, t, r) {
        let i,
          n = f.useContext(b),
          a = f.useContext(y),
          l = (0, m.useQueryClient)(r),
          u = l.defaultQueryOptions(e);
        l.getDefaultOptions().queries?._experimental_beforeQuery?.(u);
        let c = l.getQueryCache().get(u.queryHash);
        if (((u._optimisticResults = n ? "isRestoring" : "optimistic"), u.suspense)) {
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
            !a.isReset() &&
            (u.retryOnMount = !1),
          f.useEffect(() => {
            a.clearReset();
          }, [a]));
        let h = !l.getQueryCache().get(u.queryHash),
          [d] = f.useState(() => new t(l, u)),
          p = d.getOptimisticResult(u),
          R = !n && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = R ? d.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (d.updateResult(), t);
              },
              [d, R]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          f.useEffect(() => {
            d.setOptions(u);
          }, [u, d]),
          u?.suspense && p.isPending)
        )
          throw v(u, d, a);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
            result: p,
            errorResetBoundary: a,
            throwOnError: u.throwOnError,
            query: c,
            suspense: u.suspense,
          })
        )
          throw p.error;
        if (
          (l.getDefaultOptions().queries?._experimental_afterQuery?.(u, p),
          u.experimental_prefetchInRender && !o.isServer && p.isLoading && p.isFetching && !n)
        ) {
          let e = h ? v(u, d, a) : c?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return u.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, u, t);
    }
    e.s(["useQuery", () => R], 3021);
  },
  39162,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(19871),
      i = e.i(3021),
      n = e.i(32103),
      a = e.i(22991),
      o = e.i(39781);
    function l() {
      let e,
        n,
        l,
        h,
        d,
        p,
        f,
        m,
        y,
        b,
        v,
        R,
        g,
        x,
        Q,
        T,
        S = (0, r.c)(33);
      S[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { queryKey: ["invoices", "summary"], queryFn: c }), (S[0] = e))
        : (e = S[0]);
      let { data: I } = (0, i.useQuery)(e);
      if (S[1] !== I) {
        let e,
          r = I?.reduce(u, 0) ?? 0;
        ((l = o.Card),
          (b = "border-white/10 bg-white/5"),
          S[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(o.CardTitle, { children: "Billing" }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-white/60",
                    children: "Revenue summaries and invoice actions.",
                  }),
                ],
              })),
              (S[12] = e))
            : (e = S[12]),
          S[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, t.jsxs)(o.CardHeader, {
                className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                children: [
                  e,
                  (0, t.jsx)(a.Button, {
                    asChild: !0,
                    className: "bg-white text-slate-900 hover:bg-white/90",
                    children: (0, t.jsx)(s.default, {
                      href: "/billing/invoices",
                      children: "View invoices",
                    }),
                  }),
                ],
              })),
              (S[13] = v))
            : (v = S[13]),
          (n = o.CardContent),
          (y = "space-y-4"),
          (f = "rounded-2xl border border-white/10 bg-white/5 p-6"),
          S[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, t.jsx)("p", {
                className: "text-sm text-white/60",
                children: "Recent invoice volume",
              })),
              (S[14] = m))
            : (m = S[14]),
          (h = "text-2xl font-semibold"),
          (d = "$"),
          (p = r.toLocaleString()),
          (S[1] = I),
          (S[2] = n),
          (S[3] = l),
          (S[4] = h),
          (S[5] = d),
          (S[6] = p),
          (S[7] = f),
          (S[8] = m),
          (S[9] = y),
          (S[10] = b),
          (S[11] = v));
      } else
        ((n = S[2]),
          (l = S[3]),
          (h = S[4]),
          (d = S[5]),
          (p = S[6]),
          (f = S[7]),
          (m = S[8]),
          (y = S[9]),
          (b = S[10]),
          (v = S[11]));
      return (
        S[15] !== h || S[16] !== d || S[17] !== p
          ? ((R = (0, t.jsxs)("p", { className: h, children: [d, p] })),
            (S[15] = h),
            (S[16] = d),
            (S[17] = p),
            (S[18] = R))
          : (R = S[18]),
        S[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsx)("p", {
              className: "text-sm text-white/50",
              children: "Across the latest 6 invoices.",
            })),
            (S[19] = g))
          : (g = S[19]),
        S[20] !== f || S[21] !== m || S[22] !== R
          ? ((x = (0, t.jsxs)("div", { className: f, children: [m, R, g] })),
            (S[20] = f),
            (S[21] = m),
            (S[22] = R),
            (S[23] = x))
          : (x = S[23]),
        S[24] !== n || S[25] !== x || S[26] !== y
          ? ((Q = (0, t.jsx)(n, { className: y, children: x })),
            (S[24] = n),
            (S[25] = x),
            (S[26] = y),
            (S[27] = Q))
          : (Q = S[27]),
        S[28] !== l || S[29] !== Q || S[30] !== b || S[31] !== v
          ? ((T = (0, t.jsxs)(l, { className: b, children: [v, Q] })),
            (S[28] = l),
            (S[29] = Q),
            (S[30] = b),
            (S[31] = v),
            (S[32] = T))
          : (T = S[32]),
        T
      );
    }
    function u(e, t) {
      return e + t.amount;
    }
    async function c() {
      let e = await (0, n.apiClient)("/api/invoices?page=1&pageSize=6");
      if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load invoices");
      return e.data.items;
    }
    e.s(["default", () => l]);
  },
]);
