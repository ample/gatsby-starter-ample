const fs = require("fs-extra")
const yaml = require("js-yaml")

module.exports = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8")
  return yaml.safeLoad(fileContent)
}
