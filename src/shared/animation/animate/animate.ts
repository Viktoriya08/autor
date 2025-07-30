// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const setAnimateZoom = (el: HTMLElement) => {
  const { $gsap } = useNuxtApp()
  const param = el.getAttribute('data-param') || 1

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: `top bottom`,
      end: `bottom top`,
      scrub: true,
    },
  })

  tl.fromTo(el, { scale: param }, { scale: 1, ease: 'power2.inOut' })
}

const setAnimateTranslateY = (el: HTMLElement) => {
  const { $gsap } = useNuxtApp()
  const start = el.getAttribute('data-from') || 0
  const end = el.getAttribute('data-to') || 0

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: `top bottom`,
      end: `bottom top`,
      scrub: true,
    },
  })

  tl.fromTo(el, { y: start }, { y: end, ease: 'power2.inOut' })
}

export const setAnimate = () => {
  // gsap.registerPlugin(ScrollTrigger)
  const targets: NodeListOf<HTMLElement> = document.querySelectorAll('[data-animate]')

  targets.forEach((el) => {
    const type = el.getAttribute('data-animate')

    switch (type) {
      case 'zoom-out':
        setAnimateZoom(el)
        break

      case 'translate-y':
        setAnimateTranslateY(el)
        break
    }
  })
}
