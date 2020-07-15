import React from "react"
import renderer from "react-test-renderer"

import LinkList from "."

import fixtures from "./fixtures"

describe("LinkList", () => {
  it("renders horizontal lists correctly", () => {
    const tree = renderer.create(<LinkList {...fixtures.horizontal} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders vertical lists correctly", () => {
    const tree = renderer.create(<LinkList {...fixtures.vertical} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
