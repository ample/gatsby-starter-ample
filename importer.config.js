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
      id: "form",
      name: "Form",
      dir: path.join(__dirname, "src/content/forms"),
      filename: "id",
      fields: {
        model: () => "Form",
        id: "sys",
        title: "text",
        button_label: "text",
        field_groups: [
          {
            title: "text",
            heading: "text",
            fields: [
              {
                title: "text",
                type: "text",
                label: "text",
                name: "text",
                required: "text",
                text_appearance: "text",
                text_validation: "text",
                text_placeholder: "text",
                select_options: "text",
                select_appearance: "text",
                width: "text",
                solo: "text"
              }
            ]
          }
        ]
      }
    },
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
