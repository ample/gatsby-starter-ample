module.exports = {
  siteMetadata: {
    title: `Ample's Gatsby Starter`,
    description: `The base for a new Ample development project.`,
    author: `@helloample`,
    siteUrl: `https://www.site-url.com`
  },
  plugins: [
    `gatsby-theme-ample-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
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
    `gatsby-plugin-netlify`
  ]
}
