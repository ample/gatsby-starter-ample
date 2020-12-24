import * as BackgroundImage from "@src/components/background-image"
import * as Breadcrumbs from "@src/components/breadcrumbs"
import * as Button from "@src/components/button"
import * as Card from "@src/components/card"
import * as Carousel from "@src/components/carousel"
import * as Form from "@src/components/form"
import * as Frame from "@src/components/frame"
import * as Heading from "@src/components/heading"
import * as Image from "@src/components/image"
import * as Link from "@src/components/link"
import * as SVG from "@src/components/svg"
import * as Video from "@src/components/video"

import { layouts as pageLayouts } from "@src/templates/page"

export default {
  title: "Ample Playground",
  components: {
    background_image: BackgroundImage,
    breadcrumbs: Breadcrumbs,
    button: Button,
    card: Card,
    carousel: Carousel,
    form: Form,
    frame: Frame,
    heading: Heading,
    image: Image,
    link: Link,
    svg: SVG,
    video: Video
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
