import { graphql } from "gatsby"

export const SEO = graphql`
  fragment SEO on SeoMeta {
    data {
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
  }
`
