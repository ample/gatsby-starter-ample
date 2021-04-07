module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
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
  parser: "babel-eslint",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["prettier", "jest", "jsx-a11y", "react"],
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
