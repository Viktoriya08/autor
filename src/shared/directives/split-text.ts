import type { Directive } from 'vue'
import { splitType } from '../lib/split-type'
import type { TypesList } from 'split-type'

export const vSplitText: Directive = {
  mounted(el, binding) {
    if (typeof window === 'undefined') return


    // const nuxtApp = useNuxtApp()
    // const SplitType = nuxtApp.$SplitType
    // if (!SplitType) {
    //   console.error('SplitType plugin is not available.')
    //   return
    // }
    const type = (binding.arg || 'chars') as TypesList
    splitType(el, type)
  },
}
