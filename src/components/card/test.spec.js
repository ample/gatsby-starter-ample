import React from "react"
import renderer from "react-test-renderer"

import Card from "./"

describe("Card", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Card image={{ src: "/uploads/placeholder-image.jpg", alt: "placeholder image" }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
