exports.createPages = ({ graphql, actions }, pluginOptions = {}) => {
  if (pluginOptions.disable) return

  return graphql(`
    {
      redirects: allRedirect {
        edges {
          node {
            source: title
            permanent
            destination
            force
          }
        }
      }
    }
  `).then(result => {
    result.data.redirects.edges.map(({ node }) => {
      actions.createRedirect({
        fromPath: node.source,
        toPath: node.destination,
        force: node.force,
        redirectInBrowser: true,
        isPermanent: node.permanent
      })
    })
  })
}
