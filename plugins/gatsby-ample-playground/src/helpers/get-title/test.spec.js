import getTitle from "."

const mockPath = "src/components/button/playground.mdx"

describe("getTitle()", () => {
  it("uses frontmatter, if available", () => {
    const result = getTitle({
      fileAbsolutePath: mockPath,
      frontmatter: { title: "Hello World" }
    })
    expect(result).toEqual("Hello World")
  })

  it("falls back to the parent dir name", () => {
    const result = getTitle({ fileAbsolutePath: mockPath })
    expect(result).toEqual("Button")
  })

  it("titleizes dashed directories", () => {
    const result = getTitle({ fileAbsolutePath: "some/nested/hello-world/playground.mdx" })
    expect(result).toEqual("Hello World")
  })

  it("returns null when the fileAbsolutePath is not available", () => {
    const result = getTitle({})
    expect(result).toEqual(null)
  })
})
