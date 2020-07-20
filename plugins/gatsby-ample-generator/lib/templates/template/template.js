import React from "react"
import PropTypes from "prop-types"

import Layout from "~layout"

import styles from "./styles.module.scss"

const TemplateName = ({ children, title }) => (
  <Layout>
    {children}
    <div className={styles.template_name}>
      <p>{title}</p>
    </div>
  </Layout>
)

TemplateName.propTypes = {
  /**
   * Components to inject before the page content.
   */
  children: PropTypes.node,
  /**
   * Brief description of "title" prop
   */
  title: PropTypes.string.isRequired
}

TemplateName.defaultProps = {}

export default TemplateName
