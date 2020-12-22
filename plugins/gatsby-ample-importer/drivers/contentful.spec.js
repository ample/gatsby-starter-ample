const path = require("path")

const Driver = require("./contentful")
const response = require("./__fixtures__/contentful.response.json")

let driver

const mockConfig = {
  id: "page",
  dir: `${path.join(__dirname, "tmp")}/pages`,
  filename: "slug",
  content: "body",
  fields: {
    id: "sys",
    title: "text",
    name: item => item.fields.title,
    slug: "text",
    body: "text",
    image: "file"
  }
}

describe("process", () => {
  beforeEach(() => {
    driver = new Driver(mockConfig)
    driver.client = {
      getEntries: async () => response
    }
  })

  test("processes multiple items and returns the resulting array", async () => {
    const res = await driver.process()
    const expRes = response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      name: item.fields.title,
      body: item.fields.body,
      slug: item.fields.slug,
      image: item.fields.image.fields.file.url
    }))
    expect(res).toStrictEqual(expRes)
  })
})

describe("processItem", () => {
  beforeEach(() => {
    driver = new Driver(mockConfig)
  })

  test("transforms an item's data", () => {
    const item = response.items[0]
    const res = driver.processItem(item)
    expect(res).toStrictEqual({
      id: item.sys.id,
      title: item.fields.title,
      name: item.fields.title,
      body: item.fields.body,
      slug: item.fields.slug,
      image: item.fields.image.fields.file.url
    })
  })
  // test("adds a model field, if specified", () => {
  //   driver = new Driver({ ...mockConfig, name: "Page" })
  //   const res = driver.processItem(response.items[0])
  //   expect(res.model).toBe("Page")
  // })
})

describe("getValueByType", () => {
  beforeEach(() => {
    driver = new Driver(mockConfig)
  })

  test("supports text type", () => {
    const res = driver.getValueByType.text(response.items[0], "title")
    expect(res).toBe(response.items[0].fields.title)
  })
  test("supports sys type", () => {
    const res = driver.getValueByType.sys(response.items[0], "id")
    expect(res).toBe(response.items[0].sys.id)
  })
  test("supports file type", () => {
    const res = driver.getValueByType.file(response.items[0], "image")
    expect(res).toBe(response.items[0].fields.image.fields.file.url)
  })
  test("resolves functions", () => {
    const func = item => item.fields.title
    const res = driver.getValueByType.function(response.items[0], "image", func)
    expect(res).toBe(response.items[0].fields.title)
  })
})
