import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
