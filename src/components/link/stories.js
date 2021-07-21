import React from "react"

import { component as Link, fixtures } from "."

export default {
  component: Link,
  title: "Components/Link"
}

const Template = (args) => <Link {...args} />

export const props = Template.bind({})
props.args = fixtures.props

export const internalLink = Template.bind({})
internalLink.args = fixtures.internal

export const externalLink = Template.bind({})
externalLink.args = fixtures.external
externalLink.parameters = {
  docs: {
    description: {
      story: "External links will open in a new window."
    }
  }
}
