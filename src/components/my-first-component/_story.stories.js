import React from "react"
import notes from "./_notes.mdx"
import { text } from "@storybook/addon-knobs"

import MyFirstComponent from "./"

export default {
  title: "Basics|My First Component",
  component: MyFirstComponent,
  parameters: {
    docs: { page: notes }
  }
}

export const myFirstComponent = () => {
  let name = text("Name", "World")
  return <MyFirstComponent name={name} />
}
