import type { Room, ListRoom } from '../types'

export const useFloorPlan = (rooms: ListRoom, typeViewport: any) => {
  const { $gsap } = useNuxtApp()
  const posTooltip = ref({ x: 0, y: 0 })
  // const activeRoom = ref<string | null>(null)
  const activeRoom = ref<Room | null>(null)
  const isTooltipShow = ref(false)
  const isTooltipOpen = ref(false)

  const updateTooltipPositoin = (room: Element, parent: HTMLElement) => {
    const rectParent = parent.getBoundingClientRect()
    const rect = room.getBoundingClientRect()

    const x = rect.x - rectParent.x + (rect.width / 2)
    const y = rect.y - rectParent.y + (rect.height / 2)

    posTooltip.value.x = x
    posTooltip.value.y = y
  }

  const updatePopoverPosition = (popover: Element) => {
    popover.classList.remove('is-top', 'is-left', 'is-center')

    const rect = popover.getBoundingClientRect()
    const isTop = (window.innerHeight / 2 < (rect.bottom - rect.height / 2))
    // const isTop = rect.top > rect.height
    const isRight = (rect.left + rect.width) < window.innerWidth
    const isLeft = rect.left > rect.width

    if (isTop) popover.classList.add('is-top')

    switch(true) {
      case isRight:
        break

      case isLeft:
        popover.classList.add('is-left')
        break

      case !isLeft && !isRight:
        popover.classList.add('is-center')
        break
    }
  }

  const setRoomListeners = (parent: HTMLElement, tooltip: HTMLElement, popover: Element) => {
    const tlHidePopover = $gsap.timeline({ paused: true })
      .fromTo(popover, { opacity: 1 }, { opacity: 0, duration: 0.15 })

    const tlShowPopover = $gsap.timeline({ paused: true })
      // .call(() => { if (popover) updatePopoverPosition(popover) })
      .fromTo(popover, { opacity: 0 }, { opacity: 1, duration: 0.15 })

    const tlSwitchTooltip = $gsap.timeline({ paused: true })
      .fromTo(popover, { opacity: 1 }, { opacity: 0, duration: 0.1 })
      .fromTo(tooltip, { opacity: 1 }, { opacity: 0, duration: 0.1 }, '<')
      .add('label')
      .fromTo(tooltip, { opacity: 0 }, { opacity: 1, duration: 0.15 })
      .fromTo(popover, { opacity: 0 }, { opacity: 1, duration: 0.15 })

    const tlHover = $gsap.timeline({ paused: true })
      .fromTo(tooltip, { opacity: 0 }, { opacity: 1, duration: 0.15 })

    $gsap.set(popover, { opacity: 0 })
    $gsap.set(tooltip, { opacity: 0 })

    parent.addEventListener('mouseover', (e) => {
      const target = e.target as Element
      const isRoom = target?.hasAttribute('data-name')

      if (isRoom && !isTooltipOpen.value) {
        updateTooltipPositoin(target, parent)
        tlHover.restart()
      }
    })

    parent.addEventListener('mouseout', () => {
      if (!isTooltipOpen.value) {
        $gsap.set(tooltip, { opacity: 0 })
      }
    })

    parent.addEventListener('click', (e) => {
      const target = e.target as Element
      const number = target?.getAttribute('data-name')

      if (!number) return

      switch (true) {
        case (number && !isTooltipOpen.value):
          activeRoom.value = rooms[number]
          isTooltipOpen.value = true
          tlShowPopover.restart()
          break

        case (number && (number === activeRoom?.value?.number)):
          isTooltipOpen.value = false
          tlHidePopover.restart()
          break

        case (number && activeRoom.value && (number !== activeRoom?.value?.number)):
          tlSwitchTooltip.add(() => {
            updateTooltipPositoin(target, parent)
            if (number) activeRoom.value = rooms[number]
            // if (popover) updatePopoverPosition(popover)
          }, 'label')

          tlSwitchTooltip.restart()
          break
      }
    })
  }

  const updateStateRoom = (path: HTMLElement, rooms: ListRoom) => {
    const id = Number(path.getAttribute('data-name'))
    const data = id && rooms[id]

    if (id && data && data.free) {
      path.setAttribute('data-state', data.free)
    }
  }

  const init = (plan: HTMLElement, tooltip: HTMLElement) => {
    const popover = tooltip.querySelector('[data-tooltip="popover"]')

    if (plan && tooltip && popover) {
      const paths = plan.querySelectorAll('path[data-name]')

      setRoomListeners(plan, tooltip, popover)

      paths.forEach((path) => {
        updateStateRoom(path, rooms)
      })
    }

    watch(posTooltip, () => {
      tooltip.setAttribute('style', `left:${posTooltip.value.x}px; top:${posTooltip.value.y}px`)
      if (popover) updatePopoverPosition(popover)
    }, { deep: true })

    watch(() => isTooltipOpen.value, () => {
      popover?.classList.toggle('is-active', isTooltipOpen.value)
    })
  }

  return {
    activeRoom,
    isTooltipShow,
    init,
  }
}
