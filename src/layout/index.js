import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Footer from "./footer"
import Header from "./header"
import { DebugMediaQueries } from "@plugins/gatsby-ample-debuggers"

import footer_test_data from "./footer/fixtures"
import header_fixture from "./header/navigation/fixtures"

const Layout = ({ children, className }) => (
  <>
    <Header
      main_navigation={header_fixture.main_navigation}
      top_navigation={header_fixture.top_navigation}
    />

    <main
      className={classNames({
        [className]: className
      })}
    >
      {children}
    </main>

    <Footer copyright="2020, All Rights Reserved" {...footer_test_data.default} />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Additional classes on the main element.
   */
  className: PropTypes.string
}

export default Layout
