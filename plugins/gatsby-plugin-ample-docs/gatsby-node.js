const path = require("path")
// const lodash = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  // return graphql(`
  //   {
  //     components: allMdx(filter: { fileAbsolutePath: { regex: "/components/.*/playground.mdx/" } }) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //           }
  //           body
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   result.components.edges.map(({node: component}) => {
  //     actions.createPage({
  //       path: ,
  //       component: path.join(__dirname, "./src/templates/doc.js"),
  //       context: {
  //         id: component.id
  //       }
  //     })
  //   })
  // })

  actions.createPage({
    path: "/__playground__/components",
    component: path.join(__dirname, "./src/templates/components/index.js")
  })
}
