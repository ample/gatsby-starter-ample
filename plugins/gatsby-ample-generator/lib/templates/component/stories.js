import React from "react"

import { component as ComponentName, fixtures } from "."

export default {
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: "Let's define a stories for our `ComponentName` component."
      }
    }
  },
  title: "Components/Buttons"
}

const Template = (args) => <ComponentName {...args} />

export const props = Template.bind({})
props.args = fixtures.props

export const defaultTheme = Template.bind({})
defaultTheme.args = fixtures.default
