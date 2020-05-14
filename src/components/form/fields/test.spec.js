import React from "react"
import renderer from "react-test-renderer"

import { textTypeOptions } from "./__config__"
import { fieldMap, FormFields, normalizedFieldData } from "./"

describe("FormFields", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FormFields fields={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("fieldMap", () => {
  it("pulls keys from config", () => {
    let expKeys = textTypeOptions
    expKeys.push("Select")
    expect(Object.keys(fieldMap).sort()).toEqual(expKeys.sort())
  })
})

describe("normalizedFieldData", () => {
  // --- name ---
  it("keeps the name as the name if set", () => {
    const result = normalizedFieldData([{ title: "WRONG", name: "hello_world" }])
    expect(result[0].name).toEqual("hello_world")
  })
  it("parameterizes the title if not set", () => {
    const result = normalizedFieldData([{ title: "Hello World" }])
    expect(result[0].title).toEqual("Hello World")
    expect(result[0].name).toEqual("hello_world")
  })
  // --- label ---
  it("keeps the label in place if it exists", () => {
    const result = normalizedFieldData([{ title: "WRONG", label: "Hello World" }])
    expect(result[0].label).toEqual("Hello World")
  })
  it("sets the label as the title if not set", () => {
    const result = normalizedFieldData([{ title: "Hello World" }])
    expect(result[0].label).toEqual("Hello World")
  })
  // --- type ---
  it("keeps the type in place if it exists", () => {
    const result = normalizedFieldData([{ type: "Long Text" }])
    expect(result[0].type).toEqual("Long Text")
  })
  it("sets the type as the Short Text if not set", () => {
    const result = normalizedFieldData([{}])
    expect(result[0].type).toEqual("Short Text")
  })
  // --- width ---
  it("keeps the width in place if it exists", () => {
    const result = normalizedFieldData([{ width: "half" }])
    expect(result[0].width).toEqual("half")
  })
  it("sets the width as the full if not set", () => {
    const result = normalizedFieldData([{}])
    expect(result[0].width).toEqual("full")
  })
  // --- others ---
  it("passes remaining values through", () => {
    const input = {
      appearance: "Dropdown",
      label: "The Label",
      name: "The Name",
      options: ["A", "B", "C"],
      required: true,
      title: "The Title",
      type: "Date",
      width: "quarter"
    }
    const result = normalizedFieldData([input])
    expect(result[0]).toEqual(input)
  })
})
