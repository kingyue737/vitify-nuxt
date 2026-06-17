export interface Notification {
  show: boolean
  type: 'info' | 'error' | 'success' | 'warning'
  text: string
  time: Date
  id: number
}

export const useNotificationStore = defineStore('notification', {
  state: () => {
    const notifications: Notification[] = []
    return {
      notifications,
      notificationCount: 0,
    }
  },
  actions: {
    addNotification(text: string, type: Notification['type'] = 'info') {
      this.notifications.push({
        id: this.notificationCount++,
        text,
        type,
        time: new Date(),
        show: true,
      })
    },
    delNotification(id: number) {
      const index = this.notifications.findIndex((m) => m.id === id)
      if (index !== -1) {
        this.notifications.splice(index, 1)
      }
    },
  },
})

export const Notify = {
  info: (text: string) => useNotificationStore().addNotification(text, 'info'),
  success: (text: string) =>
    useNotificationStore().addNotification(text, 'success'),
  warning: (text: string) =>
    useNotificationStore().addNotification(text, 'warning'),
  error: (val: unknown) => {
    const text =
      typeof val === 'string'
        ? val
        : val instanceof Error
          ? val.message
          : JSON.stringify(val)
    useNotificationStore().addNotification(text, 'error')
  },
}
