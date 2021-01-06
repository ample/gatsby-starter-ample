import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import styles from "./styles.module.scss"

const Dropdown = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = classNames(styles.dropdown, {
    [styles.is_showing]: isOpen
  })

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <span
      className={classes}
      onClick={handleOnClick}
      onKeyPress={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
    >
      <div className={styles.dropdown_trigger}>
        {label}
        <SVG name="arrow-down" />
      </div>

      <ul className={styles.dropdown_menu}>
        {items.map((item, idx) => (
          <li key={idx} className={item.className}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </span>
  )
}

Dropdown.propTypes = {
  /**
   * Element(s) to render to the screen
   */
  items: PropTypes.array.isRequired,
  /**
   * Dropdown label
   */
  label: PropTypes.string.isRequired
}

export default Dropdown
