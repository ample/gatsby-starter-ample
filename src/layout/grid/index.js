import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import * as styles from "./styles.module.scss"

const Grid = ({ alignment, children, layout }) => {
  const classes = classNames(styles.grid, {
    [styles[`alignment_${alignment}`]]: alignment,
    [styles[`layout_is_${layout}`]]: layout
  })

  return <div className={classes}>{children}</div>
}

Grid.propTypes = {
  /**
   * Specifies how each grid item should be aligned within the grid
   */
  alignment: PropTypes.oneOf(["top", "bottom", "center"]),
  /**
   * Specifies anything between the opening and closing tag.
   */
  children: PropTypes.node,
  /**
   * Specifies the width of each grid item within the grid on larger screens
   */
  layout: PropTypes.oneOf(["1/4", "1/3", "1/2"])
}

Grid.defaultProps = {
  layout: "1/2"
}

export default Grid
