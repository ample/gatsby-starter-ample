import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const SectionName = ({ propName }) => (
  <div className={styles.section_name}>
    <p>{propName}</p>
  </div>
)

SectionName.propTypes = {
  /**
   * prop description here
   */
  propName: PropTypes.string.isRequired
}

SectionName.defaultProps = {}

export default SectionName
