import { graphql } from "gatsby"

export const BasicPageAttributes = graphql`
  fragment BasicPageAttributes on BasicPage {
    heading
    body
  }
`
