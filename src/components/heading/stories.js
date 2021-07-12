import React from "react"

import { component as Heading, fixtures } from "."

export default {
  argTypes: {
    level: {
      control: { type: "select" }
    }
  },
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          "This component comes in handy as a sub-component when a heading needs a different level depending on context."
      }
    }
  },
  title: "Components/Heading"
}

const Template = (args) => <Heading {...args} />

export const Props = Template.bind({})
Props.args = fixtures.props

export const H1 = Template.bind({})
H1.args = {
  ...Props.args,
  ...fixtures.h2
}

export const H2 = Template.bind({})
H2.args = {
  ...Props.args,
  ...fixtures.h2
}

export const H3 = Template.bind({})
H3.args = {
  ...Props.args,
  ...fixtures.h3
}

export const H4 = Template.bind({})
H4.args = {
  ...Props.args,
  ...fixtures.h4
}

export const H5 = Template.bind({})
H5.args = {
  ...Props.args,
  ...fixtures.h5
}
