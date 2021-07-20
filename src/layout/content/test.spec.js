import React from "react"
import renderer from "react-test-renderer"

import { component as Component, fixtures } from "."

describe("Content", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
