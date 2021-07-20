import React from "react"
import renderer from "react-test-renderer"

import Block from "."
import { fixtures } from "@layout/container"

describe("Block", () => {
  it("returns null when no data", () => {
    const tree = renderer.create(<Block />).toJSON()
    expect(tree).toEqual(null)
  })
  it("returns null when no template property", () => {
    const tree = renderer.create(<Block template={null} />).toJSON()
    expect(tree).toEqual(null)
  })
  it("returns null when no component mapping exists", () => {
    const tree = renderer.create(<Block template={"WRONG-COMP-NAME"} />).toJSON()
    expect(tree).toEqual(null)
  })
  it("renders properly with valid props", () => {
    const tree = renderer.create(<Block {...fixtures.default.blocks[0]} />).toJSON()
    expect(tree).not.toEqual(null)
    expect(tree).toMatchSnapshot()
  })
})
