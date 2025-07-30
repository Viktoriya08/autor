const floor = ref({
  index: 0,
  isActive: false
})

export const updateFloorInfo = (index: number) => {
  floor.value.index = index - 2
}

export const toggleVisibilityFloorInfo = (state: boolean) => {
  floor.value.isActive = state
}

export const useFloorInfo = () => {
  const floorInfo = ref()

  return {
    floor,
    floorInfo,
  }
}
