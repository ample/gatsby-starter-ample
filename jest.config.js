module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/.jest/preprocess.js`
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/.jest/__mocks__/file-mock.js`,
    "\\@plugins\\/(.*)$": `<rootDir>/plugins/$1`,
    "\\@root\\/(.*)$": `<rootDir>/$1`,
    "\\@src\\/(.*)$": `<rootDir>/src/$1`
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/.bin`,
    `<rootDir>/lib`,
    `<rootDir>/plugins/gatsby-ample-generator/lib`
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/.jest/loadershim.js`]
}
