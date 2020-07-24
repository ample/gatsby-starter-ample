import { graphql } from "gatsby"

export const ContainerAttributes = graphql`
  fragment ContainerAttributes on Container {
    title
    config {
      margin_bottom
    }
    columns {
      ...ColumnAttributes
    }
  }
`
