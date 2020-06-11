import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./styles.module.scss"

import { getParentDir, getTitle } from "../../helpers"

// ---------------------------------------- | Component

const TemplateList = ({ data, pageContext }) => {
  const getTmplUrl = tmpl => `/${pageContext.pathPrefix}/${getParentDir(tmpl.fileAbsolutePath)}`

  const templates = data.templates.edges.map(({ node: tmpl }, idx) => (
    <li key={idx}>
      <Link to={getTmplUrl(tmpl)}>{getTitle(tmpl)}</Link>
    </li>
  ))

  return (
    <div className={styles.templates_template}>
      <Helmet>
        <title>Templates List | Ample Playground</title>
      </Helmet>
      <h1>Available Templates</h1>
      <ul>{templates}</ul>
    </div>
  )
}

TemplateList.propTypes = {
  /**
   * Templates data coming from local mdx files.
   */
  data: PropTypes.shape({
    templates: PropTypes.object
  }).isRequired,
  /**
   * Object sent from gatsby-node.js
   */
  pageContext: PropTypes.shape({
    pathPrefix: PropTypes.string.isRequired
  }).isRequired
}

TemplateList.defaultProps = {}

export const query = graphql`
  query TemplateListQuery {
    templates: allMdx(
      filter: { fileAbsolutePath: { regex: "//src/templates/.*/playground.mdx/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TemplateList
