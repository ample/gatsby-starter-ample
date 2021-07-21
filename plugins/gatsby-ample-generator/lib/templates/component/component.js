import React from "react"
import PropTypes from "prop-types"

import { component_name } from "./styles.module.scss"

const ComponentName = ({ name }) => (
  <div className={component_name}>
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
