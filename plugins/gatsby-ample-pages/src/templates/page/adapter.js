import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import lodash from "lodash"

import { normalizeSEO, SEO } from "@plugins/gatsby-ample-seo"

import { layouts as pageLayouts } from "@src/templates/page"

const PageAdapter = ({ data, location }) => {
  let { page } = data

  const seo = normalizeSEO({
    location: location,
    overrides: page.seo,
    page: { title: page.title }
  })

  const pageData = {
    ...page,
    ...page[`layout_${page.layout}`]
  }

  const TemplateTagName = lodash.get(pageLayouts, `${page.layout}.template`)

  if (!TemplateTagName) return <p>Could not find mapping for {page.layout} layout.</p>

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
   * Location object, sent from gatsby-node.js
   */
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired
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
