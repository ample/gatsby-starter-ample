import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

const Content = ({ body, className }) => (
  <div
    className={classNames(styles.content, { [className]: className })}
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
