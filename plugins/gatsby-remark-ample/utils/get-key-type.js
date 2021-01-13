const endsWith = require("lodash/endsWith")
const isString = require("lodash/isString")
const path = require("path")
const startsWith = require("lodash/startsWith")

module.exports = ({ keyPath, options, value }) => {
  // SEO objects are those that match the SEO field key.
  if (keyPath === options.seoField) return "seo"
  // Ignore type inside the SEO object.
  if (keyPath.split(".")[0] === options.seoField) return undefined
  // Markdown fields are those whose key ends with the markdown suffix.
  if (endsWith(keyPath, options.markdownSuffix)) return "md"
  // Keys that end with the image suffix, whose value starts with the path
  // separator and has a valid extension are treated as images.
  if (
    endsWith(keyPath, options.imageSuffix) &&
    isString(value) &&
    (startsWith(value, path.sep) || startsWith(value, "http")) &&
    options.imageExtensions.includes(path.extname(value))
  )
    return "img"
  // Otherwise, we process as a pass-through value.
  return "default"
}
