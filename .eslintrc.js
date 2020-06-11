module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
  },
  rules: {
    'react/no-unescaped-entities': 0,
    'import/no-extraneous-dependencies': 0,
    'no-template-curly-in-string': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'comma-dangle': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
  }
}
