<p align="center">
  <img alt="Vitify - Opinionated Vuetify Admin Starter Template" src="public/vitify-nuxt.svg" width=100px/>
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
<b>Vuetify</b> + <b>Nuxt</b>, Opinionated Admin Starter Template<br><br>
</p>

<p align='center'>
<a href="https://vitify-nuxt.netlify.app/">Live Demo<br><br></a>
</p>

## Features

- 💚 [Nuxt](https://nuxt.com/) - SPA, ESR, File-based routing, components auto importing, modules, etc

- 💥 SSR out of the box - powered by [Vuetify Nuxt module](https://github.com/vuetifyjs/nuxt-module)

- ⚡️ [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables

- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config

- 🦾 TypeScript 100%

- 🧪 Unit, Component and E2E Testing with [@nuxt/test-utils](https://github.com/nuxt/test-utils)

<br>

### Admin Starter Template

- 🪟 Default layout with drawer, header and footer

- 🧭 Auto-generated navigation drawer and breadcrumbs based on routes

- 🔔 Notification store

- 📉 Data visualization with [nuxt-echarts](https://github.com/kingyue737/nuxt-echarts)

- 🎨 Theme color customization and dark mode

- 📱 Responsive layout

- 🛡️ Authentication backed-in using [nuxt-auth-utils](https://github.com/Atinux/nuxt-auth-utils)

## Variants

- [vitify-next](https://github.com/kingyue737/vitify-next) - Lightweight Vue 3 version without Nuxt

- [vitify-electron](https://github.com/kingyue737/vitify-electron) - Vuetify + Nuxt + Electron starter
- [vitify-admin](https://github.com/kingyue737/vitify-admin) - Vue 2.7 with i18n, browser compatibility and mock server

## Pre-packed

### Nuxt Modules

- [Vuetify Nuxt Module](https://github.com/vuetifyjs/nuxt-module) - Zero-config Nuxt Module for Vuetify
- [VueUse](https://github.com/vueuse/vueuse) - Collection of useful composition APIs
- [Pinia](https://github.com/vuejs/pinia) - Intuitive, type-safe, light and flexible Store for Vue
- [Nuxt Icon](https://github.com/nuxt/icon) - Icon module for Nuxt with 200,000+ ready to use icons from Iconify
- [Nuxt ECharts](https://github.com/kingyue737/nuxt-echarts) - Nuxt module for Apache ECharts™
- [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils) - Minimalist Authentication module for Nuxt

### Coding Style

- [Prettier](https://prettier.io/), single quotes, no semi
- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) with adapted [@nuxt/eslint](https://github.com/nuxt/eslint), future-proof

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - TypeScript support inside Vue SFCs
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your code
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

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

### Authentication Setup

> You can switch to any [OAuth Providers](https://github.com/Atinux/nuxt-auth-utils#supported-oauth-providers) supported by [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils) or write your own.

Create a [GitHub OAuth Application](https://github.com/settings/applications/new) with:

- Homepage url: `http://localhost:3000`
- Callback url: `http://localhost:3000/api/auth/github`

Add the variables in the `.env` file:

```bash
NUXT_OAUTH_GITHUB_CLIENT_ID="my-github-oauth-app-id"
NUXT_OAUTH_GITHUB_CLIENT_SECRET="my-github-oauth-app-secret"
```

To create sealed sessions, you also need to add `NUXT_SESSION_SECRET` in the `.env` with at least 32 characters:

```bash
NUXT_SESSION_SECRET=your-super-long-secret-for-session-encryption
```

Nuxt Auth Utils generates one for you when running Nuxt in development the first time if no `NUXT_SESSION_PASSWORD` is set.

### Development

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## License

[MIT License](./LICENSE)
