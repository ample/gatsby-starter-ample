import { transformData } from "./"

const queryData = {
  title_template: "%s | Hello World",
  default_image: "hello-world.jpg"
}

describe("transformData", () => {
  it("removes the baseUrl", () => {
    const args = { queryData: queryData, srcProps: {} }
    expect(transformData(args).baseUrl).toEqual(undefined)
  })
  it("adds a titleTemplate from query data", () => {
    const args = { queryData: queryData, srcProps: {} }
    expect(transformData(args).titleTemplate).toEqual("%s | Hello World")
  })
  it("adds a fallback image", () => {
    const args = { queryData: queryData, srcProps: { baseUrl: "https://www.example.com" } }
    expect(transformData(args).imageUrl).toEqual("https://www.example.com/hello-world.jpg")
  })
})
