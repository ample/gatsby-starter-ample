module.exports = schema => {
  let typeDefs = []

  schema.map(type => {
    const fields = Object.entries(type.fields)
    const mappingFields = fields
      .filter(f => typeof f[1] === "object" && f[1].type === "map")
      .map(field => {
        let [key, value] = field
        return { name: key, type: value.name }
      })

    if (mappingFields.length > 0) {
      typeDefs.push({
        name: type.type,
        interfaces: type.node ? ["Node"] : null,
        fields: mappingFields
      })
    }
  })

  return typeDefs
}
