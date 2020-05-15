import { graphql } from "gatsby"

export const FormAttributes = graphql`
  fragment FormAttributes on Form {
    id
    title
    button_label
    field_groups {
      heading
      fields {
        label
        name
        options
        required
        select_appearance
        solo
        text_appearance
        text_placeholder
        text_validation
        title
        type
        width
      }
    }
  }
`
