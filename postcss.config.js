module.exports = [
  require("postcss-normalize"),
  require("postcss-responsive-type"),
  require("postcss-pxtorem")({
    mediaQuery: true,
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
    stage: 2
  }),
  require("autoprefixer")({
    grid: "autoplace"
  })
]
