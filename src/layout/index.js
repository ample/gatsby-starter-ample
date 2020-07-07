import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import DebugMediaQueries from "../components/debug-media-queries"
import { footer_test_data } from "./footer/__fixtures__"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer
      copyright="2020, All Rights Reserved"
      menus={footer_test_data.menus}
      policy_links={footer_test_data.policy_links}
    />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
