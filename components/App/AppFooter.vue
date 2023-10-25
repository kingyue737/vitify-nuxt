<template>
  <v-footer app border>
    <v-spacer />
    <v-defaults-provider
      :defaults="{ VBtn: { variant: 'text', size: 'x-small' } }"
    >
      <AppNotification />
      <AppSettings />
    </v-defaults-provider>
  </v-footer>
</template>
<style scoped lang="scss">
.v-footer {
  border-width: 1px 0 0 0;
  padding: 0px 10px;
  :deep(> .v-btn--icon) {
    .v-icon {
      height: 1.25em;
      width: 1.25em;
    }
  }
}
</style>
