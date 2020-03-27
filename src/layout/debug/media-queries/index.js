{
  /* eslint-disable no-undef, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
}

import React, { useState } from "react"
import classNames from "classnames/bind"
import styles from "./styles.module.scss"

const DebugMediaQueries = () => {
  if (process.env.GATSBY_DEBUG_MEDIA_QUERIES !== "true") return null

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

export default DebugMediaQueries
