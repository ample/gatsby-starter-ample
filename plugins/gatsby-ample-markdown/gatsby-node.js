const dig = require("object-dig")
const lodash = require("lodash")
const deepForEach = require("deep-for-each")
const remark = require("remark")
const remarkHTML = require("remark-html")

/**
 * Convert markdown string to HTML string.
 */
const processMarkdown = markdown =>
  remark()
    .use(remarkHTML)
    .processSync(markdown)
    .toString()

/**
 * When a node is created, loop through its key-value pairs. If finding a key
 * that ends in the proper suffix, convert the value to markdown and store it
 * without the suffix.
 */
exports.onCreateNode = ({ node }, { suffix = "_md" }) => {
  // Only process markdown files that have been processed by remark.
  if (dig(node, "internal", "type") === "MarkdownRemark") {
    // Loop through every key-value pair.
    deepForEach(node, (value, key, _, keyPath) => {
      // Only process if the key ends in the suffix and the value is a string.
      if (lodash.endsWith(key, suffix) && value && typeof value === "string") {
        // Remove the suffix to get the new key we're going to create.
        const newPath = lodash.trimEnd(keyPath, suffix)
        // Process the markdown.
        const md = processMarkdown(value)
        // Store the resulting HTML string as the value for the new key.
        if (md) lodash.set(node, newPath, md)
      }
    })
  }
}
