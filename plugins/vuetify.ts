import type { IconProps } from 'vuetify'
import { Icon } from '#components'
import type { VDataTable } from 'vuetify/components'
import { useStorage } from '@vueuse/core'
import { aliases } from 'vuetify/iconsets/mdi'

export type DataTableHeaders = VDataTable['$props']['headers']

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: 'nuxtIcon',
      sets: {
        nuxtIcon: {
          component: ({ icon, tag, ...rest }: IconProps) =>
            h(tag, rest, [h(Icon, { name: aliases[icon as string] ?? icon })]),
        },
      },
      aliases,
    }
    const primary = useStorage('theme-primary', '#1697f6').value
    vuetifyOptions.theme = {
      themes: {
        light: { colors: { primary } },
        dark: { colors: { primary } },
      },
    }
  })
})
