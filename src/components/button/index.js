import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import { Link } from "gatsby-theme-ample-components"

import styles from "./styles.module.scss"

const Button = ({ className, label, url }) => {
  const classes = classNames(styles.button, { [className]: className })

  return (
    <Link to={url} className={classes}>
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
   * The href attribute for the link rendered to the screen.
   */
  url: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
