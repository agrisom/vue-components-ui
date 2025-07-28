import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser }, rules: {
    'brace-style': 'off',
    'require-atomic-updates': 'off',
    '@/brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    '@/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'keyword-spacing': 'off',
    '@/keyword-spacing': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'quotes': 'off',
    '@/quotes': ['error', 'single'],
    'semi': 'off',
    '@/semi': 'error',
    'space-before-function-paren': 'off',
    '@/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-infix-ops': 'off',
    '@/space-infix-ops': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
  }},
  tseslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } }, rules: {
    'no-undef': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': ['error', 2, { 'alignAttributesVertically': false }],
    'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'below'}],
    'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 }}],
    'vue/html-closing-bracket-newline': [ 'error' ],
  } },
  { ignores: ['dist', 'src/**/*.js', 'node_modules', 'vite.config.ts', 'public/static'] },
]);