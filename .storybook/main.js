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
  stories: ["../src/**/story.mdx", "../src/**/story.js"],

  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env")
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries")
    ]
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    config.resolve = {
      alias: {
        path: require.resolve("path-browserify"),
        "@plugins": path.resolve(__dirname, "../plugins"),
        "@root": path.resolve(__dirname, "../"),
        "@src": path.resolve(__dirname, "../src")
      },

      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify")
      }
    }

    return config
  }
}
