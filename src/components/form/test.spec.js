import React from "react"
import renderer from "react-test-renderer"

import Form, { component as Component, fixtures, transformer } from "."

describe("Form Controller", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Form {...fixtures.default} />).toJSON()
    expect(tree.children.length).toEqual(5)
    expect(tree.props.name).toEqual(fixtures.default.title)
  })
  it("transforms props", () => {
    const props = { form: fixtures.default }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree.children.length).toEqual(5)
    expect(tree.props.name).toEqual(fixtures.default.title)
  })
})

describe("Form Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Form Transformer", () => {
  it("unpacks a form property", () => {
    const result = transformer({ form: fixtures.default })
    expect(result).toEqual(fixtures.default)
  })
  it("won't unpack if the form property doesn't exist", () => {
    const result = transformer(fixtures.default)
    expect(result).toEqual(fixtures.default)
  })
  it("won't unpack if form prop is empty", () => {
    const result = transformer({ form: null, ...fixtures.default })
    expect(result).toEqual({ form: null, ...fixtures.default })
  })
})
