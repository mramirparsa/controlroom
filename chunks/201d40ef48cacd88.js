(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  2162,
  (e) => {
    "use strict";
    var t = e.i(62482),
      l = e.i(34706),
      n = e.i(59587),
      o = e.i(65436),
      i = e.i(35285),
      r = e.i(44014),
      a = e.i(68315),
      u = e.i(3021),
      s = e.i(77606);
    function g(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function d(e, t) {
      return (l) => {
        t.setState((t) => ({ ...t, [e]: g(l, t[e]) }));
      };
    }
    function c(e) {
      return e instanceof Function;
    }
    function m(e, t, l) {
      let n,
        o = [];
      return (i) => {
        let r, a;
        l.key && l.debug && (r = Date.now());
        let u = e(i);
        if (!(u.length !== o.length || u.some((e, t) => o[t] !== e))) return n;
        if (
          ((o = u),
          l.key && l.debug && (a = Date.now()),
          (n = t(...u)),
          null == l || null == l.onChange || l.onChange(n),
          l.key && l.debug && null != l && l.debug())
        ) {
          let e = Math.round((Date.now() - r) * 100) / 100,
            t = Math.round((Date.now() - a) * 100) / 100,
            n = t / 16,
            o = (e, t) => {
              for (e = String(e); e.length < t; ) e = " " + e;
              return e;
            };
          console.info(
            `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * n, 120))}deg 100% 31%);`,
            null == l ? void 0 : l.key
          );
        }
        return n;
      };
    }
    function p(e, t, l, n) {
      return {
        debug: () => {
          var l;
          return null != (l = null == e ? void 0 : e.debugAll) ? l : e[t];
        },
        key: !1,
        onChange: n,
      };
    }
    e.i(89283);
    let f = "debugHeaders";
    function h(e, t, l) {
      var n;
      let o = {
        id: null != (n = l.id) ? n : t.id,
        column: t,
        index: l.index,
        isPlaceholder: !!l.isPlaceholder,
        placeholderId: l.placeholderId,
        depth: l.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: () => {
          let e = [],
            t = (l) => {
              (l.subHeaders && l.subHeaders.length && l.subHeaders.map(t), e.push(l));
            };
          return (t(o), e);
        },
        getContext: () => ({ table: e, header: o, column: t }),
      };
      return (
        e._features.forEach((t) => {
          null == t.createHeader || t.createHeader(o, e);
        }),
        o
      );
    }
    function w(e, t, l, n) {
      var o, i;
      let r = 0,
        a = function (e, t) {
          (void 0 === t && (t = 1),
            (r = Math.max(r, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var l;
                null != (l = e.columns) && l.length && a(e.columns, t + 1);
              }, 0));
        };
      a(e);
      let u = [],
        s = (e, t) => {
          let o = { depth: t, id: [n, `${t}`].filter(Boolean).join("_"), headers: [] },
            i = [];
          (e.forEach((e) => {
            let r,
              a = [...i].reverse()[0],
              u = e.column.depth === o.depth,
              s = !1;
            if (
              (u && e.column.parent ? (r = e.column.parent) : ((r = e.column), (s = !0)),
              a && (null == a ? void 0 : a.column) === r)
            )
              a.subHeaders.push(e);
            else {
              let o = h(l, r, {
                id: [n, t, r.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                isPlaceholder: s,
                placeholderId: s ? `${i.filter((e) => e.column === r).length}` : void 0,
                depth: t,
                index: i.length,
              });
              (o.subHeaders.push(e), i.push(o));
            }
            (o.headers.push(e), (e.headerGroup = o));
          }),
            u.push(o),
            t > 0 && s(i, t - 1));
        };
      (s(
        t.map((e, t) => h(l, e, { depth: r, index: t })),
        r - 1
      ),
        u.reverse());
      let g = (e) =>
        e
          .filter((e) => e.column.getIsVisible())
          .map((e) => {
            let t = 0,
              l = 0,
              n = [0];
            return (
              e.subHeaders && e.subHeaders.length
                ? ((n = []),
                  g(e.subHeaders).forEach((e) => {
                    let { colSpan: l, rowSpan: o } = e;
                    ((t += l), n.push(o));
                  }))
                : (t = 1),
              (l += Math.min(...n)),
              (e.colSpan = t),
              (e.rowSpan = l),
              { colSpan: t, rowSpan: l }
            );
          });
      return (g(null != (o = null == (i = u[0]) ? void 0 : i.headers) ? o : []), u);
    }
    let C = (e, t, l, n, o, i, r) => {
        let a = {
          id: t,
          index: n,
          original: l,
          depth: o,
          parentId: r,
          _valuesCache: {},
          _uniqueValuesCache: {},
          getValue: (t) => {
            if (a._valuesCache.hasOwnProperty(t)) return a._valuesCache[t];
            let l = e.getColumn(t);
            if (null != l && l.accessorFn)
              return ((a._valuesCache[t] = l.accessorFn(a.original, n)), a._valuesCache[t]);
          },
          getUniqueValues: (t) => {
            if (a._uniqueValuesCache.hasOwnProperty(t)) return a._uniqueValuesCache[t];
            let l = e.getColumn(t);
            if (null != l && l.accessorFn)
              return (
                l.columnDef.getUniqueValues
                  ? (a._uniqueValuesCache[t] = l.columnDef.getUniqueValues(a.original, n))
                  : (a._uniqueValuesCache[t] = [a.getValue(t)]),
                a._uniqueValuesCache[t]
              );
          },
          renderValue: (t) => {
            var l;
            return null != (l = a.getValue(t)) ? l : e.options.renderFallbackValue;
          },
          subRows: null != i ? i : [],
          getLeafRows: () => {
            var e, t;
            let l, n;
            return (
              (e = a.subRows),
              (t = (e) => e.subRows),
              (l = []),
              (n = (e) => {
                e.forEach((e) => {
                  l.push(e);
                  let o = t(e);
                  null != o && o.length && n(o);
                });
              })(e),
              l
            );
          },
          getParentRow: () => (a.parentId ? e.getRow(a.parentId, !0) : void 0),
          getParentRows: () => {
            let e = [],
              t = a;
            for (;;) {
              let l = t.getParentRow();
              if (!l) break;
              (e.push(l), (t = l));
            }
            return e.reverse();
          },
          getAllCells: m(
            () => [e.getAllLeafColumns()],
            (t) =>
              t.map((t) => {
                var l;
                let n;
                return (
                  (l = t.id),
                  (n = {
                    id: `${a.id}_${t.id}`,
                    row: a,
                    column: t,
                    getValue: () => a.getValue(l),
                    renderValue: () => {
                      var t;
                      return null != (t = n.getValue()) ? t : e.options.renderFallbackValue;
                    },
                    getContext: m(
                      () => [e, t, a, n],
                      (e, t, l, n) => ({
                        table: e,
                        column: t,
                        row: l,
                        cell: n,
                        getValue: n.getValue,
                        renderValue: n.renderValue,
                      }),
                      p(e.options, "debugCells", "cell.getContext")
                    ),
                  }),
                  e._features.forEach((l) => {
                    null == l.createCell || l.createCell(n, t, a, e);
                  }, {}),
                  n
                );
              }),
            p(e.options, "debugRows", "getAllCells")
          ),
          _getAllCellsByColumnId: m(
            () => [a.getAllCells()],
            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
            p(e.options, "debugRows", "getAllCellsByColumnId")
          ),
        };
        for (let t = 0; t < e._features.length; t++) {
          let l = e._features[t];
          null == l || null == l.createRow || l.createRow(a, e);
        }
        return a;
      },
      v = (e, t, l) => {
        var n, o;
        let i = null == l || null == (n = l.toString()) ? void 0 : n.toLowerCase();
        return !!(null == (o = e.getValue(t)) ||
        null == (o = o.toString()) ||
        null == (o = o.toLowerCase())
          ? void 0
          : o.includes(i));
      };
    v.autoRemove = (e) => I(e);
    let b = (e, t, l) => {
      var n;
      return !!(null == (n = e.getValue(t)) || null == (n = n.toString()) ? void 0 : n.includes(l));
    };
    b.autoRemove = (e) => I(e);
    let S = (e, t, l) => {
      var n;
      return (
        (null == (n = e.getValue(t)) || null == (n = n.toString()) ? void 0 : n.toLowerCase()) ===
        (null == l ? void 0 : l.toLowerCase())
      );
    };
    S.autoRemove = (e) => I(e);
    let R = (e, t, l) => {
      var n;
      return null == (n = e.getValue(t)) ? void 0 : n.includes(l);
    };
    R.autoRemove = (e) => I(e);
    let x = (e, t, l) =>
      !l.some((l) => {
        var n;
        return !(null != (n = e.getValue(t)) && n.includes(l));
      });
    x.autoRemove = (e) => I(e) || !(null != e && e.length);
    let F = (e, t, l) =>
      l.some((l) => {
        var n;
        return null == (n = e.getValue(t)) ? void 0 : n.includes(l);
      });
    F.autoRemove = (e) => I(e) || !(null != e && e.length);
    let M = (e, t, l) => e.getValue(t) === l;
    M.autoRemove = (e) => I(e);
    let P = (e, t, l) => e.getValue(t) == l;
    P.autoRemove = (e) => I(e);
    let V = (e, t, l) => {
      let [n, o] = l,
        i = e.getValue(t);
      return i >= n && i <= o;
    };
    ((V.resolveFilterValue = (e) => {
      let [t, l] = e,
        n = "number" != typeof t ? parseFloat(t) : t,
        o = "number" != typeof l ? parseFloat(l) : l,
        i = null === t || Number.isNaN(n) ? -1 / 0 : n,
        r = null === l || Number.isNaN(o) ? 1 / 0 : o;
      if (i > r) {
        let e = i;
        ((i = r), (r = e));
      }
      return [i, r];
    }),
      (V.autoRemove = (e) => I(e) || (I(e[0]) && I(e[1]))));
    let y = {
      includesString: v,
      includesStringSensitive: b,
      equalsString: S,
      arrIncludes: R,
      arrIncludesAll: x,
      arrIncludesSome: F,
      equals: M,
      weakEquals: P,
      inNumberRange: V,
    };
    function I(e) {
      return null == e || "" === e;
    }
    function _(e, t, l) {
      return (
        (!!e && !!e.autoRemove && e.autoRemove(t, l)) ||
        void 0 === t ||
        ("string" == typeof t && !t)
      );
    }
    let E = {
        sum: (e, t, l) =>
          l.reduce((t, l) => {
            let n = l.getValue(e);
            return t + ("number" == typeof n ? n : 0);
          }, 0),
        min: (e, t, l) => {
          let n;
          return (
            l.forEach((t) => {
              let l = t.getValue(e);
              null != l && (n > l || (void 0 === n && l >= l)) && (n = l);
            }),
            n
          );
        },
        max: (e, t, l) => {
          let n;
          return (
            l.forEach((t) => {
              let l = t.getValue(e);
              null != l && (n < l || (void 0 === n && l >= l)) && (n = l);
            }),
            n
          );
        },
        extent: (e, t, l) => {
          let n, o;
          return (
            l.forEach((t) => {
              let l = t.getValue(e);
              null != l &&
                (void 0 === n ? l >= l && (n = o = l) : (n > l && (n = l), o < l && (o = l)));
            }),
            [n, o]
          );
        },
        mean: (e, t) => {
          let l = 0,
            n = 0;
          if (
            (t.forEach((t) => {
              let o = t.getValue(e);
              null != o && (o *= 1) >= o && (++l, (n += o));
            }),
            l)
          )
            return n / l;
        },
        median: (e, t) => {
          if (!t.length) return;
          let l = t.map((t) => t.getValue(e));
          if (!(Array.isArray(l) && l.every((e) => "number" == typeof e))) return;
          if (1 === l.length) return l[0];
          let n = Math.floor(l.length / 2),
            o = l.sort((e, t) => e - t);
          return l.length % 2 != 0 ? o[n] : (o[n - 1] + o[n]) / 2;
        },
        unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
        uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
        count: (e, t) => t.length,
      },
      A = () => ({ left: [], right: [] }),
      j = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
      L = () => ({
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: !1,
        columnSizingStart: [],
      }),
      G = null;
    function H(e) {
      return "touchstart" === e.type;
    }
    function D(e, t) {
      return t
        ? "center" === t
          ? e.getCenterVisibleLeafColumns()
          : "left" === t
            ? e.getLeftVisibleLeafColumns()
            : e.getRightVisibleLeafColumns()
        : e.getVisibleLeafColumns();
    }
    let z = () => ({ pageIndex: 0, pageSize: 10 }),
      N = () => ({ top: [], bottom: [] }),
      O = (e, t, l, n, o) => {
        var i;
        let r = o.getRow(t, !0);
        (l
          ? (r.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]),
            r.getCanSelect() && (e[t] = !0))
          : delete e[t],
          n &&
            null != (i = r.subRows) &&
            i.length &&
            r.getCanSelectSubRows() &&
            r.subRows.forEach((t) => O(e, t.id, l, n, o)));
      };
    function T(e, t) {
      let l = e.getState().rowSelection,
        n = [],
        o = {},
        i = function (e, t) {
          return e
            .map((e) => {
              var t;
              let r = B(e, l);
              if (
                (r && (n.push(e), (o[e.id] = e)),
                null != (t = e.subRows) && t.length && (e = { ...e, subRows: i(e.subRows) }),
                r)
              )
                return e;
            })
            .filter(Boolean);
        };
      return { rows: i(t.rows), flatRows: n, rowsById: o };
    }
    function B(e, t) {
      var l;
      return null != (l = t[e.id]) && l;
    }
    function k(e, t, l) {
      var n;
      if (!(null != (n = e.subRows) && n.length)) return !1;
      let o = !0,
        i = !1;
      return (
        e.subRows.forEach((e) => {
          if (
            (!i || o) &&
            (e.getCanSelect() && (B(e, t) ? (i = !0) : (o = !1)), e.subRows && e.subRows.length)
          ) {
            let l = k(e, t);
            "all" === l ? (i = !0) : ("some" === l && (i = !0), (o = !1));
          }
        }),
        o ? "all" : !!i && "some"
      );
    }
    let q = /([0-9]+)/gm;
    function U(e, t) {
      return e === t ? 0 : e > t ? 1 : -1;
    }
    function K(e) {
      return "number" == typeof e
        ? isNaN(e) || e === 1 / 0 || e === -1 / 0
          ? ""
          : String(e)
        : "string" == typeof e
          ? e
          : "";
    }
    function $(e, t) {
      let l = e.split(q).filter(Boolean),
        n = t.split(q).filter(Boolean);
      for (; l.length && n.length; ) {
        let e = l.shift(),
          t = n.shift(),
          o = parseInt(e, 10),
          i = parseInt(t, 10),
          r = [o, i].sort();
        if (isNaN(r[0])) {
          if (e > t) return 1;
          if (t > e) return -1;
          continue;
        }
        if (isNaN(r[1])) return isNaN(o) ? -1 : 1;
        if (o > i) return 1;
        if (i > o) return -1;
      }
      return l.length - n.length;
    }
    let X = {
        alphanumeric: (e, t, l) =>
          $(K(e.getValue(l)).toLowerCase(), K(t.getValue(l)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, l) => $(K(e.getValue(l)), K(t.getValue(l))),
        text: (e, t, l) => U(K(e.getValue(l)).toLowerCase(), K(t.getValue(l)).toLowerCase()),
        textCaseSensitive: (e, t, l) => U(K(e.getValue(l)), K(t.getValue(l))),
        datetime: (e, t, l) => {
          let n = e.getValue(l),
            o = t.getValue(l);
          return n > o ? 1 : n < o ? -1 : 0;
        },
        basic: (e, t, l) => U(e.getValue(l), t.getValue(l)),
      },
      Q = [
        {
          createTable: (e) => {
            ((e.getHeaderGroups = m(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, l, n, o) => {
                var i, r;
                let a =
                    null !=
                    (i =
                      null == n ? void 0 : n.map((e) => l.find((t) => t.id === e)).filter(Boolean))
                      ? i
                      : [],
                  u =
                    null !=
                    (r =
                      null == o ? void 0 : o.map((e) => l.find((t) => t.id === e)).filter(Boolean))
                      ? r
                      : [];
                return w(
                  t,
                  [
                    ...a,
                    ...l.filter(
                      (e) => !(null != n && n.includes(e.id)) && !(null != o && o.includes(e.id))
                    ),
                    ...u,
                  ],
                  e
                );
              },
              p(e.options, f, "getHeaderGroups")
            )),
              (e.getCenterHeaderGroups = m(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (t, l, n, o) =>
                  w(
                    t,
                    (l = l.filter(
                      (e) => !(null != n && n.includes(e.id)) && !(null != o && o.includes(e.id))
                    )),
                    e,
                    "center"
                  ),
                p(e.options, f, "getCenterHeaderGroups")
              )),
              (e.getLeftHeaderGroups = m(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                ],
                (t, l, n) => {
                  var o;
                  return w(
                    t,
                    null !=
                      (o =
                        null == n
                          ? void 0
                          : n.map((e) => l.find((t) => t.id === e)).filter(Boolean))
                      ? o
                      : [],
                    e,
                    "left"
                  );
                },
                p(e.options, f, "getLeftHeaderGroups")
              )),
              (e.getRightHeaderGroups = m(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.right,
                ],
                (t, l, n) => {
                  var o;
                  return w(
                    t,
                    null !=
                      (o =
                        null == n
                          ? void 0
                          : n.map((e) => l.find((t) => t.id === e)).filter(Boolean))
                      ? o
                      : [],
                    e,
                    "right"
                  );
                },
                p(e.options, f, "getRightHeaderGroups")
              )),
              (e.getFooterGroups = m(
                () => [e.getHeaderGroups()],
                (e) => [...e].reverse(),
                p(e.options, f, "getFooterGroups")
              )),
              (e.getLeftFooterGroups = m(
                () => [e.getLeftHeaderGroups()],
                (e) => [...e].reverse(),
                p(e.options, f, "getLeftFooterGroups")
              )),
              (e.getCenterFooterGroups = m(
                () => [e.getCenterHeaderGroups()],
                (e) => [...e].reverse(),
                p(e.options, f, "getCenterFooterGroups")
              )),
              (e.getRightFooterGroups = m(
                () => [e.getRightHeaderGroups()],
                (e) => [...e].reverse(),
                p(e.options, f, "getRightFooterGroups")
              )),
              (e.getFlatHeaders = m(
                () => [e.getHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                p(e.options, f, "getFlatHeaders")
              )),
              (e.getLeftFlatHeaders = m(
                () => [e.getLeftHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                p(e.options, f, "getLeftFlatHeaders")
              )),
              (e.getCenterFlatHeaders = m(
                () => [e.getCenterHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                p(e.options, f, "getCenterFlatHeaders")
              )),
              (e.getRightFlatHeaders = m(
                () => [e.getRightHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                p(e.options, f, "getRightFlatHeaders")
              )),
              (e.getCenterLeafHeaders = m(
                () => [e.getCenterFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                p(e.options, f, "getCenterLeafHeaders")
              )),
              (e.getLeftLeafHeaders = m(
                () => [e.getLeftFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                p(e.options, f, "getLeftLeafHeaders")
              )),
              (e.getRightLeafHeaders = m(
                () => [e.getRightFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                p(e.options, f, "getRightLeafHeaders")
              )),
              (e.getLeafHeaders = m(
                () => [
                  e.getLeftHeaderGroups(),
                  e.getCenterHeaderGroups(),
                  e.getRightHeaderGroups(),
                ],
                (e, t, l) => {
                  var n, o, i, r, a, u;
                  return [
                    ...(null != (n = null == (o = e[0]) ? void 0 : o.headers) ? n : []),
                    ...(null != (i = null == (r = t[0]) ? void 0 : r.headers) ? i : []),
                    ...(null != (a = null == (u = l[0]) ? void 0 : u.headers) ? a : []),
                  ]
                    .map((e) => e.getLeafHeaders())
                    .flat();
                },
                p(e.options, f, "getLeafHeaders")
              )));
          },
        },
        {
          getInitialState: (e) => ({ columnVisibility: {}, ...e }),
          getDefaultOptions: (e) => ({ onColumnVisibilityChange: d("columnVisibility", e) }),
          createColumn: (e, t) => {
            ((e.toggleVisibility = (l) => {
              e.getCanHide() &&
                t.setColumnVisibility((t) => ({ ...t, [e.id]: null != l ? l : !e.getIsVisible() }));
            }),
              (e.getIsVisible = () => {
                var l, n;
                let o = e.columns;
                return (
                  null ==
                    (l = o.length
                      ? o.some((e) => e.getIsVisible())
                      : null == (n = t.getState().columnVisibility)
                        ? void 0
                        : n[e.id]) || l
                );
              }),
              (e.getCanHide = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableHiding) || l) &&
                  (null == (n = t.options.enableHiding) || n)
                );
              }),
              (e.getToggleVisibilityHandler = () => (t) => {
                null == e.toggleVisibility || e.toggleVisibility(t.target.checked);
              }));
          },
          createRow: (e, t) => {
            ((e._getAllVisibleCells = m(
              () => [e.getAllCells(), t.getState().columnVisibility],
              (e) => e.filter((e) => e.column.getIsVisible()),
              p(t.options, "debugRows", "_getAllVisibleCells")
            )),
              (e.getVisibleCells = m(
                () => [
                  e.getLeftVisibleCells(),
                  e.getCenterVisibleCells(),
                  e.getRightVisibleCells(),
                ],
                (e, t, l) => [...e, ...t, ...l],
                p(t.options, "debugRows", "getVisibleCells")
              )));
          },
          createTable: (e) => {
            let t = (t, l) =>
              m(
                () => [
                  l(),
                  l()
                    .filter((e) => e.getIsVisible())
                    .map((e) => e.id)
                    .join("_"),
                ],
                (e) => e.filter((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible())),
                p(e.options, "debugColumns", t)
              );
            ((e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns())),
              (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns())),
              (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
                e.getLeftLeafColumns()
              )),
              (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
                e.getRightLeafColumns()
              )),
              (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
                e.getCenterLeafColumns()
              )),
              (e.setColumnVisibility = (t) =>
                null == e.options.onColumnVisibilityChange
                  ? void 0
                  : e.options.onColumnVisibilityChange(t)),
              (e.resetColumnVisibility = (t) => {
                var l;
                e.setColumnVisibility(
                  t ? {} : null != (l = e.initialState.columnVisibility) ? l : {}
                );
              }),
              (e.toggleAllColumnsVisible = (t) => {
                var l;
                ((t = null != (l = t) ? l : !e.getIsAllColumnsVisible()),
                  e.setColumnVisibility(
                    e
                      .getAllLeafColumns()
                      .reduce(
                        (e, l) => ({
                          ...e,
                          [l.id]: t || !(null != l.getCanHide && l.getCanHide()),
                        }),
                        {}
                      )
                  ));
              }),
              (e.getIsAllColumnsVisible = () =>
                !e.getAllLeafColumns().some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
              (e.getIsSomeColumnsVisible = () =>
                e
                  .getAllLeafColumns()
                  .some((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible()))),
              (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                var l;
                e.toggleAllColumnsVisible(null == (l = t.target) ? void 0 : l.checked);
              }));
          },
        },
        {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({ onColumnOrderChange: d("columnOrder", e) }),
          createColumn: (e, t) => {
            ((e.getIndex = m(
              (e) => [D(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              p(t.options, "debugColumns", "getIndex")
            )),
              (e.getIsFirstColumn = (l) => {
                var n;
                return (null == (n = D(t, l)[0]) ? void 0 : n.id) === e.id;
              }),
              (e.getIsLastColumn = (l) => {
                var n;
                let o = D(t, l);
                return (null == (n = o[o.length - 1]) ? void 0 : n.id) === e.id;
              }));
          },
          createTable: (e) => {
            ((e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var l;
                e.setColumnOrder(t ? [] : null != (l = e.initialState.columnOrder) ? l : []);
              }),
              (e._getOrderColumnsFn = m(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, l) => (n) => {
                  let o = [];
                  if (null != e && e.length) {
                    let t = [...e],
                      l = [...n];
                    for (; l.length && t.length; ) {
                      let e = t.shift(),
                        n = l.findIndex((t) => t.id === e);
                      n > -1 && o.push(l.splice(n, 1)[0]);
                    }
                    o = [...o, ...l];
                  } else o = n;
                  var i = o;
                  if (!(null != t && t.length) || !l) return i;
                  let r = i.filter((e) => !t.includes(e.id));
                  return "remove" === l
                    ? r
                    : [...t.map((e) => i.find((t) => t.id === e)).filter(Boolean), ...r];
                },
                p(e.options, "debugTable", "_getOrderColumnsFn")
              )));
          },
        },
        {
          getInitialState: (e) => ({ columnPinning: A(), ...e }),
          getDefaultOptions: (e) => ({ onColumnPinningChange: d("columnPinning", e) }),
          createColumn: (e, t) => {
            ((e.pin = (l) => {
              let n = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, o, i, r, a, u;
                return "right" === l
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left) ? i : []).filter(
                        (e) => !(null != n && n.includes(e))
                      ),
                      right: [
                        ...(null != (r = null == e ? void 0 : e.right) ? r : []).filter(
                          (e) => !(null != n && n.includes(e))
                        ),
                        ...n,
                      ],
                    }
                  : "left" === l
                    ? {
                        left: [
                          ...(null != (a = null == e ? void 0 : e.left) ? a : []).filter(
                            (e) => !(null != n && n.includes(e))
                          ),
                          ...n,
                        ],
                        right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter(
                          (e) => !(null != n && n.includes(e))
                        ),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter(
                          (e) => !(null != n && n.includes(e))
                        ),
                        right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter(
                          (e) => !(null != n && n.includes(e))
                        ),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var l, n, o;
                  return (
                    (null == (l = e.columnDef.enablePinning) || l) &&
                    (null ==
                      (n =
                        null != (o = t.options.enableColumnPinning)
                          ? o
                          : t.options.enablePinning) ||
                      n)
                  );
                })),
              (e.getIsPinned = () => {
                let l = e.getLeafColumns().map((e) => e.id),
                  { left: n, right: o } = t.getState().columnPinning,
                  i = l.some((e) => (null == n ? void 0 : n.includes(e))),
                  r = l.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "left" : !!r && "right";
              }),
              (e.getPinnedIndex = () => {
                var l, n;
                let o = e.getIsPinned();
                return o
                  ? null !=
                    (l =
                      null == (n = t.getState().columnPinning) || null == (n = n[o])
                        ? void 0
                        : n.indexOf(e.id))
                    ? l
                    : -1
                  : 0;
              }));
          },
          createRow: (e, t) => {
            ((e.getCenterVisibleCells = m(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right,
              ],
              (e, t, l) => {
                let n = [...(null != t ? t : []), ...(null != l ? l : [])];
                return e.filter((e) => !n.includes(e.column.id));
              },
              p(t.options, "debugRows", "getCenterVisibleCells")
            )),
              (e.getLeftVisibleCells = m(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                p(t.options, "debugRows", "getLeftVisibleCells")
              )),
              (e.getRightVisibleCells = m(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                p(t.options, "debugRows", "getRightVisibleCells")
              )));
          },
          createTable: (e) => {
            ((e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var l, n;
                return e.setColumnPinning(
                  t
                    ? A()
                    : null != (l = null == (n = e.initialState) ? void 0 : n.columnPinning)
                      ? l
                      : A()
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var l, n, o;
                let i = e.getState().columnPinning;
                return t
                  ? !!(null == (l = i[t]) ? void 0 : l.length)
                  : !!(
                      (null == (n = i.left) ? void 0 : n.length) ||
                      (null == (o = i.right) ? void 0 : o.length)
                    );
              }),
              (e.getLeftLeafColumns = m(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                p(e.options, "debugColumns", "getLeftLeafColumns")
              )),
              (e.getRightLeafColumns = m(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                p(e.options, "debugColumns", "getRightLeafColumns")
              )),
              (e.getCenterLeafColumns = m(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, l) => {
                  let n = [...(null != t ? t : []), ...(null != l ? l : [])];
                  return e.filter((e) => !n.includes(e.id));
                },
                p(e.options, "debugColumns", "getCenterLeafColumns")
              )));
          },
        },
        {
          createColumn: (e, t) => {
            ((e._getFacetedRowModel =
              t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
              }));
          },
        },
        {
          getDefaultColumnDef: () => ({ filterFn: "auto" }),
          getInitialState: (e) => ({ columnFilters: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnFiltersChange: d("columnFilters", e),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100,
          }),
          createColumn: (e, t) => {
            ((e.getAutoFilterFn = () => {
              let l = t.getCoreRowModel().flatRows[0],
                n = null == l ? void 0 : l.getValue(e.id);
              return "string" == typeof n
                ? y.includesString
                : "number" == typeof n
                  ? y.inNumberRange
                  : "boolean" == typeof n || (null !== n && "object" == typeof n)
                    ? y.equals
                    : Array.isArray(n)
                      ? y.arrIncludes
                      : y.weakEquals;
            }),
              (e.getFilterFn = () => {
                var l, n;
                return c(e.columnDef.filterFn)
                  ? e.columnDef.filterFn
                  : "auto" === e.columnDef.filterFn
                    ? e.getAutoFilterFn()
                    : null !=
                        (l = null == (n = t.options.filterFns) ? void 0 : n[e.columnDef.filterFn])
                      ? l
                      : y[e.columnDef.filterFn];
              }),
              (e.getCanFilter = () => {
                var l, n, o;
                return (
                  (null == (l = e.columnDef.enableColumnFilter) || l) &&
                  (null == (n = t.options.enableColumnFilters) || n) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  !!e.accessorFn
                );
              }),
              (e.getIsFiltered = () => e.getFilterIndex() > -1),
              (e.getFilterValue = () => {
                var l;
                return null == (l = t.getState().columnFilters) ||
                  null == (l = l.find((t) => t.id === e.id))
                  ? void 0
                  : l.value;
              }),
              (e.getFilterIndex = () => {
                var l, n;
                return null !=
                  (l =
                    null == (n = t.getState().columnFilters)
                      ? void 0
                      : n.findIndex((t) => t.id === e.id))
                  ? l
                  : -1;
              }),
              (e.setFilterValue = (l) => {
                t.setColumnFilters((t) => {
                  var n, o;
                  let i = e.getFilterFn(),
                    r = null == t ? void 0 : t.find((t) => t.id === e.id),
                    a = g(l, r ? r.value : void 0);
                  if (_(i, a, e))
                    return null != (n = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                      ? n
                      : [];
                  let u = { id: e.id, value: a };
                  return r
                    ? null != (o = null == t ? void 0 : t.map((t) => (t.id === e.id ? u : t)))
                      ? o
                      : []
                    : null != t && t.length
                      ? [...t, u]
                      : [u];
                });
              }));
          },
          createRow: (e, t) => {
            ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
          },
          createTable: (e) => {
            ((e.setColumnFilters = (t) => {
              let l = e.getAllLeafColumns();
              null == e.options.onColumnFiltersChange ||
                e.options.onColumnFiltersChange((e) => {
                  var n;
                  return null == (n = g(t, e))
                    ? void 0
                    : n.filter((e) => {
                        let t = l.find((t) => t.id === e.id);
                        return !(t && _(t.getFilterFn(), e.value, t)) && !0;
                      });
                });
            }),
              (e.resetColumnFilters = (t) => {
                var l, n;
                e.setColumnFilters(
                  t
                    ? []
                    : null != (l = null == (n = e.initialState) ? void 0 : n.columnFilters)
                      ? l
                      : []
                );
              }),
              (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
              (e.getFilteredRowModel = () =>
                (!e._getFilteredRowModel &&
                  e.options.getFilteredRowModel &&
                  (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                e.options.manualFiltering || !e._getFilteredRowModel)
                  ? e.getPreFilteredRowModel()
                  : e._getFilteredRowModel()));
          },
        },
        {
          createTable: (e) => {
            ((e._getGlobalFacetedRowModel =
              e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__")),
              (e.getGlobalFacetedRowModel = () =>
                e.options.manualFiltering || !e._getGlobalFacetedRowModel
                  ? e.getPreFilteredRowModel()
                  : e._getGlobalFacetedRowModel()),
              (e._getGlobalFacetedUniqueValues =
                e.options.getFacetedUniqueValues &&
                e.options.getFacetedUniqueValues(e, "__global__")),
              (e.getGlobalFacetedUniqueValues = () =>
                e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map()),
              (e._getGlobalFacetedMinMaxValues =
                e.options.getFacetedMinMaxValues &&
                e.options.getFacetedMinMaxValues(e, "__global__")),
              (e.getGlobalFacetedMinMaxValues = () => {
                if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
              }));
          },
        },
        {
          getInitialState: (e) => ({ globalFilter: void 0, ...e }),
          getDefaultOptions: (e) => ({
            onGlobalFilterChange: d("globalFilter", e),
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: (t) => {
              var l;
              let n =
                null == (l = e.getCoreRowModel().flatRows[0]) ||
                null == (l = l._getAllCellsByColumnId()[t.id])
                  ? void 0
                  : l.getValue();
              return "string" == typeof n || "number" == typeof n;
            },
          }),
          createColumn: (e, t) => {
            e.getCanGlobalFilter = () => {
              var l, n, o, i;
              return (
                (null == (l = e.columnDef.enableGlobalFilter) || l) &&
                (null == (n = t.options.enableGlobalFilter) || n) &&
                (null == (o = t.options.enableFilters) || o) &&
                (null ==
                  (i =
                    null == t.options.getColumnCanGlobalFilter
                      ? void 0
                      : t.options.getColumnCanGlobalFilter(e)) ||
                  i) &&
                !!e.accessorFn
              );
            };
          },
          createTable: (e) => {
            ((e.getGlobalAutoFilterFn = () => y.includesString),
              (e.getGlobalFilterFn = () => {
                var t, l;
                let { globalFilterFn: n } = e.options;
                return c(n)
                  ? n
                  : "auto" === n
                    ? e.getGlobalAutoFilterFn()
                    : null != (t = null == (l = e.options.filterFns) ? void 0 : l[n])
                      ? t
                      : y[n];
              }),
              (e.setGlobalFilter = (t) => {
                null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t);
              }),
              (e.resetGlobalFilter = (t) => {
                e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
              }));
          },
        },
        {
          getInitialState: (e) => ({ sorting: [], ...e }),
          getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
          getDefaultOptions: (e) => ({
            onSortingChange: d("sorting", e),
            isMultiSortEvent: (e) => e.shiftKey,
          }),
          createColumn: (e, t) => {
            ((e.getAutoSortingFn = () => {
              let l = t.getFilteredRowModel().flatRows.slice(10),
                n = !1;
              for (let t of l) {
                let l = null == t ? void 0 : t.getValue(e.id);
                if ("[object Date]" === Object.prototype.toString.call(l)) return X.datetime;
                if ("string" == typeof l && ((n = !0), l.split(q).length > 1))
                  return X.alphanumeric;
              }
              return n ? X.text : X.basic;
            }),
              (e.getAutoSortDir = () => {
                let l = t.getFilteredRowModel().flatRows[0];
                return "string" == typeof (null == l ? void 0 : l.getValue(e.id)) ? "asc" : "desc";
              }),
              (e.getSortingFn = () => {
                var l, n;
                if (!e) throw Error();
                return c(e.columnDef.sortingFn)
                  ? e.columnDef.sortingFn
                  : "auto" === e.columnDef.sortingFn
                    ? e.getAutoSortingFn()
                    : null !=
                        (l = null == (n = t.options.sortingFns) ? void 0 : n[e.columnDef.sortingFn])
                      ? l
                      : X[e.columnDef.sortingFn];
              }),
              (e.toggleSorting = (l, n) => {
                let o = e.getNextSortingOrder(),
                  i = null != l;
                t.setSorting((r) => {
                  let a,
                    u = null == r ? void 0 : r.find((t) => t.id === e.id),
                    s = null == r ? void 0 : r.findIndex((t) => t.id === e.id),
                    g = [],
                    d = i ? l : "desc" === o;
                  if (
                    ("toggle" !=
                      (a =
                        null != r && r.length && e.getCanMultiSort() && n
                          ? u
                            ? "toggle"
                            : "add"
                          : null != r && r.length && s !== r.length - 1
                            ? "replace"
                            : u
                              ? "toggle"
                              : "replace") ||
                      i ||
                      o ||
                      (a = "remove"),
                    "add" === a)
                  ) {
                    var c;
                    (g = [...r, { id: e.id, desc: d }]).splice(
                      0,
                      g.length -
                        (null != (c = t.options.maxMultiSortColCount) ? c : Number.MAX_SAFE_INTEGER)
                    );
                  } else
                    g =
                      "toggle" === a
                        ? r.map((t) => (t.id === e.id ? { ...t, desc: d } : t))
                        : "remove" === a
                          ? r.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: d }];
                  return g;
                });
              }),
              (e.getFirstSortDir = () => {
                var l, n;
                return (
                  null !=
                  (l = null != (n = e.columnDef.sortDescFirst) ? n : t.options.sortDescFirst)
                    ? l
                    : "desc" === e.getAutoSortDir()
                )
                  ? "desc"
                  : "asc";
              }),
              (e.getNextSortingOrder = (l) => {
                var n, o;
                let i = e.getFirstSortDir(),
                  r = e.getIsSorted();
                return r
                  ? (r === i ||
                      (null != (n = t.options.enableSortingRemoval) && !n) ||
                      (!!l && null != (o = t.options.enableMultiRemove) && !o)) &&
                      ("desc" === r ? "asc" : "desc")
                  : i;
              }),
              (e.getCanSort = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableSorting) || l) &&
                  (null == (n = t.options.enableSorting) || n) &&
                  !!e.accessorFn
                );
              }),
              (e.getCanMultiSort = () => {
                var l, n;
                return null !=
                  (l = null != (n = e.columnDef.enableMultiSort) ? n : t.options.enableMultiSort)
                  ? l
                  : !!e.accessorFn;
              }),
              (e.getIsSorted = () => {
                var l;
                let n = null == (l = t.getState().sorting) ? void 0 : l.find((t) => t.id === e.id);
                return !!n && (n.desc ? "desc" : "asc");
              }),
              (e.getSortIndex = () => {
                var l, n;
                return null !=
                  (l =
                    null == (n = t.getState().sorting) ? void 0 : n.findIndex((t) => t.id === e.id))
                  ? l
                  : -1;
              }),
              (e.clearSorting = () => {
                t.setSorting((t) => (null != t && t.length ? t.filter((t) => t.id !== e.id) : []));
              }),
              (e.getToggleSortingHandler = () => {
                let l = e.getCanSort();
                return (n) => {
                  l &&
                    (null == n.persist || n.persist(),
                    null == e.toggleSorting ||
                      e.toggleSorting(
                        void 0,
                        !!e.getCanMultiSort() &&
                          (null == t.options.isMultiSortEvent
                            ? void 0
                            : t.options.isMultiSortEvent(n))
                      ));
                };
              }));
          },
          createTable: (e) => {
            ((e.setSorting = (t) =>
              null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t)),
              (e.resetSorting = (t) => {
                var l, n;
                e.setSorting(
                  t ? [] : null != (l = null == (n = e.initialState) ? void 0 : n.sorting) ? l : []
                );
              }),
              (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
              (e.getSortedRowModel = () =>
                (!e._getSortedRowModel &&
                  e.options.getSortedRowModel &&
                  (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                e.options.manualSorting || !e._getSortedRowModel)
                  ? e.getPreSortedRowModel()
                  : e._getSortedRowModel()));
          },
        },
        {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, l;
              return null !=
                (t = null == (l = e.getValue()) || null == l.toString ? void 0 : l.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: d("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            ((e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id]
              );
            }),
              (e.getCanGroup = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableGrouping) || l) &&
                  (null == (n = t.options.enableGrouping) || n) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var l;
                return null == (l = t.getState().grouping) ? void 0 : l.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var l;
                return null == (l = t.getState().grouping) ? void 0 : l.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                let t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                let l = t.getCoreRowModel().flatRows[0],
                  n = null == l ? void 0 : l.getValue(e.id);
                return "number" == typeof n
                  ? E.sum
                  : "[object Date]" === Object.prototype.toString.call(n)
                    ? E.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var l, n;
                if (!e) throw Error();
                return c(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (l =
                          null == (n = t.options.aggregationFns)
                            ? void 0
                            : n[e.columnDef.aggregationFn])
                      ? l
                      : E[e.columnDef.aggregationFn];
              }));
          },
          createTable: (e) => {
            ((e.setGrouping = (t) =>
              null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var l, n;
                e.setGrouping(
                  t ? [] : null != (l = null == (n = e.initialState) ? void 0 : n.grouping) ? l : []
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () =>
                (!e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel)
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()));
          },
          createRow: (e, t) => {
            ((e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (l) => {
                if (e._groupingValuesCache.hasOwnProperty(l)) return e._groupingValuesCache[l];
                let n = t.getColumn(l);
                return null != n && n.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[l] = n.columnDef.getGroupingValue(e.original)),
                    e._groupingValuesCache[l])
                  : e.getValue(l);
              }),
              (e._groupingValuesCache = {}));
          },
          createCell: (e, t, l, n) => {
            ((e.getIsGrouped = () => t.getIsGrouped() && t.id === l.groupingColumnId),
              (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !!(null != (t = l.subRows) && t.length)
                );
              }));
          },
        },
        {
          getInitialState: (e) => ({ expanded: {}, ...e }),
          getDefaultOptions: (e) => ({
            onExpandedChange: d("expanded", e),
            paginateExpandedRows: !0,
          }),
          createTable: (e) => {
            let t = !1,
              l = !1;
            ((e._autoResetExpanded = () => {
              var n, o;
              if (!t)
                return void e._queue(() => {
                  t = !0;
                });
              if (
                null != (n = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded)
                  ? n
                  : !e.options.manualExpanding
              ) {
                if (l) return;
                ((l = !0),
                  e._queue(() => {
                    (e.resetExpanded(), (l = !1));
                  }));
              }
            }),
              (e.setExpanded = (t) =>
                null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t)),
              (e.toggleAllRowsExpanded = (t) => {
                (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0) : e.setExpanded({});
              }),
              (e.resetExpanded = (t) => {
                var l, n;
                e.setExpanded(
                  t ? {} : null != (l = null == (n = e.initialState) ? void 0 : n.expanded) ? l : {}
                );
              }),
              (e.getCanSomeRowsExpand = () =>
                e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand())),
              (e.getToggleAllRowsExpandedHandler = () => (t) => {
                (null == t.persist || t.persist(), e.toggleAllRowsExpanded());
              }),
              (e.getIsSomeRowsExpanded = () => {
                let t = e.getState().expanded;
                return !0 === t || Object.values(t).some(Boolean);
              }),
              (e.getIsAllRowsExpanded = () => {
                let t = e.getState().expanded;
                return "boolean" == typeof t
                  ? !0 === t
                  : !(
                      !Object.keys(t).length ||
                      e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                    );
              }),
              (e.getExpandedDepth = () => {
                let t = 0;
                return (
                  (!0 === e.getState().expanded
                    ? Object.keys(e.getRowModel().rowsById)
                    : Object.keys(e.getState().expanded)
                  ).forEach((e) => {
                    let l = e.split(".");
                    t = Math.max(t, l.length);
                  }),
                  t
                );
              }),
              (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
              (e.getExpandedRowModel = () =>
                (!e._getExpandedRowModel &&
                  e.options.getExpandedRowModel &&
                  (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                e.options.manualExpanding || !e._getExpandedRowModel)
                  ? e.getPreExpandedRowModel()
                  : e._getExpandedRowModel()));
          },
          createRow: (e, t) => {
            ((e.toggleExpanded = (l) => {
              t.setExpanded((n) => {
                var o;
                let i = !0 === n || !!(null != n && n[e.id]),
                  r = {};
                if (
                  (!0 === n
                    ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                        r[e] = !0;
                      })
                    : (r = n),
                  (l = null != (o = l) ? o : !i),
                  !i && l)
                )
                  return { ...r, [e.id]: !0 };
                if (i && !l) {
                  let { [e.id]: t, ...l } = r;
                  return l;
                }
                return n;
              });
            }),
              (e.getIsExpanded = () => {
                var l;
                let n = t.getState().expanded;
                return !!(null !=
                (l = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e))
                  ? l
                  : !0 === n || (null == n ? void 0 : n[e.id]));
              }),
              (e.getCanExpand = () => {
                var l, n, o;
                return null !=
                  (l = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e))
                  ? l
                  : (null == (n = t.options.enableExpanding) || n) &&
                      !!(null != (o = e.subRows) && o.length);
              }),
              (e.getIsAllParentsExpanded = () => {
                let l = !0,
                  n = e;
                for (; l && n.parentId; ) l = (n = t.getRow(n.parentId, !0)).getIsExpanded();
                return l;
              }),
              (e.getToggleExpandedHandler = () => {
                let t = e.getCanExpand();
                return () => {
                  t && e.toggleExpanded();
                };
              }));
          },
        },
        {
          getInitialState: (e) => ({
            ...e,
            pagination: { ...z(), ...(null == e ? void 0 : e.pagination) },
          }),
          getDefaultOptions: (e) => ({ onPaginationChange: d("pagination", e) }),
          createTable: (e) => {
            let t = !1,
              l = !1;
            ((e._autoResetPageIndex = () => {
              var n, o;
              if (!t)
                return void e._queue(() => {
                  t = !0;
                });
              if (
                null !=
                (n = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex)
                  ? n
                  : !e.options.manualPagination
              ) {
                if (l) return;
                ((l = !0),
                  e._queue(() => {
                    (e.resetPageIndex(), (l = !1));
                  }));
              }
            }),
              (e.setPagination = (t) =>
                null == e.options.onPaginationChange
                  ? void 0
                  : e.options.onPaginationChange((e) => g(t, e))),
              (e.resetPagination = (t) => {
                var l;
                e.setPagination(t ? z() : null != (l = e.initialState.pagination) ? l : z());
              }),
              (e.setPageIndex = (t) => {
                e.setPagination((l) => {
                  let n = g(t, l.pageIndex);
                  return (
                    (n = Math.max(
                      0,
                      Math.min(
                        n,
                        void 0 === e.options.pageCount || -1 === e.options.pageCount
                          ? Number.MAX_SAFE_INTEGER
                          : e.options.pageCount - 1
                      )
                    )),
                    { ...l, pageIndex: n }
                  );
                });
              }),
              (e.resetPageIndex = (t) => {
                var l, n;
                e.setPageIndex(
                  t
                    ? 0
                    : null !=
                        (l =
                          null == (n = e.initialState) || null == (n = n.pagination)
                            ? void 0
                            : n.pageIndex)
                      ? l
                      : 0
                );
              }),
              (e.resetPageSize = (t) => {
                var l, n;
                e.setPageSize(
                  t
                    ? 10
                    : null !=
                        (l =
                          null == (n = e.initialState) || null == (n = n.pagination)
                            ? void 0
                            : n.pageSize)
                      ? l
                      : 10
                );
              }),
              (e.setPageSize = (t) => {
                e.setPagination((e) => {
                  let l = Math.max(1, g(t, e.pageSize)),
                    n = Math.floor((e.pageSize * e.pageIndex) / l);
                  return { ...e, pageIndex: n, pageSize: l };
                });
              }),
              (e.setPageCount = (t) =>
                e.setPagination((l) => {
                  var n;
                  let o = g(t, null != (n = e.options.pageCount) ? n : -1);
                  return ("number" == typeof o && (o = Math.max(-1, o)), { ...l, pageCount: o });
                })),
              (e.getPageOptions = m(
                () => [e.getPageCount()],
                (e) => {
                  let t = [];
                  return (e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t);
                },
                p(e.options, "debugTable", "getPageOptions")
              )),
              (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
              (e.getCanNextPage = () => {
                let { pageIndex: t } = e.getState().pagination,
                  l = e.getPageCount();
                return -1 === l || (0 !== l && t < l - 1);
              }),
              (e.previousPage = () => e.setPageIndex((e) => e - 1)),
              (e.nextPage = () => e.setPageIndex((e) => e + 1)),
              (e.firstPage = () => e.setPageIndex(0)),
              (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
              (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
              (e.getPaginationRowModel = () =>
                (!e._getPaginationRowModel &&
                  e.options.getPaginationRowModel &&
                  (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
                e.options.manualPagination || !e._getPaginationRowModel)
                  ? e.getPrePaginationRowModel()
                  : e._getPaginationRowModel()),
              (e.getPageCount = () => {
                var t;
                return null != (t = e.options.pageCount)
                  ? t
                  : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
              }),
              (e.getRowCount = () => {
                var t;
                return null != (t = e.options.rowCount)
                  ? t
                  : e.getPrePaginationRowModel().rows.length;
              }));
          },
        },
        {
          getInitialState: (e) => ({ rowPinning: N(), ...e }),
          getDefaultOptions: (e) => ({ onRowPinningChange: d("rowPinning", e) }),
          createRow: (e, t) => {
            ((e.pin = (l, n, o) => {
              let i = n
                  ? e.getLeafRows().map((e) => {
                      let { id: t } = e;
                      return t;
                    })
                  : [],
                r = new Set([
                  ...(o
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : []),
                  e.id,
                  ...i,
                ]);
              t.setRowPinning((e) => {
                var t, n, o, i, a, u;
                return "bottom" === l
                  ? {
                      top: (null != (o = null == e ? void 0 : e.top) ? o : []).filter(
                        (e) => !(null != r && r.has(e))
                      ),
                      bottom: [
                        ...(null != (i = null == e ? void 0 : e.bottom) ? i : []).filter(
                          (e) => !(null != r && r.has(e))
                        ),
                        ...Array.from(r),
                      ],
                    }
                  : "top" === l
                    ? {
                        top: [
                          ...(null != (a = null == e ? void 0 : e.top) ? a : []).filter(
                            (e) => !(null != r && r.has(e))
                          ),
                          ...Array.from(r),
                        ],
                        bottom: (null != (u = null == e ? void 0 : e.bottom) ? u : []).filter(
                          (e) => !(null != r && r.has(e))
                        ),
                      }
                    : {
                        top: (null != (t = null == e ? void 0 : e.top) ? t : []).filter(
                          (e) => !(null != r && r.has(e))
                        ),
                        bottom: (null != (n = null == e ? void 0 : e.bottom) ? n : []).filter(
                          (e) => !(null != r && r.has(e))
                        ),
                      };
              });
            }),
              (e.getCanPin = () => {
                var l;
                let { enableRowPinning: n, enablePinning: o } = t.options;
                return "function" == typeof n ? n(e) : null == (l = null != n ? n : o) || l;
              }),
              (e.getIsPinned = () => {
                let l = [e.id],
                  { top: n, bottom: o } = t.getState().rowPinning,
                  i = l.some((e) => (null == n ? void 0 : n.includes(e))),
                  r = l.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "top" : !!r && "bottom";
              }),
              (e.getPinnedIndex = () => {
                var l, n;
                let o = e.getIsPinned();
                if (!o) return -1;
                let i =
                  null == (l = "top" === o ? t.getTopRows() : t.getBottomRows())
                    ? void 0
                    : l.map((e) => {
                        let { id: t } = e;
                        return t;
                      });
                return null != (n = null == i ? void 0 : i.indexOf(e.id)) ? n : -1;
              }));
          },
          createTable: (e) => {
            ((e.setRowPinning = (t) =>
              null == e.options.onRowPinningChange ? void 0 : e.options.onRowPinningChange(t)),
              (e.resetRowPinning = (t) => {
                var l, n;
                return e.setRowPinning(
                  t
                    ? N()
                    : null != (l = null == (n = e.initialState) ? void 0 : n.rowPinning)
                      ? l
                      : N()
                );
              }),
              (e.getIsSomeRowsPinned = (t) => {
                var l, n, o;
                let i = e.getState().rowPinning;
                return t
                  ? !!(null == (l = i[t]) ? void 0 : l.length)
                  : !!(
                      (null == (n = i.top) ? void 0 : n.length) ||
                      (null == (o = i.bottom) ? void 0 : o.length)
                    );
              }),
              (e._getPinnedRows = (t, l, n) => {
                var o;
                return (
                  null == (o = e.options.keepPinnedRows) || o
                    ? (null != l ? l : []).map((t) => {
                        let l = e.getRow(t, !0);
                        return l.getIsAllParentsExpanded() ? l : null;
                      })
                    : (null != l ? l : []).map((e) => t.find((t) => t.id === e))
                )
                  .filter(Boolean)
                  .map((e) => ({ ...e, position: n }));
              }),
              (e.getTopRows = m(
                () => [e.getRowModel().rows, e.getState().rowPinning.top],
                (t, l) => e._getPinnedRows(t, l, "top"),
                p(e.options, "debugRows", "getTopRows")
              )),
              (e.getBottomRows = m(
                () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                (t, l) => e._getPinnedRows(t, l, "bottom"),
                p(e.options, "debugRows", "getBottomRows")
              )),
              (e.getCenterRows = m(
                () => [
                  e.getRowModel().rows,
                  e.getState().rowPinning.top,
                  e.getState().rowPinning.bottom,
                ],
                (e, t, l) => {
                  let n = new Set([...(null != t ? t : []), ...(null != l ? l : [])]);
                  return e.filter((e) => !n.has(e.id));
                },
                p(e.options, "debugRows", "getCenterRows")
              )));
          },
        },
        {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: d("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            ((e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var l;
                return e.setRowSelection(
                  t ? {} : null != (l = e.initialState.rowSelection) ? l : {}
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((l) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  let n = { ...l },
                    o = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? o.forEach((e) => {
                          e.getCanSelect() && (n[e.id] = !0);
                        })
                      : o.forEach((e) => {
                          delete n[e.id];
                        }),
                    n
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((l) => {
                  let n = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    o = { ...l };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      O(o, t.id, n, !0, e);
                    }),
                    o
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = m(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, l) =>
                  Object.keys(t).length ? T(e, l) : { rows: [], flatRows: [], rowsById: {} },
                p(e.options, "debugTable", "getSelectedRowModel")
              )),
              (e.getFilteredSelectedRowModel = m(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, l) =>
                  Object.keys(t).length ? T(e, l) : { rows: [], flatRows: [], rowsById: {} },
                p(e.options, "debugTable", "getFilteredSelectedRowModel")
              )),
              (e.getGroupedSelectedRowModel = m(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, l) =>
                  Object.keys(t).length ? T(e, l) : { rows: [], flatRows: [], rowsById: {} },
                p(e.options, "debugTable", "getGroupedSelectedRowModel")
              )),
              (e.getIsAllRowsSelected = () => {
                let t = e.getFilteredRowModel().flatRows,
                  { rowSelection: l } = e.getState(),
                  n = !!(t.length && Object.keys(l).length);
                return (n && t.some((e) => e.getCanSelect() && !l[e.id]) && (n = !1), n);
              }),
              (e.getIsAllPageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: l } = e.getState(),
                  n = !!t.length;
                return (n && t.some((e) => !l[e.id]) && (n = !1), n);
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                let l = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                return l > 0 && l < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              }));
          },
          createRow: (e, t) => {
            ((e.toggleSelected = (l, n) => {
              let o = e.getIsSelected();
              t.setRowSelection((i) => {
                var r;
                if (((l = void 0 !== l ? l : !o), e.getCanSelect() && o === l)) return i;
                let a = { ...i };
                return (
                  O(a, e.id, l, null == (r = null == n ? void 0 : n.selectChildren) || r, t),
                  a
                );
              });
            }),
              (e.getIsSelected = () => {
                let { rowSelection: l } = t.getState();
                return B(e, l);
              }),
              (e.getIsSomeSelected = () => {
                let { rowSelection: l } = t.getState();
                return "some" === k(e, l);
              }),
              (e.getIsAllSubRowsSelected = () => {
                let { rowSelection: l } = t.getState();
                return "all" === k(e, l);
              }),
              (e.getCanSelect = () => {
                var l;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (l = t.options.enableRowSelection) || l;
              }),
              (e.getCanSelectSubRows = () => {
                var l;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (l = t.options.enableSubRowSelection) || l;
              }),
              (e.getCanMultiSelect = () => {
                var l;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (l = t.options.enableMultiRowSelection) || l;
              }),
              (e.getToggleSelectedHandler = () => {
                let t = e.getCanSelect();
                return (l) => {
                  var n;
                  t && e.toggleSelected(null == (n = l.target) ? void 0 : n.checked);
                };
              }));
          },
        },
        {
          getDefaultColumnDef: () => j,
          getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: L(), ...e }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: d("columnSizing", e),
            onColumnSizingInfoChange: d("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            ((e.getSize = () => {
              var l, n, o;
              let i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (l = e.columnDef.minSize) ? l : j.minSize,
                  null != (n = null != i ? i : e.columnDef.size) ? n : j.size
                ),
                null != (o = e.columnDef.maxSize) ? o : j.maxSize
              );
            }),
              (e.getStart = m(
                (e) => [e, D(t, e), t.getState().columnSizing],
                (t, l) => l.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
                p(t.options, "debugColumns", "getStart")
              )),
              (e.getAfter = m(
                (e) => [e, D(t, e), t.getState().columnSizing],
                (t, l) => l.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
                p(t.options, "debugColumns", "getAfter")
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: l, ...n } = t;
                  return n;
                });
              }),
              (e.getCanResize = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableResizing) || l) &&
                  (null == (n = t.options.enableColumnResizing) || n)
                );
              }),
              (e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id));
          },
          createHeader: (e, t) => {
            ((e.getSize = () => {
              let t = 0,
                l = (e) => {
                  if (e.subHeaders.length) e.subHeaders.forEach(l);
                  else {
                    var n;
                    t += null != (n = e.column.getSize()) ? n : 0;
                  }
                };
              return (l(e), t);
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  let t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (l) => {
                let n = t.getColumn(e.column.id),
                  o = null == n ? void 0 : n.getCanResize();
                return (i) => {
                  if (
                    !n ||
                    !o ||
                    (null == i.persist || i.persist(), H(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  let r = e.getSize(),
                    a = e
                      ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()])
                      : [[n.id, n.getSize()]],
                    u = H(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    s = {},
                    g = (e, l) => {
                      "number" == typeof l &&
                        (t.setColumnSizingInfo((e) => {
                          var n, o;
                          let i = "rtl" === t.options.columnResizeDirection ? -1 : 1,
                            r =
                              (l - (null != (n = null == e ? void 0 : e.startOffset) ? n : 0)) * i,
                            a = Math.max(
                              r / (null != (o = null == e ? void 0 : e.startSize) ? o : 0),
                              -0.999999
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, l] = e;
                              s[t] = Math.round(100 * Math.max(l + l * a, 0)) / 100;
                            }),
                            { ...e, deltaOffset: r, deltaPercentage: a }
                          );
                        }),
                        ("onChange" === t.options.columnResizeMode || "end" === e) &&
                          t.setColumnSizing((e) => ({ ...e, ...s })));
                    },
                    d = (e) => {
                      (g("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        })));
                    },
                    c = l || ("u" > typeof document ? document : null),
                    m = {
                      moveHandler: (e) => g("move", e.clientX),
                      upHandler: (e) => {
                        (null == c || c.removeEventListener("mousemove", m.moveHandler),
                          null == c || c.removeEventListener("mouseup", m.upHandler),
                          d(e.clientX));
                      },
                    },
                    p = {
                      moveHandler: (e) => (
                        e.cancelable && (e.preventDefault(), e.stopPropagation()),
                        g("move", e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        (null == c || c.removeEventListener("touchmove", p.moveHandler),
                          null == c || c.removeEventListener("touchend", p.upHandler),
                          e.cancelable && (e.preventDefault(), e.stopPropagation()),
                          d(null == (t = e.touches[0]) ? void 0 : t.clientX));
                      },
                    },
                    f = !!(function () {
                      if ("boolean" == typeof G) return G;
                      let e = !1;
                      try {
                        let t = () => {};
                        (window.addEventListener("test", t, {
                          get passive() {
                            return ((e = !0), !1);
                          },
                        }),
                          window.removeEventListener("test", t));
                      } catch (t) {
                        e = !1;
                      }
                      return (G = e);
                    })() && { passive: !1 };
                  (H(i)
                    ? (null == c || c.addEventListener("touchmove", p.moveHandler, f),
                      null == c || c.addEventListener("touchend", p.upHandler, f))
                    : (null == c || c.addEventListener("mousemove", m.moveHandler, f),
                      null == c || c.addEventListener("mouseup", m.upHandler, f)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: u,
                      startSize: r,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: a,
                      isResizingColumn: n.id,
                    })));
                };
              }));
          },
          createTable: (e) => {
            ((e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var l;
                e.setColumnSizing(t ? {} : null != (l = e.initialState.columnSizing) ? l : {});
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var l;
                e.setColumnSizingInfo(
                  t ? L() : null != (l = e.initialState.columnSizingInfo) ? l : L()
                );
              }),
              (e.getTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getRightHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }));
          },
        },
      ];
    function J(e, t) {
      var n, o, i;
      let r;
      return e
        ? ("function" == typeof (o = n = e) &&
            (r = Object.getPrototypeOf(o)).prototype &&
            r.prototype.isReactComponent) ||
          "function" == typeof n ||
          ("object" == typeof (i = n) &&
            "symbol" == typeof i.$$typeof &&
            ["react.memo", "react.forward_ref"].includes(i.$$typeof.description))
          ? l.createElement(e, t)
          : e
        : null;
    }
    var W = e.i(58976),
      Y = e.i(19871),
      Z = e.i(32103),
      ee = e.i(16220),
      et = e.i(76111),
      el = e.i(22991),
      en = e.i(39781),
      eo = e.i(61156),
      ei = e.i(71978),
      er = e.i(59115);
    let ea = o.z.object({
        name: o.z.string().min(2, "Enter a name"),
        email: o.z.string().email("Enter a valid email"),
        role: o.z.enum(["owner", "admin", "manager", "member"]),
        status: o.z.enum(["active", "inactive"]),
      }),
      eu = ["owner", "admin", "manager", "member"];
    function es() {
      let e = (0, n.useRouter)(),
        o = (0, s.useQueryClient)(),
        d = (0, ee.useAuthStore)((e) => e.user),
        [c, f] = (0, l.useState)(1),
        [h] = (0, l.useState)(10),
        [w, v] = (0, l.useState)(""),
        [b, S] = (0, l.useState)(""),
        [R, x] = (0, l.useState)(""),
        [F, M] = (0, l.useState)(""),
        [P, V] = (0, l.useState)([]),
        [y, I] = (0, l.useState)({});
      ((0, l.useEffect)(() => {
        let e = setTimeout(() => S(w), 400);
        return () => clearTimeout(e);
      }, [w]),
        (0, l.useEffect)(() => {
          d && "owner" !== d.role && "admin" !== d.role && e.replace("/403");
        }, [d, e]));
      let {
          data: _,
          isLoading: E,
          isError: A,
          refetch: j,
        } = (0, u.useQuery)({
          queryKey: ["users", c, h, b, R, F],
          queryFn: async () => {
            let e = new URLSearchParams({ page: String(c), pageSize: String(h) });
            (b && e.set("q", b), R && e.set("role", R), F && e.set("status", F));
            let t = await (0, Z.apiClient)(`/api/users?${e}`);
            if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to fetch users");
            return t.data;
          },
        }),
        L = (0, a.useMutation)({
          mutationFn: async (e) => {
            let t = await (0, Z.apiClient)("/api/users", {
              method: "POST",
              body: JSON.stringify(e),
            });
            if (t.error || !t.data) throw Error(t.error?.message ?? "Failed to create user");
            return t.data.user;
          },
          onSuccess: () => {
            (W.toast.success("User created"), o.invalidateQueries({ queryKey: ["users"] }));
          },
          onError: (e) => {
            W.toast.error(e.message);
          },
        }),
        G = (0, a.useMutation)({
          mutationFn: async (e) => {
            let t = await (0, Z.apiClient)(`/api/users/${e.id}`, {
              method: "PATCH",
              body: JSON.stringify(e.patch),
            });
            if (t.error || !t.data) throw Error(t.error?.message ?? "Update failed");
            return t.data.user;
          },
          onMutate: async ({ id: e, patch: t }) => {
            await o.cancelQueries({ queryKey: ["users"] });
            let l = o.getQueryData(["users", c, h, b, R, F]);
            return (
              l &&
                o.setQueryData(["users", c, h, b, R, F], {
                  ...l,
                  items: l.items.map((l) => (l.id === e ? { ...l, ...t } : l)),
                }),
              { previous: l }
            );
          },
          onError: (e, t, l) => {
            (l?.previous && o.setQueryData(["users", c, h, b, R, F], l.previous),
              W.toast.error(e.message));
          },
          onSuccess: () => {
            (W.toast.success("User updated"), o.invalidateQueries({ queryKey: ["users"] }));
          },
        }),
        {
          register: H,
          handleSubmit: D,
          formState: { errors: z },
          reset: N,
        } = (0, i.useForm)({
          resolver: (0, r.zodResolver)(ea),
          defaultValues: { name: "", email: "", role: "member", status: "active" },
        }),
        O = D((e) => {
          L.mutate(e, { onSuccess: () => N() });
        }),
        T = (0, l.useMemo)(
          () => [
            {
              id: "select",
              header: ({ table: e }) =>
                (0, t.jsx)("input", {
                  type: "checkbox",
                  checked: e.getIsAllPageRowsSelected(),
                  onChange: (t) => e.toggleAllPageRowsSelected(t.target.checked),
                }),
              cell: ({ row: e }) =>
                (0, t.jsx)("input", {
                  type: "checkbox",
                  checked: e.getIsSelected(),
                  onChange: (t) => e.toggleSelected(t.target.checked),
                }),
            },
            {
              accessorKey: "name",
              header: "Name",
              cell: ({ row: e }) =>
                (0, t.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, t.jsx)("p", { className: "font-medium", children: e.original.name }),
                    (0, t.jsx)(Y.default, {
                      href: `/users/${e.original.id}`,
                      className: "text-xs text-white/60 underline",
                      children: "View profile",
                    }),
                  ],
                }),
            },
            { accessorKey: "email", header: "Email" },
            {
              accessorKey: "role",
              header: "Role",
              cell: ({ row: e }) =>
                (0, t.jsx)("select", {
                  className: "rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs",
                  value: e.original.role,
                  onChange: (t) => G.mutate({ id: e.original.id, patch: { role: t.target.value } }),
                  children: eu.map((e) => (0, t.jsx)("option", { value: e, children: e }, e)),
                }),
            },
            {
              accessorKey: "status",
              header: "Status",
              cell: ({ row: e }) =>
                (0, t.jsx)(el.Button, {
                  size: "xs",
                  variant: "active" === e.original.status ? "secondary" : "outline",
                  className: "border-white/10 text-white",
                  onClick: () =>
                    G.mutate({
                      id: e.original.id,
                      patch: { status: "active" === e.original.status ? "inactive" : "active" },
                    }),
                  children: e.original.status,
                }),
            },
            {
              accessorKey: "createdAt",
              header: "Created",
              cell: ({ row: e }) => new Date(e.original.createdAt).toLocaleDateString(),
            },
          ],
          [G]
        ),
        B = (function (e) {
          let t = { state: {}, onStateChange: () => {}, renderFallbackValue: null, ...e },
            [n] = l.useState(() => ({
              current: (function (e) {
                var t, l;
                let n = [...Q, ...(null != (t = e._features) ? t : [])],
                  o = { _features: n },
                  i = o._features.reduce(
                    (e, t) =>
                      Object.assign(
                        e,
                        null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(o)
                      ),
                    {}
                  ),
                  r = { ...(null != (l = e.initialState) ? l : {}) };
                o._features.forEach((e) => {
                  var t;
                  r =
                    null != (t = null == e.getInitialState ? void 0 : e.getInitialState(r)) ? t : r;
                });
                let a = [],
                  u = !1,
                  s = {
                    _features: n,
                    options: { ...i, ...e },
                    initialState: r,
                    _queue: (e) => {
                      (a.push(e),
                        u ||
                          ((u = !0),
                          Promise.resolve()
                            .then(() => {
                              for (; a.length; ) a.shift()();
                              u = !1;
                            })
                            .catch((e) =>
                              setTimeout(() => {
                                throw e;
                              })
                            )));
                    },
                    reset: () => {
                      o.setState(o.initialState);
                    },
                    setOptions: (e) => {
                      var t;
                      ((t = g(e, o.options)),
                        (o.options = o.options.mergeOptions
                          ? o.options.mergeOptions(i, t)
                          : { ...i, ...t }));
                    },
                    getState: () => o.options.state,
                    setState: (e) => {
                      null == o.options.onStateChange || o.options.onStateChange(e);
                    },
                    _getRowId: (e, t, l) => {
                      var n;
                      return null !=
                        (n = null == o.options.getRowId ? void 0 : o.options.getRowId(e, t, l))
                        ? n
                        : `${l ? [l.id, t].join(".") : t}`;
                    },
                    getCoreRowModel: () => (
                      o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)),
                      o._getCoreRowModel()
                    ),
                    getRowModel: () => o.getPaginationRowModel(),
                    getRow: (e, t) => {
                      let l = (t ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[e];
                      if (!l && !(l = o.getCoreRowModel().rowsById[e])) throw Error();
                      return l;
                    },
                    _getDefaultColumnDef: m(
                      () => [o.options.defaultColumn],
                      (e) => {
                        var t;
                        return (
                          (e = null != (t = e) ? t : {}),
                          {
                            header: (e) => {
                              let t = e.header.column.columnDef;
                              return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
                            },
                            cell: (e) => {
                              var t, l;
                              return null !=
                                (t =
                                  null == (l = e.renderValue()) || null == l.toString
                                    ? void 0
                                    : l.toString())
                                ? t
                                : null;
                            },
                            ...o._features.reduce(
                              (e, t) =>
                                Object.assign(
                                  e,
                                  null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef()
                                ),
                              {}
                            ),
                            ...e,
                          }
                        );
                      },
                      p(e, "debugColumns", "_getDefaultColumnDef")
                    ),
                    _getColumnDefs: () => o.options.columns,
                    getAllColumns: m(
                      () => [o._getColumnDefs()],
                      (e) => {
                        let t = function (e, l, n) {
                          return (
                            void 0 === n && (n = 0),
                            e.map((e) => {
                              let i = (function (e, t, l, n) {
                                var o, i;
                                let r,
                                  a = { ...e._getDefaultColumnDef(), ...t },
                                  u = a.accessorKey,
                                  s =
                                    null !=
                                    (o =
                                      null != (i = a.id)
                                        ? i
                                        : u
                                          ? "function" == typeof String.prototype.replaceAll
                                            ? u.replaceAll(".", "_")
                                            : u.replace(/\./g, "_")
                                          : void 0)
                                      ? o
                                      : "string" == typeof a.header
                                        ? a.header
                                        : void 0;
                                if (
                                  (a.accessorFn
                                    ? (r = a.accessorFn)
                                    : u &&
                                      (r = u.includes(".")
                                        ? (e) => {
                                            let t = e;
                                            for (let e of u.split(".")) {
                                              var l;
                                              t = null == (l = t) ? void 0 : l[e];
                                            }
                                            return t;
                                          }
                                        : (e) => e[a.accessorKey]),
                                  !s)
                                )
                                  throw Error();
                                let g = {
                                  id: `${String(s)}`,
                                  accessorFn: r,
                                  parent: n,
                                  depth: l,
                                  columnDef: a,
                                  columns: [],
                                  getFlatColumns: m(
                                    () => [!0],
                                    () => {
                                      var e;
                                      return [
                                        g,
                                        ...(null == (e = g.columns)
                                          ? void 0
                                          : e.flatMap((e) => e.getFlatColumns())),
                                      ];
                                    },
                                    p(e.options, "debugColumns", "column.getFlatColumns")
                                  ),
                                  getLeafColumns: m(
                                    () => [e._getOrderColumnsFn()],
                                    (e) => {
                                      var t;
                                      return null != (t = g.columns) && t.length
                                        ? e(g.columns.flatMap((e) => e.getLeafColumns()))
                                        : [g];
                                    },
                                    p(e.options, "debugColumns", "column.getLeafColumns")
                                  ),
                                };
                                for (let t of e._features)
                                  null == t.createColumn || t.createColumn(g, e);
                                return g;
                              })(o, e, n, l);
                              return ((i.columns = e.columns ? t(e.columns, i, n + 1) : []), i);
                            })
                          );
                        };
                        return t(e);
                      },
                      p(e, "debugColumns", "getAllColumns")
                    ),
                    getAllFlatColumns: m(
                      () => [o.getAllColumns()],
                      (e) => e.flatMap((e) => e.getFlatColumns()),
                      p(e, "debugColumns", "getAllFlatColumns")
                    ),
                    _getAllFlatColumnsById: m(
                      () => [o.getAllFlatColumns()],
                      (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
                      p(e, "debugColumns", "getAllFlatColumnsById")
                    ),
                    getAllLeafColumns: m(
                      () => [o.getAllColumns(), o._getOrderColumnsFn()],
                      (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
                      p(e, "debugColumns", "getAllLeafColumns")
                    ),
                    getColumn: (e) => o._getAllFlatColumnsById()[e],
                  };
                Object.assign(o, s);
                for (let e = 0; e < o._features.length; e++) {
                  let t = o._features[e];
                  null == t || null == t.createTable || t.createTable(o);
                }
                return o;
              })(t),
            })),
            [o, i] = l.useState(() => n.current.initialState);
          return (
            n.current.setOptions((t) => ({
              ...t,
              ...e,
              state: { ...o, ...e.state },
              onStateChange: (t) => {
                (i(t), null == e.onStateChange || e.onStateChange(t));
              },
            })),
            n.current
          );
        })({
          data: _?.items ?? [],
          columns: T,
          state: { sorting: P, rowSelection: y },
          onSortingChange: V,
          onRowSelectionChange: I,
          getCoreRowModel: (e) =>
            m(
              () => [e.options.data],
              (t) => {
                let l = { rows: [], flatRows: [], rowsById: {} },
                  n = function (t, o, i) {
                    void 0 === o && (o = 0);
                    let r = [];
                    for (let u = 0; u < t.length; u++) {
                      let s = C(
                        e,
                        e._getRowId(t[u], u, i),
                        t[u],
                        u,
                        o,
                        void 0,
                        null == i ? void 0 : i.id
                      );
                      if (
                        (l.flatRows.push(s),
                        (l.rowsById[s.id] = s),
                        r.push(s),
                        e.options.getSubRows)
                      ) {
                        var a;
                        ((s.originalSubRows = e.options.getSubRows(t[u], u)),
                          null != (a = s.originalSubRows) &&
                            a.length &&
                            (s.subRows = n(s.originalSubRows, o + 1, s)));
                      }
                    }
                    return r;
                  };
                return ((l.rows = n(t)), l);
              },
              p(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
            ),
          getSortedRowModel: (e) =>
            m(
              () => [e.getState().sorting, e.getPreSortedRowModel()],
              (t, l) => {
                if (!l.rows.length || !(null != t && t.length)) return l;
                let n = e.getState().sorting,
                  o = [],
                  i = n.filter((t) => {
                    var l;
                    return null == (l = e.getColumn(t.id)) ? void 0 : l.getCanSort();
                  }),
                  r = {};
                i.forEach((t) => {
                  let l = e.getColumn(t.id);
                  l &&
                    (r[t.id] = {
                      sortUndefined: l.columnDef.sortUndefined,
                      invertSorting: l.columnDef.invertSorting,
                      sortingFn: l.getSortingFn(),
                    });
                });
                let a = (e) => {
                  let t = e.map((e) => ({ ...e }));
                  return (
                    t.sort((e, t) => {
                      for (let n = 0; n < i.length; n += 1) {
                        var l;
                        let o = i[n],
                          a = r[o.id],
                          u = a.sortUndefined,
                          s = null != (l = null == o ? void 0 : o.desc) && l,
                          g = 0;
                        if (u) {
                          let l = e.getValue(o.id),
                            n = t.getValue(o.id),
                            i = void 0 === l,
                            r = void 0 === n;
                          if (i || r) {
                            if ("first" === u) return i ? -1 : 1;
                            if ("last" === u) return i ? 1 : -1;
                            g = i && r ? 0 : i ? u : -u;
                          }
                        }
                        if ((0 === g && (g = a.sortingFn(e, t, o.id)), 0 !== g))
                          return (s && (g *= -1), a.invertSorting && (g *= -1), g);
                      }
                      return e.index - t.index;
                    }),
                    t.forEach((e) => {
                      var t;
                      (o.push(e),
                        null != (t = e.subRows) && t.length && (e.subRows = a(e.subRows)));
                    }),
                    t
                  );
                };
                return { rows: a(l.rows), flatRows: o, rowsById: l.rowsById };
              },
              p(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex())
            ),
          manualSorting: !1,
        }),
        k = B.getSelectedRowModel().rows.map((e) => e.original.id);
      return d && "owner" !== d.role && "admin" !== d.role
        ? null
        : (0, t.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, t.jsxs)(en.Card, {
                className: "border-white/10 bg-white/5",
                children: [
                  (0, t.jsx)(en.CardHeader, {
                    children: (0, t.jsx)(en.CardTitle, { children: "Create user" }),
                  }),
                  (0, t.jsx)(en.CardContent, {
                    children: (0, t.jsxs)("form", {
                      className: "grid gap-4 md:grid-cols-4",
                      onSubmit: O,
                      children: [
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)(ei.Label, { htmlFor: "name", children: "Name" }),
                            (0, t.jsx)(eo.Input, {
                              id: "name",
                              placeholder: "Alex Morgan",
                              className:
                                "border-white/10 bg-white/10 text-white placeholder:text-white/40",
                              ...H("name"),
                            }),
                            z.name
                              ? (0, t.jsx)("p", {
                                  className: "text-xs text-rose-300",
                                  children: z.name.message,
                                })
                              : null,
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)(ei.Label, { htmlFor: "email", children: "Email" }),
                            (0, t.jsx)(eo.Input, {
                              id: "email",
                              placeholder: "alex@company.com",
                              className:
                                "border-white/10 bg-white/10 text-white placeholder:text-white/40",
                              ...H("email"),
                            }),
                            z.email
                              ? (0, t.jsx)("p", {
                                  className: "text-xs text-rose-300",
                                  children: z.email.message,
                                })
                              : null,
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)(ei.Label, { children: "Role" }),
                            (0, t.jsx)("select", {
                              className:
                                "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                              ...H("role"),
                              children: eu.map((e) =>
                                (0, t.jsx)("option", { value: e, children: e }, e)
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)(ei.Label, { children: "Status" }),
                            (0, t.jsxs)("select", {
                              className:
                                "h-9 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                              ...H("status"),
                              children: [
                                (0, t.jsx)("option", { value: "active", children: "active" }),
                                (0, t.jsx)("option", { value: "inactive", children: "inactive" }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "md:col-span-4 flex flex-wrap gap-3",
                          children: [
                            (0, t.jsx)(el.Button, {
                              type: "submit",
                              className: "bg-white text-slate-900 hover:bg-white/90",
                              children: L.isPending ? "Creating..." : "Create user",
                            }),
                            (0, t.jsx)(el.Button, {
                              type: "button",
                              variant: "outline",
                              className: "border-white/10 text-white",
                              onClick: () => N(),
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(en.Card, {
                className: "border-white/10 bg-white/5",
                children: [
                  (0, t.jsxs)(en.CardHeader, {
                    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(en.CardTitle, { children: "Users" }),
                          (0, t.jsx)("p", {
                            className: "text-sm text-white/60",
                            children: "Manage access, roles, and activity.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                          (0, t.jsx)(eo.Input, {
                            placeholder: "Search users...",
                            value: w,
                            onChange: (e) => {
                              (v(e.target.value), f(1));
                            },
                            className:
                              "w-52 border-white/10 bg-white/10 text-white placeholder:text-white/40",
                          }),
                          (0, t.jsxs)("select", {
                            className:
                              "h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                            value: R,
                            onChange: (e) => {
                              (x(e.target.value), f(1));
                            },
                            children: [
                              (0, t.jsx)("option", { value: "", children: "All roles" }),
                              eu.map((e) => (0, t.jsx)("option", { value: e, children: e }, e)),
                            ],
                          }),
                          (0, t.jsxs)("select", {
                            className:
                              "h-9 rounded-md border border-white/10 bg-slate-950/60 px-3 text-sm",
                            value: F,
                            onChange: (e) => {
                              (M(e.target.value), f(1));
                            },
                            children: [
                              (0, t.jsx)("option", { value: "", children: "All statuses" }),
                              (0, t.jsx)("option", { value: "active", children: "Active" }),
                              (0, t.jsx)("option", { value: "inactive", children: "Inactive" }),
                            ],
                          }),
                          (0, t.jsx)(el.Button, {
                            variant: "outline",
                            className: "border-white/10 text-white",
                            onClick: () => j(),
                            children: "Refresh",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)(en.CardContent, {
                    className: "space-y-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, t.jsxs)(et.Badge, {
                                variant: "secondary",
                                className: "bg-white/10 text-white",
                                children: [_?.total ?? 0, " users"],
                              }),
                              k.length > 0
                                ? (0, t.jsxs)(et.Badge, {
                                    variant: "secondary",
                                    className: "bg-white/10 text-white",
                                    children: [k.length, " selected"],
                                  })
                                : null,
                            ],
                          }),
                          (0, t.jsx)(el.Button, {
                            variant: "outline",
                            className: "border-white/10 text-white",
                            onClick: () => {
                              k.forEach((e) => G.mutate({ id: e, patch: { status: "inactive" } }));
                            },
                            disabled: 0 === k.length,
                            children: "Disable selected",
                          }),
                        ],
                      }),
                      E
                        ? (0, t.jsx)("div", {
                            className:
                              "rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60",
                            children: "Loading users...",
                          })
                        : A
                          ? (0, t.jsxs)("div", {
                              className:
                                "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                              children: [
                                (0, t.jsx)("p", {
                                  className: "text-lg font-semibold",
                                  children: "Failed to load users",
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-white/60",
                                  children: "Please try again.",
                                }),
                                (0, t.jsx)(el.Button, {
                                  className: "mt-4",
                                  onClick: () => j(),
                                  children: "Retry",
                                }),
                              ],
                            })
                          : _ && 0 === _.items.length
                            ? (0, t.jsxs)("div", {
                                className:
                                  "rounded-2xl border border-white/10 bg-white/5 p-6 text-center",
                                children: [
                                  (0, t.jsx)("p", {
                                    className: "text-lg font-semibold",
                                    children: "No users found",
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "text-white/60",
                                    children: "Try adjusting filters or create a new user.",
                                  }),
                                ],
                              })
                            : (0, t.jsx)("div", {
                                className: "rounded-xl border border-white/10",
                                children: (0, t.jsxs)(er.Table, {
                                  children: [
                                    (0, t.jsx)(er.TableHeader, {
                                      children: B.getHeaderGroups().map((e) =>
                                        (0, t.jsx)(
                                          er.TableRow,
                                          {
                                            children: e.headers.map((e) =>
                                              (0, t.jsx)(
                                                er.TableHead,
                                                {
                                                  children: e.isPlaceholder
                                                    ? null
                                                    : J(e.column.columnDef.header, e.getContext()),
                                                },
                                                e.id
                                              )
                                            ),
                                          },
                                          e.id
                                        )
                                      ),
                                    }),
                                    (0, t.jsx)(er.TableBody, {
                                      children: B.getRowModel().rows.map((e) =>
                                        (0, t.jsx)(
                                          er.TableRow,
                                          {
                                            children: e
                                              .getVisibleCells()
                                              .map((e) =>
                                                (0, t.jsx)(
                                                  er.TableCell,
                                                  {
                                                    children: J(
                                                      e.column.columnDef.cell,
                                                      e.getContext()
                                                    ),
                                                  },
                                                  e.id
                                                )
                                              ),
                                          },
                                          e.id
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                      (0, t.jsxs)("div", {
                        className: "flex items-center justify-between text-sm text-white/60",
                        children: [
                          (0, t.jsxs)("p", {
                            children: [
                              "Page ",
                              c,
                              " of ",
                              Math.max(1, Math.ceil((_?.total ?? 0) / h)),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, t.jsx)(el.Button, {
                                variant: "outline",
                                className: "border-white/10 text-white",
                                disabled: 1 === c,
                                onClick: () => f((e) => Math.max(1, e - 1)),
                                children: "Previous",
                              }),
                              (0, t.jsx)(el.Button, {
                                variant: "outline",
                                className: "border-white/10 text-white",
                                disabled: c >= Math.ceil((_?.total ?? 0) / h),
                                onClick: () => f((e) => e + 1),
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    }
    e.s(["default", () => es], 2162);
  },
]);
