import { graphql } from "gatsby"

export const SEO = graphql`fragment SeoFluidImage on File {
  childImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
}

fragment SEO on SeoMeta {
  title
  description
  image_src
  image {
    ...SeoFluidImage
  }
  og {
    title
    description
    image_src
    image {
      ...SeoFluidImage
    }
  }
  twitter {
    card
    title
    description
    image_src
    image {
      ...SeoFluidImage
    }
  }
}
`
