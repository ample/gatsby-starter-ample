const path = require("path")

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/admin",
    component: path.join(__dirname, "./src/views/app.js"),
    context: {}
  })
}
