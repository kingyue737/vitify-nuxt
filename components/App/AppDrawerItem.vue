<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto'
defineOptions({ name: 'AppDrawerItem' })
const props = withDefaults(
  defineProps<{ level?: number; item: RouteRecordRaw }>(),
  { level: 0 },
)
const visibleChildren = computed(
  () =>
    props.item.children
      ?.filter((child) => child.meta?.icon)
      .sort(
        (a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98),
      ),
)
const visibleChildrenNum = computed(() => visibleChildren.value?.length || 0)
const isItem = computed(
  () => !props.item.children || visibleChildrenNum.value <= 1,
)
const title = computed(() => props.item.meta?.title)
const icon = computed(() => props.item.meta?.icon)
</script>

<template>
  <v-list-item
    v-if="isItem && icon"
    :to="{ name: item.name || visibleChildren?.[0].name }"
    :prepend-icon="icon"
    active-class="text-primary"
    :title="title"
  >
  </v-list-item>
  <v-list-group v-else-if="icon" :prepend-icon="icon" color="primary">
    <template #activator="{ props: vProps }">
      <v-list-item :title="title" v-bind="vProps"></v-list-item>
    </template>
    <AppDrawerItem
      v-for="child in visibleChildren"
      :key="child.name"
      :item="child"
      :level="level + 1"
    />
  </v-list-group>
</template>
