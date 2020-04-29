import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import PageAdapter from "../templates/page/adapter"

const HomePageAdapter = ({ data, location }) => <PageAdapter data={data} location={location} />

HomePageAdapter.propTypes = {
  /** Data coming from markdown files. */
  data: PropTypes.shape({}).isRequired
}

HomePageAdapter.defaultProps = {}

export const query = graphql`
  query HomePageAdapterQuery {
    page: markdownRemarkPage(slugPath: { eq: "index" }) {
      ...PageAttributes
    }
  }
`

export default HomePageAdapter
