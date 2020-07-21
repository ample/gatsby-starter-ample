import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO, SEO } from "@plugins/gatsby-ample-seo"

// import Page from "./"

const PageAdapter = ({ data, location }) => {
  let { page } = data

  const seo = normalizeSEO({
    location: location,
    overrides: page.seo,
    page: { title: page.title }
  })

  console.log(page)
  console.log(seo)

  return <p>Hello World</p>

  // return (
  //   <Page sections={page.sections} title={page.title}>
  //     <SEO {...seo} />
  //   </Page>
  // )
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
