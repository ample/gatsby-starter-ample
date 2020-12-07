import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

const SitemapView = () => {
  const sitemapQuery = useStaticQuery(graphql`
    {
      allPages: allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  let pages = get(sitemapQuery, "allPages.edges") || []
  pages = pages.map(({ node }) => node).sort((a, b) => (a.path > b.path ? 1 : -1))

  console.log(pages)

  return (
    <>
      <h1>Sitemap</h1>
      <div className="container">
        <ul>
          {pages.map((page, idx) => (
            <li key={idx}>
              <a href={page.path} target="_blank" rel="noreferrer">
                {page.path}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SitemapView
