<script setup lang="ts">
const theme = useTheme()
provide(
  THEME_KEY,
  computed(() => (theme.current.value.dark ? 'dark' : undefined)),
)
const route = useRoute()
const title = computed(() => {
  return route.meta?.title || route.matched[0]?.meta?.title || ''
})
useHead({
  title,
  titleTemplate: (t) => (t ? `${t} | Vitify Admin` : 'Vitify Admin'),
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  description: 'Vuetify 3 + Nuxt 3, Opinionated Admin Starter Template',
  ogImage: '/social-image.png',
  twitterImage: '/social-image.png',
  twitterCard: 'summary_large_image',
})
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

<style scoped>
/* replace padding with margin to limit scrollbar in v-main */
.v-main {
  padding-top: 0;
  padding-bottom: 0;
  /* https://github.com/vuetifyjs/vuetify/issues/15202 */
  margin-top: 64px;
  margin-bottom: 32px;
  height: calc(100vh - 64px - 32px);
  /* margin-top: var(--v-layout-top);
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom)); */
  overflow-y: auto;
  transition-property: padding;
}
</style>
