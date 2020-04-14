import React from "react"
import renderer from "react-test-renderer"

import Component from "./"

describe("Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component body="<p>Hello world</p>" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
