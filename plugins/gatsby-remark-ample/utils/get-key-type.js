const lodash = require("lodash")
const path = require("path")

module.exports = ({ keyPath, options, value }) => {
  // SEO objects are those that match the SEO field key.
  if (keyPath === options.seoField) return "seo"
  // Ignore type inside the SEO object.
  if (keyPath.split(".")[0] === options.seoField) return undefined
  // Markdown fields are those whose key ends with the markdown suffix.
  if (lodash.endsWith(keyPath, options.markdownSuffix)) return "md"
  // Keys that end with the image suffix, whose value starts with the path
  // separator and has a valid extension are treated as images.
  if (
    lodash.endsWith(keyPath, options.imageSuffix) &&
    lodash.isString(value) &&
    lodash.startsWith(value, path.sep) &&
    options.imageExtensions.includes(path.extname(value))
  )
    return "img"
  // Otherwise, we process as a pass-through value.
  return "default"
}
