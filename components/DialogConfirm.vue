<script setup lang="ts">
const dialog = ref(false)
const confirmed = ref(false)
let resolve: (value: boolean) => void
const message = ref('')
watch(dialog, (v) => {
  if (!v) {
    resolve(confirmed.value)
  }
})
function open(text: string) {
  confirmed.value = false
  dialog.value = true
  message.value = text
  return new Promise<boolean>((resolveFn) => {
    resolve = resolveFn
  })
}
function confirm() {
  confirmed.value = true
  dialog.value = false
}
function cancel() {
  confirmed.value = false
  dialog.value = false
}
defineExpose({ open })
</script>

<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-text class="font-weight-bold d-flex">
        <v-icon class="mr-2" color="warning" icon="$warning" />
        <span>{{ message }}</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="cancel"> Cancel </v-btn>
        <v-btn color="primary" @click="confirm"> Confirm </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
