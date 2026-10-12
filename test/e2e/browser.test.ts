import { fileURLToPath } from 'node:url'
import { createPage, fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

await setup({
  rootDir: fileURLToPath(new URL('../../', import.meta.url)),
  browser: true,
  env: { NUXT_SESSION_PASSWORD: 'test-only-session-password-32-chars' },
})
describe('page /homepage', () => {
  it('should render', async () => {
    // Report SSR failures before waiting for browser hydration.
    expect((await fetch('/')).status).toBe(200)
    const page = await createPage('/')
    await page.getByText('Opinionated Starter Template').isVisible()
    await page.close()
  }, 20000)

  it('should show notification', async () => {
    const page = await createPage('/')
    await page.getByLabel("What's your name?").fill('kingyue')
    await page.getByRole('button', { name: 'Confirm', exact: true }).click()
    const locator = page.getByText('Hi, kingyue!')
    await locator.isVisible()
    await locator.isHidden({ timeout: 6000 })
    await page.close()
  })
})

describe('page /table', () => {
  it('should render', async () => {
    const page = await createPage('/table')
    await page.getByText('Dessert').isVisible()
    await page.close()
  })

  it('should remove a row', async () => {
    const page = await createPage('/table')
    const row = page.getByRole('row', { name: 'Yogurt' })
    await row.getByRole('button').click()
    const dialog = page.getByRole('dialog')
    await dialog.getByRole('button', { name: 'Confirm' }).click()
    await row.isHidden()
    await page.close()
  })
})
