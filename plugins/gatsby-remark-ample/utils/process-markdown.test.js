const processMarkdown = require("./process-markdown")
const fs = require("fs")
const path = require("path")

const markdown = fs.readFileSync(path.join(__dirname, "./__fixtures__/plain-markdown.md"))

describe("processMarkdown", () => {
  it("converts markdown to HTML", () => {
    expect(processMarkdown(markdown)).toContain("<h1>Hello World</h1>")
  })
  it("applies target=_blank to external links", () => {
    expect(processMarkdown(markdown)).toContain(
      '<a href="https://ample.co" target="_blank">minim nisi</a>'
    )
  })
  it("does not apply target=_blank to relative links", () => {
    expect(processMarkdown(markdown)).toContain('<a href="/home">nisi sint</a>')
  })
})
