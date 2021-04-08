import React from "react"

import Button from "./"

export default {
  title: "Components/Buttons",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Let's define a story for our `Button` component:"
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: "default",
  url: "/docs/",
  children: "Call to Action"
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  theme: "outline"
}

export const Arrow = Template.bind({})
Arrow.args = {
  ...Default.args,
  theme: "arrow"
}
