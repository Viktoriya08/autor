import { vSplitText } from '@/shared/directives/split-text'
import { vAnimateText } from '@/shared/directives/animate-text'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('split-text', vSplitText)
  nuxtApp.vueApp.directive('animate-text', vAnimateText)
})
