import React from "react"
import PropTypes from "prop-types"

import Link from "../../components/link"
import LinkList from "./link-list"
import SocialNav from "./social-nav"
import SVG from "../../components/svg"

import * as styles from "./styles.module.scss"

const Footer = ({ copyright, menus, policy_links, social_links }) => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <div>
        <div className={styles.logo}>
          <Link to="/">
            <SVG name="logo" />
          </Link>
        </div>

        <nav className={styles.menus}>
          {menus &&
            menus.map((menu, index) => (
              <LinkList
                className={styles.menu}
                key={index}
                heading={menu.heading}
                links={menu.links}
                vertical
              />
            ))}
        </nav>
      </div>

      <div>
        {social_links && <SocialNav links={social_links} />}

        {policy_links && <LinkList className={styles.policy_links} links={policy_links} />}

        {copyright && <small className={styles.copyright}>&copy; {copyright}</small>}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  /**
   * Copyright text.
   */
  copyright: PropTypes.string.isRequired,
  /**
   * An array of footer menu links.
   * This prop is passed to the LinkList component
   */
  menus: PropTypes.array.isRequired,
  /**
   * An array of Policy links - e.g. "Privacy Policy", "Terms of Service"
   * This prop is passed to the LinkList component
   */
  policy_links: PropTypes.array,
  /**
   * An array of social links
   * This prop is passed to the SocialNav component
   */
  social_links: PropTypes.array
}

Footer.defaultProps = {}

export default Footer
