import * as Button from "components/button"
// import * as Dropdown from "components/dropdown"
import * as Form from "components/form"
import * as Icon from "components/icon"
import * as Image from "components/image"
import * as Link from "components/link"
import * as LinkList from "components/link-list"

import * as Page from "templates/page"

export default {
  title: "Ample Playground",
  components: {
    button: Button,
    // dropdown: Dropdown, --> Having issue with the dropdown
    form: Form,
    icon: Icon,
    image: Image,
    link: Link,
    link_list: LinkList
  },
  templates: {
    page: Page
  },
  themes: {
    default: "#FFFFFF",
    black: "#000000"
  }
}
