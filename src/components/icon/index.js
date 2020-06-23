import React, { Fragment } from "react"
import PropTypes from "prop-types"
import icons from "./icons"

const Icon = ({ name }) => {
  return <Fragment>{icons[name]}</Fragment>
}

Icon.propTypes = {
  /**
   * Specifies the name of the icon
   */
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {}

export default Icon
