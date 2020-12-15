import React from "react"
import renderer from "react-test-renderer"

import { component as Carousel, fixtures } from "."

describe("Carousel", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Carousel {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
