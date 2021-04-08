import React from "react"
import PropTypes from "prop-types"

import Block from "@src/components/block"
import Layout from "@src/layout"

const FlexiblePage = ({ children, blocks }) => (
  <Layout>
    {children}
    {blocks.map((block, idx) => (
      <Block key={idx} {...block} />
    ))}
  </Layout>
)

FlexiblePage.propTypes = {
  /**
   * Components to inject before the page content.
   */
  children: PropTypes.node,
  /**
   * An array of components that get mapped to the <Block /> component.
   */
  blocks: PropTypes.arrayOf(PropTypes.object)
}

FlexiblePage.defaultProps = {
  containers: []
}

export default FlexiblePage
