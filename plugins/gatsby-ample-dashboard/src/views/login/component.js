import React, { useState } from "react"
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

const LoginView = () => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    navigate(`/admin`)
  }

  return (
    <>
      <h1>Log in</h1>
      This is a page.
    </>
  )
}

export default LoginView
