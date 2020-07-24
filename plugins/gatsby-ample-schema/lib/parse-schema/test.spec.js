const loadSchema = require("../load-schema")
const parseSchema = require(".")
const path = require("path")

let schema

beforeEach(() => {
  schema = loadSchema(path.join(__dirname, "./fixture.yml"))
})

describe("parseSchema", () => {
  it("loads the simple component correctly", () => {
    const result = parseSchema(schema)
    const expCompResult = `
type Component @infer {
  title: String
}`
    expect(result.includes(expCompResult)).toEqual(true)
  })
  it("adds node and image appendix, and skips maps", () => {
    const result = parseSchema(schema)
    const expCompResult = `
type Page implements Node @infer {
  title: String
  image: File @fileByRelativePath
  components: [Component]
  components_exp: [Component]
}`
    expect(result.includes(expCompResult)).toEqual(true)
  })
})
