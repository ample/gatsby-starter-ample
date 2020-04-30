const deepForEach = require("deep-for-each")
const lodash = require("lodash")
const path = require("path")
const remark = require("remark")
const remarkHTML = require("remark-html")

const getOptions = require("./src/get-options")

/**
 * Convert markdown string to HTML string.
 */
const processMarkdown = markdown =>
  remark()
    .use(remarkHTML)
    .processSync(markdown)
    .toString()

exports.onCreateNode = ({ node, actions, createNodeId, getNode, createContentDigest }, options) => {
  if (lodash.get(node, "internal.type") !== "MarkdownRemark") return

  const args = getOptions(options)

  // The name of the model, which is the basis for creating the query.
  const contentType = lodash.get(node, `frontmatter.${args.modelField}`)

  if (!contentType) return

  // ---------------------------------------- | ...

  const getPermalink = absPath => {
    // Remove everything before the content directory.
    let filePath = absPath.split(args.contentSrc).pop()
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

  let seoData

  deepForEach(node.frontmatter, (value, key, _, keyPath) => {
    if (keyPath === args.seoField) {
      // Will still make the values available in frontmatter so they don't
      // disappear (that would be confusing). But this sets us up to create a
      // parent-child relationship so that we can use fragments more easily.
      seoData = value
    } else if (keyPath.split(".")[0] === args.seoField) {
      return
    }

    if (lodash.endsWith(key, args.markdownSuffix)) {
      const newPath = lodash.trimEnd(keyPath, args.markdownSuffix)
      lodash.set(newNode, `frontmatter.${newPath}`, processMarkdown(value))
    } else if (
      lodash.endsWith(key, args.imageSuffix) &&
      lodash.isString(value) &&
      lodash.startsWith(value, "/uploads") &&
      args.imageExtensions.includes(path.extname(value))
    ) {
      const absImgPath = path.join(path.join(__dirname, "../../static"), value)
      // Absolute path to the directory in which the current node we're
      // processing lives.
      const absNodeDir = path.join(node.fileAbsolutePath, "..")
      // Find the relative path from the current node to the image.
      const relImgPath = path.relative(absNodeDir, absImgPath)
      // Remove suffix from the key to get the new key.
      const newKeyPath = lodash.trimEnd(keyPath, args.imageSuffix)
      // Store the relative path from the current node to the image as the
      // value for the new key.
      if (relImgPath) lodash.set(newNode, `frontmatter.${newKeyPath}`, relImgPath)
    }
    // Set value
    lodash.set(newNode, `frontmatter.${keyPath}`, value)
  })

  actions.createNode(newNode)
  actions.createParentChildLink({ parent: node, child: newNode })

  if (seoData) {
    const seoNode = {
      id: createNodeId(`${node.id} - SEO`),
      children: [],
      parent: newNode.id,
      internal: {
        // content: node.internal.content,
        contentDigest: createContentDigest(seoData),
        // mediaType: fileNode.internal.mediaType,
        // description: fileNode.internal.description,
        type: `SeoMeta`
      },
      data: seoData
    }

    actions.createNode(seoNode)
    actions.createParentChildLink({ parent: newNode, child: seoNode })
  }

  return newNode
}
