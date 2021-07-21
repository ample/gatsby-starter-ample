exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify")
      }
    }
  })

  //  Netlify recommends building files without a hash.
  if (stage === "build-javascript") {
    const newWebpackConfig = {
      ...getConfig(),
      output: {
        chunkFilename: `[name].js`,
        filename: `[name].js`,
        path: getConfig().output.path,
        publicPath: getConfig().output.publicPath
      }
    }

    actions.replaceWebpackConfig(newWebpackConfig)
  }
}
