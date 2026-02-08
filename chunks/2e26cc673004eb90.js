(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  3151,
  (t, e, i) => {
    "use strict";
    var s = t.r(34706).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    i.c = function (t) {
      return s.H.useMemoCache(t);
    };
  },
  48612,
  (t, e, i) => {
    "use strict";
    e.exports = t.r(3151);
  },
  32103,
  (t) => {
    "use strict";
    let e = async (t, e) => {
      let i = await fetch(`${t}`, {
        ...e,
        headers: { "Content-Type": "application/json", ...(e?.headers ?? {}) },
      });
      if (!i.ok) {
        var s;
        let t = (await i.json().catch(() => null))?.message ?? i.statusText;
        return {
          data: null,
          error: {
            status: (s = i.status),
            message: t,
            code: {
              401: "UNAUTHORIZED",
              403: "FORBIDDEN",
              404: "NOT_FOUND",
              422: "UNPROCESSABLE_ENTITY",
              429: "TOO_MANY_REQUESTS",
              500: "SERVER_ERROR",
            }[s],
          },
        };
      }
      return { data: await i.json().catch(() => null), error: null };
    };
    t.s(["apiClient", 0, e]);
  },
  77606,
  (t) => {
    "use strict";
    var e = t.i(34706),
      i = t.i(62482),
      s = e.createContext(void 0),
      r = (t) => {
        let i = e.useContext(s);
        if (t) return t;
        if (!i) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return i;
      },
      n = ({ client: t, children: r }) => (
        e.useEffect(
          () => (
            t.mount(),
            () => {
              t.unmount();
            }
          ),
          [t]
        ),
        (0, i.jsx)(s.Provider, { value: t, children: r })
      );
    t.s(["QueryClientProvider", () => n, "useQueryClient", () => r]);
  },
  44517,
  (t) => {
    "use strict";
    var e = {
        setTimeout: (t, e) => setTimeout(t, e),
        clearTimeout: (t) => clearTimeout(t),
        setInterval: (t, e) => setInterval(t, e),
        clearInterval: (t) => clearInterval(t),
      },
      i = new (class {
        #t = e;
        #e = !1;
        setTimeoutProvider(t) {
          this.#t = t;
        }
        setTimeout(t, e) {
          return this.#t.setTimeout(t, e);
        }
        clearTimeout(t) {
          this.#t.clearTimeout(t);
        }
        setInterval(t, e) {
          return this.#t.setInterval(t, e);
        }
        clearInterval(t) {
          this.#t.clearInterval(t);
        }
      })();
    function s(t) {
      setTimeout(t, 0);
    }
    t.s(["systemSetTimeoutZero", () => s, "timeoutManager", () => i]);
  },
  79553,
  (t) => {
    "use strict";
    var e = t.i(44517),
      i = "u" < typeof window || "Deno" in globalThis;
    function s() {}
    function r(t, e) {
      return "function" == typeof t ? t(e) : t;
    }
    function n(t) {
      return "number" == typeof t && t >= 0 && t !== 1 / 0;
    }
    function a(t, e) {
      return Math.max(t + (e || 0) - Date.now(), 0);
    }
    function o(t, e) {
      return "function" == typeof t ? t(e) : t;
    }
    function u(t, e) {
      return "function" == typeof t ? t(e) : t;
    }
    function h(t, e) {
      let { type: i = "all", exact: s, fetchStatus: r, predicate: n, queryKey: a, stale: o } = t;
      if (a) {
        if (s) {
          if (e.queryHash !== l(a, e.options)) return !1;
        } else if (!f(e.queryKey, a)) return !1;
      }
      if ("all" !== i) {
        let t = e.isActive();
        if (("active" === i && !t) || ("inactive" === i && t)) return !1;
      }
      return (
        ("boolean" != typeof o || e.isStale() === o) &&
        (!r || r === e.state.fetchStatus) &&
        (!n || !!n(e))
      );
    }
    function c(t, e) {
      let { exact: i, status: s, predicate: r, mutationKey: n } = t;
      if (n) {
        if (!e.options.mutationKey) return !1;
        if (i) {
          if (d(e.options.mutationKey) !== d(n)) return !1;
        } else if (!f(e.options.mutationKey, n)) return !1;
      }
      return (!s || e.state.status === s) && (!r || !!r(e));
    }
    function l(t, e) {
      return (e?.queryKeyHashFn || d)(t);
    }
    function d(t) {
      return JSON.stringify(t, (t, e) =>
        v(e)
          ? Object.keys(e)
              .sort()
              .reduce((t, i) => ((t[i] = e[i]), t), {})
          : e
      );
    }
    function f(t, e) {
      return (
        t === e ||
        (typeof t == typeof e &&
          !!t &&
          !!e &&
          "object" == typeof t &&
          "object" == typeof e &&
          Object.keys(e).every((i) => f(t[i], e[i])))
      );
    }
    var p = Object.prototype.hasOwnProperty;
    function y(t, e) {
      if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
      for (let i in t) if (t[i] !== e[i]) return !1;
      return !0;
    }
    function m(t) {
      return Array.isArray(t) && t.length === Object.keys(t).length;
    }
    function v(t) {
      if (!g(t)) return !1;
      let e = t.constructor;
      if (void 0 === e) return !0;
      let i = e.prototype;
      return (
        !!g(i) &&
        !!i.hasOwnProperty("isPrototypeOf") &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    }
    function g(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }
    function b(t) {
      return new Promise((i) => {
        e.timeoutManager.setTimeout(i, t);
      });
    }
    function C(t, e, i) {
      return "function" == typeof i.structuralSharing
        ? i.structuralSharing(t, e)
        : !1 !== i.structuralSharing
          ? (function t(e, i, s = 0) {
              if (e === i) return e;
              if (s > 500) return i;
              let r = m(e) && m(i);
              if (!r && !(v(e) && v(i))) return i;
              let n = (r ? e : Object.keys(e)).length,
                a = r ? i : Object.keys(i),
                o = a.length,
                u = r ? Array(o) : {},
                h = 0;
              for (let c = 0; c < o; c++) {
                let o = r ? c : a[c],
                  l = e[o],
                  d = i[o];
                if (l === d) {
                  ((u[o] = l), (r ? c < n : p.call(e, o)) && h++);
                  continue;
                }
                if (null === l || null === d || "object" != typeof l || "object" != typeof d) {
                  u[o] = d;
                  continue;
                }
                let f = t(l, d, s + 1);
                ((u[o] = f), f === l && h++);
              }
              return n === o && h === n ? e : u;
            })(t, e)
          : e;
    }
    function O(t, e, i = 0) {
      let s = [...t, e];
      return i && s.length > i ? s.slice(1) : s;
    }
    function S(t, e, i = 0) {
      let s = [e, ...t];
      return i && s.length > i ? s.slice(0, -1) : s;
    }
    var w = Symbol();
    function q(t, e) {
      return !t.queryFn && e?.initialPromise
        ? () => e.initialPromise
        : t.queryFn && t.queryFn !== w
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
    }
    function T(t, e) {
      return "function" == typeof t ? t(...e) : !!t;
    }
    function P(t, e, i) {
      let s,
        r = !1;
      return (
        Object.defineProperty(t, "signal", {
          enumerable: !0,
          get: () => (
            (s ??= e()),
            r || ((r = !0), s.aborted ? i() : s.addEventListener("abort", i, { once: !0 })),
            s
          ),
        }),
        t
      );
    }
    t.s([
      "addConsumeAwareSignal",
      () => P,
      "addToEnd",
      () => O,
      "addToStart",
      () => S,
      "ensureQueryFn",
      () => q,
      "functionalUpdate",
      () => r,
      "hashKey",
      () => d,
      "hashQueryKeyByOptions",
      () => l,
      "isServer",
      () => i,
      "isValidTimeout",
      () => n,
      "matchMutation",
      () => c,
      "matchQuery",
      () => h,
      "noop",
      () => s,
      "partialMatchKey",
      () => f,
      "replaceData",
      () => C,
      "resolveEnabled",
      () => u,
      "resolveStaleTime",
      () => o,
      "shallowEqualObjects",
      () => y,
      "shouldThrowError",
      () => T,
      "skipToken",
      () => w,
      "sleep",
      () => b,
      "timeUntilStale",
      () => a,
    ]);
  },
  33634,
  (t) => {
    "use strict";
    let e, i, s, r, n, a;
    var o = t.i(44517).systemSetTimeoutZero,
      u =
        ((e = []),
        (i = 0),
        (s = (t) => {
          t();
        }),
        (r = (t) => {
          t();
        }),
        (n = o),
        {
          batch: (t) => {
            let a;
            i++;
            try {
              a = t();
            } finally {
              let t;
              --i ||
                ((t = e),
                (e = []),
                t.length &&
                  n(() => {
                    r(() => {
                      t.forEach((t) => {
                        s(t);
                      });
                    });
                  }));
            }
            return a;
          },
          batchCalls:
            (t) =>
            (...e) => {
              a(() => {
                t(...e);
              });
            },
          schedule: (a = (t) => {
            i
              ? e.push(t)
              : n(() => {
                  s(t);
                });
          }),
          setNotifyFunction: (t) => {
            s = t;
          },
          setBatchNotifyFunction: (t) => {
            r = t;
          },
          setScheduler: (t) => {
            n = t;
          },
        });
    t.s(["notifyManager", () => u]);
  },
  82778,
  (t) => {
    "use strict";
    var e = class {
      constructor() {
        ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
      }
      subscribe(t) {
        return (
          this.listeners.add(t),
          this.onSubscribe(),
          () => {
            (this.listeners.delete(t), this.onUnsubscribe());
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    };
    t.s(["Subscribable", () => e]);
  },
  70783,
  (t) => {
    "use strict";
    var e = t.i(82778),
      i = t.i(79553),
      s = new (class extends e.Subscribable {
        #i;
        #s;
        #r;
        constructor() {
          (super(),
            (this.#r = (t) => {
              if (!i.isServer && window.addEventListener) {
                let e = () => t();
                return (
                  window.addEventListener("visibilitychange", e, !1),
                  () => {
                    window.removeEventListener("visibilitychange", e);
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#s || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#s?.(), (this.#s = void 0));
        }
        setEventListener(t) {
          ((this.#r = t),
            this.#s?.(),
            (this.#s = t((t) => {
              "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
            })));
        }
        setFocused(t) {
          this.#i !== t && ((this.#i = t), this.onFocus());
        }
        onFocus() {
          let t = this.isFocused();
          this.listeners.forEach((e) => {
            e(t);
          });
        }
        isFocused() {
          return "boolean" == typeof this.#i
            ? this.#i
            : globalThis.document?.visibilityState !== "hidden";
        }
      })();
    t.s(["focusManager", () => s]);
  },
  62267,
  85338,
  76036,
  (t) => {
    "use strict";
    var e = t.i(70783),
      i = t.i(82778),
      s = t.i(79553),
      r = new (class extends i.Subscribable {
        #n = !0;
        #s;
        #r;
        constructor() {
          (super(),
            (this.#r = (t) => {
              if (!s.isServer && window.addEventListener) {
                let e = () => t(!0),
                  i = () => t(!1);
                return (
                  window.addEventListener("online", e, !1),
                  window.addEventListener("offline", i, !1),
                  () => {
                    (window.removeEventListener("online", e),
                      window.removeEventListener("offline", i));
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#s || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#s?.(), (this.#s = void 0));
        }
        setEventListener(t) {
          ((this.#r = t), this.#s?.(), (this.#s = t(this.setOnline.bind(this))));
        }
        setOnline(t) {
          this.#n !== t &&
            ((this.#n = t),
            this.listeners.forEach((e) => {
              e(t);
            }));
        }
        isOnline() {
          return this.#n;
        }
      })();
    function n() {
      let t,
        e,
        i = new Promise((i, s) => {
          ((t = i), (e = s));
        });
      function s(t) {
        (Object.assign(i, t), delete i.resolve, delete i.reject);
      }
      return (
        (i.status = "pending"),
        i.catch(() => {}),
        (i.resolve = (e) => {
          (s({ status: "fulfilled", value: e }), t(e));
        }),
        (i.reject = (t) => {
          (s({ status: "rejected", reason: t }), e(t));
        }),
        i
      );
    }
    function a(t) {
      return Math.min(1e3 * 2 ** t, 3e4);
    }
    function o(t) {
      return (t ?? "online") !== "online" || r.isOnline();
    }
    (t.s(["onlineManager", () => r], 85338), t.s(["pendingThenable", () => n], 76036));
    var u = class extends Error {
      constructor(t) {
        (super("CancelledError"), (this.revert = t?.revert), (this.silent = t?.silent));
      }
    };
    function h(t) {
      let i,
        h = !1,
        c = 0,
        l = n(),
        d = () =>
          e.focusManager.isFocused() && ("always" === t.networkMode || r.isOnline()) && t.canRun(),
        f = () => o(t.networkMode) && t.canRun(),
        p = (t) => {
          "pending" === l.status && (i?.(), l.resolve(t));
        },
        y = (t) => {
          "pending" === l.status && (i?.(), l.reject(t));
        },
        m = () =>
          new Promise((e) => {
            ((i = (t) => {
              ("pending" !== l.status || d()) && e(t);
            }),
              t.onPause?.());
          }).then(() => {
            ((i = void 0), "pending" === l.status && t.onContinue?.());
          }),
        v = () => {
          let e;
          if ("pending" !== l.status) return;
          let i = 0 === c ? t.initialPromise : void 0;
          try {
            e = i ?? t.fn();
          } catch (t) {
            e = Promise.reject(t);
          }
          Promise.resolve(e)
            .then(p)
            .catch((e) => {
              if ("pending" !== l.status) return;
              let i = t.retry ?? 3 * !s.isServer,
                r = t.retryDelay ?? a,
                n = "function" == typeof r ? r(c, e) : r,
                o =
                  !0 === i ||
                  ("number" == typeof i && c < i) ||
                  ("function" == typeof i && i(c, e));
              h || !o
                ? y(e)
                : (c++,
                  t.onFail?.(c, e),
                  (0, s.sleep)(n)
                    .then(() => (d() ? void 0 : m()))
                    .then(() => {
                      h ? y(e) : v();
                    }));
            });
        };
      return {
        promise: l,
        status: () => l.status,
        cancel: (e) => {
          if ("pending" === l.status) {
            let i = new u(e);
            (y(i), t.onCancel?.(i));
          }
        },
        continue: () => (i?.(), l),
        cancelRetry: () => {
          h = !0;
        },
        continueRetry: () => {
          h = !1;
        },
        canStart: f,
        start: () => (f() ? v() : m().then(v), l),
      };
    }
    t.s(["CancelledError", () => u, "canFetch", () => o, "createRetryer", () => h], 62267);
  },
  13084,
  (t) => {
    "use strict";
    var e = t.i(44517),
      i = t.i(79553),
      s = class {
        #a;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          (this.clearGcTimeout(),
            (0, i.isValidTimeout)(this.gcTime) &&
              (this.#a = e.timeoutManager.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)));
        }
        updateGcTime(t) {
          this.gcTime = Math.max(this.gcTime || 0, t ?? (i.isServer ? 1 / 0 : 3e5));
        }
        clearGcTimeout() {
          this.#a && (e.timeoutManager.clearTimeout(this.#a), (this.#a = void 0));
        }
      };
    t.s(["Removable", () => s]);
  },
  44835,
  (t) => {
    "use strict";
    var e = t.i(79553),
      i = t.i(33634),
      s = t.i(62267),
      r = t.i(13084),
      n = class extends r.Removable {
        #o;
        #u;
        #h;
        #c;
        #l;
        #d;
        #f;
        constructor(t) {
          (super(),
            (this.#f = !1),
            (this.#d = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.#c = t.client),
            (this.#h = this.#c.getQueryCache()),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.#o = u(this.options)),
            (this.state = t.state ?? this.#o),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          return this.#l?.promise;
        }
        setOptions(t) {
          if (
            ((this.options = { ...this.#d, ...t }),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let t = u(this.options);
            void 0 !== t.data && (this.setState(o(t.data, t.dataUpdatedAt)), (this.#o = t));
          }
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.#h.remove(this);
        }
        setData(t, i) {
          let s = (0, e.replaceData)(this.state.data, t, this.options);
          return (
            this.#p({ data: s, type: "success", dataUpdatedAt: i?.updatedAt, manual: i?.manual }),
            s
          );
        }
        setState(t, e) {
          this.#p({ type: "setState", state: t, setStateOptions: e });
        }
        cancel(t) {
          let i = this.#l?.promise;
          return (this.#l?.cancel(t), i ? i.then(e.noop).catch(e.noop) : Promise.resolve());
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(this.#o));
        }
        isActive() {
          return this.observers.some((t) => !1 !== (0, e.resolveEnabled)(t.options.enabled, this));
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === e.skipToken ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (t) => "static" === (0, e.resolveStaleTime)(t.options.staleTime, this)
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(t = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== t &&
              (!!this.state.isInvalidated || !(0, e.timeUntilStale)(this.state.dataUpdatedAt, t)))
          );
        }
        onFocus() {
          let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
          (t?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
        }
        onOnline() {
          let t = this.observers.find((t) => t.shouldFetchOnReconnect());
          (t?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.#h.notify({ type: "observerAdded", query: this, observer: t }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((e) => e !== t)),
            this.observers.length ||
              (this.#l && (this.#f ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()),
              this.scheduleGc()),
            this.#h.notify({ type: "observerRemoved", query: this, observer: t }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.#p({ type: "invalidate" });
        }
        async fetch(t, i) {
          let r;
          if ("idle" !== this.state.fetchStatus && this.#l?.status() !== "rejected") {
            if (void 0 !== this.state.data && i?.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.#l) return (this.#l.continueRetry(), this.#l.promise);
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            let t = this.observers.find((t) => t.options.queryFn);
            t && this.setOptions(t.options);
          }
          let n = new AbortController(),
            a = (t) => {
              Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => ((this.#f = !0), n.signal),
              });
            },
            o = () => {
              let t,
                s = (0, e.ensureQueryFn)(this.options, i),
                r = (a((t = { client: this.#c, queryKey: this.queryKey, meta: this.meta })), t);
              return ((this.#f = !1), this.options.persister)
                ? this.options.persister(s, r, this)
                : s(r);
            },
            u =
              (a(
                (r = {
                  fetchOptions: i,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#c,
                  state: this.state,
                  fetchFn: o,
                })
              ),
              r);
          (this.options.behavior?.onFetch(u, this),
            (this.#u = this.state),
            ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions?.meta) &&
              this.#p({ type: "fetch", meta: u.fetchOptions?.meta }),
            (this.#l = (0, s.createRetryer)({
              initialPromise: i?.initialPromise,
              fn: u.fetchFn,
              onCancel: (t) => {
                (t instanceof s.CancelledError &&
                  t.revert &&
                  this.setState({ ...this.#u, fetchStatus: "idle" }),
                  n.abort());
              },
              onFail: (t, e) => {
                this.#p({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#p({ type: "pause" });
              },
              onContinue: () => {
                this.#p({ type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
              canRun: () => !0,
            })));
          try {
            let t = await this.#l.start();
            if (void 0 === t) throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(t),
              this.#h.config.onSuccess?.(t, this),
              this.#h.config.onSettled?.(t, this.state.error, this),
              t
            );
          } catch (t) {
            if (t instanceof s.CancelledError) {
              if (t.silent) return this.#l.promise;
              else if (t.revert) {
                if (void 0 === this.state.data) throw t;
                return this.state.data;
              }
            }
            throw (
              this.#p({ type: "error", error: t }),
              this.#h.config.onError?.(t, this),
              this.#h.config.onSettled?.(this.state.data, t, this),
              t
            );
          } finally {
            this.scheduleGc();
          }
        }
        #p(t) {
          let e = (e) => {
            switch (t.type) {
              case "failed":
                return { ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
              case "pause":
                return { ...e, fetchStatus: "paused" };
              case "continue":
                return { ...e, fetchStatus: "fetching" };
              case "fetch":
                return { ...e, ...a(e.data, this.options), fetchMeta: t.meta ?? null };
              case "success":
                let i = {
                  ...e,
                  ...o(t.data, t.dataUpdatedAt),
                  dataUpdateCount: e.dataUpdateCount + 1,
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return ((this.#u = t.manual ? i : void 0), i);
              case "error":
                let s = t.error;
                return {
                  ...e,
                  error: s,
                  errorUpdateCount: e.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: e.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                  isInvalidated: !0,
                };
              case "invalidate":
                return { ...e, isInvalidated: !0 };
              case "setState":
                return { ...e, ...t.state };
            }
          };
          ((this.state = e(this.state)),
            i.notifyManager.batch(() => {
              (this.observers.forEach((t) => {
                t.onQueryUpdate();
              }),
                this.#h.notify({ query: this, type: "updated", action: t }));
            }));
        }
      };
    function a(t, e) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, s.canFetch)(e.networkMode) ? "fetching" : "paused",
        ...(void 0 === t && { error: null, status: "pending" }),
      };
    }
    function o(t, e) {
      return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success",
      };
    }
    function u(t) {
      let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
        i = void 0 !== e,
        s = i
          ? "function" == typeof t.initialDataUpdatedAt
            ? t.initialDataUpdatedAt()
            : t.initialDataUpdatedAt
          : 0;
      return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: i ? (s ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: i ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    t.s(["Query", () => n, "fetchState", () => a]);
  },
  9501,
  (t) => {
    "use strict";
    var e = t.i(33634),
      i = t.i(13084),
      s = t.i(62267),
      r = class extends i.Removable {
        #c;
        #y;
        #m;
        #l;
        constructor(t) {
          (super(),
            (this.#c = t.client),
            (this.mutationId = t.mutationId),
            (this.#m = t.mutationCache),
            (this.#y = []),
            (this.state = t.state || n()),
            this.setOptions(t.options),
            this.scheduleGc());
        }
        setOptions(t) {
          ((this.options = t), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          this.#y.includes(t) ||
            (this.#y.push(t),
            this.clearGcTimeout(),
            this.#m.notify({ type: "observerAdded", mutation: this, observer: t }));
        }
        removeObserver(t) {
          ((this.#y = this.#y.filter((e) => e !== t)),
            this.scheduleGc(),
            this.#m.notify({ type: "observerRemoved", mutation: this, observer: t }));
        }
        optionalRemove() {
          this.#y.length ||
            ("pending" === this.state.status ? this.scheduleGc() : this.#m.remove(this));
        }
        continue() {
          return this.#l?.continue() ?? this.execute(this.state.variables);
        }
        async execute(t) {
          let e = () => {
              this.#p({ type: "continue" });
            },
            i = { client: this.#c, meta: this.options.meta, mutationKey: this.options.mutationKey };
          this.#l = (0, s.createRetryer)({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, i)
                : Promise.reject(Error("No mutationFn found")),
            onFail: (t, e) => {
              this.#p({ type: "failed", failureCount: t, error: e });
            },
            onPause: () => {
              this.#p({ type: "pause" });
            },
            onContinue: e,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#m.canRun(this),
          });
          let r = "pending" === this.state.status,
            n = !this.#l.canStart();
          try {
            if (r) e();
            else {
              (this.#p({ type: "pending", variables: t, isPaused: n }),
                this.#m.config.onMutate && (await this.#m.config.onMutate(t, this, i)));
              let e = await this.options.onMutate?.(t, i);
              e !== this.state.context &&
                this.#p({ type: "pending", context: e, variables: t, isPaused: n });
            }
            let s = await this.#l.start();
            return (
              await this.#m.config.onSuccess?.(s, t, this.state.context, this, i),
              await this.options.onSuccess?.(s, t, this.state.context, i),
              await this.#m.config.onSettled?.(
                s,
                null,
                this.state.variables,
                this.state.context,
                this,
                i
              ),
              await this.options.onSettled?.(s, null, t, this.state.context, i),
              this.#p({ type: "success", data: s }),
              s
            );
          } catch (e) {
            try {
              await this.#m.config.onError?.(e, t, this.state.context, this, i);
            } catch (t) {
              Promise.reject(t);
            }
            try {
              await this.options.onError?.(e, t, this.state.context, i);
            } catch (t) {
              Promise.reject(t);
            }
            try {
              await this.#m.config.onSettled?.(
                void 0,
                e,
                this.state.variables,
                this.state.context,
                this,
                i
              );
            } catch (t) {
              Promise.reject(t);
            }
            try {
              await this.options.onSettled?.(void 0, e, t, this.state.context, i);
            } catch (t) {
              Promise.reject(t);
            }
            throw (this.#p({ type: "error", error: e }), e);
          } finally {
            this.#m.runNext(this);
          }
        }
        #p(t) {
          ((this.state = ((e) => {
            switch (t.type) {
              case "failed":
                return { ...e, failureCount: t.failureCount, failureReason: t.error };
              case "pause":
                return { ...e, isPaused: !0 };
              case "continue":
                return { ...e, isPaused: !1 };
              case "pending":
                return {
                  ...e,
                  context: t.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: t.isPaused,
                  status: "pending",
                  variables: t.variables,
                  submittedAt: Date.now(),
                };
              case "success":
                return {
                  ...e,
                  data: t.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...e,
                  data: void 0,
                  error: t.error,
                  failureCount: e.failureCount + 1,
                  failureReason: t.error,
                  isPaused: !1,
                  status: "error",
                };
            }
          })(this.state)),
            e.notifyManager.batch(() => {
              (this.#y.forEach((e) => {
                e.onMutationUpdate(t);
              }),
                this.#m.notify({ mutation: this, type: "updated", action: t }));
            }));
        }
      };
    function n() {
      return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
      };
    }
    t.s(["Mutation", () => r, "getDefaultState", () => n]);
  },
  82369,
  (t) => {
    "use strict";
    t.i(89283);
    var e = t.i(62482),
      i = t.i(34706),
      s = t.i(77606),
      r = t.i(79553),
      n = t.i(44835),
      a = t.i(33634),
      o = t.i(82778),
      u = class extends o.Subscribable {
        constructor(t = {}) {
          (super(), (this.config = t), (this.#v = new Map()));
        }
        #v;
        build(t, e, i) {
          let s = e.queryKey,
            a = e.queryHash ?? (0, r.hashQueryKeyByOptions)(s, e),
            o = this.get(a);
          return (
            o ||
              ((o = new n.Query({
                client: t,
                queryKey: s,
                queryHash: a,
                options: t.defaultQueryOptions(e),
                state: i,
                defaultOptions: t.getQueryDefaults(s),
              })),
              this.add(o)),
            o
          );
        }
        add(t) {
          this.#v.has(t.queryHash) ||
            (this.#v.set(t.queryHash, t), this.notify({ type: "added", query: t }));
        }
        remove(t) {
          let e = this.#v.get(t.queryHash);
          e &&
            (t.destroy(),
            e === t && this.#v.delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          a.notifyManager.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return this.#v.get(t);
        }
        getAll() {
          return [...this.#v.values()];
        }
        find(t) {
          let e = { exact: !0, ...t };
          return this.getAll().find((t) => (0, r.matchQuery)(e, t));
        }
        findAll(t = {}) {
          let e = this.getAll();
          return Object.keys(t).length > 0 ? e.filter((e) => (0, r.matchQuery)(t, e)) : e;
        }
        notify(t) {
          a.notifyManager.batch(() => {
            this.listeners.forEach((e) => {
              e(t);
            });
          });
        }
        onFocus() {
          a.notifyManager.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          a.notifyManager.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      },
      h = t.i(9501),
      c = o,
      l = class extends c.Subscribable {
        constructor(t = {}) {
          (super(), (this.config = t), (this.#g = new Set()), (this.#b = new Map()), (this.#C = 0));
        }
        #g;
        #b;
        #C;
        build(t, e, i) {
          let s = new h.Mutation({
            client: t,
            mutationCache: this,
            mutationId: ++this.#C,
            options: t.defaultMutationOptions(e),
            state: i,
          });
          return (this.add(s), s);
        }
        add(t) {
          this.#g.add(t);
          let e = d(t);
          if ("string" == typeof e) {
            let i = this.#b.get(e);
            i ? i.push(t) : this.#b.set(e, [t]);
          }
          this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          if (this.#g.delete(t)) {
            let e = d(t);
            if ("string" == typeof e) {
              let i = this.#b.get(e);
              if (i)
                if (i.length > 1) {
                  let e = i.indexOf(t);
                  -1 !== e && i.splice(e, 1);
                } else i[0] === t && this.#b.delete(e);
            }
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          let e = d(t);
          if ("string" != typeof e) return !0;
          {
            let i = this.#b.get(e),
              s = i?.find((t) => "pending" === t.state.status);
            return !s || s === t;
          }
        }
        runNext(t) {
          let e = d(t);
          if ("string" != typeof e) return Promise.resolve();
          {
            let i = this.#b.get(e)?.find((e) => e !== t && e.state.isPaused);
            return i?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          a.notifyManager.batch(() => {
            (this.#g.forEach((t) => {
              this.notify({ type: "removed", mutation: t });
            }),
              this.#g.clear(),
              this.#b.clear());
          });
        }
        getAll() {
          return Array.from(this.#g);
        }
        find(t) {
          let e = { exact: !0, ...t };
          return this.getAll().find((t) => (0, r.matchMutation)(e, t));
        }
        findAll(t = {}) {
          return this.getAll().filter((e) => (0, r.matchMutation)(t, e));
        }
        notify(t) {
          a.notifyManager.batch(() => {
            this.listeners.forEach((e) => {
              e(t);
            });
          });
        }
        resumePausedMutations() {
          let t = this.getAll().filter((t) => t.state.isPaused);
          return a.notifyManager.batch(() => Promise.all(t.map((t) => t.continue().catch(r.noop))));
        }
      };
    function d(t) {
      return t.options.scope?.id;
    }
    var f = t.i(70783),
      p = t.i(85338);
    function y(t) {
      return {
        onFetch: (e, i) => {
          let s = e.options,
            n = e.fetchOptions?.meta?.fetchMore?.direction,
            a = e.state.data?.pages || [],
            o = e.state.data?.pageParams || [],
            u = { pages: [], pageParams: [] },
            h = 0,
            c = async () => {
              let i = !1,
                c = (0, r.ensureQueryFn)(e.options, e.fetchOptions),
                l = async (t, s, n) => {
                  let a;
                  if (i) return Promise.reject();
                  if (null == s && t.pages.length) return Promise.resolve(t);
                  let o =
                      ((a = {
                        client: e.client,
                        queryKey: e.queryKey,
                        pageParam: s,
                        direction: n ? "backward" : "forward",
                        meta: e.options.meta,
                      }),
                      (0, r.addConsumeAwareSignal)(
                        a,
                        () => e.signal,
                        () => (i = !0)
                      ),
                      a),
                    u = await c(o),
                    { maxPages: h } = e.options,
                    l = n ? r.addToStart : r.addToEnd;
                  return { pages: l(t.pages, u, h), pageParams: l(t.pageParams, s, h) };
                };
              if (n && a.length) {
                let t = "backward" === n,
                  e = { pages: a, pageParams: o },
                  i = (
                    t
                      ? function (t, { pages: e, pageParams: i }) {
                          return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, i[0], i) : void 0;
                        }
                      : m
                  )(s, e);
                u = await l(e, i, t);
              } else {
                let e = t ?? a.length;
                do {
                  let t = 0 === h ? (o[0] ?? s.initialPageParam) : m(s, u);
                  if (h > 0 && null == t) break;
                  ((u = await l(u, t)), h++);
                } while (h < e);
              }
              return u;
            };
          e.options.persister
            ? (e.fetchFn = () =>
                e.options.persister?.(
                  c,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  i
                ))
            : (e.fetchFn = c);
        },
      };
    }
    function m(t, { pages: e, pageParams: i }) {
      let s = e.length - 1;
      return e.length > 0 ? t.getNextPageParam(e[s], e, i[s], i) : void 0;
    }
    var v = class {
        #O;
        #m;
        #d;
        #S;
        #w;
        #q;
        #T;
        #P;
        constructor(t = {}) {
          ((this.#O = t.queryCache || new u()),
            (this.#m = t.mutationCache || new l()),
            (this.#d = t.defaultOptions || {}),
            (this.#S = new Map()),
            (this.#w = new Map()),
            (this.#q = 0));
        }
        mount() {
          (this.#q++,
            1 === this.#q &&
              ((this.#T = f.focusManager.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), this.#O.onFocus());
              })),
              (this.#P = p.onlineManager.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), this.#O.onOnline());
              }))));
        }
        unmount() {
          (this.#q--,
            0 === this.#q && (this.#T?.(), (this.#T = void 0), this.#P?.(), (this.#P = void 0)));
        }
        isFetching(t) {
          return this.#O.findAll({ ...t, fetchStatus: "fetching" }).length;
        }
        isMutating(t) {
          return this.#m.findAll({ ...t, status: "pending" }).length;
        }
        getQueryData(t) {
          let e = this.defaultQueryOptions({ queryKey: t });
          return this.#O.get(e.queryHash)?.state.data;
        }
        ensureQueryData(t) {
          let e = this.defaultQueryOptions(t),
            i = this.#O.build(this, e),
            s = i.state.data;
          return void 0 === s
            ? this.fetchQuery(t)
            : (t.revalidateIfStale &&
                i.isStaleByTime((0, r.resolveStaleTime)(e.staleTime, i)) &&
                this.prefetchQuery(e),
              Promise.resolve(s));
        }
        getQueriesData(t) {
          return this.#O.findAll(t).map(({ queryKey: t, state: e }) => [t, e.data]);
        }
        setQueryData(t, e, i) {
          let s = this.defaultQueryOptions({ queryKey: t }),
            n = this.#O.get(s.queryHash),
            a = n?.state.data,
            o = (0, r.functionalUpdate)(e, a);
          if (void 0 !== o) return this.#O.build(this, s).setData(o, { ...i, manual: !0 });
        }
        setQueriesData(t, e, i) {
          return a.notifyManager.batch(() =>
            this.#O.findAll(t).map(({ queryKey: t }) => [t, this.setQueryData(t, e, i)])
          );
        }
        getQueryState(t) {
          let e = this.defaultQueryOptions({ queryKey: t });
          return this.#O.get(e.queryHash)?.state;
        }
        removeQueries(t) {
          let e = this.#O;
          a.notifyManager.batch(() => {
            e.findAll(t).forEach((t) => {
              e.remove(t);
            });
          });
        }
        resetQueries(t, e) {
          let i = this.#O;
          return a.notifyManager.batch(
            () => (
              i.findAll(t).forEach((t) => {
                t.reset();
              }),
              this.refetchQueries({ type: "active", ...t }, e)
            )
          );
        }
        cancelQueries(t, e = {}) {
          let i = { revert: !0, ...e };
          return Promise.all(
            a.notifyManager.batch(() => this.#O.findAll(t).map((t) => t.cancel(i)))
          )
            .then(r.noop)
            .catch(r.noop);
        }
        invalidateQueries(t, e = {}) {
          return a.notifyManager.batch(() =>
            (this.#O.findAll(t).forEach((t) => {
              t.invalidate();
            }),
            t?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries({ ...t, type: t?.refetchType ?? t?.type ?? "active" }, e)
          );
        }
        refetchQueries(t, e = {}) {
          let i = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
          return Promise.all(
            a.notifyManager.batch(() =>
              this.#O
                .findAll(t)
                .filter((t) => !t.isDisabled() && !t.isStatic())
                .map((t) => {
                  let e = t.fetch(void 0, i);
                  return (
                    i.throwOnError || (e = e.catch(r.noop)),
                    "paused" === t.state.fetchStatus ? Promise.resolve() : e
                  );
                })
            )
          ).then(r.noop);
        }
        fetchQuery(t) {
          let e = this.defaultQueryOptions(t);
          void 0 === e.retry && (e.retry = !1);
          let i = this.#O.build(this, e);
          return i.isStaleByTime((0, r.resolveStaleTime)(e.staleTime, i))
            ? i.fetch(e)
            : Promise.resolve(i.state.data);
        }
        prefetchQuery(t) {
          return this.fetchQuery(t).then(r.noop).catch(r.noop);
        }
        fetchInfiniteQuery(t) {
          return ((t.behavior = y(t.pages)), this.fetchQuery(t));
        }
        prefetchInfiniteQuery(t) {
          return this.fetchInfiniteQuery(t).then(r.noop).catch(r.noop);
        }
        ensureInfiniteQueryData(t) {
          return ((t.behavior = y(t.pages)), this.ensureQueryData(t));
        }
        resumePausedMutations() {
          return p.onlineManager.isOnline() ? this.#m.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#O;
        }
        getMutationCache() {
          return this.#m;
        }
        getDefaultOptions() {
          return this.#d;
        }
        setDefaultOptions(t) {
          this.#d = t;
        }
        setQueryDefaults(t, e) {
          this.#S.set((0, r.hashKey)(t), { queryKey: t, defaultOptions: e });
        }
        getQueryDefaults(t) {
          let e = [...this.#S.values()],
            i = {};
          return (
            e.forEach((e) => {
              (0, r.partialMatchKey)(t, e.queryKey) && Object.assign(i, e.defaultOptions);
            }),
            i
          );
        }
        setMutationDefaults(t, e) {
          this.#w.set((0, r.hashKey)(t), { mutationKey: t, defaultOptions: e });
        }
        getMutationDefaults(t) {
          let e = [...this.#w.values()],
            i = {};
          return (
            e.forEach((e) => {
              (0, r.partialMatchKey)(t, e.mutationKey) && Object.assign(i, e.defaultOptions);
            }),
            i
          );
        }
        defaultQueryOptions(t) {
          if (t._defaulted) return t;
          let e = {
            ...this.#d.queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0,
          };
          return (
            e.queryHash || (e.queryHash = (0, r.hashQueryKeyByOptions)(e.queryKey, e)),
            void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode),
            void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
            !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
            e.queryFn === r.skipToken && (e.enabled = !1),
            e
          );
        }
        defaultMutationOptions(t) {
          return t?._defaulted
            ? t
            : {
                ...this.#d.mutations,
                ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
                ...t,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#O.clear(), this.#m.clear());
        }
      },
      g = t.i(48612),
      b = t.i(16220);
    let C = (t) => {
      let s,
        r,
        n,
        a = (0, g.c)(5),
        { children: o } = t,
        u = (0, b.useAuthStore)(O);
      return (
        a[0] !== u
          ? ((s = () => {
              u();
            }),
            (r = [u]),
            (a[0] = u),
            (a[1] = s),
            (a[2] = r))
          : ((s = a[1]), (r = a[2])),
        (0, i.useEffect)(s, r),
        a[3] !== o
          ? ((n = (0, e.jsx)(e.Fragment, { children: o })), (a[3] = o), (a[4] = n))
          : (n = a[4]),
        n
      );
    };
    function O(t) {
      return t.hydrateSession;
    }
    var S = t.i(58976);
    t.s(
      [
        "Providers",
        0,
        ({ children: t }) => {
          let [r] = (0, i.useState)(
              () =>
                new v({
                  defaultOptions: {
                    queries: { retry: 2, refetchOnWindowFocus: !1, staleTime: 3e4, gcTime: 3e5 },
                    mutations: { retry: 0 },
                  },
                })
            ),
            [n, a] = (0, i.useState)(!0);
          return (
            (0, i.useEffect)(() => {}, []),
            (0, e.jsx)(s.QueryClientProvider, {
              client: r,
              children: n
                ? (0, e.jsxs)(C, {
                    children: [t, (0, e.jsx)(S.Toaster, { position: "top-right", richColors: !0 })],
                  })
                : null,
            })
          );
        },
      ],
      82369
    );
  },
]);
