import { graphql } from "gatsby"

export const ColumnAttributes = graphql`
  fragment ColumnAttributes on Column {
    title
    config {
      margin_bottom
      text_align
      width
    }
    components {
      ...ComponentAttributes
    }
  }
`
