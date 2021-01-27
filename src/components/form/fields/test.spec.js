import React from "react"
import renderer from "react-test-renderer"

import { fieldMap, FormFields } from "./"

describe("FormFields", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FormFields fields={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("fieldMap", () => {
  it("pulls keys from config", () => {
    expect(Object.keys(fieldMap).sort()).toEqual(["select", "text"])
  })
})
