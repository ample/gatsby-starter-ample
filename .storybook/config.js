import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs } from "@storybook/addon-knobs"
import { withA11y } from "@storybook/addon-a11y"

import GlobalStyles from "../src/components/global/styles"

// Gatsby's Link overrides: Gatsby defines a global called ___loader to prevent
// its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
global.__PATH_PREFIX__ = ""

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

// automatically import all files ending in *.stories.js
configure(
  require.context("../src", true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
  module
)

const withGlobalStyles = s => (
  <React.Fragment>
    <GlobalStyles />
    {s()}
  </React.Fragment>
)

// Global Settings
addDecorator(withGlobalStyles)
addDecorator(withKnobs)
addDecorator(withA11y)
