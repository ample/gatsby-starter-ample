/**
 * Explicitly define type definitions for seo objects, so consistent fragments
 * can be easily used throughout the site.
 *
 * Fragments are also included in this plugin so they can be reused throughout
 * the project.
 */
exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type SeoMetaOg @infer {
      description: String
      image_src: String
      image: File @fileByRelativePath
      title: String
    }

    type SeoMetaTwitter @infer {
      card: String
      description: String
      image_src: String
      image: File @fileByRelativePath
      title: String
    }

    type SeoMeta implements Node @infer {
      description: String
      image_src: String
      image: File @fileByRelativePath
      og: SeoMetaOg
      title: String
      twitter: SeoMetaTwitter
    }
  `

  actions.createTypes(typeDefs)
}
