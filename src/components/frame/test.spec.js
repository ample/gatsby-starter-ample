import React from "react"
import renderer from "react-test-renderer"

import { component as Frame, fixtures } from "."

describe("Frame", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Frame {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
