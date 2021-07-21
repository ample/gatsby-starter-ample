module.exports = [
  require("postcss-normalize"),
  require("rfs")({
    twoDimensional: true
  }),
  require("postcss-pxtorem")({
    mediaQuery: false,
    propWhiteList: [],
    replace: true,
    rootValue: 16
  }),
  require("postcss-preset-env")({
    autoprefixer: { grid: true },
    stage: 1
  }),
  require("postcss-em-media-query"),
  require("postcss-sort-media-queries")({
    sort: "mobile-first"
  })
]
