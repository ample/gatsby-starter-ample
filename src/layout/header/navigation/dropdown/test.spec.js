import React from "react"
import renderer from "react-test-renderer"

import { Dropdown, DropdownMenu, DropdownTrigger } from "./"

describe("Dropdown", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Dropdown>
          <DropdownTrigger>Trigger</DropdownTrigger>
          <DropdownMenu items={[]}></DropdownMenu>
        </Dropdown>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
