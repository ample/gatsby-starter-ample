import React from "react"
import renderer from "react-test-renderer"

import { component as Button, fixtures } from "."

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button {...fixtures.fixed} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
