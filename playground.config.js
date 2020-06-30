import * as Button from "components/button"

import * as Page from "templates/page"

export default {
  title: "Ample Playground",
  components: {
    button: Button
    // button: {
    //   component: Button,
    //   maxWidth: "300px"
    // }
  },
  templates: {
    page: Page,
    other_page: Page
  },
  themes: {
    default: "#FFFFFF",
    black: "#000000"
  }
}
