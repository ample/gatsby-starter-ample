import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useMediaQuery } from "react-responsive"
import Link from "@src/components/link"
import SVG from "@src/components/svg"
import Navigation from "./navigation"

import {
  header,
  is_desktop,
  logo,
  logo_container,
  main_navigation_container,
  menu_button,
  navigation_container,
  navigation_is_showing,
  top_navigation_container
} from "./styles.module.scss"

const Header = ({ main_navigation, top_navigation }) => {
  // ------------------------------------------------------ | Mobile Menu

  const [menuIsOpen, setMenu] = useState(false)

  const handleMediaQueryChange = (match) => {
    if (!match) {
      lockScroll(false)
      setMenu(false)
    }
  }

  const lockScroll = (menuIsOpen) => {
    overflowHidden(menuIsOpen)
  }

  const mobileMenuClick = () => {
    if (isMobileNavigation) {
      lockScroll(!menuIsOpen)
      setMenu(!menuIsOpen)
    }
  }

  const overflowHidden = (menuIsOpen) => {
    if (menuIsOpen) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.removeProperty("overflow")
    }
  }

  useEffect((menuIsOpen) => {
    overflowHidden(menuIsOpen)
  }, [])

  const isMobileNavigation = useMediaQuery({ maxWidth: 1040 }, null, handleMediaQueryChange)

  // ------------------------------------------------------ | Classes

  const classes = classNames(header, {
    [is_desktop]: !isMobileNavigation,
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

          <button className={menu_button} onClick={mobileMenuClick}>
            <span>Menu</span>
            {!menuIsOpen ? <SVG name="bars" /> : <SVG name="times" />}
          </button>
        </div>

        <div className={navigation_container}>
          <Navigation
            className={top_navigation_container}
            links={top_navigation}
            onClick={mobileMenuClick}
          />
          <Navigation
            className={main_navigation_container}
            links={main_navigation}
            onClick={mobileMenuClick}
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
  main_navigation: PropTypes.array.isRequired,
  /**
   * An array of links that sit above the main_nav
   * This prop is passed to the LinkList component
   */
  top_navigation: PropTypes.array
}

Header.defaultProps = {}

export default Header
