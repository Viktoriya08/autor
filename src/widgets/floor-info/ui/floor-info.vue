<script setup lang="ts">
  import { useFloorInfo } from '../model/useFloorInfo'

  defineProps<{
    data: any
  }>()

  const { floor, floorInfo } = useFloorInfo()
  const features = useTemplateRef('features')
  const title = useTemplateRef('title')

  onMounted(() => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline()

    watch(
      () => floor.value.index,
      (currFloor, prevFloor) => {
        const dir = prevFloor < currFloor ? 1 : -1

        tl.clear()

        tl
          .to(title.value, {opacity: 0, y: `${25 * dir}%`, duration: 0.2})
          .to(features.value, {opacity: 0, duration: 0.2, onComplete: () => {
            floorInfo.value = floor.value.index
          }}, "<")
          .to(title.value, {opacity: 0, y: `${-25 * dir}%`, duration: 0})
          .to(features.value, {opacity: 0, duration: 0}, "<")
          .to(title.value, {opacity: 1, y: '0%', duration: 0.2, delay: 0})
          .to(features.value, {opacity: 1, duration: 0.3, ease: 'power2.inOut'}, "<")
      }
    )
  })
</script>

<template>
  <div :class="[cls['floor-info'], {[cls['is-active']]: floor.isActive}]">
    <div :class="cls['floor-info__title']">
      <span ref="title">{{ floor.index + 2 }}</span>
      <span :class="cls['floor-info__subtitle']">этаж</span>
    </div>

    <div ref="features" :class="cls['floor-info__features']">
      <div
        v-for="feature, key in data[floor.index].rooms"
        :key="key"
        :class="[cls['floor-info__feature'], {[cls['is-disabled']]: feature.disabled}]">

          <div :class="cls['floor-info__feature-icon']">
            {{ key }}
            <!-- {{ feature.label }} -->
            <!-- <span class="visually-hidden">{{ feature.name }}</span> -->
          </div>

          <div :class="cls['floor-info__feature-text']">
            <span>{{ feature.count }}</span>
            <span>{{ feature.min_price }}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
