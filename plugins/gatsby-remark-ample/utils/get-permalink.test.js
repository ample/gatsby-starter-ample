const getPermalink = require("./get-permalink")
const path = require("path")

const contentSrc = path.join(__dirname)
const absoluteFilePath = path.join(contentSrc, "__fixtures__/test-01/test-02.md")

describe("getPermalink", () => {
  it("returns the relative path inside the contentSrc directory, assuming segmented by directory", () => {
    const result = getPermalink({ absoluteFilePath: absoluteFilePath, contentSrc: contentSrc })
    expect(result).toEqual("test-01/test-02")
  })
  it("returns the same result when using a relative path as the content source", () => {
    const result = getPermalink({ absoluteFilePath: absoluteFilePath, contentSrc: "utils" })
    expect(result).toEqual("test-01/test-02")
  })
  it("provides the same result when the contentSrc ends with a slash", () => {
    const result = getPermalink({
      absoluteFilePath: absoluteFilePath,
      contentSrc: contentSrc + path.sep
    })
    expect(result).toEqual("test-01/test-02")
  })
})
