const path = require("path")

module.exports = ({ config }) => {
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
    require.resolve("babel-plugin-remove-graphql-queries"),

    // use babel-plugin-react-docgen to add props from components when rendering in storybook
    require.resolve("babel-plugin-react-docgen")
  ]

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]

  // Support sass files with PostCSS plugins
  config.module.rules.push({
    test: /\.scss$/,
    // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
    loaders: [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[local]_[hash:base64:3]"
          },
          sourceMap: true
        }
      },
      {
        loader: require.resolve("sass-loader"),
        options: {
          sassOptions: {
            implementation: require.resolve("sass")
          },
          sourceMap: true
        }
      }
    ]
  })

  return config
}
