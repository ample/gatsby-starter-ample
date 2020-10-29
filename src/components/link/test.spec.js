import React from "react"
import renderer from "react-test-renderer"

import { component as Link, fixtures } from "."

describe("Link", () => {
  it("renders internal link correctly", () => {
    const tree = renderer.create(<Link {...fixtures.internal} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders external link correctly", () => {
    const tree = renderer.create(<Link {...fixtures.external} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
