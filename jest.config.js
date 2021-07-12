module.exports = {
  globals: {
    __PATH_PREFIX__: ``
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/.jest/__mocks__/file-mock.js`,
    "\\@components\\/(.*)$": `<rootDir>/src/components/$1`,
    "\\@plugins\\/(.*)$": `<rootDir>/plugins/$1`,
    "\\@root\\/(.*)$": `<rootDir>/$1`,
    "\\@snippets\\/(.*)$": `<rootDir>/src/snippets/$1`,
    "\\@src\\/(.*)$": `<rootDir>/src/$1`
  },
  setupFiles: [`<rootDir>/.jest/loadershim.js`, `<rootDir>/.jest/setup.js`],
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/.bin`,
    `<rootDir>/lib`,
    `<rootDir>/plugins/gatsby-ample-generator/lib`,
    `<rootDir>/plugins/gatsby-ample-importer`
  ],
  testURL: `http://localhost`,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/.jest/preprocess.js`
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`]
}
