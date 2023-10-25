<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { Notification } from '@/stores/notification'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    timeout: number
    notification: Notification
    variant: boolean
  }>(),
  { modelValue: false, timeout: 5000 },
)
const emit = defineEmits(['update:modelValue', 'close'])
const isActive = useVModel(props, 'modelValue', emit)
const timeout = toRef(props, 'timeout')
let activeTimeout: number
const startTimeout = () => {
  clearTimeout(activeTimeout)

  if (!isActive.value || timeout.value === -1) {
    return
  }

  activeTimeout = setTimeout(() => {
    isActive.value = false
  }, timeout.value)
}
watch([isActive, timeout], startTimeout)
if (isActive.value) {
  startTimeout()
}
</script>

<template>
  <v-alert
    :border="variant ? 'start' : false"
    :variant="variant ? 'outlined' : undefined"
    :density="variant ? 'compact' : undefined"
    :elevation="variant ? 0 : 3"
    :type="notification.type"
    :text="notification.text"
    :title="notification.time.toLocaleString()"
  >
    <template #close>
      <v-btn icon="$close" @click="$emit('close')" />
    </template>
  </v-alert>
</template>

<style scoped>
:deep(.v-alert-title) {
  line-height: 1.25rem;
  font-size: 14px;
  font-weight: 300;
}
</style>
