module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    jsx: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  globals: {
    __PATH_PREFIX__: true
  },
  overrides: [
    {
      files: ["./src/pages/**/*.js", "./src/templates/**/*.js"],
      rules: {
        "react/prop-types": 0
      }
    }
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false
  },
  plugins: ["prettier", "jsx-a11y", "jest"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": [2, { ignore: ["className"] }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
