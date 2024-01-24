<script lang="ts">
export default defineComponent({
  data: () => ({
    dialog: false,
    confirmed: false,
    resolve: (confirmed: boolean) => {
      confirmed
    },
    reject: (val: unknown) => {
      val
    },
    message: '',
  }),
  watch: {
    dialog(value) {
      if (value === false) {
        this.resolve(this.confirmed)
      }
    },
  },
  methods: {
    open(message: string) {
      this.confirmed = false
      this.dialog = true
      this.message = message
      return new Promise<boolean>((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    confirm() {
      this.confirmed = true
      this.dialog = false
    },
    cancel() {
      this.confirmed = false
      this.dialog = false
    },
  },
})
</script>

<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card style="z-index: -1">
      <!-- <v-card-title class="font-weight-bold d-flex justify-center pt-5">
      </v-card-title> -->
      <v-card-text class="font-weight-bold d-flex">
        <v-icon class="mr-2" color="warning">$warning</v-icon>
        <span>{{ message }}</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" @click="cancel">Cancel</v-btn>
        <v-btn color="primary darken-1" @click="confirm">Confirm</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
