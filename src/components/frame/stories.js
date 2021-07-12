import React from "react"

import { component as Frame, fixtures } from "."

export default {
  component: Frame,
  title: "Components/Frame"
}

const Template = (args) => <Frame {...args} />

export const Props = Template.bind({})
Props.args = fixtures.props
