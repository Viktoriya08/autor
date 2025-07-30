<script setup lang="ts">
  import { BASE_URL } from '@/shared/config';
  const props = defineProps<{
    img?: string
    activeId?: string
  }>()

  const image = useTemplateRef('image')

  onMounted(() => {
    if (!image.value) {
      return
    }

    const path = image.value.querySelector(`svg [data-name="${props.activeId}"]`)
    path?.classList.add('is-active')
  })
</script>

<template>
  <div :class="cls['minimap']">
    <div :class="[cls['tooltip'], cls['tooltip--right']]">
      <span :class="cls['tooltip__icon']">
        <icon-sprite icon="minimap-mount" />
      </span>

      <div :class="cls['tooltip__popup']">
        <span>горы</span>
      </div>
    </div>

    <div
      v-if="img"
      ref="image"
      :class="cls['minimap__home']"
      v-html="img"
    />

    <img
      v-else
      :src="`${BASE_URL}/image/minimap/home.svg`"
      alt="план этажа"
      :class="cls['minimap__home']"
    >

    <div :class="[cls['tooltip'], cls['tooltip--left']]">
      <span :class="cls['tooltip__icon']">
        <icon-sprite icon="minimap-sea" />
      </span>

      <div :class="cls['tooltip__popup']">
        <span>море</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
