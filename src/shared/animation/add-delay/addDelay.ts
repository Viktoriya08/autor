export const addDelay = () => {
  const lists: NodeListOf<HTMLElement> = document.querySelectorAll('[data-animation="list"]')

  // gsap.registerPlugin(ScrollTrigger)

  lists.forEach((list) => {
    const items = Array.from(list.children)
    const step: number = list.dataset.animationList || 0.05

    const options = {
      threshold: 0.5,
    }

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          list.classList.add('is-animation-start')
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    items.forEach((item, index) => {
      const dur = (index * step).toFixed(1)
      item.setAttribute('style', `animation-delay: ${dur}s;`)
    })

    observer.observe(list)
  })
}
