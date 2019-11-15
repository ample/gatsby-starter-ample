import React from "react"
import notes from "./_notes.mdx"
// import { select } from "@storybook/addon-knobs"

import Component from "./"

export default {
  title: "Category|Group/Sub-Group",
  component: Component,
  parameters: {
    docs: { page: notes }
  }
}

export const /*storyName*/ = () => <Component />
