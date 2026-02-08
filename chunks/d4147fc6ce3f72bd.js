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
        #m = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            c(this.#s, this.options) ? this.#f() : this.updateResult(),
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
          (s && d(this.#s, r, this.options, t) && this.#f(),
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
          this.#m.add(e);
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
          return this.#f({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#n)
          );
        }
        #f(e) {
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
                  this.#f();
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
            l = this.#a,
            h = this.#o,
            m = e !== s ? e.state : this.#i,
            { state: f } = e,
            y = { ...f },
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && c(e, t),
              o = r && d(e, s, t, n);
            ((a || o) && (y = { ...y, ...(0, i.fetchState)(f.data, e.options) }),
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
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, o.replaceData)(u?.data, e, t)), (b = !0)));
          }
          if (t.select && void 0 !== r && !x)
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
          this.#t && ((v = this.#t), (r = this.#l), (R = Date.now()), (g = "error"));
          let S = "fetching" === y.fetchStatus,
            Q = "pending" === g,
            O = "error" === g,
            C = Q && S,
            w = void 0 !== r,
            E = {
              status: g,
              fetchStatus: y.fetchStatus,
              isPending: Q,
              isSuccess: "success" === g,
              isError: O,
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
                y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
              isFetching: S,
              isRefetching: S && !Q,
              isLoadingError: O && !w,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: b,
              isRefetchError: O && w,
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
            if ("all" === r || (!r && !this.#m.size)) return !0;
            let s = new Set(r ?? this.#m);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#n).some((t) => this.#n[t] !== e[t] && s.has(t))
            );
          };
          this.#Q({ listeners: r() });
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
        #Q(e) {
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
    var m = e.i(34706),
      f = e.i(77606);
    e.i(62482);
    var y = m.createContext(
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
      b = m.createContext(!1);
    b.Provider;
    var v = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function R(e, t) {
      return (function (e, t, r) {
        let i,
          n = m.useContext(b),
          a = m.useContext(y),
          u = (0, f.useQueryClient)(r),
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
          m.useEffect(() => {
            a.clearReset();
          }, [a]));
        let h = !u.getQueryCache().get(l.queryHash),
          [d] = m.useState(() => new t(u, l)),
          p = d.getOptimisticResult(l),
          R = !n && !1 !== e.subscribed;
        if (
          (m.useSyncExternalStore(
            m.useCallback(
              (e) => {
                let t = R ? d.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (d.updateResult(), t);
              },
              [d, R]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          m.useEffect(() => {
            d.setOptions(l);
          }, [l, d]),
          l?.suspense && p.isPending)
        )
          throw v(l, d, a);
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
          let e = h ? v(l, d, a) : c?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return l.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, l, t);
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
        #O;
        #C;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#w());
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
                .notify({ type: "observerOptionsUpdated", mutation: this.#O, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, n.hashKey)(t.mutationKey) !== (0, n.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#O?.state.status === "pending" && this.#O.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#O?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#w(), this.#Q(e));
        }
        getCurrentResult() {
          return this.#n;
        }
        reset() {
          (this.#O?.removeObserver(this), (this.#O = void 0), this.#w(), this.#Q());
        }
        mutate(e, t) {
          return (
            (this.#C = t),
            this.#O?.removeObserver(this),
            (this.#O = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#O.addObserver(this),
            this.#O.execute(e)
          );
        }
        #w() {
          let e = this.#O?.state ?? (0, r.getDefaultState)();
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
        #Q(e) {
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
      let l = t.useSyncExternalStore(
          t.useCallback((e) => u.subscribe(s.notifyManager.batchCalls(e)), [u]),
          () => u.getCurrentResult(),
          () => u.getCurrentResult()
        ),
        c = t.useCallback(
          (e, t) => {
            u.mutate(e, t).catch(n.noop);
          },
          [u]
        );
      if (l.error && (0, n.shouldThrowError)(u.options.throwOnError, [l.error])) throw l.error;
      return { ...l, mutate: c, mutateAsync: l.mutate };
    }
    e.s(["useMutation", () => u], 68315);
  },
  54190,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(34706),
      i = e.i(59587),
      n = e.i(68315),
      a = e.i(3021),
      o = e.i(77606),
      u = e.i(58976),
      l = e.i(32103),
      c = e.i(16220),
      h = e.i(22991),
      d = e.i(39781);
    let p = ["owner", "admin", "manager", "member"];
    function m() {
      let e,
        m,
        v,
        R,
        g,
        x,
        S,
        Q,
        O,
        C,
        w,
        E,
        T,
        I,
        j,
        M,
        _,
        P,
        N,
        U,
        F,
        D,
        k,
        q,
        K,
        L,
        A,
        B = (0, r.c)(55),
        H = (0, i.useParams)(),
        W = (0, i.useRouter)(),
        z = (0, o.useQueryClient)(),
        V = (0, c.useAuthStore)(b);
      B[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = {}), (B[0] = e)) : (e = B[0]);
      let [$, J] = (0, s.useState)(e);
      (B[1] !== V || B[2] !== W
        ? ((m = () => {
            V && "owner" !== V.role && "admin" !== V.role && W.replace("/403");
          }),
          (v = [V, W]),
          (B[1] = V),
          (B[2] = W),
          (B[3] = m),
          (B[4] = v))
        : ((m = B[3]), (v = B[4])),
        (0, s.useEffect)(m, v),
        B[5] !== H.id
          ? ((R = {
              queryKey: ["user", H.id],
              queryFn: async () => {
                let e = await (0, l.apiClient)(`/api/users/${H.id}`);
                if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to fetch user");
                return e.data.user;
              },
            }),
            (B[5] = H.id),
            (B[6] = R))
          : (R = B[6]));
      let { data: G, isLoading: X, isError: Y } = (0, a.useQuery)(R),
        Z = $.role ?? G?.role ?? "member",
        ee = $.status ?? G?.status ?? "active";
      (B[7] !== H.id
        ? ((g = async (e) => {
            let t = await (0, l.apiClient)(`/api/users/${H.id}`, {
              method: "PATCH",
              body: JSON.stringify(e),
            });
            if (t.error || !t.data) throw Error(t.error?.message ?? "Update failed");
            return t.data.user;
          }),
          (B[7] = H.id),
          (B[8] = g))
        : (g = B[8]),
        B[9] !== H.id || B[10] !== z
          ? ((x = () => {
              (u.toast.success("User updated"),
                J({}),
                z.invalidateQueries({ queryKey: ["user", H.id] }),
                z.invalidateQueries({ queryKey: ["users"] }));
            }),
            (B[9] = H.id),
            (B[10] = z),
            (B[11] = x))
          : (x = B[11]),
        B[12] !== g || B[13] !== x
          ? ((S = { mutationFn: g, onSuccess: x, onError: y }),
            (B[12] = g),
            (B[13] = x),
            (B[14] = S))
          : (S = B[14]));
      let et = (0, n.useMutation)(S);
      if (V && "owner" !== V.role && "admin" !== V.role) return null;
      if (X) {
        let e;
        return (
          B[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", { className: "text-white/60", children: "Loading user..." })),
              (B[15] = e))
            : (e = B[15]),
          e
        );
      }
      if (Y || !G) {
        let e;
        return (
          B[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "text-white/60",
                children: "Failed to load user.",
              })),
              (B[16] = e))
            : (e = B[16]),
          e
        );
      }
      return (
        B[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, t.jsx)(d.CardHeader, {
              children: (0, t.jsx)(d.CardTitle, { children: "User profile" }),
            })),
            (B[17] = Q))
          : (Q = B[17]),
        B[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Name" })),
            (B[18] = O))
          : (O = B[18]),
        B[19] !== G.name
          ? ((C = (0, t.jsxs)("div", {
              children: [
                O,
                (0, t.jsx)("p", { className: "text-lg font-semibold", children: G.name }),
              ],
            })),
            (B[19] = G.name),
            (B[20] = C))
          : (C = B[20]),
        B[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Email" })),
            (B[21] = w))
          : (w = B[21]),
        B[22] !== G.email
          ? ((E = (0, t.jsxs)("div", { children: [w, (0, t.jsx)("p", { children: G.email })] })),
            (B[22] = G.email),
            (B[23] = E))
          : (E = B[23]),
        B[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Role" })),
            (B[24] = T))
          : (T = B[24]),
        B[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (e) => J((t) => ({ ...t, role: e.target.value }))),
            (j = p.map(f)),
            (B[25] = I),
            (B[26] = j))
          : ((I = B[25]), (j = B[26])),
        B[27] !== Z
          ? ((M = (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                T,
                (0, t.jsx)("select", {
                  className:
                    "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                  value: Z,
                  onChange: I,
                  children: j,
                }),
              ],
            })),
            (B[27] = Z),
            (B[28] = M))
          : (M = B[28]),
        B[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, t.jsx)("p", { className: "text-sm text-white/60", children: "Status" })),
            (B[29] = _))
          : (_ = B[29]),
        B[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (e) => J((t) => ({ ...t, status: e.target.value }))),
            (N = (0, t.jsx)("option", { value: "active", children: "active" })),
            (U = (0, t.jsx)("option", { value: "inactive", children: "inactive" })),
            (B[30] = P),
            (B[31] = N),
            (B[32] = U))
          : ((P = B[30]), (N = B[31]), (U = B[32])),
        B[33] !== ee
          ? ((F = (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                _,
                (0, t.jsxs)("select", {
                  className:
                    "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                  value: ee,
                  onChange: P,
                  children: [N, U],
                }),
              ],
            })),
            (B[33] = ee),
            (B[34] = F))
          : (F = B[34]),
        B[35] !== M || B[36] !== F
          ? ((D = (0, t.jsxs)("div", { className: "grid gap-4 md:grid-cols-2", children: [M, F] })),
            (B[35] = M),
            (B[36] = F),
            (B[37] = D))
          : (D = B[37]),
        B[38] !== Z || B[39] !== ee || B[40] !== et
          ? ((k = () => et.mutate({ role: Z, status: ee })),
            (B[38] = Z),
            (B[39] = ee),
            (B[40] = et),
            (B[41] = k))
          : (k = B[41]),
        B[42] !== k || B[43] !== et.isPending
          ? ((q = (0, t.jsx)(h.Button, {
              className: "bg-white text-slate-900 hover:bg-white/90",
              onClick: k,
              disabled: et.isPending,
              children: "Save changes",
            })),
            (B[42] = k),
            (B[43] = et.isPending),
            (B[44] = q))
          : (q = B[44]),
        B[45] !== W
          ? ((K = (0, t.jsx)(h.Button, {
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => W.push("/users"),
              children: "Back",
            })),
            (B[45] = W),
            (B[46] = K))
          : (K = B[46]),
        B[47] !== q || B[48] !== K
          ? ((L = (0, t.jsxs)("div", { className: "flex gap-3", children: [q, K] })),
            (B[47] = q),
            (B[48] = K),
            (B[49] = L))
          : (L = B[49]),
        B[50] !== E || B[51] !== D || B[52] !== L || B[53] !== C
          ? ((A = (0, t.jsxs)(d.Card, {
              className: "border-white/10 bg-white/5",
              children: [
                Q,
                (0, t.jsxs)(d.CardContent, { className: "space-y-4", children: [C, E, D, L] }),
              ],
            })),
            (B[50] = E),
            (B[51] = D),
            (B[52] = L),
            (B[53] = C),
            (B[54] = A))
          : (A = B[54]),
        A
      );
    }
    function f(e) {
      return (0, t.jsx)("option", { value: e, children: e }, e);
    }
    function y(e) {
      return u.toast.error(e.message);
    }
    function b(e) {
      return e.user;
    }
    e.s(["default", () => m]);
  },
]);
