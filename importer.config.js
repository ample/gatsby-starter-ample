const path = require("path")

module.exports = {
  driver: "contentful",
  models: [
    {
      id: "page",
      dir: path.join(__dirname, "tmp/pages"),
      filename: "slug",
      // content: "body",
      fields: {
        id: "System",
        title: "String",
        slug: "String",
        body: "String",
        image: "File"
      }
    }
  ]
}
