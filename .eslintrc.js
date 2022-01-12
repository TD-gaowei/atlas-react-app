module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb', 'eslint:recommended'],
  plugins: ['react', 'simple-import-sort', 'jest'],
  rules: {
    // base rules
    'no-console': 2,
    'no-shadow': 0,
    'arrow-parens': 0,
    'operator-linebreak': 0,
    'global-require': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'no-void': 0,

    // react
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,

    // import
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@cobalt|@cobalt-marketplace)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
