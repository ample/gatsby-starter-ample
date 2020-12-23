import React from "react"
import renderer from "react-test-renderer"

import { component as Column, fixtures } from "."

describe("Column", () => {
  it("does not cause errors without props", () => {
    const tree = renderer.create(<Column {...fixtures.empty} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders sub-components", () => {
    const tree = renderer.create(<Column {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
    const button = tree.children[0]
    expect(button.type).toBe("a")
    expect(button.children[0]).toBe("Hello World")
  })
})
