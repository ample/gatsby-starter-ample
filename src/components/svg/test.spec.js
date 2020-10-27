import React from "react"
import renderer from "react-test-renderer"

import { component as SVG, fixtures } from "."

describe("SVG", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SVG {...fixtures.arrow_down} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
