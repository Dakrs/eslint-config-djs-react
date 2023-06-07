/**
 * Module exports.
 */

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint-config-djs',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      project: ['./tsconfig.json'],
      sourceType: 'module'
    },
    plugins: [
      'react',
      'react-hooks'
    ],
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/display-name': 'error',
      'react/function-component-definition': ['error', { 'namedComponents': 'arrow-function' }],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-indent': ['error', 2, { 'checkAttributes': true, 'indentLogicalExpressions': true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always', 'closingSlash': 'never' }],
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': ['error', { 'component': true, "html": true }]
    }
};
  