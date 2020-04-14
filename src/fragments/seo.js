import { graphql } from "gatsby"

export const SEO = graphql`
  fragment SEO on MarkdownRemarkFrontmatterSeo {
    title
    description
    image_src
    og {
      title
      description
      image_src
    }
    twitter {
      card
      title
      description
      image_src
    }
  }
`
