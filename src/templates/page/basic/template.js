import React from "react"
import PropTypes from "prop-types"

import Layout from "@layout"

const BasicPage = ({ body, children }) => (
  <Layout>
    {children}
    {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
  </Layout>
)

BasicPage.propTypes = {
  /**
   * Main content on the page.
   */
  body: PropTypes.string,
  /**
   * Components to inject before the page content.
   */
  children: PropTypes.node
}

BasicPage.defaultProps = {}

export default BasicPage
