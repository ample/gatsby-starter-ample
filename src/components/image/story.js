import React from "react"

import { component as Image } from "."
import fixtures from "./fixtures"

export default {
  title: "Components/Images",
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "Wrapper around the [Gatsby Image Component](https://www.gatsbyjs.com/plugins/gatsby-plugin-image):"
      }
    }
  }
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = fixtures.default

export const Native = Template.bind({})
Native.args = fixtures.native
