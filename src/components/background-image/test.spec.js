import React from "react"
import renderer from "react-test-renderer"

import { component as BackgroundImage, fixtures } from "."

describe("BackgroundImage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BackgroundImage {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
