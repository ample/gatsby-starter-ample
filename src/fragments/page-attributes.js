import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on MarkdownRemarkPage {
    id
    frontmatter {
      title
      seo {
        ...SEO
      }
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
