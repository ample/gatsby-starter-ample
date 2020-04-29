const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      pages: allMarkdownRemarkPage(filter: { slugPath: { ne: "index" } }) {
        edges {
          node {
            id
            slugPath
          }
        }
      }
    }
  `).then(result => {
    result.data.pages.edges.map(({ node }) => {
      actions.createPage({
        path: node.slugPath,
        component: path.join(__dirname, "../../src/templates/page/adapter.js"),
        context: {
          id: node.id
        }
      })
    })
  })
}
