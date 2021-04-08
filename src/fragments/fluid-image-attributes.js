import { graphql } from "gatsby"

export const FluidImageAttributes = graphql`fragment FluidImageAttributes on File {
  childImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
}
`
