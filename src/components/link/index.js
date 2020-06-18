import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import URL from "url"

/**
 * Accepts a URL path and returns if that path is a path to a non-HTML file.
 */
const isFile = path => {
  // Get the last segment in the path.
  const filename = path.split("/").pop()
  // Extract the file extension, if there is one.
  const ext = filename.lastIndexOf(".") >= 0 ? filename.split(".").pop() : null
  // If there is a file extension and if it is NOT .html then return true.
  return ext && ext.toLowerCase() !== "html" ? true : false
}

/**
 * Accepts a link string and determines if we should render using gatsby-link or
 * a native anchor tag.
 */
const isGatsbyLink = link => {
  // Treat missing links as external, so it will render an anchor tag with an
  // empty href.
  if (!link || link.length === 0) return false
  // Parse the link's properties.
  const url = URL.parse(link)
  // If the link is a hash reference for the same page, don't use gatsby-link.
  if (!url.path && url.hash) return false
  // If the link is a URL, don't use gatsby-link.
  if (url.host) return false
  // If the link begins with "//" don't use gatsby-link.
  if (url.path.slice(0, 2) === "//") return false
  // Don't use gatsby-link if the link is a file reference and the extension is
  // not .html.
  return !isFile(url.path)
}

// ---------------------------------------- | Internal Link

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

// ---------------------------------------- | External Link

const ExternalLink = props => (
  <a
    href={props.to}
    target={props.target}
    rel={props.target === "_blank" ? "noopener" : ""}
    className={props.className}
    onClick={props.onClick && props.onClick.bind(this)}
  >
    {props.children}
  </a>
)

ExternalLink.propTypes = {
  /**
   * Text or elements to render inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * The "class" attribute of the anchor.
   */
  className: PropTypes.string,
  /**
   * The "target" attribute of the anchor.
   */
  target: PropTypes.string,
  /**
   * The URL of the link.
   */
  to: PropTypes.string.isRequired,
  /**
   * Event handler for the onClick event
   */
  onClick: PropTypes.func
}

// ---------------------------------------- | Link Component

const Link = props =>
  isGatsbyLink(props.to) ? <InternalLink {...props} /> : <ExternalLink {...props} />

Link.propTypes = {
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Link.defaultProps = {
  target: "_blank"
}

export default Link
export { ExternalLink, InternalLink, isFile, isGatsbyLink }
