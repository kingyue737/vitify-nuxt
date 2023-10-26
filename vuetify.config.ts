import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { en, zhHans } from 'vuetify/locale'
import { md3 } from 'vuetify/blueprints'

export default defineVuetifyConfiguration({
  blueprint: md3,
  labComponents: ['VDataTable'],
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, en },
  },
  defaults: {
    VSwitch: {
      color: 'primary',
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
    },
    VCard: {
      flat: true,
      border: true,
    },
    VBtn: { color: '' },
    VNavigationDrawer: {
      VList: {
        nav: true,
        VListItem: {
          rounded: 'xl',
        },
      },
    },
    VChip: { rounded: 'lg' },
    VSelect: {
      color: 'primary',
    },
    VTextarea: {
      color: 'primary',
    },
    VTextField: {
      color: 'primary',
    },
    VCheckbox: {
      color: 'primary',
    },
    VCheckboxBtn: {
      color: 'primary',
    },
    VProgressLinear: {
      color: 'primary',
    },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})
