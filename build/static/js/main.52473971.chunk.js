(this.webpackJsonpfolakol = this.webpackJsonpfolakol || []).push([
  [2],
  {
    25: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return i;
      });
      var r = t(1),
        i = function (n) {
          var e = n.src,
            t = n.width,
            i = n.height;
          return Object(r.jsx)("img", {
            src: "/img/svg/".concat(e),
            alt: e,
            width: t,
            height: i,
          });
        };
    },
    33: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        i = t(4),
        o = t(5),
        a = Object(o.b)("div")(
          r ||
            (r = Object(i.a)([
              "\n  position: relative;\n  width: 100%;\n  max-width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 60px;\n  border-top: ",
              ";\n\n  @media only screen and (max-width: 1024px) {\n    max-width: calc(100% - 68px);\n    padding: 0 30px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    max-width: calc(100% - 38px);\n    padding: 0 18px;\n  }\n\n  @media only screen and (max-width: 414px) {\n    max-width: 100%;\n    padding: 0 18px;\n  }\n",
            ])),
          function (n) {
            return n.border ? "1px solid #CDD1D4" : "";
          }
        ),
        c = t(1);
      e.default = function (n) {
        var e = n.border,
          t = n.children;
        return Object(c.jsx)(a, { border: e, children: t });
      };
    },
    55: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return s;
      });
      var r,
        i = t(4),
        o = t(5),
        a = Object(o.b)("button")(
          r ||
            (r = Object(i.a)([
              "\n  background: ",
              ";\n  color: ",
              ";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n",
            ])),
          function (n) {
            return n.color || "#2e186a";
          },
          function (n) {
            return n.color ? "#2E186A" : "#fff";
          }
        ),
        c = t(1),
        s = function (n) {
          var e = n.color,
            t = n.fixedWidth,
            r = n.children,
            i = n.onClick;
          return Object(c.jsx)(a, {
            color: e,
            fixedWidth: t,
            onClick: i,
            children: r,
          });
        };
    },
    75: function (n) {
      n.exports = JSON.parse(
        '{"About":"About","Policy":"Policy","Mission":"Mission","Product":"Product","Tell us everything":"Tell us everything","Contact":"Contact","Do you have any question? Feel free to reach out.":"Do you have any question? Feel free to reach out.","Let\'s Chat":"Let\'s Chat","Application Security":"Application Security","Software Principles":"Software Principles","Support Center":"Support Center","Customer Support":"Customer Support","Address":"Address","Press":"Press","Careers & Culture":"Careers & Culture","Language":"Language","Explore":"Explore","Learn more":"Learn more","Get started":"Get started","Submit":"Submit","Message":"Message","Your Message":"Your Message","Name":"Name","Your Name":"Your Name","Email":"Email","Your Email":"Your Email"}'
      );
    },
    76: function (n) {
      n.exports = JSON.parse(
        '{"About":"Acerca de","Policy":"Politica","Mission":"Misi\xf3n","Product":"Producto","Tell us everything":"Cu\xe9ntanos todo","Contact":"Contacto","Do you have any question? Feel free to reach out.":"\xbfTienes alguna pregunta? No dude en contactarnos","Let\'s Chat":"Charlemos","Application Security":"Seguridad de la aplicaci\xf3n","Software Principles":"Principios de software","Support Center":"Centro de Apoyo","Customer Support":"Atenci\xf3n al cliente","Address":"Habla A","Press":"Prensa","Careers & Culture":"Carreras & cultura","Language":"Language","Explore":"Explorar","Learn more":"M\xe1s informaci\xf3n","Get started":"Comenzar","Submit":"Enviar","Message":"Mensaje","Your Message":"Tu Mensaje","Name":"Nombre","Your Name":"Tu nombre","Email":"Email","Your Email":"Tu correo electr\xf3nico"}'
      );
    },
    98: function (n, e, t) {
      var r = {
        "./Home": [45, 0],
        "./Home/": [45, 0],
        "./Home/index": [45, 0],
        "./Home/index.tsx": [45, 0],
      };
      function i(n) {
        if (!t.o(r, n))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + n + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = r[n],
          i = e[0];
        return t.e(e[1]).then(function () {
          return t(i);
        });
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 98),
        (n.exports = i);
    },
    99: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        i,
        o,
        a,
        c,
        s,
        l,
        d,
        b,
        j,
        u,
        x,
        h,
        p,
        m,
        f,
        O,
        g,
        w,
        v,
        y,
        C,
        k,
        S,
        M,
        z,
        P,
        A = t(23),
        E = t(38),
        L = t.n(E),
        N = t(103),
        T = (t(85), t(0)),
        D = t(8),
        Y = t(105),
        B = t(107),
        F = t(106),
        q = t(25),
        H = t(33),
        J = t(36),
        _ = t(4),
        G = t(5),
        I = Object(G.b)("footer")(
          r ||
            (r = Object(_.a)([
              "\n  background: rgb(241, 242, 243);\n  padding: 2.5rem 0;\n",
            ]))
        ),
        U = Object(G.b)("h4")(
          i ||
            (i = Object(_.a)([
              "\n  font-size: 22px;\n  text-transform: capitalize;\n  color: #18216d;\n\n  @media screen and (max-width: 414px) {\n    padding: 1.5rem 0;\n  }\n",
            ]))
        ),
        V = Object(G.b)(A.b)(
          o ||
            (o = Object(_.a)([
              "\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 0.625rem;\n  transition: all 0.2s ease-in-out;\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #15418e;\n  }\n",
            ]))
        ),
        W = Object(G.b)("section")(
          a ||
            (a = Object(_.a)([
              "\n  background: rgb(241, 242, 243);\n  position: relative;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-bottom: 2rem;\n",
            ]))
        ),
        K = Object(G.b)("div")(
          c ||
            (c = Object(_.a)(["\n  display: flex;\n  position: relative;\n"]))
        ),
        Q = Object(G.b)("div")(
          s ||
            (s = Object(_.a)([
              "\n  color: #18216d;\n  font-size: 14px;\n  width: 70%;\n",
            ]))
        ),
        R = Object(G.b)(A.b)(
          l ||
            (l = Object(_.a)([
              "\n  font-size: 16px;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-transform: capitalize;\n  line-height: 24px;\n  display: block;\n  margin-bottom: 0.625rem;\n  transition: all 0.3s ease-in-out;\n  max-width: max-content;\n\n  &:hover {\n    color: rgb(255, 130, 92);\n    text-underline-position: under;\n    text-decoration: rgb(255, 130, 92) wavy underline;\n  }\n",
            ]))
        ),
        X = Object(G.b)("p")(
          d ||
            (d = Object(_.a)([
              "\n  color: #18216d;\n  max-width: fit-content;\n  border-bottom: 1px solid #18216d;\n  cursor: pointer;\n  margin-top: 1rem;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    border-bottom: 1px solid rgb(255, 130, 92);\n    color: rgb(255, 130, 92);\n  }\n",
            ]))
        ),
        Z = Object(G.b)("div")(
          b || (b = Object(_.a)(["\n  position: relative;\n  height: 53px;\n"]))
        ),
        $ = Object(G.b)("div")(
          j ||
            (j = Object(_.a)([
              "\n  max-width: 510px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n  transition: all 0.1s ease-in-out;\n\n  a {\n    &:hover,\n    &:active,\n    &:focus {\n      -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n      transform: scale(1.1);\n    }\n  }\n\n  @media screen and (max-width: 769px) {\n    width: auto;\n\n    a:not(:last-child) {\n      display: none;\n    }\n  }\n\n  div {\n    cursor: pointer;\n    margin-right: 15px;\n    width: 25px;\n    height: 25px;\n\n    &:hover {\n      fill: rgb(255, 130, 92);\n    }\n  }\n",
            ]))
        ),
        nn = Object(G.b)("h4")(
          u ||
            (u = Object(_.a)([
              "\n  font-size: 22px;\n  text-transform: capitalize;\n  color: #18216d;\n\n  @media screen and (max-width: 414px) {\n    padding: 1.5rem 0;\n  }\n",
            ]))
        ),
        en = Object(G.b)("label")(
          x ||
            (x = Object(_.a)([
              '\n  font-size: 22px;\n  text-transform: capitalize;\n  color: #18216d;\n  display: block;\n  margin-bottom: 2rem;\n  font-family: "Motiva Sans Bold", serif;\n\n  @media screen and (max-width: 414px) {\n    padding: 1.5rem 0;\n    margin-bottom: 1rem;\n  }\n',
            ]))
        ),
        tn = Object(G.b)("div")(
          h ||
            (h = Object(_.a)([
              "\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n\n  &:hover,\n  &:active,\n  &:focus {\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n",
            ]))
        ),
        rn = Object(G.b)("div")(
          p ||
            (p = Object(_.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 85px;\n",
            ]))
        ),
        on = t(1),
        an = Object(F.a)()(function (n) {
          var e = n.t,
            t = function (n) {
              J.a.changeLanguage(n);
            },
            r = function (n) {
              var e = n.href,
                t = n.src;
              return Object(on.jsx)(
                "a",
                {
                  href: e,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": t,
                  children: Object(on.jsx)(q.a, {
                    src: t,
                    width: "25px",
                    height: "25px",
                  }),
                },
                t
              );
            };
          return Object(on.jsxs)(on.Fragment, {
            children: [
              Object(on.jsx)(I, {
                children: Object(on.jsxs)(H.default, {
                  children: [
                    Object(on.jsxs)(Y.a, {
                      justify: "space-between",
                      children: [
                        Object(on.jsxs)(B.a, {
                          lg: 10,
                          md: 10,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(nn, { children: e("Contact") }),
                            Object(on.jsx)(R, {
                              to: "/",
                              children: e("Tell us everything"),
                            }),
                            Object(on.jsx)(Q, {
                              children: e(
                                "Do you have any question? Feel free to reach out."
                              ),
                            }),
                            Object(on.jsx)("a", {
                              href: "mailto:l.qqbadze@gmail.com",
                              children: Object(on.jsx)(X, {
                                children: e("Let's Chat"),
                              }),
                            }),
                          ],
                        }),
                        Object(on.jsxs)(B.a, {
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(U, { children: e("Policy") }),
                            Object(on.jsx)(R, {
                              to: "/",
                              left: "true",
                              children: e("Application Security"),
                            }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Software Principles"),
                            }),
                          ],
                        }),
                        Object(on.jsxs)(B.a, {
                          lg: 6,
                          md: 6,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(Z, {}),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Support Center"),
                            }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Customer Support"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(on.jsxs)(Y.a, {
                      justify: "space-between",
                      children: [
                        Object(on.jsxs)(B.a, {
                          lg: 10,
                          md: 10,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(Z, {}),
                            Object(on.jsx)(nn, { children: e("Address") }),
                            Object(on.jsx)(Q, { children: "USA" }),
                          ],
                        }),
                        Object(on.jsxs)(B.a, {
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(U, { children: e("Company") }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("About"),
                            }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Blog"),
                            }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Press"),
                            }),
                            Object(on.jsx)(R, {
                              left: "true",
                              to: "/",
                              children: e("Careers & Culture"),
                            }),
                          ],
                        }),
                        Object(on.jsxs)(B.a, {
                          lg: 6,
                          md: 6,
                          sm: 12,
                          xs: 12,
                          children: [
                            Object(on.jsx)(en, {
                              htmlFor: "select-lang",
                              children: e("Language"),
                            }),
                            Object(on.jsxs)(rn, {
                              children: [
                                Object(on.jsx)(tn, {
                                  onClick: function () {
                                    return t("en");
                                  },
                                  children: Object(on.jsx)(q.a, {
                                    src: "united-states.svg",
                                    "aria-label": "homepage",
                                    width: "30px",
                                    height: "30px",
                                  }),
                                }),
                                Object(on.jsx)(tn, {
                                  onClick: function () {
                                    return t("es");
                                  },
                                  children: Object(on.jsx)(q.a, {
                                    src: "spain.svg",
                                    "aria-label": "homepage",
                                    width: "30px",
                                    height: "30px",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(on.jsx)(W, {
                children: Object(on.jsx)(H.default, {
                  border: !0,
                  children: Object(on.jsxs)(Y.a, {
                    justify: "space-between",
                    align: "middle",
                    style: { paddingTop: "3rem" },
                    children: [
                      Object(on.jsx)(V, {
                        to: "/",
                        children: Object(on.jsx)(K, {
                          children: Object(on.jsx)(q.a, {
                            src: "logo.svg",
                            "aria-label": "homepage",
                            width: "101px",
                            height: "64px",
                          }),
                        }),
                      }),
                      Object(on.jsxs)($, {
                        children: [
                          Object(on.jsx)(r, {
                            href: "https://github.com/aekolawole",
                            src: "github.svg",
                          }),
                          Object(on.jsx)(r, {
                            href: "https://twitter.com/folakol_tech",
                            src: "twitter.svg",
                          }),
                          Object(on.jsx)(r, {
                            href: "https://www.linkedin.com/in/aekolawole/",
                            src: "linkedin.svg",
                          }),
                          Object(on.jsx)(r, {
                            href: "https://www.adefemikolawole.com",
                            src: "notes.svg",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }),
        cn = t(56),
        sn = t(104),
        ln = t(55),
        dn = t(108),
        bn = Object(G.b)("header")(
          m ||
            (m = Object(_.a)([
              "\n  padding: 1rem 0.5rem;\n\n  .ant-row-space-between {\n    align-items: center;\n    text-align: center;\n  }\n",
            ]))
        ),
        jn = Object(G.b)(A.b)(f || (f = Object(_.a)(["\n  display: flex;\n"]))),
        un = Object(G.b)("div")(
          O ||
            (O = Object(_.a)([
              "\n  display: inline-block;\n  text-align: center;\n",
            ]))
        ),
        xn =
          (Object(G.b)("div")(
            g ||
              (g = Object(_.a)([
                "\n  width: 203px;\n  display: inline-block;\n\n  @media only screen and (max-width: 411px) {\n    width: 150px;\n  }\n\n  @media only screen and (max-width: 320px) {\n    width: 118px;\n  }\n",
              ]))
          ),
          Object(G.b)("div")(
            w ||
              (w = Object(_.a)([
                "\n  cursor: pointer;\n  width: ",
                ";\n  font-weight: 700;\n  text-align: center;\n  border-radius: 1.25rem;\n  display: inline-block;\n",
              ])),
            function (n) {
              return n.width ? "100%" : "110px";
            }
          ),
          Object(G.b)("div")(
            v ||
              (v = Object(_.a)([
                "\n  @media only screen and (max-width: 890px) {\n    display: block;\n  }\n\n  display: none;\n\n  svg {\n    fill: #2e186a;\n  }\n",
              ]))
          )),
        hn = Object(G.b)("div")(
          y ||
            (y = Object(_.a)([
              "\n  @media only screen and (max-width: 890px) {\n    display: none;\n  }\n",
            ]))
        ),
        pn = Object(G.b)("h5")(
          C ||
            (C = Object(_.a)([
              "\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-align: center;\n",
            ]))
        ),
        mn = Object(G.b)(un)(
          k ||
            (k = Object(_.a)([
              "\n  font-size: 1.2rem;\n  color: #18216d;\n  transition: color 0.2s ease-in;\n  margin: 0.5rem 2rem;\n\n  @media only screen and (max-width: 768px) {\n    margin: 1.25rem 2rem;\n  }\n",
            ]))
        ),
        fn = Object(G.b)("span")(
          S ||
            (S = Object(_.a)([
              "\n  font-weight: 500;\n  color: #404041;\n  text-align: right;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n",
            ]))
        ),
        On = Object(G.b)(dn.a)(
          M || (M = Object(_.a)(["\n  font-size: 22px;\n"]))
        ),
        gn = Object(G.b)("span")(
          z ||
            (z = Object(_.a)([
              "\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: rgb(255, 130, 92);\n    text-underline-position: under;\n    text-decoration: rgb(255, 130, 92) wavy underline;\n  }\n",
            ]))
        ),
        wn = Object(F.a)()(function (n) {
          var e = n.t,
            t = Object(T.useState)(!1),
            r = Object(cn.a)(t, 2),
            i = r[0],
            o = r[1],
            a = function () {
              o(!i);
            },
            c = function () {
              var n = function (n) {
                document
                  .getElementById(n)
                  .scrollIntoView({ behavior: "smooth" }),
                  o(!1);
              };
              return Object(on.jsxs)(on.Fragment, {
                children: [
                  Object(on.jsx)(mn, {
                    onClick: function () {
                      return n("about");
                    },
                    children: Object(on.jsx)(gn, { children: e("About") }),
                  }),
                  Object(on.jsx)(mn, {
                    onClick: function () {
                      return n("mission");
                    },
                    children: Object(on.jsx)(gn, { children: e("Mission") }),
                  }),
                  Object(on.jsx)(mn, {
                    onClick: function () {
                      return n("product");
                    },
                    children: Object(on.jsx)(gn, { children: e("Product") }),
                  }),
                  Object(on.jsx)(mn, {
                    style: { width: "180px" },
                    onClick: function () {
                      return n("contact");
                    },
                    children: Object(on.jsx)(gn, {
                      children: Object(on.jsx)(ln.a, {
                        children: e("Contact"),
                      }),
                    }),
                  }),
                ],
              });
            };
          return Object(on.jsx)(bn, {
            children: Object(on.jsxs)(H.default, {
              children: [
                Object(on.jsxs)(Y.a, {
                  justify: "space-between",
                  children: [
                    Object(on.jsx)(jn, {
                      to: "/",
                      "aria-label": "homepage",
                      children: Object(on.jsx)(q.a, {
                        src: "logo.svg",
                        width: "120px",
                        height: "64px",
                      }),
                    }),
                    Object(on.jsx)(hn, { children: Object(on.jsx)(c, {}) }),
                    Object(on.jsx)(xn, {
                      onClick: function () {
                        o(!i);
                      },
                      children: Object(on.jsx)(On, {}),
                    }),
                  ],
                }),
                Object(on.jsxs)(sn.a, {
                  closable: !1,
                  visible: i,
                  onClose: a,
                  children: [
                    Object(on.jsx)(B.a, {
                      style: { marginBottom: "2.5rem" },
                      children: Object(on.jsxs)(fn, {
                        onClick: a,
                        children: [
                          Object(on.jsx)(B.a, {
                            span: 12,
                            children: Object(on.jsx)(pn, { children: "Menu" }),
                          }),
                          Object(on.jsx)(B.a, {
                            span: 12,
                            children: Object(on.jsx)(On, {}),
                          }),
                        ],
                      }),
                    }),
                    Object(on.jsx)(c, {}),
                  ],
                }),
              ],
            }),
          });
        }),
        vn = [{ path: ["/", "/home"], exact: !0, component: "Home" }],
        yn = Object(G.a)(
          P ||
            (P = Object(_.a)([
              '\n\n    @font-face {\n        font-family: "Motiva Sans Light";\n        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: "Motiva Sans Bold";\n        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");\n        font-style: normal;\n    }\n\n\n    body,\n    html,\n    a {\n        font-family: \'Motiva Sans Light\', sans-serif;\n    }\n\n\n    body {\n        margin:0;\n        padding:0;\n        border: 0;\n        outline: 0;\n        background: #fff;\n        overflow-x: hidden;\n    }\n\n    a:hover {\n        color: #18216d;\n    }\n\n    input,\n    textarea {\n        border-radius: 4px;\n        border: 0;\n        background: rgb(241, 242, 243);\n        transition: all 0.3s ease-in-out;  \n        outline: none;\n        width: 100%;  \n        padding: 1rem 1.25rem;\n\n        :focus-within {\n            background: none;\n            box-shadow: #2e186a 0px 0px 0px 1px;\n        }\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        font-family: \'Motiva Sans Bold\', serif;\n        color: #18216d;\n        font-size: 56px;\n        line-height: 1.18;\n\n        @media only screen and (max-width: 890px) {\n          font-size: 47px;\n        }\n      \n        @media only screen and (max-width: 414px) {\n          font-size: 32px;\n        }\n    }\n\n    p {\n        color: #18216d;\n        font-size: 21px;        \n        line-height: 1.41;\n    }\n\n    h1 {\n        font-weight: 600;\n    }\n\n    a {\n        text-decoration: none;\n        outline: none;\n        color: #2E186A;\n\n        :hover {\n            color: #2e186a;\n        }\n    }\n    \n    *:focus {\n        outline: none;\n    }\n\n    .about-block-image svg {\n        text-align: center;\n    }\n\n    .ant-drawer-body {\n        display: flex;\n        flex-direction: column;\n        text-align: left;\n        padding-top: 1.5rem;\n    }\n\n    .ant-drawer-content-wrapper {\n        width: 300px !important;\n    }\n',
            ]))
        ),
        Cn = function () {
          return Object(on.jsxs)(T.Suspense, {
            fallback: null,
            children: [
              Object(on.jsx)(yn, {}),
              Object(on.jsx)(wn, {}),
              Object(on.jsx)(D.c, {
                children: vn.map(function (n) {
                  return Object(on.jsx)(
                    D.a,
                    {
                      path: n.path,
                      exact: n.exact,
                      component: Object(T.lazy)(function () {
                        return t(98)("./".concat(n.component));
                      }),
                    },
                    n.component
                  );
                }),
              }),
              Object(on.jsx)(an, {}),
            ],
          });
        },
        kn = t(73),
        Sn = t(74),
        Mn = t(75),
        zn = t(76);
      J.a
        .use(Sn.a)
        .use(kn.a)
        .init({
          debug: !1,
          lng: "en",
          fallbackLng: "en",
          keySeparator: !1,
          interpolation: { escapeValue: !1 },
          resources: { en: { translations: Mn }, es: { translations: zn } },
          ns: ["translations"],
          defaultNS: "translations",
        });
      var Pn = J.a,
        An = function () {
          return Object(on.jsx)(A.a, {
            children: Object(on.jsx)(N.a, {
              i18n: Pn,
              children: Object(on.jsx)(Cn, {}),
            }),
          });
        };
      L.a.render(Object(on.jsx)(An, {}), document.getElementById("root"));
    },
  },
  [[99, 3, 4]],
]);
//# sourceMappingURL=main.52473971.chunk.js.map
