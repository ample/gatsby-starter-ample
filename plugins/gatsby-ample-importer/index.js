#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const { importData } = require("./utils/importer")

var argv = require("yargs/yargs")(process.argv.slice(2)).option("c", {
  alias: "config",
  demandOption: false,
  default: path.join(__dirname, "../../importer.config.js"),
  describe: "Path to the configuration file.",
  type: "string"
}).argv

if (!fs.existsSync(argv.config)) {
  console.error("ERROR: Could not find configuration file.")
  process.exit(1)
}

const config = require(argv.config)
importData(config)
