import type { FunctionalComponent } from 'vue'
import { type IconSet, type IconProps } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { type VDataTable } from 'vuetify/labs/VDataTable'

function filename(path: string) {
  return path
    .split(/(\\|\/)/g)
    .pop()!
    .replace(/\.[^/.]+$/, '')
}

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob<FunctionalComponent>('~/assets/icons/*.svg', {
      eager: true,
      import: 'default',
      as: 'component',
    }),
  ).map(([k, v]) => [filename(k), v]),
)
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [h(svgIcons[props.icon as string])]),
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    const theme = {
      primary: useLocalStorage('theme-primary', '#1697f6').value,
      secondary: '#03A9F4',
      accent: '#9C27b0',
      info: '#00CAE3',
    }
    vuetifyOptions.icons = {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi, custom },
    }
    vuetifyOptions.theme = {
      themes: {
        light: {
          colors: theme,
        },
        dark: {
          colors: theme,
        },
      },
    }
  })
  // nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
  //   vuetifyOptions.theme = {
  //     // defaultTheme: useDark().value ? 'dark' : 'light',
  //   }
  // })
  nuxtApp.hook(
    'vuetify:ssr-client-hints',
    ({ vuetifyOptions, ssrClientHints }) => {
      // https://github.com/userquin/vuetify-nuxt-module/issues/130
      const hints: typeof ssrClientHints = (ssrClientHints as any)
        .ssrClientHints
      // if (vuetifyOptions.theme)
      //   vuetifyOptions.theme.defaultTheme = hints.prefersColorScheme
    },
  )
})

type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A
type DT = InstanceType<typeof VDataTable>
export type DataTableHeader = UnwrapReadonlyArrayType<DT['headers']>
