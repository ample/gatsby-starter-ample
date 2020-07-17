import { isFile, isGatsbyLink } from "."

describe("isFile()", () => {
  it("returns false for paths with no extension", () => {
    const result = isFile("/hello/world")
    expect(result).toEqual(false)
  })
  it("returns false for .html files", () => {
    const result = isFile("/hello/world.html")
    expect(result).toEqual(false)
  })
  it("returns false for .HTML files", () => {
    const result = isFile("/hello/world.HTML")
    expect(result).toEqual(false)
  })
  it("returns true for other files", () => {
    const result = isFile("/hello/world.pdf")
    expect(result).toEqual(true)
  })
})

describe("isGatsbyLink()", () => {
  it("returns true for paths with no extension", () => {
    const result = isGatsbyLink("/hello/world")
    expect(result).toEqual(true)
  })
  it("returns false for two leading slashes", () => {
    const result = isGatsbyLink("//hello/world")
    expect(result).toEqual(false)
  })
  it("returns false for domains", () => {
    const result = isGatsbyLink("https://www.ample.co")
    expect(result).toEqual(false)
  })
  it("returns false for paths with extensions that are not HTML", () => {
    const result = isGatsbyLink("/hello/world.pdf")
    expect(result).toEqual(false)
  })
  it("returns true for paths with HTML extension", () => {
    const result = isGatsbyLink("/hello/world.html")
    expect(result).toEqual(true)
  })
  it("returns true for paths with uppercase HTML extension", () => {
    const result = isGatsbyLink("/hello/world.HTML")
    expect(result).toEqual(true)
  })
  it("returns false for hashes", () => {
    const result = isGatsbyLink("#hello-world")
    expect(result).toEqual(false)
  })
  it("returns false for null, undefined, empty strings, hashes", () => {
    expect(isGatsbyLink(null)).toEqual(false)
    expect(isGatsbyLink(undefined)).toEqual(false)
    expect(isGatsbyLink("")).toEqual(false)
  })
})
