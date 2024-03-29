webpackJsonp(
  [1],
  {
    "2C1O": function(t, s) {},
    "3iBX": function(t, s) {},
    "9V9I": function(t, s) {},
    DyEf: function(t, s) {},
    FSeG: function(t, s) {},
    M54U: function(t, s) {},
    NHnr: function(t, s, a) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      var i = a("7+uW"),
        e = {
          name: "Footer",
          components: {},
          data: function() {
            return {
              year: new Date().getFullYear(),
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie")
            };
          },
          mounted: function() {},
          methods: {}
        },
        n = {
          render: function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          staticRenderFns: [
            function() {
              var t = this,
                s = t.$createElement,
                a = t._self._c || s;
              return a(
                "div",
                { staticClass: "footer navbar fixed-bottom bg-light " },
                [
                  a("div", { staticClass: "row align-items-center mt-2" }, [
                    a("div", { staticClass: "col-1" }),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }, [
                      a(
                        "a",
                        {
                          staticClass: "small text-decoration-none text-black",
                          attrs: { href: "#/" }
                        },
                        [
                          a("i", {
                            staticClass: "fa-solid fa-globe display-6"
                          }),
                          t._v(" "),
                          a("br"),
                          t._v(" "),
                          a("span", [t._v("发现")])
                        ]
                      )
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }, [
                      a("i", {
                        staticClass: "fa-solid fa-headphones display-6"
                      }),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("播客")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }, [
                      a(
                        "a",
                        {
                          staticClass: "small text-decoration-none text-black",
                          attrs: { href: "#/myhome" }
                        },
                        [
                          a("i", {
                            staticClass: "fa-solid fa-user-astronaut display-6 "
                          }),
                          t._v(" "),
                          a("br"),
                          t._v(" "),
                          a("span", [t._v("我的")])
                        ]
                      )
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }, [
                      a("i", {
                        staticClass: "fa-solid fa-user-group display-6"
                      }),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("关注")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }, [
                      a("i", { staticClass: "fa-solid fa-house display-6" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", [t._v("社区")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-1" })
                  ])
                ]
              );
            }
          ]
        };
      var o = {
          name: "App",
          components: {
            Footer: a("VU/8")(
              e,
              n,
              !1,
              function(t) {
                a("aE1z");
              },
              "data-v-0aa5731d",
              null
            ).exports
          },
          data: function() {
            return { footerShow: !0 };
          },
          created: function() {
            ("Login" !== this.$route.name &&
              "MobileLogIn" !== this.$route.name &&
              "PasswordLogIn" !== this.$route.name &&
              "PlayView" !== this.$route.name) ||
              (this.footerShow = !1);
          },
          watch: { $route: "fetchDate" },
          mounted: function() {},
          methods: {
            fetchDate: function() {
              "Login" === this.$route.name ||
              "MobileLogIn" === this.$route.name ||
              "PasswordLogIn" === this.$route.name ||
              "PlayView" === this.$route.name
                ? (this.footerShow = !1)
                : (this.footerShow = !0);
            }
          }
        },
        l = {
          render: function() {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              { attrs: { id: "app" } },
              [
                s("router-view", { key: this.$route.fullPath }),
                this._v(" "),
                s("Footer", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: this.footerShow,
                      expression: "footerShow"
                    }
                  ]
                })
              ],
              1
            );
          },
          staticRenderFns: []
        };
      var c = a("VU/8")(
          o,
          l,
          !1,
          function(t) {
            a("hGV1");
          },
          null,
          null
        ).exports,
        r = a("/ocq"),
        d = {
          name: "RecomList",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { recomList: [] };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getRecomList();
          },
          methods: {
            getRecomList: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/personalized?limit=10").then(
                function(s) {
                  t.recomList = s.data.result;
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            goList: function(t) {
              this.$router.push({ path: "/singleList", query: { id: t } });
            }
          }
        },
        v = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "recomList" }, [
              a(
                "div",
                { staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1" },
                [
                  t._m(0),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass: "h-100",
                      staticStyle: {
                        width: "100%",
                        "overflow-x": "auto",
                        "overflow-y": "hidden",
                        "white-space": "nowrap"
                      }
                    },
                    t._l(t.recomList, function(s) {
                      return a(
                        "div",
                        {
                          key: s,
                          staticStyle: {
                            width: "28%",
                            "margin-right": "10px",
                            display: "inline-block",
                            "vertical-align": "top"
                          },
                          on: {
                            click: function(a) {
                              return t.goList(s.id);
                            }
                          }
                        },
                        [
                          a("img", {
                            staticClass: "img-fluid",
                            attrs: { src: s.picUrl, alt: "" }
                          }),
                          t._v(" "),
                          a(
                            "p",
                            {
                              staticStyle: {
                                "word-break": "break-all",
                                "white-space": "normal"
                              }
                            },
                            [t._v(t._s(s.name))]
                          )
                        ]
                      );
                    }),
                    0
                  )
                ]
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "row  mt-2 ps-2 pe-2 g-1" }, [
                s("div", { staticClass: "col-3 " }, [
                  s("span", { staticClass: "small" }, [this._v("推荐歌单")])
                ]),
                this._v(" "),
                s("div", { staticClass: "col-6" }),
                this._v(" "),
                s("div", { staticClass: "col-3" }, [
                  s(
                    "a",
                    {
                      staticClass: "small text-decoration-none text-black",
                      attrs: { href: "#/SongList" }
                    },
                    [this._v("更多")]
                  )
                ])
              ]);
            }
          ]
        };
      var u = {
          name: "NewBoard",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              newSongs: [],
              newCds: [],
              newAlbums: [],
              newSongsShow: !0,
              newCdsShow: !1,
              newAlbumsShow: !1
            };
          },
          mounted: function() {
            this.getNewSong(), this.getNewCd(), this.getNewAlbum();
          },
          methods: {
            getNewSong: function() {
              var t = this;
              axios
                .get("https://www.terenzzzz.com:3002/personalized/newsong?limit=5")
                .then(
                  function(s) {
                    t.newSongs = s.data.result;
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getNewCd: function() {
              var t = this;
              axios
                .get("https://www.terenzzzz.com:3002/top/album?offset=0&limit=5")
                .then(
                  function(s) {
                    t.newCds = s.data.weekData.slice(10, 15);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getNewAlbum: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/album/list?limit=5").then(
                function(s) {
                  t.newAlbums = s.data.products;
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            goNewCds: function() {
              (this.newSongsShow = !1),
                (this.newCdsShow = !0),
                (this.newAlbumsShow = !1);
            },
            goNewSongs: function() {
              (this.newSongsShow = !0),
                (this.newCdsShow = !1),
                (this.newAlbumsShow = !1);
            },
            goNewAlbums: function() {
              (this.newSongsShow = !1),
                (this.newCdsShow = !1),
                (this.newAlbumsShow = !0);
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        h = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "newBoard" }, [
              a(
                "div",
                { staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1" },
                [
                  a(
                    "div",
                    {
                      staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1"
                    },
                    [
                      a("div", { staticClass: "col-2 border-end" }, [
                        a(
                          "span",
                          { staticClass: "small", on: { click: t.goNewSongs } },
                          [t._v("新歌")]
                        )
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-2 border-end" }, [
                        a(
                          "span",
                          { staticClass: "small", on: { click: t.goNewCds } },
                          [t._v("新碟")]
                        )
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-3" }, [
                        a(
                          "span",
                          {
                            staticClass: "small",
                            on: { click: t.goNewAlbums }
                          },
                          [t._v("数字专辑")]
                        )
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-2" }),
                      t._v(" "),
                      t._m(0)
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.newSongsShow,
                          expression: "newSongsShow"
                        }
                      ],
                      staticClass: "row align-items-center ps-2 pe-2 g-1"
                    },
                    [
                      a(
                        "ul",
                        { staticClass: "list-unstyled " },
                        t._l(t.newSongs, function(s) {
                          return a("li", { key: s }, [
                            a(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center mt-2 ps-2 pe-2 g-1",
                                on: {
                                  click: function(a) {
                                    return t.playSong(s.song.id);
                                  }
                                }
                              },
                              [
                                a("div", { staticClass: "col-2" }, [
                                  a("img", {
                                    staticClass: "img-fluid",
                                    attrs: { src: s.picUrl, alt: "" }
                                  })
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "col-10 " }, [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.name))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  a(
                                    "span",
                                    { staticClass: "small text-muted" },
                                    [t._v(t._s(s.song.artists[0].name))]
                                  )
                                ])
                              ]
                            )
                          ]);
                        }),
                        0
                      )
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.newCdsShow,
                          expression: "newCdsShow"
                        }
                      ],
                      staticClass: "row align-items-center ps-2 pe-2 g-1"
                    },
                    [
                      a(
                        "ul",
                        { staticClass: "list-unstyled " },
                        t._l(t.newCds, function(s) {
                          return a("li", { key: s }, [
                            a(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center mt-2 ps-2 pe-2 g-1"
                              },
                              [
                                a("div", { staticClass: "col-2" }, [
                                  a("img", {
                                    staticClass: "img-fluid",
                                    attrs: { src: s.picUrl, alt: "" }
                                  })
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "col-10 " }, [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.name))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  a(
                                    "span",
                                    { staticClass: "small text-muted" },
                                    [t._v(t._s(s.artist.name))]
                                  )
                                ])
                              ]
                            )
                          ]);
                        }),
                        0
                      )
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.newAlbumsShow,
                          expression: "newAlbumsShow"
                        }
                      ],
                      staticClass: "row align-items-center ps-2 pe-2 g-1"
                    },
                    [
                      a(
                        "ul",
                        { staticClass: "list-unstyled " },
                        t._l(t.newAlbums, function(s) {
                          return a("li", { key: s }, [
                            a(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center mt-2 ps-2 pe-2 g-1"
                              },
                              [
                                a("div", { staticClass: "col-2" }, [
                                  a("img", {
                                    staticClass: "img-fluid",
                                    attrs: { src: s.coverUrl, alt: "" }
                                  })
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "col-10 " }, [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.albumName))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  a(
                                    "span",
                                    { staticClass: "small text-muted" },
                                    [t._v(t._s(s.artistName))]
                                  )
                                ])
                              ]
                            )
                          ]);
                        }),
                        0
                      )
                    ]
                  )
                ]
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s(
                  "a",
                  {
                    staticClass: "small text-decoration-none text-black",
                    attrs: { href: "#/allNewSong" }
                  },
                  [this._v("更多")]
                )
              ]);
            }
          ]
        };
      var m = {
          name: "LeaderBoard",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { lists: [], listId: "" };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getList();
          },
          methods: {
            getList: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/toplist/detail").then(
                function(s) {
                  t.lists = s.data.list.slice(0, 5);
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            getListSongs1: function(t) {
              var s = this;
              axios.get("https://www.terenzzzz.com:3002/playlist/detail?id=" + t).then(
                function(t) {
                  s.listSongs1 = t.data.playlist.tracks.slice(0, 5);
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            goList: function(t) {
              this.$router.push({ path: "/singleList", query: { id: t } });
            }
          }
        },
        p = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "LeaderBoard" }, [
              a(
                "div",
                { staticClass: "row align-items-center mt-3 ps-2 pe-2 g-1" },
                [
                  t._m(0),
                  t._v(" "),
                  a("div", [
                    a("div", { staticClass: "overflow-scroll" }, [
                      a(
                        "div",
                        {
                          staticClass: "row",
                          staticStyle: {
                            width: "100%",
                            "overflow-x": "auto",
                            "overflow-y": "hidden",
                            "white-space": "nowrap",
                            display: "inline-block"
                          }
                        },
                        t._l(t.lists, function(s) {
                          return a(
                            "div",
                            {
                              key: s,
                              staticClass: "col-5 border mx-2",
                              staticStyle: {
                                display: "inline-block",
                                "vertical-align": "top"
                              },
                              on: {
                                click: function(a) {
                                  return t.goList(s.id);
                                }
                              }
                            },
                            [
                              a("div", { staticClass: "row mt-2" }, [
                                a("img", {
                                  staticClass: "img-fluid",
                                  attrs: { src: s.coverImgUrl, alt: "" }
                                }),
                                t._v(" "),
                                a("h5", [t._v(t._s(s.name))])
                              ]),
                              t._v(" "),
                              a("div", { staticClass: "row " }, [
                                a(
                                  "p",
                                  {
                                    staticClass:
                                      "small text-muted d-flex align-items-center p1",
                                    staticStyle: {
                                      height: "150px",
                                      "word-break": "break-all",
                                      "white-space": "normal"
                                    }
                                  },
                                  [t._v(t._s(s.description))]
                                )
                              ])
                            ]
                          );
                        }),
                        0
                      )
                    ])
                  ])
                ]
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "row align-items-center mt-2 ps-3 pe-3 g-1" },
                [
                  s("div", { staticClass: "col-2" }, [
                    s("span", { staticClass: "small" }, [this._v("排行榜")])
                  ]),
                  this._v(" "),
                  s("div", { staticClass: "col-7" }),
                  this._v(" "),
                  s("div", { staticClass: "col-3" }, [
                    s(
                      "a",
                      {
                        staticClass: "small text-decoration-none text-black",
                        attrs: { href: "#/RankBoard" }
                      },
                      [this._v("更多")]
                    )
                  ])
                ]
              );
            }
          ]
        };
      var f = {
          name: "HotTopic",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { hotTopics: [] };
          },
          mounted: function() {
            this.getHotTopic();
          },
          methods: {
            getHotTopic: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/hot/topic?limit=9").then(
                function(s) {
                  t.hotTopics = s.data.hot;
                },
                function(t) {
                  console.log(t);
                }
              );
            }
          }
        },
        _ = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "hotTopic" }, [
              a("div", { staticClass: "row mt-2 ps-1 pe-2 g-1" }, [
                t._m(0),
                t._v(" "),
                a(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: {
                      width: "100%",
                      "overflow-x": "auto",
                      "overflow-y": "hidden",
                      "white-space": "nowrap",
                      display: "inline-block"
                    }
                  },
                  [
                    t._l(t.hotTopics.slice(0, 3), function(s) {
                      return a(
                        "div",
                        {
                          key: s,
                          staticClass: "w-50",
                          staticStyle: {
                            width: "28%",
                            height: "30px",
                            "margin-right": "30px",
                            display: "inline-block"
                          }
                        },
                        [
                          a(
                            "div",
                            { staticClass: "d-flex justify-content-start" },
                            [
                              a("i", { staticClass: "fa-solid fa-hashtag" }),
                              a("span", { staticClass: "small me-1" }, [
                                t._v(t._s(s.title))
                              ]),
                              t._v(" "),
                              a("span", { staticClass: "small text-muted" }, [
                                t._v(t._s(s.participateCount) + "热度")
                              ])
                            ]
                          )
                        ]
                      );
                    }),
                    t._v(" "),
                    a("br"),
                    t._v(" "),
                    t._l(t.hotTopics.slice(3, 6), function(s) {
                      return a(
                        "div",
                        {
                          key: s,
                          staticClass: "w-50",
                          staticStyle: {
                            width: "28%",
                            height: "30px",
                            "margin-right": "30px",
                            display: "inline-block"
                          }
                        },
                        [
                          a(
                            "div",
                            { staticClass: "d-flex justify-content-start" },
                            [
                              a("i", { staticClass: "fa-solid fa-hashtag" }),
                              a("span", { staticClass: "small me-1" }, [
                                t._v(t._s(s.title))
                              ]),
                              t._v(" "),
                              a("span", { staticClass: "small text-muted" }, [
                                t._v(t._s(s.participateCount) + "热度")
                              ])
                            ]
                          )
                        ]
                      );
                    }),
                    t._v(" "),
                    a("br"),
                    t._v(" "),
                    t._l(t.hotTopics.slice(6, 9), function(s) {
                      return a(
                        "div",
                        {
                          key: s,
                          staticClass: "w-50",
                          staticStyle: {
                            width: "28%",
                            height: "30px",
                            "margin-right": "30px",
                            display: "inline-block"
                          }
                        },
                        [
                          a(
                            "div",
                            { staticClass: "d-flex justify-content-start" },
                            [
                              a("i", { staticClass: "fa-solid fa-hashtag" }),
                              a("span", { staticClass: "small me-1" }, [
                                t._v(t._s(s.title))
                              ]),
                              t._v(" "),
                              a("span", { staticClass: "small text-muted" }, [
                                t._v(t._s(s.participateCount) + "热度")
                              ])
                            ]
                          )
                        ]
                      );
                    })
                  ],
                  2
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "row  mt-2 ps-2 pe-2 g-1" }, [
                s("div", { staticClass: "col-3 " }, [
                  s("span", { staticClass: "small" }, [this._v("热门话题")])
                ]),
                this._v(" "),
                s("div", { staticClass: "col-6" }),
                this._v(" "),
                s("div", { staticClass: "col-3" }, [
                  s("span", { staticClass: "small" }, [this._v("更多")])
                ])
              ]);
            }
          ]
        };
      var g = {
          name: "SideBar",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              searchKeyword: "",
              keyword: "",
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie")
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getSearchKeyword();
          },
          methods: {
            getSearchKeyword: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/search/default").then(
                function(s) {
                  t.searchKeyword = s.data.data.showKeyword;
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            logOut: function() {
              axios
                .post(
                  "https://www.terenzzzz.com:3002/logout?cookie=" + this.sessionCookie
                )
                .then(
                  function(t) {
                    console.log(t);
                  },
                  function(t) {
                    console.log(t);
                  }
                ),
                window.location.reload(),
                sessionStorage.clear();
            },
            goResult: function(t) {
              this.$router.push({
                path: "/searchResult",
                query: { keyWord: t }
              }),
                this.$route.fullPath === "/searchResult?keyWord=" + t &&
                  window.location.reload();
            }
          }
        },
        C = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "sideBar" }, [
              a(
                "div",
                { staticClass: "row bg-light pt-1 pb-3 navbar fixed-top g-0" },
                [
                  a(
                    "div",
                    {
                      staticClass:
                        "row d-flex align-items-center navbar navbar-expand-lg navbar-light bg-light g-0 px-2"
                    },
                    [
                      t._m(0),
                      t._v(" "),
                      a("div", { staticClass: "col-8" }, [
                        a("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.keyword,
                              expression: "keyword"
                            }
                          ],
                          staticStyle: {
                            "font-family": "Arial,FontAwesome",
                            width: "100%",
                            padding: "5px"
                          },
                          attrs: {
                            type: "text",
                            placeholder: "" + t.searchKeyword
                          },
                          domProps: { value: t.keyword },
                          on: {
                            keyup: function(s) {
                              return !s.type.indexOf("key") &&
                                t._k(s.keyCode, "enter", 13, s.key, "Enter")
                                ? null
                                : t.goResult(t.keyword);
                            },
                            input: function(s) {
                              s.target.composing ||
                                (t.keyword = s.target.value);
                            }
                          }
                        })
                      ]),
                      t._v(" "),
                      t._m(1)
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "navbarSupportedContent" }
                    },
                    [
                      a("ul", { staticClass: "navbar-nav" }, [
                        a("li", { staticClass: "nav-item active" }, [
                          t._m(2),
                          t._v(" "),
                          a(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: { href: "#" },
                              on: { click: t.logOut }
                            },
                            [a("span", [t._v("退出")])]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s(
                  "button",
                  {
                    staticClass: "navbar-toggler",
                    attrs: {
                      type: "button",
                      "data-toggle": "collapse",
                      "data-target": "#navbarSupportedContent",
                      "aria-controls": "navbarSupportedContent",
                      "aria-expanded": "false",
                      "aria-label": "Toggle navigation"
                    }
                  },
                  [s("span", [s("i", { staticClass: "fa-solid fa-bars" })])]
                )
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-microphone-lines fa-lg" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "a",
                { staticClass: "nav-link", attrs: { href: "#/login" } },
                [s("span", [this._v("登录")])]
              );
            }
          ]
        };
      var y = {
          name: "Poster",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { banners: [], currentIndex: 0, interId: null };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getBanner(), this.changeIndex();
          },
          methods: {
            getBanner: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/banner?type=2").then(
                function(s) {
                  t.banners = s.data.banners;
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            changeIndex: function() {
              var t = this;
              this.interId = setInterval(function() {
                t.currentIndex++,
                  t.currentIndex === t.banners.length && (t.currentIndex = 0);
              }, 3e3);
            },
            clear: function() {
              clearInterval(this.interId);
            },
            pre: function() {
              0 === this.currentIndex &&
                (this.currentIndex = this.banners.length),
                this.currentIndex--;
            },
            next: function() {
              this.currentIndex++,
                this.currentIndex === this.banners.length &&
                  (this.currentIndex = 0);
            },
            goToIndex: function(t) {
              this.currentIndex = t;
            }
          }
        },
        w = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "swipe", attrs: { id: "swipe" } }, [
              a(
                "div",
                { staticClass: "img-box", attrs: { id: "swipe_img_box" } },
                [
                  a(
                    "a",
                    t._l(t.banners, function(s, i) {
                      return a("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.currentIndex == i,
                            expression: "currentIndex==index"
                          }
                        ],
                        key: i,
                        staticClass: "img-fluid px-4 ",
                        staticStyle: { height: "170px" },
                        attrs: { src: s.pic },
                        on: { mouseenter: t.clear, mouseout: t.changeIndex }
                      });
                    }),
                    0
                  )
                ]
              ),
              t._v(" "),
              a(
                "div",
                { staticClass: "select", attrs: { id: "swipe_select" } },
                [
                  a("ul", { staticClass: "slide-index " }, [
                    a("div", { staticClass: "row " }, [
                      a(
                        "div",
                        {
                          staticClass: "col-12 pt-2 d-flex align-items-center"
                        },
                        t._l(t.banners, function(s, i) {
                          return a("li", {
                            key: i,
                            staticClass: "item",
                            class: t.currentIndex == i ? "active" : "",
                            on: {
                              mouseenter: t.clear,
                              mouseout: t.changeIndex,
                              click: function(s) {
                                return t.goToIndex(i);
                              }
                            }
                          });
                        }),
                        0
                      )
                    ])
                  ])
                ]
              )
            ]);
          },
          staticRenderFns: []
        };
      var b = {
          name: "Index",
          components: {
            RecomList: a("VU/8")(
              d,
              v,
              !1,
              function(t) {
                a("bwZG");
              },
              "data-v-0deff460",
              null
            ).exports,
            NewBoard: a("VU/8")(
              u,
              h,
              !1,
              function(t) {
                a("wOOe");
              },
              "data-v-6d179922",
              null
            ).exports,
            LeaderBoard: a("VU/8")(
              m,
              p,
              !1,
              function(t) {
                a("u7EU");
              },
              "data-v-693cd7f1",
              null
            ).exports,
            HotTopic: a("VU/8")(
              f,
              _,
              !1,
              function(t) {
                a("nhde");
              },
              "data-v-b4ee0db6",
              null
            ).exports,
            SideBar: a("VU/8")(
              g,
              C,
              !1,
              function(t) {
                a("rDWK");
              },
              "data-v-de616504",
              null
            ).exports,
            Poster: a("VU/8")(
              y,
              w,
              !1,
              function(t) {
                a("DyEf");
              },
              "data-v-715ff446",
              null
            ).exports
          },
          data: function() {
            return {
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie")
            };
          },
          mounted: function() {},
          methods: {}
        },
        x = {
          render: function() {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              { staticClass: "index" },
              [
                s("SideBar"),
                this._v(" "),
                s(
                  "div",
                  { staticClass: "body" },
                  [
                    s("Poster"),
                    this._v(" "),
                    this._m(0),
                    this._v(" "),
                    s("RecomList"),
                    this._v(" "),
                    s("NewBoard"),
                    this._v(" "),
                    s("HotTopic"),
                    this._v(" "),
                    s("LeaderBoard")
                  ],
                  1
                )
              ],
              1
            );
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center mt-2 ps-2 pe-2 g-1 bg-light "
                },
                [
                  s(
                    "div",
                    {
                      staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1"
                    },
                    [
                      s("div", { staticClass: "col-3" }, [
                        s(
                          "a",
                          {
                            staticClass:
                              "small text-decoration-none text-black",
                            attrs: { href: "#/recomend" }
                          },
                          [this._v("每日推荐")]
                        )
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-3" }, [
                        s(
                          "a",
                          {
                            staticClass:
                              "small text-decoration-none text-black",
                            attrs: { href: "#/SongList" }
                          },
                          [this._v("歌单")]
                        )
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-3" }, [
                        s(
                          "a",
                          {
                            staticClass:
                              "small text-decoration-none text-black",
                            attrs: { href: "#/RankBoard" }
                          },
                          [this._v("排行榜")]
                        )
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-3" }, [
                        s("span", { staticClass: "small" }, [this._v("FM电台")])
                      ])
                    ]
                  )
                ]
              );
            }
          ]
        };
      var k = a("VU/8")(
          b,
          x,
          !1,
          function(t) {
            a("Xc4w");
          },
          "data-v-5e545382",
          null
        ).exports,
        S = {
          name: "Recomend",
          data: function() {
            return {
              month: new Date().getMonth() + 1,
              date: new Date().getDate(),
              recomSongs: []
            };
          },
          mounted: function() {
            this.getRecomSongs();
          },
          methods: {
            getRecomSongs: function() {
              var t = this;
              axios.post("https://www.terenzzzz.com:3002/recommend/songs").then(
                function(s) {
                  (t.recomSongs = s.data.data.dailySongs), console.log(s);
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        L = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "recomend" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a(
                  "div",
                  { staticClass: "row align-items-center mt-3 pt-5 ps-4 pe-4" },
                  [
                    a("div", { staticClass: "col-6 ps-0" }, [
                      a("div", [
                        a("strong", { staticClass: "display-3" }, [
                          t._v(t._s(t.month))
                        ]),
                        t._v(" / "),
                        a("span", [t._v(t._s(t.date))])
                      ]),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [
                        t._v("查看今日运势")
                      ]),
                      t._v(" "),
                      a("i", { staticClass: "fa-solid fa-chevron-right smll" })
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-2" }),
                    t._v(" "),
                    t._m(1)
                  ]
                ),
                t._v(" "),
                t._m(2),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1" },
                  [
                    a(
                      "ul",
                      { staticClass: "list-unstyled " },
                      t._l(t.recomSongs, function(s) {
                        return a("li", { key: s }, [
                          a(
                            "div",
                            {
                              staticClass:
                                "row align-items-center mt-2 ps-2 pe-2 g-1",
                              on: {
                                click: function(a) {
                                  return t.playSong(s.id);
                                }
                              }
                            },
                            [
                              a("div", { staticClass: "col-2" }, [
                                a("img", {
                                  staticClass: "img-fluid",
                                  attrs: { src: s.al.picUrl, alt: "" }
                                })
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "col-8 " },
                                [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.name))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  t._l(s.ar, function(s) {
                                    return a(
                                      "span",
                                      {
                                        key: s,
                                        staticClass: "small text-muted me-1"
                                      },
                                      [t._v(t._s(s.name))]
                                    );
                                  })
                                ],
                                2
                              ),
                              t._v(" "),
                              t._m(3, !0)
                            ]
                          )
                        ]);
                      }),
                      0
                    )
                  ]
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\r\n\t\t\t\t今日推荐\r\n\t\t\t")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-4" }, [
                s("span", { staticClass: "small" }, [this._v("历史日推")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "row align-items-center pt-3 ps-4 pe-4" },
                [
                  s("div", { staticClass: "col-4" }, [
                    s("i", { staticClass: "fa-solid fa-circle-play" }),
                    this._v(" "),
                    s("span", [this._v("播放全部")])
                  ]),
                  this._v(" "),
                  s("div", { staticClass: "col-5" }),
                  this._v(" "),
                  s("div", { staticClass: "col-3" }, [
                    s("i", { staticClass: "fa-solid fa-arrow-down" })
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            }
          ]
        };
      var $ = a("VU/8")(
          S,
          L,
          !1,
          function(t) {
            a("k5oS");
          },
          "data-v-2ac0af35",
          null
        ).exports,
        I = {
          name: "Myhome",
          data: function() {
            return {
              detail: [],
              songLists: [],
              likeList: [],
              likeListPic: "",
              likeListCount: "",
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie"),
              isLogin: !1
            };
          },
          mounted: function() {
            this.checkLogin(),
              this.getUserDetail(),
              this.getLikelist(),
              this.getSongList(),
              this.getFirstSong(),
              console.log(this.likeListPic);
          },
          methods: {
            checkLogin: function() {
              null == this.sessionCookie &&
                this.$router.push({ path: "/login" });
            },
            getUserDetail: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/user/detail?uid=" + this.sessionUid
                )
                .then(
                  function(s) {
                    t.detail = s.data;
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getLikelist: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/likelist?uid=" +
                    this.sessionUid +
                    "&cookie=" +
                    this.sessionCookie
                )
                .then(
                  function(s) {
                    (t.likeList = s.data.ids),
                      (t.likeListCount = s.data.ids.length),
                      console.log(s);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getFirstSong: function() {
              var t = this;
              axios
                .get("https://www.terenzzzz.com:3002/song/detail?ids=1808465866")
                .then(
                  function(s) {
                    t.likeListPic = s.data.songs[0].al.picUrl;
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getSongList: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/user/playlist?uid=" +
                    this.sessionUid +
                    "&cookie=" +
                    this.sessionCookie
                )
                .then(
                  function(s) {
                    t.songLists = s.data.playlist;
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            goList: function(t) {
              this.$router.push({ path: "/singleList", query: { id: t } });
            }
          }
        },
        E = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "myhome" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a("div", { staticClass: "card mx-4 rounded-5 bg-light" }, [
                  a("div", { staticClass: "row" }, [
                    a("div", { staticClass: "mx-auto pt-2" }, [
                      a("img", {
                        staticClass: "rounded-circle mb-3",
                        staticStyle: { width: "70px" },
                        attrs: {
                          src: this.detail.profile.avatarUrl,
                          alt: "Avatar"
                        }
                      })
                    ]),
                    t._v(" "),
                    a("h5", { staticClass: "mb-2" }, [
                      a("strong", [t._v(t._s(this.detail.profile.nickname))]),
                      a("span", { staticClass: "badge bg-dark ms-2" }, [
                        t._v("VIP")
                      ])
                    ]),
                    t._v(" "),
                    a(
                      "div",
                      { staticClass: "row d-flex justify-content-center g-0" },
                      [
                        a("div", { staticClass: "col-2" }, [
                          a("span", [
                            t._v("关注: " + t._s(this.detail.profile.follows))
                          ])
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "col-2" }, [
                          a("span", [
                            t._v("粉丝: " + t._s(this.detail.profile.followeds))
                          ])
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "col-2" }, [
                          a("span", [t._v("lv. " + t._s(this.detail.level))])
                        ])
                      ]
                    )
                  ])
                ]),
                t._v(" "),
                t._m(1),
                t._v(" "),
                a("div", { staticClass: "card mx-4 rounded-3 bg-light mt-3" }, [
                  a(
                    "div",
                    { staticClass: "row p-3 d-flex align-items-center g-0" },
                    [
                      a("div", { staticClass: "col-3" }, [
                        a("img", {
                          staticClass: "img-fluid",
                          attrs: { src: t.likeListPic, alt: "" }
                        })
                      ]),
                      t._v(" "),
                      t._m(2),
                      t._v(" "),
                      t._m(3)
                    ]
                  )
                ]),
                t._v(" "),
                t._m(4),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "card mx-4 rounded-3 bg-light mt-2 pb-2" },
                  [
                    a("div", { staticClass: "row p-3 " }, [
                      a("div", { staticClass: "col-5" }, [
                        a("span", { staticClass: "small" }, [
                          t._v("收藏歌单(" + t._s(t.songLists.length) + "个)")
                        ])
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-5" }),
                      t._v(" "),
                      t._m(5)
                    ]),
                    t._v(" "),
                    t._l(t.songLists, function(s) {
                      return a(
                        "div",
                        {
                          key: s,
                          staticClass:
                            "row ps-3 d-flex align-items-center g-0 mb-2",
                          on: {
                            click: function(a) {
                              return t.goList(s.id);
                            }
                          }
                        },
                        [
                          a("div", { staticClass: "col-2" }, [
                            a("img", {
                              staticClass: "img-fluid",
                              attrs: { src: s.coverImgUrl, alt: "" }
                            })
                          ]),
                          t._v(" "),
                          a("div", { staticClass: "col-10" }, [
                            a("span", { staticClass: "small" }, [
                              t._v(t._s(s.name))
                            ]),
                            t._v(" "),
                            a("br"),
                            t._v(" "),
                            a("span", { staticClass: "small text-muted" }, [
                              t._v(
                                t._s(s.trackCount) +
                                  "首,by " +
                                  t._s(s.creator.nickname)
                              )
                            ])
                          ])
                        ]
                      );
                    })
                  ],
                  2
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row  bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-bars" })
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-magnifying-glass" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this,
                s = t.$createElement,
                a = t._self._c || s;
              return a(
                "div",
                { staticClass: "card mx-4 rounded-4 bg-light mt-3" },
                [
                  a("div", { staticClass: "row p-2" }, [
                    a("div", { staticClass: "col-3" }, [
                      a(
                        "a",
                        {
                          staticClass: "text-decoration-none text-black",
                          attrs: { href: "#/recentPlay" }
                        },
                        [
                          a("i", { staticClass: "fa-solid fa-circle-play" }),
                          t._v(" "),
                          a("br"),
                          t._v(" "),
                          a("span", { staticClass: "small" }, [
                            t._v("最近播放")
                          ])
                        ]
                      )
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-3" }, [
                      a("i", { staticClass: "fa-solid fa-circle-arrow-down" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("本地")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-3" }, [
                      a("i", { staticClass: "fa-solid fa-cloud" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("云盘")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-3" }, [
                      a("i", { staticClass: "fa-solid fa-user-group" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("我的好友")])
                    ])
                  ]),
                  t._v(" "),
                  a("div", { staticClass: "row" }, [
                    a("div", { staticClass: "col-3" }, [
                      a("i", { staticClass: "fa-solid fa-star" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("收藏和赞")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-3" }, [
                      a("i", { staticClass: "fa-solid fa-podcast" }),
                      t._v(" "),
                      a("br"),
                      t._v(" "),
                      a("span", { staticClass: "small" }, [t._v("我的播客")])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-3" }),
                    t._v(" "),
                    a("div", { staticClass: "col-3" })
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-5" }, [
                s("span", { staticClass: "small" }, [this._v("我喜欢的音乐")]),
                this._v(" "),
                s("br"),
                this._v(" "),
                s("span", { staticClass: "small text-muted" }, [
                  this._v("257首")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-4" }, [
                s("i", { staticClass: "fa-solid fa-heart-pulse" }),
                this._v(" "),
                s("br"),
                this._v(" "),
                s("span", { staticClass: "small" }, [this._v("心动模式")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "row mt-3 ps-2 pe-2 g-1" }, [
                s("div", { staticClass: "col-4 border-end" }, [
                  s("span", { staticClass: "small" }, [this._v("创建歌单")])
                ]),
                this._v(" "),
                s("div", { staticClass: "col-4 border-end" }, [
                  s("span", { staticClass: "small" }, [this._v("收藏歌单")])
                ]),
                this._v(" "),
                s("div", { staticClass: "col-3" }, [
                  s("span", { staticClass: "small" }, [this._v("歌单助手")])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            }
          ]
        };
      var U = a("VU/8")(
          I,
          E,
          !1,
          function(t) {
            a("r9AB");
          },
          "data-v-eb34c70c",
          null
        ).exports,
        R = {
          render: function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          staticRenderFns: [
            function() {
              var t = this,
                s = t.$createElement,
                a = t._self._c || s;
              return a("div", { staticClass: "logIn" }, [
                a(
                  "div",
                  {
                    staticClass:
                      "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                  },
                  [
                    a("div", { staticClass: "container" }, [
                      a("div", { staticClass: "col-2" }, [
                        a(
                          "a",
                          { attrs: { href: "javascript:history.back()" } },
                          [a("i", { staticClass: "fa-solid fa-chevron-left" })]
                        )
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-8" }),
                      t._v(" "),
                      a("div", { staticClass: "col-2" }, [
                        t._v("\n              立即体验\n            ")
                      ])
                    ])
                  ]
                ),
                t._v(" "),
                a("div", { staticClass: "body" }, [
                  a("div", { staticClass: "d-grid gap-4 px-5 my-5 pt-5" }, [
                    a(
                      "a",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { href: "#/mobileLogin" }
                      },
                      [t._v("手机号登录")]
                    ),
                    t._v(" "),
                    a(
                      "a",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { href: "#/passwordLogin" }
                      },
                      [t._v("密码登录")]
                    ),
                    t._v(" "),
                    a("button", { staticClass: "btn btn-primary" }, [
                      t._v("邮箱登录")
                    ]),
                    t._v(" "),
                    a("span", { staticClass: "text-muted m-0 p-0" }, [
                      t._v("*我已同意服务条款，隐私政策")
                    ])
                  ]),
                  t._v(" "),
                  a("div", { staticClass: "iconList mt-5 pt-5" }, [
                    a("i", { staticClass: "fa-brands fa-qq fa-2x mx-2" }),
                    t._v(" "),
                    a("i", { staticClass: "fa-brands fa-weibo fa-2x mx-2" }),
                    t._v(" "),
                    a("i", { staticClass: "fa-brands fa-apple fa-2x mx-2" }),
                    t._v(" "),
                    a("br"),
                    t._v(" "),
                    a("span", { staticClass: "text-muted" }, [
                      t._v("登录遇到问题？")
                    ])
                  ])
                ])
              ]);
            }
          ]
        };
      var N = a("VU/8")(
          {
            name: "Login",
            components: {},
            mixins: [],
            props: {},
            data: function() {
              return {};
            },
            computed: {},
            watch: {},
            mounted: function() {},
            methods: {}
          },
          R,
          !1,
          function(t) {
            a("ilv7");
          },
          "data-v-473471bd",
          null
        ).exports,
        D = {
          name: "MobileLogIn",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { mobile: "", code: "", userId: "", isLogin: !1 };
          },
          computed: {},
          watch: {},
          mounted: function() {},
          methods: {
            getCode: function() {
              axios
                .get("https://www.terenzzzz.com:3002/captcha/sent?phone=" + this.mobile)
                .then(
                  function(t) {
                    console.log(t);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            logInWithCode: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/login/cellphone?phone=" +
                    this.mobile +
                    "&password=&captcha=" +
                    this.code
                )
                .then(
                  function(s) {
                    200 === s.status &&
                      (window.sessionStorage.setItem(
                        "userId",
                        s.data.account.id
                      ),
                      window.sessionStorage.setItem(
                        "userCookie",
                        encodeURIComponent(s.data.cookie)
                      ),
                      t.goIndex());
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            goIndex: function() {
              this.$router.push({ path: "/" }),
                "/" == this.$route.fullPath && window.location.reload();
            }
          }
        },
        V = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "mobileLogIn" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a("div", { staticClass: "card mx-3 py-5 mt-4 bg-light" }, [
                  a("h1", [t._v("手机登录")]),
                  t._v(" "),
                  a("div", { staticClass: "logInForm px-3 pt-5" }, [
                    a("form", { attrs: { action: "" } }, [
                      a("div", { staticClass: "row g-0 " }, [
                        t._m(1),
                        t._v(" "),
                        a("div", { staticClass: "col-8" }, [
                          a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.mobile,
                                expression: "mobile"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "text",
                              placeholder: "请输入您的手机号",
                              id: "mobile"
                            },
                            domProps: { value: t.mobile },
                            on: {
                              input: function(s) {
                                s.target.composing ||
                                  (t.mobile = s.target.value);
                              }
                            }
                          })
                        ])
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "row g-0 pt-4" }, [
                        t._m(2),
                        t._v(" "),
                        a("div", { staticClass: "col-8" }, [
                          a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.code,
                                expression: "code"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "text",
                              placeholder: "请输入您的验证码",
                              id: "code"
                            },
                            domProps: { value: t.code },
                            on: {
                              keyup: function(s) {
                                return !s.type.indexOf("key") &&
                                  t._k(s.keyCode, "enter", 13, s.key, "Enter")
                                  ? null
                                  : t.getLogIn.apply(null, arguments);
                              },
                              input: function(s) {
                                s.target.composing || (t.code = s.target.value);
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "row mx-3 py-5 g-2" }, [
                      a(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: t.getCode }
                        },
                        [t._v(" 获取验证码")]
                      ),
                      t._v(" "),
                      a(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: t.logInWithCode }
                        },
                        [t._v(" 登录")]
                      )
                    ])
                  ]),
                  t._v(" "),
                  t._m(3)
                ])
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }),
                    this._v(" "),
                    s("div", { staticClass: "col-2" })
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("label", { attrs: { for: "mobile" } }, [this._v("手机号:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("label", { attrs: { for: "code" } }, [this._v("验证码:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "iconList mt-5 pt-5 mb-5" }, [
                s("i", { staticClass: "fa-brands fa-qq fa-2x mx-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-brands fa-weibo fa-2x mx-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-brands fa-apple fa-2x mx-2" }),
                this._v(" "),
                s("br"),
                this._v(" "),
                s("span", { staticClass: "text-muted" }, [
                  this._v("登录遇到问题？")
                ])
              ]);
            }
          ]
        };
      var F = a("VU/8")(
          D,
          V,
          !1,
          function(t) {
            a("2C1O");
          },
          "data-v-21d47602",
          null
        ).exports,
        P = {
          name: "PasswordLogIn",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { mobile: "", password: "", isLogin: !1 };
          },
          computed: {},
          watch: {},
          mounted: function() {},
          methods: {
            getLogIn: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/login/cellphone?phone=" +
                    this.mobile +
                    "&password=" +
                    this.password
                )
                .then(
                  function(s) {
                    200 === s.status &&
                      ((t.isLogin = !0),
                      window.sessionStorage.setItem(
                        "userId",
                        s.data.account.id
                      ),
                      window.sessionStorage.setItem(
                        "userCookie",
                        encodeURIComponent(s.data.cookie)
                      ),
                      t.goIndex());
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            goIndex: function() {
              this.$router.push({ path: "/" }),
                "/" === this.$route.fullPath && window.location.reload();
            }
          }
        },
        A = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "mobileLogIn" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a("div", { staticClass: "card mx-3 py-5 mt-4 bg-light" }, [
                  a("h1", [t._v("手机登录")]),
                  t._v(" "),
                  a("div", { staticClass: "logInForm px-3 pt-5" }, [
                    a("form", { attrs: { action: "" } }, [
                      a("div", { staticClass: "row g-0 " }, [
                        t._m(1),
                        t._v(" "),
                        a("div", { staticClass: "col-8" }, [
                          a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.mobile,
                                expression: "mobile"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "text",
                              placeholder: "请输入您的手机号",
                              id: "mobile"
                            },
                            domProps: { value: t.mobile },
                            on: {
                              input: function(s) {
                                s.target.composing ||
                                  (t.mobile = s.target.value);
                              }
                            }
                          })
                        ])
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "row g-0 pt-4" }, [
                        t._m(2),
                        t._v(" "),
                        a("div", { staticClass: "col-8" }, [
                          a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.password,
                                expression: "password"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "password",
                              placeholder: "请输入您的密码",
                              id: "password",
                              autocomplete: "on"
                            },
                            domProps: { value: t.password },
                            on: {
                              keyup: function(s) {
                                return !s.type.indexOf("key") &&
                                  t._k(s.keyCode, "enter", 13, s.key, "Enter")
                                  ? null
                                  : t.getLogIn.apply(null, arguments);
                              },
                              input: function(s) {
                                s.target.composing ||
                                  (t.password = s.target.value);
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "row mx-3 py-5 g-2" }, [
                      a(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: t.getLogIn }
                        },
                        [t._v(" 登录")]
                      )
                    ])
                  ]),
                  t._v(" "),
                  t._m(3)
                ])
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }),
                    this._v(" "),
                    s("div", { staticClass: "col-2" })
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("label", { attrs: { for: "mobile" } }, [this._v("手机号:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("label", { attrs: { for: "password" } }, [this._v("密码:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "iconList mt-5 pt-5 mb-5" }, [
                s("i", { staticClass: "fa-brands fa-qq fa-2x mx-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-brands fa-weibo fa-2x mx-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-brands fa-apple fa-2x mx-2" }),
                this._v(" "),
                s("br"),
                this._v(" "),
                s("span", { staticClass: "text-muted" }, [
                  this._v("登录遇到问题？")
                ])
              ]);
            }
          ]
        };
      var B = a("VU/8")(
          P,
          A,
          !1,
          function(t) {
            a("cY0S");
          },
          "data-v-78a27dfd",
          null
        ).exports,
        q = {
          name: "RecentPlay",
          data: function() {
            return {
              recentSongs: [],
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie")
            };
          },
          mounted: function() {
            this.getRecentSongs();
          },
          methods: {
            getRecentSongs: function() {
              var t = this;
              axios
                .post(
                  "https://www.terenzzzz.com:3002/user/record?uid=" +
                    this.sessionUid +
                    "&type=1"
                )
                .then(
                  function(s) {
                    (t.recentSongs = s.data.weekData), console.log(s);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        j = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "recentPlay" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                t._m(1),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1" },
                  [
                    a(
                      "ul",
                      { staticClass: "list-unstyled " },
                      t._l(t.recentSongs, function(s) {
                        return a(
                          "li",
                          {
                            key: s,
                            on: {
                              click: function(a) {
                                return t.playSong(s.song.id);
                              }
                            }
                          },
                          [
                            a(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center mt-2 ps-2 pe-2 g-1"
                              },
                              [
                                a("div", { staticClass: "col-2" }, [
                                  a("img", {
                                    staticClass: "img-fluid",
                                    attrs: { src: s.song.al.picUrl, alt: "" }
                                  })
                                ]),
                                t._v(" "),
                                a(
                                  "div",
                                  { staticClass: "col-8 " },
                                  [
                                    a("span", { staticClass: "small" }, [
                                      t._v(t._s(s.song.name))
                                    ]),
                                    t._v(" "),
                                    a("br"),
                                    t._v(" "),
                                    t._l(s.song.ar, function(i) {
                                      return a(
                                        "span",
                                        {
                                          key: i,
                                          staticClass: "small text-muted me-2"
                                        },
                                        [
                                          t._v(
                                            t._s(i.name) +
                                              " - " +
                                              t._s(s.song.al.name)
                                          )
                                        ]
                                      );
                                    })
                                  ],
                                  2
                                ),
                                t._v(" "),
                                t._m(2, !0)
                              ]
                            )
                          ]
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    t._m(3)
                  ]
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n\t\t\t\t最近播放\n\t\t\t")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "row align-items-center px-4" }, [
                s("div", { staticClass: "col-4" }, [
                  s("i", { staticClass: "fa-solid fa-circle-play" }),
                  this._v(" "),
                  s("span", [this._v("播放全部")])
                ]),
                this._v(" "),
                s("div", { staticClass: "col-5" }),
                this._v(" "),
                s("div", { staticClass: "col-3" }, [
                  s("i", { staticClass: "fa-solid fa-arrow-down" })
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "clearRecentSongs" }, [
                s("i", { staticClass: "fa-solid fa-trash-can" }),
                this._v(" "),
                s("span", { staticClass: "small" }, [this._v("删除播放记录")])
              ]);
            }
          ]
        };
      var M = a("VU/8")(
          q,
          j,
          !1,
          function(t) {
            a("ZMlh");
          },
          "data-v-1dd58dc2",
          null
        ).exports,
        T = {
          name: "SongList",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { categories: [], allCategories: [], allShow: !1 };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getCategories();
          },
          methods: {
            getCategories: function() {
              var t = this;
              axios.post("https://www.terenzzzz.com:3002/playlist/hot").then(
                function(s) {
                  t.categories = s.data.tags.slice(0, 5);
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            getAllCategories: function() {
              var t = this;
              axios.post("https://www.terenzzzz.com:3002/playlist/hot").then(
                function(s) {
                  console.log(s),
                    (t.allCategories = s.data.tags.slice(5, 10)),
                    (t.allShow = !t.allShow);
                },
                function(t) {
                  console.log(t);
                }
              );
            }
          }
        },
        O = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "songList" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a("div", { staticClass: "category" }, [
                  a(
                    "div",
                    { staticClass: "row g-0" },
                    [
                      t._l(t.categories, function(s) {
                        return a("div", { key: s, staticClass: "col-2" }, [
                          a("span", [t._v(t._s(s.name))])
                        ]);
                      }),
                      t._v(" "),
                      a("div", { staticClass: "col-2" }, [
                        a("span", { on: { click: t.getAllCategories } }, [
                          a("i", { staticClass: "fa-solid fa-bars" })
                        ])
                      ])
                    ],
                    2
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.allShow,
                          expression: "allShow"
                        }
                      ],
                      staticClass: "row g-0  mt-1 border-bottom px-2"
                    },
                    t._l(t.allCategories, function(s) {
                      return a("div", { key: s, staticClass: "col-2" }, [
                        a("span", [t._v(t._s(s.name))])
                      ]);
                    }),
                    0
                  )
                ])
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n\t\t\t\t\t歌单广场\n\t\t\t\t")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            }
          ]
        };
      var H = a("VU/8")(
          T,
          O,
          !1,
          function(t) {
            a("M54U");
          },
          "data-v-6c9da84a",
          null
        ).exports,
        K = a("VU/8")(null, null, !1, null, null, null).exports,
        W = {
          name: "HistoryRecomend",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1,
              date: new Date().getDate()
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.correctMonth(), this.getHistoryList();
          },
          methods: {
            correctMonth: function() {
              this.month < 10 && (this.month = "0" + this.month);
            },
            getHistoryList: function() {
              axios
                .get(
                  "https://www.terenzzzz.com:3002/history/recommend/songs/detail?date=" +
                    this.year +
                    "-" +
                    this.month +
                    "-" +
                    this.date
                )
                .then(
                  function(t) {
                    console.log(t);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            }
          }
        },
        z = {
          render: function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "historyRecomend" }, [
                s(
                  "div",
                  {
                    staticClass:
                      "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                  },
                  [
                    s("div", { staticClass: "container" }, [
                      s("div", { staticClass: "col-2" }, [
                        s(
                          "a",
                          { attrs: { href: "javascript:history.back()" } },
                          [s("i", { staticClass: "fa-solid fa-chevron-left" })]
                        )
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-8" }, [
                        this._v("\n\t\t\t\t\t历史推荐\n\t\t\t\t")
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-2" }, [
                        s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                      ])
                    ])
                  ]
                )
              ]);
            }
          ]
        };
      var G = a("VU/8")(
          W,
          z,
          !1,
          function(t) {
            a("FSeG");
          },
          "data-v-3664ac34",
          null
        ).exports,
        J = {
          name: "RankBoard",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return { list: [] };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getList();
          },
          methods: {
            getList: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/toplist/detail").then(
                function(s) {
                  console.log(s), (t.list = s.data.list);
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            goBoardDetail: function(t, s) {
              this.$router.push({
                path: "/boardDetail",
                query: { boardId: t }
              });
            }
          }
        },
        Y = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "rankBoard" }, [
              t._m(0),
              t._v(" "),
              a(
                "div",
                { staticClass: "body" },
                t._l(t.list, function(s) {
                  return a(
                    "div",
                    {
                      key: s,
                      staticClass: "card mx-3 mb-3 bg-light",
                      on: {
                        click: function(a) {
                          return t.goBoardDetail(s.id);
                        }
                      }
                    },
                    [
                      a(
                        "div",
                        { staticClass: "row m-3 d-lex align-items-center" },
                        [
                          a("div", { staticClass: "col-3" }, [
                            a("img", {
                              staticClass: "img-fluid",
                              attrs: { src: s.coverImgUrl, alt: "" }
                            })
                          ]),
                          t._v(" "),
                          a("div", { staticClass: "col-6" }, [
                            a("span", [t._v(t._s(s.name))]),
                            t._v(" "),
                            a("br"),
                            t._v(" "),
                            a("span", { staticClass: "text-muted" }, [
                              t._v(t._s(s.updateFrequency))
                            ])
                          ])
                        ]
                      )
                    ]
                  );
                }),
                0
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n            排行榜\n        ")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            }
          ]
        };
      var X = a("VU/8")(
          J,
          Y,
          !1,
          function(t) {
            a("3iBX");
          },
          "data-v-755b1503",
          null
        ).exports,
        Z = {
          name: "BoardDetail",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              boardId: this.$route.query.boardId,
              songs: [],
              boardName: ""
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getListSongs();
          },
          methods: {
            getListSongs: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/playlist/detail?id=" + this.boardId
                )
                .then(
                  function(s) {
                    console.log(s),
                      (t.boardName = s.data.playlist.name),
                      (t.songs = s.data.playlist.tracks);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            }
          }
        },
        Q = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "boardDetail" }, [
              a(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  a("div", { staticClass: "container" }, [
                    t._m(0),
                    t._v(" "),
                    a("div", { staticClass: "col-8" }, [
                      t._v(
                        "\n                  " +
                          t._s(this.boardName) +
                          "\n               "
                      )
                    ]),
                    t._v(" "),
                    t._m(1)
                  ])
                ]
              ),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                t._m(2),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "row align-items-center mt-2 ps-2 pe-2 g-1" },
                  [
                    a(
                      "ul",
                      { staticClass: "list-unstyled " },
                      t._l(t.songs, function(s, i) {
                        return a("li", { key: s }, [
                          a(
                            "div",
                            {
                              staticClass:
                                "row align-items-center mt-2 ps-2 pe-2 g-1"
                            },
                            [
                              a("div", { staticClass: "col-1" }, [
                                t._v(t._s(i + 1) + ".")
                              ]),
                              t._v(" "),
                              a("div", { staticClass: "col-2" }, [
                                a("img", {
                                  staticClass: "img-fluid",
                                  attrs: { src: s.al.picUrl, alt: "" }
                                })
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "col-7 " },
                                [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.al.name))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  t._l(s.ar, function(s) {
                                    return a(
                                      "span",
                                      {
                                        key: s,
                                        staticClass: "small text-muted m-1"
                                      },
                                      [t._v(t._s(s.name))]
                                    );
                                  })
                                ],
                                2
                              ),
                              t._v(" "),
                              t._m(3, !0)
                            ]
                          )
                        ]);
                      }),
                      0
                    )
                  ]
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("a", { attrs: { href: "javascript:history.back()" } }, [
                  s("i", { staticClass: "fa-solid fa-chevron-left" })
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "row align-items-center pt-3 ps-4 pe-4" },
                [
                  s("div", { staticClass: "col-4" }, [
                    s("i", { staticClass: "fa-solid fa-circle-play" }),
                    this._v(" "),
                    s("span", [this._v("播放全部")])
                  ]),
                  this._v(" "),
                  s("div", { staticClass: "col-5" }),
                  this._v(" "),
                  s("div", { staticClass: "col-3" }, [
                    s("i", { staticClass: "fa-solid fa-arrow-down" })
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            }
          ]
        };
      var tt = a("VU/8")(
          Z,
          Q,
          !1,
          function(t) {
            a("b2aL");
          },
          "data-v-1e5f7dc0",
          null
        ).exports,
        st = {
          name: "SearchResult",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              keyword: this.$route.query.keyWord,
              typeShow: "用户",
              result: [],
              albums: [],
              singers: [],
              playLists: [],
              users: []
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.searchSong();
          },
          methods: {
            searchSong: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/cloudsearch?limit=50&keywords=" +
                    this.keyword
                )
                .then(
                  function(s) {
                    console.log(s),
                      (t.result = s.data.result.songs),
                      (t.typeShow = "单曲");
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            searchAlbum: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/cloudsearch?limit=50&type=10&keywords=" +
                    this.keyword
                )
                .then(
                  function(s) {
                    (t.albums = s.data.result.albums), (t.typeShow = "专辑");
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            searchSinger: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/cloudsearch?limit=50&type=100&keywords=" +
                    this.keyword
                )
                .then(
                  function(s) {
                    (t.singers = s.data.result.artists), (t.typeShow = "歌手");
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            searchList: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/cloudsearch?limit=50&type=1000&keywords=" +
                    this.keyword
                )
                .then(
                  function(s) {
                    console.log(s),
                      (t.playLists = s.data.result.playlists),
                      (t.typeShow = "歌单");
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            searchUser: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/cloudsearch?limit=50&type=1002&keywords=" +
                    this.keyword
                )
                .then(
                  function(s) {
                    console.log(s),
                      (t.users = s.data.result.userprofiles),
                      (t.typeShow = "用户");
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        at = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "searchResult" }, [
              t._m(0),
              t._v(" "),
              a(
                "div",
                { staticClass: "body" },
                [
                  a("div", { staticClass: "category" }, [
                    a("div", { staticClass: "row g-0" }, [
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.searchSong } },
                        [a("span", [t._v("单曲")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.searchAlbum } },
                        [a("span", [t._v("专辑")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.searchSinger } },
                        [a("span", [t._v("歌手")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.searchList } },
                        [a("span", [t._v("歌单")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.searchUser } },
                        [a("span", [t._v("用户")])]
                      )
                    ])
                  ]),
                  t._v(" "),
                  t._l(t.result, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "单曲" == t.typeShow,
                            expression: "typeShow == '单曲'"
                          }
                        ],
                        key: s,
                        staticClass: "card mb-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid",
                                attrs: { src: s.al.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [
                                  t._v(t._s(s.name) + " - " + t._s(s.al.name))
                                ]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.ar, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(1, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.albums, function(s, i) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "专辑" == t.typeShow,
                            expression: "typeShow == '专辑'"
                          }
                        ],
                        key: s,
                        staticClass: "card"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1"
                          },
                          [
                            a("div", { staticClass: "col-1" }, [
                              t._v(t._s(i + 1) + ".")
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-7" }, [
                              a("span", [t._v(t._s(s.name))]),
                              t._v(" "),
                              a("br"),
                              t._v(" "),
                              a(
                                "span",
                                { staticClass: "small text-muted m-1" },
                                [
                                  t._v(
                                    t._s(s.artist.name) + " " + t._s(s.company)
                                  )
                                ]
                              )
                            ]),
                            t._v(" "),
                            t._m(2, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.singers, function(s, i) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "歌手" == t.typeShow,
                            expression: "typeShow == '歌手'"
                          }
                        ],
                        key: s,
                        staticClass: "card mb-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1"
                          },
                          [
                            a("div", { staticClass: "col-1" }, [
                              t._v(t._s(i + 1) + ".")
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-3" }, [
                              a("img", {
                                staticClass: "img-fluid rounded-circle",
                                attrs: { src: s.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-5" }, [
                              a("span", [t._v(t._s(s.name))])
                            ]),
                            t._v(" "),
                            t._m(3, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.playLists, function(s, i) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "歌单" == t.typeShow,
                            expression: "typeShow == '歌单'"
                          }
                        ],
                        key: s,
                        staticClass: "row align-items-center mt-2 ps-1 pe-1 g-1"
                      },
                      [
                        a("div", { staticClass: "col-1" }, [
                          t._v(" " + t._s(i + 1) + ". ")
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "col-2" }, [
                          a("img", {
                            staticClass: "img-fluid",
                            attrs: { src: s.coverImgUrl, alt: "" }
                          })
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "col-9 " }, [
                          a("span", { staticClass: "small" }, [
                            t._v(t._s(s.name))
                          ]),
                          t._v(" "),
                          a("br"),
                          t._v(" "),
                          a("span", { staticClass: "small text-muted me-2" }, [
                            t._v(
                              t._s(s.trackCount) +
                                "首音乐  by " +
                                t._s(s.creator.nickname)
                            )
                          ])
                        ])
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.users, function(s, i) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "用户" == t.typeShow,
                            expression: "typeShow == '用户'"
                          }
                        ],
                        key: s,
                        staticClass: "card mb-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1"
                          },
                          [
                            a("div", { staticClass: "col-1" }, [
                              t._v(t._s(i + 1) + ".")
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid rounded-circle",
                                attrs: { src: s.avatarUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "col-6" }, [
                              a("span", [t._v(t._s(s.nickname))])
                            ]),
                            t._v(" "),
                            t._m(4, !0)
                          ]
                        )
                      ]
                    );
                  })
                ],
                2
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n              搜索结果\n            ")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("button", { staticClass: "btn btn-primary btn-sm" }, [
                  s("i", { staticClass: "fa-solid fa-plus" }),
                  this._v("关注")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-3" }, [
                s("button", { staticClass: "btn btn-primary btn-sm" }, [
                  s("i", { staticClass: "fa-solid fa-plus" }),
                  this._v("关注")
                ])
              ]);
            }
          ]
        };
      var it = a("VU/8")(
          st,
          at,
          !1,
          function(t) {
            a("zFDm");
          },
          "data-v-39a010ee",
          null
        ).exports,
        et = {
          name: "AllNewSong",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              allsongs: [],
              cns: [],
              eas: [],
              krs: [],
              jps: [],
              newShow: "全部"
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.newAll();
          },
          methods: {
            newAll: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/top/song?type=0").then(
                function(s) {
                  (t.allsongs = s.data.data), (t.newShow = "全部");
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            newCn: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/top/song?type=7").then(
                function(s) {
                  (t.cns = s.data.data), (t.newShow = "华语");
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            newEa: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/top/song?type=96").then(
                function(s) {
                  console.log(s), (t.eas = s.data.data), (t.newShow = "欧美");
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            newJp: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/top/song?type=8").then(
                function(s) {
                  console.log(s), (t.jps = s.data.data), (t.newShow = "日本");
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            newKr: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/top/song?type=16").then(
                function(s) {
                  console.log(s), (t.krs = s.data.data), (t.newShow = "韩国");
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        nt = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", [
              t._m(0),
              t._v(" "),
              a(
                "div",
                { staticClass: "body" },
                [
                  a("div", { staticClass: "category" }, [
                    a("div", { staticClass: "row g-0" }, [
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.newAll } },
                        [a("span", [t._v("全部")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.newCn } },
                        [a("span", [t._v("华语")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.newEa } },
                        [a("span", [t._v("欧美")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.newJp } },
                        [a("span", [t._v("日本")])]
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-2", on: { click: t.newKr } },
                        [a("span", [t._v("韩国")])]
                      )
                    ])
                  ]),
                  t._v(" "),
                  t._l(t.allsongs, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "全部" == t.newShow,
                            expression: "newShow == '全部'"
                          }
                        ],
                        key: s,
                        staticClass: "card m-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.album.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [t._v(t._s(s.name))]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.artists, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(1, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.cns, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "华语" == t.newShow,
                            expression: "newShow == '华语'"
                          }
                        ],
                        key: s,
                        staticClass: "card m-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.album.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [t._v(t._s(s.name))]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.artists, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(2, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.eas, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "欧美" == t.newShow,
                            expression: "newShow == '欧美'"
                          }
                        ],
                        key: s,
                        staticClass: "card m-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.album.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [t._v(t._s(s.name))]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.artists, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(3, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.jps, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "日本" == t.newShow,
                            expression: "newShow == '日本'"
                          }
                        ],
                        key: s,
                        staticClass: "card m-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.album.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [t._v(t._s(s.name))]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.artists, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(4, !0)
                          ]
                        )
                      ]
                    );
                  }),
                  t._v(" "),
                  t._l(t.krs, function(s) {
                    return a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "韩国" == t.newShow,
                            expression: "newShow == '韩国'"
                          }
                        ],
                        key: s,
                        staticClass: "card m-2"
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "row align-items-center my-2 ps-2 pe-2 g-1",
                            on: {
                              click: function(a) {
                                return t.playSong(s.id);
                              }
                            }
                          },
                          [
                            a("div", { staticClass: "col-2" }, [
                              a("img", {
                                staticClass: "img-fluid ",
                                attrs: { src: s.album.picUrl, alt: "" }
                              })
                            ]),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "col-8" },
                              [
                                a("span", [t._v(t._s(s.name))]),
                                t._v(" "),
                                a("br"),
                                t._v(" "),
                                t._l(s.artists, function(s) {
                                  return a(
                                    "span",
                                    {
                                      key: s,
                                      staticClass: "small text-muted m-1"
                                    },
                                    [t._v(t._s(s.name))]
                                  );
                                })
                              ],
                              2
                            ),
                            t._v(" "),
                            t._m(5, !0)
                          ]
                        )
                      ]
                    );
                  })
                ],
                2
              )
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n\t\t\t\t\t新歌推荐\n\t\t\t\t")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            }
          ]
        };
      var ot = a("VU/8")(
          et,
          nt,
          !1,
          function(t) {
            a("yebB");
          },
          "data-v-04691990",
          null
        ).exports,
        lt = {
          name: "PlayView",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              sessionUid: sessionStorage.getItem("userId"),
              sessionCookie: sessionStorage.getItem("userCookie"),
              isplaying: !0,
              songId: this.$route.query.id,
              songUrl: "",
              songDetail: [],
              songLyric: [],
              isLryShow: !1
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getSongUrl(), this.getSongDetail(), this.getSongLyric();
          },
          methods: {
            play: function() {
              this.$refs.audio.paused
                ? (this.$refs.audio.play(), (this.isplaying = !0))
                : (this.$refs.audio.pause(), (this.isplaying = !1));
            },
            getSongUrl: function() {
              var t = this;
              axios
                .get(
                  "https://www.terenzzzz.com:3002/song/url?id=" +
                    this.songId +
                    "&cookie=" +
                    this.sessionCookie
                )
                .then(
                  function(s) {
                    t.songUrl = s.data.data[0].url;
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getSongDetail: function() {
              var t = this;
              axios
                .get("https://www.terenzzzz.com:3002/song/detail?ids=" + this.songId)
                .then(
                  function(s) {
                    console.log(s), (t.songDetail = s.data.songs[0]);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            getSongLyric: function() {
              var t = this;
              axios.get("https://www.terenzzzz.com:3002/lyric?id=" + this.songId).then(
                function(s) {
                  t.songLyric = s.data.lrc.lyric;
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            fixLyric: function() {
              return this.songLyric.split(/[(\r\n)\r\n]+/).map(function(t, s) {
                var a = t.slice(1, 3),
                  i = t.slice(4, 6),
                  e = t.slice(7, 9),
                  n = t.slice(11, t.length);
                return (
                  console.log(a, i, e, n), { min: a, sec: i, mill: e, lrc: n }
                );
              });
            },
            changeLrcShow: function() {
              this.isLryShow = !this.isLryShow;
            }
          }
        },
        ct = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "playView" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a(
                  "div",
                  { staticClass: "info", on: { click: t.changeLrcShow } },
                  [
                    a("div", { staticClass: "row mt-2" }, [
                      a("div", { staticClass: "col-3" }),
                      t._v(" "),
                      a("div", { staticClass: "col-6" }, [
                        a("img", {
                          staticClass: "img-fluid",
                          attrs: { src: t.songDetail.al.picUrl, alt: "" }
                        })
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "col-3" })
                    ]),
                    t._v(" "),
                    a(
                      "div",
                      { staticClass: "row" },
                      [
                        a("span", { staticClass: "fw-bold mt-1" }, [
                          t._v(t._s(t.songDetail.name))
                        ]),
                        t._v(" "),
                        a("br"),
                        t._v(" "),
                        t._l(t.songDetail.ar, function(s) {
                          return a(
                            "span",
                            { key: s, staticClass: "small text-muted me-2" },
                            [t._v(t._s(s.name))]
                          );
                        })
                      ],
                      2
                    ),
                    t._v(" "),
                    a(
                      "div",
                      { staticClass: "musicLyric mt-4" },
                      [
                        a(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: 0 == t.isLryShow,
                                expression: "isLryShow==false"
                              }
                            ]
                          },
                          [t._v("点击查看歌词")]
                        ),
                        t._v(" "),
                        t._l(t.fixLyric(), function(s) {
                          return a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.isLryShow,
                                  expression: "isLryShow"
                                }
                              ],
                              key: s,
                              staticClass: "lrc"
                            },
                            [
                              t._v(
                                "\n            " + t._s(s.lrc) + "\n          "
                              )
                            ]
                          );
                        })
                      ],
                      2
                    )
                  ]
                ),
                t._v(" "),
                a("div", { staticClass: "navbar fixed-bottom bg-light" }, [
                  a(
                    "audio",
                    {
                      ref: "audio",
                      attrs: {
                        controls: "",
                        autoplay: "",
                        src: t.songUrl,
                        hidden: "true"
                      }
                    },
                    [
                      t._v(
                        "\n            Your browser does not support the audio element.\n        "
                      )
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass:
                        "row mx-auto d-flex align-items-center border-bottom"
                    },
                    [
                      a("div", { staticClass: "col-2 mb-1" }, [
                        a("img", {
                          staticClass: "img-fluid",
                          attrs: { src: t.songDetail.al.picUrl, alt: "" }
                        })
                      ]),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "col-4" },
                        [
                          a("span", [t._v(t._s(t.songDetail.name))]),
                          t._v(" "),
                          a("br"),
                          t._v(" "),
                          t._l(t.songDetail.ar, function(s) {
                            return a(
                              "span",
                              { key: s, staticClass: "small text-muted me-2" },
                              [t._v(t._s(s.name))]
                            );
                          })
                        ],
                        2
                      ),
                      t._v(" "),
                      a("div", { staticClass: "col-2" }, [
                        a("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.isplaying,
                              expression: "isplaying"
                            }
                          ],
                          staticClass: "fa-solid fa-circle-pause fa-2x",
                          on: { click: t.play }
                        }),
                        t._v(" "),
                        a("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 0 == t.isplaying,
                              expression: "isplaying == false"
                            }
                          ],
                          staticClass: "fa-solid fa-circle-play fa-2x",
                          on: { click: t.play }
                        })
                      ]),
                      t._v(" "),
                      t._m(1),
                      t._v(" "),
                      t._m(2)
                    ]
                  ),
                  t._v(" "),
                  a("div", { staticClass: "mx-auto mt-1" }, [
                    a("p", { staticClass: "text-muted" }, [
                      t._v("@Terence" + t._s(t.year))
                    ])
                  ])
                ])
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      s("span", [this._v(" 正在播放 ")])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", {
                        staticClass: "fa-solid fa-arrow-right-from-bracket"
                      })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-volume-high fa-2x" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-bars fa-lg" })
              ]);
            }
          ]
        };
      var rt = a("VU/8")(
          lt,
          ct,
          !1,
          function(t) {
            a("9V9I");
          },
          "data-v-3d8e52cf",
          null
        ).exports,
        dt = {
          name: "SingleList",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {
              listId: this.$route.query.id,
              listDetail: [],
              listSongs: []
            };
          },
          computed: {},
          watch: {},
          mounted: function() {
            this.getList();
          },
          methods: {
            getList: function() {
              var t = this;
              axios
                .get("https://www.terenzzzz.com:3002/playlist/detail?id=" + this.listId)
                .then(
                  function(s) {
                    (t.listDetail = s.data.playlist),
                      (t.listSongs = s.data.playlist.tracks);
                  },
                  function(t) {
                    console.log(t);
                  }
                );
            },
            playSong: function(t) {
              this.$router.push({ path: "/playView", query: { id: t } });
            }
          }
        },
        vt = {
          render: function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a("div", { staticClass: "singleList" }, [
              t._m(0),
              t._v(" "),
              a("div", { staticClass: "body" }, [
                a("div", { staticClass: "row mx-2 pb-2 border-bottom" }, [
                  a("div", { staticClass: "col-5" }, [
                    a("img", {
                      staticClass: "img-fluid rounded-4",
                      attrs: { src: t.listDetail.coverImgUrl, alt: "" }
                    })
                  ]),
                  t._v(" "),
                  a("div", { staticClass: "col-7" }, [
                    a("span", { staticClass: "fw-bold" }, [
                      t._v(t._s(t.listDetail.name))
                    ]),
                    t._v(" "),
                    a("br"),
                    t._v(" "),
                    a(
                      "div",
                      { staticClass: "row d-flex align-items-center mt-2 g-0" },
                      [
                        a("div", { staticClass: "col-2" }, [
                          a("img", {
                            staticClass: "img-fluid rounded-circle",
                            attrs: {
                              src: t.listDetail.creator.avatarUrl,
                              alt: ""
                            }
                          })
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "col-5 ms-1" }, [
                          a("span", { staticClass: "text-muted" }, [
                            t._v(t._s(t.listDetail.creator.nickname))
                          ])
                        ]),
                        t._v(" "),
                        t._m(1)
                      ]
                    ),
                    t._v(" "),
                    a("div", { staticClass: "row g-0 mt-3" }, [
                      a("div", { staticClass: "col-10" }, [
                        a("p", { staticClass: "p1" }, [
                          t._v(t._s(t.listDetail.description))
                        ])
                      ]),
                      t._v(" "),
                      t._m(2)
                    ])
                  ])
                ]),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "row align-items-center ps-2 pe-2 g-1" },
                  [
                    a(
                      "ul",
                      { staticClass: "list-unstyled " },
                      t._l(t.listSongs, function(s) {
                        return a("li", { key: s }, [
                          a(
                            "div",
                            {
                              staticClass:
                                "row align-items-center mt-2 ps-2 pe-2 g-1",
                              on: {
                                click: function(a) {
                                  return t.playSong(s.id);
                                }
                              }
                            },
                            [
                              a("div", { staticClass: "col-2" }, [
                                a("img", {
                                  staticClass: "img-fluid",
                                  attrs: { src: s.al.picUrl, alt: "" }
                                })
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "col-8 " },
                                [
                                  a("span", { staticClass: "small" }, [
                                    t._v(t._s(s.name))
                                  ]),
                                  t._v(" "),
                                  a("br"),
                                  t._v(" "),
                                  t._l(s.ar, function(s) {
                                    return a(
                                      "span",
                                      {
                                        key: s,
                                        staticClass: "small text-muted m-1"
                                      },
                                      [t._v(t._s(s.name))]
                                    );
                                  })
                                ],
                                2
                              ),
                              t._v(" "),
                              t._m(3, !0)
                            ]
                          )
                        ]);
                      }),
                      0
                    )
                  ]
                )
              ])
            ]);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                {
                  staticClass:
                    "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                },
                [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "col-2" }, [
                      s("a", { attrs: { href: "javascript:history.back()" } }, [
                        s("i", { staticClass: "fa-solid fa-chevron-left" })
                      ])
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-8" }, [
                      this._v("\n\t\t\t\t\t歌单\n\t\t\t\t")
                    ]),
                    this._v(" "),
                    s("div", { staticClass: "col-2" }, [
                      s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                    ])
                  ])
                ]
              );
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-4" }, [
                s("button", { staticClass: "btn btn-light btn-sm" }, [
                  s("i", { staticClass: "fa-solid fa-angle-right" })
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-solid fa-angle-right" })
              ]);
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "col-2" }, [
                s("i", { staticClass: "fa-brands fa-youtube pe-2" }),
                this._v(" "),
                s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
              ]);
            }
          ]
        };
      var ut = a("VU/8")(
          dt,
          vt,
          !1,
          function(t) {
            a("h/Oe");
          },
          "data-v-6a6c472c",
          null
        ).exports,
        ht = {
          render: function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          staticRenderFns: [
            function() {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "myLike" }, [
                s(
                  "div",
                  {
                    staticClass:
                      "row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top"
                  },
                  [
                    s("div", { staticClass: "container" }, [
                      s("div", { staticClass: "col-2" }, [
                        s(
                          "a",
                          { attrs: { href: "javascript:history.back()" } },
                          [s("i", { staticClass: "fa-solid fa-chevron-left" })]
                        )
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-8" }, [
                        this._v("\n\t\t\t\t\t最近播放\n\t\t\t\t")
                      ]),
                      this._v(" "),
                      s("div", { staticClass: "col-2" }, [
                        s("i", { staticClass: "fa-solid fa-ellipsis-vertical" })
                      ])
                    ])
                  ]
                )
              ]);
            }
          ]
        };
      var mt = a("VU/8")(
        {
          name: "MyLike",
          components: {},
          mixins: [],
          props: {},
          data: function() {
            return {};
          },
          computed: {},
          watch: {},
          mounted: function() {},
          methods: {}
        },
        ht,
        !1,
        function(t) {
          a("sOJU");
        },
        "data-v-3fb440b2",
        null
      ).exports;
      i.default.use(r.a);
      var pt = new r.a({
          routes: [
            { path: "/", name: "Index", component: k },
            { path: "/recomend", name: "Recomend", component: $ },
            { path: "/myhome", name: "Myhome", component: U },
            { path: "/login", name: "Login", component: N },
            { path: "/mobileLogin", name: "MobileLogIn", component: F },
            { path: "/passwordLogIn", name: "PasswordLogIn", component: B },
            { path: "/recentPlay", name: "RecentPlay", component: M },
            { path: "/songList", name: "SongList", component: H },
            { path: "/testSide", name: "TestSide", component: K },
            { path: "/historyRecomend", name: "HistoryRecomend", component: G },
            { path: "/rankBoard", name: "RankBoard", component: X },
            { path: "/searchResult", name: "SearchResult", component: it },
            { path: "/boardDetail", name: "BoardDetail", component: tt },
            { path: "/allNewSong", name: "AllNewSong", component: ot },
            { path: "/playView", name: "PlayView", component: rt },
            { path: "/singleList", name: "SingleList", component: ut },
            { path: "/myLike", name: "MyLike", component: mt }
          ]
        }),
        ft = a("zL8q"),
        _t = a.n(ft);
      a("tvR6");
      i.default.use(_t.a),
        (i.default.config.productionTip = !1),
        new i.default({
          el: "#app",
          router: pt,
          components: { App: c },
          template: "<App/>"
        });
    },
    Xc4w: function(t, s) {},
    ZMlh: function(t, s) {},
    aE1z: function(t, s) {},
    b2aL: function(t, s) {},
    bwZG: function(t, s) {},
    cY0S: function(t, s) {},
    "h/Oe": function(t, s) {},
    hGV1: function(t, s) {},
    ilv7: function(t, s) {},
    k5oS: function(t, s) {},
    nhde: function(t, s) {},
    r9AB: function(t, s) {},
    rDWK: function(t, s) {},
    sOJU: function(t, s) {},
    tvR6: function(t, s) {},
    u7EU: function(t, s) {},
    wOOe: function(t, s) {},
    yebB: function(t, s) {},
    zFDm: function(t, s) {}
  },
  ["NHnr"]
);
//# sourceMappingURL=app.673b0d98a2b0813b930d.js.map
