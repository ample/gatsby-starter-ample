import React from "react"

import Button from "./"

export default {
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Let's define a story for our `Button` component:"
      }
    }
  },
  title: "Components/Buttons"
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Call to Action",
  theme: "default",
  url: "/docs/"
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
