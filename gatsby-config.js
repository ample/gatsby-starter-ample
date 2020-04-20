module.exports = {
  siteMetadata: {
    title: `Ample's Gatsby Starter`,
    description: `The base for a new Ample development project.`,
    author: `@helloample`,
    siteUrl: `https://www.site-url.com`
  },
  plugins: [
    `gatsby-theme-ample-components`,
    // Looks in src/content and passes every page (except index.md) to
    // src/templates/page/adapter.js. (See plugins/gatsby-ample-pages.)
    `gatsby-ample-pages`,
    // Creates Gatsby and Netlify redirects for records in
    // src/content/redirects. (See plugins/gatsby-ample-redirects.)
    `gatsby-ample-redirects`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/uploads`,
        name: "uploads"
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
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1440
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-ample-markdown`,
      options: {
        // Every key in markdown files that end with this suffix will be
        // processed as markdown and converted to HTML.
        suffix: "_md"
      }
    },
    {
      resolve: `gatsby-ample-images`,
      options: {
        // Every key in markdown files that ends with this will be processed as
        // an image ...
        suffix: "_src",
        // If the value ends with one of these extensions. We avoid .svg files
        // because they can't be processed and create issues with GraphQL
        // queries.
        extensions: [".jpg", ".png"]
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
        icon: `src/images/ample-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "@danbruegge/gatsby-plugin-stylelint",
      options: {
        files: "**/*.scss",
        stages: ["develop"],
        options: {
          emitError: true,
          emitWarning: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        sourceMap: true,
        cssLoaderOptions: {
          localIdentName: "[local]-[hash:base64:3]",
          sourceMap: true
        },
        postCssPlugins: [
          require("postcss-normalize"),
          require("postcss-responsive-type"),
          require("postcss-pxtorem")({
            mediaQuery: true,
            propWhiteList: [],
            replace: true,
            rootValue: 16
          }),
          require("postcss-preset-env")({
            features: {
              "custom-properties": {
                preserve: true,
                warnings: true
              }
            },
            stage: 2
          }),
          require("autoprefixer")({
            grid: "autoplace"
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ""
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
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
