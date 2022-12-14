module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
