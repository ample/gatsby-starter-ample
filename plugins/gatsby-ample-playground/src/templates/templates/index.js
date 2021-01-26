/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import classNames from "classnames"

import find from "lodash/find"
import kebabCase from "lodash/kebabCase"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"

import config from "@root/playground.config"

import styles from "./styles.module.scss"

const TemplatesPlayground = ({ location }) => {
  const [isOpen, setOpen] = useState(false)

  const classes = classNames(styles.template_list_container, isOpen, {
    [styles.is_showing]: isOpen
  })

  const handleClick = () => {
    setOpen(!isOpen)
  }

  // Render nothing if there are no templates configured.
  if (Object.entries(config.templates || {}).length === 0) return "Could not find templates"

  let templates = []

  // Build a collection of template objects.
  Object.entries(config.templates).map((cfg, idx) => {
    const TagName = cfg[1].template
    const templateName = startCase(toLower(cfg[0]))

    Object.entries(cfg[1].fixtures || {}).map((fixture) => {
      const fixtureName = startCase(toLower(fixture[0]))
      const displayName = `${templateName}: ${fixtureName}`
      templates.push({
        name: displayName,
        slug: kebabCase(displayName),
        template: <TagName key={idx} {...fixture[1]} />
      })
    })
  })

  // Find the current template using a hash in the URL.
  const currentTemplate = find(templates, (t) => t.slug && t.slug === location.hash.slice(1))

  // If there is no hash or current template, navigate to the first template in
  // the collection.
  if (typeof window !== "undefined" && (!location.hash || !currentTemplate)) {
    navigate(`${location.pathname}#${templates[0].slug}`)
  }

  // If there is still no template, render a simple message.
  if (!currentTemplate) return "No template"

  return (
    <>
      <Helmet>
        <title>{currentTemplate.name} | Ample Playground</title>
      </Helmet>

      <div className={classes} onClick={handleClick}>
        <ul className={styles.template_list}>
          {templates.map((template, idx) => (
            <li key={idx}>
              <button onClick={() => navigate(`${location.pathname}#${template.slug}`)}>
                {template.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentTemplate.template}
    </>
  )
}

TemplatesPlayground.propTypes = {
  /**
   * Location object sent from Gatsby.
   */
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string
  })
}

TemplatesPlayground.defaultProps = {}

export default TemplatesPlayground
