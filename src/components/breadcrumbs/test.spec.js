import React from "react"
import renderer from "react-test-renderer"

import { component as Breadcrumbs, fixtures } from "."

describe("Breadcrumbs", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Breadcrumbs {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
