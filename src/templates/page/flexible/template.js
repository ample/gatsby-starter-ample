import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "@src/layout"

import Block from "@src/components/block"

const FlexiblePage = ({ children, blocks, title }) => (
  <Layout>
    {children}
    <div className={styles.page}>
      <h1>{title}</h1>
      {blocks.map((block, idx) => (
        <Block key={idx} {...block} />
      ))}
    </div>
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
  blocks: PropTypes.arrayOf(PropTypes.object),
  /**
   * Title of the page, displayed as the page's <h1> value.
   */
  title: PropTypes.string
}

FlexiblePage.defaultProps = {
  containers: []
}

export default FlexiblePage
