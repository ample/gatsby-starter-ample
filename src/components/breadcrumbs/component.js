import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import styles from "./styles.module.scss"

const Breadcrumbs = ({ className, links, separator }) => (
  <ul className={classNames(styles.breadcrumbs, { [className]: className })}>
    {links.map(({ label, icon, url }, index) => (
      <li
        className={classNames({ [styles[`only_icon`]]: icon })}
        key={index}
        data-separator={separator}
      >
        <Link className={styles.crumb} to={url} key={index}>
          <>
            {icon && <SVG name={icon} />}
            {label && label}
          </>
        </Link>
      </li>
    ))}
  </ul>
)

Breadcrumbs.propTypes = {
  /**
   * Additional classes on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * An array of links used to build the breadcrumbs
   * If a label and icon exist, the icon will be added to the left of the label.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      url: PropTypes.string
    })
  ),
  /**
   * The character used to separate the breadcrumbs.
   */
  separator: PropTypes.string
}

Breadcrumbs.defaultProps = {
  separator: "/"
}

export default Breadcrumbs
