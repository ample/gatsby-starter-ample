import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import styles from "./styles.module.scss"

const LoggedInHeader = () => {
  const { logout } = useAuth0()

  return (
    <div className={styles.header}>
      <div className="container">
        <a href="/admin">Dashboard</a>
        <a href="/admin/training">Training</a>
        <a href="/admin/sitemap">Sitemap</a>
        <button onClick={() => logout({ returnTo: process.env.GATSBY_AUTH0_CALLBACK })}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

const LoggedOutHeader = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className={styles.header}>
      <div className="container">
        <button onClick={() => loginWithRedirect()}>Sign In (Auth0)</button>
      </div>
    </div>
  )
}

const Header = () => {
  const { isAuthenticated } = useAuth0()

  return <div>{isAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}</div>
}

export default Header
