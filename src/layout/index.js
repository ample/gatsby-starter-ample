import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { Helmet } from "react-helmet"

import { component as Footer, fixtures as footerFixtures } from "./footer"
import { component as Header, fixtures as headerFixtures } from "./header"
import { DebugMediaQueries } from "@plugins/gatsby-ample-debuggers"

const Layout = ({ children, className }) => (
  <>
    <Helmet>
      <html lang="en" />
    </Helmet>

    <Header {...headerFixtures} />

    <main
      className={classNames({
        [className]: className
      })}
    >
      {children}
    </main>

    <Footer {...footerFixtures} />

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
