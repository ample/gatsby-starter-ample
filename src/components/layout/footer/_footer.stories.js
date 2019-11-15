import React from "react"
import notes from "./_notes.mdx"

import Footer from "./"

export default {
  title: "Layout|Footer",
  component: Footer,
  parameters: {
    docs: { page: notes }
  }
}

export const footer = () => <Footer />
