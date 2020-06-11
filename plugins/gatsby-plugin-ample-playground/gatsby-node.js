const path = require("path")
// const lodash = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const pathPrefix = "__playground__"

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
    result.data.templates.edges.map(({ node: template }) => {
      const filePath = template.fileAbsolutePath.split("src/templates/").pop()
      actions.createPage({
        path: `${pathPrefix}/templates/${path.dirname(filePath)}`,
        component: path.join(__dirname, "./src/templates/template/index.js"),
        context: {
          id: template.id
        }
      })
    })

    actions.createPage({
      path: `/${pathPrefix}/components`,
      component: path.join(__dirname, "./src/templates/components/index.js")
    })
  })
}
