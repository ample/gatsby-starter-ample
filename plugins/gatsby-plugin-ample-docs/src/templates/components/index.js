import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import lodash from "lodash"
import { Helmet } from "react-helmet"

import styles from "./styles.module.scss"

const isPresent = str => {
  if (!str) return false
  return str.length > 0
}

const getCompDir = comp => {
  const pgPathParts = comp.fileAbsolutePath.split("/")
  return pgPathParts[pgPathParts.indexOf("playground.mdx") - 1]
}

const getCompHeading = comp => {
  // If title was passed in via frontmatter, use that.
  if (isPresent(lodash.get(comp, "frontmatter.title"))) return comp.frontmatter.title
  // Otherwise, titleize the playground's parent directory.
  return lodash.startCase(lodash.toLower(getCompDir(comp)))
}

const ComponentsTemplate = ({ data }) => {
  const components = data.components.edges.map(({ node: comp }, idx) => (
    <div key={idx} className={styles.comp_section}>
      <h2 id={getCompDir(comp)} className={styles.comp_heading}>
        <a href={`#${getCompDir(comp)}`}>{getCompHeading(comp)}</a>
      </h2>
      <MDXRenderer>{comp.body}</MDXRenderer>
    </div>
  ))

  return (
    <div className={styles.components_template}>
      <Helmet>
        <title>Components Playground</title>
      </Helmet>
      {components}
    </div>
  )
}

ComponentsTemplate.propTypes = {
  data: PropTypes.shape({
    components: PropTypes.object
  })
}

ComponentsTemplate.defaultProps = {}

export const query = graphql`
  query ComponentsTemplateQuery {
    components: allMdx(filter: { fileAbsolutePath: { regex: "//components/.*/playground.mdx/" } }) {
      edges {
        node {
          id
          body
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default ComponentsTemplate
