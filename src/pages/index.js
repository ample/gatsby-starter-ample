import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello, Ample Developer</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Don't forget to make it awesome.</p>
    <p>
      Note that the only other page is a <Link to="/404/">404 page</Link>, but
      there are some starter components in <code>src/components</code>. Run{" "}
      <code>yarn run storybook</code> to see more.
    </p>
  </Layout>
)

export default IndexPage
