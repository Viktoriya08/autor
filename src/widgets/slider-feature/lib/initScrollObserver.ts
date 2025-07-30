import type { StateSlider } from '../model/types'
import type Lenis from 'lenis'

export const initScrollObserver = (
  target: HTMLElement,
  stateSlider: StateSlider,
  nextSlide: () => void,
  prevSlide: () => void,
  scroll: Lenis | undefined
) => {
  const nuxtApp = useNuxtApp()
  const gsap = nuxtApp.$gsap
  const ScrollTrigger = nuxtApp.$ScrollTrigger

  const observer = ScrollTrigger.observe({
    target: target,
    type: 'wheel',
    onDown: () => {
      console.log('down')
      if (stateSlider.activeSlide === (stateSlider.count - 1)) {
        observer.disable()
        scroll?.start()
        return
      }

      if (stateSlider.activeSlide < (stateSlider.count - 1)) {
        nextSlide()

        scroll?.stop()
        observer.disable()

        setTimeout(() => {
          observer.enable()
        }, 1500)
      }
    },
    onUp: () => {
      if (stateSlider.activeSlide === 0) {
        observer.disable()
        scroll?.start()
        return
      }

      if (stateSlider.activeSlide > 0) {
        prevSlide()

        scroll?.stop()
        observer.disable()

        setTimeout(() => {
          observer.enable()
        }, 1500)

        if (stateSlider.activeSlide === 0) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: window.scrollY - window.innerHeight,
            onComplete: () => {},
          })
        }

      } else {
        console.log('no slides')
      }
    },
    tolerance: 1,
    preventDefault: true,
  })

  return observer
}
