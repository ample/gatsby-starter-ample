const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      pages: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/pages//" } }) {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    // ---------------------------------------- | Helpers

    /**
     * Looks at the location of a file in a src/content subdirectory and
     * provides the appropriate path to the file that can be used as a route
     * within the site.
     */
    const getRouteFromFilePath = absPath => {
      // Remove everything before the content directory.
      let filePath = absPath.split("src/content/").pop()
      // Split the remaining path into its individual parts.
      filePath = filePath.split(path.sep)
      // Remove the first item (the content directory).
      filePath.shift()
      // Convert the path back into a string, and remove the extension.
      return filePath.join(path.sep).replace(path.extname(absPath), "")
    }

    // ---------------------------------------- | Pages

    const interiorPages = result.data.pages.edges
      .map(({ node: page }) => ({ ...page, path: getRouteFromFilePath(page.fileAbsolutePath) }))
      .filter(page => page.path !== "index")

    interiorPages.map(page => {
      actions.createPage({
        path: getRouteFromFilePath(page.fileAbsolutePath),
        component: path.resolve("./src/templates/page/adapter.js"),
        context: {
          id: page.id
        }
      })
    })
  })
}
