const loadSchema = require(".")
const path = require("path")

describe("loadSchema", () => {
  it("loads YAML from file", () => {
    const filePath = path.join(__dirname, "./fixture.yml")
    const result = loadSchema(filePath)
    expect(result).toEqual([{ type: "Page", fields: { title: "String" } }])
  })
})
