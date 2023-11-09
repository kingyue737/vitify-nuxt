import { defineNuxtModule, addComponent } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    addComponent({ name: 'VChart', filePath: 'vue-echarts' })
  },
})
