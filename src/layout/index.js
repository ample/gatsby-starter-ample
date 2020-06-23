import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import DebugMediaQueries from "../components/debug-media-queries"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
