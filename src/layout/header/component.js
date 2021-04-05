import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import Navigation from "./navigation"

import {
  header,
  logo_container,
  logo,
  main_navigation,
  menu_button,
  navigation_container,
  navigation_is_showing,
  top_navigation
} from "./styles.module.scss"

const Header = ({ mainNavigation, topNavigation }) => {
  // ------------------------------------------------------ | Mobile Menu

  const [menuIsOpen, setMenu] = useState(false)

  const smallScreenMenuClick = () => {
    setMenu(!menuIsOpen)

    if (menuIsOpen === false) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.removeProperty("overflow")
    }
  }

  // ------------------------------------------------------ | Classes

  const classes = classNames(header, {
    [navigation_is_showing]: menuIsOpen
  })

  // ------------------------------------------------------ | Component

  return (
    <header className={classes}>
      <div>
        <div className={logo_container}>
          <Link className={logo} to="/">
            <SVG name="logo" />
          </Link>

          <button className={menu_button} onClick={smallScreenMenuClick}>
            <span>Menu</span>
            {!menuIsOpen ? <SVG name="bars" /> : <SVG name="close" />}
          </button>
        </div>

        <div className={navigation_container}>
          <Navigation
            className={top_navigation}
            links={topNavigation}
            onClick={smallScreenMenuClick}
          />
          <Navigation
            className={main_navigation}
            links={mainNavigation}
            onClick={smallScreenMenuClick}
          />
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  /**
   * An array of main navigation links.
   * This prop is passed to the LinkList component
   */
  mainNavigation: PropTypes.array.isRequired,
  /**
   * An array of links that sit above the main_nav
   * This prop is passed to the LinkList component
   */
  topNavigation: PropTypes.array
}

Header.defaultProps = {}

export default Header
