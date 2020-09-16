import React from "react"
import PropTypes from "prop-types"

import componentMap from "./component-map"

const Component = ({ data }) => {
  // If no data was passed, render nothing.
  if (!data) return null

  // Name of the component to render comes from the componentMap, defined in
  // component-map.js.
  const TagName = componentMap[data.template]

  // If the tag is not found, throw a console error and exit.
  if (!TagName) {
    console.error(`${data.template} not supported by <Container />.`)
    return null
  }

  // Render the component
  return <TagName {...data} />
}

Component.propTypes = {
  /**
   * The component's data object. It must have a template property, but is
   * otherwise open-ended.
   */
  data: PropTypes.shape({
    template: PropTypes.string
  })
}

Component.defaultProps = {}

export default Component
