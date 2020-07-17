import React from "react"
import renderer from "react-test-renderer"

import LinkList from "."

import fixtures from "./fixtures"

describe("LinkList", () => {
  it("renders link list correctly", () => {
    const tree = renderer.create(<LinkList menus={fixtures.vertical} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
