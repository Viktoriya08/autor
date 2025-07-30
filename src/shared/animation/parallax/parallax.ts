import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const setParallaxDefault = (el: HTMLElement, parent: HTMLElement, param: string) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: `top bottom`,
      end: `bottom bottom`,
      endTrigger: parent,
      scrub: true,
    },
  })

  tl.fromTo(el, { y: `0vh` }, { y: `${param}vh` })
}

const setParallaxType_1 = (el: HTMLElement, parent: HTMLElement, param: string) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: `top bottom`,
      end: `bottom top`,
      scrub: true,
    },
  })

  gsap.set(el, { scale: `${1 + Math.abs(Number(param) * 2 / 100)}` })
  tl.fromTo(el, { y: `${param}%` }, { y: `${Number(param) * -1}%` })
}

export const setParallax = () => {
  gsap.registerPlugin(ScrollTrigger)

  const targets: NodeListOf<HTMLElement> = document.querySelectorAll('[data-parallax]')

  targets.forEach((target) => {
    const param = target.getAttribute('data-param')
    const parent = target.closest('[data-parallax="parent"]') as HTMLElement
    const type = target.getAttribute('data-parallax')

    switch (type) {
      case 'type-1':
        parent && param && setParallaxType_1(target, parent, param)
        break;

      default:
        parent && param && setParallaxDefault(target, parent, param)
    }
  })
}
