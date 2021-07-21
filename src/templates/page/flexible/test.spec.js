/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"

import { template as FlexiblePage, fixtures } from "."

describe("FlexiblePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FlexiblePage {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
