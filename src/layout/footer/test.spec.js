import React from "react"
import renderer from "react-test-renderer"

import Footer from "./"

import menu_fixtures from "./link-list/fixtures"
import { footer_test_data } from "./fixtures"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Footer
          copyright="2020, All Rights Reserved"
          menus={menu_fixtures.menus}
          policy_links={footer_test_data.policy_links}
          social_links={footer_test_data.social_links}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
