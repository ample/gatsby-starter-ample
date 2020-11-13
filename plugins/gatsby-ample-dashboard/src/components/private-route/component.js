import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isAuthenticated } = useAuth0()

  if (!isAuthenticated && location.pathname !== `/admin/login`) {
    navigate("/admin/login")
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
}

export default PrivateRoute
