const get = require("lodash/get")
const getPagePath = require("./lib/get-page-path")

/**
 * Adds a pagePath property to every Page object.
 *
 * @param {object} node Node object coming from gatsby-remark-ample/gatsby-node.js
 */
exports.initNode = node => {
  // We're only processing pages.
  if (get(node, "internal.type") !== "Page") {
    return node
  }
  // Add the pagePath property.
  node.pagePath = getPagePath(node)
  // Return the transformed node, which is expected by gatsby-remark-ample.
  return node
}
