(this.webpackJsonpfolakol = this.webpackJsonpfolakol || []).push([
  [9],
  {
    165: function (e, n, t) {
      "use strict";
      t.r(n);
      var i,
        c,
        a,
        d = t(105),
        r = t(107),
        s = t(106),
        l = t(111),
        o = t(55),
        j = t(4),
        b = t(5),
        m = Object(b.b)("section")(
          i ||
            (i = Object(j.a)([
              "\n  position: relative;\n  padding: 7.5rem 0 3rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 1024px) {\n    padding: 5.5rem 0 3rem;\n  }\n",
            ]))
        ),
        h = Object(b.b)("p")(
          c || (c = Object(j.a)(["\n  padding: 0.75rem 0 0.75rem;\n"]))
        ),
        x = Object(b.b)("div")(
          a ||
            (a = Object(j.a)([
              "\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n",
            ]))
        ),
        p = t(1);
      n.default = Object(s.a)()(function (e) {
        var n = e.title,
          t = e.content,
          i = e.button,
          c = e.t;
        return Object(p.jsx)(m, {
          children: Object(p.jsx)(l.b, {
            direction: "up",
            children: Object(p.jsx)(d.a, {
              justify: "center",
              align: "middle",
              children: Object(p.jsx)(x, {
                children: Object(p.jsxs)(r.a, {
                  lg: 24,
                  md: 24,
                  sm: 24,
                  xs: 24,
                  children: [
                    Object(p.jsx)("h6", { children: c(n) }),
                    Object(p.jsx)(h, { children: c(t) }),
                    i &&
                      Object(p.jsx)(o.a, {
                        name: "submit",
                        onClick: function () {
                          return (
                            (e = "mission"),
                            void document
                              .getElementById(e)
                              .scrollIntoView({ behavior: "smooth" })
                          );
                          var e;
                        },
                        children: c(i),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=9.58de0bbb.chunk.js.map
