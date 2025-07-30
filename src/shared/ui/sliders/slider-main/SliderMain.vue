<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type ISliderMainSlide } from './types'

const props = defineProps<{
  duration: number,
  delay: number,
  slides: ISliderMainSlide[],
}>()

const stateSlider = reactive({
  active: 0,
  count: props.slides.length,
})

const nextSlide = () => {
  stateSlider.active === (stateSlider.count - 1)
    ? stateSlider.active = 0
    : stateSlider.active++
}

watch(
  () => stateSlider.active,
  () => {
    setTimeout(() => {
      nextSlide()
    }, props.slides[stateSlider.active].delay || props.delay)
  }
)

const toggleStateVideo = (video: HTMLVideoElement) => {
  if (!video.play) {
    return
  }

  const isActive = video.classList.contains('is-active')

  if (isActive) {
    video && video.play()
  } else {
    setTimeout(() => {
      video.pause()
      video.currentTime = 0
    }, props.duration)
  }
}

setTimeout(() => {
  nextSlide()
}, props.slides[stateSlider.active].delay || props.delay)
</script>

<template>
  <div class="slider-main" :style="{ '--duration': duration / 1000 + 's' }">
    <video
      v-for="(item, index) in slides"
      :key="index"
      class="slider-main__slide"
      :class="{ 'is-active': (stateSlider.active === index) }"
      :ref="(el) => { toggleStateVideo(el as HTMLVideoElement) }"
      :src="item.src" muted playsinline
    >
    </video>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
