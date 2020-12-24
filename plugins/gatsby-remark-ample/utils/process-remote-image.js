const { createRemoteFileNode } = require("gatsby-source-filesystem")

module.exports = async ({ node, helpers, value }) => {
  const fileNode = await createRemoteFileNode({
    url: value,
    parentNodeId: node.id,
    createNode: helpers.createNode,
    createNodeId: helpers.createNodeId,
    cache: helpers.cache,
    store: helpers.store
  })

  /**
   * TODO:
   *
   * 1. This isn't attaching itself to the node in the way I expected. Next
   *    thing I was going to try was using @link more explicitly, as shown here:
   *    https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/.
   *
   * 2. Fix the broken specs.
   *
   * 3. Add spec to ensure getKeyType returns "img" for remote images.
   *
   * 4. I'm not sure if new specs are warranted since we're using Gatsby APIs.
   *
   */
  if (fileNode && fileNode.id) {
    return fileNode.id
  }
}
