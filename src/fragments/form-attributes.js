import { graphql } from "gatsby"

export const FormAttributes = graphql`
  fragment FormAttributes on Form {
    id
    title
    button_label
    field_groups {
      heading
      fields {
        appearance
        label
        name
        options
        required
        title
        type
        width
      }
    }
  }
`
