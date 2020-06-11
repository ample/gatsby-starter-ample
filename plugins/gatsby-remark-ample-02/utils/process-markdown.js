const remark = require("remark")
const remarkHTML = require("remark-html")

module.exports = markdown =>
  remark()
    .use(remarkHTML)
    .processSync(markdown)
    .toString()
