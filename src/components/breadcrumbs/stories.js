import React from "react"

import Breadcrumbs from "."
import fixtures from "./fixtures"

export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs"
}

const Template = (args) => <Breadcrumbs {...args} />

export const Props = Template.bind({})
Props.args = fixtures.props
