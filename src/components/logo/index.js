import React, { Fragment } from "react"
import PropTypes from "prop-types"
import logos from "./logos"

const Logo = ({ name }) => {
  return <Fragment>{logos[name]}</Fragment>
}

Logo.propTypes = {
  /**
   * The name of the icon
   */
  name: PropTypes.string.isRequired
}

Logo.defaultProps = {}

export default Logo
