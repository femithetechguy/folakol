(this.webpackJsonpfolakol = this.webpackJsonpfolakol || []).push([
  [6],
  {
    110: function (e, n, t) {
      "use strict";
      function c(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      t.d(n, "a", function () {
        return c;
      });
    },
    112: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return r;
      });
      var c = t(110);
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          n &&
            (c = c.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, c);
        }
        return t;
      }
      function r(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                Object(c.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
    },
    163: function (e, n, t) {
      "use strict";
      t.r(n);
      var c,
        i,
        r,
        a,
        s,
        j,
        o,
        d,
        b,
        l,
        O = t(112),
        p = t(105),
        h = t(107),
        m = t(106),
        x = t(25),
        u = t(111),
        f = t(4),
        g = t(5),
        y = Object(g.b)("section")(
          c ||
            (c = Object(f.a)([
              "\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n",
            ]))
        ),
        w = Object(g.b)("p")(
          i || (i = Object(f.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))
        ),
        v = Object(g.b)("div")(
          r ||
            (r = Object(f.a)([
              "\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-top: 4rem;\n  }\n",
            ]))
        ),
        P = Object(g.b)("div")(
          a ||
            (a = Object(f.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n",
            ]))
        ),
        k = Object(g.b)("h6")(
          s ||
            (s = Object(f.a)([
              '\n  font-size: 15px;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n  text-transform: uppercase;\n  color: #000;\n  font-family: "Motiva Sans Light", sans-serif;\n',
            ]))
        ),
        D = Object(g.b)("p")(
          j || (j = Object(f.a)(["\n  font-size: 13px;\n"]))
        ),
        E = t(1),
        S = Object(m.a)()(function (e) {
          var n = e.icon,
            t = e.title,
            c = e.content,
            i = e.section,
            r = e.t,
            a = e.id;
          return Object(E.jsx)(y, {
            children: Object(E.jsx)(u.a, {
              direction: "left",
              children: Object(E.jsxs)(p.a, {
                justify: "space-between",
                align: "middle",
                id: a,
                children: [
                  Object(E.jsx)(h.a, {
                    lg: 11,
                    md: 11,
                    sm: 12,
                    xs: 24,
                    children: Object(E.jsx)(x.a, {
                      src: n,
                      width: "100%",
                      height: "100%",
                    }),
                  }),
                  Object(E.jsx)(h.a, {
                    lg: 11,
                    md: 11,
                    sm: 11,
                    xs: 24,
                    children: Object(E.jsxs)(v, {
                      children: [
                        Object(E.jsx)("h6", { children: r(t) }),
                        Object(E.jsx)(w, { children: r(c) }),
                        Object(E.jsx)(P, {
                          children: Object(E.jsx)(p.a, {
                            justify: "space-between",
                            children:
                              "object" === typeof i &&
                              i.map(function (e, n) {
                                return Object(E.jsxs)(
                                  h.a,
                                  {
                                    span: 11,
                                    children: [
                                      Object(E.jsx)(x.a, {
                                        src: e.icon,
                                        width: "60px",
                                        height: "60px",
                                      }),
                                      Object(E.jsx)(k, {
                                        children: r(e.title),
                                      }),
                                      Object(E.jsx)(D, {
                                        children: r(e.content),
                                      }),
                                    ],
                                  },
                                  n
                                );
                              }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        }),
        z = t(55),
        I = Object(g.b)("section")(
          o ||
            (o = Object(f.a)([
              "\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 8rem 0 6rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 3rem;\n  }\n",
            ]))
        ),
        J = Object(g.b)("p")(
          d || (d = Object(f.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))
        ),
        B = Object(g.b)("div")(
          b ||
            (b = Object(f.a)([
              "\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-bottom: 4rem;\n  }\n",
            ]))
        ),
        C = Object(g.b)("div")(
          l ||
            (l = Object(f.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n\n  @media screen and (min-width: 1024px) {\n    max-width: 80%;\n  }\n\n  button:last-child {\n    margin-left: 20px;\n  }\n",
            ]))
        ),
        L = Object(m.a)()(function (e) {
          var n = e.title,
            t = e.content,
            c = e.button,
            i = e.icon,
            r = e.t,
            a = e.id;
          return Object(E.jsx)(I, {
            children: Object(E.jsx)(u.a, {
              direction: "right",
              children: Object(E.jsxs)(p.a, {
                justify: "space-between",
                align: "middle",
                id: a,
                children: [
                  Object(E.jsx)(h.a, {
                    lg: 11,
                    md: 11,
                    sm: 11,
                    xs: 24,
                    children: Object(E.jsxs)(B, {
                      children: [
                        Object(E.jsx)("h6", { children: r(n) }),
                        Object(E.jsx)(J, { children: r(t) }),
                        Object(E.jsx)(C, {
                          children:
                            "object" === typeof c &&
                            c.map(function (e, n) {
                              return Object(E.jsx)(
                                z.a,
                                {
                                  color: e.color,
                                  fixedWidth: !0,
                                  onClick: function () {
                                    return (function (e) {
                                      document
                                        .getElementById(e)
                                        .scrollIntoView({ behavior: "smooth" });
                                    })("about");
                                  },
                                  children: r(e.title),
                                },
                                n
                              );
                            }),
                        }),
                      ],
                    }),
                  }),
                  Object(E.jsx)(h.a, {
                    lg: 11,
                    md: 11,
                    sm: 12,
                    xs: 24,
                    children: Object(E.jsx)(x.a, {
                      src: i,
                      width: "100%",
                      height: "100%",
                    }),
                  }),
                ],
              }),
            }),
          });
        });
      n.default = function (e) {
        return "left" === e.type
          ? Object(E.jsx)(S, Object(O.a)({}, e))
          : "right" === e.type
          ? Object(E.jsx)(L, Object(O.a)({}, e))
          : null;
      };
    },
  },
]);
//# sourceMappingURL=6.2ee255a8.chunk.js.map
