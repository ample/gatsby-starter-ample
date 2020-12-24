const path = require("path")

const getContentType = item => item.sys.contentType.sys.id

const getPageLayout = item => getContentType(item).replace("page_", "")

const getBlockTypeName = item => getContentType(item).replace("block_", "component-")

const seoFields = {
  title: "text",
  description: "text",
  image_src: "file",
  og: (item, api) => {
    const cfg = {
      title: (item, api) => api.getValueByType.text(item, "og_title"),
      description: (item, api) => api.getValueByType.text(item, "og_description"),
      image: (item, api) => api.getValueByType.file(item, "og_image")
    }
    return api.processItem(item, cfg)
  },
  twitter: (item, api) => {
    const cfg = {
      title: (item, api) => api.getValueByType.text(item, "twitter_title"),
      description: (item, api) => api.getValueByType.text(item, "twitter_description"),
      image: (item, api) => api.getValueByType.file(item, "twitter_image"),
      card: (item, api) => api.getValueByType.text(item, "twitter_card")
    }
    return api.processItem(item, cfg)
  }
}

const blockFields = {
  body: "text",
  config: (item, api) => {
    const cfg = {
      margin_bottom: "text",
      text_align: "text",
      width: "text"
    }
    return api.processItem(item, cfg)
  },
  image_src: "file",
  label: "text",
  margin_bottom: "text",
  src: "text",
  template: item => getBlockTypeName(item),
  title: "text",
  url: "text"
}

const nestableBlockFields = {
  ...blockFields,
  blocks: [{ ...blockFields, blocks: [blockFields] }]
}

module.exports = {
  driver: "contentful",
  models: [
    {
      id: "page_basic,page_flexible",
      dir: path.join(__dirname, "src/content/pages-test"),
      filename: "slug",
      fields: {
        model: () => "Page",
        title: "text",
        slug: "text",
        published: () => true,
        layout: item => item.sys.contentType.sys.id.replace("page_", ""),
        exclude_from_sitemap: "text",
        layout_basic: (item, api) => {
          if (getPageLayout(item) !== "basic") return {}
          const cfg = {
            heading: "text",
            body: "text"
          }
          return api.processItem(item, cfg)
        },
        layout_flexible: (item, api) => {
          if (getPageLayout(item) !== "flexible") return {}
          const cfg = {
            blocks: [nestableBlockFields]
          }
          return api.processItem(item, cfg)
        },
        seo: seoFields
      }
    },
    {
      id: "form",
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
