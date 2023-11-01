<p align="center">
  <img alt="Vitify - Opinionated Vuetify Admin Starter Template" src="https://github.com/kingyue737/vitify-admin/raw/main/public/favicon.svg" width=200px/>
</p>
<h1 align="center">Vitify Nuxt</h1>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/nuxt-3-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-3-blue.svg" alt="vuetify">
  </a>
  <a href="https://github.com/kingyue737/vitify-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

<p align='center'>
<b>Vuetify 3</b> + <b>Nuxt 3</b>, Opinionated Admin Starter Template<br><br>
</p>

<p align='center'>
<a href="https://vitify-nuxt.netlify.app/">Live Demo<br><br></a>
</p>

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - SPA, ESR, File-based routing, components auto importing, modules, etc

- 💥 SSR out of box - powered by [Vuetify Nuxt module](https://github.com/userquin/vuetify-nuxt-module)

- ⚡️ [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables

- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config

- 🦾 TypeScript 100%

<br>

### Admin Starter Template

- 🪟 Default layout with drawer, header and footer

- 🧭 Auto generated navigation drawer and breadcrumbs based on routes

- 🔔 Notification store

- 📉 Data visualization with [vue-echarts](https://github.com/ecomfe/vue-echarts)

- 🎨 Theme color customization and dark mode

- 📱 Responsive layout

## Variants

- [vitify-next](https://github.com/kingyue737/vitify-next) - Lightweight Vue 3 version without Nuxt

- [vitify-electron](https://github.com/kingyue737/vitify-electron) - Vuetify 3 + Vite + Electron starter
- [vitify-admin](https://github.com/kingyue737/vitify-admin) - Vue 2.7 with i18n, browser compatibility and mock server

## Pre-packed

### Nuxt Modules

- [Vuetify Nuxt Module](https://github.com/userquin/vuetify-nuxt-module) - Zero-config Nuxt Module for Vuetify
- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue
- [DevTools](https://github.com/nuxt/devtools) - unleash Nuxt Developer Experience

### Plugins

- [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader) - SVG files are loaded as Vue components, optimised via [SVGO](https://github.com/svg/svgo) and auto registered as Vuetify `v-icon`s
- [`rollup-plugin-modify`](https://github.com/kingyue737/rollup-plugin-modify) - auto replace [`@mdi/font`](https://github.com/Templarian/MaterialDesign-Webfont) with [`@mdi/js`](https://github.com/Templarian/MaterialDesign-JS) in `<VIcon>`, signicantly reduce bundle size

### Coding Style

- [Prettier](https://prettier.io/), single quotes, no semi
- [ESLint](https://eslint.org/) with adapted [@nuxt/eslint-config](https://github.com/nuxt/eslint-config)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - TypeScript support inside Vue SFCs
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your code
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Material Design Icons Intellisense](https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kingyue737/vitify-nuxt/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kingyue737/vitify-nuxt my-vitify-app
cd my-vitify-app
pnpm i
```
