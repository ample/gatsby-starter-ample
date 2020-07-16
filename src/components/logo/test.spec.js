import React from "react"
import renderer from "react-test-renderer"

import Logo from "./"

describe("Logo", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Logo name="ample_a" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
