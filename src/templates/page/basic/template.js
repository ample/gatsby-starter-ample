import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "@src/layout"

const BasicPage = ({ body, children, heading }) => (
  <Layout>
    {children}
    <div className={styles.basic_page}>
      <h1>{heading}</h1>
      {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
    </div>
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
  children: PropTypes.node,
  /**
   * Main page heading — the page's <h1> value.
   */
  heading: PropTypes.string
}

BasicPage.defaultProps = {}

export default BasicPage
