import React from "react"
import renderer from "react-test-renderer"

import { component as Heading, fixtures } from "."

describe("Heading", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Heading {...fixtures.props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
