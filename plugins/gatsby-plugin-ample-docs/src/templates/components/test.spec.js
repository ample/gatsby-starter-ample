import { getCompDir, getCompHeading } from "."

const mockPath = "src/components/button/playground.mdx"

describe("getCompDir()", () => {
  it("extracts the parent directory from the absolute path", () => {
    const result = getCompDir({ fileAbsolutePath: mockPath })
    expect(result).toEqual("button")
  })
})

describe("getCompHeading()", () => {
  it("uses frontmatter, if available", () => {
    const result = getCompHeading({
      fileAbsolutePath: mockPath,
      frontmatter: { title: "Hello World" }
    })
    expect(result).toEqual("Hello World")
  })
  it("falls back to a titleized version of the parent dir name", () => {
    const result = getCompHeading({ fileAbsolutePath: mockPath })
    expect(result).toEqual("Button")
  })
})
