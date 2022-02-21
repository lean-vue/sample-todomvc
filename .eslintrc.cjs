module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
  overrides: [
    {
      files: [
        'cypress/integration/**.spec.{js,ts,jsx,tsx}',
        'cypress/support/**.{js,ts}',
      ],
      extends: ['plugin:cypress/recommended'],
    },
  ],
};
