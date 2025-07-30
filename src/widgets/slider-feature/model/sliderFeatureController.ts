type SliderFeatureController = {
  enableSliderFeature: () => void
  disableSliderFeature: () => void
}

let sliderFeatureController: SliderFeatureController = {
  enableSliderFeature: () => {
    console.log('SliderFeatureScrollObserver not initialized')
  },
  disableSliderFeature: () => {
    console.log('SliderFeatureScrollObserver not initialized')
  },
}

export const setSliderFeatureController = (controller: SliderFeatureController) => {
  sliderFeatureController = controller
}

export const getSliderFeatureController = () => {
  return sliderFeatureController
}
