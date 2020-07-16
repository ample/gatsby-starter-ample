import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import { DebugMediaQueries } from "../../plugins/gatsby-ample-debuggers"

import footer_menu_fixtures from "./footer/link-list/fixtures"
import { footer_test_data } from "./footer/__fixtures__"
import { fixtures as header_fixture } from "./header/navigation/fixtures"

const Layout = ({ children }) => (
  <>
    <Header
      main_navigation={header_fixture.main_navigation}
      top_navigation={header_fixture.top_navigation}
    />

    <main>{children}</main>

    <Footer
      copyright="2020, All Rights Reserved"
      menus={footer_menu_fixtures.menus}
      policy_links={footer_test_data.policy_links}
      social_links={footer_test_data.social_links}
    />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
