const processFrontmatter = require("./process-frontmatter")
const getOptions = require("./get-options")
const path = require("path")

const options = getOptions()

const absoluteFilePath = path.join(__dirname, "./__fixtures__/test-01/test-02.md")
const imageSrcDir = path.join(__dirname, "./__fixtures__")

describe("processFrontmatter", () => {
  it("passes non-processable properties through", async () => {
    const fm = { hello: "world" }
    const result = await processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual(fm)
  })
  it("processes markdown fields", async () => {
    const fm = { test_md: "Hello world" }
    const result = await processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({ test_md: "Hello world", test: "<p>Hello world</p>\n" })
  })
  it("processes nested markdown fields", async () => {
    const fm = { a: { b: [{ test_md: "Hello world" }] } }
    const result = await processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({ a: { b: [{ test_md: "Hello world", test: "<p>Hello world</p>\n" }] } })
  })
  it("processes image fields", async () => {
    const options = getOptions({ imageSrc: imageSrcDir })
    const fm = { test_src: "/images/pto.png" }
    const node = { fileAbsolutePath: absoluteFilePath }
    const result = await processFrontmatter({ frontmatter: fm, options: options, node: node })
    expect(result).toEqual({ test_src: "/images/pto.png", test: "../images/pto.png" })
  })
  it("processes nested image fields", async () => {
    const options = getOptions({ imageSrc: imageSrcDir })
    const fm = { a: { b: [{ test_src: "/images/pto.png" }] } }
    const node = { fileAbsolutePath: absoluteFilePath }
    const result = await processFrontmatter({ frontmatter: fm, options: options, node: node })
    expect(result).toEqual({
      a: { b: [{ test_src: "/images/pto.png", test: "../images/pto.png" }] }
    })
  })
})
