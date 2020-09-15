import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

import find from "lodash/find"
import kebabCase from "lodash/kebabCase"
import startCase from "lodash/startCase"
import toLower from "lodash/toLower"

import config from "@root/playground.config"

const TemplatesPlayground = ({ location }) => {
  // Render nothing if there are no templates configured.
  if (Object.entries(config.templates || {}).length === 0) return "Could not find templates"

  let templates = []

  // Build a collection of template objects.
  Object.entries(config.templates).map((cfg, idx) => {
    const TagName = cfg[1].template
    const templateName = startCase(toLower(cfg[0]))

    Object.entries(cfg[1].fixtures || {}).map(fixture => {
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
  const currentTemplate = find(templates, t => t.slug && t.slug === location.hash.slice(1))

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

      <ul>
        {templates.map((template, idx) => (
          <li key={idx}>
            <button onClick={() => navigate(`${location.pathname}#${template.slug}`)}>
              {template.name}
            </button>
          </li>
        ))}
      </ul>

      <hr />

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
