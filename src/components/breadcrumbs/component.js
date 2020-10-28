import React from "react"
import PropTypes from "prop-types"
import Link from "@src/components/link"

import styles from "./styles.module.scss"

const Breadcrumbs = ({ links, separator }) => (
  <ul className={styles.breadcrumbs}>
    {links.map(({ label, url }, index) => (
      <li key={index} data-separator={separator}>
        <Link to={url} key={index}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

Breadcrumbs.propTypes = {
  /**
   * An array of link objects used to build the breadcrumbs
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
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
