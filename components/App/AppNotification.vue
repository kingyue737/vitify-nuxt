<script setup lang="ts">
const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)
const notificationsShown = computed(() =>
  notifications.value.filter((notification) => notification.show).reverse(),
)
const showAll = ref(false)
const timeout = computed(() => (showAll.value ? -1 : 5000))
function deleteNotification(id: number) {
  notificationStore.delNotification(id)
}
function emptyNotifications() {
  notificationStore.$reset()
}
function toggleAll() {
  showAll.value = !showAll.value
  notifications.value.forEach((m) => {
    m.show = showAll.value
  })
}
</script>

<template>
  <v-btn
    v-tooltip="{ text: 'Notification' }"
    :icon="notifications.length ? 'mdi-bell-badge-outline' : 'mdi-bell-outline'"
    :rounded="0"
    @click="toggleAll"
  />
  <teleport to="body">
    <v-card
      elevation="6"
      width="400"
      class="d-flex flex-column notification-card"
      :class="{ 'notification-card--open': showAll }"
    >
      <v-toolbar flat density="compact">
        <v-toolbar-title
          class="font-weight-light text-body-1"
          :text="notifications.length ? 'Notification' : 'No New Notifications'"
        />
        <v-btn
          v-tooltip="{ text: 'Clear All Notifications' }"
          size="small"
          icon="mdi-bell-remove"
          @click="emptyNotifications"
        />
        <v-btn
          v-tooltip="{ text: 'Hide Notifications' }"
          class="mr-0"
          size="small"
          icon="$expand"
          @click="toggleAll"
        />
      </v-toolbar>
      <v-slide-y-reverse-transition
        tag="div"
        class="d-flex flex-column notification-box"
        group
        hide-on-leave
      >
        <div
          v-for="notification in notificationsShown"
          :key="notification.id"
          class="notification-item-wrapper"
        >
          <AppNotificationItem
            v-model="notification.show"
            :notification="notification"
            :timeout="timeout"
            class="notification-item"
            @close="deleteNotification(notification.id)"
          />
        </div>
      </v-slide-y-reverse-transition>
    </v-card>
  </teleport>
</template>

<style scoped>
.notification-item {
  width: 100%;
  border: 0;
}
.notification-card {
  z-index: 1;
  position: fixed;
  right: 15px;
  bottom: 48px;
  max-height: 100vh;
  overflow: visible;
  visibility: hidden;
  &.notification-card--open {
    visibility: visible;
    overflow: hidden;
    max-height: calc(100vh - 200px);
    .notification-box {
      overflow-y: overlay;
      pointer-events: auto;
      .notification-item-wrapper {
        transition: none !important;
        .notification-item {
          margin-bottom: 0;
          border-radius: 0;
          border-top: 1px solid #5656563d !important;
        }
      }
    }
  }
}
.notification-box {
  overflow-y: visible;
  visibility: visible;
  pointer-events: none;
  .notification-item {
    pointer-events: initial;
    user-select: initial;
    margin-bottom: 10px;
  }
}
</style>
