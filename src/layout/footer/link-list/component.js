import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"

import { link_list } from "./styles.module.scss"

const LinkList = ({ activeClassName, className, heading, links = [] }) => {
  const classes = classNames(link_list, { [className]: className })

  return (
    <ul className={classes}>
      {heading && (
        <li>
          <strong>{heading}</strong>
        </li>
      )}

      {links.map((item, index) => {
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
   * Heading rendered before the items, typically only used in vertical lists
   */
  heading: PropTypes.string,
  /**
   * An array of link objects used to build the list
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      button: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      ),
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

LinkList.defaultProps = {}

export default LinkList
