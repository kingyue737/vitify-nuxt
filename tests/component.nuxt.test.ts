import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DialogConfirm from '~/components/DialogConfirm.vue'
import { VCard } from 'vuetify/components'

vi.stubGlobal('visualViewport', new EventTarget())

describe('component DialogConfirm.vue', () => {
  it('should not open', async () => {
    const wrapper = await mountSuspended(DialogConfirm)
    expect(wrapper.html()).toMatchInlineSnapshot(`""`)
  })

  it('should open and close', async () => {
    const wrapper = await mountSuspended(DialogConfirm)
    wrapper.vm.open('message')
    await nextTick()
    const cardWrapper = wrapper.getComponent(VCard)
    expect(cardWrapper.text()).toContain('message')
    expect(cardWrapper.html()).toMatchSnapshot()
    expect(cardWrapper.find('button').exists()).toBe(true)

    await cardWrapper.find('button').trigger('click')
    expect(cardWrapper.isVisible()).toBe(false)
  })
})
