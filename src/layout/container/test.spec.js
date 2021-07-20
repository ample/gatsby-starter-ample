import React from "react"
import renderer from "react-test-renderer"

import { component as Container, fixtures } from "."

describe("Container", () => {
  it("does not cause errors without props", () => {
    const tree = renderer.create(<Container {...fixtures.empty} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders sub-components", () => {
    const tree = renderer.create(<Container {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
    const button = tree.children[0].children[0]
    expect(button.type).toBe("a")
    expect(button.children[0]).toBe("Hello World")
  })
})
