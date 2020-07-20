import React from "react"
import renderer from "react-test-renderer"

import Footer from "./"

import fixtures from "./fixtures"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer copyright="2020, All Rights Reserved" {...fixtures.default} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
