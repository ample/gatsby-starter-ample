import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import { dropdown_menu, dropdown_trigger, dropdown, is_showing } from "./styles.module.scss"

const Dropdown = ({ handleDropdownClick, items, label, onClick, openDropdown }) => {
  const classes = classNames(dropdown, {
    [is_showing]: label === openDropdown
  })

  return (
    <span
      className={classes}
      onKeyPress={() => handleDropdownClick(label)}
      onClick={() => handleDropdownClick(label)}
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
   * A onClick function passed down from the navigation component
   */
  handleDropdownClick: PropTypes.func,
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
  onClick: PropTypes.func,
  /**
   * Dropdown state passed down from the navigation component
   */
  openDropdown: PropTypes.string
}

export default Dropdown
