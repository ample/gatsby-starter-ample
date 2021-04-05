const isDevelopment = process.env.NODE_ENV === "development"
const path = require("path")
const postcssConfig = require("./postcss.config")

exports.onCreateWebpackConfig = ({ actions, getConfig, loaders }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter((rule) => String(rule.test) !== String(/\.module\.css$/)),

    {
      test: /\.scss$/,
      use: [
        isDevelopment
          ? {
              loader: "style-loader",
              options: {
                esModule: true,
                modules: {
                  namedExport: true
                }
              }
            }
          : loaders.miniCssExtract({
              esModule: true,
              modules: {
                namedExport: true
              }
            }),
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            esModule: true,
            modules: {
              localIdentName: "[local]-[hash:base64:3]",
              auto: true,
              namedExport: true,
              exportLocalsConvention: "dashesOnly"
            },
            sourceMap: isDevelopment
          }
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: postcssConfig
            }
          }
        },
        {
          loader: "sass-loader",
          options: {
            additionalData: `@use 'global' as *;`,
            sassOptions: {
              includePaths: [path.join(__dirname, "src/styles")]
            },
            sourceMap: isDevelopment
          }
        }
      ]
    }
  ]

  actions.replaceWebpackConfig(config)

  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify")
      }
    }
  })

  const miniCssExtractPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
  )
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true
  }
}
