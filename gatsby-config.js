const postcssConfig = require("./postcss.config")
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Ample's Gatsby Starter`,
    description: `The base for a new Ample development project.`,
    author: `@helloample`,
    siteUrl: `https://www.site-url.com`
  },
  mapping: {
    "Page.sections.components.form": "Form.filePath"
  },
  plugins: [
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
      resolve: `gatsby-remark-ample`,
      // Commented lines are the plugin's default options. Read more here:
      // https://github.com/ample/gatsby-remark-ample
      options: {
        // contentSrc: "src/content/",
        // imageExtensions: [".jpg", ".jpeg", ".png"],
        imageSrc: path.join(__dirname, "static"),
        // imageSuffix: "_src",
        // markdownSuffix: "_md",
        // modelField: "model",
        models: ["AdminReferences", "AdminSeo", "Form", "Page", "Redirect"],
        projectRoot: path.join(__dirname)
        // seoField: "seo"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        // TODO: update project fonts here as well as in .storybook/preview-head.html
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
        icon: `src/images/ample-icon.png`
      }
    },
    `gatsby-ample-linters`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: "[local]-[hash:base64:3]",
          sourceMap: true
        },
        implementation: require("sass"),
        postCssPlugins: postcssConfig,
        sourceMap: true
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
