import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on MarkdownRemarkPage {
    id
    seo: childSeoMeta {
      ...SEO
    }
    frontmatter {
      title
      sections {
        title
        config {
          text_align
        }
        components {
          template
          src: image {
            ...FluidImageAttributes
          }
          body
          label
          url
        }
      }
    }
  }
`
