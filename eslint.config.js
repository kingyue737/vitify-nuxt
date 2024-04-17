import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/valid-v-slot': ['error', { allowModifiers: true }], // allow vuetify slot modifier
    'vue/html-self-closing': ['error', { html: { void: 'any' } }], // not conflict with prettier
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
