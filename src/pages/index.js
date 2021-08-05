import React from "react"
import FlexibleTemplate from "@templates/page/flexible"
import { graphql, useStaticQuery } from "gatsby"

const homePage = () => {
  const data = useStaticQuery(graphql`
    query pageQuery {
      allJson {
        edges {
          node {
            id
            blocks {
              template
              title
              blocks {
                template
                body
                label
                url
                src {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              config {
                margin_bottom
                text_align
                width
              }
            }
          }
        }
      }
    }
  `)

  const blocks = data.allJson.edges[0].node.blocks[0]

  return (
    <FlexibleTemplate blocks={[blocks]}>
      <h1>{data.title}</h1>
    </FlexibleTemplate>
  )
}

export default homePage
