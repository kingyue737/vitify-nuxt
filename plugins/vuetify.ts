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
    vuetifyOptions.icons = {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi, custom },
    }
  })
  const theme = {
    primary: useLocalStorage('theme-primary', '#1697f6').value,
    secondary: '#03A9F4',
    accent: '#9C27b0',
    info: '#00CAE3',
  }
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    vuetifyOptions.theme = {
      defaultTheme: useDark().value ? 'dark' : 'light',
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
})

type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A
type DT = InstanceType<typeof VDataTable>
export type DataTableHeader = UnwrapReadonlyArrayType<DT['headers']>
