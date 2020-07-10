import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import DebugMediaQueries from "../components/debug-media-queries"

import Card from "./../components/card"
import Grid from "./../components/grid"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>

    <Grid layout="one_third">
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

    <Footer />

    <DebugMediaQueries isShowing={process.env.GATSBY_DEBUG_MEDIA_QUERIES} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
