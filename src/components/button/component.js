import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "../link"
import SVG from "../svg"

import { button, theme_default } from "./styles.module.scss"

const Button = ({ children, className, onClick, theme, to }) => {
  const classes = classNames(button, theme_default, {
    [className]: className
    // TODO: How do we handle multiple theme classes
    // [styles[`theme_${theme}`]]: theme
  })

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
      {theme === "arrow" && <SVG name="angle-right" />}
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
  theme: PropTypes.oneOf(["arrow", "default", "outline"]),
  /**
   * The href attribute for the link rendered to the screen.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {
  // theme: "default"
}

export default Button
