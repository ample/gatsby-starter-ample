const getPathPrefix = require("./get-path-prefix")
const path = require("path")

const contentSrc = path.join(__dirname)
const absoluteFilePath = path.join(contentSrc, "__fixtures__/test-01/test-02.md")

describe("getPathPrefix", () => {
  it("returns the relative path inside the contentSrc directory, without the filename", () => {
    const result = getPathPrefix({ absoluteFilePath: absoluteFilePath, contentSrc: contentSrc })
    expect(result).toEqual("test-01")
  })
  it("returns the same result when using a relative path as the content source", () => {
    const result = getPathPrefix({ absoluteFilePath: absoluteFilePath, contentSrc: "utils" })
    expect(result).toEqual("test-01")
  })
  it("provides the same result when the contentSrc ends with a slash", () => {
    const result = getPathPrefix({
      absoluteFilePath: absoluteFilePath,
      contentSrc: contentSrc + path.sep
    })
    expect(result).toEqual("test-01")
  })
  it("returns an empty string for top-level items", () => {
    const topLevelPath = path.join(contentSrc, "__fixtures__/test-01.md")
    const result = getPathPrefix({
      absoluteFilePath: topLevelPath,
      contentSrc: contentSrc + path.sep
    })
    expect(result).toEqual("")
  })
})
