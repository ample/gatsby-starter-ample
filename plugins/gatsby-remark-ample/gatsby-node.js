const get = require("lodash/get")
const path = require("path")

const getOptions = require("./utils/get-options")
const getPermalink = require("./utils/get-permalink")
const getPathPrefix = require("./utils/get-path-prefix")
const getFilePath = require("./utils/get-file-path")
const loadPlugins = require("./utils/load-plugins")
const processFrontmatter = require("./utils/process-frontmatter")

exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }, options) => {
  // Only process nodes that were created by gatsby-transformer-remark.
  if (get(node, "internal.type") !== "MarkdownRemark") return

  // Combine options passed into the plugin with the sensible defaults for a
  // comprehensive object of options.
  const args = getOptions(options)

  // Extract the content type so we can set the type of child nodes, which
  // translate to the new frontmatter field, too.
  const model = get(node, `frontmatter.${args.modelField}`)

  // If the model was not specified, then don't try to create the node because
  // the type is unknown.
  if (!model) return

  // Load plugin APIs.
  let pluginAPIs
  try {
    pluginAPIs = loadPlugins(options.plugins || [])
  } catch {
    process.exit(1)
  }

  // Set the initial state of the frontmatter to be processed as this plugin's
  // internals, along with the frontmatter from the MarkdownRemark node.
  const initFrontmatter = {
    // slug is the filename without the extension.
    slug: path.basename(node.fileAbsolutePath, path.extname(node.fileAbsolutePath)),
    // slugPath is the path to the file without the extension and the grouping
    // content directory.
    slugPath: getPermalink({
      absoluteFilePath: node.fileAbsolutePath,
      contentSrc: args.contentSrc
    }),
    // The path prefix is the slug path without the last segment.
    pathPrefix: getPathPrefix({
      absoluteFilePath: node.fileAbsolutePath,
      contentSrc: args.contentSrc
    }),
    // filePath is the path to the file, relative to the project root directory
    filePath: getFilePath({
      absoluteFilePath: node.fileAbsolutePath,
      projectRoot: args.projectRoot
    }),
    // Bring in frontmatter from MarkdownRemark node.
    ...node.frontmatter
  }

  // Loop through and process each key-value in the frontmatter.
  let frontmatter = processFrontmatter({
    frontmatter: initFrontmatter,
    options: args,
    node: node
  })

  // Initialize a new node as a child of the MarkdownRemark node.
  let newNode = {
    id: createNodeId(`${node.id} - ${model}`),
    children: [],
    parent: node.id,
    internal: {
      contentDigest: createContentDigest(node.internal.content),
      type: model
    },
    // Store the processed frontmatter on the new node.
    ...frontmatter
  }

  // Run the initNode API.
  pluginAPIs.initNode.map(func => (newNode = func(newNode)))

  // Create the new node and build a relationship to the parent, so we can use
  // childMarkdownRemark to get to html and other useful attributes.
  actions.createNode(newNode)
  actions.createParentChildLink({ parent: node, child: newNode })

  // Add the transformed frontmatter as a field on the MarkdownRemark node,
  // which will make it available at node.fields.frontmatter. Note that this
  // step is skipped if the model wasn't explicitly defined.
  actions.createNodeField({
    node,
    name: "processed_frontmatter",
    value: newNode
  })

  // Return the newly created node.
  return newNode
}
