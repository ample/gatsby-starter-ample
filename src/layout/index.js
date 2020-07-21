import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import { DebugMediaQueries } from "@plugins/gatsby-ample-debuggers"

import footer_test_data from "./footer/fixtures"
import header_fixture from "./header/navigation/fixtures"

import Card from "@src/components/card"
import Grid from "@src/components/grid"

const Layout = ({ children }) => (
  <>
    <Header
      main_navigation={header_fixture.main_navigation}
      top_navigation={header_fixture.top_navigation}
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

    <Footer copyright="2020, All Rights Reserved" {...footer_test_data.default} />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
