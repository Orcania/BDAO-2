module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next/babel',
    'next/core-web-vitals',
    'standard',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // plugins: [
  //   'react'
  // ],
  rules: {
  }
}
