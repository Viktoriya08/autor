export const GetCursorCustom = (cursorPlace: HTMLElement | null) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const cursorCustom = cursorPlace?.querySelector('[data-cursor]') || null
  const defaultCursor = cursorPlace?.querySelector('[data-cursor-default]') || null

  const observerMoveOnArea = (cursorCustom: Element | null, cursorPlace?: HTMLElement | null) => {

    if (!cursorCustom) {
      return
    }

    $ScrollTrigger.observe({
      target: cursorPlace || window,
      type: 'pointer',
      onMove: (self) => {
        const selfEvent = self.event as PointerEvent
        const targetRect = cursorCustom?.getBoundingClientRect()

        const deltaX = selfEvent.clientX - (targetRect.left + targetRect.width / 2)
        const deltaY = selfEvent.clientY - (targetRect.top + targetRect.height / 2)

        $gsap.to(cursorCustom, {
          duration: 2,
          x: `+=${deltaX}`,
          y: `+=${deltaY}`,
          ease: 'power4.out'
        })
      }
    })
  }

  observerMoveOnArea(cursorCustom, cursorPlace)

  function handleMouseMove(e: Event) {
    const eventMouse = e.target as HTMLElement
    if (eventMouse.closest('svg') || eventMouse == defaultCursor || defaultCursor?.contains(eventMouse)) {
      cursorCustom?.classList.remove('show')
    } else {
      cursorCustom?.classList.add('show')
    }
  }

  cursorPlace?.addEventListener('mousemove', handleMouseMove)

  cursorPlace?.addEventListener('mouseout', () => {
    cursorCustom?.classList.remove('show')
  })
}
