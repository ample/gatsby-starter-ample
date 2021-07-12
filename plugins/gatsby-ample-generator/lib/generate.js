#!/usr/bin/env node

const fs = require("fs-extra")
const path = require("path")
const pluralize = require("pluralize")

const copyDir = (type, name) => {
  const srcDir = path.join(__dirname, `templates/${type}`)
  const destDir = path.join(__dirname, `../../../src/${pluralize(type)}/${name}`)
  fs.copySync(srcDir, destDir, { recursive: true })
}

const copyFile = (template, dest) =>
  fs.copySync(path.join(__dirname, `templates/${template}`), dest)

const argv = require("yargs")
  .command(["component <name>", "c"], "Generate a new component", {}, (argv) =>
    copyDir("component", argv.name)
  )
  .command(["template <name>", "t"], "Generate a new template", {}, (argv) =>
    copyDir("template", argv.name)
  )
  .command(["fragment <name>", "f"], "Generate a new fragment", {}, (argv) =>
    copyFile("fragment.js", `./src/fragments/${argv.name}-attributes.js`)
  )
  .demandCommand(2, "You must specify type and name").argv

const validCommands = ["c", "component", "t", "template", "f", "fragment"]
if (!validCommands.includes(argv._[0])) console.error("Command not valid")

console.log("Done.")
