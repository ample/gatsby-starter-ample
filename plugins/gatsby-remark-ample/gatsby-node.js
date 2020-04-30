const deepForEach = require("deep-for-each")
const lodash = require("lodash")
const path = require("path")

const getKeyType = require("./utils/get-key-type")
const getOptions = require("./utils/get-options")
const getPermalink = require("./utils/get-permalink")
const processMarkdown = require("./utils/process-markdown")
const processImage = require("./utils/process-image")

exports.onCreateNode = ({ node, actions, createNodeId, getNode, createContentDigest }, options) => {
  // Only process nodes that were created by gatsby-transformer-remark.
  if (lodash.get(node, "internal.type") !== "MarkdownRemark") return

  // Combine options passed into the plugin with the sensible defaults for a
  // comprehensive object of options.
  const args = getOptions(options)

  // The name of the model, which is the basis for creating the query. This is
  // how queries are grouped together.
  const contentType = lodash.get(node, `frontmatter.${args.modelField}`)
  // Stop processing if the content type is not a string of some length.
  if (!lodash.isString(contentType) || lodash.isEmpty(contentType)) return

  // Reference to the parent of the MarkdownRemark node, which should be a file.
  const fileNode = getNode(node.parent)
  if (lodash.get(fileNode, "internal.type") !== "File") return

  // Initialize a new node object.
  const newNode = {
    // Gatsby helps us create a unique ID for this node.
    id: createNodeId(`${node.id} - ${contentType}`),
    // Children has to be an empty array for new objects.
    children: [],
    // The parent is the node that was just created, the MarkdownRemark node.
    parent: node.id,
    // We use a combination of the MarkdownRemark node, and its parent, the File
    // node, to build out internal properties.
    internal: {
      content: node.internal.content,
      contentDigest: createContentDigest(node.internal.content),
      mediaType: fileNode.internal.mediaType,
      description: fileNode.internal.description,
      // The type is the name of the model, appended to MarkdownRemark, to show
      // that this is an extension of MarkdownRemark.
      type: `MarkdownRemark${contentType}`
    },
    // slug is the filename without the extension.
    slug: path.basename(node.fileAbsolutePath, path.extname(node.fileAbsolutePath)),
    // slugPath is the path to the file without the extension and the grouping
    // content directory.
    slugPath: getPermalink({
      absoluteFilePath: node.fileAbsolutePath,
      contentSrc: args.contentSrc
    }),
    // html persists from the MarkdownRemark node.
    html: node.html,
    // Create an empty object for frontmatter, which is processed below.
    frontmatter: {}
  }

  // Reference we use to know whether or not to create a child SEO node.
  let seoData

  // Loop through each key-value pair in the frontmatter.
  deepForEach(node.frontmatter, (value, key, _, keyPath) => {
    // Get type of the node. Most will be "default" and are simply passed
    // through to the new node. Others get processed more specifical to their
    // type.
    const keyType = getKeyType({ keyPath: keyPath, options: args, value: value })
    switch (keyType) {
      // SEO keys simply set the seoData variable and are processed after the
      // new node is created.
      case "seo":
        seoData = value
        break
      // Markdown keys are converted to HTML and stored as a new key without the
      // suffix.
      case "md": {
        const newKeyPath = lodash.trimEnd(keyPath, args.markdownSuffix)
        const newValue = processMarkdown(value)
        if (newValue) lodash.set(newNode, `frontmatter.${newKeyPath}`, newValue)
        break
      }
      // Image keys are converted to a relative path from the markdown file to
      // the image, and stored as a new key without the suffix.
      case "img": {
        const newKeyPath = lodash.trimEnd(keyPath, args.imageSuffix)
        const newValue = processImage({
          absoluteFilePath: node.fileAbsolutePath,
          imageSrcDir: args.imageSrc,
          value: value
        })
        if (newValue) lodash.set(newNode, `frontmatter.${newKeyPath}`, newValue)
        break
      }
    }
    // If the key has a type (some keys are ignored), then we pass it through to
    // the new node.
    if (keyType) lodash.set(newNode, `frontmatter.${keyPath}`, value)
  })

  // Create the new node.
  actions.createNode(newNode)
  // Set the parent of the new node to the MarkdownRemark node.
  actions.createParentChildLink({ parent: node, child: newNode })

  // Process an SEO node if the new node has SEO data attached to it.
  if (seoData) {
    const seoNode = {
      id: createNodeId(`${node.id} - SEO`),
      children: [],
      // The parent is the new node we just created.
      parent: newNode.id,
      internal: {
        contentDigest: createContentDigest(seoData),
        type: `SeoMeta`
      },
      // SEO data is nested under a "data" object to avoid naming conflicts.
      data: seoData
    }

    // Create SEO node and also create the parent-child relationship between the
    // new node and the SEO node.
    actions.createNode(seoNode)
    actions.createParentChildLink({ parent: newNode, child: seoNode })
  }

  return newNode
}
