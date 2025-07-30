// import type { SwiperContainer } from 'swiper/element'
import { disableSwiperOverflow } from '@/shared/utils/swiper/disableSwiperOverflow'

export const useGalleryMain = (containerRef) => {
  const isFullscreen = ref(false)
  const currentSlideIndex = ref(0)

  const closeFullscreen = () => {
    isFullscreen.value = false
  }

  const slideNext = () => {
    containerRef.value.swiper.slideNext()
  }

  const slidePrev = () => {
    containerRef.value.swiper.slidePrev()
  }

  useSwiper(containerRef, {
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 16,
      },
    },
  })

  onMounted(() => {
    disableSwiperOverflow(containerRef.value)

    if (containerRef.value) {
      containerRef.value?.addEventListener('swiperclick', (e) => {
        currentSlideIndex.value = e.detail[0].clickedIndex
        isFullscreen.value = true
      })
    }
  })

  // const getParamImage = (size: string) => {
  //   return paramImage[size]
  // }

  return {
    isFullscreen,
    currentSlideIndex,
    closeFullscreen,
    slideNext,
    slidePrev,
    // getParamImage,
  }
}
