const getKeyType = require("./get-key-type")
const getOptions = require("./get-options")

const options = getOptions()

describe("getKeyType", () => {
  it('returns "default" for generic key-value pairs', () => {
    const result = getKeyType({ keyPath: "hello", value: "world", options: options })
    expect(result).toEqual("default")
  })
  it('returns "seo" for matching "seo" keys', () => {
    const result = getKeyType({ keyPath: "seo", value: {}, options: options })
    expect(result).toEqual("seo")
  })
  it('does not return "seo" for matching nested "seo" keys', () => {
    const result = getKeyType({ keyPath: "hello.seo", value: {}, options: options })
    expect(result).toEqual("default")
  })
  it("returns undefined for nested seo keys", () => {
    const result = getKeyType({ keyPath: "seo.title", value: "world", options: options })
    expect(result).toEqual(undefined)
  })
  it('returns "md" for markdown keys', () => {
    const result = getKeyType({ keyPath: "hello_md", value: "world", options: options })
    expect(result).toEqual("md")
  })
  it('returns "img" for image keys with proper values', () => {
    const result = getKeyType({ keyPath: "hello_src", value: "/world.jpg", options: options })
    expect(result).toEqual("img")
  })
  it('returns "default" for image keys with improper filenames', () => {
    const result = getKeyType({ keyPath: "hello_src", value: "world.jpg", options: options })
    expect(result).toEqual("default")
  })
  it('returns "default" for image keys with improper extensions', () => {
    const result = getKeyType({ keyPath: "hello_src", value: "/world.svg", options: options })
    expect(result).toEqual("default")
  })
})
