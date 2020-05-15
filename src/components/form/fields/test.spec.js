import React from "react"
import renderer from "react-test-renderer"

import { fieldMap, FormFields, normalizedFieldData } from "./"

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

describe("normalizedFieldData", () => {
  // --- appearance ---
  it("sets appearance for text fields", () => {
    const input = [{ type: "text", text_appearance: "long", select_appearance: "dropdown" }]
    const result = normalizedFieldData(input)
    expect(result[0].appearance).toEqual("long")
  })
  it("sets appearance for select fields", () => {
    const input = [{ type: "select", text_appearance: "long", select_appearance: "dropdown" }]
    const result = normalizedFieldData(input)
    expect(result[0].appearance).toEqual("dropdown")
  })
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
  // --- placeholder ---
  it("sets placeholder for text fields", () => {
    const result = normalizedFieldData([{ type: "text", text_placeholder: "Hello World" }])
    expect(result[0].placeholder).toEqual("Hello World")
  })
  it("does not set placeholder for select fields", () => {
    const input = [{ type: "select", text_placeholder: "Hello World" }]
    const result = normalizedFieldData(input)
    expect(result[0].placeholder).toEqual(undefined)
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
  // --- validation ---
  it("sets validation for text fields", () => {
    const result = normalizedFieldData([{ type: "text", text_validation: "phone" }])
    expect(result[0].validation).toEqual("phone")
  })
  it("does not set validation for select fields", () => {
    const input = [{ type: "select", text_validation: "email" }]
    const result = normalizedFieldData(input)
    expect(result[0].validation).toEqual(undefined)
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
      label: "The Label",
      name: "The Name",
      options: ["A", "B", "C"],
      required: true,
      title: "The Title",
      type: "select",
      width: "quarter"
    }
    const result = normalizedFieldData([input])
    expect(result[0]).toEqual(input)
  })
})
