import { describe, it, expect } from 'vitest'
import { createApp, nextTick } from 'vue'
import Counter from '../components/Counter.vue'

describe('Counter', () => {
  it('tıklayınca sayıyı artırır', async () => {
    const el = document.createElement('div')
    createApp(Counter).mount(el)

    const button = el.querySelector('button')
    expect(button.textContent).toBe('Sayaç: 0')

    button.click()
    await nextTick()
    expect(button.textContent).toBe('Sayaç: 1')
  })
})
