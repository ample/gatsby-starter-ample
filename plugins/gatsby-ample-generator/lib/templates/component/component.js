import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const ComponentName = ({ name }) => (
  <div className={styles.component_name}>
    <p>{name}</p>
  </div>
)

ComponentName.propTypes = {
  /**
   * Brief description of the "name" prop ...
   */
  name: PropTypes.string
}

ComponentName.defaultProps = {}

export default ComponentName
