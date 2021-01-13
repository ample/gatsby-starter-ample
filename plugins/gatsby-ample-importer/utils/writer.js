const fs = require("fs")
const yaml = require("js-yaml")

/**
 * Combine and convert frontmatter and body content, then write to file.
 *
 * @param {object} param0 Values required for writing content to file.
 */
exports.writeFile = ({ frontmatter = {}, content = "", path }) => {
  // Convert frontmatter to JSON to protect against undefined values.
  const fm = JSON.parse(JSON.stringify(frontmatter, null, 2))
  // Add frontmatter and body together and store.
  const body = `---\n${yaml.safeDump(fm)}---\n\n${content || ""}`
  // Write the file.
  return fs.writeFileSync(path, body)
}
