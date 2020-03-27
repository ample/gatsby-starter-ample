import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import DebugMediaQueries from "./debug/media-queries"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />

    <DebugMediaQueries />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
