const find = require("lodash/find")

const loadSchema = require("./lib/load-schema")
const parseSchema = require("./lib/parse-schema")
const extractMappings = require("./lib/extract-mappings")

exports.createSchemaCustomization = ({ actions, getNodesByType, schema }) => {
  try {
    // Load the schema
    const schemaData = loadSchema("./schema.yml")

    // Add explicit type definitions, omitting mappings.
    const typeDefs = parseSchema(schemaData)
    if (typeDefs) actions.createTypes(typeDefs)

    // Add resolvers for mapping definitions. First, extract the mapped fields
    // for each type, then loop through the appropriate types ...
    const objectTypeDefs = extractMappings(schemaData).map(def => {
      // Store reference to build fields. We do this here so we don't have to
      // inject dependencies down the stack into the helper methods in this
      // plugin.
      const fields = {}
      // Build field object. This looks for an object of the appropriate type by
      // matching the filePath field's value, which is set by
      // gatsby-remark-ample.
      def.fields.map(f => {
        fields[f.name] = {
          type: f.type,
          resolve: source => {
            // If there is no value, simply return null.
            if (!source[f.name] || source[f.name].length === 0) return null
            // Otherwise, find the node by the filePath attribute (set by
            // gatsby-remark-ample), and return the object.
            return find(getNodesByType(f.type), obj => obj.filePath === source[f.name])
          }
        }
      })

      // When the field configs are built, we can then build the object type,
      // which is the result returned to the array we're creating by mapping
      // through the extracted mappings.
      return schema.buildObjectType({
        name: def.name,
        interfaces: def.interfaces || [],
        fields: fields
      })
    })

    // When we have all the mapping types build, we can then tell Gatsby about
    // the type definitions.
    actions.createTypes(objectTypeDefs)
  } catch (e) {
    console.error(e)
  }
}
