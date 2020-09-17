import React from "react"
import renderer from "react-test-renderer"

import { Dropdown } from "./"

describe("Dropdown", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Dropdown label="Trigger" items={[]}></Dropdown>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
