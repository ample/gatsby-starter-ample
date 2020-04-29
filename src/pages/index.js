import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO } from "../helpers"

import SEO from "../utilities/seo"

import Page from "../templates/page"

const HomePageAdapter = ({ data, location }) => {
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

HomePageAdapter.propTypes = {
  /** Data coming from markdown files. */
  data: PropTypes.shape({}).isRequired
}

HomePageAdapter.defaultProps = {}

export const query = graphql`
  query HomePageAdapterQuery {
    page: markdownRemarkPage(slugPath: { eq: "index" }) {
      ...PageAttributes
    }
  }
`

export default HomePageAdapter
