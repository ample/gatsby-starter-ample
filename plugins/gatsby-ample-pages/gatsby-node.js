const path = require("path")
const getPagePath = require("./lib/get-page-path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      pages: allPage {
        edges {
          node {
            id
            published
            slugPath
          }
        }
      }
    }
  `).then(result => {
    // Reference to all pages.
    let pages = result.data.pages.edges.map(({ node }) => node)
    // Filter out drafts if enabled.
    if (process.env.GATSBY_PAGES_PUBLISH_MODE) {
      pages = pages.filter(page => page.published)
    }
    // Loop through each of the remaining pages and create them.
    pages.map(page => {
      const pagePath = getPagePath(page, pages)

      actions.createPage({
        path: pagePath,
        component: path.join(__dirname, "./src/templates/page/adapter.js"),
        context: { id: page.id, url: `${result.data.site.siteMetadata.siteUrl}${pagePath}` }
      })
    })
  })
}
