const getFilePath = require("./get-file-path")
const path = require("path")

const projectRoot = path.join(__dirname, "..")
const absoluteFilePath = path.join(projectRoot, "__fixtures__/test-01/test-02.md")

describe("getFilePath", () => {
  it("returns the relative path from the project root directory", () => {
    const result = getFilePath({ absoluteFilePath: absoluteFilePath, projectRoot: projectRoot })
    expect(result).toEqual("__fixtures__/test-01/test-02.md")
  })
  it("provides the same result when the project root ends with a slash", () => {
    const result = getFilePath({
      absoluteFilePath: absoluteFilePath,
      projectRoot: projectRoot + path.sep
    })
    expect(result).toEqual("__fixtures__/test-01/test-02.md")
  })
})
