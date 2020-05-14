import React from "react"
import renderer from "react-test-renderer"

import Form from "./"

describe("Form", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Form title="Contact Form" field_groups={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
