import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    autoRaf: true,
  })

  nuxtApp.provide('lenis', lenis)
})
