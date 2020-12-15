import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import styles from "./styles.module.scss"

const isActive = href => {
  if (typeof window !== "object" || !window.location) {
    return false
  }
  return window.location.pathname === href
}

const LoggedInHeader = () => {
  const { logout } = useAuth0()

  return (
    <div className={styles.logged_in_menu}>
      <a href="/admin" className={isActive("/admin") ? styles.active : null}>
        Dashboard
      </a>
      <a href="/admin/training" className={isActive("/admin/training") ? styles.active : null}>
        Training
      </a>
      <a href="/admin/sitemap" className={isActive("/admin/sitemap") ? styles.active : null}>
        Sitemap
      </a>
      <button onClick={() => logout({ returnTo: process.env.GATSBY_AUTH0_CALLBACK })}>
        Sign Out
      </button>
    </div>
  )
}

const LoggedOutHeader = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className={styles.logged_out_menu}>
      <button onClick={() => loginWithRedirect()}>Sign In</button>
    </div>
  )
}

const Header = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className={styles.header}>
      <div className="container">{isAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}</div>
    </div>
  )
}

export default Header
