import React from "react"
import PropTypes from "prop-types"

import { isGatsbyLink } from "./helpers"

import ExternalLink from "./external-link"
import InternalLink from "./internal-link"

const Link = props =>
  isGatsbyLink(props.to) ? <InternalLink {...props} /> : <ExternalLink {...props} />

Link.propTypes = {
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Link.defaultProps = {
  target: "_blank"
}

export default Link
