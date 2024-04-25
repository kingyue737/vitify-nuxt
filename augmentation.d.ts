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
  }
}

export {}
