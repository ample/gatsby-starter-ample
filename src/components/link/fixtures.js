import React from "react"

export default {
  internal: {
    to: "/components/link",
    children: "I'm an internal link"
  },
  external: {
    to: "https://ample.co",
    children: <em>And I'm external</em>
  }
}
