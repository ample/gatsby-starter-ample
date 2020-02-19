import React from 'react'
import PropTypes from 'prop-types'

// import styles from './styles.module.scss'

const ComponentName = ({ propName }) => {
  return (
    <div className={styles.component_name}>
      {/* // */}
      {/* // */}
    </div>
  )
}

ComponentName.propTypes = {
  /** prop description here */
  propName: PropTypes.string.isRequired
}

ComponentName.defaultProps = {}

export default ComponentName
