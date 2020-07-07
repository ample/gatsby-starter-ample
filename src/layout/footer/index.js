import React from "react"
import PropTypes from "prop-types"

import Logo from "./../../components/logo"
import Link from "./../../components/link"
import LinkList from "./../../components/link-list"

import styles from "./styles.module.scss"

const Footer = ({ copyright, menus, policy_links }) => (
  <footer className={styles.footer}>
    <div>
      <div className={styles.logo}>
        <Link to="/">
          <Logo name="ample_teardrop" />
        </Link>
      </div>

      {menus.map((menu, index) => (
        <LinkList key={index} heading={menu.label} links={menu.links} vertical />
      ))}

      <LinkList links={policy_links} />

      {copyright && <small className={styles.copyright}>&copy; {copyright}</small>}
    </div>
  </footer>
)

Footer.propTypes = {
  /**
   * Copyright text.
   */
  copyright: PropTypes.string.isRequired,
  /**
   * An array of footer menu links. These are passed on to the LinkList component
   */
  menus: PropTypes.array.isRequired,
  /**
   * An array of Policy links - e.g. "Privacy Policy", "Terms of Service"
   */
  policy_links: PropTypes.shape({
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  }),
  /**
   * An array of social links to push to various platform profiles.
   */
  social_links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

Footer.defaultProps = {}

export default Footer
