import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

import Layout from "../layout"

const DashboardAppWrapper = () => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
      redirectUri={process.env.GATSBY_AUTH0_CALLBACK}
    >
      <Layout />
    </Auth0Provider>
  )
}

export default DashboardAppWrapper
