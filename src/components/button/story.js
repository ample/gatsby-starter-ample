import React from "react"

import { component as Button, fixtures } from "./"

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

export const Default = Template.bind({})
Default.args = fixtures.default

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  ...fixtures.outline
}

export const Arrow = Template.bind({})
Arrow.args = {
  ...Default.args,
  ...fixtures.arrow
}
