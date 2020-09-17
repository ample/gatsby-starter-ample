import React from "react"
import renderer from "react-test-renderer"

import Button, { component as Component, fixtures, transformer } from "."

describe("Button Controller", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button to="/">Hello World</Button>).toJSON()
    expect(tree.children).toEqual(["Hello World"])
    expect(tree.props.href).toEqual("/")
  })
  it("transforms props", () => {
    const tree = renderer.create(<Button label="Hello World" url="/" />).toJSON()
    expect(tree.children).toEqual(["Hello World"])
    expect(tree.props.href).toEqual("/")
  })
})

describe("Button Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Button Transformer", () => {
  it("sets children from label", () => {
    const result = transformer({ label: "Hello World", url: "/" })
    expect(result.children).toEqual("Hello World")
    expect(result.to).toEqual("/")
  })
  it("keeps the original props", () => {
    const result = transformer({ label: "Hello World", url: "/" })
    expect(result.label).toEqual("Hello World")
    expect(result.url).toEqual("/")
  })
  it("brings along other props", () => {
    const result = transformer({ label: "Hello World", url: "/", hello: "world" })
    expect(result.hello).toEqual("world")
  })
  it("gives precedence to the correct props", () => {
    const result = transformer({
      children: "Pick Me",
      to: "/pick-me",
      label: "Hello World",
      url: "/"
    })
    expect(result.children).toEqual("Pick Me")
    expect(result.to).toEqual("/pick-me")
  })
})
