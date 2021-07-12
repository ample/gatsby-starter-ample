import React from "react"

import Video from "."
import fixtures from "./fixtures"

export default {
  component: Video,
  title: "Components/Video"
}

const Template = (args) => <Video {...args} />

export const Props = Template.bind({})
Props.args = fixtures.props
