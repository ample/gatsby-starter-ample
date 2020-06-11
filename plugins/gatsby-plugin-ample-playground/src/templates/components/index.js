import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import styles from "./styles.module.scss"

import { getParentDir, getTitle } from "../../helpers"

const ComponentsPlayground = ({ data }) => {
  const components = data.components.edges.map(({ node: comp }, idx) => (
    <div key={idx} className={styles.comp_section}>
      <h2 id={getParentDir(comp.fileAbsolutePath)} className={styles.comp_heading}>
        <a href={`#${getParentDir(comp.fileAbsolutePath)}`}>{getTitle(comp)}</a>
      </h2>
      <MDXRenderer>{comp.body}</MDXRenderer>
    </div>
  ))

  return (
    <div className={styles.components_template}>
      <Helmet>
        <title>Components | Ample Playground</title>
      </Helmet>
      {components}
    </div>
  )
}

ComponentsPlayground.propTypes = {
  data: PropTypes.shape({
    components: PropTypes.object
  })
}

ComponentsPlayground.defaultProps = {}

export const query = graphql`
  query ComponentsPlaygroundQuery {
    components: allMdx(
      filter: { fileAbsolutePath: { regex: "//src/components/.*/playground.mdx/" } }
    ) {
      edges {
        node {
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

export default ComponentsPlayground
