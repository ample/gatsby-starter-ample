const processMarkdown = require("./process-markdown")
const fs = require("fs")
const path = require("path")

const markdown = fs.readFileSync(path.join(__dirname, "./__fixtures__/plain-markdown.md"))

describe("processMarkdown", () => {
  it("converts markdown to HTML", () => {
    expect(processMarkdown(markdown)).toContain("<h1>Hello World</h1>")
  })
})
