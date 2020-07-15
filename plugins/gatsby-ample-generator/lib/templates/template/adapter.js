import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { normalizeSEO } from "../../helpers"

import SEO from "../../components/seo"

import Template from "./template"

const TemplateAdapter = ({ data, location }) => {
  let { page } = data

  const seo = normalizeSEO({
    location: location,
    overrides: page.seo,
    page: { title: page.title }
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
   * Location object send from the template's source.
   */
  location: PropTypes.object.isRequired
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
