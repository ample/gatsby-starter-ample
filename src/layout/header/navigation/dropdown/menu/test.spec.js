import React from "react"
import renderer from "react-test-renderer"

import DropdownMenu from "./"

import fixtures from "./fixtures.js"

describe("DropdownMenu", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DropdownMenu {...fixtures.simple_menu} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
