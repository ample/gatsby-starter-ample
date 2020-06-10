import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import lodash from "lodash"
import { Helmet } from "react-helmet"

const ComponentsTemplate = ({ data }) => {
  const components = data.components.edges.map(({ node }, idx) => (
    <div key={idx}>
      {console.log(node)}
      {lodash.get(node, "frontmatter.title") && (
        <h2 id={node.id}>
          <a href={`#${node.id}`}>{node.frontmatter.title}</a>
        </h2>
      )}
      <MDXRenderer>{node.body}</MDXRenderer>
    </div>
  ))

  return (
    <>
      <Helmet>
        <title>Components Playground</title>
      </Helmet>
      {components}
    </>
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
