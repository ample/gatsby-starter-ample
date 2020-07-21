import React from "react"
import renderer from "react-test-renderer"

import { template as BasicPage, fixtures } from "."

describe("BasicPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BasicPage {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
