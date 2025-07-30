<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    alt?: string,
    link?: string,
    title?: string,
    path768?: string,
    path1536?: string,
    path1920?: string,
    path3840?: string,
    pathWebp768?: string,
    pathWebp1536?: string,
    pathWebp1920?: string,
    pathWebp3840?: string,
  }>()
</script>

<template>
  <div class="card-construction">
    <picture class="card-construction__img">
      <source
        media="(max-width: 1279px) and (orientation: portrait)"
        :srcset="`${PUBLIC_REMOTE}${pathWebp768} 768w, ${PUBLIC_REMOTE}${pathWebp1536} 1536w`"
        type="image/webp"
      >
      <source
        :srcset="`${PUBLIC_REMOTE}${path1920} 1920w, ${PUBLIC_REMOTE}${path3840} 3840w`"
        type="image/jpg">

      <img class="" :src="`${PUBLIC_REMOTE}${path1920}`" :alt="alt" width="1115" height="600" loading="lazy">
    </picture>

    <div class="card-construction__decor">
      <icon-sprite icon="plus"/>
    </div>

    <NuxtLink :to="link" :title="`подробнее `+title" class="card-construction__link"/>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
