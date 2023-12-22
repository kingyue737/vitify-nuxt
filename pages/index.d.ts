declare module '#app' {
  interface PageMeta {
    icon?: string
    title?: string
    drawerIndex?: number
    /** If disable or hide breadcrumb. Default is enabled */
    breadcrumb?: 'hidden' | 'disabled'
  }
}

export {}
