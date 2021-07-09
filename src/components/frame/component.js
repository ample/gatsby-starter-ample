import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { frame_container } from "./styles.module.scss"

const Frame = ({ src, margin_bottom, title }) => {
  const classes = classNames(frame_container, {
    [`mb-${margin_bottom}`]: margin_bottom
  })

  return (
    <div className={classes}>
      <iframe src={src} title={title} />
    </div>
  )
}

Frame.propTypes = {
  /**
   * Number of pixels to push subsequent content down the page.
   */
  margin_bottom: PropTypes.string,
  /**
   * URL of the frame to insert.
   */
  src: PropTypes.string.isRequired,
  /**
   * Title attribute on iframe element.
   */
  title: PropTypes.string
}

Frame.defaultProps = {}

export default Frame
