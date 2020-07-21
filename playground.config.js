import * as Button from "@src/components/button"
// import * as Dropdown from "@src/components/dropdown"
import * as Form from "@src/components/form"
import * as Image from "@src/components/image"
import * as Link from "@src/components/link"
import * as SVG from "@src/components/svg"

import * as Page from "@src/templates/page"

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
