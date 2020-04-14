import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "../../layout"

const PageTemplate = ({ children, sections, title }) => (
  <Layout>
    {children}
    <div className={styles.page}>
      <h1>{title}</h1>
      <pre>{JSON.stringify(sections)}</pre>
    </div>
  </Layout>
)

PageTemplate.propTypes = {
  /** */
  children: PropTypes.node,
  /** */
  sections: PropTypes.arrayOf(PropTypes.object),
  /** */
  title: PropTypes.string
}

PageTemplate.defaultProps = {}

export default PageTemplate
