import SplitType from 'split-type'
import type { TypesList } from 'split-type'
// const nuxtApp = useNuxtApp()
// const SplitType = nuxtApp.$SplitType

export const splitType = (el: HTMLElement, type: TypesList) => {
  const split = new SplitType(el, {
    types: type,
  })

  if (type === 'lines' && split.lines) {
    split.lines.forEach((item: HTMLElement) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('line-wrapper')

      item.parentNode?.insertBefore(wrapper, item)
      wrapper.appendChild(item)
    })
  }

  return split
}

