import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Link from "../../link"

import styles from "./styles.module.scss"

const DropdownMenu = ({ className, items }) => {
  if (!items || items.length === 0) return null
  return (
    <ul className={classNames(styles.dropdown_menu, { [className]: className })}>
      {items.map((item, idx) => (
        <li key={idx} className={item.className}>
          <Link to={item.url}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

DropdownMenu.propTypes = {
  /**
   * CSS class to apply to the wrapping element
   */
  className: PropTypes.string,
  /**
   * An array of items to render in the dropdown menu
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * CSS class(es) to apply to the individual element
       */
      className: PropTypes.string,
      /**
       * Label for list item
       */
      label: PropTypes.string.isRequired,
      /**
       * URL for list item (href attribute)
       */
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DropdownMenu
