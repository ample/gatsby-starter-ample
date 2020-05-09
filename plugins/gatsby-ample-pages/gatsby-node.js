const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      pages: allPage(filter: { slugPath: { ne: "index" } }) {
        edges {
          node {
            id
            slugPath
          }
        }
      }
    }
  `).then(result => {
    result.data.pages.edges.map(({ node: page }) => {
      actions.createPage({
        path: page.slugPath,
        component: path.resolve("./src/templates/page/adapter.js"),
        context: {
          id: page.id
        }
      })
    })
  })
}
