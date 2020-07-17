import React from "react"
import renderer from "react-test-renderer"

import SVG from "."

describe("SVG", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SVG name="bars" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
