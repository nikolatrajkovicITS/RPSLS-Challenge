module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
