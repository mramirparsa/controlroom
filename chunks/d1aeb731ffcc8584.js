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
      c = class extends n.Subscribable {
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
        #c;
        #l;
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
            l(this.#s, this.options) ? this.#m() : this.updateResult(),
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
            this.#S(i);
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
          this.#h = u.timeoutManager.setTimeout(() => {
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
        #S(e) {
          (this.#v(),
            (this.#p = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = u.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#m();
              }, this.#p)));
        }
        #y() {
          (this.#g(), this.#S(this.#x()));
        }
        #b() {
          this.#h && (u.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #v() {
          this.#d && (u.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            n = this.options,
            u = this.#n,
            c = this.#a,
            h = this.#o,
            f = e !== s ? e.state : this.#i,
            { state: m } = e,
            y = { ...m },
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && l(e, t),
              o = r && d(e, s, t, n);
            ((a || o) && (y = { ...y, ...(0, i.fetchState)(m.data, e.options) }),
              "isRestoring" === t._optimisticResults && (y.fetchStatus = "idle"));
          }
          let { error: v, errorUpdatedAt: R, status: g } = y;
          r = y.data;
          let x = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (u?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = u.data), (x = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#l?.state.data, this.#l)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, o.replaceData)(u?.data, e, t)), (b = !0)));
          }
          if (t.select && void 0 !== r && !x)
            if (u && r === c?.data && t.select === this.#u) r = this.#c;
            else
              try {
                ((this.#u = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(u?.data, r, t)),
                  (this.#c = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((v = this.#t), (r = this.#c), (R = Date.now()), (g = "error"));
          let S = "fetching" === y.fetchStatus,
            O = "pending" === g,
            Q = "error" === g,
            C = O && S,
            T = void 0 !== r,
            E = {
              status: g,
              fetchStatus: y.fetchStatus,
              isPending: O,
              isSuccess: "success" === g,
              isError: Q,
              isInitialLoading: C,
              isLoading: C,
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
              isFetching: S,
              isRefetching: S && !O,
              isLoadingError: Q && !T,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: b,
              isRefetchError: Q && T,
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
            void 0 !== this.#a.data && (this.#l = this.#s),
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
          this.#O({ listeners: r() });
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
        #O(e) {
          s.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#n);
              }),
              this.#e.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" }));
          });
        }
      };
    function l(e, t) {
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
          u = (0, m.useQueryClient)(r),
          c = u.defaultQueryOptions(e);
        u.getDefaultOptions().queries?._experimental_beforeQuery?.(c);
        let l = u.getQueryCache().get(c.queryHash);
        if (((c._optimisticResults = n ? "isRestoring" : "optimistic"), c.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = c.staleTime;
          ((c.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof c.gcTime && (c.gcTime = Math.max(c.gcTime, 1e3)));
        }
        ((i =
          l?.state.error && "function" == typeof c.throwOnError
            ? (0, o.shouldThrowError)(c.throwOnError, [l.state.error, l])
            : c.throwOnError),
          (c.suspense || c.experimental_prefetchInRender || i) &&
            !a.isReset() &&
            (c.retryOnMount = !1),
          f.useEffect(() => {
            a.clearReset();
          }, [a]));
        let h = !u.getQueryCache().get(c.queryHash),
          [d] = f.useState(() => new t(u, c)),
          p = d.getOptimisticResult(c),
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
            d.setOptions(c);
          }, [c, d]),
          c?.suspense && p.isPending)
        )
          throw v(c, d, a);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
            result: p,
            errorResetBoundary: a,
            throwOnError: c.throwOnError,
            query: l,
            suspense: c.suspense,
          })
        )
          throw p.error;
        if (
          (u.getDefaultOptions().queries?._experimental_afterQuery?.(c, p),
          c.experimental_prefetchInRender && !o.isServer && p.isLoading && p.isFetching && !n)
        ) {
          let e = h ? v(c, d, a) : l?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return c.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, c, t);
    }
    e.s(["useQuery", () => R], 3021);
  },
  68315,
  (e) => {
    "use strict";
    var t = e.i(34706),
      r = e.i(9501),
      s = e.i(33634),
      i = e.i(82778),
      n = e.i(79553),
      a = class extends i.Subscribable {
        #e;
        #n = void 0;
        #Q;
        #C;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#T());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
        }
        setOptions(e) {
          let t = this.options;
          ((this.options = this.#e.defaultMutationOptions(e)),
            (0, n.shallowEqualObjects)(this.options, t) ||
              this.#e
                .getMutationCache()
                .notify({ type: "observerOptionsUpdated", mutation: this.#Q, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, n.hashKey)(t.mutationKey) !== (0, n.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#Q?.state.status === "pending" && this.#Q.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#Q?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#T(), this.#O(e));
        }
        getCurrentResult() {
          return this.#n;
        }
        reset() {
          (this.#Q?.removeObserver(this), (this.#Q = void 0), this.#T(), this.#O());
        }
        mutate(e, t) {
          return (
            (this.#C = t),
            this.#Q?.removeObserver(this),
            (this.#Q = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#Q.addObserver(this),
            this.#Q.execute(e)
          );
        }
        #T() {
          let e = this.#Q?.state ?? (0, r.getDefaultState)();
          this.#n = {
            ...e,
            isPending: "pending" === e.status,
            isSuccess: "success" === e.status,
            isError: "error" === e.status,
            isIdle: "idle" === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #O(e) {
          s.notifyManager.batch(() => {
            if (this.#C && this.hasListeners()) {
              let t = this.#n.variables,
                r = this.#n.context,
                s = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#C.onSuccess?.(e.data, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#C.onSettled?.(e.data, null, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#C.onError?.(e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#C.onSettled?.(void 0, e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              }
            }
            this.listeners.forEach((e) => {
              e(this.#n);
            });
          });
        }
      },
      o = e.i(77606);
    function u(e, r) {
      let i = (0, o.useQueryClient)(r),
        [u] = t.useState(() => new a(i, e));
      t.useEffect(() => {
        u.setOptions(e);
      }, [u, e]);
      let c = t.useSyncExternalStore(
          t.useCallback((e) => u.subscribe(s.notifyManager.batchCalls(e)), [u]),
          () => u.getCurrentResult(),
          () => u.getCurrentResult()
        ),
        l = t.useCallback(
          (e, t) => {
            u.mutate(e, t).catch(n.noop);
          },
          [u]
        );
      if (c.error && (0, n.shouldThrowError)(u.options.throwOnError, [c.error])) throw c.error;
      return { ...c, mutate: l, mutateAsync: c.mutate };
    }
    e.s(["useMutation", () => u], 68315);
  },
  6277,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(59587),
      i = e.i(68315),
      n = e.i(3021),
      a = e.i(77606),
      o = e.i(32103),
      u = e.i(22991),
      c = e.i(39781);
    function l() {
      let e,
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
        S,
        O,
        Q,
        C,
        T,
        E,
        w,
        I,
        j,
        M,
        D = (0, r.c)(54),
        _ = (0, s.useParams)(),
        P = (0, s.useRouter)(),
        F = (0, a.useQueryClient)();
      D[0] !== _.id
        ? ((e = {
            queryKey: ["invoice", _.id],
            queryFn: async () => {
              let e = await (0, o.apiClient)(`/api/invoices/${_.id}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to load invoice");
              return e.data.invoice;
            },
          }),
          (D[0] = _.id),
          (D[1] = e))
        : (e = D[1]);
      let { data: U, isLoading: k, isError: N } = (0, n.useQuery)(e);
      (D[2] !== _.id
        ? ((l = async (e) => {
            let t = await (0, o.apiClient)(`/api/invoices/${_.id}`, {
              method: "PATCH",
              body: JSON.stringify({
                status: e,
                paidAt: "paid" === e ? new Date().toISOString() : null,
              }),
            });
            if (t.error || !t.data) throw Error(t.error?.message ?? "Update failed");
            return t.data.invoice;
          }),
          (D[2] = _.id),
          (D[3] = l))
        : (l = D[3]),
        D[4] !== _.id || D[5] !== F
          ? ((h = () => {
              (F.invalidateQueries({ queryKey: ["invoice", _.id] }),
                F.invalidateQueries({ queryKey: ["invoices"] }));
            }),
            (D[4] = _.id),
            (D[5] = F),
            (D[6] = h))
          : (h = D[6]),
        D[7] !== l || D[8] !== h
          ? ((d = { mutationFn: l, onSuccess: h }), (D[7] = l), (D[8] = h), (D[9] = d))
          : (d = D[9]));
      let A = (0, i.useMutation)(d);
      if (k) {
        let e;
        return (
          D[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "text-white/60",
                children: "Loading invoice...",
              })),
              (D[10] = e))
            : (e = D[10]),
          e
        );
      }
      if (N || !U) {
        let e;
        return (
          D[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "text-white/60",
                children: "Failed to load invoice.",
              })),
              (D[11] = e))
            : (e = D[11]),
          e
        );
      }
      return (
        D[12] !== U.id ? ((p = U.id.slice(0, 8)), (D[12] = U.id), (D[13] = p)) : (p = D[13]),
        D[14] !== p
          ? ((f = (0, t.jsx)(c.CardHeader, {
              children: (0, t.jsxs)(c.CardTitle, { children: ["Invoice ", p] }),
            })),
            (D[14] = p),
            (D[15] = f))
          : (f = D[15]),
        D[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Amount" })),
            (D[16] = m))
          : (m = D[16]),
        D[17] !== U.amount
          ? ((y = U.amount.toLocaleString()), (D[17] = U.amount), (D[18] = y))
          : (y = D[18]),
        D[19] !== U.currency || D[20] !== y
          ? ((b = (0, t.jsxs)("div", {
              children: [
                m,
                (0, t.jsxs)("p", {
                  className: "text-lg font-semibold",
                  children: [y, " ", U.currency],
                }),
              ],
            })),
            (D[19] = U.currency),
            (D[20] = y),
            (D[21] = b))
          : (b = D[21]),
        D[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Status" })),
            (D[22] = v))
          : (v = D[22]),
        D[23] !== U.status
          ? ((R = (0, t.jsxs)("div", {
              children: [v, (0, t.jsx)("p", { className: "capitalize", children: U.status })],
            })),
            (D[23] = U.status),
            (D[24] = R))
          : (R = D[24]),
        D[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Issued" })),
            (D[25] = g))
          : (g = D[25]),
        D[26] !== U.issuedAt
          ? ((x = new Date(U.issuedAt).toLocaleDateString()), (D[26] = U.issuedAt), (D[27] = x))
          : (x = D[27]),
        D[28] !== x
          ? ((S = (0, t.jsxs)("div", { children: [g, (0, t.jsx)("p", { children: x })] })),
            (D[28] = x),
            (D[29] = S))
          : (S = D[29]),
        D[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Paid" })),
            (D[30] = O))
          : (O = D[30]),
        D[31] !== U.paidAt
          ? ((Q = U.paidAt ? new Date(U.paidAt).toLocaleDateString() : "-"),
            (D[31] = U.paidAt),
            (D[32] = Q))
          : (Q = D[32]),
        D[33] !== Q
          ? ((C = (0, t.jsxs)("div", { children: [O, (0, t.jsx)("p", { children: Q })] })),
            (D[33] = Q),
            (D[34] = C))
          : (C = D[34]),
        D[35] !== A ? ((T = () => A.mutate("paid")), (D[35] = A), (D[36] = T)) : (T = D[36]),
        D[37] !== T || D[38] !== A.isPending
          ? ((E = (0, t.jsx)(u.Button, {
              variant: "secondary",
              onClick: T,
              disabled: A.isPending,
              children: "Mark paid",
            })),
            (D[37] = T),
            (D[38] = A.isPending),
            (D[39] = E))
          : (E = D[39]),
        D[40] !== P
          ? ((w = (0, t.jsx)(u.Button, {
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => P.push("/billing/invoices"),
              children: "Back",
            })),
            (D[40] = P),
            (D[41] = w))
          : (w = D[41]),
        D[42] !== E || D[43] !== w
          ? ((I = (0, t.jsxs)("div", { className: "flex gap-3", children: [E, w] })),
            (D[42] = E),
            (D[43] = w),
            (D[44] = I))
          : (I = D[44]),
        D[45] !== R || D[46] !== S || D[47] !== C || D[48] !== I || D[49] !== b
          ? ((j = (0, t.jsxs)(c.CardContent, {
              className: "space-y-4",
              children: [b, R, S, C, I],
            })),
            (D[45] = R),
            (D[46] = S),
            (D[47] = C),
            (D[48] = I),
            (D[49] = b),
            (D[50] = j))
          : (j = D[50]),
        D[51] !== j || D[52] !== f
          ? ((M = (0, t.jsxs)(c.Card, {
              className: "border-white/10 bg-white/5",
              children: [f, j],
            })),
            (D[51] = j),
            (D[52] = f),
            (D[53] = M))
          : (M = D[53]),
        M
      );
    }
    e.s(["default", () => l]);
  },
]);
