import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO } from "../../helpers"

import SEO from "@src/components/seo"

import Template from "./template"

const TemplateAdapter = ({ data, pageContext }) => {
  const { page } = data

  const seo = normalizeSEO({
    overrides: page.seo,
    page: { title: page.title },
    url: pageContext.url
  })

  return (
    <Template {...page}>
      <SEO {...seo} />
    </Template>
  )
}

TemplateAdapter.propTypes = {
  /**
   * Data coming from markdown files.
   */
  data: PropTypes.shape({
    page: PropTypes.object
  }).isRequired,
  /**
   * The URL at which the page is rendered must be sent.
   */
  pageContext: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

TemplateAdapter.defaultProps = {}

export const query = graphql`
  query TemplateAdapterQuery($id: String!) {
    page: page(id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

export default TemplateAdapter
