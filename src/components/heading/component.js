import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

// -------------------------------------------------------- | styles

import {
  heading_level_h1,
  heading_level_h2,
  heading_level_h3,
  heading_level_h4,
  heading_level_h5
} from "./styles.module.scss"

const levelOptions = {
  h1: heading_level_h1,
  h2: heading_level_h2,
  h3: heading_level_h3,
  h4: heading_level_h4,
  h5: heading_level_h5
}

// -------------------------------------------------------- | component

const Heading = ({ body, level: Level }) => {
  const classes = classNames({
    [levelOptions[Level]]: levelOptions[Level]
  })

  return <Level className={classes} dangerouslySetInnerHTML={{ __html: body }} />
}

Heading.propTypes = {
  /**
   * Text to render within the heading.
   */
  body: PropTypes.string,
  /**
   * The tag used to wrap the heading.
   */
  level: PropTypes.oneOf(Object.keys(levelOptions))
}

Heading.defaultProps = {}

export default Heading
