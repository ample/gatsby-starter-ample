{
  /* eslint-disable no-undef, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
}

import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

const DebugMediaQueries = ({ isShowing }) => {
  if (isShowing !== "true") return null

  const [isOpen, setOpen] = useState(false)

  const classes = classNames(styles.debug, isOpen, {
    [styles.is_showing]: isOpen
  })

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={classes} onClick={handleClick}>
      <div className={styles.debug_media_queries} />
    </div>
  )
}

DebugMediaQueries.propTypes = {
  /**
   * Specifies if the debugger is showing
   */
  isShowing: PropTypes.string
}

export default DebugMediaQueries
