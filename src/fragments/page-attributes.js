import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on Page {
    id
    title
    layout
    seo {
      ...SEO
    }

    # --- Basic ---

    layout_basic {
      heading
      body
    }

    # --- Flexible ---

    layout_flexible {
      containers {
        title
        config {
          margin_bottom
        }
        columns {
          title
          config {
            margin_bottom
            text_align
            width
          }
          components {
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
        }
      }
    }
  }
`
