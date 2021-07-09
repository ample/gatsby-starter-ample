module.exports = [
  require("postcss-normalize"),
  require("rfs")({
    factor: 5
  }),
  require("postcss-pxtorem")({
    mediaQuery: false,
    propWhiteList: [],
    replace: true,
    rootValue: 16
  }),
  require("postcss-preset-env")({
    features: {
      "custom-properties": {
        preserve: true,
        warnings: true
      }
    },
    stage: 1
  }),
  require("autoprefixer")({
    grid: "autoplace"
  }),
  require("postcss-em-media-query"),
  require("postcss-sort-media-queries")({
    sort: "mobile-first"
  })
]
