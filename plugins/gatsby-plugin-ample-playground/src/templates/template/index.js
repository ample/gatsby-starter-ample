import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import { getTitle } from "../../helpers"

const TemplatePlayground = ({ data }) => {
  const { template } = data

  return (
    <div>
      <Helmet>
        <title>{getTitle(template)} | Ample Playground</title>
      </Helmet>
      <MDXRenderer>{template.body}</MDXRenderer>
    </div>
  )
}

TemplatePlayground.propTypes = {
  data: PropTypes.shape({
    template: PropTypes.object
  })
}

TemplatePlayground.defaultProps = {}

export const query = graphql`
  query TemplatePlaygroundQuery($id: String!) {
    template: mdx(id: { eq: $id }) {
      fileAbsolutePath
      body
      frontmatter {
        title
      }
    }
  }
`

export default TemplatePlayground
