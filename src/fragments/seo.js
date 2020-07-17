import { graphql } from "gatsby"

export const SEO = graphql`
  fragment SeoImageAttributes on File {
    childImageSharp {
      fixed(width: 1200, height: 628) {
        src
      }
    }
  }

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
