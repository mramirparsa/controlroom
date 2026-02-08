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
          ((this.listeners = new Set()), this.#y(), this.#v(), this.#s.removeObserver(this));
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
          (s && d(this.#s, r, this.options, t) && this.#b(),
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
          this.#R();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #g() {
          this.#y();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#a.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = l.timeoutManager.setTimeout(() => {
            this.#a.isStale || this.updateResult();
          }, t + 1);
        }
        #x() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #T(e) {
          (this.#v(),
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
          (this.#g(), this.#T(this.#x()));
        }
        #y() {
          this.#h && (l.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #v() {
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
            y = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && c(e, t),
              o = r && d(e, s, t, a);
            ((n || o) && (m = { ...m, ...(0, i.fetchState)(b.data, e.options) }),
              "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle"));
          }
          let { error: v, errorUpdatedAt: R, status: g } = m;
          r = m.data;
          let x = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (l?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = l.data), (x = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, o.replaceData)(l?.data, e, t)), (y = !0)));
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
          let T = "fetching" === m.fetchStatus,
            C = "pending" === g,
            O = "error" === g,
            Q = C && T,
            w = void 0 !== r,
            S = {
              status: g,
              fetchStatus: m.fetchStatus,
              isPending: C,
              isSuccess: "success" === g,
              isError: O,
              isInitialLoading: Q,
              isLoading: Q,
              data: r,
              dataUpdatedAt: m.dataUpdatedAt,
              error: v,
              errorUpdatedAt: R,
              failureCount: m.fetchFailureCount,
              failureReason: m.fetchFailureReason,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount:
                m.dataUpdateCount > f.dataUpdateCount || m.errorUpdateCount > f.errorUpdateCount,
              isFetching: T,
              isRefetching: T && !C,
              isLoadingError: O && !w,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: y,
              isRefetchError: O && w,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(t.enabled, e),
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
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || S.data !== o.value) && a();
                break;
              case "rejected":
                (r && S.error === o.reason) || a();
            }
          }
          return S;
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
          this.#C({ listeners: r() });
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
          (this.updateResult(), this.hasListeners() && this.#m());
        }
        #C(e) {
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
      y = f.createContext(!1);
    y.Provider;
    var v = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function R(e, t) {
      return (function (e, t, r) {
        let i,
          a = f.useContext(y),
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
          R = !a && !1 !== e.subscribed;
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
          throw v(u, d, n);
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
          let e = h ? v(u, d, n) : c?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return u.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, u, t);
    }
    e.s(["useQuery", () => R], 3021);
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
        #O;
        #Q;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#w());
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
                .notify({ type: "observerOptionsUpdated", mutation: this.#O, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, a.hashKey)(t.mutationKey) !== (0, a.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#O?.state.status === "pending" && this.#O.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#O?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#w(), this.#C(e));
        }
        getCurrentResult() {
          return this.#a;
        }
        reset() {
          (this.#O?.removeObserver(this), (this.#O = void 0), this.#w(), this.#C());
        }
        mutate(e, t) {
          return (
            (this.#Q = t),
            this.#O?.removeObserver(this),
            (this.#O = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#O.addObserver(this),
            this.#O.execute(e)
          );
        }
        #w() {
          let e = this.#O?.state ?? (0, r.getDefaultState)();
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
        #C(e) {
          s.notifyManager.batch(() => {
            if (this.#Q && this.hasListeners()) {
              let t = this.#a.variables,
                r = this.#a.context,
                s = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#Q.onSuccess?.(e.data, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#Q.onSettled?.(e.data, null, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#Q.onError?.(e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#Q.onSettled?.(void 0, e.error, t, r, s);
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
  68890,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(59587),
      i = e.i(68315),
      a = e.i(3021),
      n = e.i(77606),
      o = e.i(32103),
      l = e.i(22991),
      u = e.i(39781),
      c = e.i(59115);
    function h() {
      let e,
        h,
        p,
        f,
        b = (0, r.c)(12),
        m = (0, s.useParams)(),
        y = (0, n.useQueryClient)();
      b[0] !== m.id
        ? ((e = {
            queryKey: ["project-tasks", m.id],
            queryFn: async () => {
              let e = await (0, o.apiClient)(`/api/tasks?projectId=${m.id}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load tasks");
              return e.data.items;
            },
          }),
          (b[0] = m.id),
          (b[1] = e))
        : (e = b[1]);
      let { data: v, isLoading: R, isError: g, refetch: x } = (0, a.useQuery)(e);
      b[2] !== m.id || b[3] !== y
        ? ((h = {
            mutationFn: d,
            onSuccess: () => y.invalidateQueries({ queryKey: ["project-tasks", m.id] }),
          }),
          (b[2] = m.id),
          (b[3] = y),
          (b[4] = h))
        : (h = b[4]);
      let T = (0, i.useMutation)(h);
      return (
        b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsx)(u.CardHeader, {
              children: (0, t.jsx)(u.CardTitle, { children: "Project tasks" }),
            })),
            (b[5] = p))
          : (p = b[5]),
        b[6] !== v || b[7] !== g || b[8] !== R || b[9] !== x || b[10] !== T
          ? ((f = (0, t.jsxs)(u.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                p,
                (0, t.jsx)(u.CardContent, {
                  children: R
                    ? (0, t.jsx)("div", {
                        className:
                          "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                        children: "Loading tasks...",
                      })
                    : g
                      ? (0, t.jsxs)("div", {
                          className:
                            "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-lg font-semibold",
                              children: "Failed to load tasks",
                            }),
                            (0, t.jsx)(l.Button, {
                              className: "mt-4",
                              onClick: () => x(),
                              children: "Retry",
                            }),
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className: "rounded-xl border border-white/10",
                          children: (0, t.jsxs)(c.Table, {
                            children: [
                              (0, t.jsx)(c.TableHeader, {
                                children: (0, t.jsxs)(c.TableRow, {
                                  children: [
                                    (0, t.jsx)(c.TableHead, { children: "Title" }),
                                    (0, t.jsx)(c.TableHead, { children: "Status" }),
                                    (0, t.jsx)(c.TableHead, { children: "Priority" }),
                                    (0, t.jsx)(c.TableHead, { children: "Due" }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)(c.TableBody, {
                                children: v?.map((e) =>
                                  (0, t.jsxs)(
                                    c.TableRow,
                                    {
                                      children: [
                                        (0, t.jsx)(c.TableCell, {
                                          className: "font-medium",
                                          children: e.title,
                                        }),
                                        (0, t.jsx)(c.TableCell, {
                                          children: (0, t.jsxs)("select", {
                                            className:
                                              "h-8 rounded-md border border-white/10 bg-slate-950/60 px-2 text-xs",
                                            value: e.status,
                                            onChange: (t) =>
                                              T.mutate({ id: e.id, status: t.target.value }),
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
                                        }),
                                        (0, t.jsx)(c.TableCell, {
                                          className: "capitalize",
                                          children: e.priority,
                                        }),
                                        (0, t.jsx)(c.TableCell, {
                                          children: e.dueDate
                                            ? new Date(e.dueDate).toLocaleDateString()
                                            : "-",
                                        }),
                                      ],
                                    },
                                    e.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                }),
              ],
            })),
            (b[6] = v),
            (b[7] = g),
            (b[8] = R),
            (b[9] = x),
            (b[10] = T),
            (b[11] = f))
          : (f = b[11]),
        f
      );
    }
    async function d(e) {
      let t = await (0, o.apiClient)(`/api/tasks/${e.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: e.status }),
      });
      if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to update task");
      return t.data.task;
    }
    e.s(["default", () => h]);
  },
]);
