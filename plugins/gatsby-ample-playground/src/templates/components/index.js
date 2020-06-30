import React, { useState } from "react"
import { Helmet } from "react-helmet"
import lodash from "lodash"

import Variations from "../../components/variations"

import config from "root/playground.config"

import styles from "./styles.module.scss"

const ComponentsPlayground = () => {
  const [currentColor, setCurrentColor] = useState(
    lodash.get(config, "themes.default") || "transparent"
  )

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

  const title = `Components | ${config.title || "Ample Playground"}`

  return (
    <div className={styles.template} style={{ backgroundColor: currentColor }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className={styles.header}>
        <h1>{title}</h1>

        {config.themes && (
          <ul className={styles.theme_toggle}>
            {Object.values(config.themes).map((color, idx) => (
              <li key={idx}>
                <button
                  className={currentColor === color ? styles.active : null}
                  onClick={() => setCurrentColor(color)}
                  style={{ backgroundColor: color }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.comp_wrapper}>{components}</div>
    </div>
  )
}

ComponentsPlayground.propTypes = {}

ComponentsPlayground.defaultProps = {}

export default ComponentsPlayground