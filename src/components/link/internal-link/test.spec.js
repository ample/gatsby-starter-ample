import React from "react"
import renderer from "react-test-renderer"

import { component as InternalLink, fixtures } from "."

describe("InternalLink", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<InternalLink {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
