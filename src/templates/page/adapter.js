import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import dig from "object-dig"

// import { flattenFrontmatter, normalizeImages } from "../../helpers"
// import { normalizeSEO } from "../../helpers"

import Page from "./"

const PageAdapter = ({ data, location }) => {
  // let page = flattenFrontmatter(data.page)
  let page = data.page.frontmatter
  // normalizeImages(page)

  // const seo = normalizeSEO({
  //   location: location,
  //   overrides: page.seo,
  //   defaults: { title: page.title }
  // })

  // console.log(seo)
  // const seo = {
  //   baseUrl: location.origin,
  //   url: location.href,
  //   ...page.seo,
  //   title: dig(page, "seo", "title") || page.title,
  //   image: dig(page, "seo", "image") || dig(page, "jumbotron", "image")
  // }

  // return <Page jumbotron={page.jumbotron} sections={page.sections} seo={seo} />

  // console.log(page)

  return <Page sections={page.sections} title={page.title} />
}

PageAdapter.propTypes = {
  /** Data coming from markdown files. */
  data: PropTypes.shape({}).isRequired
}

PageAdapter.defaultProps = {}

export const query = graphql`
  query PageAdapterQuery($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

export default PageAdapter
