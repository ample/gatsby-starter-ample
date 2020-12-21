const fs = require("fs")
const path = require("path")
const glob = require("glob")

const { importData } = require("./importer")
const Driver = require("../drivers/contentful")

const contentDir = path.join(__dirname, "tmp")

jest.mock("../drivers/contentful")

Driver.mockImplementation(() => {
  return {
    process: () => {
      return [
        {
          id: "1",
          title: "Item #1",
          slug: "item-01",
          body: "# Hello World",
          image: "my-image.jpg"
        },
        {
          id: "2",
          title: "Item #2",
          slug: "item-02",
          body: "# Hello Again",
          image: "another-image.jpg"
        }
      ]
    }
  }
})

const mockConfig = {
  driver: "contentful",
  models: [
    {
      id: "page",
      dir: `${contentDir}/pages`,
      filename: "slug",
      content: "body",
      fields: {
        id: "System",
        title: "Text",
        slug: "Text",
        body: "Text",
        image: "File"
      }
    },
    {
      id: "post",
      dir: `${contentDir}/posts`,
      filename: "slug",
      content: "body",
      fields: {
        id: "System",
        title: "Text",
        slug: "Text",
        body: "Text",
        image: "File"
      }
    }
  ]
}

describe("importData", () => {
  beforeEach(() => {
    const files = glob.sync(`${contentDir}/**/*`)
    files.map(file => {
      if (!fs.lstatSync(file).isDirectory()) fs.unlinkSync(file)
    })
  })

  it("creates the appropriate files", async () => {
    expect(fs.existsSync(`${contentDir}/pages/item-01.md`)).toBe(false)
    expect(fs.existsSync(`${contentDir}/pages/item-02.md`)).toBe(false)
    expect(fs.existsSync(`${contentDir}/posts/item-01.md`)).toBe(false)
    expect(fs.existsSync(`${contentDir}/posts/item-02.md`)).toBe(false)
    await importData({ config: mockConfig })
    expect(Driver).toHaveBeenCalled()
    expect(fs.existsSync(`${contentDir}/pages/item-01.md`)).toBe(true)
    expect(fs.existsSync(`${contentDir}/pages/item-02.md`)).toBe(true)
    expect(fs.existsSync(`${contentDir}/posts/item-01.md`)).toBe(true)
    expect(fs.existsSync(`${contentDir}/posts/item-02.md`)).toBe(true)
  })

  it("writes the data to file", async () => {
    await importData({ config: mockConfig })
    expect(Driver).toHaveBeenCalled()
    let content
    content = fs.readFileSync(`${contentDir}/pages/item-01.md`).toString()
    expect(content).toContain(`---
id: '1'
title: 'Item #1'
slug: item-01
body: '# Hello World'
image: my-image.jpg
---

# Hello World`)
    content = fs.readFileSync(`${contentDir}/pages/item-02.md`).toString()
    expect(content).toContain(`---
id: '2'
title: 'Item #2'
slug: item-02
body: '# Hello Again'
image: another-image.jpg
---

# Hello Again`)
    content = fs.readFileSync(`${contentDir}/posts/item-01.md`).toString()
    expect(content).toContain(`---
id: '1'
title: 'Item #1'
slug: item-01
body: '# Hello World'
image: my-image.jpg
---

# Hello World`)
    content = fs.readFileSync(`${contentDir}/posts/item-02.md`).toString()
    expect(content).toContain(`---
id: '2'
title: 'Item #2'
slug: item-02
body: '# Hello Again'
image: another-image.jpg
---

# Hello Again`)
  })
})
