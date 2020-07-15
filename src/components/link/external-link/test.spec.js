import React from "react"
import renderer from "react-test-renderer"

import { component as ExternalLink, fixtures } from "."

describe("ExternalLink", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ExternalLink {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
