import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const ComponentName = ({ propName }) => (
  <div className={styles.component_name}>
    <p>{propName}</p>
  </div>
)

ComponentName.propTypes = {
  /**
   * prop description here
   */
  propName: PropTypes.string.isRequired
}

ComponentName.defaultProps = {}

export default ComponentName
