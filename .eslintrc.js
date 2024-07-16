module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js', 'webpack'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'arrow-parens': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']]
      }
    ],
    'no-console': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  env: {
    browser: true,
    es2020: true
  },
  globals: {
    window: true
  }
}
