import * as Button from "@src/components/button"
// import * as Dropdown from "@src/components/dropdown"
import * as Form from "@src/components/form"
import * as Frame from "@src/components/frame"
import * as Heading from "@src/components/heading"
import * as Image from "@src/components/image"
import * as Link from "@src/components/link"
import * as SVG from "@src/components/svg"

import { layouts as pageLayouts } from "@src/templates/page"

export default {
  title: "Ample Playground",
  components: {
    button: Button,
    // dropdown: Dropdown, --> Having issue with the dropdown
    form: Form,
    frame: Frame,
    heading: Heading,
    image: Image,
    link: Link,
    svg: SVG
  },
  templates: {
    basic_page: pageLayouts.basic,
    flexible_page: pageLayouts.flexible
  },
  themes: {
    default: "#FFFFFF",
    black: "#000000"
  }
}
