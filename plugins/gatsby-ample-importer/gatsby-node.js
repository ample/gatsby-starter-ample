const { importData } = require("./utils/importer")

exports.onPreInit = () => importData()
