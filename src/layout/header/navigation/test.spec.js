/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"

import { component as Navigation, fixtures } from "."

describe("Navigation", () => {
  it("renders navigation correctly", () => {
    const tree = renderer.create(<Navigation links={fixtures.top_navigation} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
