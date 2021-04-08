import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { debug, is_showing, debug_media_queries } from "./styles.module.scss"

const DebugMediaQueries = ({ isShowing }) => {
  const [isOpen, setOpen] = useState(false)

  if (isShowing !== "true") return null

  const classes = classNames(debug, {
    [is_showing]: isOpen
  })

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={classes} onClick={handleClick} aria-hidden="true">
      <div className={debug_media_queries} />
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
