export const useSwitchFloor =  (store) => {
  const changeFloor = (floor: number) => {
    store.current = floor
  }

  const nextFloor = () => {
    if ((store.current + 1) > store.count) {
      return
    }

    store.current += 1
  }

  const prevFloor = () => {
    if ((store.current - 1) < 2) {
      return
    }

    store.current -= 1
  }

  return {
    changeFloor,
    nextFloor,
    prevFloor,
  }
}
