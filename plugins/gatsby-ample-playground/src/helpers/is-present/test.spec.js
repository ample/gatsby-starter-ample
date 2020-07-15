import isPresent from "."

describe("isPresent()", () => {
  it("returns true for strings of some length", () => {
    const result = isPresent("Hello World")
    expect(result).toEqual(true)
  })
  it("returns false for empty strings", () => {
    const result = isPresent("")
    expect(result).toEqual(false)
  })
  it("returns false for undefined", () => {
    const result = isPresent(undefined)
    expect(result).toEqual(false)
  })
  it("returns true for 0", () => {
    const result = isPresent(0)
    expect(result).toEqual(false)
  })
})
