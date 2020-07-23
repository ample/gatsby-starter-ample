const loadSchema = require("./lib/load-schema")
const parseSchema = require("./lib/parse-schema")

exports.createSchemaCustomization = ({ actions }) => {
  try {
    const schema = loadSchema("./schema.yml")
    const typeDefs = parseSchema(schema)
    if (typeDefs) actions.createTypes(typeDefs)
  } catch (e) {
    console.error(e)
  }
}
