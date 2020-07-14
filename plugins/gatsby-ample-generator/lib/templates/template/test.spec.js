import React from "react"
import renderer from "react-test-renderer"

import Template from "./"

describe("Template", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Template />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
