<script setup lang="ts">
const { drawer } = storeToRefs(useAppStore())
const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .slice(1)
    .filter(
      (item) =>
        item.meta && item.meta.title && !(item.meta?.breadcrumb === 'hidden'),
    )
    .map((r) => ({
      title: r.meta.title!,
      disabled:
        r.meta?.breadcrumb === 'disabled' || r.path === route.path || false,
      to: r.path,
    }))
})
</script>

<template>
  <v-app-bar flat border style="border-width: 0 0 1px 0">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-breadcrumbs :items="breadcrumbs"> </v-breadcrumbs>
    <v-spacer />
    <div id="app-bar"></div>
    <v-btn
      icon="mdi-github"
      href="https://github.com/kingyue737/vitify-next"
      target="_blank"
    />
  </v-app-bar>
</template>

<style scoped>
:deep(.v-breadcrumbs-divider) {
  opacity: 0.5;
}
</style>
