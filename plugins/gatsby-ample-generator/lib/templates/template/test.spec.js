import React from "react"
import renderer from "react-test-renderer"

import { template as Template, fixtures } from "."

describe("Template", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Template {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
