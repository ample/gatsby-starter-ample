const path = require("path")

const Driver = require("./contentful")
const pagesResponse = require("./__fixtures__/contentful.pages-response.json")
const linksResponse = require("./__fixtures__/contentful.links-response.json")

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
      getEntries: async () => pagesResponse
    }
  })

  test("processes multiple items and returns the resulting array", async () => {
    const res = await driver.process()
    const expRes = pagesResponse.items.map(item => ({
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
    const item = pagesResponse.items[0]
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
  test("can nest an array of linked sub-entries", () => {
    driver = new Driver({
      id: "form",
      fields: {
        title: "text",
        field_groups: [
          {
            title: "text"
          }
        ]
      }
    })
    const item = linksResponse.items[0]
    const res = driver.processItem(item)
    expect(res).toStrictEqual({
      title: item.fields.title,
      field_groups: [
        {
          title: item.fields.field_groups[0].fields.title
        }
      ]
    })
  })
})

describe("getValueByType", () => {
  beforeEach(() => {
    driver = new Driver(mockConfig)
  })

  test("supports text type", () => {
    const res = driver.getValueByType.text(pagesResponse.items[0], "title")
    expect(res).toBe(pagesResponse.items[0].fields.title)
  })
  test("supports sys type", () => {
    const res = driver.getValueByType.sys(pagesResponse.items[0], "id")
    expect(res).toBe(pagesResponse.items[0].sys.id)
  })
  test("supports file type", () => {
    const res = driver.getValueByType.file(pagesResponse.items[0], "image")
    expect(res).toBe(pagesResponse.items[0].fields.image.fields.file.url)
  })
  test("resolves functions", () => {
    const func = item => item.fields.title
    const res = driver.getValueByType.function(pagesResponse.items[0], "image", func)
    expect(res).toBe(pagesResponse.items[0].fields.title)
  })
})
