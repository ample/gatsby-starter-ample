import React from "react"
import PropTypes from "prop-types"

import Link from "@src/components/link"
import SVG from "@src/components/svg"

import { social_nav } from "./styles.module.scss"

const SocialNav = ({ links }) => (
  <nav className={social_nav}>
    {links.map((link, index) => (
      <Link to={link.url} key={index}>
        <SVG name={link.icon} />
      </Link>
    ))}
  </nav>
)

SocialNav.propTypes = {
  /**
   * An array of social links.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

SocialNav.defaultProps = {}

export default SocialNav
