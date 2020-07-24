const loadSchema = require("../load-schema")
const extractMappings = require(".")
const path = require("path")

let schema

beforeEach(() => {
  schema = loadSchema(path.join(__dirname, "./fixture.yml"))
})

describe("extractMappings", () => {
  it("extracts a single map", () => {
    const result = extractMappings(schema)
    const expResult = [
      {
        name: "Page",
        interfaces: ["Node"],
        fields: [
          {
            name: "component_map",
            type: "Component"
          }
        ]
      }
    ]
    expect(result).toEqual(expResult)
  })
})
