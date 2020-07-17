import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import lodash from "lodash"

import SEO from "../../../plugins/gatsby-ample-seo"

import Page from "./"

const PageAdapter = ({ data, location }) => {
  let { page } = data

  const seoData = {
    ...page.seo,
    location: location,
    title: lodash.get(page, "seo.title") || page.title
  }

  return (
    <Page sections={page.sections} title={page.title}>
      <SEO {...seoData} />
    </Page>
  )
}

PageAdapter.propTypes = {
  /**
   * Data coming from markdown files.
   */
  data: PropTypes.shape({
    page: PropTypes.object
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
