import React from "react"
import renderer from "react-test-renderer"

import { component as Footer, fixtures } from "."

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer {...fixtures} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
