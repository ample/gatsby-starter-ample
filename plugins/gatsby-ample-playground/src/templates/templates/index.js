import React, { useState } from "react"
import { Helmet } from "react-helmet"
import lodash from "lodash"

import config from "root/playground.config"

// import styles from "./styles.module.scss"

const TemplatesPlayground = () => {
  if (Object.entries(config.templates || {}).length === 0) return "Could not find templates"

  let templates = []

  Object.entries(config.templates).map((cfg, idx) => {
    const TagName = cfg[1].template
    const templateName = lodash.startCase(lodash.toLower(cfg[0]))

    Object.entries(cfg[1].fixtures || {}).map(fixture => {
      const fixtureName = lodash.startCase(lodash.toLower(fixture[0]))
      templates.push({
        name: `${templateName}: ${fixtureName}`,
        template: <TagName key={idx} {...fixture[1]} />
      })
    })
  })

  const [currentTemplate, setCurrentTemplate] = useState(templates[0])

  if (!currentTemplate) return "No template"

  return (
    <>
      <Helmet>
        <title>{currentTemplate.name} | Ample Playground</title>
      </Helmet>

      <ul>
        {templates.map((template, idx) => (
          <li key={idx}>
            <button onClick={() => setCurrentTemplate(template)}>{template.name}</button>
          </li>
        ))}
      </ul>

      <hr />

      {currentTemplate.template}
    </>
  )
}

TemplatesPlayground.propTypes = {}

TemplatesPlayground.defaultProps = {}

export default TemplatesPlayground
