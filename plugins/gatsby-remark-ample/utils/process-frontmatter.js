const deepForEach = require("deep-for-each")
const set = require("lodash/set")
const trimEnd = require("lodash/trimEnd")

const getKeyType = require("./get-key-type")
const processImage = require("./process-image")
const processMarkdown = require("./process-markdown")

module.exports = ({ frontmatter = {}, node = {}, options = {} }) => {
  // Loop through every property on the frontmatter object.
  deepForEach(frontmatter, (value, key, subject, keyPath) => {
    // Get type of the node. Most will be "default" and are left alone. Others
    // are processed specifically to their type.
    const keyType = getKeyType({ keyPath: keyPath, options: options, value: value })
    // Perform an action, based on the type.
    switch (keyType) {
      // Markdown keys are converted to HTML and stored as a new key without the
      // suffix.
      case "md": {
        const newKeyPath = trimEnd(keyPath, options.markdownSuffix)
        const newValue = processMarkdown(value)
        if (newValue) set(frontmatter, newKeyPath, newValue)
        break
      }
      // Image keys are converted to a relative path from the markdown file to
      // the image, and stored as a new key without the suffix.
      case "img": {
        const newKeyPath = trimEnd(keyPath, options.imageSuffix)
        const newValue = processImage({
          absoluteFilePath: node.fileAbsolutePath,
          imageSrcDir: options.imageSrc,
          value: value
        })
        if (newValue) set(frontmatter, newKeyPath, newValue)
        break
      }
    }
  })

  // Return the transformed frontmatter, along with the seoData.
  return frontmatter
}
