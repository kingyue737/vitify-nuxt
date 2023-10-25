<script setup lang="ts">
import { THEME_KEY } from 'vue-echarts'
import { useTitle } from '@vueuse/core'
const theme = useTheme()
provide(
  THEME_KEY,
  computed(() => (theme.current.value.dark ? 'dark' : undefined)),
)
const route = useRoute()
const title = computed(() => {
  const title = route.meta?.title || route.matched[0].meta?.title || ''
  return title ? `${title} | Vitify Admin` : 'Vitify Admin'
})
useTitle(title)
</script>

<template>
  <v-app>
    <AppDrawer />
    <AppBar />
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style scoped lang="scss">
.v-main {
  padding-top: 0;
  margin-top: var(--v-layout-top);
  padding-bottom: 0;
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
  overflow-y: auto;
  transition-property: padding;
}
</style>
