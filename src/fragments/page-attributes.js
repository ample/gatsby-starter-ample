import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on Page {
    id
    title
    layout
    # TODO: fix gatsby-ample-seo to work with Gatsby 3
    # seo {
    #  ...SEO
    # }

    # --- Layouts ---

    layout_basic {
      ...BasicPageAttributes
    }
    layout_flexible {
      ...FlexiblePageAttributes
    }
  }
`
