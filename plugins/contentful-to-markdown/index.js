const contentful = require("contentful")
const fs = require("fs")
const path = require("path")
// const slugify = require("slugify")
const yaml = require("js-yaml")

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID
})

const destDir = path.join(__dirname, `./tmp`)
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir)
}

// Clean the directory.
const existingFiles = fs.readdirSync(destDir)
existingFiles.map(file => fs.unlinkSync(path.join(destDir, file)))

async function importPages() {
  const res = await client.getEntries({
    content_type: "page",
    order: "fields.title"
  })

  const items = (res.items || []).map(item => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      body: item.fields.body,
      image: item.fields.image.fields.file.url
    }
  })

  await items.map(item => {
    // Format the frontmatter.
    const frontmatter = yaml.safeDump(item)
    // Add frontmatter and body together and store.
    const body = `---\n${frontmatter}---\n\n${item.content || ""}`
    // Write the file.
    // const filename = `${slugify(item.title).toLowerCase()}.md`
    const filename = `${item.id}.md`
    return fs.writeFileSync(path.join(destDir, filename), body)
  })
}

importPages()
