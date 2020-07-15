import getParentDir from "."

const mockPath = "src/components/button/playground.mdx"

describe("getParentDir()", () => {
  it("extracts the parent directory from the absolute path", () => {
    const result = getParentDir(mockPath)
    expect(result).toEqual("button")
  })
})
