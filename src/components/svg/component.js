import React, { Fragment } from "react"
import PropTypes from "prop-types"
import svgs from "./svgs"

const SVG = ({ name }) => {
  return <Fragment>{svgs[name]}</Fragment>
}

SVG.propTypes = {
  /**
   * The name of the svg
   */
  name: PropTypes.string.isRequired
}

SVG.defaultProps = {}

export default SVG
