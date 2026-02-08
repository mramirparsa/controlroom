(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  62248,
  (e) => {
    "use strict";
    var t = e.i(62482),
      r = e.i(48612),
      a = e.i(34706),
      s = e.i(3021),
      n = e.i(32103),
      i = e.i(39781),
      l = e.i(22991),
      o = e.i(76111),
      c = e.i(19871),
      d = (e) => null;
    d.displayName = "Cell";
    var m = e.i(20452),
      u = e.i(37016),
      h = e.i(81098),
      x = e.i(62388),
      p = e.i(4913),
      f = e.i(42667),
      g = e.i(89587),
      v = e.i(29225),
      y = e.i(80869),
      b = e.i(92694),
      j = e.i(55443),
      N = e.i(48101),
      w = e.i(74046),
      S = e.i(72540),
      k = (e) => e.graphicalItems.polarItems,
      C = (0, p.createSelector)([j.pickAxisType, N.pickAxisId], y.itemAxisPredicate),
      A = (0, p.createSelector)([k, y.selectBaseAxis, C], y.combineGraphicalItemsSettings),
      P = (0, p.createSelector)([A], y.combineGraphicalItemsData),
      _ = (0, p.createSelector)(
        [P, f.selectChartDataAndAlwaysIgnoreIndexes],
        y.combineDisplayedData
      ),
      O = (0, p.createSelector)([_, y.selectBaseAxis, A], y.combineAppliedValues);
    (0, p.createSelector)([_, y.selectBaseAxis, A], (e, t, r) =>
      r.length > 0
        ? e
            .flatMap((e) =>
              r.flatMap((r) => {
                var a;
                return {
                  value: (0, v.getValueByDataKey)(e, null != (a = t.dataKey) ? a : r.dataKey),
                  errorDomain: [],
                };
              })
            )
            .filter(Boolean)
        : (null == t ? void 0 : t.dataKey) != null
          ? e.map((e) => ({ value: (0, v.getValueByDataKey)(e, t.dataKey), errorDomain: [] }))
          : e.map((e) => ({ value: e, errorDomain: [] }))
    );
    var T = () => void 0,
      E = (0, p.createSelector)(
        [_, y.selectBaseAxis, A, y.selectAllErrorBarSettings, j.pickAxisType],
        y.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues
      ),
      R = (0, p.createSelector)(
        [
          y.selectBaseAxis,
          y.selectDomainDefinition,
          y.selectDomainFromUserPreference,
          T,
          E,
          T,
          b.selectChartLayout,
          j.pickAxisType,
        ],
        y.combineNumericalDomain
      ),
      I = (0, p.createSelector)(
        [y.selectBaseAxis, b.selectChartLayout, _, O, w.selectStackOffsetType, j.pickAxisType, R],
        y.combineAxisDomain
      ),
      D = (0, p.createSelector)(
        [I, y.selectRenderableAxisSettings, y.selectRealScaleType],
        y.combineNiceTicks
      ),
      M = (0, p.createSelector)(
        [y.selectBaseAxis, I, D, j.pickAxisType],
        y.combineAxisDomainWithNiceTicks
      );
    function L(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a));
      }
      return r;
    }
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? L(Object(r), !0).forEach(function (t) {
              var a, s, n;
              ((a = e),
                (s = t),
                (n = r[t]),
                (s = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var a = r.call(e, t || "default");
                      if ("object" != typeof a) return a;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(s)) in a
                  ? Object.defineProperty(a, s, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[s] = n));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    (0, p.createSelector)([y.selectRealScaleType, M], S.combineCheckedDomain);
    var K = (0, p.createSelector)([k, (e, t) => t], (e, t) =>
        e.filter((e) => "pie" === e.type).find((e) => e.id === t)
      ),
      V = [],
      H = (e, t, r) => ((null == r ? void 0 : r.length) === 0 ? V : r),
      U = (0, p.createSelector)([f.selectChartDataAndAlwaysIgnoreIndexes, K, H], (e, t, r) => {
        var a,
          { chartData: s } = e;
        if (
          null != t &&
          (((a = (null == t ? void 0 : t.data) != null && t.data.length > 0 ? t.data : s) &&
            a.length) ||
            null == r ||
            (a = r.map((e) => B(B({}, t.presentationProps), e.props))),
          null != a)
        )
          return a;
      }),
      G = (0, p.createSelector)([U, K, H], (e, t, r) => {
        if (null != e && null != t)
          return e.map((e, a) => {
            var s,
              n,
              i = (0, v.getValueByDataKey)(e, t.nameKey, t.name);
            return (
              (n =
                null != r && null != (s = r[a]) && null != (s = s.props) && s.fill
                  ? r[a].props.fill
                  : "object" == typeof e && null != e && "fill" in e
                    ? e.fill
                    : t.fill),
              {
                value: (0, v.getTooltipNameProp)(i, t.dataKey),
                color: n,
                payload: e,
                type: t.legendType,
              }
            );
          });
      }),
      z = (0, p.createSelector)([U, K, H, g.selectChartOffsetInternal], (e, t, r, a) => {
        if (null != t && null != e)
          return (function (e) {
            var t,
              r,
              a,
              { pieSettings: s, displayedData: n, cells: i, offset: l } = e,
              {
                cornerRadius: o,
                startAngle: c,
                endAngle: d,
                dataKey: m,
                nameKey: u,
                tooltipType: h,
              } = s,
              x = Math.abs(s.minAngle),
              p = (0, X.mathSign)(d - c) * Math.min(Math.abs(d - c), 360),
              f = Math.abs(p),
              g = n.length <= 1 ? 0 : null != (t = s.paddingAngle) ? t : 0,
              y = n.filter((e) => 0 !== (0, v.getValueByDataKey)(e, m, 0)).length,
              b = f - y * x - (f >= 360 ? y : y - 1) * g,
              j = n.reduce((e, t) => {
                var r = (0, v.getValueByDataKey)(t, m, 0);
                return e + ((0, X.isNumber)(r) ? r : 0);
              }, 0);
            return (
              j > 0 &&
                (r = n.map((e, t) => {
                  var r,
                    n = (0, v.getValueByDataKey)(e, m, 0),
                    d = (0, v.getValueByDataKey)(e, u, t),
                    f = ((e, t, r) => {
                      var a,
                        { top: s, left: n, width: i, height: l } = t,
                        o = (0, Q.getMaxRadius)(i, l),
                        c = n + (0, X.getPercentValue)(e.cx, i, i / 2),
                        d = s + (0, X.getPercentValue)(e.cy, l, l / 2),
                        m = (0, X.getPercentValue)(e.innerRadius, o, 0);
                      return {
                        cx: c,
                        cy: d,
                        innerRadius: m,
                        outerRadius:
                          ((a = e.outerRadius),
                          "function" == typeof a
                            ? (0, X.getPercentValue)(a(r), o, 0.8 * o)
                            : (0, X.getPercentValue)(a, o, 0.8 * o)),
                        maxRadius: e.maxRadius || Math.sqrt(i * i + l * l) / 2,
                      };
                    })(s, l, e),
                    y = ((0, X.isNumber)(n) ? n : 0) / j,
                    N = eb(eb({}, e), i && i[t] && i[t].props),
                    w =
                      (r = t ? a.endAngle + (0, X.mathSign)(p) * g * (0 !== n) : c) +
                      (0, X.mathSign)(p) * ((0 !== n ? x : 0) + y * b),
                    S = (r + w) / 2,
                    k = (f.innerRadius + f.outerRadius) / 2,
                    C = [
                      { name: d, value: n, payload: N, dataKey: m, type: h, graphicalItemId: s.id },
                    ],
                    A = (0, Q.polarToCartesian)(f.cx, f.cy, k, S);
                  return (a = eb(
                    eb(
                      eb(
                        eb({}, s.presentationProps),
                        {},
                        {
                          percent: y,
                          cornerRadius: "string" == typeof o ? parseFloat(o) : o,
                          name: d,
                          tooltipPayload: C,
                          midAngle: S,
                          middleRadius: k,
                          tooltipPosition: A,
                        },
                        N
                      ),
                      f
                    ),
                    {},
                    {
                      value: n,
                      dataKey: m,
                      startAngle: r,
                      endAngle: w,
                      payload: N,
                      paddingAngle: (0, X.mathSign)(p) * g,
                    }
                  ));
                })),
              r
            );
          })({ offset: a, pieSettings: t, displayedData: e, cells: r });
      }),
      F = e.i(81601),
      W = e.i(85322),
      $ = e.i(24417),
      q = e.i(47806),
      Z = e.i(6351),
      Q = e.i(2161),
      X = e.i(28463),
      Y = e.i(41934),
      J = e.i(49352),
      ee = e.i(68732),
      et = e.i(28024),
      er = e.i(79809),
      ea = e.i(93168),
      es = e.i(41554),
      en = e.i(77667),
      ei = e.i(87459),
      el = e.i(31930),
      eo = e.i(51648),
      ec = e.i(30254),
      ed = e.i(76304),
      em = e.i(16145),
      eu = e.i(47612),
      eh = e.i(51381),
      ex = e.i(75755),
      ep = ["key"],
      ef = ["onMouseEnter", "onClick", "onMouseLeave"],
      eg = ["id"],
      ev = ["id"];
    function ey(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a));
      }
      return r;
    }
    function eb(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ey(Object(r), !0).forEach(function (t) {
              var a, s, n;
              ((a = e),
                (s = t),
                (n = r[t]),
                (s = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var a = r.call(e, t || "default");
                      if ("object" != typeof a) return a;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(s)) in a
                  ? Object.defineProperty(a, s, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[s] = n));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ey(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function ej() {
      return (ej = Object.assign.bind()).apply(null, arguments);
    }
    function eN(e, t) {
      if (null == e) return {};
      var r,
        a,
        s = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var a in e)
            if ({}.hasOwnProperty.call(e, a)) {
              if (-1 !== t.indexOf(a)) continue;
              r[a] = e[a];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++)
          ((r = n[a]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
      }
      return s;
    }
    function ew(e) {
      var t = (0, a.useMemo)(() => (0, Z.findAllByType)(e.children, d), [e.children]),
        r = (0, F.useAppSelector)((r) => G(r, e.id, t));
      return null == r ? null : a.createElement(ea.SetPolarLegendPayload, { legendPayload: r });
    }
    var eS = a.memo((e) => {
      var {
          dataKey: t,
          nameKey: r,
          sectors: s,
          stroke: n,
          strokeWidth: i,
          fill: l,
          name: o,
          hide: c,
          tooltipType: d,
          id: m,
        } = e,
        u = {
          dataDefinedOnItem: s.map((e) => e.tooltipPayload),
          getPosition: (e) => {
            var t;
            return null == (t = s[Number(e)]) ? void 0 : t.tooltipPosition;
          },
          settings: {
            stroke: n,
            strokeWidth: i,
            fill: l,
            dataKey: t,
            nameKey: r,
            name: (0, v.getTooltipNameProp)(o, t),
            hide: c,
            type: d,
            color: l,
            unit: "",
            graphicalItemId: m,
          },
        };
      return a.createElement(et.SetTooltipEntrySettings, { tooltipEntrySettings: u });
    });
    function ek(e) {
      var { sectors: t, props: r, showLabels: s } = e,
        { label: n, labelLine: i, dataKey: l } = r;
      if (!s || !n || !t) return null;
      var o = (0, ec.svgPropertiesNoEvents)(r),
        c = (0, ec.svgPropertiesNoEventsFromUnknown)(n),
        d = (0, ec.svgPropertiesNoEventsFromUnknown)(i),
        m =
          ("object" == typeof n &&
            "offsetRadius" in n &&
            "number" == typeof n.offsetRadius &&
            n.offsetRadius) ||
          20,
        u = t.map((e, t) => {
          var r,
            s,
            u = (e.startAngle + e.endAngle) / 2,
            h = (0, Q.polarToCartesian)(e.cx, e.cy, e.outerRadius + m, u),
            p = eb(
              eb(eb(eb({}, o), e), {}, { stroke: "none" }, c),
              {},
              { index: t, textAnchor: (r = h.x) > (s = e.cx) ? "start" : r < s ? "end" : "middle" },
              h
            ),
            f = eb(
              eb(eb(eb({}, o), e), {}, { fill: "none", stroke: e.fill }, d),
              {},
              {
                index: t,
                points: [(0, Q.polarToCartesian)(e.cx, e.cy, e.outerRadius, u), h],
                key: "line",
              }
            );
          return a.createElement(
            eu.ZIndexLayer,
            {
              zIndex: eh.DefaultZIndexes.label,
              key: "label-"
                .concat(e.startAngle, "-")
                .concat(e.endAngle, "-")
                .concat(e.midAngle, "-")
                .concat(t),
            },
            a.createElement(
              W.Layer,
              null,
              i &&
                ((e, t) => {
                  if (a.isValidElement(e)) return a.cloneElement(e, t);
                  if ("function" == typeof e) return e(t);
                  var r = (0, x.clsx)(
                      "recharts-pie-label-line",
                      "boolean" != typeof e ? e.className : ""
                    ),
                    { key: s } = t,
                    n = eN(t, ep);
                  return a.createElement($.Curve, ej({}, n, { type: "linear", className: r }));
                })(i, f),
              ((e, t, r) => {
                if (a.isValidElement(e)) return a.cloneElement(e, t);
                var s = r;
                if ("function" == typeof e && ((s = e(t)), a.isValidElement(s))) return s;
                var n = (0, x.clsx)("recharts-pie-label-text", (0, ex.getClassNameFromUnknown)(e));
                return a.createElement(
                  q.Text,
                  ej({}, t, { alignmentBaseline: "middle", className: n }),
                  s
                );
              })(n, p, (0, v.getValueByDataKey)(e, l))
            )
          );
        });
      return a.createElement(W.Layer, { className: "recharts-pie-labels" }, u);
    }
    function eC(e) {
      var { sectors: t, props: r, showLabels: s } = e,
        { label: n } = r;
      return "object" == typeof n && null != n && "position" in n
        ? a.createElement(em.LabelListFromLabelProp, { label: n })
        : a.createElement(ek, { sectors: t, props: r, showLabels: s });
    }
    function eA(e) {
      var t,
        r,
        s,
        n,
        i,
        { sectors: l, activeShape: o, inactiveShape: c, allOtherPieProps: d, shape: m, id: u } = e,
        h = (0, F.useAppSelector)(er.selectActiveTooltipIndex),
        x = (0, F.useAppSelector)(er.selectActiveTooltipDataKey),
        p = (0, F.useAppSelector)(er.selectActiveTooltipGraphicalItemId),
        { onMouseEnter: f, onClick: g, onMouseLeave: v } = d,
        y = eN(d, ef),
        b =
          ((t = d.dataKey),
          (r = (0, F.useAppDispatch)()),
          (e, a) => (s) => {
            (null == f || f(e, a, s),
              r(
                (0, ee.setActiveMouseOverItemIndex)({
                  activeIndex: String(a),
                  activeDataKey: t,
                  activeCoordinate: e.tooltipPosition,
                  activeGraphicalItemId: u,
                })
              ));
          }),
        j =
          ((s = (0, F.useAppDispatch)()),
          (e, t) => (r) => {
            (null == v || v(e, t, r), s((0, ee.mouseLeaveItem)()));
          }),
        N =
          ((n = d.dataKey),
          (i = (0, F.useAppDispatch)()),
          (e, t) => (r) => {
            (null == g || g(e, t, r),
              i(
                (0, ee.setActiveClickItemIndex)({
                  activeIndex: String(t),
                  activeDataKey: n,
                  activeCoordinate: e.tooltipPosition,
                  activeGraphicalItemId: u,
                })
              ));
          });
      return null == l || 0 === l.length
        ? null
        : a.createElement(
            a.Fragment,
            null,
            l.map((e, t) => {
              if (
                (null == e ? void 0 : e.startAngle) === 0 &&
                (null == e ? void 0 : e.endAngle) === 0 &&
                1 !== l.length
              )
                return null;
              var r = null == p || p === u,
                s = String(t) === h && (null == x || d.dataKey === x) && r,
                n = o && s ? o : h ? c : null,
                i = eb(
                  eb({}, e),
                  {},
                  {
                    stroke: e.stroke,
                    tabIndex: -1,
                    [es.DATA_ITEM_INDEX_ATTRIBUTE_NAME]: t,
                    [es.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: u,
                  }
                );
              return a.createElement(
                W.Layer,
                ej(
                  {
                    key: "sector-"
                      .concat(null == e ? void 0 : e.startAngle, "-")
                      .concat(null == e ? void 0 : e.endAngle, "-")
                      .concat(e.midAngle, "-")
                      .concat(t),
                    tabIndex: -1,
                    className: "recharts-pie-sector",
                  },
                  (0, Y.adaptEventsOfChild)(y, e, t),
                  { onMouseEnter: b(e, t), onMouseLeave: j(e, t), onClick: N(e, t) }
                ),
                a.createElement(
                  J.Shape,
                  ej({ option: null != m ? m : n, index: t, shapeType: "sector", isActive: s }, i)
                )
              );
            })
          );
    }
    function eP(e) {
      var { showLabels: t, sectors: r, children: s } = e,
        n = (0, a.useMemo)(
          () =>
            t && r
              ? r.map((e) => ({
                  value: e.value,
                  payload: e.payload,
                  clockWise: !1,
                  parentViewBox: void 0,
                  viewBox: {
                    cx: e.cx,
                    cy: e.cy,
                    innerRadius: e.innerRadius,
                    outerRadius: e.outerRadius,
                    startAngle: e.startAngle,
                    endAngle: e.endAngle,
                    clockWise: !1,
                  },
                  fill: e.fill,
                }))
              : [],
          [r, t]
        );
      return a.createElement(em.PolarLabelListContextProvider, { value: t ? n : void 0 }, s);
    }
    function e_(e) {
      var { props: t, previousSectorsRef: r, id: s } = e,
        {
          sectors: n,
          isAnimationActive: i,
          animationBegin: l,
          animationDuration: o,
          animationEasing: c,
          activeShape: d,
          inactiveShape: m,
          onAnimationStart: u,
          onAnimationEnd: x,
        } = t,
        p = (0, en.useAnimationId)(t, "recharts-pie-"),
        f = r.current,
        [g, v] = (0, a.useState)(!1),
        y = (0, a.useCallback)(() => {
          ("function" == typeof x && x(), v(!1));
        }, [x]),
        b = (0, a.useCallback)(() => {
          ("function" == typeof u && u(), v(!0));
        }, [u]);
      return a.createElement(
        eP,
        { showLabels: !g, sectors: n },
        a.createElement(
          ed.JavascriptAnimate,
          {
            animationId: p,
            begin: l,
            duration: o,
            isActive: i,
            easing: c,
            onAnimationStart: b,
            onAnimationEnd: y,
            key: p,
          },
          (e) => {
            var i,
              l = [],
              o = n && n[0],
              c = null != (i = null == o ? void 0 : o.startAngle) ? i : 0;
            return (
              null == n ||
                n.forEach((t, r) => {
                  var a = f && f[r],
                    s = r > 0 ? (0, h.default)(t, "paddingAngle", 0) : 0;
                  if (a) {
                    var n = (0, X.interpolate)(
                        a.endAngle - a.startAngle,
                        t.endAngle - t.startAngle,
                        e
                      ),
                      i = eb(eb({}, t), {}, { startAngle: c + s, endAngle: c + n + s });
                    (l.push(i), (c = i.endAngle));
                  } else {
                    var { endAngle: o, startAngle: d } = t,
                      m = (0, X.interpolate)(0, o - d, e),
                      u = eb(eb({}, t), {}, { startAngle: c + s, endAngle: c + m + s });
                    (l.push(u), (c = u.endAngle));
                  }
                }),
              (r.current = l),
              a.createElement(
                W.Layer,
                null,
                a.createElement(eA, {
                  sectors: l,
                  activeShape: d,
                  inactiveShape: m,
                  allOtherPieProps: t,
                  shape: t.shape,
                  id: s,
                })
              )
            );
          }
        ),
        a.createElement(eC, { showLabels: !g, sectors: n, props: t }),
        t.children
      );
    }
    var eO = {
      animationBegin: 400,
      animationDuration: 1500,
      animationEasing: "ease",
      cx: "50%",
      cy: "50%",
      dataKey: "value",
      endAngle: 360,
      fill: "#808080",
      hide: !1,
      innerRadius: 0,
      isAnimationActive: "auto",
      label: !1,
      labelLine: !0,
      legendType: "rect",
      minAngle: 0,
      nameKey: "name",
      outerRadius: "80%",
      paddingAngle: 0,
      rootTabIndex: 0,
      startAngle: 0,
      stroke: "#fff",
      zIndex: eh.DefaultZIndexes.area,
    };
    function eT(e) {
      var { id: t } = e,
        r = eN(e, eg),
        { hide: s, className: n, rootTabIndex: i } = e,
        l = (0, a.useMemo)(() => (0, Z.findAllByType)(e.children, d), [e.children]),
        o = (0, F.useAppSelector)((e) => z(e, t, l)),
        c = (0, a.useRef)(null),
        m = (0, x.clsx)("recharts-pie", n);
      return s || null == o
        ? ((c.current = null), a.createElement(W.Layer, { tabIndex: i, className: m }))
        : a.createElement(
            eu.ZIndexLayer,
            { zIndex: e.zIndex },
            a.createElement(eS, {
              dataKey: e.dataKey,
              nameKey: e.nameKey,
              sectors: o,
              stroke: e.stroke,
              strokeWidth: e.strokeWidth,
              fill: e.fill,
              name: e.name,
              hide: e.hide,
              tooltipType: e.tooltipType,
              id: t,
            }),
            a.createElement(
              W.Layer,
              { tabIndex: i, className: m },
              a.createElement(e_, {
                props: eb(eb({}, r), {}, { sectors: o }),
                previousSectorsRef: c,
                id: t,
              })
            )
          );
    }
    function eE(e) {
      var t = (0, ei.resolveDefaultProps)(e, eO),
        { id: r } = t,
        s = eN(t, ev),
        n = (0, ec.svgPropertiesNoEvents)(s);
      return a.createElement(el.RegisterGraphicalItemId, { id: r, type: "pie" }, (e) =>
        a.createElement(
          a.Fragment,
          null,
          a.createElement(eo.SetPolarGraphicalItem, {
            type: "pie",
            id: e,
            data: s.data,
            dataKey: s.dataKey,
            hide: s.hide,
            angleAxisId: 0,
            radiusAxisId: 0,
            name: s.name,
            nameKey: s.nameKey,
            tooltipType: s.tooltipType,
            legendType: s.legendType,
            fill: s.fill,
            cx: s.cx,
            cy: s.cy,
            startAngle: s.startAngle,
            endAngle: s.endAngle,
            paddingAngle: s.paddingAngle,
            minAngle: s.minAngle,
            innerRadius: s.innerRadius,
            outerRadius: s.outerRadius,
            cornerRadius: s.cornerRadius,
            presentationProps: n,
            maxRadius: t.maxRadius,
          }),
          a.createElement(ew, ej({}, s, { id: e })),
          a.createElement(eT, ej({}, s, { id: e }))
        )
      );
    }
    eE.displayName = "Pie";
    var eR = e.i(42365),
      eI = e.i(45389),
      eD = e.i(83171),
      eM = e.i(12596),
      eL = e.i(91670),
      eB = e.i(83742);
    function eK(e) {
      var t = (0, F.useAppDispatch)();
      return (
        (0, a.useEffect)(() => {
          t((0, eB.updatePolarOptions)(e));
        }, [t, e]),
        null
      );
    }
    var eV = e.i(76082),
      eH = ["layout"];
    function eU() {
      return (eU = Object.assign.bind()).apply(null, arguments);
    }
    var eG = {
        accessibilityLayer: !0,
        stackOffset: "none",
        barCategoryGap: "10%",
        barGap: 4,
        margin: { top: 5, right: 5, bottom: 5, left: 5 },
        reverseStackOrder: !1,
        syncMethod: "index",
        layout: "radial",
        responsive: !1,
        cx: "50%",
        cy: "50%",
        innerRadius: 0,
        outerRadius: "80%",
      },
      ez = (0, a.forwardRef)(function (e, t) {
        var r,
          s = (0, ei.resolveDefaultProps)(e.categoricalChartProps, eG),
          { layout: n } = s,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              s = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var a in e)
                  if ({}.hasOwnProperty.call(e, a)) {
                    if (-1 !== t.indexOf(a)) continue;
                    r[a] = e[a];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              for (a = 0; a < n.length; a++)
                ((r = n[a]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
            }
            return s;
          })(s, eH),
          {
            chartName: l,
            defaultTooltipEventType: o,
            validateTooltipEventTypes: c,
            tooltipPayloadSearcher: d,
          } = e;
        return a.createElement(
          eI.RechartsStoreProvider,
          {
            preloadedState: {
              options: {
                chartName: l,
                defaultTooltipEventType: o,
                validateTooltipEventTypes: c,
                tooltipPayloadSearcher: d,
                eventEmitter: void 0,
              },
            },
            reduxStoreName: null != (r = s.id) ? r : l,
          },
          a.createElement(eD.ChartDataContextProvider, { chartData: s.data }),
          a.createElement(eM.ReportMainChartProps, { layout: n, margin: s.margin }),
          a.createElement(eL.ReportChartProps, {
            baseValue: void 0,
            accessibilityLayer: s.accessibilityLayer,
            barCategoryGap: s.barCategoryGap,
            maxBarSize: s.maxBarSize,
            stackOffset: s.stackOffset,
            barGap: s.barGap,
            barSize: s.barSize,
            syncId: s.syncId,
            syncMethod: s.syncMethod,
            className: s.className,
            reverseStackOrder: s.reverseStackOrder,
          }),
          a.createElement(eK, {
            cx: s.cx,
            cy: s.cy,
            startAngle: s.startAngle,
            endAngle: s.endAngle,
            innerRadius: s.innerRadius,
            outerRadius: s.outerRadius,
          }),
          a.createElement(eV.CategoricalChart, eU({}, i, { ref: t }))
        );
      });
    function eF(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a));
      }
      return r;
    }
    function eW(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? eF(Object(r), !0).forEach(function (t) {
              var a, s, n;
              ((a = e),
                (s = t),
                (n = r[t]),
                (s = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var a = r.call(e, t || "default");
                      if ("object" != typeof a) return a;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(s)) in a
                  ? Object.defineProperty(a, s, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[s] = n));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eF(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var e$ = ["item"],
      eq = eW(eW({}, eG), {}, { layout: "centric", startAngle: 0, endAngle: 360 }),
      eZ = (0, a.forwardRef)((e, t) => {
        var r = (0, ei.resolveDefaultProps)(e, eq);
        return a.createElement(ez, {
          chartName: "PieChart",
          defaultTooltipEventType: "item",
          validateTooltipEventTypes: e$,
          tooltipPayloadSearcher: eR.arrayTooltipSearcher,
          categoricalChartProps: r,
          ref: t,
        });
      }),
      eQ = e.i(55895),
      eX = e.i(66066),
      eY = e.i(90390),
      eJ = e.i(26368);
    let e0 = [7, 30, 90];
    function e1() {
      let e,
        d,
        h,
        x,
        p,
        f,
        g,
        v,
        y,
        b,
        j,
        N,
        w,
        S,
        k,
        C,
        A,
        P,
        _,
        O,
        T,
        E,
        R,
        I,
        D,
        M,
        L,
        B,
        K,
        V,
        H,
        U,
        G,
        z,
        F,
        W,
        $,
        q = (0, r.c)(262),
        [Z, Q] = (0, a.useState)(30);
      q[0] !== Z
        ? ((e = {
            queryKey: ["dashboard", Z],
            queryFn: async () => {
              let e = await (0, n.apiClient)(`/api/dashboard?range=${Z}`);
              if (e.error || !e.data) throw Error(e.error?.message ?? "Failed to fetch dashboard");
              return e.data;
            },
          }),
          (q[0] = Z),
          (q[1] = e))
        : (e = q[1]);
      let { data: X, isLoading: Y, isError: J, refetch: ee } = (0, s.useQuery)(e);
      if (Y) {
        let e;
        return (
          q[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsxs)("div", {
                className: "grid gap-6",
                children: [
                  (0, t.jsx)("div", {
                    className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
                    children: Array.from({ length: 4 }).map(tc),
                  }),
                  (0, t.jsx)(i.Card, {
                    className: "h-80 animate-pulse border-white/10 bg-white/5",
                  }),
                ],
              })),
              (q[2] = e))
            : (e = q[2]),
          e
        );
      }
      if (J || !X) {
        let e, r, a;
        return (
          q[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("p", {
                className: "text-lg font-semibold",
                children: "Failed to load dashboard",
              })),
              (r = (0, t.jsx)("p", { className: "text-white/60", children: "Please try again." })),
              (q[3] = e),
              (q[4] = r))
            : ((e = q[3]), (r = q[4])),
          q[5] !== ee
            ? ((a = (0, t.jsxs)("div", {
                className: "rounded-2xl border border-white/10 bg-white/5 p-8 text-center",
                children: [
                  e,
                  r,
                  (0, t.jsx)(l.Button, {
                    className: "mt-4",
                    onClick: () => ee(),
                    children: "Retry",
                  }),
                ],
              })),
              (q[5] = ee),
              (q[6] = a))
            : (a = q[6]),
          a
        );
      }
      let et = X.taskStatus.reduce(to, 0);
      q[7] !== X.taskStatus
        ? ((d = X.taskStatus.find(tl)?.value ?? 0), (q[7] = X.taskStatus), (q[8] = d))
        : (d = q[8]);
      let er = d;
      q[9] !== X.taskStatus
        ? ((h = X.taskStatus.find(ti)?.value ?? 0), (q[9] = X.taskStatus), (q[10] = h))
        : (h = q[10]);
      let ea = h;
      q[11] !== X.taskStatus
        ? ((x = X.taskStatus.find(tn)?.value ?? 0), (q[11] = X.taskStatus), (q[12] = x))
        : (x = q[12]);
      let es = x;
      q[13] !== er || q[14] !== et
        ? ((p = 0 === et ? 0 : Math.round((er / et) * 100)),
          (q[13] = er),
          (q[14] = et),
          (q[15] = p))
        : (p = q[15]);
      let en = p;
      q[16] !== ea || q[17] !== es || q[18] !== et
        ? ((f = 0 === et ? 0 : Math.round(((es + ea) / et) * 100)),
          (q[16] = ea),
          (q[17] = es),
          (q[18] = et),
          (q[19] = f))
        : (f = q[19]);
      let ei = f;
      if (
        q[20] !== ei ||
        q[21] !== en ||
        q[22] !== X.activity ||
        q[23] !== X.kpis.activeProjects ||
        q[24] !== X.kpis.activeUsers ||
        q[25] !== X.kpis.monthlyRevenue ||
        q[26] !== X.kpis.openTasks ||
        q[27] !== X.revenue ||
        q[28] !== X.taskStatus ||
        q[29] !== er ||
        q[30] !== ea ||
        q[31] !== Z ||
        q[32] !== ee ||
        q[33] !== es
      ) {
        let e,
          r,
          a,
          s,
          n,
          o,
          d,
          h,
          x,
          p,
          f,
          B,
          K,
          V,
          H,
          U,
          G,
          z,
          F,
          W,
          $,
          Y,
          J,
          et,
          el,
          eo,
          ec,
          ed,
          em,
          eu,
          eh,
          ex,
          ep,
          ef,
          eg,
          ev,
          ey,
          eb,
          ej,
          eN,
          ew,
          eS,
          ek,
          eC,
          eA,
          eP,
          e_,
          eO,
          eT,
          eR,
          eI,
          eD,
          eM,
          eL,
          eB,
          eK,
          eV,
          eH,
          eU,
          eG,
          ez,
          eF,
          eW,
          e$,
          eq,
          e1,
          e2,
          tn,
          ti,
          tl,
          to,
          tc,
          td,
          tm,
          tu,
          th,
          tx,
          tp,
          tf,
          tg,
          tv,
          ty,
          tb,
          tj,
          tN,
          tw,
          tS,
          tk = X.revenue.reduce(ts, 0),
          tC = 0 === X.revenue.length ? 0 : Math.round(tk / X.revenue.length),
          tA = X.revenue.reduce(ta, X.revenue[0] ?? { day: "-", value: 0 });
        q[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = [
              {
                title: "Invoice follow-ups pending",
                description: "5 accounts overdue in the last 7 days",
                tone: "warning",
              },
              {
                title: "SLA breach risk",
                description: "2 projects nearing delivery thresholds",
                tone: "critical",
              },
              {
                title: "Ops review required",
                description: "3 tasks blocked beyond 48 hours",
                tone: "info",
              },
            ]),
            (q[55] = e))
          : (e = q[55]);
        let tP = e,
          t_ = [
            { label: "Qualified", value: Math.round(0.3 * tk), change: "+6%" },
            { label: "Negotiation", value: Math.round(0.2 * tk), change: "+3%" },
            { label: "Legal", value: Math.round(0.12 * tk), change: "-1%" },
            { label: "Closed", value: Math.round(0.38 * tk), change: "+9%" },
          ];
        q[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = [
              { label: "Uptime", value: 99.92, target: 99.9 },
              { label: "Response time", value: 92, target: 95 },
              { label: "On-time delivery", value: 88, target: 90 },
            ]),
            (q[56] = r))
          : (r = q[56]);
        let tO = r;
        q[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = [
              { name: "Product Ops", score: 86, trend: "+4%" },
              { name: "Client Success", score: 92, trend: "+2%" },
              { name: "Engineering", score: 81, trend: "-1%" },
              { name: "Finance", score: 89, trend: "+3%" },
            ]),
            (q[57] = a))
          : (a = q[57]);
        let tT = a;
        q[58] !== X.kpis.activeProjects
          ? ((s = Math.round(0.6 * X.kpis.activeProjects)),
            (q[58] = X.kpis.activeProjects),
            (q[59] = s))
          : (s = q[59]);
        let tE = Math.max(12, s);
        (q[60] !== tE
          ? ((n = { label: "Healthy", value: tE }), (q[60] = tE), (q[61] = n))
          : (n = q[61]),
          q[62] !== X.kpis.activeProjects
            ? ((o = Math.round(0.25 * X.kpis.activeProjects)),
              (q[62] = X.kpis.activeProjects),
              (q[63] = o))
            : (o = q[63]));
        let tR = Math.max(4, o);
        (q[64] !== tR
          ? ((d = { label: "Monitor", value: tR }), (q[64] = tR), (q[65] = d))
          : (d = q[65]),
          q[66] !== X.kpis.activeProjects
            ? ((h = Math.round(0.15 * X.kpis.activeProjects)),
              (q[66] = X.kpis.activeProjects),
              (q[67] = h))
            : (h = q[67]));
        let tI = Math.max(2, h);
        (q[68] !== tI
          ? ((x = { label: "At risk", value: tI }), (q[68] = tI), (q[69] = x))
          : (x = q[69]),
          q[70] !== n || q[71] !== d || q[72] !== x
            ? ((p = [n, d, x]), (q[70] = n), (q[71] = d), (q[72] = x), (q[73] = p))
            : (p = q[73]));
        let tD = p,
          tM = X.activity.slice(0, 5).map(tr);
        ((C = "space-y-8"),
          q[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-2xl font-bold text-foreground",
                    children: "Executive overview",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Real-time visibility across your SaaS operations.",
                  }),
                ],
              })),
              (q[74] = f))
            : (f = q[74]),
          q[75] !== Z
            ? ((B = e0.map((e) =>
                (0, t.jsxs)(
                  l.Button,
                  {
                    variant: Z === e ? "default" : "outline",
                    size: "sm",
                    className: "rounded-xl",
                    onClick: () => Q(e),
                    children: [e, " days"],
                  },
                  e
                )
              )),
              (q[75] = Z),
              (q[76] = B))
            : (B = q[76]),
          q[77] !== ee
            ? ((K = (0, t.jsx)(l.Button, {
                variant: "outline",
                size: "sm",
                className: "rounded-xl",
                onClick: () => ee(),
                children: "Refresh",
              })),
              (q[77] = ee),
              (q[78] = K))
            : (K = q[78]),
          q[79] !== B || q[80] !== K
            ? ((A = (0, t.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [
                  f,
                  (0, t.jsxs)("div", { className: "flex items-center gap-2", children: [B, K] }),
                ],
              })),
              (q[79] = B),
              (q[80] = K),
              (q[81] = A))
            : (A = q[81]),
          q[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = (0, t.jsx)("div", {
                className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20",
                children: (0, t.jsx)("svg", {
                  className: "h-5 w-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                  }),
                }),
              })),
              (H = (0, t.jsx)("p", {
                className: "text-xs font-medium text-white/80",
                children: "Active users",
              })),
              (q[82] = V),
              (q[83] = H))
            : ((V = q[82]), (H = q[83])),
          q[84] !== X.kpis.activeUsers
            ? ((U = (0, t.jsx)("p", {
                className: "mt-1 text-2xl font-bold text-white",
                children: X.kpis.activeUsers,
              })),
              (q[84] = X.kpis.activeUsers),
              (q[85] = U))
            : (U = q[85]),
          q[86] !== X.kpis.activeUsers
            ? ((G = Math.round(0.03 * X.kpis.activeUsers)),
              (q[86] = X.kpis.activeUsers),
              (q[87] = G))
            : (G = q[87]));
        let tL = Math.max(2, G);
        (q[88] !== tL
          ? ((z = (0, t.jsxs)("p", {
              className: "mt-2 text-xs text-white/70",
              children: ["+", tL, " this week"],
            })),
            (q[88] = tL),
            (q[89] = z))
          : (z = q[89]),
          q[90] !== U || q[91] !== z
            ? ((F = (0, t.jsx)(i.Card, {
                className:
                  "group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-indigo-500 to-indigo-600 p-1 shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl hover:shadow-indigo-500/30",
                children: (0, t.jsxs)("div", {
                  className: "relative rounded-xl bg-white/10 p-4 backdrop-blur-sm",
                  children: [V, H, U, z],
                }),
              })),
              (q[90] = U),
              (q[91] = z),
              (q[92] = F))
            : (F = q[92]),
          q[93] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = (0, t.jsx)("div", {
                className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20",
                children: (0, t.jsx)("svg", {
                  className: "h-5 w-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  }),
                }),
              })),
              ($ = (0, t.jsx)("p", {
                className: "text-xs font-medium text-white/80",
                children: "Active projects",
              })),
              (q[93] = W),
              (q[94] = $))
            : ((W = q[93]), ($ = q[94])),
          q[95] !== X.kpis.activeProjects
            ? ((Y = (0, t.jsx)("p", {
                className: "mt-1 text-2xl font-bold text-white",
                children: X.kpis.activeProjects,
              })),
              (q[95] = X.kpis.activeProjects),
              (q[96] = Y))
            : (Y = q[96]),
          q[97] !== X.kpis.activeProjects
            ? ((J = Math.round(0.12 * X.kpis.activeProjects)),
              (q[97] = X.kpis.activeProjects),
              (q[98] = J))
            : (J = q[98]));
        let tB = Math.max(1, J);
        (q[99] !== tB
          ? ((et = (0, t.jsxs)("p", {
              className: "mt-2 text-xs text-white/70",
              children: [tB, " at risk"],
            })),
            (q[99] = tB),
            (q[100] = et))
          : (et = q[100]),
          q[101] !== Y || q[102] !== et
            ? ((el = (0, t.jsx)(i.Card, {
                className:
                  "group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-sky-500 to-cyan-500 p-1 shadow-lg shadow-sky-500/20 transition-all hover:shadow-xl hover:shadow-sky-500/30",
                children: (0, t.jsxs)("div", {
                  className: "relative rounded-xl bg-white/10 p-4 backdrop-blur-sm",
                  children: [W, $, Y, et],
                }),
              })),
              (q[101] = Y),
              (q[102] = et),
              (q[103] = el))
            : (el = q[103]),
          q[104] === Symbol.for("react.memo_cache_sentinel")
            ? ((eo = (0, t.jsx)("div", {
                className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20",
                children: (0, t.jsx)("svg", {
                  className: "h-5 w-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  }),
                }),
              })),
              (ec = (0, t.jsx)("p", {
                className: "text-xs font-medium text-white/80",
                children: "Open tasks",
              })),
              (q[104] = eo),
              (q[105] = ec))
            : ((eo = q[104]), (ec = q[105])),
          q[106] !== X.kpis.openTasks
            ? ((ed = (0, t.jsx)("p", {
                className: "mt-1 text-2xl font-bold text-white",
                children: X.kpis.openTasks,
              })),
              (q[106] = X.kpis.openTasks),
              (q[107] = ed))
            : (ed = q[107]),
          q[108] !== en
            ? ((em = (0, t.jsxs)("p", {
                className: "mt-2 text-xs text-white/70",
                children: [en, "% completion rate"],
              })),
              (q[108] = en),
              (q[109] = em))
            : (em = q[109]),
          q[110] !== ed || q[111] !== em
            ? ((eu = (0, t.jsx)(i.Card, {
                className:
                  "group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-amber-500 to-orange-500 p-1 shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30",
                children: (0, t.jsxs)("div", {
                  className: "relative rounded-xl bg-white/10 p-4 backdrop-blur-sm",
                  children: [eo, ec, ed, em],
                }),
              })),
              (q[110] = ed),
              (q[111] = em),
              (q[112] = eu))
            : (eu = q[112]),
          q[113] === Symbol.for("react.memo_cache_sentinel")
            ? ((eh = (0, t.jsx)("div", {
                className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20",
                children: (0, t.jsx)("svg", {
                  className: "h-5 w-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  }),
                }),
              })),
              (ex = (0, t.jsx)("p", {
                className: "text-xs font-medium text-white/80",
                children: "Monthly revenue",
              })),
              (q[113] = eh),
              (q[114] = ex))
            : ((eh = q[113]), (ex = q[114])),
          q[115] !== X.kpis.monthlyRevenue
            ? ((ep = X.kpis.monthlyRevenue.toLocaleString()),
              (q[115] = X.kpis.monthlyRevenue),
              (q[116] = ep))
            : (ep = q[116]),
          q[117] !== ep
            ? ((ef = (0, t.jsxs)("p", {
                className: "mt-1 text-2xl font-bold text-white",
                children: ["$", ep],
              })),
              (q[117] = ep),
              (q[118] = ef))
            : (ef = q[118]));
        let tK = (0, t.jsxs)("p", {
          className: "mt-2 text-xs text-white/70",
          children: ["$", tC.toLocaleString(), " avg daily"],
        });
        (q[119] !== ef || q[120] !== tK
          ? ((eg = (0, t.jsx)(i.Card, {
              className:
                "group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-rose-500 to-pink-500 p-1 shadow-lg shadow-rose-500/20 transition-all hover:shadow-xl hover:shadow-rose-500/30",
              children: (0, t.jsxs)("div", {
                className: "relative rounded-xl bg-white/10 p-4 backdrop-blur-sm",
                children: [eh, ex, ef, tK],
              }),
            })),
            (q[119] = ef),
            (q[120] = tK),
            (q[121] = eg))
          : (eg = q[121]),
          q[122] !== F || q[123] !== el || q[124] !== eu || q[125] !== eg
            ? ((P = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
                children: [F, el, eu, eg],
              })),
              (q[122] = F),
              (q[123] = el),
              (q[124] = eu),
              (q[125] = eg),
              (q[126] = P))
            : (P = q[126]),
          q[127] === Symbol.for("react.memo_cache_sentinel")
            ? ((ev = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Daily focus",
                }),
              })),
              (q[127] = ev))
            : (ev = q[127]),
          q[128] === Symbol.for("react.memo_cache_sentinel")
            ? ((ey = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  ev,
                  (0, t.jsxs)(i.CardContent, {
                    className: "space-y-3",
                    children: [
                      ["Audit open items", "Review new access", "Sync KPI owners"].map(tt),
                      (0, t.jsx)("div", { className: "gradient-divider" }),
                      (0, t.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Next sync at 15:00 (local).",
                      }),
                    ],
                  }),
                ],
              })),
              (q[128] = ey))
            : (ey = q[128]),
          q[129] === Symbol.for("react.memo_cache_sentinel")
            ? ((eb = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Signal overview",
                }),
              })),
              (q[129] = eb))
            : (eb = q[129]),
          q[130] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 xl:grid-cols-3",
                children: [
                  ey,
                  (0, t.jsxs)(i.Card, {
                    className: "material-surface xl:col-span-2",
                    children: [
                      eb,
                      (0, t.jsx)(i.CardContent, {
                        className: "grid gap-3 md:grid-cols-3",
                        children: [
                          { label: "Spend anomaly", tone: "chip-warn" },
                          { label: "Policy drift", tone: "chip-danger" },
                          { label: "Coverage boost", tone: "chip-info" },
                        ].map(te),
                      }),
                    ],
                  }),
                ],
              })),
              (q[130] = _))
            : (_ = q[130]),
          q[131] === Symbol.for("react.memo_cache_sentinel")
            ? ((ej = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Revenue trend",
                }),
              })),
              (q[131] = ej))
            : (ej = q[131]),
          q[132] === Symbol.for("react.memo_cache_sentinel")
            ? ((eN = (0, t.jsx)(eY.XAxis, {
                dataKey: "day",
                stroke: "currentColor",
                className: "text-muted-foreground",
                tickLine: !1,
                axisLine: !1,
              })),
              (ew = (0, t.jsx)(eJ.YAxis, {
                stroke: "currentColor",
                className: "text-muted-foreground",
                tickLine: !1,
                axisLine: !1,
              })),
              (q[132] = eN),
              (q[133] = ew))
            : ((eN = q[132]), (ew = q[133])),
          q[134] === Symbol.for("react.memo_cache_sentinel")
            ? ((eS = (0, t.jsx)(eX.Tooltip, {
                cursor: { stroke: "var(--border)" },
                contentStyle: {
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  color: "var(--foreground)",
                },
                labelStyle: { color: "var(--foreground)" },
              })),
              (ek = (0, t.jsx)(m.Line, {
                type: "monotone",
                dataKey: "value",
                stroke: "var(--primary)",
                strokeWidth: 2,
              })),
              (q[134] = eS),
              (q[135] = ek))
            : ((eS = q[134]), (ek = q[135])),
          q[136] !== X.revenue
            ? ((eC = (0, t.jsxs)(i.Card, {
                className: "material-surface lg:col-span-2",
                children: [
                  ej,
                  (0, t.jsx)(i.CardContent, {
                    className: "h-72",
                    children: (0, t.jsx)(eQ.ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: (0, t.jsxs)(u.LineChart, {
                        data: X.revenue,
                        children: [eN, ew, eS, ek],
                      }),
                    }),
                  }),
                ],
              })),
              (q[136] = X.revenue),
              (q[137] = eC))
            : (eC = q[137]),
          q[138] === Symbol.for("react.memo_cache_sentinel")
            ? ((eA = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Task distribution",
                }),
              })),
              (q[138] = eA))
            : (eA = q[138]));
        let tV = X.taskStatus;
        (q[139] !== X.taskStatus
          ? ((eP = X.taskStatus.map(e9)), (q[139] = X.taskStatus), (q[140] = eP))
          : (eP = q[140]),
          q[141] !== X.taskStatus || q[142] !== eP
            ? ((e_ = (0, t.jsx)(eE, {
                data: tV,
                dataKey: "value",
                nameKey: "name",
                innerRadius: 60,
                outerRadius: 90,
                children: eP,
              })),
              (q[141] = X.taskStatus),
              (q[142] = eP),
              (q[143] = e_))
            : (e_ = q[143]),
          q[144] === Symbol.for("react.memo_cache_sentinel")
            ? ((eO = (0, t.jsx)(eX.Tooltip, {
                contentStyle: {
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  color: "var(--foreground)",
                },
                labelStyle: { color: "var(--foreground)" },
              })),
              (q[144] = eO))
            : (eO = q[144]),
          q[145] !== e_
            ? ((eT = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  eA,
                  (0, t.jsx)(i.CardContent, {
                    className: "h-72",
                    children: (0, t.jsx)(eQ.ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: (0, t.jsxs)(eZ, { children: [e_, eO] }),
                    }),
                  }),
                ],
              })),
              (q[145] = e_),
              (q[146] = eT))
            : (eT = q[146]),
          q[147] !== eC || q[148] !== eT
            ? ((O = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [eC, eT],
              })),
              (q[147] = eC),
              (q[148] = eT),
              (q[149] = O))
            : (O = q[149]),
          q[150] === Symbol.for("react.memo_cache_sentinel")
            ? ((eR = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Operational highlights",
                }),
              })),
              (q[150] = eR))
            : (eR = q[150]),
          q[151] === Symbol.for("react.memo_cache_sentinel")
            ? ((eI = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Completion rate",
              })),
              (q[151] = eI))
            : (eI = q[151]),
          q[152] !== en
            ? ((eD = (0, t.jsxs)("div", {
                children: [
                  eI,
                  (0, t.jsxs)("p", {
                    className: "text-lg font-semibold text-foreground",
                    children: [en, "%"],
                  }),
                ],
              })),
              (q[152] = en),
              (q[153] = eD))
            : (eD = q[153]),
          q[154] === Symbol.for("react.memo_cache_sentinel")
            ? ((eM = (0, t.jsx)("span", { className: "chip chip-info", children: "On track" })),
              (q[154] = eM))
            : (eM = q[154]),
          q[155] !== eD
            ? ((eL = (0, t.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [eD, eM],
              })),
              (q[155] = eD),
              (q[156] = eL))
            : (eL = q[156]),
          q[157] === Symbol.for("react.memo_cache_sentinel")
            ? ((eB = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Backlog coverage",
              })),
              (q[157] = eB))
            : (eB = q[157]));
        let tH = `${Math.min(100, ei)}%`;
        (q[158] !== tH
          ? ((eK = (0, t.jsx)("div", {
              className: "mt-2 h-2 w-full rounded-full bg-muted",
              children: (0, t.jsx)("div", {
                className: "h-2 rounded-full bg-primary",
                style: { width: tH },
              }),
            })),
            (q[158] = tH),
            (q[159] = eK))
          : (eK = q[159]),
          q[160] !== ei
            ? ((eV = (0, t.jsxs)("p", {
                className: "mt-2 text-xs text-muted-foreground",
                children: [ei, "% of tasks in progress"],
              })),
              (q[160] = ei),
              (q[161] = eV))
            : (eV = q[161]),
          q[162] !== eK || q[163] !== eV
            ? ((eH = (0, t.jsxs)("div", { children: [eB, eK, eV] })),
              (q[162] = eK),
              (q[163] = eV),
              (q[164] = eH))
            : (eH = q[164]),
          q[165] === Symbol.for("react.memo_cache_sentinel")
            ? ((eU = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Best revenue day",
              })),
              (q[165] = eU))
            : (eU = q[165]));
        let tU = (0, t.jsxs)("div", {
          children: [
            eU,
            (0, t.jsxs)("p", {
              className: "text-lg font-semibold text-foreground",
              children: [tA.day, " · $", tA.value.toLocaleString()],
            }),
          ],
        });
        (q[166] !== eL || q[167] !== eH || q[168] !== tU
          ? ((eG = (0, t.jsxs)(i.Card, {
              className: "material-surface",
              children: [
                eR,
                (0, t.jsxs)(i.CardContent, { className: "space-y-4", children: [eL, eH, tU] }),
              ],
            })),
            (q[166] = eL),
            (q[167] = eH),
            (q[168] = tU),
            (q[169] = eG))
          : (eG = q[169]),
          q[170] === Symbol.for("react.memo_cache_sentinel")
            ? ((ez = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Action center",
                }),
              })),
              (q[170] = ez))
            : (ez = q[170]),
          q[171] === Symbol.for("react.memo_cache_sentinel")
            ? ((eF = (0, t.jsx)(l.Button, {
                asChild: !0,
                className: "w-full",
                children: (0, t.jsx)(c.default, {
                  href: "/projects/new",
                  children: "Create project",
                }),
              })),
              (q[171] = eF))
            : (eF = q[171]),
          q[172] === Symbol.for("react.memo_cache_sentinel")
            ? ((eW = (0, t.jsx)(l.Button, {
                asChild: !0,
                variant: "outline",
                className: "w-full",
                children: (0, t.jsx)(c.default, { href: "/tasks", children: "Review tasks" }),
              })),
              (q[172] = eW))
            : (eW = q[172]),
          q[173] === Symbol.for("react.memo_cache_sentinel")
            ? ((e$ = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  ez,
                  (0, t.jsxs)(i.CardContent, {
                    className: "space-y-3",
                    children: [
                      eF,
                      eW,
                      (0, t.jsx)(l.Button, {
                        asChild: !0,
                        variant: "outline",
                        className: "w-full",
                        children: (0, t.jsx)(c.default, {
                          href: "/billing/invoices",
                          children: "Send invoices",
                        }),
                      }),
                    ],
                  }),
                ],
              })),
              (q[173] = e$))
            : (e$ = q[173]),
          q[174] === Symbol.for("react.memo_cache_sentinel")
            ? ((eq = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Workload snapshot",
                }),
              })),
              (q[174] = eq))
            : (eq = q[174]),
          q[175] === Symbol.for("react.memo_cache_sentinel")
            ? ((e1 = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Todo",
              })),
              (q[175] = e1))
            : (e1 = q[175]),
          q[176] !== es
            ? ((e2 = (0, t.jsxs)("div", {
                children: [
                  e1,
                  (0, t.jsx)("p", {
                    className: "text-lg font-semibold text-foreground",
                    children: es,
                  }),
                ],
              })),
              (q[176] = es),
              (q[177] = e2))
            : (e2 = q[177]),
          q[178] === Symbol.for("react.memo_cache_sentinel")
            ? ((tn = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "In progress",
              })),
              (q[178] = tn))
            : (tn = q[178]),
          q[179] !== ea
            ? ((ti = (0, t.jsxs)("div", {
                className: "text-right",
                children: [
                  tn,
                  (0, t.jsx)("p", {
                    className: "text-lg font-semibold text-foreground",
                    children: ea,
                  }),
                ],
              })),
              (q[179] = ea),
              (q[180] = ti))
            : (ti = q[180]),
          q[181] !== e2 || q[182] !== ti
            ? ((tl = (0, t.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [e2, ti],
              })),
              (q[181] = e2),
              (q[182] = ti),
              (q[183] = tl))
            : (tl = q[183]),
          q[184] === Symbol.for("react.memo_cache_sentinel")
            ? ((to = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Completed",
              })),
              (q[184] = to))
            : (to = q[184]),
          q[185] !== er
            ? ((tc = (0, t.jsxs)("div", {
                children: [
                  to,
                  (0, t.jsx)("p", {
                    className: "text-lg font-semibold text-foreground",
                    children: er,
                  }),
                ],
              })),
              (q[185] = er),
              (q[186] = tc))
            : (tc = q[186]),
          q[187] !== Z
            ? ((td = (0, t.jsxs)("div", {
                className:
                  "rounded-xl border border-border bg-muted/50 p-3 text-xs text-muted-foreground",
                children: [
                  "Team focus is stable. No critical bottlenecks detected in the last ",
                  Z,
                  " days.",
                ],
              })),
              (q[187] = Z),
              (q[188] = td))
            : (td = q[188]),
          q[189] !== tl || q[190] !== tc || q[191] !== td
            ? ((tm = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  eq,
                  (0, t.jsxs)(i.CardContent, { className: "space-y-4", children: [tl, tc, td] }),
                ],
              })),
              (q[189] = tl),
              (q[190] = tc),
              (q[191] = td),
              (q[192] = tm))
            : (tm = q[192]),
          q[193] !== tm || q[194] !== eG
            ? ((T = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [eG, e$, tm],
              })),
              (q[193] = tm),
              (q[194] = eG),
              (q[195] = T))
            : (T = q[195]),
          q[196] === Symbol.for("react.memo_cache_sentinel")
            ? ((tu = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Risk & alerts",
                }),
              })),
              (q[196] = tu))
            : (tu = q[196]),
          q[197] === Symbol.for("react.memo_cache_sentinel")
            ? ((th = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  tu,
                  (0, t.jsx)(i.CardContent, { className: "space-y-4", children: tP.map(e7) }),
                ],
              })),
              (q[197] = th))
            : (th = q[197]),
          q[198] === Symbol.for("react.memo_cache_sentinel")
            ? ((tx = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Pipeline health",
                }),
              })),
              (q[198] = tx))
            : (tx = q[198]));
        let tG = (0, t.jsx)(i.CardContent, { className: "space-y-4", children: t_.map(e6) });
        (q[199] !== tG
          ? ((tp = (0, t.jsxs)(i.Card, { className: "material-surface", children: [tx, tG] })),
            (q[199] = tG),
            (q[200] = tp))
          : (tp = q[200]),
          q[201] === Symbol.for("react.memo_cache_sentinel")
            ? ((tf = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "SLA performance",
                }),
              })),
              (q[201] = tf))
            : (tf = q[201]),
          q[202] === Symbol.for("react.memo_cache_sentinel")
            ? ((tg = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  tf,
                  (0, t.jsx)(i.CardContent, { className: "space-y-4", children: tO.map(e8) }),
                ],
              })),
              (q[202] = tg))
            : (tg = q[202]),
          q[203] !== tp
            ? ((E = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [th, tp, tg],
              })),
              (q[203] = tp),
              (q[204] = E))
            : (E = q[204]),
          q[205] === Symbol.for("react.memo_cache_sentinel")
            ? ((tv = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Customer health",
                }),
              })),
              (q[205] = tv))
            : (tv = q[205]),
          q[206] !== tD
            ? ((ty = (0, t.jsxs)(i.Card, {
                className: "material-surface lg:col-span-2",
                children: [
                  tv,
                  (0, t.jsx)(i.CardContent, {
                    className: "grid gap-4 md:grid-cols-3",
                    children: tD.map(e3),
                  }),
                ],
              })),
              (q[206] = tD),
              (q[207] = ty))
            : (ty = q[207]),
          q[208] === Symbol.for("react.memo_cache_sentinel")
            ? ((tb = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Team performance",
                }),
              })),
              (q[208] = tb))
            : (tb = q[208]),
          q[209] === Symbol.for("react.memo_cache_sentinel")
            ? ((tj = (0, t.jsxs)(i.Card, {
                className: "material-surface",
                children: [
                  tb,
                  (0, t.jsx)(i.CardContent, { className: "space-y-3", children: tT.map(e4) }),
                ],
              })),
              (q[209] = tj))
            : (tj = q[209]),
          q[210] !== ty
            ? ((R = (0, t.jsxs)("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [ty, tj],
              })),
              (q[210] = ty),
              (q[211] = R))
            : (R = q[211]),
          (S = "grid grid-cols-1 gap-6 lg:grid-cols-3"),
          q[212] === Symbol.for("react.memo_cache_sentinel")
            ? ((tN = (0, t.jsx)(i.CardTitle, {
                className: "text-sm text-muted-foreground",
                children: "Upcoming milestones",
              })),
              (q[212] = tN))
            : (tN = q[212]),
          q[213] === Symbol.for("react.memo_cache_sentinel")
            ? ((tw = (0, t.jsxs)(i.CardHeader, {
                className: "flex items-center justify-between",
                children: [
                  tN,
                  (0, t.jsx)(l.Button, {
                    asChild: !0,
                    variant: "outline",
                    children: (0, t.jsx)(c.default, {
                      href: "/projects",
                      children: "View roadmap",
                    }),
                  }),
                ],
              })),
              (q[213] = tw))
            : (tw = q[213]));
        let tz =
          0 === tM.length
            ? (0, t.jsx)("p", {
                className: "text-muted-foreground",
                children: "No milestones yet.",
              })
            : tM.map(e5);
        (q[214] !== tz
          ? ((k = (0, t.jsxs)(i.Card, {
              className: "material-surface lg:col-span-2",
              children: [tw, (0, t.jsx)(i.CardContent, { className: "space-y-3", children: tz })],
            })),
            (q[214] = tz),
            (q[215] = k))
          : (k = q[215]),
          (v = i.Card),
          (N = "material-surface"),
          q[216] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, t.jsx)(i.CardHeader, {
                children: (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-muted-foreground",
                  children: "Revenue insights",
                }),
              })),
              (q[216] = w))
            : (w = q[216]),
          (g = i.CardContent),
          (b = "space-y-4"),
          q[217] === Symbol.for("react.memo_cache_sentinel")
            ? ((tS = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Total in range",
              })),
              (q[217] = tS))
            : (tS = q[217]));
        let tF = tk.toLocaleString();
        (q[218] !== tF
          ? ((j = (0, t.jsxs)("div", {
              children: [
                tS,
                (0, t.jsxs)("p", {
                  className: "text-2xl font-semibold text-foreground",
                  children: ["$", tF],
                }),
              ],
            })),
            (q[218] = tF),
            (q[219] = j))
          : (j = q[219]),
          q[220] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = (0, t.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Best day",
              })),
              (q[220] = y))
            : (y = q[220]),
          (I = "text-lg font-semibold text-foreground"),
          (D = tA.day),
          (M = " · $"),
          (L = tA.value.toLocaleString()),
          (q[20] = ei),
          (q[21] = en),
          (q[22] = X.activity),
          (q[23] = X.kpis.activeProjects),
          (q[24] = X.kpis.activeUsers),
          (q[25] = X.kpis.monthlyRevenue),
          (q[26] = X.kpis.openTasks),
          (q[27] = X.revenue),
          (q[28] = X.taskStatus),
          (q[29] = er),
          (q[30] = ea),
          (q[31] = Z),
          (q[32] = ee),
          (q[33] = es),
          (q[34] = g),
          (q[35] = v),
          (q[36] = y),
          (q[37] = b),
          (q[38] = j),
          (q[39] = N),
          (q[40] = w),
          (q[41] = S),
          (q[42] = k),
          (q[43] = C),
          (q[44] = A),
          (q[45] = P),
          (q[46] = _),
          (q[47] = O),
          (q[48] = T),
          (q[49] = E),
          (q[50] = R),
          (q[51] = I),
          (q[52] = D),
          (q[53] = M),
          (q[54] = L));
      } else
        ((g = q[34]),
          (v = q[35]),
          (y = q[36]),
          (b = q[37]),
          (j = q[38]),
          (N = q[39]),
          (w = q[40]),
          (S = q[41]),
          (k = q[42]),
          (C = q[43]),
          (A = q[44]),
          (P = q[45]),
          (_ = q[46]),
          (O = q[47]),
          (T = q[48]),
          (E = q[49]),
          (R = q[50]),
          (I = q[51]),
          (D = q[52]),
          (M = q[53]),
          (L = q[54]));
      return (
        q[221] !== I || q[222] !== D || q[223] !== M || q[224] !== L
          ? ((B = (0, t.jsxs)("p", { className: I, children: [D, M, L] })),
            (q[221] = I),
            (q[222] = D),
            (q[223] = M),
            (q[224] = L),
            (q[225] = B))
          : (B = q[225]),
        q[226] !== y || q[227] !== B
          ? ((K = (0, t.jsxs)("div", { children: [y, B] })),
            (q[226] = y),
            (q[227] = B),
            (q[228] = K))
          : (K = q[228]),
        q[229] !== Z
          ? ((V = (0, t.jsxs)("div", {
              className:
                "rounded-xl border border-border bg-muted/50 p-3 text-xs text-muted-foreground",
              children: ["Revenue is trending upward compared to the previous ", Z, " days."],
            })),
            (q[229] = Z),
            (q[230] = V))
          : (V = q[230]),
        q[231] !== g || q[232] !== b || q[233] !== j || q[234] !== K || q[235] !== V
          ? ((H = (0, t.jsxs)(g, { className: b, children: [j, K, V] })),
            (q[231] = g),
            (q[232] = b),
            (q[233] = j),
            (q[234] = K),
            (q[235] = V),
            (q[236] = H))
          : (H = q[236]),
        q[237] !== v || q[238] !== N || q[239] !== w || q[240] !== H
          ? ((U = (0, t.jsxs)(v, { className: N, children: [w, H] })),
            (q[237] = v),
            (q[238] = N),
            (q[239] = w),
            (q[240] = H),
            (q[241] = U))
          : (U = q[241]),
        q[242] !== S || q[243] !== k || q[244] !== U
          ? ((G = (0, t.jsxs)("div", { className: S, children: [k, U] })),
            (q[242] = S),
            (q[243] = k),
            (q[244] = U),
            (q[245] = G))
          : (G = q[245]),
        q[246] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, t.jsxs)(i.CardHeader, {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsx)(i.CardTitle, {
                  className: "text-sm text-white/60",
                  children: "Recent activity",
                }),
                (0, t.jsx)(o.Badge, {
                  variant: "secondary",
                  className: "bg-white/10 text-white",
                  children: "Live feed",
                }),
              ],
            })),
            (q[246] = z))
          : (z = q[246]),
        q[247] !== X.activity
          ? ((F =
              0 === X.activity.length
                ? (0, t.jsx)("p", { className: "text-white/60", children: "No activity yet." })
                : X.activity.map(e2)),
            (q[247] = X.activity),
            (q[248] = F))
          : (F = q[248]),
        q[249] !== F
          ? ((W = (0, t.jsxs)(i.Card, {
              className: "border-white/10 bg-white/5",
              children: [z, (0, t.jsx)(i.CardContent, { className: "space-y-4", children: F })],
            })),
            (q[249] = F),
            (q[250] = W))
          : (W = q[250]),
        q[251] !== C ||
        q[252] !== A ||
        q[253] !== P ||
        q[254] !== _ ||
        q[255] !== O ||
        q[256] !== T ||
        q[257] !== E ||
        q[258] !== R ||
        q[259] !== G ||
        q[260] !== W
          ? (($ = (0, t.jsxs)("div", { className: C, children: [A, P, _, O, T, E, R, G, W] })),
            (q[251] = C),
            (q[252] = A),
            (q[253] = P),
            (q[254] = _),
            (q[255] = O),
            (q[256] = T),
            (q[257] = E),
            (q[258] = R),
            (q[259] = G),
            (q[260] = W),
            (q[261] = $))
          : ($ = q[261]),
        $
      );
    }
    function e2(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium", children: e.title }),
                (0, t.jsx)("p", { className: "text-sm text-white/60", children: e.meta }),
              ],
            }),
            (0, t.jsx)("p", {
              className: "text-xs text-white/50",
              children: new Date(e.createdAt).toLocaleDateString(),
            }),
          ],
        },
        e.id
      );
    }
    function e5(e) {
      return (0, t.jsxs)(
        "div",
        {
          className:
            "flex items-center justify-between rounded-xl border border-border bg-muted/50 p-3",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "font-medium text-foreground", children: e.title }),
                (0, t.jsxs)("p", {
                  className: "text-xs text-muted-foreground",
                  children: ["Owner: ", e.owner],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "text-right text-xs text-muted-foreground",
              children: e.date,
            }),
          ],
        },
        e.id
      );
    }
    function e4(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "text-sm text-muted-foreground", children: e.name }),
                (0, t.jsx)("p", {
                  className: "text-lg font-semibold text-foreground",
                  children: e.score,
                }),
              ],
            }),
            (0, t.jsx)("span", { className: "chip chip-info", children: e.trend }),
          ],
        },
        e.name
      );
    }
    function e3(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-border bg-muted/50 p-4",
          children: [
            (0, t.jsx)("p", { className: "text-sm text-muted-foreground", children: e.label }),
            (0, t.jsx)("p", {
              className: "mt-2 text-2xl font-semibold text-foreground",
              children: e.value,
            }),
            (0, t.jsx)("p", {
              className: "text-xs text-muted-foreground",
              children: "Accounts in segment",
            }),
          ],
        },
        e.label
      );
    }
    function e8(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "space-y-2",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center justify-between text-sm",
              children: [
                (0, t.jsx)("span", { className: "text-muted-foreground", children: e.label }),
                (0, t.jsxs)("span", {
                  className: "font-medium text-foreground",
                  children: [e.value, "% / ", e.target, "%"],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "h-2 w-full rounded-full bg-muted",
              children: (0, t.jsx)("div", {
                className: "h-2 rounded-full bg-primary",
                style: { width: `${Math.min(100, e.value)}%` },
              }),
            }),
          ],
        },
        e.label
      );
    }
    function e6(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("p", { className: "text-sm text-muted-foreground", children: e.label }),
                (0, t.jsxs)("p", {
                  className: "text-lg font-semibold text-foreground",
                  children: ["$", e.value.toLocaleString()],
                }),
              ],
            }),
            (0, t.jsx)("span", { className: "chip chip-info", children: e.change }),
          ],
        },
        e.label
      );
    }
    function e7(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-border bg-muted/50 p-3",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, t.jsx)("p", { className: "font-medium text-foreground", children: e.title }),
                (0, t.jsx)("span", {
                  className: `chip ${"critical" === e.tone ? "chip-danger" : "warning" === e.tone ? "chip-warn" : "chip-info"}`,
                  children: e.tone,
                }),
              ],
            }),
            (0, t.jsx)("p", {
              className: "mt-2 text-xs text-muted-foreground",
              children: e.description,
            }),
          ],
        },
        e.title
      );
    }
    function e9(e, r) {
      return (0, t.jsx)(
        d,
        { fill: ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"][r] },
        e.name
      );
    }
    function te(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border border-border bg-muted/50 p-3",
          children: [
            (0, t.jsx)("p", {
              className: "text-sm font-medium text-foreground",
              children: e.label,
            }),
            (0, t.jsx)("p", {
              className: "text-xs text-muted-foreground",
              children: "Requires attention within 24h.",
            }),
            (0, t.jsx)("span", { className: `chip mt-3 inline-flex ${e.tone}`, children: "alert" }),
          ],
        },
        e.label
      );
    }
    function tt(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center justify-between",
          children: [
            (0, t.jsx)("p", { className: "text-sm text-foreground", children: e }),
            (0, t.jsx)("span", { className: "chip chip-info", children: "assigned" }),
          ],
        },
        e
      );
    }
    function tr(e, t) {
      return {
        id: e.id,
        title: e.title,
        date: new Date(e.createdAt).toLocaleDateString(),
        owner: ["Ava", "Miles", "Yara", "Theo", "Nia"][t % 5],
      };
    }
    function ta(e, t) {
      return t.value > e.value ? t : e;
    }
    function ts(e, t) {
      return e + t.value;
    }
    function tn(e) {
      return "todo" === e.name;
    }
    function ti(e) {
      return "doing" === e.name;
    }
    function tl(e) {
      return "done" === e.name;
    }
    function to(e, t) {
      return e + t.value;
    }
    function tc(e, r) {
      return (0, t.jsxs)(
        i.Card,
        {
          className: "animate-pulse border-white/10 bg-white/5",
          children: [
            (0, t.jsx)(i.CardHeader, {
              children: (0, t.jsx)("div", { className: "h-4 w-24 rounded bg-white/10" }),
            }),
            (0, t.jsx)(i.CardContent, {
              children: (0, t.jsx)("div", { className: "h-8 w-20 rounded bg-white/10" }),
            }),
          ],
        },
        r
      );
    }
    e.s(["default", () => e1], 62248);
  },
]);
