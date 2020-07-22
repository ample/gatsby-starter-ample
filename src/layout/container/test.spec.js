import React from "react"
import renderer from "react-test-renderer"

import Container from "./"

describe("Container", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Container components={[]} config={{}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
