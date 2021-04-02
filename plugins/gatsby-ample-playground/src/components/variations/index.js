import React from "react"
import PropTypes from "prop-types"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"

import * as styles from "./../../templates/components/styles.module.scss"

const Variations = ({ component, data }) => {
  const TagName = component

  return (
    <>
      {Object.entries(data).map((obj, idx) => (
        <div className={styles.component_variation} key={idx}>
          <h3 className={styles.component_variation_name}>{startCase(toLower(obj[0]))}</h3>
          <div className={styles.component_variation_container}>
            <TagName {...obj[1]} />
          </div>
        </div>
      ))}
    </>
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
