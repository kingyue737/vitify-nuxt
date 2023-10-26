export {}

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string
    title?: string
    drawerIndex?: number
  }
}

declare module '#app' {
  interface PageMeta {
    icon?: string
    title?: string
    drawerIndex?: number
  }
}
