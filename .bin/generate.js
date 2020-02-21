#!/usr/bin/env node

const fs = require("fs-extra")
const pluralize = require("pluralize")

const copyDir = (type, name) => {
  const srcDir = `./.bin/templates/${type}`
  const destDir = `./src/${pluralize(type)}/${name}`
  fs.copySync(srcDir, destDir, { recursive: true })
}

const copyFile = (tmpl, dest) => fs.copySync(`./.bin/templates/${tmpl}`, dest)

const argv = require("yargs")
  .command(["component <name>", "c"], "Generate a new component", {}, argv =>
    copyDir("component", argv.name)
  )
  .command(["section <name>", "s"], "Generate a new section", {}, argv =>
    copyDir("section", argv.name)
  )
  .command(["template <name>", "t"], "Generate a new template", {}, argv =>
    copyDir("template", argv.name)
  )
  .command(["fragment <name>", "f"], "Generate a new fragment", {}, argv =>
    copyFile("fragment.js", `./src/fragments/${argv.name}-attributes.js`)
  )
  .demandCommand(2, "You must specify type and name").argv

const validCommands = ["c", "component", "s", "section", "t", "template", "f", "fragment"]
if (!validCommands.includes(argv._[0])) console.error("Command not valid")

console.log("Done.")
