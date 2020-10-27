import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

import Link from "../link"

const Button = ({ children, className, onClick, to }) => {
  const classes = classNames(styles.button, { [className]: className })

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
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
  children: PropTypes.string.isRequired,
  /**
   * Specifies a click Function and uses the button element
   */
  onClick: PropTypes.func,
  /**
   * The href attribute for the link rendered to the screen.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
