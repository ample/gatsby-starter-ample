import React from "react"
import renderer from "react-test-renderer"

import { component as ComponentName, fixtures } from "."

describe("ComponentName", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ComponentName {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
