import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environmentOptions: { nuxt: { dotenv: { fileName: '.env' } } },
    onConsoleLog(log) {
      if (log.includes('Generated an empty chunk')) return false
      if (log.includes('<Suspense> is an experimental feature')) return false
    },
  },
})
