module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "always",
      "exports": "always",
      "functions": "never"
  }]
  },
};
