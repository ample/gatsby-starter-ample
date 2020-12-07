import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoggedInHeader = () => {
  const { logout } = useAuth0()

  return (
    <>
      <a href="/admin">Dashboard</a>
      <a href="/admin/training">Training</a>
      <a href="/admin/sitemap">Sitemap</a>
      <button onClick={() => logout({ returnTo: process.env.GATSBY_AUTH0_CALLBACK })}>
        Sign Out
      </button>
    </>
  )
}

const LoggedOutHeader = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      {/* <a href="/admin/login">Sign In</a> */}
      <button onClick={() => loginWithRedirect()}>Sign In (Auth0)</button>
    </>
  )
}

const Header = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      {isAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}
      <hr />
    </div>
  )
}

export default Header
