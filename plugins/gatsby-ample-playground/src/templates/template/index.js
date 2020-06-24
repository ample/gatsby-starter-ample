import React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import { getTitle } from "../../helpers"

const TemplatePlayground = ({ pageContext }) => {
  const { template } = pageContext

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
  pageContext: PropTypes.shape({
    template: PropTypes.object.isRequired
  }).isRequired
}

TemplatePlayground.defaultProps = {}

export default TemplatePlayground
