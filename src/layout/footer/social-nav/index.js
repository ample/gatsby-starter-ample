import React from "react"
import PropTypes from "prop-types"

import Link from "~components/link"
import SVG from "~components/svg"

import styles from "./styles.module.scss"

const SocialNav = ({ links }) => (
  <nav className={styles.social_nav}>
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
