import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on Page {
    id
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
`
