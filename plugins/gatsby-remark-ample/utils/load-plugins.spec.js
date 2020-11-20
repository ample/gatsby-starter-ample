const path = require("path")

const loadPlugins = require("./load-plugins")

describe("loadPlugins()", () => {
  it("returns the base object when it can not find the right file", () => {
    const plugins = [{ resolve: path.join(__dirname) }]
    const result = loadPlugins(plugins)
    expect(result).toEqual({ initNode: [] })
  })
  it("loads the necessary functions, using a remark-plugin.js file", () => {
    const plugins = [{ resolve: path.join(__dirname, "__fixtures__") }]
    const result = loadPlugins(plugins)
    const func = require("./__fixtures__/remark-plugin")
    expect(result).toEqual({ initNode: [func.initNode] })
  })
})
