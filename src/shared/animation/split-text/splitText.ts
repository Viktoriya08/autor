import SplitType from 'split-type'
import type { TypesList } from 'split-type'

export const splitText = () => {
  const targets: NodeListOf<HTMLElement> = document.querySelectorAll('[data-split-text]')

  targets.forEach((el) => {
    const type = el.getAttribute('data-split-text') as TypesList

    type && new SplitType(el, { types: type })
  })
}
