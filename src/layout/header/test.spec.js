import React from "react"
import renderer from "react-test-renderer"

import { component as Header, fixtures } from "."

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header
          main_navigation={fixtures.default.main_navigation}
          top_navigation={fixtures.default.top_navigation}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
