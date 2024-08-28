// See https://github.com/nuxt/nuxt/releases/tag/v3.13.0
import type {
  ComponentCustomOptions as _ComponentCustomOptions,
  ComponentCustomProperties as _ComponentCustomProperties,
} from 'vue'

declare module '@vue/runtime-core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ComponentCustomProperties extends _ComponentCustomProperties {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ComponentCustomOptions extends _ComponentCustomOptions {}
}

declare module '#app' {
  interface PageMeta {
    icon?: string
    title?: string
    drawerIndex?: number
    /** If disable or hide breadcrumb. Default is enabled */
    breadcrumb?: 'hidden' | 'disabled'
  }
}

declare module '#auth-utils' {
  interface User {
    login: string
    avatar_url: string
  }
}

export {}
