const lodash = require("lodash")
const path = require("path")

module.exports = ({ absoluteFilePath, contentSrc }) => {
  // Remove everything before the content directory.
  let filePath = absoluteFilePath.split(contentSrc).pop()
  // Split the remaining path into its individual parts.
  filePath = lodash.compact(filePath.split(path.sep))
  // Remove the first item (the grouped content directory).
  filePath.shift()
  // Convert the path back into a string, and remove the extension.
  return filePath.join(path.sep).replace(path.extname(absoluteFilePath), "")
}
