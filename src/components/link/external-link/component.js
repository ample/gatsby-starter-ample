import React from "react"
import PropTypes from "prop-types"

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

export default ExternalLink
