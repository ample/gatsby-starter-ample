import React from "react"
import renderer from "react-test-renderer"

import { component as Iframe, fixtures } from "."

describe("Iframe", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Iframe {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
