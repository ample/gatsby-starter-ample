const path = require("path")

module.exports = {
  driver: "contentful",
  models: [
    // {
    //   id: "page",
    //   dir: path.join(__dirname, "tmp/pages"),
    //   filename: "slug",
    //   // content: "body",
    //   fields: {
    //     id: "System",
    //     title: "Text",
    //     slug: "Text",
    //     body: "Text",
    //     image: "File"
    //   }
    // }
    {
      id: "redirect",
      name: "Redirect",
      dir: path.join(__dirname, "src/content/redirects"),
      filename: "title",
      fields: {
        // id: "System",
        title: "Text",
        destination: "Text",
        permanent: "Text",
        force: "Text"
      }
    }
  ]
}
