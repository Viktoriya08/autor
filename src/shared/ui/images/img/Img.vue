<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  import type { IImg } from './types'

  const props = defineProps<IImg>()
  const path = `${BASE_URL}/${props.path}/${props.name}`
</script>

<template>
  <picture>
    <template v-for="source of sources">
      <source
        v-if="webp"
        :media="source.media"
        :srcset="`${path}-${source.size}.webp ${source.size}w, ${path}-${source.size * 2}.webp ${source.size * 2}w`"
        type="image/webp"
      >
      
      <source
        :media="source.media"
        :srcset="`${path}-${source.size}.${ext} ${source.size}w, ${path}-${source.size * 2}.${ext} ${source.size * 2}w`"
        type="image/jpg">
    </template>

    <img class="" :src="`${path}-${fallback}.${ext}`" :alt="alt" :width="width" :height="height" :loading="loading">
  </picture>
</template>
