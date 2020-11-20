module.exports = plugins => {
  let pluginAPIs = { initNode: [] }

  plugins.map(plugin => {
    try {
      const entryFilePath = `${plugin.resolve}/remark-plugin.js`
      const funcs = require(entryFilePath)
      Object.entries(funcs).map(([name, func]) => {
        if (!pluginAPIs[name]) return
        pluginAPIs[name].push(func)
      })
    } catch (err) {
      if (process.env.NODE_ENV !== "test") {
        console.error(
          "Could not load gatsby-remark-ample plugin: ",
          plugin.resolve,
          "\n",
          "The plugin must contain a valid remark-plugin.js file in its root."
        )
      }
    }
  })

  return pluginAPIs
}
