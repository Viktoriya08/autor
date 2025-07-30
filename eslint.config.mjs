import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 1,
      'no-unused-vars': 'warn',
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      'space-before-function-paren': ['error', 'never'],
      'semi': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      // 'no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowTernary: true,
        allowShortCircuit: true,
      }],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      // 'vue/no-v-html': false
    }
  }
)
