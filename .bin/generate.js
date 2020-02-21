#!/usr/bin/env node

const fs = require("fs-extra")
const pluralize = require("pluralize")

let validCommand = false
let compType = null

const argv = require("yargs")
  .command(["component <name>", "c"], "Generate a new component", () => {
    compType = "component"
    validCommand = true
  })
  .command(["section <name>", "s"], "Generate a new section", () => {
    compType = "section"
    validCommand = true
  })
  .command(["template <name>", "t"], "Generate a new template", () => {
    compType = "template"
    validCommand = true
  })
  .demandCommand(2, "You must specify type and name").argv

if (!validCommand) {
  console.log("Command not valid")
  process.exit(1)
}

const srcDir = `./.bin/templates/${compType}`
const destDir = `./src/${pluralize(compType)}/${argv.name}`

fs.copySync(srcDir, destDir, { recursive: true })

console.log("Done.")
