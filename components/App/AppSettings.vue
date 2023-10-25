<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useDark, useToggle } from '@vueuse/core'
import { mergeProps } from 'vue'
import drawer1 from '@/assets/images/drawer1.jpg'
import drawer2 from '@/assets/images/drawer2.jpg'
import drawer3 from '@/assets/images/drawer3.jpg'

const appStore = useAppStore()
const { drawerImage, drawerImageShow } = storeToRefs(appStore)
if (drawerImage.value) {
  drawerImage.value = drawer1
}
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
const images = [drawer1, drawer2, drawer3]
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
        <v-divider class="my-3" />
        <v-switch
          v-model="drawerImageShow"
          label="侧边栏背景"
          hide-details
          append-icon="$menu"
        />
        <v-card :disabled="!drawerImageShow" flat>
          <v-item-group
            v-model="drawerImage"
            class="d-flex justify-space-between mb-3"
            selected-class="bg-sheet--active"
            mandatory
          >
            <v-item v-for="img in images" :key="img" :value="img">
              <template #default="{ selectedClass, toggle }">
                <v-sheet
                  rounded="lg"
                  :class="[selectedClass, 'bg-sheet']"
                  @click="toggle!"
                >
                  <v-img
                    :src="img"
                    cover
                    height="100"
                    width="60"
                    @click="toggle"
                  />
                </v-sheet>
              </template>
            </v-item>
          </v-item-group>
        </v-card>
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
