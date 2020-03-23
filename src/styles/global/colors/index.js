import React from "react"

import colors from "./_index.scss"
import styles from "./styles.module.scss"

const Colors = () => {
  const colorGrid = Object.keys(colors).map((key, index) => (
    <div
      key={index}
      className={styles.color}
      style={{
        backgroundColor: colors[key]
      }}
    >
      <span>
        --
        {key
          .replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
          .split(" ")
          .join("-")
          .toLowerCase()}
      </span>
    </div>
  ))

  return <div className={styles.colors}>{colorGrid}</div>
}

export default Colors
