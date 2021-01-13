const fs = require("fs")
const path = require("path")

const { importData } = require("./utils/importer")

const defaultConfigFile = path.join(__dirname, "../../importer.config.js")

exports.onPreInit = (_, { config: configFile = defaultConfigFile }) => {
  if (!fs.existsSync(configFile)) {
    console.error("[gatsby-ample-importer] ERROR: Could not find configuration file.")
    process.exit(1)
  }

  const config = require(configFile)
  importData(config)
}
