import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"

import { withTests } from "@storybook/addon-jest"
import results from "../.jest-test-results.json"

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addParameters({
  options: {
    showRoots: true
  },
  previewTabs: {
    // TODO: Have Docs be the default tab and URL for Storybook
    // order of the tabs
    canvas: null,
    "storybook/docs/panel": null
  },
  jest: ["test.spec.js"]
})

addDecorator(withA11y)
addDecorator(
  withTests({
    results
  })
)
addDecorator(story => <>{story()}</>)
