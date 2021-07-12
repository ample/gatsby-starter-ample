import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Block from "@components/block"

// -------------------------------------------------------- | styles

import {
  column,
  col_width_one_fourth,
  col_width_one_third,
  col_width_one_half,
  col_width_two_thirds,
  col_width_three_fourths
} from "./styles.module.scss"

const widthOptions = {
  "1/2": col_width_one_half,
  "1/3": col_width_one_third,
  "1/4": col_width_one_fourth,
  "2/3": col_width_two_thirds,
  "3/4": col_width_three_fourths,
  full: null
}

// -------------------------------------------------------- | component

const Column = ({ className, blocks, config }) => {
  const wrapperClasses = classNames(column, {
    [className]: className,
    [`mb-${config.margin_bottom}`]: config.margin_bottom,
    [`text-${config.text_align}`]: config.text_align,
    [widthOptions[config.width]]: widthOptions[config.width]
  })

  return (
    <div className={wrapperClasses}>
      {blocks.map((block, idx) => (
        <Block key={idx} {...block} />
      ))}
    </div>
  )
}

Column.propTypes = {
  /**
   * An array of component objects that get passed on to the <Block />.
   */
  blocks: PropTypes.arrayOf(PropTypes.object),
  /**
   * An object that controls the styling of the container on screen.
   */
  config: PropTypes.shape({
    margin_bottom: PropTypes.string,
    text_align: PropTypes.oneOf(["left", "center", "right", ""]),
    width: PropTypes.oneOf(Object.keys(widthOptions))
  })
}

Column.defaultProps = {
  blocks: [],
  config: {}
}

export default Column
