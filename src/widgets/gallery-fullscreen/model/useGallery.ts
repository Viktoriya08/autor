export const useGallery = (containerRef) => {

  const slideTo = (index: number, duration: number) => {
    containerRef.value.swiper.slideTo(index, duration)
  }

  return {
    slideTo
  }
}
