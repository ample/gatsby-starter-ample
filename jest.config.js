module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "\\~components\\/(.*)$": `<rootDir>/src/components/$1`,
    "\\~layout(.*)$": `<rootDir>/src/layout$1`,
    "\\~root\\/(.*)$": `<rootDir>/$1`,
    "\\~templates\\/(.*)$": `<rootDir>/src/templates/$1`,
    "^gatsby-ample-debuggers(.*)$": `<rootDir>/plugins/gatsby-ample-debuggers$1`,
    "^gatsby-ample-seo(.*)$": `<rootDir>/plugins/gatsby-ample-seo$1`
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/.bin`,
    `<rootDir>/lib`,
    `<rootDir>/plugins/gatsby-ample-generator/lib`
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-plugin-mdx)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`]
}
