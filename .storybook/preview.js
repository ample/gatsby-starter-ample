import React from "react"
import { action } from "@storybook/addon-actions"
import { addDecorator, addParameters } from "@storybook/react"
import { setConsoleOptions } from "@storybook/addon-console"
import { themes } from "@storybook/theming"
import { withTests } from "@storybook/addon-jest"
import results from "../.jest-test-results.json"

import "./storybook.scss"
import "../src/styles/libs/sanitize.scss"
import "../src/styles/global-styles.scss"
import "../src/styles/global-utilities.scss"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname)
}

// Storybook addon for redirecting console output into action logger panel
setConsoleOptions({
  panelExclude: []
})

addParameters({
  jest: ["test.spec.js"]
})

addDecorator(
  withTests({
    results
  })
)

addDecorator((story) => <>{story()}</>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  docs: {
    theme: process.env.STORYBOOK_THEME_DARK === true ? themes.dark : themes.light
  }
}
