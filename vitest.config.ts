import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    alias: { 'vue-echarts': 'vue-echarts/dist/index.esm.min.js' },
    environmentOptions: { nuxt: { dotenv: { fileName: '.env' } } },
    onConsoleLog(log) {
      if (log.includes('Generated an empty chunk')) return false
      if (log.includes('<Suspense> is an experimental feature')) return false
    },
  },
})
