import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO } from "../../helpers"

import SEO from "../../utilities/seo"

import Page from "./"

const PageAdapter = ({ data, location }) => {
  let page = data.page.frontmatter

  const seo = normalizeSEO({
    location: location,
    overrides: page.seo,
    page: { title: page.title }
  })

  return (
    <Page sections={page.sections} title={page.title}>
      <SEO {...seo} />
    </Page>
  )
}

PageAdapter.propTypes = {
  /** Data coming from markdown files. */
  data: PropTypes.shape({}).isRequired
}

PageAdapter.defaultProps = {}

export const query = graphql`
  query PageAdapterQuery($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

export default PageAdapter
