module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "gatsby-standard",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended"
  ],
  globals: {
    __PATH_PREFIX__: true
  },
  overrides: [
    {
      files: ["./src/pages/**/*.js", "./src/templates/**/*.js"],
      rules: {
        "react/prop-types": 0
      }
    },
    {
      files: ["./gatsby-config.js"],
      rules: {
        "sort-keys-fix/sort-keys-fix": 0
      }
    }
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
    ecmaVersion: "11",
    requireConfigFile: false
  },
  plugins: ["jest", "jsx-a11y", "react", "sort-keys-fix"],
  rules: {
    camelcase: 0,
    "import/no-unresolved": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": [2, { ignore: ["className"] }],
    "react/react-in-jsx-scope": 0,
    "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 3, natural: true }],
    "sort-keys-fix/sort-keys-fix": 1
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
