const lodash = require("lodash")

const getFieldDef = require("./get-field-dev")

// TODOS:

//   1. Don't register maps in the type definition (remove null objects from fields list) -- fix failing spec
//   2. Get the form relationship working
//   3. Add docs to README in schema plugin
//   4. Get build passing
//   5. Move code into Vigilant repo

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
