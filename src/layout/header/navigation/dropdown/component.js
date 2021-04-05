import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import { dropdown, dropdown_menu, dropdown_trigger, is_showing } from "./styles.module.scss"

const Dropdown = ({ items, label, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = classNames(dropdown, {
    [is_showing]: isOpen
  })

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <span
      className={classes}
      onClick={handleOnClick}
      onKeyPress={handleOnClick}
      role="button"
      tabIndex={0}
    >
      <div className={dropdown_trigger}>
        {label}
        <SVG name="angle-down" />
      </div>

      <ul className={dropdown_menu}>
        {items.map((item, idx) => (
          <li key={idx} className={item.className}>
            <Link to={item.url} onClick={onClick}>
              {item.label}
            </Link>
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
  label: PropTypes.string.isRequired,
  /**
   * A onClick function passed down from the navigation component
   */
  onClick: PropTypes.func
}

export default Dropdown
