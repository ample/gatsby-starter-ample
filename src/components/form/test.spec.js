import React from "react"
import renderer from "react-test-renderer"

import { component as Form, fixtures } from "."

describe("Form", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Form {...fixtures.default} />).toJSON()
    expect(tree).not.toEqual(null)
    expect(tree).toMatchSnapshot()
  })
})
