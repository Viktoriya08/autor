export const useSwitchTheme = (el: HTMLElement, updateTheme, resetTheme) => {
  const target = ref()
  let y = window.scrollY

  if (el) {
    const targets = document.querySelectorAll('[data-switch-theme]')
    const rect = el.getBoundingClientRect()

    const options = {
      rootMargin: `-${rect.top}px 0px -${window.innerHeight - rect.bottom}px 0px`,
      threshold: 0.01,
    }

    const callback = function(entries) {
      entries.forEach(async(entry) => {
        const theme = entry.target.getAttribute('data-switch-theme')

        if (!theme) return

        const direction = y < window.scrollY
          ? 1
          : -1

        y = window.scrollY

        if (entry.isIntersecting) {
          updateTheme(theme, direction, entry.target)
          target.value = entry.target
        } else {
          if (target.value !== entry.target) return
          resetTheme(direction, entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    targets.forEach((target) => {
      observer.observe(target)
    })

    return observer
  }
}
