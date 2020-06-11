const processFrontmatter = require("./process-frontmatter")
const getOptions = require("./get-options")
const path = require("path")

const options = getOptions()

const absoluteFilePath = path.join(__dirname, "./__fixtures__/test-01/test-02.md")
const imageSrcDir = path.join(__dirname, "./__fixtures__")

describe("processFrontmatter", () => {
  it("passes non-processable properties through", () => {
    const fm = { hello: "world" }
    const result = processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({ frontmatter: fm })
  })
  it("extracts seoData and deletes the key from frontmatter", () => {
    const fm = { seo: { title: "Hello World" }, title: "Hello World" }
    const result = processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({
      frontmatter: { title: "Hello World" },
      seoData: { title: "Hello World" }
    })
  })
  it("processes markdown fields", () => {
    const fm = { test_md: "Hello world" }
    const result = processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({
      frontmatter: { test_md: "Hello world", test: "<p>Hello world</p>\n" }
    })
  })
  it("processes nested markdown fields", () => {
    const fm = { a: { b: [{ test_md: "Hello world" }] } }
    const result = processFrontmatter({ frontmatter: fm, options: options })
    expect(result).toEqual({
      frontmatter: { a: { b: [{ test_md: "Hello world", test: "<p>Hello world</p>\n" }] } }
    })
  })
  it("processes image fields", () => {
    const options = getOptions({ imageSrc: imageSrcDir })
    const fm = { test_src: "/images/pto.png" }
    const node = { fileAbsolutePath: absoluteFilePath }
    const result = processFrontmatter({ frontmatter: fm, options: options, node: node })
    expect(result).toEqual({
      frontmatter: { test_src: "/images/pto.png", test: "../images/pto.png" }
    })
  })
  it("processes nested image fields", () => {
    const options = getOptions({ imageSrc: imageSrcDir })
    const fm = { a: { b: [{ test_src: "/images/pto.png" }] } }
    const node = { fileAbsolutePath: absoluteFilePath }
    const result = processFrontmatter({ frontmatter: fm, options: options, node: node })
    expect(result).toEqual({
      frontmatter: { a: { b: [{ test_src: "/images/pto.png", test: "../images/pto.png" }] } }
    })
  })
})
