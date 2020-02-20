import React from "react"
import { Link } from "gatsby-theme-ample-components"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi There</h1>
    <p>
      Note that the only other page is a <Link to="/404/">404 page</Link>, but there are some
      starter components in <code>src/components</code>. Go to the{" "}
      <Link to="/docs/">documentation</Link> section to see more.
    </p>
  </Layout>
)

export default IndexPage
