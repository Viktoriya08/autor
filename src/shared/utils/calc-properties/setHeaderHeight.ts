const calcHeight = (block: HTMLElement) => {
  document.documentElement.style.setProperty('--header-height', `${block.offsetHeight}px`)
}

const setHeaderHeight = () => {
  const header = document.getElementById('header') as HTMLElement

  if (!header) {
    return
  }

  calcHeight(header)

  window.addEventListener('resize', () => calcHeight(header))
}

export default setHeaderHeight
