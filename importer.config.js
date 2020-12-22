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
    //     id: "sys",
    //     title: "text",
    //     slug: "text",
    //     body: "text",
    //     image: "File"
    //   }
    // }
    {
      id: "redirect",
      name: "Redirect",
      dir: path.join(__dirname, "src/content/redirects"),
      filename: "title",
      fields: {
        model: () => "Redirect",
        title: "text",
        destination: "text",
        permanent: "text",
        force: "text"
      }
    }
  ]
}
