const path = require("path")

exports.createPages = ({ actions }, pluginOptions = {}) => {
  if (pluginOptions.disable) return

  const pathPrefix = "__playground__"

  actions.createPage({
    path: `/${pathPrefix}/components`,
    component: path.join(__dirname, "./src/templates/components/index.js")
  })

  actions.createPage({
    path: `/${pathPrefix}/templates`,
    component: path.join(__dirname, "./src/templates/templates/index.js")
  })
}
