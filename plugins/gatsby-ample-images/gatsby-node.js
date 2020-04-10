const deepForEach = require("deep-for-each")
const dig = require("object-dig")
const lodash = require("lodash")
const path = require("path")

/**
 * After a markdown node is created by remark, loop through its key-value pairs,
 * and upon finding image source strings, attempt to convert them to image
 * objects without the specified suffix.
 */
exports.onCreateNode = ({ node }, { suffix = "_src", extensions = [".jpg", ".png"] }) => {
  // Only process if the node is a markdown file processed by remark.
  if (dig(node, "internal", "type") === "MarkdownRemark") {
    // Loop through all key-value pairs.
    deepForEach(node, (value, key, _, keyPath) => {
      // Process the individual key-value pair if ending with the appropriate
      // suffix and the value is a string that ends with an acceptable file
      // extension. (The sensible default is so we don't attempt to process
      // files that remark can't handle.)
      if (
        lodash.endsWith(key, suffix) &&
        lodash.isString(value) &&
        lodash.startsWith(value, "/uploads") &&
        extensions.includes(path.extname(value))
      ) {
        // Absolute path to the image file.
        const absImgPath = path.join(path.join(__dirname, "../../static"), value)
        // Absolute path to the directory in which the current node we're
        // processing lives.
        const absNodeDir = path.join(node.fileAbsolutePath, "..")
        // Find the relative path from the current node to the image.
        const relImgPath = path.relative(absNodeDir, absImgPath)
        // Remove suffix from the key to get the new key.
        const newKeyPath = lodash.trimEnd(keyPath, suffix)
        // Store the relative path from the current node to the image as the
        // value for the new key.
        if (relImgPath) lodash.set(node, newKeyPath, relImgPath)
      }
    })
  }
}
