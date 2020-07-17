import getPagePath from "./get-page-path"

const mockPage = { slugPath: "about/index" }

const mockPages = [{ ...mockPage }, { slugPath: "about" }]

describe("getPagePath()", () => {
  it("chomps index off the end when there are no duplicates", () => {
    const result = getPagePath({ slugPath: "hello/index" }, mockPages)
    expect(result).toEqual("/hello")
  })
  it("does not chomp index off the end when there is a conflicting path", () => {
    const result = getPagePath(mockPage, mockPages)
    expect(result).toEqual("/about/index")
  })
  it("treats index as the home page", () => {
    const result = getPagePath({ slugPath: "index" }, mockPages)
    expect(result).toEqual("/")
  })
  it("returns the correct page path when not passed a second arg", () => {
    const result = getPagePath(mockPage)
    expect(result).toEqual("/about")
  })
})
