const path = require("path")

const { initDir, cleanDir } = require("./dir")
const { writeFile } = require("./writer")

/**
 * Import items by looping through the model config and using the appropriate
 * driver to import data to an items key and return the configuration object.
 */
exports.importData = async config => {
  // Get driver from config.
  const Driver = require(`../drivers/${config.driver}`)
  // Loop through the models in the config ...
  await config.models.map(async model => {
    // Import the data.
    const driver = new Driver(model)
    const items = await driver.process()
    // Prep the directory.
    initDir(model.dir)
    cleanDir(model.dir)
    // Write the items to file.
    await items.map(item => {
      writeFile({
        frontmatter: item,
        content: model.content ? item[model.content] : null,
        path: path.join(model.dir, `${item[model.filename]}.md`)
      })
    })
  })
}
