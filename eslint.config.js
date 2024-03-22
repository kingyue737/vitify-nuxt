import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/valid-v-slot': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
