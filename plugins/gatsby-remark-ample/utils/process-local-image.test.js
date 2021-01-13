const path = require("path")
const processLocalImage = require("./process-local-image")

const absoluteFilePath = path.join(__dirname, "./__fixtures__/test-01/test-02.md")
const imageSrcDir = path.join(__dirname, "./__fixtures__")

describe("processLocalImage", () => {
  it("returns a relative path for the image from the file", () => {
    const result = processLocalImage({
      absoluteFilePath: absoluteFilePath,
      imageSrcDir: imageSrcDir,
      value: "/images/pto.png"
    })
    expect(result).toEqual("../images/pto.png")
  })
  it("returns null for images that don't exist", () => {
    const result = processLocalImage({
      absoluteFilePath: absoluteFilePath,
      imageSrcDir: imageSrcDir,
      value: "/images/WRONG.png"
    })
    expect(result).toEqual(null)
  })
})
