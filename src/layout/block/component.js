import React from "react"
import PropTypes from "prop-types"

import componentMap from "./component-map"

const Block = (props) => {
  // If no data was passed, render nothing.
  if (!props) return null

  // Name of the component to render comes from the componentMap, defined in
  // component-map.js.
  const TagName = componentMap[props.template]

  // If the tag is not found, throw a console error and exit.
  if (!TagName) {
    console.error(`${props.template} mapping is not supported.`)
    return null
  }

  // Render the component
  return <TagName {...props} />
}

/**
 * This is open-ended. All other props pass-through this component directly to
 * the component.
 */
Block.propTypes = {
  /**
   * The name of the component, which gets mapped to the actual component in
   * component-map.js.
   */
  template: PropTypes.string
}

Block.defaultProps = {}

export default Block
