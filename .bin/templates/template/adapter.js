import React from "react"
// import { query } from "gatsby"
import PropTypes from "prop-types"

import Template from "./"

const TemplateAdapter = props => <Template {...props} />

TemplateAdapter.propTypes = {
  /** prop description here */
  data: PropTypes.shape({}).isRequired
}

TemplateAdapter.defaultProps = {}

// export const query = graphql`
//   query TemplateAdapterQuery {
//     {
//       # Query goes here ...
//     }
//   }
// `

export default TemplateAdapter
