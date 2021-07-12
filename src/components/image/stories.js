import React from "react"

import { component as Image, fixtures } from "."

export default {
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "Wrapper around the [Gatsby Image Component](https://www.gatsbyjs.com/plugins/gatsby-plugin-image):"
      }
    }
  },
  title: "Components/Images"
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = fixtures.default

export const Native = Template.bind({})
Native.args = fixtures.native
