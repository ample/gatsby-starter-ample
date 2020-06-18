import React from "react"
import renderer from "react-test-renderer"

import DropdownMenu from "./"

import fixture from "./__fixtures__/dropdown_menu.json"

describe("DropdownMenu", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DropdownMenu items={fixture} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
