import React from "react"
import renderer from "react-test-renderer"

import { component as Component, container as Container, fixtures } from "."

describe("Container", () => {
  it("does not cause errors without props", () => {
    const tree = renderer.create(<Container {...fixtures.empty} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders with one component", () => {
    const tree = renderer.create(<Container {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Component", () => {
  it("returns null when no data", () => {
    const tree = renderer.create(<Component />).toJSON()
    expect(tree).toEqual(null)
  })
  it("returns null when no template property", () => {
    const tree = renderer.create(<Component template={null} />).toJSON()
    expect(tree).toEqual(null)
  })
  it("returns null when no component mapping exists", () => {
    const tree = renderer.create(<Component template={"WRONG-COMP-NAME"} />).toJSON()
    expect(tree).toEqual(null)
  })
  it("renders properly with valid props", () => {
    const tree = renderer.create(<Component data={fixtures.default.components[0]} />).toJSON()
    expect(tree).not.toEqual(null)
    expect(tree).toMatchSnapshot()
  })
  it("transforms data (using form as an example)", () => {
    const tree = renderer.create(<Component data={fixtures.form.components[0]} />).toJSON()
    expect(tree).not.toEqual(null)
    expect(tree.children[0].type).toEqual("input")
    expect(tree).toMatchSnapshot()
  })
})
