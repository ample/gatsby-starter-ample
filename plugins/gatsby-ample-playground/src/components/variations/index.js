import React from "react"
import PropTypes from "prop-types"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"

const Variations = ({ component, data }) => {
  const TagName = component

  return (
    <div>
      {Object.entries(data).map((obj, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="mb-2">{startCase(toLower(obj[0]))}</h3>
          <TagName {...obj[1]} />
        </div>
      ))}
    </div>
  )
}

Variations.propTypes = {
  /**
   * The component to render.
   */
  component: PropTypes.func.isRequired,
  /**
   * Data from the fixture.
   */
  data: PropTypes.object.isRequired
}

Variations.defaultProps = {}

export default Variations
