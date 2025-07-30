import type Lenis from 'lenis'
import { initScrollObserver } from '../lib/initScrollObserver'
import { setSliderFeatureController } from './sliderFeatureController'
import { createSlideAnimation } from '../lib/createSlideAnimation'

const slideTimelines = new Map<number, gsap.core.Timeline>()

export const useSliderFeature = (count: number) => {
  const stateSlider = reactive({
    active: false,
    activeSlide: 0,
    count: count,
  })

  const nextSlide = () => {
    if (stateSlider.activeSlide < (stateSlider.count - 1)) {
      stateSlider.activeSlide++
      slideTimelines.get(stateSlider.activeSlide)?.restart()
    }
  }

  const prevSlide = () => {
    if (stateSlider.activeSlide > 0) {
      stateSlider.activeSlide--
      slideTimelines.get(stateSlider.activeSlide)?.restart()
    }
  }

  const activateSlide = (index: number) => {
    if ((index >= 0) && (index <= stateSlider.count)) {
      stateSlider.activeSlide = index
      slideTimelines.get(index)?.restart()
    }
  }

  const initObserver = (slider: HTMLElement, scroll: Lenis) => {
    const scrollObserver = initScrollObserver(slider, stateSlider, nextSlide, prevSlide, scroll)

    const enableSliderFeature = () => {
      scrollObserver.enable()
      scroll.stop()
    }

    const disableSliderFeature = () => {
      scrollObserver.disable()
    }

    setSliderFeatureController({
      enableSliderFeature,
      disableSliderFeature
    })

    onUnmounted(() => {
      console.log('slider onunmound')
      scrollObserver.kill()
    })
  }

  const setSlideAnimation = (slides: HTMLElement[]) => {
    slides.forEach((slide: HTMLElement, index: number) => {
      const tl = createSlideAnimation(slide)

      slideTimelines.set(index, tl)
    })
  }

  return {
    stateSlider,
    prevSlide,
    nextSlide,
    activateSlide,
    initObserver,
    setSlideAnimation,
  }
}
