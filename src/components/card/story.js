import React from "react"

import Card from "."
import fixtures from "./fixtures"

export default {
  title: "Components/Cards",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Let's define a story for our `Card` component:"
      }
    }
  }
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = fixtures.default

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
