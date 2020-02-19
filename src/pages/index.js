import React from 'react'
import { Link } from 'gatsby-theme-ample-components'

import Layout from '../components/layout'
import MyFirstComponent from '../components/my-first-component'

const IndexPage = () => (
  <Layout>
    <h1>
      <MyFirstComponent name="Ample Developer" />
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Don't forget to make it awesome.</p>
    <p>
      Note that the only other page is a <Link to="/404/">404 page</Link>, but there are some
      starter components in <code>src/components</code>. Go to the{' '}
      <Link to="/docs/">documentation</Link> section to see more.
    </p>
  </Layout>
)

export default IndexPage
