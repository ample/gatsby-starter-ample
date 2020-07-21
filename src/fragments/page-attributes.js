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
      sections {
        title
        config {
          text_align
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
`
