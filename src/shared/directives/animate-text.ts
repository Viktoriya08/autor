import type { Directive } from 'vue'

const getAnimationParam = (el: HTMLElement, type: string) => {
  switch(type) {
    case 'char':
      return {
        start: { opacity: 0, y: '-100%' },
        end: {
          opacity: 1, y: 0, stagger: { each: 0.02, ease: 'power1.in' },
          onComplete: () => {
            el.classList.add('is-complete')
          }
        }
      }

    case 'word':
    case 'line':
    default:
      return {
        // start: { opacity: 0, y: '5px' },
        start: { opacity: 0, y: '100%' },
        end: { opacity: 1, y: 0, stagger: { each: 0.2, ease: 'power1.in' } }
      }
  }
}

export const vAnimateText: Directive = {
  mounted(el, binding) {
    if (!el) return

    const { $gsap } = useNuxtApp()
    const type = binding.arg || 'line'
    const targets = el.querySelectorAll(`.${type}`)
    const animationParam = getAnimationParam(el, type)

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: el,
        pin: false,
        start: 'top center',
        scrub: false,
        once: true
      }
    })

    tl.fromTo(targets, animationParam.start, animationParam.end)
  }
}
