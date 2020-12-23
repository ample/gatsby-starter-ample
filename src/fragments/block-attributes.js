import { graphql } from "gatsby"

export const BlockAttributes = graphql`
  fragment BlockAttributes on Block {
    # Shared
    template

    # Container / Column
    config {
      margin_bottom
      text_align
      width
    }

    # Button
    label
    url

    # Content
    body

    # Form
    form {
      ...FormAttributes
    }

    # Frame
    src
    margin_bottom

    # Image
    image {
      ...FluidImageAttributes
    }
  }

  # We can't recursively nest objects within themselves. This pattern was
  # inspired by this post:
  # https://hashinteractive.com/blog/graphql-recursive-query-with-fragments/
  fragment NestableBlockAttributes on Block {
    ...BlockAttributes
    blocks {
      ...BlockAttributes
      blocks {
        ...BlockAttributes
      }
    }
  }
`
