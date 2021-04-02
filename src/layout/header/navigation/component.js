import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Button from "@src/components/button"
import { Dropdown } from "./dropdown"
import Link from "@src/components/link"

import * as styles from "./styles.module.scss"

const Navigation = ({ className, links = [], onClick }) => {
  const classes = classNames(styles.navigation, className, {})

  return (
    <ul className={classes}>
      {links.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return (
            <li key={index}>
              <Dropdown key={index} items={item.children} label={item.label} onClick={onClick} />
            </li>
          )
        } else if (item.button) {
          return (
            <li className={styles.nav_button} key={index}>
              <Button
                className={classNames(styles[item.className])}
                to={item.url}
                theme={item.theme}
                onClick={onClick}
              >
                {item.label}
              </Button>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <Link
                activeClassName={styles.is_active}
                className={item.className}
                title={item.title}
                to={item.url}
                onClick={onClick}
              >
                {item.label}
              </Link>
            </li>
          )
        }
      })}
    </ul>
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
