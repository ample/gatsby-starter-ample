const path = require("path")

exports.createPages = ({ graphql, actions }, pluginOptions = {}) => {
  if (pluginOptions.disable) return

  const pathPrefix = "__playground__"
  const templatePathPrefix = `${pathPrefix}/templates`

  return graphql(`
    {
      components: allMdx(
        filter: { fileAbsolutePath: { regex: "//src/components/.*/playground.mdx/" } }
        sort: { fields: [fileAbsolutePath], order: ASC }
      ) {
        edges {
          node {
            body
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }

      templates: allMdx(
        filter: { fileAbsolutePath: { regex: "/src/templates/.*/playground.mdx/" } }
        sort: { fields: [fileAbsolutePath], order: ASC }
      ) {
        edges {
          node {
            fileAbsolutePath
            body
            frontmatter {
              title
            }
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
          template: template
        }
      })
    })

    // Create templates list page.
    actions.createPage({
      path: `/${templatePathPrefix}`,
      component: path.join(__dirname, "./src/templates/template-list/index.js"),
      context: {
        pathPrefix: templatePathPrefix,
        templates: result.data.templates.edges.map(({ node }) => node)
      }
    })

    // Create components playground.
    actions.createPage({
      path: `/${pathPrefix}/components`,
      component: path.join(__dirname, "./src/templates/components/index.js"),
      context: {
        components: result.data.components.edges.map(({ node }) => node)
      }
    })
  })
}
