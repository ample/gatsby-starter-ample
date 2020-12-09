import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import get from "lodash/get"

import { normalizeSEO, SEO } from "@plugins/gatsby-ample-seo"

import { layouts as pageLayouts } from "@src/templates/page"

const PageAdapter = ({ data, pageContext }) => {
  // Extract the page data from the GraphQL query's response.
  let { page } = data

  // Normalize the SEO for the SEO component. (Our goal is to refactor this
  // component so that this process happens automatically.)
  const seo = normalizeSEO({
    url: pageContext.url,
    overrides: page.seo,
    page: { title: page.title }
  })

  // The data object sent to the page is expected to be contained within a
  // scoped field, prefixed with "layout_" and suffixed with the layout value.
  // (e.g. If the layout is "flexible," then the page attributes should all
  // exist within a "layout_flexible" object.)
  const pageData = {
    ...page,
    ...page[`layout_${page.layout}`]
  }

  // Pull in the page layouts from the source project and look for the React
  // component to render for this page's layout.
  const TemplateTagName = get(pageLayouts, `${page.layout}.template`)

  // If it doesn't exist, simply return a message that the mapping didn't exist.
  if (!TemplateTagName) return <p>Could not find mapping for {page.layout} layout.</p>

  // Otherwise, if everything looks good, render the component. Note that this
  // expects page layouts to accept "children" as a prop and render it directly,
  // providing this adapter the means to automatically normalize and render SEO
  // tags so that the various layouts don't have to worry about it.
  return (
    <TemplateTagName {...pageData}>
      <SEO {...seo} />
    </TemplateTagName>
  )
}

PageAdapter.propTypes = {
  /**
   * Data coming from markdown files.
   */
  data: PropTypes.shape({
    page: PropTypes.object.isRequired
  }).isRequired,
  /**
   * The URL at which the page is rendered must be sent.
   */
  pageContext: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

PageAdapter.defaultProps = {}

export const query = graphql`
  query PageAdapterQuery($id: String!) {
    page: page(id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

export default PageAdapter
