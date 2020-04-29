const deepForEach = require("deep-for-each")
const lodash = require("lodash")
const path = require("path")
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

exports.onCreateNode = ({ node, actions, createNodeId, getNode, createContentDigest }) => {
  if (lodash.get(node, "internal.type") !== "MarkdownRemark") return

  // TODO: Make these into configurable options.
  const contentSrc = "src/content/"
  const imageExtensions = [".jpg", ".png"]
  const imagesSuffix = "_src"
  const markdownSuffix = "_md"
  const modelField = "model"

  // The name of the model, which is the basis for creating the query.
  const contentType = lodash.get(node, `frontmatter.${modelField}`)

  if (!contentType) return

  // ---------------------------------------- | ...

  const getPermalink = absPath => {
    // Remove everything before the content directory.
    let filePath = absPath.split(contentSrc).pop()
    // Split the remaining path into its individual parts.
    filePath = filePath.split(path.sep)
    // Remove the first item (the content directory).
    filePath.shift()
    // Convert the path back into a string, and remove the extension.
    return filePath.join(path.sep).replace(path.extname(absPath), "")
  }

  // ---------------------------------------- | ...

  const fileNode = getNode(node.parent)
  if (lodash.get(fileNode, "internal.type") !== "File") return

  const newNode = {
    id: createNodeId(`${node.id} - ${contentType}`),
    children: [],
    parent: node.id,
    internal: {
      content: node.internal.content,
      contentDigest: createContentDigest(node.internal.content),
      mediaType: fileNode.internal.mediaType,
      description: fileNode.internal.description,
      type: `MarkdownRemark${contentType}`
    },
    slug: path.basename(node.fileAbsolutePath, path.extname(node.fileAbsolutePath)),
    slugPath: getPermalink(node.fileAbsolutePath),
    html: node.html,
    frontmatter: {}
  }

  /**
   * TODO: Figure out how to make SEO sections all the same type. Eventually it
   * would be nice to do that across the board, through the configuration.
   */

  deepForEach(node.frontmatter, (value, key, _, keyPath) => {
    if (lodash.endsWith(key, markdownSuffix)) {
      const newPath = lodash.trimEnd(keyPath, markdownSuffix)
      lodash.set(newNode, `frontmatter.${newPath}`, processMarkdown(value))
    } else if (
      lodash.endsWith(key, imagesSuffix) &&
      lodash.isString(value) &&
      lodash.startsWith(value, "/uploads") &&
      imageExtensions.includes(path.extname(value))
    ) {
      const absImgPath = path.join(path.join(__dirname, "../../static"), value)
      // Absolute path to the directory in which the current node we're
      // processing lives.
      const absNodeDir = path.join(node.fileAbsolutePath, "..")
      // Find the relative path from the current node to the image.
      const relImgPath = path.relative(absNodeDir, absImgPath)
      // Remove suffix from the key to get the new key.
      const newKeyPath = lodash.trimEnd(keyPath, imagesSuffix)
      // Store the relative path from the current node to the image as the
      // value for the new key.
      if (relImgPath) lodash.set(newNode, `frontmatter.${newKeyPath}`, relImgPath)
    }
    // Set value
    lodash.set(newNode, `frontmatter.${keyPath}`, value)
  })

  actions.createNode(newNode)
  actions.createParentChildLink({ parent: node, child: newNode })

  return newNode
}
