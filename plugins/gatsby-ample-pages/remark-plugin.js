const get = require("lodash/get")

exports.initNode = node => {
  if (get(node, "internal.type") !== "Page") {
    return node
  }

  // node.url = "/hello-world"
  return node
}
