import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "../link"
import SVG from "../svg"

// -------------------------------------------------------- | styles

import { button, theme_arrow, theme_default, theme_outline } from "./styles.module.scss"

const themeOptions = {
  arrow: theme_arrow,
  default: theme_default,
  outline: theme_outline
}

// -------------------------------------------------------- | component

const Button = ({ children, className, onClick, theme, to }) => {
  const classes = classNames(button, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme]
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
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
  /**
   * The href attribute for the link rendered to the screen.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {
  theme: "default"
}

export default Button
