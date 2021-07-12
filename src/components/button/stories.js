import React from "react"

import { component as Button, fixtures } from "."

export default {
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "The button has several predefined themes and either renders as an `<a>` or `<button>` tag depending on the props that are used."
      }
    }
  },
  title: "Components/Buttons"
}

const Template = (args) => <Button {...args} />

export const props = Template.bind({})
props.args = fixtures.props

export const defaultTheme = Template.bind({})
defaultTheme.args = fixtures.default

export const outlineTheme = Template.bind({})
outlineTheme.args = {
  ...defaultTheme.args,
  ...fixtures.outline
}

export const ArrowTheme = Template.bind({})
ArrowTheme.args = {
  ...defaultTheme.args,
  ...fixtures.arrow
}

export const anchorLink = Template.bind({})
anchorLink.args = {
  ...fixtures.useAnchorLink
}
anchorLink.parameters = {
  docs: {
    description: {
      story:
        "To use the button as an anchor, be sure to include both a base path and the hash. e.g. `/about#team`"
    }
  }
}

export const buttonElement = Template.bind({})
buttonElement.args = {
  ...fixtures.useButtonElement
}
buttonElement.parameters = {
  docs: {
    description: {
      story: "A `button` element will be rendered if `type` or `onClick` props have values."
    }
  }
}

export const externalLink = Template.bind({})
externalLink.args = {
  ...fixtures.externalLink
}
externalLink.parameters = {
  docs: {
    description: {
      story: "External links will open in a new window."
    }
  }
}
