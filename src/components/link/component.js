import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { isGatsbyLink } from "./helpers"

import ExternalLink from "./external-link"
import InternalLink from "./internal-link"

import styles from "./styles.module.scss"

const Link = props => {
  const classes = classNames(styles.link, {
    [props.className]: props.className,
    [styles[`is_external`]]: !isGatsbyLink(props.to)
  })

  let link

  if (isGatsbyLink(props.to)) {
    link = <InternalLink className={classes} {...props} />
  } else {
    link = <ExternalLink className={classes} {...props} />
  }

  return link
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
