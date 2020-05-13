import { graphql } from "gatsby"

export const SEO = graphql`
  fragment SEO on SeoMeta {
    title
    description
    image_src
    image {
      ...FluidImageAttributes
    }
    og {
      title
      description
      image_src
      image {
        ...FluidImageAttributes
      }
    }
    twitter {
      card
      title
      description
      image_src
      image {
        ...FluidImageAttributes
      }
    }
  }
`
