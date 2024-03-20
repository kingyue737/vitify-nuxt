<script setup lang="ts">
import { mergeProps } from 'vue'

const theme = useTheme()
const { store } = useColorMode()
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
          />
        </template>
        <span>Theme Palette</span>
      </v-tooltip>
    </template>
    <v-card width="320">
      <v-card-text class="text-center">
        <v-label class="mb-3"> Theme Palette </v-label>
        <v-color-picker
          v-model="color"
          show-swatches
          elevation="0"
          width="288"
          mode="rgb"
          :modes="['rgb', 'hex', 'hsl']"
          :swatches="colors"
        />
        <v-btn-toggle v-model="store" mandatory class="mt-2" rounded="lg">
          <v-btn prepend-icon="mdi-white-balance-sunny" value="light">
            Light
          </v-btn>
          <v-btn prepend-icon="mdi-weather-night" value="dark"> Dark </v-btn>
          <v-btn prepend-icon="mdi-laptop" value="auto"> System </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
