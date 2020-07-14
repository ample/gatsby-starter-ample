import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Icon from "./../../components/icon"
import Link from "./../../components/link"
import LinkList from "./../../components/link-list"
import Logo from "./../../components/logo"

import styles from "./styles.module.scss"

const Header = ({ main_navigation, top_navigation }) => {
  const [menuIsOpen, setMenu] = useState(false)

  const smallScreenMenuClick = () => {
    setMenu(!menuIsOpen)

    if (menuIsOpen === false) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.removeProperty("overflow")
    }
  }

  const classes = classNames(styles.header, {
    [styles.navigation_is_showing]: menuIsOpen
  })

  return (
    <header className={classes}>
      <div>
        <div className={styles.logo_container}>
          <Link className={styles.logo} to="/">
            <Logo name="ample" />
          </Link>

          <button className={styles.menu_button} onClick={smallScreenMenuClick}>
            <span>Menu</span>
            {!menuIsOpen ? <Icon name="bars" /> : <Icon name="close" />}
          </button>
        </div>

        <div className={styles.navigation}>
          <LinkList className={styles.top_navigation} links={top_navigation} />
          <LinkList className={styles.main_navigation} links={main_navigation} />
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
