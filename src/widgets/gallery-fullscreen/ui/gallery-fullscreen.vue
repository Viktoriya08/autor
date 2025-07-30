<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  import { useGallery } from '../model/useGallery'

  const props = defineProps<{
    slides: any
    currentSlideIndex: number
  }>()

  defineEmits(['close'])

  const containerRef = ref(null)
  const { slideTo } = useGallery(containerRef)

  onMounted(() => {
    slideTo(props.currentSlideIndex, 0)
  })
</script>

<template>
  <div class="gallery-fullscreen">
    <div
      class="gallery-fullscreen__overlay"
      @click="$emit('close')"
    />

    <div class="gallery-fullscreen__slider">
      <swiper-container
        ref="containerRef"
        :space-between="'8px'">

        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          :style="'width: auto'">

          <div class="gallery-fullscreen__slide">

            <img-sizes
              :public-path="PUBLIC_REMOTE"
              :img="slide.image"
              sizes=""
              :width="slide.fullscreen.width"
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>

    <btn-close
      name="close"
      class="btn-close--yellow btn-close--l"
      @click="$emit('close')"
    />
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
