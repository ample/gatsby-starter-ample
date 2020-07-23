import { graphql } from "gatsby"

export const FlexiblePageAttributes = graphql`
  fragment FlexiblePageAttributes on FlexiblePage {
    containers {
      ...ContainerAttributes
    }
  }
`
