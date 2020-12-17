const fs = require("fs")
const path = require("path")

/**
 * Creates a directory if it doesn't already exist.
 *
 * @param {string} dir Path to directory
 */
exports.initDir = dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

/**
 * Remove all files from directory.
 *
 * @param {string} dir Path to directory
 */
exports.cleanDir = dir => {
  const existingFiles = fs.readdirSync(dir)
  existingFiles.map(file => fs.unlinkSync(path.join(dir, file)))
}
