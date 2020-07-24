import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on Page {
    id
    title
    layout
    seo {
      ...SEO
    }

    # --- Layouts ---

    layout_basic {
      ...BasicPageAttributes
    }
    layout_flexible {
      ...FlexiblePageAttributes
    }
  }
`
