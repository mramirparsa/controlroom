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
            u(this.#s, this.options) ? this.#b() : this.updateResult(),
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
          ((this.listeners = new Set()), this.#x(), this.#y(), this.#s.removeObserver(this));
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
          (this.#v(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, l.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, t) && this.#b(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, l.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, l.resolveEnabled)(t.enabled, this.#s) ||
                (0, l.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, l.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#R());
          let i = this.#g();
          s &&
            (this.#s !== r ||
              (0, l.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, l.resolveEnabled)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#j(i);
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
          this.#v();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(l.noop)), t);
        }
        #R() {
          this.#x();
          let e = (0, l.resolveStaleTime)(this.options.staleTime, this.#s);
          if (l.isServer || this.#a.isStale || !(0, l.isValidTimeout)(e)) return;
          let t = (0, l.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = o.timeoutManager.setTimeout(() => {
            this.#a.isStale || this.updateResult();
          }, t + 1);
        }
        #g() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #j(e) {
          (this.#y(),
            (this.#p = e),
            !l.isServer &&
              !1 !== (0, l.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, l.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = o.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#b();
              }, this.#p)));
        }
        #m() {
          (this.#R(), this.#j(this.#g()));
        }
        #x() {
          this.#h && (o.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #y() {
          this.#d && (o.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            a = this.options,
            o = this.#a,
            c = this.#n,
            h = this.#l,
            f = e !== s ? e.state : this.#i,
            { state: b } = e,
            m = { ...b },
            x = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && u(e, t),
              l = r && d(e, s, t, a);
            ((n || l) && (m = { ...m, ...(0, i.fetchState)(b.data, e.options) }),
              "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle"));
          }
          let { error: y, errorUpdatedAt: v, status: R } = m;
          r = m.data;
          let g = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === R) {
            let e;
            (o?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = o.data), (g = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#u?.state.data, this.#u)
                    : t.placeholderData),
              void 0 !== e && ((R = "success"), (r = (0, l.replaceData)(o?.data, e, t)), (x = !0)));
          }
          if (t.select && void 0 !== r && !g)
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
          this.#t && ((y = this.#t), (r = this.#c), (v = Date.now()), (R = "error"));
          let j = "fetching" === m.fetchStatus,
            T = "pending" === R,
            C = "error" === R,
            w = T && j,
            Q = void 0 !== r,
            S = {
              status: R,
              fetchStatus: m.fetchStatus,
              isPending: T,
              isSuccess: "success" === R,
              isError: C,
              isInitialLoading: w,
              isLoading: w,
              data: r,
              dataUpdatedAt: m.dataUpdatedAt,
              error: y,
              errorUpdatedAt: v,
              failureCount: m.fetchFailureCount,
              failureReason: m.fetchFailureReason,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount:
                m.dataUpdateCount > f.dataUpdateCount || m.errorUpdateCount > f.errorUpdateCount,
              isFetching: j,
              isRefetching: j && !T,
              isLoadingError: C && !Q,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: x,
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
          this.#T({ listeners: r() });
        }
        #v() {
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
        #T(e) {
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
        (void 0 !== e.state.data && h(e, t, t.refetchOnMount))
      );
    }
    function h(e, t, r) {
      if (
        !1 !== (0, l.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, l.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && p(e, t));
      }
      return !1;
    }
    function d(e, t, r, s) {
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
      x = f.createContext(!1);
    x.Provider;
    var y = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function v(e, t) {
      return (function (e, t, r) {
        let i,
          a = f.useContext(x),
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
        let h = !o.getQueryCache().get(c.queryHash),
          [d] = f.useState(() => new t(o, c)),
          p = d.getOptimisticResult(c),
          v = !a && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = v ? d.subscribe(s.notifyManager.batchCalls(e)) : l.noop;
                return (d.updateResult(), t);
              },
              [d, v]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          f.useEffect(() => {
            d.setOptions(c);
          }, [c, d]),
          c?.suspense && p.isPending)
        )
          throw y(c, d, n);
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
          let e = h ? y(c, d, n) : u?.promise;
          e?.catch(l.noop).finally(() => {
            d.updateResult();
          });
        }
        return c.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, c, t);
    }
    e.s(["useQuery", () => v], 3021);
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
  47841,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(34706),
      i = e.i(3021),
      a = e.i(20452),
      n = e.i(37016),
      l = e.i(55895),
      o = e.i(66066),
      c = e.i(90390),
      u = e.i(26368),
      h = e.i(32103),
      d = e.i(22991),
      p = e.i(39781),
      f = e.i(59115);
    function b() {
      let e,
        b,
        x,
        y,
        v,
        R,
        g,
        j,
        T,
        C,
        w,
        Q = (0, r.c)(26),
        [S, I] = (0, s.useState)(30);
      Q[0] !== S
        ? ((e = {
            queryKey: ["reports", S],
            queryFn: async () => {
              let e = await (0, h.apiClient)(`/api/reports?range=${S}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load reports");
              return e.data;
            },
          }),
          (Q[0] = S),
          (Q[1] = e))
        : (e = Q[1]);
      let { data: O, isLoading: E, isError: N, refetch: k } = (0, i.useQuery)(e);
      return (
        Q[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(p.CardTitle, { children: "Reports" }),
                (0, t.jsx)("p", {
                  className: "text-sm text-white/60",
                  children: "Cross-functional performance snapshots.",
                }),
              ],
            })),
            (Q[2] = b))
          : (b = Q[2]),
        Q[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = [7, 30, 90]), (Q[3] = x))
          : (x = Q[3]),
        Q[4] !== S
          ? ((y = x.map((e) =>
              (0, t.jsxs)(
                d.Button,
                {
                  variant: S === e ? "secondary" : "outline",
                  className: "border-white/10 text-white",
                  onClick: () => I(e),
                  children: [e, "d"],
                },
                e
              )
            )),
            (Q[4] = S),
            (Q[5] = y))
          : (y = Q[5]),
        Q[6] !== k
          ? ((v = (0, t.jsx)(d.Button, {
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => k(),
              children: "Refresh",
            })),
            (Q[6] = k),
            (Q[7] = v))
          : (v = Q[7]),
        Q[8] !== y || Q[9] !== v
          ? ((R = (0, t.jsxs)(p.CardHeader, {
              className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
              children: [b, (0, t.jsxs)("div", { className: "flex gap-2", children: [y, v] })],
            })),
            (Q[8] = y),
            (Q[9] = v),
            (Q[10] = R))
          : (R = Q[10]),
        Q[11] !== O || Q[12] !== N || Q[13] !== E || Q[14] !== k
          ? ((g = E
              ? (0, t.jsx)("div", {
                  className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                  children: "Loading reports...",
                })
              : N
                ? (0, t.jsxs)("div", {
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: "Failed to load reports",
                      }),
                      (0, t.jsx)(d.Button, {
                        className: "mt-4",
                        onClick: () => k(),
                        children: "Retry",
                      }),
                    ],
                  })
                : O
                  ? (0, t.jsxs)("div", {
                      className: "grid gap-6 lg:grid-cols-3",
                      children: [
                        (0, t.jsxs)(p.Card, {
                          className: "border-white/10 bg-white/5 lg:col-span-2",
                          children: [
                            (0, t.jsx)(p.CardHeader, {
                              children: (0, t.jsx)(p.CardTitle, {
                                className: "text-sm text-white/60",
                                children: "Revenue signal",
                              }),
                            }),
                            (0, t.jsx)(p.CardContent, {
                              className: "h-64",
                              children: (0, t.jsx)(l.ResponsiveContainer, {
                                width: "100%",
                                height: "100%",
                                children: (0, t.jsxs)(n.LineChart, {
                                  data: O.revenue,
                                  children: [
                                    (0, t.jsx)(c.XAxis, {
                                      dataKey: "day",
                                      stroke: "#94a3b8",
                                      tickLine: !1,
                                      axisLine: !1,
                                    }),
                                    (0, t.jsx)(u.YAxis, {
                                      stroke: "#94a3b8",
                                      tickLine: !1,
                                      axisLine: !1,
                                    }),
                                    (0, t.jsx)(o.Tooltip, {
                                      contentStyle: {
                                        background: "#0f172a",
                                        border: "1px solid #1e293b",
                                      },
                                    }),
                                    (0, t.jsx)(a.Line, {
                                      type: "monotone",
                                      dataKey: "value",
                                      stroke: "#38bdf8",
                                      strokeWidth: 2,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)(p.Card, {
                          className: "border-white/10 bg-white/5",
                          children: [
                            (0, t.jsx)(p.CardHeader, {
                              children: (0, t.jsx)(p.CardTitle, {
                                className: "text-sm text-white/60",
                                children: "Highlights",
                              }),
                            }),
                            (0, t.jsxs)(p.CardContent, {
                              className: "space-y-4",
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "text-sm text-white/60",
                                      children: "Total invoices",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-2xl font-semibold",
                                      children: O.highlights.totalInvoices,
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "text-sm text-white/60",
                                      children: "Active projects",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-2xl font-semibold",
                                      children: O.highlights.totalProjects,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null),
            (Q[11] = O),
            (Q[12] = N),
            (Q[13] = E),
            (Q[14] = k),
            (Q[15] = g))
          : (g = Q[15]),
        Q[16] !== g
          ? ((j = (0, t.jsx)(p.CardContent, { children: g })), (Q[16] = g), (Q[17] = j))
          : (j = Q[17]),
        Q[18] !== R || Q[19] !== j
          ? ((T = (0, t.jsxs)(p.Card, {
              className: "border-white/10 bg-white/5",
              children: [R, j],
            })),
            (Q[18] = R),
            (Q[19] = j),
            (Q[20] = T))
          : (T = Q[20]),
        Q[21] !== O
          ? ((C = O
              ? (0, t.jsxs)(p.Card, {
                  className: "border-white/10 bg-white/5",
                  children: [
                    (0, t.jsx)(p.CardHeader, {
                      children: (0, t.jsx)(p.CardTitle, { children: "Recent invoice activity" }),
                    }),
                    (0, t.jsx)(p.CardContent, {
                      children: (0, t.jsx)("div", {
                        className: "rounded-xl border border-white/10",
                        children: (0, t.jsxs)(f.Table, {
                          children: [
                            (0, t.jsx)(f.TableHeader, {
                              children: (0, t.jsxs)(f.TableRow, {
                                children: [
                                  (0, t.jsx)(f.TableHead, { children: "ID" }),
                                  (0, t.jsx)(f.TableHead, { children: "Status" }),
                                  (0, t.jsx)(f.TableHead, { children: "Amount" }),
                                  (0, t.jsx)(f.TableHead, { children: "Issued" }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(f.TableBody, { children: O.table.map(m) }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (Q[21] = O),
            (Q[22] = C))
          : (C = Q[22]),
        Q[23] !== T || Q[24] !== C
          ? ((w = (0, t.jsxs)("div", { className: "space-y-6", children: [T, C] })),
            (Q[23] = T),
            (Q[24] = C),
            (Q[25] = w))
          : (w = Q[25]),
        w
      );
    }
    function m(e) {
      return (0, t.jsxs)(
        f.TableRow,
        {
          children: [
            (0, t.jsx)(f.TableCell, { className: "font-medium", children: e.id.slice(0, 8) }),
            (0, t.jsx)(f.TableCell, { className: "capitalize", children: e.status }),
            (0, t.jsxs)(f.TableCell, { children: ["$", e.amount.toLocaleString()] }),
            (0, t.jsx)(f.TableCell, { children: new Date(e.issuedAt).toLocaleDateString() }),
          ],
        },
        e.id
      );
    }
    e.s(["default", () => b]);
  },
]);
