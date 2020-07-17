import React from "react"
import renderer from "react-test-renderer"

import DropdownTrigger from "./"

describe("DropdownTrigger", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DropdownTrigger>Trigger</DropdownTrigger>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
