import type { ObjectPreview } from '../model/types'
import { dataPreview, visibilityPreview } from '../store'

export const updateDataPreview = (data: ObjectPreview) => {
  dataPreview.value = data
}

export const toggleVisibilityPreview = (state: boolean) => {
  visibilityPreview.value = state
}
