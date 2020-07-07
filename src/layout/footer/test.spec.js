import React from "react"
import renderer from "react-test-renderer"

import Footer from "./"
import { footer_test_data } from "./__fixtures__"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Footer
          copyright="2020, All Rights Reserved"
          menus={footer_test_data.menus}
          policy_links={footer_test_data.policy_links}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
