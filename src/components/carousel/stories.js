import React from "react"

import { component as Carousel, fixtures } from "."

export default {
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: "Let's define a story for the `Carousel` component."
      }
    }
  },
  title: "Components/Carousel"
}

const Template = (args) => (
  <div style={{ maxWidth: "800px" }}>
    <Carousel {...args} />
  </div>
)

export const Props = Template.bind({})
Props.args = {
  ...fixtures.props
}
