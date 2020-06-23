const fs = require("fs")
const path = require("path")

module.exports = ({ absoluteFilePath, imageSrcDir, value }) => {
  // Absolute path to the image.
  const absImgPath = path.join(imageSrcDir, value)
  // Return null if the file doesn't exist.
  if (!fs.existsSync(absImgPath)) return null
  // Absolute path to the directory in which the current node we're
  // processing lives.
  const absNodeDir = path.join(absoluteFilePath, "..")
  // Find the relative path from the current node to the image.
  return path.relative(absNodeDir, absImgPath)
}
