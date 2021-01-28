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

  if (fileNode && fileNode.id) {
    return fileNode.id
  }
}
