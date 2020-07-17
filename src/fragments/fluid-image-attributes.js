import { graphql } from "gatsby"

export const FluidImageAttributes = graphql`
  fragment FluidImageAttributes on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp
        originalName
      }
    }
  }
`
