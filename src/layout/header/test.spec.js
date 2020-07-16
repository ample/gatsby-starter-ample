import React from "react"
import renderer from "react-test-renderer"

import Header from "./"
import { header_test_data } from "./__fixtures__"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header
          main_navigation={header_test_data.main_navigation}
          top_navigation={header_test_data.top_navigation}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
