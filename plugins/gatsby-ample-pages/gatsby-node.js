const path = require("path")
const getPagePath = require("./lib/get-page-path")

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
    // Reference to all pages.
    const pages = result.data.pages.edges.map(({ node }) => node)
    // Loop through each page and create it.
    pages.map(page => {
      actions.createPage({
        path: getPagePath(page, pages),
        component: path.resolve("./src/templates/page/adapter.js"),
        context: {
          id: page.id
        }
      })
    })
  })
}
