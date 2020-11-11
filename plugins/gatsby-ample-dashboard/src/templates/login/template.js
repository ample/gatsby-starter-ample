import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"

const LoginTemplate = () => {
  if (isLoggedIn()) {
    navigate(`/admin/training`)
  }

  const [user, setUser] = useState({ username: ``, password: `` })

  const handleUpdate = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const success = handleLogin(user)
    console.log({ success })
  }

  return (
    <>
      <h1>Log in</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="username" onChange={handleUpdate} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleUpdate} />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}

export default LoginTemplate
