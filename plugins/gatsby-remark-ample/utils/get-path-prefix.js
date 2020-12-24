const path = require("path")

const getPermalink = require("./get-permalink")

module.exports = ({ absoluteFilePath, contentSrc }) => {
  return getPermalink({ absoluteFilePath, contentSrc })
    .split(path.sep)
    .slice(0, -1)
    .join(path.sep)
}
