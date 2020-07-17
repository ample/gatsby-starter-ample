import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"
import menuStyles from "./menu/styles.module.scss"

const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = classNames(styles.dropdown, {
    [menuStyles.is_showing]: isOpen,
    [className]: className
  })

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <span
      className={classes}
      role="button"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  )
}

Dropdown.propTypes = {
  /**
   * Element(s) to render to the screen
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS class to apply to the wrapping element
   */
  className: PropTypes.string
}

export default Dropdown
