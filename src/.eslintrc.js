module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: '../tsconfig.json',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
    }],
    '@typescript-eslint/no-empty-interface': [
      'error', {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn', {
        ignoreRestArgs: true,
      }
    ],
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'semi': 'off',
    '@typescript-eslint/semi': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'ignoreRestSiblings': true,
    }]
  },
  overrides: [
    {
      'files': ['*.ts'],
      'rules': {
        'no-undef': 'off',
      },
    },
    {
      'files': ['*.vue'],
      'rules': {
        'no-undef': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
      },
    },
  ],
};
