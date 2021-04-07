const isDevelopment = process.env.NODE_ENV === "development"
const path = require("path")

exports.onCreateWebpackConfig = (
  { actions, getConfig, stage, loaders },
  {
    styleLoaderOptions = {
      esModule: true,
      modules: {
        namedExport: true
      }
    },
    cssLoaderOptions = {
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
    postCssPlugins = require("./../../postcss.config"),
    sassOptions = {
      includePaths: [path.join(__dirname, "./../../src/styles")]
    },
    sassLoaderOptions = {
      additionalData: `@use 'global' as *;`,
      sourceMap: isDevelopment
    }
  }
) => {
  const { setWebpackConfig } = actions
  const config = getConfig()
  const isSSR = [`develop-html`, `build-html`].includes(stage)

  const sassLoader = {
    loader: require.resolve(`sass-loader`),
    options: {
      sassOptions,
      ...sassLoaderOptions
    }
  }

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          !isSSR &&
            (isDevelopment
              ? {
                  loader: "style-loader",
                  options: {
                    ...styleLoaderOptions
                  }
                }
              : loaders.miniCssExtract()),
          loaders.css({
            ...cssLoaderOptions,
            modules: false
          }),
          loaders.postcss({ plugins: postCssPlugins })
        ]
  }

  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !isSSR &&
        (isDevelopment
          ? {
              loader: "style-loader",
              options: {
                ...styleLoaderOptions
              }
            }
          : loaders.miniCssExtract({
              modules: {
                namedExport: cssLoaderOptions.modules?.namedExport ?? true
              }
            })),
      loaders.css({
        ...cssLoaderOptions,
        modules: cssLoaderOptions.modules ?? true
      }),
      loaders.postcss({ plugins: postCssPlugins })
    ].filter(Boolean)
  }

  sassRule.use.push(sassLoader)
  sassRuleModules.use.push(sassLoader)

  const configRules = [
    {
      oneOf: [sassRuleModules, sassRule]
    }
  ]

  setWebpackConfig({
    module: {
      rules: configRules
    }
  })

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
