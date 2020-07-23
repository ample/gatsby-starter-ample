const fs = require("fs")
const yaml = require("js-yaml")

exports.createSchemaCustomization = ({ actions }) => {
  try {
    const schemaFile = "./schema.yml"
    const doc = yaml.safeLoad(fs.readFileSync(schemaFile, "utf8"))
    let typeDefs = ""

    doc.map(type => {
      typeDefs += `
        type ${type.type}${type.node ? " implements Node" : ""} @infer {
          ${Object.entries(type.fields)
            .map(
              data => `${data[0]}: ${data[1]}${data[1] === "File" ? " @fileByRelativePath" : ""}`
            )
            .join("\n")}
        }
      `
    })
    actions.createTypes(typeDefs)
  } catch (e) {
    console.error(e)
  }
}
