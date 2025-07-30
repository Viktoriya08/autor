export const disableSwiperOverflow = (swiper: HTMLElement) => {
  if (swiper) {
    const root = swiper.shadowRoot
    const style = document.createElement('style')

    style.textContent = `.swiper {overflow: visible !important}`
    root?.appendChild(style)
  }
}
