(this.webpackJsonpfolakol = this.webpackJsonpfolakol || []).push([
  [7],
  {
    164: function (n, e, t) {
      "use strict";
      t.r(e);
      var o,
        i = t(56),
        r = t(0),
        c = t(25),
        s = t(4),
        a = t(5),
        l = Object(a.b)("div")(
          o ||
            (o = Object(s.a)([
              "\n  padding: 10px;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  z-index: 10;\n  cursor: pointer;\n  background: rgb(241, 242, 243);\n  text-align: center;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.3s ease-in-out;\n  visibility: ",
              ";\n  opacity: ",
              ";\n  display: flex;\n\n  &:hover,\n  &:active,\n  &:focus {\n    background: rgb(224, 224, 224);\n  }\n\n  @media screen and (max-width: 1240px) {\n    display: none;\n  }\n",
            ])),
          function (n) {
            return n.show ? "visible" : "hidden";
          },
          function (n) {
            return n.show ? "1" : "0";
          }
        );
      function u(n) {
        return null !== n && void 0 !== n && n === n.window;
      }
      var d = t(1);
      e.default = function () {
        var n = Object(r.useState)(!1),
          e = Object(i.a)(n, 2),
          t = e[0],
          o = e[1],
          s = function (n) {
            var e = (function (n, e) {
              if ("undefined" === typeof window) return 0;
              var t,
                o = e ? "scrollTop" : "scrollLeft",
                i = 0;
              return (
                u(n)
                  ? (i = n[e ? "pageYOffset" : "pageXOffset"])
                  : n instanceof Document
                  ? (i = n.documentElement[o])
                  : n && (i = n[o]),
                n &&
                  !u(n) &&
                  "number" !== typeof i &&
                  (i =
                    null === (t = (n.ownerDocument || n).documentElement) ||
                    void 0 === t
                      ? void 0
                      : t[o]),
                i
              );
            })(n.target, !0);
            !t && e > 350 ? o(!0) : e <= 350 && o(!1);
          };
        Object(r.useEffect)(function () {
          return (
            window.addEventListener("scroll", s),
            function () {
              window.removeEventListener("scroll", s);
            }
          );
        }, []);
        return Object(d.jsx)(l, {
          onClick: function () {
            document
              .getElementById("intro")
              .scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
          },
          show: t,
          children: Object(d.jsx)(c.a, {
            src: "scroll-top.svg",
            width: "20px",
            height: "20px",
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=7.86559ca5.chunk.js.map
