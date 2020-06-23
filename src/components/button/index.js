import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

import Link from "../link"

const Button = ({ className, label, onClick, url }) => {
  const classes = classNames(styles.button, { [className]: className })

  return (
    <Link to={url} className={classes} onClick={onClick}>
      {label}
    </Link>
  )
}

Button.propTypes = {
  /**
   * Additional classes on the link element.
   */
  className: PropTypes.string,
  /**
   * Text rendered to the screen inside the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Specifies a click Function and uses the button element
   */
  onClick: PropTypes.func,
  /**
   * The href attribute for the link rendered to the screen.
   */
  url: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
