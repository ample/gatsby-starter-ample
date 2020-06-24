import React from "react"
import { Helmet } from "react-helmet"

import Variations from "../../components/variations"

import * as config from "../../../../../ample-config"

import styles from "./styles.module.scss"

const ComponentsPlayground = () => {
  const components = Object.entries(config.components).map((comp, idx) => {
    const compName = comp[0]
    const { component, fixtures } = comp[1]
    const Component = component

    return (
      <div key={idx} className={styles.comp_section}>
        <h2 id={compName} className={styles.comp_heading}>
          <a href={`#${compName}`}>{component.name}</a>
        </h2>
        <Variations component={Component} data={fixtures} />
      </div>
    )
  })

  return (
    <div className={styles.components_template}>
      <Helmet>
        <title>Components | Ample Playground</title>
      </Helmet>
      {components}
    </div>
  )
}

ComponentsPlayground.propTypes = {}

ComponentsPlayground.defaultProps = {}

export default ComponentsPlayground
