import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "../../layout"

import Container from "../../sections/container"

const PageTemplate = ({ children, sections }) => (
  <Layout>
    {children}
    <div className={styles.page}>
      {sections.map((section, idx) => (
        <Container key={idx} {...section} />
      ))}
    </div>
  </Layout>
)

PageTemplate.propTypes = {
  /** */
  children: PropTypes.node,
  /** */
  sections: PropTypes.arrayOf(PropTypes.object)
  /** */
  // title: PropTypes.string
}

PageTemplate.defaultProps = {
  sections: []
}

export default PageTemplate
