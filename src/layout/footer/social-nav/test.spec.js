import React from "react"
import renderer from "react-test-renderer"

import { component as SocialNav, fixtures } from "."

describe("SocialNav", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SocialNav {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
