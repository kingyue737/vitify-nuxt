<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { mergeProps } from 'vue'

const theme = useTheme()
const color = computed({
  get() {
    return theme.themes.value.light.colors.primary
  },
  set(val: string) {
    localStorage.setItem('theme-primary', val)
    theme.themes.value.light.colors.primary = val
    theme.themes.value.dark.colors.primary = val
  },
})
const colors = [
  ['#1697f6', '#ff9800'],
  ['#4CAF50', '#FF5252'],
  ['#9C27b0', '#E91E63'],
  ['#304156', '#3f51b5'],
  ['#002FA7', '#492d22'],
]
const menuShow = ref(false)
const isDark = useDark({
  onChanged(dark: boolean) {
    theme.global.name.value = dark ? 'dark' : 'light'
  },
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <v-menu
    v-model="menuShow"
    :close-on-content-click="false"
    location="top right"
    offset="15"
  >
    <template #activator="{ props: menu }">
      <v-tooltip location="top">
        <template #activator="{ props: tooltip }">
          <v-btn
            icon="mdi-palette-outline"
            v-bind="mergeProps(menu, tooltip)"
            :rounded="0"
          >
          </v-btn>
        </template>
        <span>界面设置</span>
      </v-tooltip>
    </template>
    <v-card width="320">
      <v-card-text class="text-center">
        <v-label class="mb-3">主题色</v-label>
        <v-color-picker
          v-model="color"
          show-swatches
          elevation="0"
          width="288"
          mode="rgb"
          :modes="['rgb', 'hex', 'hsl']"
          :swatches="colors"
        ></v-color-picker>
        <v-divider class="my-3" />
        <v-switch
          :model-value="isDark"
          label="黑暗模式"
          hide-details
          :append-icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @update:model-value="toggleDark"
        />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
.bg-sheet {
  cursor: pointer;
  overflow: hidden;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  &:hover {
    border-color: rgb(var(--v-theme-primary), 0.6);
  }
  &--active {
    border-color: rgb(var(--v-theme-primary));
  }
}
</style>
