import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@components/link"
import SVG from "@components/svg"

import { breadcrumbs, crumb, icon_only } from "./styles.module.scss"

const Breadcrumbs = ({ className, links, separator }) => (
  <ul className={classNames(breadcrumbs, { [className]: className })}>
    {links.map(({ label, icon, url }, index) => (
      <li className={classNames({ [[icon_only]]: icon })} key={index} data-separator={separator}>
        <Link className={crumb} to={url} key={index}>
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
   * An array of links used to build the breadcrumbs
   * If a label and icon exist, the icon will be added to the left of the label.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
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
