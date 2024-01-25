import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    alias: { 'vue-echarts': 'vue-echarts/dist/index.esm.min.js' },
  },
})
