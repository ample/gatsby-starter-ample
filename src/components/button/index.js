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
   * Specifies additional class names
   */
  className: PropTypes.string,
  /**
   * Specifies the button text
   */
  label: PropTypes.string.isRequired,
  /**
   * Specifies where the button links
   */
  url: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
