exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      redirects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/redirects//" } }
      ) {
        edges {
          node {
            frontmatter {
              source: title
              permanent
              destination
              force
            }
          }
        }
      }
    }
  `).then(result => {
    // ---------------------------------------- | Redirects

    result.data.redirects.edges.map(({ node }) => {
      actions.createRedirect({
        fromPath: node.frontmatter.source,
        toPath: node.frontmatter.destination,
        force: node.frontmatter.force,
        redirectInBrowser: true,
        isPermanent: node.frontmatter.permanent
      })
    })
  })
}
