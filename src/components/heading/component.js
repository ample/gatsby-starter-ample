import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const Heading = ({ body, level: Level }) => (
  <Level className={styles.heading} dangerouslySetInnerHTML={{ __html: body }} />
)

Heading.propTypes = {
  /**
   * Text to render within the heading.
   */
  body: PropTypes.string,
  /**
   * The tag used to wrap the heading.
   */
  level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", ""])
}

Heading.defaultProps = {}

export default Heading
