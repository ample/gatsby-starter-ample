import React from "react"
import renderer from "react-test-renderer"

import DebugMediaQueries from "./"

describe("DebugMediaQueries", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DebugMediaQueries isShowing={"true"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
