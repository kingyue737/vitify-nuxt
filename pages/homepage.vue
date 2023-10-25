<script setup lang="ts">
const name = ref('')
function sayHi() {
  Notify.success(`Hi, ${name.value}!`)
}
function warning() {
  Notify.warning(`How dare you refuse me, ${name.value}.`)
}
definePageMeta({
  meta: {
    icon: 'mdi-home',
    title: 'Homepage',
    drawerIndex: 0,
  },
})
</script>

<template>
  <div class="wrapper">
    <v-icon icon="custom:vitify" size="3.5em" color="primary" class="mb-4" />
    <p>Opinionated Starter Template</p>
    <v-responsive max-width="300" class="mx-auto">
      <v-text-field
        v-model="name"
        color="primary"
        placeholder="Hello World"
        label="What's your name?"
        class="mx-auto mt-8"
      />
    </v-responsive>
    <v-btn :disabled="!name" class="mr-2" color="primary" @click="sayHi">
      Confirm
    </v-btn>
    <v-btn :disabled="!name" @click="warning">Cancel</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: calc(50vh - 330px);
  text-align: center;
}
</style>
