import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const Frame = ({ src, title }) => (
  <div className={styles.frame_container}>
    <iframe src={src} title={title} />
  </div>
)

Frame.propTypes = {
  /**
   * URL of the frame to insert.
   */
  src: PropTypes.string.isRequired,
  /**
   * Title attribute on iframe element.
   */
  title: PropTypes.string.isRequired
}

Frame.defaultProps = {}

export default Frame
