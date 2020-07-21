import React from "react"
import renderer from "react-test-renderer"

import { template as PageTemplate, fixtures } from "."

describe("PageTemplate", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PageTemplate {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
