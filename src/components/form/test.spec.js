import React from "react"
import renderer from "react-test-renderer"

import Form, { component as Component, fixtures, transformer } from "."
import { normalizeField } from "./transformer"

describe("Form Controller", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Form {...fixtures.default} />).toJSON()
    expect(tree.children.length).toEqual(6)
    expect(tree.props.name).toEqual(fixtures.default.title)
  })
  it("transforms props", () => {
    const props = { form: fixtures.default }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree.children.length).toEqual(6)
    expect(tree.props.name).toEqual(fixtures.default.title)
  })
})

describe("Form Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component {...fixtures.default} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Form Transformer", () => {
  it("unpacks a form property", () => {
    const result = transformer({ form: fixtures.default })
    expect(result).toEqual(fixtures.default)
  })
  it("won't unpack if the form property doesn't exist", () => {
    const result = transformer(fixtures.default)
    expect(result).toEqual(fixtures.default)
  })
  it("won't unpack if form prop is empty", () => {
    const result = transformer({ form: null, ...fixtures.default })
    expect(result).toEqual({ form: null, ...fixtures.default })
  })
  it("normalizes field data", () => {
    const input = {
      title: "Contact Form",
      field_groups: [
        {
          title: "Personal Info",
          fields: [
            {
              title: "Name",
              type: "text"
            }
          ]
        }
      ]
    }
    expect(input.field_groups[0].fields[0].name).toEqual(undefined)
    const result = transformer({ form: fixtures.default })
    expect(result.field_groups[0].fields[0].name).toEqual("name")
  })
})

describe("normalizeField", () => {
  // --- appearance ---
  it("sets appearance for text fields", () => {
    const input = { type: "text", text_appearance: "long", select_appearance: "dropdown" }
    const result = normalizeField(input)
    expect(result.appearance).toEqual("long")
  })
  it("sets appearance for select fields", () => {
    const input = { type: "select", text_appearance: "long", select_appearance: "dropdown" }
    const result = normalizeField(input)
    expect(result.appearance).toEqual("dropdown")
  })
  // --- name ---
  it("keeps the name as the name if set", () => {
    const result = normalizeField({ title: "WRONG", name: "hello_world" })
    expect(result.name).toEqual("hello_world")
  })
  it("parameterizes the title if not set", () => {
    const result = normalizeField({ title: "Hello World" })
    expect(result.title).toEqual("Hello World")
    expect(result.name).toEqual("hello_world")
  })
  // --- label ---
  it("keeps the label in place if it exists", () => {
    const result = normalizeField({ title: "WRONG", label: "Hello World" })
    expect(result.label).toEqual("Hello World")
  })
  it("sets the label as the title if not set", () => {
    const result = normalizeField({ title: "Hello World" })
    expect(result.label).toEqual("Hello World")
  })
  // --- options ---
  it("does not set validation for text fields", () => {
    const input = { type: "text", select_options: ["A", "B", "C"] }
    const result = normalizeField(input)
    expect(result.options).toEqual(undefined)
  })
  it("sets options for select fields", () => {
    const input = { type: "select", select_options: ["A", "B", "C"] }
    const result = normalizeField(input)
    expect(result.options).toEqual(["A", "B", "C"])
  })
  // --- placeholder ---
  it("sets placeholder for text fields", () => {
    const result = normalizeField({ type: "text", text_placeholder: "Hello World" })
    expect(result.placeholder).toEqual("Hello World")
  })
  it("does not set placeholder for select fields", () => {
    const input = { type: "select", text_placeholder: "Hello World" }
    const result = normalizeField(input)
    expect(result.placeholder).toEqual(undefined)
  })
  // --- type ---
  it("keeps the type in place if it exists", () => {
    const result = normalizeField({ type: "Long Text" })
    expect(result.type).toEqual("Long Text")
  })
  it("sets the type as the Short Text if not set", () => {
    const result = normalizeField({})
    expect(result.type).toEqual("Short Text")
  })
  // --- validation ---
  it("sets validation for text fields", () => {
    const result = normalizeField({ type: "text", text_validation: "phone" })
    expect(result.validation).toEqual("phone")
  })
  it("does not set validation for select fields", () => {
    const input = { type: "select", text_validation: "email" }
    const result = normalizeField(input)
    expect(result.validation).toEqual(undefined)
  })
  // --- width ---
  it("keeps the width in place if it exists", () => {
    const result = normalizeField({ width: "half" })
    expect(result.width).toEqual("half")
  })
  it("sets the width as the full if not set", () => {
    const result = normalizeField({})
    expect(result.width).toEqual("full")
  })
  // --- others ---
  it("passes remaining values through", () => {
    const input = {
      label: "The Label",
      name: "The Name",
      required: true,
      title: "The Title",
      type: "select",
      width: "quarter"
    }
    const result = normalizeField(input)
    expect(result).toEqual(input)
  })
})
