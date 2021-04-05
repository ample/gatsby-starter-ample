import React from "react"
import renderer from "react-test-renderer"

import { component as Header, fixtures } from "."

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header
          mainNavigation={fixtures.default.mainNavigation}
          topNavigation={fixtures.default.topNavigation}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
