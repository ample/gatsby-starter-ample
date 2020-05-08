import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on MarkdownRemark {
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

          # Button
          label
          url

          # Content
          body

          # Form
          form

          # Image
          src: image {
            ...FluidImageAttributes
          }
        }
      }
    }
  }
`
