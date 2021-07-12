import React, { Fragment } from "react"
import PropTypes from "prop-types"

import svgOptions from "./svgs"

const SVG = ({ name }) => {
  return <Fragment>{svgOptions[name]}</Fragment>
}

SVG.propTypes = {
  /**
   * The name of the svg
   */
  name: PropTypes.oneOf(Object.keys(svgOptions)).isRequired
}

SVG.defaultProps = {}

export default SVG
