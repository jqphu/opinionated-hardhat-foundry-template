const packageJson = require('./package.json')
const devDependencies = Object.keys(packageJson.devDependencies || {})

module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  settings: {
    node: {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"]
    }
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json'
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    '@typescript-eslint/no-floating-promises': ['error'],
    "node/no-unpublished-import": [
      "error",
      { "allowModules": devDependencies }
    ]
  },
};
