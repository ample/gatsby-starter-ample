import React from "react"
import renderer from "react-test-renderer"

import Navigation from "."
import fixtures from "./fixtures"

describe("Navigation", () => {
  it("renders navigation correctly", () => {
    const tree = renderer.create(<Navigation links={fixtures.default.top_navigation} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
