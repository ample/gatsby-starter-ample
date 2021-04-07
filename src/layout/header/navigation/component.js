import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import classNames from "classnames"
import OutsideClickHandler from "react-outside-click-handler"
import PropTypes from "prop-types"

import Button from "@src/components/button"
import { Dropdown } from "./dropdown"
import Link from "@src/components/link"

import { is_active, nav_button, navigation } from "./styles.module.scss"

const Navigation = ({ className, links = [], onClick }) => {
  const [openDropdown, setOpenDropdown] = useState("")
  const classes = classNames(navigation, className, {})

  const handleQueryChange = (match) => {
    if (!match) {
      setOpenDropdown("")
    }
  }

  const isMobileNavigation = useMediaQuery(
    { query: "(max-width: 65em)" },
    undefined,
    handleQueryChange
  )

  const handleDropdownClick = (label) => {
    label === openDropdown ? setOpenDropdown("") : setOpenDropdown(label)
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpenDropdown("") || isMobileNavigation}>
      <ul className={classes}>
        {links.map((item, index) => {
          if (item.children && item.children.length > 0) {
            return (
              <li key={index}>
                <Dropdown
                  handleDropdownClick={handleDropdownClick}
                  items={item.children}
                  key={index}
                  label={item.label}
                  onClick={onClick}
                  openDropdown={openDropdown}
                />
              </li>
            )
          } else if (item.button) {
            return (
              <li className={nav_button} key={index}>
                <Button
                  className={classNames([item.className])}
                  onClick={onClick}
                  theme={item.theme}
                  to={item.url}
                >
                  {item.label}
                </Button>
              </li>
            )
          } else {
            return (
              <li key={index}>
                <Link
                  activeClassName={is_active}
                  className={item.className}
                  onClick={onClick}
                  title={item.title}
                  to={item.url}
                >
                  {item.label}
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </OutsideClickHandler>
  )
}

Navigation.propTypes = {
  /**
   * CSS class(es) applied to the wrapping element
   */
  className: PropTypes.string,
  /**
   * An array of link objects used to build the list
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      button: PropTypes.bool,
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  /**
   * A onClick function passed to all navigation links
   */
  onClick: PropTypes.func
}

Navigation.defaultProps = {}

export default Navigation
