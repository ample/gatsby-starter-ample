import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Button from "../button"
import { Dropdown, DropdownMenu, DropdownTrigger } from "../dropdown"
import Link from "../link"

import styles from "./styles.module.scss"

const LinkList = ({ activeClassName, className, heading, links = [], vertical }) => {
  const classes = classNames(styles.cl_link_list, className, {
    [styles[`cl_link_list_is_vertical`]]: vertical
  })

  return (
    <ul className={classes}>
      {heading && (
        <li>
          <strong>{heading}</strong>
        </li>
      )}

      {links.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return (
            <li key={index}>
              <Dropdown key={index}>
                <DropdownTrigger>{item.label}</DropdownTrigger>
                <DropdownMenu items={item.children} />
              </Dropdown>
            </li>
          )
        } else if (item.button) {
          return (
            <li key={index}>
              <Button className={item.className} to={item.url}>
                {item.label}
              </Button>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <Link
                activeClassName={activeClassName}
                className={item.className}
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
  )
}

LinkList.propTypes = {
  /**
   * Specifies an active class name, passed on to the <Link /> component
   */
  activeClassName: PropTypes.string,
  /**
   * CSS class(es) applied to the wrapping element
   */
  className: PropTypes.string,
  /**
   * Heading rendered before the items, typically only used in vertical lists
   */
  heading: PropTypes.string,
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
   * Specifies if the direction of the link list should be vertical
   */
  vertical: PropTypes.bool
}

LinkList.defaultProps = {
  vertical: false
}

export default LinkList
