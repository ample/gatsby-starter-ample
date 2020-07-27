const lodash = require("lodash")

const getFieldDef = require("./get-field-dev")

const getTypeDef = type => {
  return `
type ${type.type}${type.node ? " implements Node" : ""} @infer {
  ${lodash.compact(Object.entries(type.fields).map(data => getFieldDef(...data))).join("\n  ")}
}`
}

/**
 * Given a schema object, convert it to a GraphQL string of type definitions.
 */
module.exports = schema => schema.map(getTypeDef).join("\n")
