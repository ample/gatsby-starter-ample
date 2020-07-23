import { graphql } from "gatsby"

export const ComponentAttributes = graphql`
  fragment ComponentAttributes on Component {
    # Shared
    template

    # Button
    label
    url

    # Content
    body

    # Form
    form {
      ...FormAttributes
    }

    # Image
    src: image {
      ...FluidImageAttributes
    }
  }
`
