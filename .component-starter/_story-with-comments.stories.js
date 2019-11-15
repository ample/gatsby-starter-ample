import React from "react"
import notes from "./_notes.mdx"
// import { select } from "@storybook/addon-knobs"

import Component from "./"

/*
  - 'title' must be unique
  - titles without separators default to Sub-Group
  - title `Category` and `Group` are optional
*/
export default {
  title: "Category|Group/Sub-Group",
  component: Component,
  // decorators: [decoratorName],
  parameters: {
    docs: { page: notes }
  }
}

/*
  Basic Story Example
    - <GlobalStyles /> is automatically added to all stories
*/
export const /*storyName*/ = () => <Component />

/*
  Story With Knobs Example
    - `withKnobs` decorator is automatically added to all stories
    - import Knob types (above) and add knob options inside the named export:
*/
export const /* storyName */ = () => {
  let knob = select("Knob Name", ["opt 1", "opt 2", "opt 3"], "opt 1")
  return <Logo color={color} />
}

/*
  Single-Story optional Settings
*/
// storyName.story = {
//   name: "Override Story Name",
//   decorators: [decoratorName],
//   parameters: { key: value }
// }
