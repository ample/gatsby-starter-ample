import React from "react"
import PropTypes from "prop-types"

import Block from "@layout/block"
import Layout from "@layout/index"

const FlexiblePage = ({ children, blocks }) => (
  <Layout>
    {children}
    {blocks && blocks.map((block, idx) => <Block key={idx} {...block} />)}
  </Layout>
)

FlexiblePage.propTypes = {
  /**
   * An array of components that get mapped to the <Block /> component.
   */
  blocks: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components to inject before the page content.
   */
  children: PropTypes.node
}

FlexiblePage.defaultProps = {}

export default FlexiblePage
