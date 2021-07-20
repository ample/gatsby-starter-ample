const path = require("path")
const postcssConfig = require("./postcss.config")

module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@components": `./src/components`,
          "@layout": `./src/layout`,
          "@plugins": `./plugins`,
          "@root": `./`,
          "@snippets": `./src/snippets`,
          "@src": `./src`
        }
      }
    },
    // TODO: Remove if using Forestry or no CMS, otherwise uncomment.
    // {
    //   resolve: `gatsby-ample-importer`,
    //   options: {
    //     config: path.join(__dirname, "importer.config.js")
    //   }
    // },
    `gatsby-ample-schema`,
    `gatsby-ample-pages`,
    // TODO: fix gatsby-ample-seo to work with Gatsby 3
    // `gatsby-ample-seo`,
    `gatsby-ample-debuggers`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use 'global' as *;`,
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]-[hash:base64:3]"
          }
        },
        postCssPlugins: postcssConfig,
        sassOptions: {
          includePaths: [path.join(__dirname, "src/styles")]
        }
      }
    },
    {
      resolve: `gatsby-ample-redirects`,
      options: {
        disable: process.env.GATSBY_REDIRECTS_DISABLED === "true"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `uploads`,
        path: path.join(__dirname, "static/uploads")
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, "src/content")
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src/images")
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`
      // options: {
      //   plugins: [
      //     {
      //       resolve: `gatsby-remark-relative-images`
      //     },
      //     {
      //       resolve: `gatsby-remark-images`,
      //       options: {
      //         maxWidth: 1440
      //       }
      //     }
      //   ]
      // }
    },
    {
      resolve: `gatsby-remark-ample`,
      options: {
        imageSrc: path.join(__dirname, "static"),
        plugins: ["gatsby-ample-pages"],
        projectRoot: path.join(__dirname)
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#0095df`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        name: `gatsby-starter-ample`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#0095df`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID
      }
    },
    // TODO: fix gatsby-plugin-sitemap build issue
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }

    //         allSitePage {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }

    //         excludedPages: allPage(filter: {exclude_from_sitemap: {eq: true}, published: {eq: true}}) {
    //           edges {
    //             node {
    //               pagePath
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serialize: ({ site, excludedPages, allSitePage }) => {
    //       // Get the paths of all pages that should be excluded from the
    //       // sitemap.
    //       const excludePaths = excludedPages.edges.map(({ node }) => node.pagePath)
    //       // Return an array of any static route Gatsby built, except those that
    //       // were excluded.
    //       return allSitePage.edges
    //         .filter(({ node }) => !excludePaths.includes(node.path))
    //         .map(({ node }) => {
    //           return {
    //             changefreq: `daily`,
    //             priority: 0.7,
    //             url: `${site.siteMetadata.siteUrl}${node.path}`
    //           }
    //         })
    //     }
    //   }
    // },
    //  Netlify recommends building files without a hash, this plugin will eliminate the hash from built JavaScript files
    `gatsby-plugin-remove-fingerprints`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["X-Frame-Options: SAMEORIGIN"]
        }
      }
    }
  ],
  siteMetadata: {
    author: `@helloample`,
    description: `The base for a new Ample development project.`,
    siteUrl: `https://www.site-url.com`,
    title: `Ample's Gatsby Starter`
  }
}
