import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

import Link from "../link"

const Button = ({ children, className, onClick, theme, to }) => {
  const classes = classNames(styles.button, {
    [className]: className,
    [styles[`theme_${theme}`]]: theme
  })

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
   * Specifies the theme of button
   */
  theme: PropTypes.oneOf(["", "outline"]),
  /**
   * The href attribute for the link rendered to the screen.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {
  theme: ""
}

export default Button
