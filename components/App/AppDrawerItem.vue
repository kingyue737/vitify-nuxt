<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto'

const { level = 0, item } = defineProps<{
  level?: number
  item: RouteRecordRaw
}>()
const visibleChildren = computed(() =>
  item.children
    ?.filter((child) => child.meta?.icon)
    .sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)),
)
const visibleChildrenNum = computed(() => visibleChildren.value?.length || 0)
const isItem = computed(() => !item.children || visibleChildrenNum.value <= 1)
const title = toRef(() => item.meta?.title)
const icon = toRef(() => item.meta?.icon)
</script>

<template>
  <v-list-item
    v-if="isItem && icon"
    :to="{ name: item.name || visibleChildren?.[0].name }"
    :prepend-icon="icon"
    active-class="text-primary"
    :title="title"
  />
  <v-list-group v-else-if="icon" :prepend-icon="icon" color="primary">
    <template #activator="{ props: vProps }">
      <v-list-item :title="title" v-bind="vProps" />
    </template>
    <AppDrawerItem
      v-for="child in visibleChildren"
      :key="child.name"
      :item="child"
      :level="level + 1"
    />
  </v-list-group>
</template>
