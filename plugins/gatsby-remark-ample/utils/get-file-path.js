const compact = require("lodash/compact")
const path = require("path")

module.exports = ({ absoluteFilePath, projectRoot }) => {
  // Remove everything before the content directory.
  let filePath = absoluteFilePath.split(projectRoot).pop()
  // Split the remaining path into its individual parts.
  filePath = compact(filePath.split(path.sep))
  // Convert the path back into a string, and remove the extension.
  return filePath.join(path.sep)
}
