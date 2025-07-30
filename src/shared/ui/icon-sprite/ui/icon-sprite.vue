<script setup lang="ts">
  import type { NuxtSvgSpriteSymbol } from '#nuxt-svg-sprite/runtime'

  defineProps<{
    icon: string
  }>()
</script>

<template>
  <SpriteSymbol
    :name="(icon as NuxtSvgSpriteSymbol)"
    class="icon"
    aria-hidden="true"
  />
</template>

<style lang="scss">
  @import './style';
</style>
