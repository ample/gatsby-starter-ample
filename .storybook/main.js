const isDevelopment = process.env.NODE_ENV === "development"
const path = require("path")
const postcssConfig = require("../postcss.config")

module.exports = {
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        styleLoaderOptions: {
          esModule: true,
          modules: {
            namedExport: true
          }
        },
        cssLoaderOptions: {
          importLoaders: 2,
          esModule: true,
          modules: {
            localIdentName: "[local]-[hash:base64:3]",
            auto: true,
            namedExport: true,
            exportLocalsConvention: "dashesOnly"
          },
          sourceMap: isDevelopment
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            plugins: postcssConfig
          }
        },
        sassLoaderOptions: {
          additionalData: `@use 'global' as *;`,
          sassOptions: {
            includePaths: [path.join(__dirname, "../src/styles")]
          }
        }
      }
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: {
          options: {
            configureJSX: true
          }
        }
      }
    },
    "@storybook/addon-jest",
    "@storybook/addon-a11y",
    "storybook-dark-mode"
  ],
  core: {
    builder: "webpack5"
  },
  stories: ["../src/storybook/*stories.mdx", "../src/**/stories.js"],

  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    config.resolve = {
      fallback: {
        assert: false,
        crypto: false
      },
      alias: {
        path: require.resolve("path-browserify"),
        "@components": path.resolve(__dirname, "../src/components"),
        "@content": path.resolve(__dirname, "../src/content"),
        "@layout": path.resolve(__dirname, "../src/layout"),
        "@plugins": path.resolve(__dirname, "../plugins"),
        "@root": path.resolve(__dirname, "../"),
        "@snippets": path.resolve(__dirname, "../src/snippets"),
        "@src": path.resolve(__dirname, "../src"),
        "@templates": path.resolve(__dirname, "../src/templates")
      }
    }

    return config
  }
}
