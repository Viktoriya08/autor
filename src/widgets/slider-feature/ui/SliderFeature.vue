<script setup lang="ts">
  // import gsap from 'gsap'
  // import { ScrollTrigger } from 'gsap/ScrollTrigger'
  // import { dataSlides, sourcesImg } from '../data/data'
  // import type Lenis from 'lenis'
  import { useSliderFeature } from '../model/useSliderFeature'
  import type { SlideData } from '../model/types'

  const data = await useAPI<SlideData[]>('api/v1/main/animation_slider')

  const { $lenis } = useNuxtApp()
  const { $gsap } = useNuxtApp()
  const { stateSlider, activateSlide, initObserver, setSlideAnimation } = useSliderFeature(data?.value?.length || 0)

  // const scroll: Lenis | undefined = inject('lenis')
  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const isTrustedEvent: Ref<boolean> | undefined = inject('isTrustedEvent')
  const slider = useTemplateRef('slider')
  const slides = useTemplateRef('slides')
  // let observer: Observer

  watch(
    () => stateSlider.activeSlide,
    () => {
      if (typeViewport && typeViewport.value === 'desktop') {
        if (!isTrustedEvent.value) {
          $lenis?.stop()
          scrollObserver.enable()
        }
      }
    }
  )

  onMounted(() => {
    if (typeViewport && typeViewport.value === 'desktop') {
      if(slider.value && $lenis) {
        initObserver(slider.value, $lenis)
      }

      if (slides.value) {
        setSlideAnimation(slides.value)
        activateSlide(0)
      }
    } else {
      if (!slides.value) {
        return
      }

      slides.value.forEach((slide, index) => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: `top center`,
            end: 'bottom top',
            scrub: true,
            onEnter: () => {
              stateSlider.activeSlide = index
            },
            onLeaveBack: () => {
              stateSlider.activeSlide = index - 1
            }
          },
        })
      })
    }
  })
</script>

<template>
  <div
    id="q"
    ref="slider"
    :class="cls['slider-feature']"
    data-switch-theme="dark-promo">

    <!-- :id="item.id" - если нет из меню прокрутки к слайду, то не нужен -->
    <div
      v-for="item, index in data"
      :key="index"
      ref="slides"
      :class="[cls['slide'], { [cls['is-active']]: (index === stateSlider.activeSlide) }]"
    >
      <CardFeature
        :class="{'is-active': (index === stateSlider.activeSlide)}"
        :heading="item.title"
        :title="{
          default: item.title_to_text,
          mobile: item.title_to_text_mobile
        }"
        :img="item.image"
        :link="item.link"
        :text="{
          default: item.text,
          mobile: item.text_mobile
        }"
        :params="item.parametrs"
      />
    </div>

    <div :class="cls.thumbs">
      <Thumb
        v-for="item, index in data"
        :key="index"
        :class="{'is-active': (index === stateSlider.activeSlide)}"
        :text="item.name"
        :img="item.small_image_80[0]"
        :img-webp="item.small_image_80[1]"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
