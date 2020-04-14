import React from "react"
import renderer from "react-test-renderer"

import PageTemplate from "./"

describe("PageTemplate", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PageTemplate sections={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
