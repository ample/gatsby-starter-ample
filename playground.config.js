import * as Button from "components/button"
// import * as Dropdown from "components/dropdown"
import * as Form from "components/form"
import * as Image from "components/image"
import * as Link from "components/link"
import * as SVG from "components/svg"

import * as Page from "templates/page"

export default {
  title: "Ample Playground",
  components: {
    button: Button,
    // dropdown: Dropdown, --> Having issue with the dropdown
    form: Form,
    image: Image,
    link: Link,
    svg: SVG
  },
  templates: {
    page: Page
  },
  themes: {
    default: "#FFFFFF",
    black: "#000000"
  }
}
