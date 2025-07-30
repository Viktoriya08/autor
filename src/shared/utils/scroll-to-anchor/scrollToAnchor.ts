import { isTrustedEvent } from '@/app/providers/utils'

export const scrollToAnchor = (el: HTMLElement, offset?: number) => {
  const { $gsap } = useNuxtApp()
  const targetSelector = el.getAttribute('href')

  if (targetSelector) {
    isTrustedEvent.value = false

    $gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `${targetSelector}`,
        offsetY: offset || 0,
      },
      onComplete: () => {
        isTrustedEvent.value = true
      },
    })
  }
}
