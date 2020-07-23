module.exports = schema => {
  let typeDefs = ""

  schema.map(type => {
    typeDefs += `
type ${type.type}${type.node ? " implements Node" : ""} @infer {
  ${Object.entries(type.fields)
    .map(data => `${data[0]}: ${data[1]}${data[1] === "File" ? " @fileByRelativePath" : ""}`)
    .join("\n  ")}
}
      `
  })

  return typeDefs
}
