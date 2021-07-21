const babelJestRequire = require("babel-jest")
const babelJest = babelJestRequire.__esModule ? babelJestRequire.default : babelJestRequire

const babelOptions = {
  presets: ["babel-preset-gatsby"]
}

module.exports = babelJest.createTransformer(babelOptions)
