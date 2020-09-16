import React from "react"
import renderer from "react-test-renderer"

import Image, { fixtures, transformer } from "."
import { defaultAltAttribute } from "./component"

// ---------------------------------------- | Controller

describe("Image Controller", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Image {...fixtures.native} />).toJSON()
    expect(tree.props.src).toEqual(fixtures.native.src)
  })
  it("transforms props", () => {
    const tree = renderer.create(<Image image={fixtures.native.src} />).toJSON()
    expect(tree.props.src).toEqual(fixtures.native.src)
  })
})

// ---------------------------------------- | Component

describe("Image", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Image src="https://via.placeholder.com/300" alt="Image from https://placehold.it" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("will render null if the src object is not the correct format", () => {
    const src = { childImageSharp: { wrongKey: { src: "..." } } }
    const tree = renderer.create(<Image src={src} alt="alt ..." />).toJSON()
    expect(tree).toBeNull()
  })
  it("will render with a proper fluid image", () => {
    const tree = renderer.create(<Image src={fixtures.fluid} alt="alt ..." />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("will render with a proper fluid image and a default alt attribute", () => {
    const tree = renderer.create(<Image src={fixtures.fluid} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("will render with a proper fixed image", () => {
    const tree = renderer.create(<Image src={fixtures.fixed} alt="alt ..." />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// ---------------------------------------- | Alt Attribute

describe("defaultAltAttribute", () => {
  it("creates a humanized version of a URL string", () => {
    const filename = "/uploads/image-01.jpg"
    expect(defaultAltAttribute(filename)).toEqual("Image 01")
  })
})

// ---------------------------------------- | Transformer

describe("Image Transformer", () => {
  it("sets children from label", () => {
    const result = transformer({ image: "/hello-world.jpg" })
    expect(result.src).toEqual("/hello-world.jpg")
  })
  it("keeps the original props", () => {
    const result = transformer({ image: "/hello-world.jpg" })
    expect(result.image).toEqual("/hello-world.jpg")
  })
  it("brings along other props", () => {
    const result = transformer({ image: "/hello-world.jpg", hello: "world" })
    expect(result.hello).toEqual("world")
  })
  it("gives precedence to the correct props", () => {
    const result = transformer({ image: "/hello-world.jpg", src: "/real-image.png" })
    expect(result.src).toEqual("/real-image.png")
  })
})
