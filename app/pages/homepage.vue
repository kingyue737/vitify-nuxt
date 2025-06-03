<script setup lang="ts">
const name = ref('')
function sayHi() {
  Notify.success(`Hi, ${name.value}!`)
}
function warning() {
  Notify.warning(`How dare you refuse me, ${name.value}.`)
}
definePageMeta({
  icon: 'mdi-home',
  title: 'Homepage',
  drawerIndex: 0,
})
</script>

<template>
  <v-container
    fluid
    class="d-flex align-items-center justify-center fill-height"
  >
    <div class="text-center">
      <v-icon
        icon="custom:vitify-nuxt"
        size="3em"
        color="primary"
        class="mb-4"
      />
      <p>Opinionated Starter Template</p>
      <v-text-field
        v-model="name"
        max-width="300"
        placeholder="Hello World"
        label="What's your name?"
        class="mt-8"
      />
      <v-btn :disabled="!name" class="mr-2" color="primary" @click="sayHi">
        Confirm
      </v-btn>
      <v-btn :disabled="!name" @click="warning"> Cancel </v-btn>
    </div>
  </v-container>
</template>
