import React from "react"
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

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
        <button onClick={() => loginWithRedirect()}>Sign In</button>
      </div>
    </div>
  )
}

export default LoginView
