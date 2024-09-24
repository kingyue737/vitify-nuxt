import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { md3 } from 'vuetify/blueprints'

export default defineVuetifyConfiguration({
  blueprint: md3,
  // prevent Vuetify Module from fetching unused `materialdesignicon.css` from cdn
  icons: false,
  // locale: {
  //   locale: 'zhHans',
  //   fallback: 'en',
  // },
  // localeMessages: ['zhHans', 'en'],
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
    VMenu: {
      VList: {
        border: true,
      },
    },
    // https://github.com/vuetifyjs/vuetify/issues/19637
    VTimePicker: {
      ampmInTitle: true,
    },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: {} },
      dark: { colors: {} },
    },
  },
})
