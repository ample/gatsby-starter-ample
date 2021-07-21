import React from "react"

import { component as Card, fixtures } from "."

export default {
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Let's define a story for our `Card` component."
      }
    }
  },
  title: "Components/Card"
}

const Template = (args) => (
  <div style={{ maxWidth: "400px" }}>
    <Card {...args} />
  </div>
)

export const Props = Template.bind({})
Props.args = fixtures.props

export const TextAlignmentCenter = Template.bind({})
TextAlignmentCenter.args = fixtures.text_alignment_center

export const WithGraphic = Template.bind({})
WithGraphic.args = fixtures.with_graphic

export const WithGraphicCentered = Template.bind({})
WithGraphicCentered.args = fixtures.with_graphic_centered

export const WithImage = Template.bind({})
WithImage.args = fixtures.with_image

export const WithImageCentered = Template.bind({})
WithImageCentered.args = fixtures.with_image
