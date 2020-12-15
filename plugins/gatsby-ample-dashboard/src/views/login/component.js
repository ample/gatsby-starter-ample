import React from "react"
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

import Button from "@src/components/button"

import styles from "./styles.module.scss"

const LoginView = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) {
    navigate(`/admin`)
  }

  return (
    <div className={styles.login_view}>
      <div>
        <p>This section requires authentication.</p>
        <Button onClick={() => loginWithRedirect()}>Sign In</Button>
      </div>
    </div>
  )
}

export default LoginView
