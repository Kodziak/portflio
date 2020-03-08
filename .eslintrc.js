module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:vue-scoped-css/recommended',
    'eslint:recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'indent': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'import/no-unresolved': [
      2,
      { caseSensitive: false },
    ],
    'max-len': ['error', {
      code: 150,
    }],
  },
  parser: 'vue-eslint-parser',
  parserOptions:
  {
	  extends: "standard",
	  parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
