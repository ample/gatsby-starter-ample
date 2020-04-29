import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO } from "../../helpers"

import SEO from "../../utilities/seo"

import Page from "./"

const PageAdapter = ({ data, location }) => {
  let { page } = data

  const seo = normalizeSEO({
    location: location,
    overrides: page.seo.data,
    page: { title: page.frontmatter.title }
  })

  return (
    <Page sections={page.frontmatter.sections} title={page.frontmatter.title}>
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
    page: markdownRemarkPage(id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

export default PageAdapter
