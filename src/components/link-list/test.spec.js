import React from "react"
import renderer from "react-test-renderer"

import LinkList from "."

import horizontalFixture from "./__fixtures__/horizontal.json"
import verticalFixture from "./__fixtures__/vertical.json"

describe("LinkList", () => {
  it("renders horizontal lists correctly", () => {
    const tree = renderer.create(<LinkList links={horizontalFixture} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders vertical lists correctly", () => {
    const tree = renderer
      .create(<LinkList heading={verticalFixture.label} links={verticalFixture.links} vertical />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
