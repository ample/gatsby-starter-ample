import React from "react"
import renderer from "react-test-renderer"

import { component as Card, fixtures } from "."

describe("Card", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Card {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
