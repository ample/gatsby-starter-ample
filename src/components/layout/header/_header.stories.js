import React from "react"
import notes from "./_notes.mdx"

import Header from "./"

export default {
  title: "Layout|Header",
  component: Header,
  parameters: {
    docs: { page: notes }
  }
}

export const header = () => <Header />
