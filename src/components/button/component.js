import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { AnchorLink } from "gatsby-plugin-anchor-links"

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

const Button = ({ children, className, onClick, theme, to, type }) => {
  const classes = classNames(button, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme]
  })

  const buttonContents = (
    <>
      {children}
      {theme === "arrow" && <SVG name="angle-right" />}
    </>
  )

  // a element
  let buttonComponent = (
    <Link to={to} className={classes} onClick={onClick}>
      {buttonContents}
    </Link>
  )

  // button element
  if (!to && (onClick || type)) {
    buttonComponent = (
      <button className={classes} onClick={onClick} type={type}>
        {buttonContents}
      </button>
    )
  }

  // anchor links
  if (to !== undefined && to.includes("#")) {
    buttonComponent = (
      <AnchorLink to={to} className={classes}>
        {buttonContents}
      </AnchorLink>
    )
  }

  return buttonComponent
}

Button.propTypes = {
  /**
   * Specifies what is rendered inside the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * Specifies a click function and renders a `<button>` element.
   */
  onClick: PropTypes.func,
  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
  /**
   * Specifies the href attribute and if it contains "#" a smooth scroll anchor link used.
   */
  to: PropTypes.string,
  /**
   * Specifies the type attribute and renders a `<button>` element.
   */
  type: PropTypes.oneOf(["submit", "button"])
}

Button.defaultProps = {
  theme: "default"
}

export default Button
