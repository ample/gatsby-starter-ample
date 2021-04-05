import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { isGatsbyLink } from "./helpers"

import ExternalLink from "./external-link"
import InternalLink from "./internal-link"

import { link, is_external } from "./styles.module.scss"

const Link = (props) => {
  const classes = classNames(link, {
    [props.className]: props.className,
    [[is_external]]: !isGatsbyLink(props.to)
  })

  let linkComponent

  if (isGatsbyLink(props.to)) {
    linkComponent = <InternalLink className={classes} {...props} />
  } else {
    linkComponent = <ExternalLink className={classes} {...props} />
  }

  return linkComponent
}

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
