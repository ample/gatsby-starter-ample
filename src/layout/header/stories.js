import React from "react"

import { component as Header, fixtures } from "."

export default {
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "Global Header and Navigation"
      }
    },
    layout: "fullscreen"
  },
  title: "Layout/Header"
}

const Template = (args) => (
  <div className="sb-centered">
    <Header {...args} />
  </div>
)

export const Props = Template.bind({})
Props.args = { ...fixtures }
