import { addons } from "@storybook/addons"
import { themes } from "@storybook/theming"

addons.setConfig({
  theme: process.env.STORYBOOK_THEME_DARK === true ? themes.dark : themes.light
})
