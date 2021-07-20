import React from "react"

import { component as Footer, fixtures } from "."

export default {
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "Global Footer Navigation with Social Nav"
      }
    },
    layout: "fullscreen"
  },
  title: "Layout/Footer"
}

const Template = (args) => (
  <div className="sb-centered">
    <Footer {...args} />
  </div>
)

export const Props = Template.bind({})
Props.args = { ...fixtures }
