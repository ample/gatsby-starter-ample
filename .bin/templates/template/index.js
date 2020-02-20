import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const TemplateName = ({ propName }) => (
  <div className={styles.root}>
    <p>{propName}</p>
  </div>
)

TemplateName.propTypes = {
  /** prop description here */
  propName: PropTypes.string.isRequired
}

TemplateName.defaultProps = {}

export default TemplateName
