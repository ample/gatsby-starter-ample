const fs = require("fs-extra")
const path = require("path")

/**
 * Creates a directory if it doesn't already exist.
 *
 * @param {string} dir Path to directory
 */
exports.initDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

/**
 * Remove all files from directory.
 *
 * @param {string} dir Path to directory
 */
exports.cleanDir = (dir) => {
  if (!fs.existsSync(dir)) return
  const existingFiles = fs.readdirSync(dir)
  existingFiles.map((file) => fs.unlinkSync(path.join(dir, file)))
}
