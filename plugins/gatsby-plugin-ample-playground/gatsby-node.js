const path = require("path")

exports.createPages = ({ graphql, actions }, pluginOptions = {}) => {
  if (pluginOptions.disable) return

  const pathPrefix = "__playground__"
  const templatePathPrefix = `${pathPrefix}/templates`

  return graphql(`
    {
      templates: allMdx(
        filter: { fileAbsolutePath: { regex: "/src/templates/.*/playground.mdx/" } }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    // Create a playground for each template.
    result.data.templates.edges.map(({ node: template }) => {
      const filePath = template.fileAbsolutePath.split("src/templates/").pop()
      actions.createPage({
        path: `${templatePathPrefix}/${path.dirname(filePath)}`,
        component: path.join(__dirname, "./src/templates/template/index.js"),
        context: {
          id: template.id
        }
      })
    })

    // Create templates list page.
    actions.createPage({
      path: `/${templatePathPrefix}`,
      component: path.join(__dirname, "./src/templates/template-list/index.js"),
      context: { pathPrefix: templatePathPrefix }
    })

    // Create components playground.
    actions.createPage({
      path: `/${pathPrefix}/components`,
      component: path.join(__dirname, "./src/templates/components/index.js")
    })
  })
}
