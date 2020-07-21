import React from "react"
import renderer from "react-test-renderer"

import SVG from "."

import MediaQueryDebugger from "@plugins/gatsby-ample-seo/src/components/seo"

describe("SVG", () => {
  it("renders correctly", () => {
    MediaQueryDebugger
    const tree = renderer.create(<SVG name="bars" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
