const postcssConfig = require("./postcss.config")
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Ample's Gatsby Starter`,
    description: `The base for a new Ample development project.`,
    author: `@helloample`,
    siteUrl: `https://www.site-url.com`
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@plugins": `./plugins`,
          "@root": `./`,
          "@src": `./src`
        }
      }
    },
    `gatsby-ample-schema`,
    `gatsby-ample-pages`,
    `gatsby-ample-seo`,
    `gatsby-ample-debuggers`,
    `gatsby-ample-linters`,
    {
      resolve: `gatsby-ample-redirects`,
      options: {
        disable: process.env.GATSBY_REDIRECTS_DISABLED === "true"
      }
    },
    {
      resolve: `gatsby-ample-playground`,
      options: {
        disable: process.env.GATSBY_PLAYGROUND_DISABLED === "true"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-remark-ample`,
      options: {
        imageSrc: path.join(__dirname, "static"),
        models: ["AdminReferences", "AdminSeo", "Form", "Page", "Redirect"],
        plugins: ["gatsby-ample-pages"],
        projectRoot: path.join(__dirname)
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        // TODO: Update project fonts.
        //
        // google: {
        //   families: ["Font Family"]
        // },
        // typekit: {
        //   id: ["typekit-id"]
        // }
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-ample`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0095df`,
        theme_color: `#0095df`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: "[local]-[hash:base64:3]",
          sourceMap: true
        },
        fiber: require("fibers"),
        implementation: require("sass"),
        postCssPlugins: postcssConfig,
        sourceMap: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }

            excludedPages: allPage(filter: {exclude_from_sitemap: {eq: true}, published: {eq: true}}) {
              edges {
                node {
                  pagePath
                }
              }
            }
          }
        `,
        serialize: ({ site, excludedPages, allSitePage }) => {
          // Get the paths of all pages that should be excluded from the
          // sitemap.
          const excludePaths = excludedPages.edges.map(({ node }) => node.pagePath)
          // Return an array of any static route Gatsby built, except those that
          // were excluded.
          return allSitePage.edges
            .filter(({ node }) => !excludePaths.includes(node.path))
            .map(({ node }) => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `daily`,
                priority: 0.7
              }
            })
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["X-Frame-Options: SAMEORIGIN"]
        }
      }
    }
  ]
}
