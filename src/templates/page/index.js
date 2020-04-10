import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "../../layout"

const PageTemplate = ({ sections, title }) => (
  <Layout>
    <div className={styles.page}>
      <h1>{title}</h1>
    </div>
  </Layout>
)

PageTemplate.propTypes = {
  /** */
  sections: PropTypes.arrayOf(PropTypes.object),
  /** */
  title: PropTypes.string
}

PageTemplate.defaultProps = {}

export default PageTemplate
