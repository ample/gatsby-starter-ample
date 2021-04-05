import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Content = ({ body, className }) => (
  <div
    className={classNames({ [className]: className })}
    dangerouslySetInnerHTML={{ __html: body }}
  />
)

Content.propTypes = {
  /**
   * HTML string to be rendered to the page.
   */
  body: PropTypes.string.isRequired,
  /**
   * Additional classes placed on the wrapping element.
   */
  className: PropTypes.string
}

Content.defaultProps = {}

export default Content
