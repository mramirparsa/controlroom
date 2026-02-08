(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  82960,
  (e) => {
    "use strict";
    var r = e.i(62482),
      t = e.i(48612),
      i = e.i(19871),
      o = e.i(59587),
      a = e.i(72743);
    e.s([
      "SectionNav",
      0,
      (e) => {
        let l,
          s,
          n,
          d,
          u,
          c,
          h = (0, t.c)(12),
          { sectionId: f } = e,
          m = (0, o.usePathname)();
        if (h[0] !== m || h[1] !== f) {
          d = Symbol.for("react.early_return_sentinel");
          e: {
            let e = (0, a.getSectionById)(f);
            if (!e) {
              d = null;
              break e;
            }
            ((n = "material-surface rounded-3xl border border-border/60 px-4 py-3"),
              (l = "flex flex-wrap gap-2"),
              (s = e.children.map((t, o) => {
                let a = `${e.href}/${t.id}`,
                  l =
                    0 === o &&
                    m.startsWith(e.href) &&
                    !e.children.some((r) => m.startsWith(`${e.href}/${r.id}`)),
                  s = m === a || m.startsWith(`${a}/`) || (0 === o && m === e.href) || l;
                return (0, r.jsx)(
                  i.default,
                  {
                    href: a,
                    className: `rounded-full px-4 py-2 text-sm transition duration-300 motion-smooth ${s ? "bg-primary text-primary-foreground shadow-[0_8px_30px_rgba(59,130,246,0.3)]" : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"}`,
                    children: t.label,
                  },
                  t.id
                );
              })));
          }
          ((h[0] = m), (h[1] = f), (h[2] = l), (h[3] = s), (h[4] = n), (h[5] = d));
        } else ((l = h[2]), (s = h[3]), (n = h[4]), (d = h[5]));
        return d !== Symbol.for("react.early_return_sentinel")
          ? d
          : (h[6] !== l || h[7] !== s
              ? ((u = (0, r.jsx)("div", { className: l, children: s })),
                (h[6] = l),
                (h[7] = s),
                (h[8] = u))
              : (u = h[8]),
            h[9] !== n || h[10] !== u
              ? ((c = (0, r.jsx)("div", { className: n, children: u })),
                (h[9] = n),
                (h[10] = u),
                (h[11] = c))
              : (c = h[11]),
            c);
      },
    ]);
  },
]);
