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
          image_src
          body_md
          label
          url
        }
      }
    }
  }
`
