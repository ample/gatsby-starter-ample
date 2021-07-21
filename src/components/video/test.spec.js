import React from "react"
import renderer from "react-test-renderer"

import { component as Video, fixtures } from "."

describe("Video", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Video {...fixtures.props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
