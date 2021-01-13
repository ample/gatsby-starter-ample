const fs = require("fs")
const path = require("path")
const { writeFile } = require("./writer")

const mockDir = path.join(__dirname, "tmp")
const mockFile = path.join(mockDir, "file.md")

describe("writeFile", () => {
  beforeEach(() => {
    if (!fs.existsSync(mockDir)) {
      fs.mkdirSync(mockDir)
    }
    if (fs.existsSync(mockFile)) {
      fs.unlinkSync(mockFile)
    }
  })
  it("writes a file", () => {
    expect(fs.existsSync(mockFile)).toEqual(false)
    writeFile({ path: mockFile })
    expect(fs.existsSync(mockFile)).toEqual(true)
  })
  it("converts frontmatter object to YAML", () => {
    const frontmatter = { title: "Hello World" }
    writeFile({ frontmatter, path: mockFile })
    const fileContent = fs.readFileSync(mockFile).toString()
    expect(fileContent).toContain("---\ntitle: Hello World\n---\n\n")
  })
  it("writes the content string to the body", () => {
    const content = "# Hello World"
    writeFile({ content, path: mockFile })
    const fileContent = fs.readFileSync(mockFile).toString()
    expect(fileContent).toContain(`---\n\n# Hello World`)
  })
})
