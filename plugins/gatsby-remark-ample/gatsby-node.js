const get = require("lodash/get")
const set = require("lodash/set")
const path = require("path")

const getOptions = require("./utils/get-options")
const getPermalink = require("./utils/get-permalink")
const getFilePath = require("./utils/get-file-path")
const processFrontmatter = require("./utils/process-frontmatter")

exports.createSchemaCustomization = ({ actions }, options) => {
  // Combine options passed into the plugin with the sensible defaults for a
  // comprehensive object of options.
  const args = getOptions(options)

  // Set the predictable type definitions.
  let typeDefs = `
    interface ModelFrontmatter @infer {
      id: ID!
      slug: String
      slugPath: String
      filePath: String
    }

    type MarkdownRemarkFields implements Node @infer {
      processed_frontmatter: ModelFrontmatter
    }

    type SeoMeta implements Node @infer {
      id: ID!
    }
  `

  // Loop through the models passed into the plugin to explicitly define type
  // definitions. (This is the basis for building out predictable schemas, which
  // is not yet in place.)
  for (let model of args.models) {
    typeDefs += `
      type ${model} implements Node & ModelFrontmatter @infer {
        id: ID!
        seo: SeoMeta
      }
    `
  }

  actions.createTypes(typeDefs)
}

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

  // Set the initial state of the frontmatter to be processed as the slug,
  // slugPath, and filePath, along with the frontmatter from the MarkdownRemark
  // node.
  const initFrontmatter = {
    // slug is the filename without the extension.
    slug: path.basename(node.fileAbsolutePath, path.extname(node.fileAbsolutePath)),
    // slugPath is the path to the file without the extension and the grouping
    // content directory.
    slugPath: getPermalink({
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
  let { frontmatter, seoData } = processFrontmatter({
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

  // Define outside the conditional so we can use it below for creating a
  // parent-child relationship, if necessary.
  let seoNode = undefined

  // Create the SEO node if SEO there was SEO data in the frontmatter.
  if (seoData) {
    // Process SEO data as though it were frontmatter (to transform images and
    // markdown). In this case, ignore the seoData returned and extract only the
    // processed frontmatter.
    seoData = processFrontmatter({
      frontmatter: seoData,
      options: args,
      node: node
    }).frontmatter
    // Process an SEO node if the new node has SEO data attached to it.
    seoNode = {
      id: createNodeId(`${newNode.id} - SEO`),
      children: [],
      parent: newNode.id,
      internal: {
        contentDigest: createContentDigest(seoData),
        type: `SeoMeta`
      },
      ...seoData
    }
    // Create the SEO node, then set the new node's frontmatter to the new SEO node.
    actions.createNode(seoNode)
    set(newNode, "seo", seoNode)
  }

  // Create the new node and build a relationship to the parent, so we can use
  // childMarkdownRemark to get to html and other useful attributes.
  actions.createNode(newNode)
  actions.createParentChildLink({ parent: node, child: newNode })

  // Create the parent-child relationship between the new node and the SEO node.
  if (seoNode) actions.createParentChildLink({ parent: node, child: seoNode })

  // Add the transformed frontmatter as a field on the MarkdownRemark node,
  // which will make it available at node.fields.frontmatter. Note that this
  // step is skipped if the model wasn't explicitly defined.
  if (args.models.includes(model)) {
    actions.createNodeField({
      node,
      name: "processed_frontmatter",
      value: newNode
    })
  }

  // Return the newly created node.
  return newNode
}
