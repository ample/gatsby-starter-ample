import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import styles from "./styles.module.scss"

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
    <div className={styles.sitemap_view}>
      <div className={styles.intro}>
        <h1>Sitemap</h1>
        <p>This is a full list of URLs available on your site.</p>
      </div>
      <div className="container">
        <ul className={styles.sitemap_list}>
          {pages.map((page, idx) => (
            <li key={idx}>
              <a href={page.path} target="_blank" rel="noreferrer">
                {page.path}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SitemapView
