import nuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...nuxt,
  // @nuxt/eslint may disable all stylistic rules by default in the future
  // https://github.com/nuxt/eslint/issues/342#issuecomment-2009005053
  // remove eslint-config-prettier at that time
  eslintConfigPrettier,
  {
    rules: {
      'vue/valid-v-slot': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
