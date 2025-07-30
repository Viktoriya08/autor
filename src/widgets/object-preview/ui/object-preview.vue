<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  import { dataPreview, visibilityPreview } from '../store'

  const title = useTemplateRef('title')
  const square = useTemplateRef('square')
  const img = useTemplateRef('img')
  const squareValue = useTemplateRef('square_value')

  onMounted(() => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline()

    watch(visibilityPreview, (value) => {
      if (value) {
        $gsap.to([title.value, square.value, img.value], {opacity: 1, duration: 0.3})
      } else {
        $gsap.to([title.value, square.value, img.value], {opacity: 0, duration: 0.3})
      }
    })

    watch(
      () => dataPreview.value.index,
      (index, prevIndex) => {
        const dir = prevIndex < index ? 1 : -1

        tl.clear()

        tl
          .to(title.value, {opacity: 0, x: `${50 * dir}%`, duration: 0.3, onComplete: () => {
            if (title.value) {
              title.value.innerText = `№ ${dataPreview.value.name}`
            }
          }})
          .to([square.value, img.value], {opacity: 0, duration: 0.3, onComplete: () => {
            if (squareValue.value) {
              squareValue.value.innerText = dataPreview.value.square
            }

            if(img.value) {
              img.value.setAttribute('src', `${PUBLIC_REMOTE}${dataPreview.value.image}`)
            }
          }}, "<")
          .to(title.value, {opacity: 0, x: `${-50 * dir}%`, duration: 0})
          .to(title.value, {opacity: 1, x: '0%', duration: 0.3, delay: 0.1})
          .to([square.value, img.value], {opacity: 1, duration: 0.3, delay: 0.1}, "<")
      }
    )
  })

  onUnmounted(() => {
    visibilityPreview.value = false
  })
</script>

<template>
  <div :class="[cls['object-preview'], {[cls['is-active']]: visibilityPreview}]">
    <p ref="title" :class="cls['title']" />

    <picture :class="cls['object-preview__img']">

      <img
        v-if="dataPreview.image"
        ref="img"
        src=""
        alt="планировка апартаментов"
      >
    </picture>

    <p ref="square" :class="cls['square']">
      <span ref="square_value" :class="cls['square__value']" />
      <span :class="cls['square__unit']">м²</span>
    </p>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
