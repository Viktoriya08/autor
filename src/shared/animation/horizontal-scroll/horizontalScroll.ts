const setAnimation = (parent: HTMLElement, target: HTMLElement, length: number) => {
  const { $gsap } = useNuxtApp()

  $gsap.set(parent, { height: `${length}px` })
  $gsap.set(target, { position: `sticky`, top: '0' })

  $gsap.to(target, {
    x: `-${length}px`,
    ease: 'none',
    scrollTrigger: {
      trigger: parent,
      // pin: true,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      // pinSpacing: false,
    }
  })
}

export const animateHorizontalScroll = (parent: HTMLElement) => {
  const target = parent?.firstElementChild as HTMLElement
  const wTarget = target?.offsetWidth

  const items = Array.from(target?.children || []) as HTMLElement[]
  const wItems = items.reduce((width, item) => {
    return width + item.offsetWidth
  }, 0)

  if (!parent || !target || !items.length) {
    return
  }

  const animationLength = wItems - wTarget

  setAnimation(parent, target, animationLength)
}

export const animateHorizontalScrollAll = () => {
  const  targets: NodeListOf<HTMLElement> = document.querySelectorAll('[data-animation="scroll-x"]')

  targets.forEach((target) => {
    animateHorizontalScroll(target)
  })
}
