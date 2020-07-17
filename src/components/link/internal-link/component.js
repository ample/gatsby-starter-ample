import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const InternalLink = props => (
  <GatsbyLink
    to={props.to}
    className={props.className}
    activeStyle={props.activeStyle}
    activeClassName={props.activeClassName}
    onClick={props.onClick && props.onClick.bind(this)}
  >
    {props.children}
  </GatsbyLink>
)

InternalLink.propTypes = {
  /**
   * Passed to Gatsby's <Link /> component. [See here for more info](https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link).
   */
  activeClassName: PropTypes.string,
  /**
   * Passed to Gatsby's <Link /> component. [See here for more info](https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link).
   */
  activeStyle: PropTypes.object,
  /**
   * Text or elements to render inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * The "class" attribute that gets passed to Gatsby's <Link /> component.
   */
  className: PropTypes.string,
  /**
   * The path of the link.
   */
  to: PropTypes.string.isRequired,
  /**
   * Event handler for the onClick event
   */
  onClick: PropTypes.func
}

export default InternalLink
