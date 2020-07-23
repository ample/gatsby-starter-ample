module.exports = schema => {
  let typeDefs = ""

  schema.map(type => {
    typeDefs += `
type ${type.type}${type.node ? " implements Node" : ""} @infer {
  ${Object.entries(type.fields)
    .map(data => {
      let [key, value] = data
      // Convert long-form syntax to appropriate GraphQL types.
      if (typeof value === "object") {
        value = value.name
        if (data[1].type.toLowerCase() === "array") value = `[${data[1].name}]`
      }
      // Append directives.
      if (value === "File") value += " @fileByRelativePath"
      return `${key}: ${value}`
    })
    .join("\n  ")}
}
      `
  })

  return typeDefs
}
