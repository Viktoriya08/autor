import SplitType from 'split-type'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('SplitType', SplitType)
})
