import React from "react"
import renderer from "react-test-renderer"

import Button from "./"

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button label="Hello World" url="/" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
