import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const setAnimation = (target: HTMLElement) => {
  const tlShowCurve = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'top 50%',
      scrub: 1,
      onEnter: () => {
        console.log('tlShowCurve onEnter')
      },
    }
  })

  const tlHideCurve = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: 'bottom 20%',
      end: 'bottom top',
      scrub: 1,
      // markers: true,
      onLeave: () => {
        console.log('tlHideCurve onLeave')
      }
    }
  })

  tlShowCurve.fromTo(target, { '--size-mask': 50 + '%' }, { '--size-mask': 100 + '%', ease: 'linear' })
  tlHideCurve.fromTo(target, { '--size-mask': 100 + '%' }, { '--size-mask': 50 + '%', ease: 'linear' })
}

export const animateCurve = () => {
  const targets: NodeListOf<HTMLElement> = document.querySelectorAll('[data-animation="curve"]')

  targets.forEach((target) => {
    setAnimation(target)
  })
}
