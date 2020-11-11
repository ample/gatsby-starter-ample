import React from "react"
import { navigate } from "gatsby"

import { isLoggedIn, logout } from "../../services/auth"

const LoggedInHeader = () => {
  const logoutAndRedirect = () => {
    logout(() => navigate("/"))
  }

  return (
    <>
      <a href="/admin">Dashboard</a>
      <a href="/admin/training">Training</a>
      <button onClick={logoutAndRedirect}>Sign Out</button>
    </>
  )
}

const LoggedOutHeader = () => {
  return (
    <>
      <a href="/admin/login">Sign In</a>
    </>
  )
}

const Header = () => {
  return (
    <div>
      {isLoggedIn() ? <LoggedInHeader /> : <LoggedOutHeader />}
      <hr />
    </div>
  )
}

export default Header
