const path = require("path")

module.exports = (overrides = {}) => {
  // Default options
  const defaults = {
    contentSrc: "src/content/",
    imageExtensions: [".jpg", ".jpeg", ".png"],
    imageSrc: path.join(__dirname, "../../../static"),
    imageSuffix: "_src",
    markdownSuffix: "_md",
    modelField: "model",
    models: [],
    projectRoot: path.join(__dirname, "../../../"),
    seoField: "seo"
  }

  // Map overrides on top of defaults, allowing only keys specified in the
  // defaults object above.
  let options = {}
  Object.keys(defaults).map((key) => (options[key] = overrides[key] || defaults[key]))

  // Ensure contentSrc ends with a trailing slash.
  if (options.contentSrc.slice(-1) !== "/") options.contentSrc += "/"

  // Return the resulting object.
  return options
}
