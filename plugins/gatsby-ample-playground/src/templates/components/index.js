import React from "react"
import { Helmet } from "react-helmet"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"
import classNames from "classnames"
import useDarkMode from "use-dark-mode"

import Variations from "../../components/variations"

import config from "@root/playground.config"

import Link from "@src/components/link"

import * as styles from "./styles.module.scss"

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

  let toggleThemeIcon = (
    <svg viewBox="0 0 512 512">
      <path d="M256 143.7c-61.8 0-112 50.3-112 112.1s50.2 112.1 112 112.1 112-50.3 112-112.1-50.2-112.1-112-112.1zm0 192.2c-44.1 0-80-35.9-80-80.1s35.9-80.1 80-80.1 80 35.9 80 80.1-35.9 80.1-80 80.1zm256-80.1c0-5.3-2.7-10.3-7.1-13.3L422 187l19.4-97.9c1-5.2-.6-10.7-4.4-14.4-3.8-3.8-9.1-5.5-14.4-4.4l-97.8 19.4-55.5-83c-6-8.9-20.6-8.9-26.6 0l-55.5 83-97.8-19.5c-5.3-1.1-10.6.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4L90 187 7.1 242.5c-4.4 3-7.1 8-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3L90 324.6l-19.4 97.9c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.5 14.4 4.4l97.8-19.4 55.5 83c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.5-83 97.8 19.4c5.4 1.2 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4L422 324.6l82.9-55.5c4.4-3 7.1-8 7.1-13.3zm-116.7 48.1c-5.4 3.6-8 10.1-6.8 16.4l16.8 84.9-84.8-16.8c-6.6-1.4-12.8 1.4-16.4 6.8l-48.1 72-48.1-71.9c-3-4.5-8-7.1-13.3-7.1-1 0-2.1.1-3.1.3l-84.8 16.8 16.8-84.9c1.2-6.3-1.4-12.8-6.8-16.4l-71.9-48.1 71.9-48.2c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.9 84.8 16.8c6.5 1.3 12.8-1.4 16.4-6.8l48.1-72 48.1 72c3.6 5.4 9.9 8.1 16.4 6.8l84.8-16.8-16.8 84.9c-1.2 6.3 1.4 12.8 6.8 16.4l71.9 48.2-71.9 48z" />
    </svg>
  )

  if (darkMode.value) {
    toggleThemeIcon = (
      <svg viewBox="0 0 512 512">
        <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
      </svg>
    )
  }

  return (
    <main className={styles.playground}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header className={styles.playground_header}>
        <Link to="/" className={styles.logo}>
          <svg viewBox="0 0 292.642 340.529">
            <g>
              <g>
                <path d="M183.017 315.94c-3.61-15.747 6.689-33.17 25.385-42.987 18.688-9.808 71.15-37.94 71.15-37.94l6.924 30.535c7.247 31.714-15.002 64.002-49.693 72.163-21.475 5.048-47.37 6.178-53.766-21.771zM111.27 323.753a91.566 91.566 0 005.675 16.776 157.222 157.222 0 014.916-305.155L275.019 0l17.623 76.35c-27.351-16.405-63.045-22.577-99.318-14.165-49.635 11.526-86.344 46.89-96.898 87.81a37.41 37.41 0 00-.275 17.44 38.338 38.338 0 0046 28.69c36.188-8.401 18.127-57.647 66.273-68.83 32.638-7.577 49.863 11.45 52.235 21.703l3.484 14.981-91.261 43.758a118.729 118.729 0 00-34.66 24.665c-23.498 24.543-34.659 58.132-26.953 91.351z" />
              </g>
            </g>
          </svg>
        </Link>
        <h1>{title}</h1>

        <button
          className={classNames(styles.toggle_theme, { [styles[`dark_mode`]]: darkMode.value })}
          type="button"
          onClick={darkMode.toggle}
        >
          {toggleThemeIcon}
        </button>
      </header>

      {components}
    </main>
  )
}

ComponentsPlayground.propTypes = {}

ComponentsPlayground.defaultProps = {}

export default ComponentsPlayground
