import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import { DebugMediaQueries } from "../../plugins/gatsby-ample-debuggers"

import { footer_test_data } from "./footer/__fixtures__"
import { header_test_data } from "./header/__fixtures__"

import Card from "./../components/card"
import Grid from "./../components/grid"

const Layout = ({ children }) => (
  <>
    <Header
      main_navigation={header_test_data.main_navigation}
      top_navigation={header_test_data.top_navigation}
    />

    <main>{children}</main>

    <Grid layout="1/3">
      <Card
        heading="In ad eiusmod"
        button={{
          label: "Learn more",
          url: "#"
        }}
        theme="theme_1"
        image="/uploads/placeholder-image.jpg"
        body="<p>Tempor amet voluptate labore qui Lorem laborum ullamco et.</p>"
      />
      <Card
        heading="Irure est duis ex non"
        button={{
          label: "Learn more",
          url: "#"
        }}
        theme="theme_2"
        image="/uploads/placeholder-image.jpg"
        body="<p>Elit laboris excepteur dolor aliqua ex amet fugiat.</p>"
      />
      <Card
        heading="Adipisicing nisi sit"
        button={{
          label: "Learn more",
          url: "#"
        }}
        theme="theme_1"
        image="/uploads/placeholder-image.jpg"
        body="<p>Elit cupidatat commodo pariatur non id adipisicing qui reprehenderit eu.</p>"
      />
    </Grid>

    <Footer
      copyright="2020, All Rights Reserved"
      menus={footer_test_data.menus}
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
