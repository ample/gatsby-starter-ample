import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

import Layout from "@src/layout"

import Container from "../../sections/container"

const PageTemplate = ({ children, sections, title }) => (
  <Layout>
    {children}
    <div className={styles.page}>
      <h1>{title}</h1>
      {sections.map((section, idx) => (
        <Container key={idx} {...section} />
      ))}
    </div>
  </Layout>
)

PageTemplate.propTypes = {
  /**
   * Components to inject before the page content.
   */
  children: PropTypes.node,
  /**
   * An array of containers that get mapped to the <Container /> component.
   */
  sections: PropTypes.arrayOf(PropTypes.object),
  /**
   * Title of the page, displayed as the page's <h1> value.
   */
  title: PropTypes.string
}

PageTemplate.defaultProps = {
  sections: []
}

export default PageTemplate
