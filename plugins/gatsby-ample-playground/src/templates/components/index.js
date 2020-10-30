import React from "react"
import { Helmet } from "react-helmet"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"
import useDarkMode from "use-dark-mode"

import Variations from "../../components/variations"

import config from "@root/playground.config"

import Image from "@src/components/image"
import Link from "@src/components/link"

import icon from "@src/images/favicon.png"

import styles from "./styles.module.scss"

const ComponentsPlayground = () => {
  const darkMode = useDarkMode(false)

  const components = Object.entries(config.components).map((cfg, idx) => {
    const compName = cfg[0]
    const { component: Component, fixtures } = cfg[1]

    return (
      <section
        key={idx}
        className={styles.component}
        style={{ maxWidth: cfg[1].maxWidth || "100%" }}
      >
        <h2 id={compName} className={styles.component_name}>
          <a href={`#${compName}`}>{startCase(toLower(compName))}</a>
        </h2>
        <Variations component={Component} data={fixtures} />
      </section>
    )
  })

  const title = `Components | ${config.title || "Ample Playground"}`

  return (
    <main className={styles.playground}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header className={styles.playground_header}>
        <Link to="/" className={styles.logo}>
          <Image src={icon} alt="logo" />
        </Link>
        <h1>{title}</h1>
      </header>

      {components}
    </main>
  )
}

ComponentsPlayground.propTypes = {}

ComponentsPlayground.defaultProps = {}

export default ComponentsPlayground
