import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./component"

const HeaderAdapter = () => {
  const data = useStaticQuery(graphql`
    {
      settings: adminHeader {
        top_nav {
          label
          url
        }
        main_nav {
          button
          children {
            label
            url
          }
          label
          url
        }
      }
    }
  `)

  const {
    settings: { top_nav, main_nav }
  } = data

  return <Header top_navigation={top_nav} main_navigation={main_nav} />
}

HeaderAdapter.propTypes = {}

HeaderAdapter.defaultProps = {}

export default HeaderAdapter
