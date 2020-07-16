import React from "react"
import renderer from "react-test-renderer"

import SocialNav from "."
import { footer_test_data } from "./../fixtures"

describe("SocialNav", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SocialNav links={footer_test_data.social_links} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
