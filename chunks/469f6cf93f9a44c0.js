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
        l,
        o,
        c = (0, r.c)(10);
      return (
        c[0] !== e
          ? (({ className: i, type: n, ...a } = e), (c[0] = e), (c[1] = i), (c[2] = a), (c[3] = n))
          : ((i = c[1]), (a = c[2]), (n = c[3])),
        c[4] !== i
          ? ((l = (0, s.cn)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              i
            )),
            (c[4] = i),
            (c[5] = l))
          : (l = c[5]),
        c[6] !== a || c[7] !== l || c[8] !== n
          ? ((o = (0, t.jsx)("input", { type: n, "data-slot": "input", className: l, ...a })),
            (c[6] = a),
            (c[7] = l),
            (c[8] = n),
            (c[9] = o))
          : (o = c[9]),
        o
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
          this.#v();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(l.noop)), t);
        }
        #g() {
          this.#x();
          let e = (0, l.resolveStaleTime)(this.options.staleTime, this.#s);
          if (l.isServer || this.#a.isStale || !(0, l.isValidTimeout)(e)) return;
          let t = (0, l.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = o.timeoutManager.setTimeout(() => {
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
              (this.#d = o.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#b();
              }, this.#p)));
        }
        #m() {
          (this.#g(), this.#w(this.#R()));
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
          let { error: y, errorUpdatedAt: v, status: g } = m;
          r = m.data;
          let R = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
            let e;
            (o?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = o.data), (R = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#u?.state.data, this.#u)
                    : t.placeholderData),
              void 0 !== e && ((g = "success"), (r = (0, l.replaceData)(o?.data, e, t)), (x = !0)));
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
          this.#t && ((y = this.#t), (r = this.#c), (v = Date.now()), (g = "error"));
          let w = "fetching" === m.fetchStatus,
            j = "pending" === g,
            T = "error" === g,
            Q = j && w,
            C = void 0 !== r,
            S = {
              status: g,
              fetchStatus: m.fetchStatus,
              isPending: j,
              isSuccess: "success" === g,
              isError: T,
              isInitialLoading: Q,
              isLoading: Q,
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
              isFetching: w,
              isRefetching: w && !j,
              isLoadingError: T && !C,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: x,
              isRefetchError: T && C,
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
  27091,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      s = e.i(34706),
      i = e.i(19871),
      a = e.i(3021),
      n = e.i(32103),
      l = e.i(22991),
      o = e.i(39781),
      c = e.i(61156),
      u = e.i(59115);
    let h = ["active", "paused", "completed", "archived"];
    function d() {
      let e,
        d,
        b,
        m,
        x,
        y,
        v,
        g,
        R,
        w,
        j,
        T,
        Q,
        C = (0, r.c)(27),
        [S, I] = (0, s.useState)(""),
        [O, E] = (0, s.useState)("");
      C[0] !== S || C[1] !== O
        ? ((e = {
            queryKey: ["projects", S, O],
            queryFn: async () => {
              let e = new URLSearchParams({ page: "1", pageSize: "12" });
              (S && e.set("q", S), O && e.set("status", O));
              let t = await (0, n.apiClient)(`/api/projects?${e}`);
              if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to load projects");
              return t.data;
            },
          }),
          (C[0] = S),
          (C[1] = O),
          (C[2] = e))
        : (e = C[2]);
      let { data: N, isLoading: D, isError: _, refetch: k } = (0, a.useQuery)(e);
      return (
        C[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(o.CardTitle, { children: "Projects" }),
                (0, t.jsx)("p", {
                  className: "text-sm text-white/60",
                  children: "Portfolio health and delivery timelines.",
                }),
              ],
            })),
            (C[3] = d))
          : (d = C[3]),
        C[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (e) => I(e.target.value)), (C[4] = b))
          : (b = C[4]),
        C[5] !== S
          ? ((m = (0, t.jsx)(c.Input, {
              placeholder: "Search projects...",
              value: S,
              onChange: b,
              className: "w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40",
            })),
            (C[5] = S),
            (C[6] = m))
          : (m = C[6]),
        C[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (e) => E(e.target.value)),
            (y = (0, t.jsx)("option", { value: "", children: "All statuses" })),
            (v = h.map(f)),
            (C[7] = x),
            (C[8] = y),
            (C[9] = v))
          : ((x = C[7]), (y = C[8]), (v = C[9])),
        C[10] !== O
          ? ((g = (0, t.jsxs)("select", {
              className: "h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
              value: O,
              onChange: x,
              children: [y, v],
            })),
            (C[10] = O),
            (C[11] = g))
          : (g = C[11]),
        C[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, t.jsx)(l.Button, {
              asChild: !0,
              className: "bg-white text-slate-900 hover:bg-white/90",
              children: (0, t.jsx)(i.default, { href: "/projects/new", children: "New project" }),
            })),
            (C[12] = R))
          : (R = C[12]),
        C[13] !== k
          ? ((w = (0, t.jsx)(l.Button, {
              variant: "outline",
              className: "border-white/10 text-white",
              onClick: () => k(),
              children: "Refresh",
            })),
            (C[13] = k),
            (C[14] = w))
          : (w = C[14]),
        C[15] !== m || C[16] !== g || C[17] !== w
          ? ((j = (0, t.jsxs)(o.CardHeader, {
              className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
              children: [
                d,
                (0, t.jsxs)("div", { className: "flex flex-wrap gap-3", children: [m, g, R, w] }),
              ],
            })),
            (C[15] = m),
            (C[16] = g),
            (C[17] = w),
            (C[18] = j))
          : (j = C[18]),
        C[19] !== N || C[20] !== _ || C[21] !== D || C[22] !== k
          ? ((T = (0, t.jsx)(o.CardContent, {
              children: D
                ? (0, t.jsx)("div", {
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                    children: "Loading projects...",
                  })
                : _
                  ? (0, t.jsxs)("div", {
                      className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                      children: [
                        (0, t.jsx)("p", {
                          className: "text-lg font-semibold",
                          children: "Failed to load projects",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/60",
                          children: "Please try again.",
                        }),
                        (0, t.jsx)(l.Button, {
                          className: "mt-4",
                          onClick: () => k(),
                          children: "Retry",
                        }),
                      ],
                    })
                  : N && 0 === N.items.length
                    ? (0, t.jsxs)("div", {
                        className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: "No projects found",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-white/60",
                            children: "Try adjusting filters or create a new project.",
                          }),
                        ],
                      })
                    : (0, t.jsx)("div", {
                        className: "rounded-xl border border-white/10",
                        children: (0, t.jsxs)(u.Table, {
                          children: [
                            (0, t.jsx)(u.TableHeader, {
                              children: (0, t.jsxs)(u.TableRow, {
                                children: [
                                  (0, t.jsx)(u.TableHead, { children: "Name" }),
                                  (0, t.jsx)(u.TableHead, { children: "Status" }),
                                  (0, t.jsx)(u.TableHead, { children: "Budget" }),
                                  (0, t.jsx)(u.TableHead, { children: "Due date" }),
                                  (0, t.jsx)(u.TableHead, { children: "Actions" }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(u.TableBody, { children: N?.items.map(p) }),
                          ],
                        }),
                      }),
            })),
            (C[19] = N),
            (C[20] = _),
            (C[21] = D),
            (C[22] = k),
            (C[23] = T))
          : (T = C[23]),
        C[24] !== j || C[25] !== T
          ? ((Q = (0, t.jsxs)(o.Card, {
              className: "border-white/10 bg-white/5",
              children: [j, T],
            })),
            (C[24] = j),
            (C[25] = T),
            (C[26] = Q))
          : (Q = C[26]),
        Q
      );
    }
    function p(e) {
      return (0, t.jsxs)(
        u.TableRow,
        {
          children: [
            (0, t.jsx)(u.TableCell, { className: "font-medium", children: e.name }),
            (0, t.jsx)(u.TableCell, { className: "capitalize", children: e.status }),
            (0, t.jsxs)(u.TableCell, { children: ["$", e.budget.toLocaleString()] }),
            (0, t.jsx)(u.TableCell, { children: new Date(e.dueDate).toLocaleDateString() }),
            (0, t.jsx)(u.TableCell, {
              children: (0, t.jsx)(l.Button, {
                asChild: !0,
                size: "xs",
                variant: "outline",
                className: "border-white/10 text-white",
                children: (0, t.jsx)(i.default, { href: `/projects/${e.id}`, children: "View" }),
              }),
            }),
          ],
        },
        e.id
      );
    }
    function f(e) {
      return (0, t.jsx)("option", { value: e, children: e }, e);
    }
    e.s(["default", () => d]);
  },
]);
